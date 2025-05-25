import Accordion from "../components/Accordion";

const messages = [
  "Message 1",
  "Message 2",
  "Message 3",
  "Message 4",
  "Message 5",
  "Message 6",
];

export default function DesignProcess() {
  return (
    <div>
      {/* <div className="w-full h-[600px]"></div> */}
      <div className="flex pt-8 pb-52">
        <div className="container"></div>
        <div className=" w-max">
          <div className="grid grid-cols-3 gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="relative group rounded h-[250px] bg-[#D9D9D9] shadow-[0_8px_30px_0_rgba(0,0,0,0.06)]"
              >
                <div className="absolute inset-0 flex items-center justify-center text-lg font-medium text-white transition opacity-0 bg-black/60 group-hover:opacity-100">
                  {msg}
                </div>
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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
        <div className="container"></div>
      </div>
    </div>
  );
}
