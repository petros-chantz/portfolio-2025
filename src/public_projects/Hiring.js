import ReactMarkdown from "react-markdown";

const markdown = `
  # Blog Title

  Hello world from markdown!

  - Item 1
  - Item 2

  Here is some \`inline code\`.

  [Visit OpenAI](https://openai.com)
`;

export default function Hiring() {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
