import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="py-2">
      <div
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="flex items-center justify-between w-full py-4 text-xl font-medium tracking-wide text-left text-gray-800 outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-black"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <MinusIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <PlusIcon className="w-6 h-6 text-gray-800" />
          )}
        </span>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-[500px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <p className="mt-2 text-lg tracking-wide text-gray-700 whitespace-pre-line transition-opacity duration-500">
          {content}
        </p>
      </div>
    </div>
  );
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "How do you justify tough design decisions?",
      content:
        "Tough design decisions are always backed by a combination of user research, business goals, and product constraints. I rely on usability testing, data insights, and clear communication to present the rationale behind my choices.\n\nInstead of defending a design emotionally, I show risks of alternatives and propose prototypes to test assumptions quickly.",
    },
    {
      title: "How do you manage stakeholders?",
      content:
        "Managing stakeholders effectively begins with setting expectations early and maintaining open communication. I focus on understanding each stakeholder’s goals, tailoring how I present updates and design rationale.\n\nI create a collaborative environment where stakeholders become champions, not roadblocks.",
    },
    {
      title: "What do you mean by strategic digital product design?",
      content:
        "Strategic digital product design means thinking beyond the interface. It aligns usability, feasibility, and viability — grounded in real-world context.\n\nIn practice, this can mean identifying underserved segments or uncovering leverage points that drive growth and retention.",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </section>
  );
}
