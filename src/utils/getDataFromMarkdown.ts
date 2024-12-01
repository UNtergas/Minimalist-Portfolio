"use server"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {MarkdownData,MarkdownFrontMatter} from "../types";




export const getMarkdownData = async<T = MarkdownFrontMatter> (fileDir: string): Promise<MarkdownData<T>[]> => {
  const portfolioDir = path.join(process.cwd(), 'content', fileDir);
  const files = fs.readdirSync(portfolioDir);

  return files.map((filename) => {
    const filePath = path.join(portfolioDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontMatter: data as T,
      content,
    };
  });
};

export const getSingleMarkdownData = async <T = MarkdownFrontMatter>(fileDir: string, slug: string): Promise<MarkdownData<T>> => {
  const filePath = path.join(process.cwd(), 'content', fileDir, `${slug}.md`); // Directly target the file based on the slug

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontMatter: data as T,
    content,
  };
};
