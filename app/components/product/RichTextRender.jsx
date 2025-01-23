import React from "react";

const RichTextRender = ({ content }) => {
  const renderNode = (node, index) => {
    switch (node.type) {
      case "paragraph":
        return <p key={index} className="my-1" >{node.children.map(renderNode)}</p>;
      case "text":
        let text = node.text;
        if (node.bold) {
          text = <strong key={index}>{text}</strong>;
        }
        if (node.underline) {
          text = <u key={index}>{text}</u>;
        }
        return text;
      case "list":
        return (
          <ul key={index}>
            {node.children.map((child, i) => (
              <li className="list-disc mt-1.5 ml-8 text-black !text-base font-normal font-primary capitalize" key={i}>{child.children.map(renderNode)}</li>
            ))}
          </ul>
        );
      case "list-item":
        return <li key={index}>{node.children.map(renderNode)}</li>;
      default:
        return null;
    }
  };

  return <>{content.map(renderNode)}</>;
};

export default RichTextRender;