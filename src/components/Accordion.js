import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div>
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full gap-4 py-4 font-medium tracking-wide text-left text-gray-800 transition text-xl/8"
    >
      {title}
      <span className="text-2xl/8">{isOpen ? "-" : "+"}</span>
    </button>

    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 max-h-screen"
          : "opacity-0 max-h-0 overflow-hidden"
      }`}
    >
      <p className="mt-2 tracking-wide whitespace-pre-line text-lg/8">
        {content}
      </p>
    </div>
  </div>
);

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "How do you justify tough design decisions?",
      content:
        "Tough design decisions are always backed by a combination of user research, business goals, and product constraints. I rely on usability testing, data insights, and clear communication to present the rationale behind my choices. It’s important to demonstrate how each decision aligns with both user needs and long-term vision.\n\nWhen pushback occurs, I invite stakeholders into the decision-making process by framing trade-offs clearly. Instead of defending a design emotionally, I show the risks of alternatives and propose experiments or prototypes to test assumptions quickly.",
    },
    {
      title: "How do you manage stakeholders?",
      content:
        "Managing stakeholders effectively begins with setting expectations early and maintaining open channels of communication. I focus on understanding each stakeholder’s goals and concerns, then tailor how I present updates, roadmaps, or design rationale accordingly. Regular check-ins and visual documentation help keep everyone aligned.\n\nI also try to create an environment of collaboration rather than just sign-off. That means listening actively, incorporating feedback meaningfully, and showing how the design process supports business outcomes. When handled well, stakeholders become champions, not roadblocks.",
    },
    {
      title: "What do you mean by strategic digital product design?",
      content:
        "Strategic digital product design means thinking beyond the interface. It involves understanding the market, user behavior, and business goals to create solutions that are not just beautiful but impactful. It’s a balance of usability, feasibility, and viability — all grounded in real-world context.\n\nIn practice, this could mean identifying underserved user segments, uncovering inefficiencies in a customer journey, or finding design leverage points that increase retention. Strategic design transforms design from a service to a driver of growth and innovation.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
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
