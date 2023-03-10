import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "pages/posts");

export function getSortedPostsData() {
  // Get file names under /posts
  console.log("postsDirectory: ", postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts.map((post) => {
    return {
      params: {
        ...post,
      },
    };
  });
  // return posts.map((post) => {
  //   return {
  //     params: {
  //       id: post.id.toString(),
  //     },
  //   };
  // });
}

export async function getPostData(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?id=" + id
  );
  const post = await response.json();
  return {
    ...post,
  };
  // const fullPath = path.join(postsDirectory, `${id}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // // Combine the data with the id
  // return {
  //   id,
  //   contentHtml,
  //   ...matterResult.data,
  // };
}
