import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function CustomersSection() {
  return (
    <section
      id="services"
      className="min-h-[500px] bg-primary pt-12 pb-4 px-4 md:px-8"
    >
      <h3 className="relative mx-auto text-center my-4 text-3xl">
        <span className="z-20 relative inline-flex items-center justify-center text-background font-bold bg-orange-300 p-3 rounded-md shadow-2xl">
          Our Customers
        </span>
        <div className="absolute top-2/4 w-full h-[5px] bg-orange-300 rounded-lg"></div>
      </h3>

      <p className="mb-8 mt-10 text-xl text-center font-bold lg:text-2xl sm:px-16 lg:px-48 text-orange-100">
        Read the testimonies of our cherished customers, those that trust us
        with their needs.
      </p>

      <ul className="mt-10 flex flex-wrap justify-center gap-4">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <li
              key={index}
              className="w-[50%] md:w-[40%] md:max-w-[50%] grow-[1] rounded-md bg-gray-800 px-3 py-6 border border-background shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/images/avatar1.jpg"
                  alt="Bonnie image"
                />
                <h4 className="mb-1 text-xl font-medium text-orange-300">
                  <Link href="#" className="flex gap-x-2">
                    <span>Bonnie Green</span> <FaExternalLinkAlt size={14} />
                  </Link>
                </h4>
                <span className="text-sm text-gray-400">Visual Designer</span>
                <span className="text-base my-2 text-gray-200">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Architecto ex quo dolore deleniti sint quod magni iusto
                  dolores! Mollitia, distinctio ipsum reiciendis ex
                  reprehenderit explicabo modi odit?
                </span>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
