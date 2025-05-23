import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full px-6 py-4 font-medium text-left text-gray-800 transition hover:bg-gray-100"
    >
      {title}
      <span className="text-lg">{isOpen ? "-" : "+"}</span>
    </button>
    {isOpen && <div className="px-6 pb-4 text-gray-600">{content}</div>}
  </div>
);

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is Tailwind?",
      content:
        "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
    },
    {
      title: "Is this an accordion?",
      content: "Yes, it is a simple accessible accordion built with React.",
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 overflow-hidden bg-white shadow rounded-xl">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  );
}
