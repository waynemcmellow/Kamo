
const projects = [
  {
    id: ".",
    category: "VICTORIA FALLS DISTILLING CO. · STRATEGY · CONTENT",
    title: "Botanical Wonderland – Victoria Falls Distilling Co. | Digital Marketing Strategy.",
    result: "+184%",
    metric: "launch engagement",
    image:
      "./Distilling.co.jpeg",
  },
  {
    id: "",
    category: "EDGARS · CAMPAIGN · PERFORMANCE",
    title: "Edgars Stores Limited | Paid Advertising Campaign",
    result: "3.2×",
    metric: "organic reach",
    image:
      "./edgars.jpeg",
  },
  {
    id: "",
    category: "IMPALA · STRATEGY · CAMPAIGN",
    title: "Impala Car Rental | Email Marketing Campaign",
    result: "−41%",
    metric: "cost per lead",
    image:
      "./impala.jpeg",
  },
];

function ProjectArtwork({ id, image }: { id: string; image: string }) {
  return (
    <div
      className={`relative h-[180px] overflow-hidden rounded-[18px] ${
        id === "Victoria Falls Distilling Co."
          ? "bg-[#dcefe3]"
          : id === "edgars"
          ? "bg-[#d9e0d5]"
          : "bg-[#e6f0e9]"
      }`}
    >
      <img
        src={image}
        alt={`${id} project preview`}
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {id === "Victoria Falls Distilling Co." && (
        <>
          <div className="absolute -right-7 -top-12 h-32 w-32 rounded-full bg-green-800" />

          <div className="absolute bottom-[-38px] left-5 h-28 w-28 rounded-full border-[12px] border-[#a6cbb0]" />

          <div className="absolute left-1/2 top-1/2 flex h-[105px] w-[90px] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] flex-col items-center justify-center rounded-2xl bg-white shadow-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-800">
              <div className="h-3 w-3 rounded-full border border-green-500" />
            </div>

            <h3 className="mt-2 font-serif text-xl font-bold text-[#27333b]">
              Distilling
            </h3>

            <p className="mt-1 text-[5px] font-bold tracking-[2px] text-green-700">
              LIVE IN BALANCE
            </p>
          </div>
        </>
      )}

      
      {id === "edgars" && (
        <>
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#cbd5ca]" />

          <span className="absolute left-7 top-7 font-serif text-6xl text-[#b8cbbb]">
            EDGARS
          </span>

          <div className="absolute left-1/2 top-1/2 flex h-[115px] w-[82px] -translate-x-1/2 -translate-y-1/2 rotate-[6deg] flex-col items-center justify-center rounded-[45px_45px_18px_18px] bg-[#202b36] shadow-md">
            <div className="absolute inset-2 rounded-[38px_38px_12px_12px] border border-gray-500" />

            <div className="relative text-center text-white">
              <p className="text-[6px] tracking-[3px]">Falls</p>

              <span className="my-2 block font-serif text-xl">/</span>

              <h3 className="font-serif text-lg">Live</h3>

              <p className="mt-2 text-[5px] tracking-[1px] text-gray-400">
                 MOMENTS
              </p>
            </div>
          </div>
        </>
      )}

      
      {id === "impala" && (
        <>
          <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-green-800" />

          <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border-[9px] border-[#a9cbb3]" />

          <div className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="font-serif text-sm font-bold text-green-700">
                impala.
              </span>

              <span className="text-[8px] text-green-700">●●</span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item}>
                  <div className="h-4 rounded-sm bg-[#e5f3e9]" />
                  <div className="mt-1 h-3 rounded-sm bg-green-800" />
                </div>
              ))}
            </div>

            <p className="mt-3 text-[5px] tracking-[2px] text-gray-400">
              GROWTH THAT ADDS UP
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="selected-work"
      className="min-h-screen bg-white px-5 py-12 md:px-[7.5%] md:py-16"
    >
      
      <div className="mb-8 flex flex-col justify-between gap-6 md:mb-10 md:flex-row md:items-end">

        <div>
          <p className="mb-3 text-[9px] font-bold tracking-[3px] text-green-700">
            SELECTED WORK
          </p>

          <h1 className="font-serif text-5xl font-bold leading-[0.88] tracking-[-2px] text-[#202a32] md:text-[54px]">
            Work that made
            <br />
            <span className="italic">a difference.</span>
          </h1>
        </div>

        <p className="max-w-[230px] text-[11px] leading-5 text-gray-500 md:mb-1">
          A selection of strategic and creative projects built to
          connect with real people—and deliver meaningful results.
        </p>
      </div>

      
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-5">

        {projects.map((project, index) => (
  <article
    key={`${project.id}-${index}`}
    className={`group ${
      index === 1 ? "md:mt-8" : ""
    }`}
  >
            {/* PROJECT IMAGE / ARTWORK */}
            <ProjectArtwork id={project.id} image={project.image} />

            {/* CATEGORY AND ARROW */}
            <div className="mt-3 flex items-center justify-between gap-2">
              <p className="text-[8px] font-bold tracking-[1.5px] text-green-700">
                {project.category}
              </p>

              <button
                aria-label={`View ${project.id} project`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-sm text-gray-600 transition duration-300 group-hover:border-green-700 group-hover:bg-green-800 group-hover:text-white"
              >
                ↗
              </button>
            </div>

            {/* PROJECT TITLE */}
            <h2 className="mt-1 max-w-[280px] font-serif text-[17px] font-bold leading-[1.1] text-[#28313a]">
              {project.title}
            </h2>

            {/* PERFORMANCE RESULT */}
            <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
              <span className="text-sm font-bold text-green-800">
                {project.result}
              </span>

              <span className="text-[9px] text-gray-400">
                {project.metric}
              </span>
            </div>
          </article>
        ))}

      </div>
    </section>
  );
}
