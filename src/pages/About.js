export default function About() {
  return (
    <section className="flex justify-center px-4 pt-8 pb-48 md:pb-24">
      <div className="w-full max-w-screen-md space-y-6">
        <div>
          <h1 className="font-sans text-3xl tracking-wide">
            Petros Chantzopoulos
          </h1>
          <h3 className="pt-2 font-serif text-xl italic tracking-wide text-gray-700">
            – Strategic Digital Product Designer
          </h3>
        </div>

        <div className="space-y-4 text-lg leading-relaxed tracking-wide text-gray-800">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
            corporis quos at, molestias pariatur vero non qui suscipit minima
            provident nesciunt dignissimos libero odio porro. Voluptas
            laboriosam placeat odio!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil hic
            corporis quos at, molestias pariatur vero non qui suscipit minima
            provident nesciunt dignissimos libero odio porro. Voluptas
            laboriosam placeat odio!
          </p>
          <p>
            Due to NDA restrictions, I’m unable to showcase my professional work
            in the public domain. —{" "}
            <a
              href="mailto:petros.chantz@gmail.com"
              className="underline hover:text-black"
            >
              request portfolio
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
