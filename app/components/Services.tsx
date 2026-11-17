import Link from "next/link";

const services = [
  {
    number: "01",
    id: "brand-strategy",
    href: "https://sebatasamukele488.wixsite.com/kamzy-glow",
    title: "Brand Strategy",
    description:
      "Positioning, audience research, and distinct brand systems that turn attention into lasting affinity.",
    tags: ["RESEARCH", "POSITIONING", "MESSAGING"],
  },
  {
    number: "02",
    id: "content-social",
    href: "https://canva.link/11xe75u60e39tyd",
    title: "Content & Social",
    description:
      "Channel-native ideas and content systems that keep brands relevant, useful, and worth following.",
    tags: ["CONTENT STRATEGY", "SOCIAL", "CREATIVE"],
   
  },
  {
    number: "03",
    id: "growth-marketing",
    href: "https://canva.link/nxjumm59ejdg79s",
    title: "Growth Marketing",
    description:
      "Insight-led campaigns built to acquire the right customers and compound sustainable growth.",
    tags: ["PAID MEDIA", "CAMPAIGNS", "ANALYTICS"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#087442] px-6 py-16 text-white md:px-[7.5%] md:py-24"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.85fr_1.5fr] md:gap-16">

       
        <div className="md:sticky md:top-20 md:h-fit">

          <p className="mb-5 text-[9px] font-bold tracking-[2px] text-[#b0d6bf]">
            WHAT I DO
          </p>

          <h2 className="font-serif text-4xl font-bold leading-[0.95] tracking-[-1.5px] md:text-[43px]">
            Strategy, story
            <br />
            &amp;{" "}
            <span className="italic">
              smart growth.
            </span>
          </h2>

          <p className="mt-5 max-w-[290px] text-[11px] leading-[1.8] text-[#d0e4d7]">
            I connect the dots between insight and execution—
            creating marketing that is clear, relevant, and built
            to perform.
          </p>

        </div>

        
        <div className="border-t border-white/15">

          {services.map((service) => (
            <article
              key={service.number}
              className="grid grid-cols-[22px_1fr] gap-3 border-b border-white/15 py-7 md:grid-cols-[30px_1fr_1fr_32px] md:items-center md:gap-5"
            >

             
              <span className="pt-1 text-[8px] font-medium text-[#b1d3bd]">
                {service.number}
              </span>

              
              <h3
                id={service.id}
                className="font-serif text-[22px] font-bold leading-tight md:text-[21px]"
              >
                {service.title}
              </h3>

              
              <div className="col-start-2 mt-1 md:col-start-auto md:mt-0">

                <p className="max-w-[240px] text-[10px] leading-[1.8] text-[#d0e4d7]">
                  {service.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">

                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 px-2 py-1 text-[6px] font-bold tracking-wide text-white"
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              </div>

              
              <Link
                href={service.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Learn more about ${service.title}`}
                className="col-start-2 mt-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-xs text-white transition-all duration-300 hover:bg-white hover:text-green-800 md:col-start-auto md:mt-0"
              >
               ↗
              </Link>

           </article>
          ))}

        </div>

      </div>
    </section>
  );
}
