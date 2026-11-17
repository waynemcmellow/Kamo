
export default function Testimonial() {
  return (
    <section
      className="flex min-h-[300px] w-full items-center justify-center bg-white px-6 py-20 md:min-h-[320px]"
      id="testimonial"
    >
      <div className="mx-auto max-w-[850px] text-center">

        
        <div className="mb-3 font-serif text-3xl font-bold leading-none text-[#a9cbb3]">
          “
        </div>

        
        <h2 className="font-serif text-[24px] font-bold leading-[1.15] tracking-[-0.7px] text-[#202a35] md:text-[34px]">

          Kamohelo has that rare ability to see the

          <br className="hidden md:block" />

          <span className="italic text-green-700">
            whole picture
          </span>

          {" "}while never losing sight of the details

          <br className="hidden md:block" />

          that make the work sing.

        </h2>

        
        <div className="mt-5">

          <p className="text-[9px] font-bold text-[#202a35]">
          Thompson Dondo
          </p>

          <p className="mt-1 text-[8px] text-gray-400">
            Founder & CEO, Impala Car Rental
          </p>

        </div>

      </div>
    </section>
  );
}
