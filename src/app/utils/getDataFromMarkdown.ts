
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {MarkdownData,MarkdownFrontMatter} from "@/app/types";




export const getMarkdownData = async<T = MarkdownFrontMatter> (fileDir: string): Promise<MarkdownData<T>[]> => {
  'use server'
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
