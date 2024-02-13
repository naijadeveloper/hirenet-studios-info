export default function AboutSection() {
  return (
    <section id="about" className="relative pt-24 px-4 pb-36 overflow-hidden">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center md:py-16">
        <button className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm rounded-full bg-orange-900 text-orange-300 hover:bg-orange-800">
          <span className="text-xs bg-orange-600 rounded-full text-orange-100 font-bold tracking-wider px-4 py-1.5 me-3 max-md:hidden">
            Attention
          </span>{" "}
          <span className="text-sm font-medium max-md:pl-2">
            Our new movie, <b>Ile Ayo</b>, will be available on prime soon!
          </span>
          <svg
            className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          We are HireyNet Studios
        </h2>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-300">
          Here at HireyNet Studios, we focus on bringing the imagination to
          reality, storytelling through videos and pictures, capturing the
          moment in all it's splendor. Let us tell your story.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-orange-100 rounded-md bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-900">
            Hire us
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <button className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-md border focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
            Learn more
          </button>
        </div>
      </div>
      {/* wavy divider */}
      <div className="absolute bottom-0 left-0 overflow-hidden w-full rotate-180">
        <svg
          className="relative block [width:calc(100%+1.3px)] h-[183px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-primary"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-primary"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>
      {/* divider end */}
    </section>
  );
}
