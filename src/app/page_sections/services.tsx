export default function ServicesSection({
  servicesRef,
}: {
  servicesRef: React.LegacyRef<HTMLElement> | null;
}) {
  return (
    <section
      ref={servicesRef}
      id="services"
      className="min-h-[500px] bg-primary pt-12 pb-4 px-4 md:px-8"
    >
      <h3 className="relative mx-auto text-center my-4 text-3xl">
        <span className="z-20 relative inline-flex items-center justify-center text-background font-bold bg-orange-300 p-3 rounded-md shadow-2xl">
          Our Services
        </span>
        <div className="absolute top-2/4 w-full h-[5px] bg-orange-300 rounded-lg"></div>
      </h3>

      <p className="mb-8 mt-10 text-xl text-center font-bold lg:text-2xl sm:px-16 lg:px-48 text-orange-100">
        Our services are geared towards your needs and location. Trust us to
        take great care of you.
      </p>

      <ul className="mt-10 space-y-5">
        {/*grid md:grid-cols-2 lg:grid-cols-3 gap-4*/}
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <li
              key={index}
              className="py-6 px-3 rounded-md bg-gray-800 border border-background shadow-xl flex flex-col items-center"
            >
              <div className="mb-3 rounded-full flex items-center justify-center bg-orange-800 w-14 h-14 shadow-xl">
                <svg
                  className="w-7 h-7 text-orange-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5h4.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                </svg>
              </div>
              <h4 className="mb-2 text-2xl text-center font-bold tracking-tight text-orange-300">
                Noteworthy technology acquisitions 2021
              </h4>

              <p className="font-normal text-gray-200 text-center">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <button className="mt-3 inline-flex justify-center items-center py-3 px-4 text-base font-medium text-center text-orange-100 rounded-md bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-900 shadow-xl">
                Read more
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
