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
          <a
            {...props}
            className="text-xl font-normal font-primary leading-[30px] text-secondary-primary hover:bg-primary"
            target="_blank"
          />
        ),
        img: ({ node, ...props }) => (
          <Image
            {...props}
            className="w-full h-[430px] my-4 object-cover"
            width="430"
            height="430"
          />
        ),
        h1: ({ node, ...props }) => (
          <h1 {...props} className="text-3xl font-bold my-1 font-primary" />
        ),
        h2: ({ node, ...props }) => (
          <h2
            {...props}
            className="mt-12 text-[#222823] text-[32px] font-semibold font-primary capitalize"
          />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-xl font-bold my-1 font-primary" />
        ),
        p: ({ node, ...props }) => (
          <p
            {...props}
            className=" text-[#222823] text-xl mt-6 font-normal font-primary leading-[30px]"
          />
        ),
        ul: ({ node, ...props }) => (
          <ul
            {...props}
            className=" text-[#222823] text-xl font-normal font-primary leading-[30px] list-disc ml-8 mt-6"
          />
        ),
        li: ({ node, ...props }) => (
          <li
            {...props}
            className=" text-[#222823] text-xl font-normal font-primary leading-[30px]"
          />
        ),
      }}
    />
  );
};

export default RichTextRender;
