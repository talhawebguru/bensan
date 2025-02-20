import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const RichTextRender = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ node, ...props }) => (
          <a {...props} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" />
        ),
        img: ({ node, ...props }) => (
          <img {...props} className="w-full h-auto my-4" />
        ),
        h1: ({ node, ...props }) => (
          <h1 {...props} className="text-3xl font-bold my-2" />
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props} className="text-2xl font-bold my-2" />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-xl font-bold my-2" />
        ),
        p: ({ node, ...props }) => (
          <p {...props} className="my-2 text-[#222823] text-base font-normal font-primary leading-normal" />
        ),
        ul: ({ node, ...props }) => (
          <ul {...props} className="list-disc ml-8 my-2" />
        ),
        li: ({ node, ...props }) => (
          <li {...props} className="my-1" />
        ),
      }}
    />
  );
};

export default RichTextRender;