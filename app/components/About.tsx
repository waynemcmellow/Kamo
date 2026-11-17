
const stats = [
  {
    number: "1+",
    label: "Years creating",
  },
  {
    number: "15+",
    label: "Projects shaped",
  },
  {
    number: "95%",
    label: "All in, always",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#e8f5ed] px-6 py-12 md:px-[4.7%] md:py-10"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10">

        
        <div className="relative mx-auto flex h-[230px] w-[60%] items-end justify-center overflow-hidden rounded-[15px] bg-[#a9cbb3] md:h-[228px]">

          
          <div className="relative flex h-[210px] w-[90%] flex-col items-center rounded-t-[80px] border border-[#39434d] bg-[#202a35] px-5 pt-10 text-center md:h-[210px]">

          
            <div className="absolute inset-[10px] rounded-t-[70px] border border-white/10" />

            <div className="relative z-10">

              <p className="text-[6px] font-bold tracking-[2px] text-[#b4d6bf]">
                HELLO, I'M
              </p>

              <h2 className="mt-2 font-serif text-[25px] font-bold leading-[0.85] text-white">
                Kamohelo
                <br />
                <span className="italic">Sebata.</span>
              </h2>

              <div className="mx-auto mt-4 h-px w-16 bg-[#718a7c]/60" />

              <p className="mt-3 text-[6px] leading-[1.8] text-gray-300">
                Curious mind. Clear thinker.
                <br />
                Unapologetic believer in better ideas.
              </p>

            </div>

          </div>

          
          <div className="absolute bottom-12 right-0 z-20 flex h-12 w-12 rotate-[7deg] items-center justify-center rounded-lg bg-white shadow-sm">
            <span className="text-2xl text-green-700">
              ✦
            </span>
          </div>

        </div>

        
        <div className="flex flex-col justify-center">

          <p className="mb-3 text-[8px] font-bold tracking-[2px] text-green-700">
            A LITTLE ABOUT ME
          </p>

          <h2 className="font-serif text-[38px] font-bold leading-[0.95] tracking-[-1.5px] text-[#202a35] md:text-[37px] lg:text-[43px]">

            Curious by nature.

            <br />

            <span className="italic">
              Strategic by choice.
            </span>

          </h2>

         
          <p className="mt-4 max-w-[430px] text-[10px] leading-[1.8] text-gray-500">
            I believe great marketing starts with paying attention—to
            people, culture, and the small shifts that signal something
            bigger.
          </p>

         
          <p className="mt-3 max-w-[430px] text-[10px] leading-[1.8] text-gray-500">
            My approach blends sharp strategic thinking with creative
            instinct. The result? Work that feels human, sounds
            distinctive, and moves the numbers that matter.
          </p>

         
          <div className="mt-6 grid grid-cols-3 border-t border-[#d3e5d9] pt-4">

            {stats.map((stat) => (
              <div key={stat.label}>

                <h3 className="font-serif text-xl font-bold text-green-700">
                  {stat.number}
                </h3>

                <p className="mt-1 text-[8px] text-gray-500">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
