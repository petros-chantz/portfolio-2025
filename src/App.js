import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";

const markdown = `
  # Blog Title

  Hello world from markdown!

  - Item 1
  - Item 2

  Here is some \`inline code\`.

  [Visit OpenAI](https://openai.com)
`;

function Blog() {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

function Home() {
  return <div className="text-red-300">Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
