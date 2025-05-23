import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="absolute flex items-center justify-center transform -translate-x-1/2 bottom-8 left-1/2">
      <div className="flex items-center h-10 gap-4 bg-[#F6F6F6] p-5 rounded-[40px] transition delay-150 duration-400 ease-linear hover:-translate-y-1 hover:-translate-x-1 hover:scale-105">
        {[
          ["about", "/"],
          ["design process", "/design-process"],
          ["vision", "/vision"],
        ].map(([title, url]) => (
          <Link
            key={url}
            to={url}
            className={`flex items-center justify-center gap-4 text-lg hover:opacity-100 transition ${
              currentPath === url ? "opacity-100 font-medium" : "opacity-50"
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
