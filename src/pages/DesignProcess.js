import Accordion from "../components/Accordion";

export default function DesignProcess() {
  return (
    <div>
      <div className="w-full h-[600px]"></div>
      <div className="flex pt-8 pb-52">
        <div className="flex-none w-1/5"></div>
        <div className=" w-max">
          <h3 className="font-sans tracking-wide text-2xl/8">
            "Show me, don't tell me."
          </h3>
          <br></br>
          <p className="tracking-wide text-lg/8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
            corporis quos at, molestias pariatur vero non qui suscipit minima
            provident nesciunt dignissimos libero odio porro. Voluptas
            laboriosam placeat odio! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nihil hic corporis quos at, molestias pariatur
            vero non qui suscipit minima provident nesciunt dignissimos libero
            odio porro. Voluptas laboriosam placeat odio!
          </p>
          <br></br>
          <br></br>
          <h3 className="font-sans tracking-wide text-2xl/8">
            The design process is inherently messy but it has an end goal.
          </h3>
          <br></br>
          <p className="tracking-wide text-lg/8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
            corporis quos at, molestias pariatur vero non qui suscipit minima
            provident nesciunt dignissimos libero odio porro. Voluptas
            laboriosam placeat odio! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nihil hic corporis quos at, molestias pariatur
            vero non qui suscipit minima provident nesciunt dignissimos libero
            odio porro. Voluptas laboriosam placeat odio!
          </p>
          <br></br>
          <br></br>
          <h3 className="font-sans tracking-wide text-2xl/8">
            The tools are here to help, not to dictate the process.
          </h3>
          <br></br>
          <p className="tracking-wide text-lg/8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
            corporis quos at, molestias pariatur vero non qui suscipit minima
            provident nesciunt dignissimos libero odio porro. Voluptas
            laboriosam placeat odio! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nihil hic corporis quos at, molestias pariatur
            vero non qui suscipit minima provident nesciunt dignissimos libero
            odio porro. Voluptas laboriosam placeat odio!
          </p>
          <br></br>
          <hr className="my-4 border-t border-gray-300" />
          <br></br>
          <h3 className="font-sans tracking-wide text-2xl/8">FAQ</h3>
          <br></br>
          <Accordion />
        </div>
        <div className="flex-none w-1/5"></div>
      </div>
    </div>
  );
}
