import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 z-50 flex items-center justify-center w-full p-8 transform -translate-x-1/2 left-1/2 backdrop-blur-sm bg-white/30">
      <div className="btn-nav">
        {[
          ["about", "/"],
          ["design process", "/design-process"],
          ["vision", "/vision"],
        ].map(([title, url]) => (
          <Link
            key={url}
            to={url}
            className={`flex items-center justify-center gap-4 text-lg hover:opacity-100 transition ${
              currentPath === url ? "opacity-100 font-medium" : "opacity-60"
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}
