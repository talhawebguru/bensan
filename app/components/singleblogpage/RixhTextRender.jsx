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
        // Allow editors to force a grid using raw HTML in Strapi:
        // <div data-grid="2"> ...images... </div> or <div data-grid="4"> ...images... </div>
        div: ({ node, children, ...props }) => {
          const gridAttr = props?.["data-grid"]; // expected values: "2" or "4"
          if (gridAttr === "2" || gridAttr === "4") {
            const cols = gridAttr === "4" ? 4 : 2;
            const gridClass = cols === 4 ? "md:grid-cols-4" : "sm:grid-cols-2";
            const tileH = cols === 4 ? "h-[220px]" : "h-[330px]";

            return (
              <div className={`my-6 grid grid-cols-1 ${gridClass} gap-4`}>
                {React.Children.map(children, (child, idx) => {
                  if (React.isValidElement(child) && child?.props) {
                    // Try to detect an image-like child (Next/Image or img)
                    const isImg =
                      child.type === Image || // Next/Image
                      child.props?.src; // fallback heuristic

                    if (isImg) {
                      // Clone with fill + object-cover for tiles
                      const cloned = React.cloneElement(child, {
                        fill: true,
                        width: undefined,
                        height: undefined,
                        sizes: cols === 4 ? "(min-width:768px) 25vw, 50vw" : "(min-width:640px) 50vw, 100vw",
                        className: "object-cover",
                        priority: false,
                      });
                      return (
                        <div key={idx} className={`relative w-full ${tileH}`}>
                          {cloned}
                        </div>
                      );
                    }
                  }
                  // Non-image child
                  return <div key={idx}>{child}</div>;
                })}
              </div>
            );
          }
          // Default div rendering
          return <div {...props}>{children}</div>;
        },
        a: ({ node, ...props }) => (
          <a
            {...props}
            className="text-base font-normal font-primary leading-[30px] text-secondary-primary hover:bg-primary"
            target="_blank"
          />
        ),
        img: ({ node, ...props }) => (
          <Image
            {...props}
            className="w-full h-auto my-4 object-contain"
            width={1200}
            height={800}
            sizes="100vw"
          />
        ),
        h1: ({ node, ...props }) => (
          <h1 {...props} className="text-3xl font-bold my-1 font-primary" />
        ),
        h2: ({ node, ...props }) => (
          <h2
            {...props}
            className="mt-10 text-[#222823] text-2xl font-semibold font-primary capitalize"
          />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-xl mt-10  my-1 font-semibold font-primary text-[#222823]" />
        ),
        p: ({ node, children, ...props }) => {
          const rawChildren = Array.isArray(node?.children) ? node.children : [];
          // filter out whitespace text and <br> nodes so two images separated by a line break still count
          const meaningful = rawChildren.filter((c) => {
            if (c?.type === 'text') {
              return (c.value || '').trim().length > 0;
            }
            if (c?.tagName === 'br') return false;
            // some editors wrap images in spans; treat empty spans as ignorable
            if (c?.tagName === 'span' && Array.isArray(c.children)) {
              return c.children.some((cc) => cc?.tagName === 'img');
            }
            return true;
          });
          const imgs = meaningful.filter(
            (c) =>
              c?.tagName === 'img' ||
              (c?.type === 'element' && c?.tagName === 'img') ||
              // handle spans that wrap just an image
              (c?.tagName === 'span' && Array.isArray(c.children) && c.children.every((cc) => cc?.tagName === 'img'))
          );
          const onlyImages = imgs.length > 0 && imgs.length === meaningful.length;

          if (onlyImages) {
            // 1 image: full width at a comfortable fixed height
            if (imgs.length === 1) {
              const img = imgs[0];
              const src = img?.properties?.src || '';
              const alt = img?.properties?.alt || '';
              return (
                <div className="my-6">
                  <div className="relative w-full h-[430px]">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      quality={100}
                      priority={false}
                    />
                  </div>
                </div>
              );
            }

            // 2 images: two-column grid with consistent height tiles
            if (imgs.length === 2) {
              return (
                <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {imgs.map((img, idx) => {
                    const src = img?.properties?.src || '';
                    const alt = img?.properties?.alt || '';
                    return (
                      <div key={idx} className="relative w-full h-[450px]">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                          quality={100}
                          priority={false}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            }

            // Fallback for >2 images: responsive grid
            return (
              <div className="my-6 grid grid-cols-2 gap-4">
                {imgs.map((img, idx) => {
                  const src = img?.properties?.src || '';
                  const alt = img?.properties?.alt || '';
                  return (
                    <div key={idx} className="relative w-full h-[450px]">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 50vw"
                        className="object-cover"
                        quality={100}
                        priority={false}
                      />
                    </div>
                  );
                })}
              </div>
            );
          }

          // Default paragraph rendering
          return (
            <p
              {...props}
              className=" text-[#222823] text-base mt-4 font-normal font-primary leading-[30px]"
            >
              {children}
            </p>
          );
        },
        ul: ({ node, ...props }) => (
          <ul
            {...props}
            className=" text-[#222823] text-base font-normal font-primary leading-[30px] list-disc ml-8 mt-6"
          />
        ),
        li: ({ node, ...props }) => (
          <li
            {...props}
            className=" text-[#222823] text-base font-normal font-primary leading-[30px]"
          />
        ),
      }}
    />
  );
};

export default RichTextRender;
