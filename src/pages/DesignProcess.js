import Accordion from "../components/Accordion";

export default function DesignProcess() {
  return (
    <div className="w-full">
      <div className="w-full h-[600px] bg-gray-100" />
      <section className="flex justify-center px-4 pt-8 pb-52">
        <div className="w-full max-w-screen-md space-y-10">
          <div className="space-y-4">
            <h3 className="font-sans text-2xl tracking-wide">
              “Show me, don’t tell me.”
            </h3>
            <p className="text-lg leading-relaxed tracking-wide text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              hic corporis quos at, molestias pariatur vero non qui suscipit
              minima provident nesciunt dignissimos libero odio porro. Voluptas
              laboriosam placeat odio!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-2xl tracking-wide">
              The design process is inherently messy but it has an end goal.
            </h3>
            <p className="text-lg leading-relaxed tracking-wide text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              hic corporis quos at, molestias pariatur vero non qui suscipit
              minima provident nesciunt dignissimos libero odio porro. Voluptas
              laboriosam placeat odio!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-2xl tracking-wide">
              The tools are here to help, not to dictate the process.
            </h3>
            <p className="text-lg leading-relaxed tracking-wide text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              hic corporis quos at, molestias pariatur vero non qui suscipit
              minima provident nesciunt dignissimos libero odio porro. Voluptas
              laboriosam placeat odio!
            </p>
          </div>

          <hr className="border-t border-gray-300" />

          <div className="space-y-4">
            <h3 className="font-sans text-2xl tracking-wide">FAQ</h3>
            <Accordion />
          </div>
        </div>
      </section>
    </div>
  );
}
