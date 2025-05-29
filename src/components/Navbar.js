import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      className={`flex items-center h-16 px-5 gap-4 ${
        isHome ? "justify-end" : "justify-between"
      }`}
    >
      {!isHome && (
        <Link to="/" className="text-lg">
          Petros Chantzopoulos
        </Link>
      )}

      <div className="flex gap-4">
        <a
          href="mailto:petros.chantz@gmail.com?subject=Request%20for%20portfolio%20&body=Hey%20Petros%21%20I%20checked%20your%20website%20and%20I'm%20interested%20in%20viewing%20your%20portfolio."
          className="btn-links"
        >
          email
        </a>

        <a
          href="https://www.linkedin.com/in/petroschantz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 btn-links"
        >
          linkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
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
