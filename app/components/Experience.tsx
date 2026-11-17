
const services = [
  "STRATEGY",
  "CONTENT",
  "SOCIAL",
  "PERFORMANCE",
  "ANALYTICS",
];

export default function Experience() {
  return (
    <section
      id="services"
      className="flex min-h-14 flex-wrap items-center justify-between gap-4 border-t border-gray-200 bg-white px-6 py-4 md:px-[7.5%]"
    >
      {services.map((service, index) => (
        <span
          key={service}
          className={`text-[9px] font-bold tracking-[2px] ${
            index === 0
              ? "text-green-800"
              : "text-gray-400"
          }`}
        >
          {service}
        </span>
      ))}
    </section>
  );
}
