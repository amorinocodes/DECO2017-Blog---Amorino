import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import chalk from "chalk";
import { format } from "date-fns";

const POSTS_DIR = "./posts";
const DIST_DIR = "./dist";

fs.rmSync(DIST_DIR, { recursive: true, force: true });
fs.mkdirSync(DIST_DIR, { recursive: true });

const REQUIRED_FIELDS = ["title", "date"];

function validateFrontMatter(file, data) {
  const missing = REQUIRED_FIELDS.filter((f) => !data[f]);
  if (missing.length > 0) {
    console.error(chalk.red(`❌ ${file} missing front matter fields:`), missing.join(", "));
    process.exit(1);
  }
}

function applyTemplate(template, replacements) {
  let output = template;
  for (const key in replacements) {
    output = output.replaceAll(`{{${key}}}`, replacements[key]);
  }
  return output;
}

const TAG_EMOJI = {
  Wireframes: "📐",
  API: "🔌",
  Design: "🎨",
  Data: "🗃️",
  Planning: "📋",
  WebDesign: "💻",
  SEAblings: "🌊",
  DECO2017: "📚",
};

function getWeekLabel(slug) {
  const match = slug.match(/^Week(\d+)$/i);
  return match ? `Wk ${match[1]}` : "";
}

function getEmoji(tags = []) {
  const tagSet = new Set(tags);
  for (const key of Object.keys(TAG_EMOJI)) {
    if (tagSet.has(key)) return TAG_EMOJI[key];
  }
  return "📝";
}

function buildPostNav(prev, next) {
  let html = '<nav class="post-nav">';
  if (prev) {
    html += `<a href="${prev.slug}.html" class="post-nav-item post-nav-prev">
      <span class="post-nav-label">← Older</span>
      <span class="post-nav-title">${prev.data.title}</span>
    </a>`;
  } else {
    html += '<span class="post-nav-item post-nav-empty"></span>';
  }
  if (next) {
    html += `<a href="${next.slug}.html" class="post-nav-item post-nav-next">
      <span class="post-nav-label">Newer →</span>
      <span class="post-nav-title">${next.data.title}</span>
    </a>`;
  } else {
    html += '<span class="post-nav-item post-nav-empty"></span>';
  }
  html += "</nav>";
  return html;
}

/* Collect all posts */
const allPosts = [];

for (const file of fs.readdirSync(POSTS_DIR)) {
  if (!file.endsWith(".md") || file.startsWith("_")) continue;

  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  validateFrontMatter(file, data);

  const html = marked(content);
  const slug = file.replace(".md", "");

  allPosts.push({ data, html, slug });
}

/* Sort oldest first */
allPosts.sort((a, b) => new Date(a.data.date) - new Date(b.data.date));

/* Render each post with prev/next */
const postTemplate = fs.readFileSync("templates/post.html", "utf8");

for (let i = 0; i < allPosts.length; i++) {
  const { data, html, slug } = allPosts[i];
  const prev = allPosts[i - 1] || null;
  const next = allPosts[i + 1] || null;

  const tagsHtml =
    data.tags?.map((tag) => `<span class="tag">${tag}</span>`).join("") ?? "";

  const page = applyTemplate(postTemplate, {
    title: data.title,
    date: format(new Date(data.date), "yyyy-MM-dd"),
    author: data.author ?? "",
    content: html,
    tags: tagsHtml,
    postNav: buildPostNav(prev, next),
  });

  fs.writeFileSync(`${DIST_DIR}/${slug}.html`, page);
}

/* Render index */
const indexTemplate = fs.readFileSync("templates/index.html", "utf8");
const postListItemTemplate = fs.readFileSync("templates/postListItems.html", "utf8");

const postsHtml = allPosts
  .map((p) => {
    const tagsHtml =
      p.data.tags?.map((tag) => `<span class="tag">${tag}</span>`).join("") ?? "";

    return applyTemplate(postListItemTemplate, {
      slug: p.slug,
      title: p.data.title,
      author: p.data.author ?? "",
      date: format(new Date(p.data.date), "yyyy-MM-dd"),
      summary: p.data.summary ?? "",
      tags: tagsHtml,
      emoji: p.data.emoji ?? getEmoji(p.data.tags),
      week: p.data.week ?? getWeekLabel(p.slug),
      cardClass: p.data.featured ? "card--featured" : "",
    });
  })
  .join("");

const index = applyTemplate(indexTemplate, { postList: postsHtml });
fs.writeFileSync(`${DIST_DIR}/index.html`, index);

fs.cpSync("assets", `${DIST_DIR}/assets`, { recursive: true });

console.log(chalk.green("✔ Build complete"));
