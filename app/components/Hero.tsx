import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="work"
      
      className="hero-grid relative min-h-[520px] overflow-hidden bg-[#f4f7f5] px-6 md:px-[7.5%] py-12 md:py-16"
    >

      
      <div className="absolute right-[-80px] top-10 h-60 w-60 rounded-full bg-[#e4f2e9] opacity-80" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

       
        <div>

          <span className="inline-block rounded-full border border-green-100 bg-white px-3 py-1 text-[9px] font-bold tracking-[2px] text-green-700">
            ✦ DIGITAL MARKETER · STRATEGIST · CREATIVE
          </span>

          <h1 className="mt-6 font-serif text-6xl leading-[0.88] tracking-[-3px] text-[#202a32] md:text-[66px]">

            Ideas that

            <br />

            <span className="font-serif italic text-green-700">
              move
            </span>

            <br />

            people &

            <br />

            brands.

          </h1>

          <div className="mt-6 flex items-center gap-6">

            <p className="max-w-[260px] text-sm leading-6 text-gray-500">
              I'm Kamohelo, a digital marketer crafting meaningful
              brand stories and growth strategies that make an impact.
            </p>

           <Link
             href="https://canva.link/kieie6yatkl7g0i"
              className="flex shrink-0 items-center gap-3 text-xs font-bold text-green-800"
            >
              Explore my work

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-green-600 hover:bg-green-800 hover:text-white transition text-[10px]">
                →
              </span>
            </Link>

          </div>
        </div>

       
        <div className="relative mx-auto flex h-[380px] w-full max-w-[430px] items-center justify-center">

          
          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-[#e5f3e9]" />

          
          <div className="absolute right-6 top-16 flex h-[215px] w-[165px] rotate-[6deg] items-center justify-center rounded-[65px_65px_18px_18px] bg-green-800 shadow-xl">

            <div className="absolute inset-3 rounded-[55px_55px_12px_12px] border border-green-600" />

            <div className="relative text-center text-white">

              <p className="text-[8px] font-bold tracking-[3px]">
                THINK BOLDLY
              </p>

              <h2 className="mt-3 font-serif text-2xl font-bold italic leading-[0.9]">
                Create
                <br />
                differently.
              </h2>

            </div>
          </div>

          
          <div className="absolute right-0 top-10 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#a9cbb3] text-center text-[7px] font-bold tracking-widest text-gray-700">
            STRATEGY
            <br />
            MEETS
            <br />
            CREATIVITY
          </div>

         
          <div className="absolute bottom-12 left-0 z-18 w-[130px] -rotate-17 rounded-xl bg-white p-4 shadow-sm lg:left-26">

            <p className="text-[7px] font-bold tracking-wide text-gray-600">
              ● CAMPAIGN PULSE
            </p>

            <div className="mt-4 flex h-10 items-end gap-1">
              {[12, 18, 23, 17, 27, 33, 39].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-sm bg-[#a8cbb2]"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            <p className="mt-2 text-sm font-bold text-green-700">
              +72.4%
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
