import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";
import ReactMarkdown from "react-markdown";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  return (
    <div className="flex pt-8">
      <div className="flex-none w-1/5"></div>
      <div className="w-max">
        <h1 className="font-sans tracking-wide text-2xl/8">
          Petros Chantzopoulos
        </h1>
        <h3 className="pt-2 font-serif italic tracking-wide text-xl/8">
          - strategic digital product designer
        </h3>
        <br></br>
        <br></br>
        <p className="tracking-wide text-lg/8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
          corporis quos at, molestias pariatur vero non qui suscipit minima
          provident nesciunt dignissimos libero odio porro. Voluptas laboriosam
          placeat odio! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Nihil hic corporis quos at, molestias pariatur vero non qui
          suscipit minima provident nesciunt dignissimos libero odio porro.
          Voluptas laboriosam placeat odio!
        </p>
        <br></br>
        <p className="tracking-wide text-lg/8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
          corporis quos at, molestias pariatur vero non qui suscipit minima
          provident nesciunt dignissimos libero odio porro. Voluptas laboriosam
          placeat odio! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Nihil hic corporis quos at, molestias pariatur vero non qui
          suscipit minima provident nesciunt dignissimos libero odio porro.
          Voluptas laboriosam placeat odio!
        </p>
        <br></br>
        <p className="tracking-wide text-lg/8">
          Due to NDA restrictions, I’m unable to showcase my professional work
          in the public domain. -{" "}
          <span>
            <a href="mailto:petros.chantz@gmail.com" className="underline ">
              request portfolio
            </a>
          </span>
        </p>
      </div>
      <div className="flex-none w-1/5"></div>
    </div>
  );
}

function DesignProcess() {
  return (
    <div className="flex pt-8">
      <div className="flex-none w-1/5"></div>
      <div className="w-max">
        <div className=" w-max h-[600px]"></div>
        <h1 className="font-sans tracking-wide text-2xl/8">
          Petros Chantzopoulos
        </h1>

        <br></br>
        <br></br>
        <p className="tracking-wide text-lg/8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
          corporis quos at, molestias pariatur vero non qui suscipit minima
          provident nesciunt dignissimos libero odio porro. Voluptas laboriosam
          placeat odio! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Nihil hic corporis quos at, molestias pariatur vero non qui
          suscipit minima provident nesciunt dignissimos libero odio porro.
          Voluptas laboriosam placeat odio!
        </p>
        <br></br>
        <p className="tracking-wide text-lg/8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
          corporis quos at, molestias pariatur vero non qui suscipit minima
          provident nesciunt dignissimos libero odio porro. Voluptas laboriosam
          placeat odio! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Nihil hic corporis quos at, molestias pariatur vero non qui
          suscipit minima provident nesciunt dignissimos libero odio porro.
          Voluptas laboriosam placeat odio!
        </p>
        <br></br>
        <p className="tracking-wide text-lg/8">
          Due to NDA restrictions, I’m unable to showcase my professional work
          in the public domain. -{" "}
          <span>
            <a href="mailto:petros.chantz@gmail.com" className="underline ">
              request portfolio
            </a>
          </span>
        </p>
      </div>
      <div className="flex-none w-1/5"></div>
    </div>
  );
}

function PageRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/design-process" element={<DesignProcess />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <PageRoutes />
      <Footer />
    </Router>
  );
}

export default App;
