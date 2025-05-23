import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`flex items-center h-16 gap-4 px-5 ${
        currentPath !== "/" ? "justify-between" : "justify-end"
      }`}
    >
      {currentPath !== "/" && <p className="text-lg">Petros Chantzopoulos</p>}

      <div className="flex gap-4">
        <a
          href="email"
          target="_blank"
          rel="noopener noreferrer"
          className="h-7 px-5 rounded-[40px] hover:bg-[#e5e7eb] bg-[#F5F5F5] focus:outline-offset-4 focus:outline-[#f5f5f5] font-medium text-sm flex gap-1 items-center justify-center"
        >
          email
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-7 px-5 rounded-[40px] hover:bg-[#e5e7eb] bg-[#F5F5F5] focus:outline-offset-4 focus:outline-[#f5f5f5] font-medium text-sm flex gap-1 items-center justify-center"
        >
          linkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
