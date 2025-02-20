import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";


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
          <Image {...props} className="w-full h-[500px] my-4 object-contain" width="500" height="500" />
        ),
        h1: ({ node, ...props }) => (
          <h1 {...props} className="text-3xl font-bold my-2 font-primary " />
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props} className="text-2xl font-bold my-2 font-primary " />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-xl font-bold my-2 font-primary " />
        ),
        p: ({ node, ...props }) => (
          <p {...props} className="my-2 text-[#222823] text-base font-normal font-primary leading-normal" />
        ),
        ul: ({ node, ...props }) => (
          <ul {...props} className="list-disc ml-8 my-2 font-primary " />
        ),
        li: ({ node, ...props }) => (
          <li {...props} className="my-1" />
        ),
      }}
    />
  );
};

export default RichTextRender;