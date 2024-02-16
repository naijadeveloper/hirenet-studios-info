import Link from "next/link";

export default function ContactsSection({
  contactsRef,
}: {
  contactsRef: React.LegacyRef<HTMLElement> | null;
}) {
  const socials = ["Facebook", "Twitter", "Instagram", "LinkedIn"];
  return (
    <section
      ref={contactsRef}
      id="contacts"
      className="min-h-[500px] bg-primary pt-12 pb-4 px-4 md:px-8"
    >
      <h3 className="relative mx-auto text-center my-4 text-3xl">
        <span className="z-20 relative inline-flex items-center justify-center text-background font-bold bg-orange-300 p-3 rounded-md shadow-2xl">
          Contacts
        </span>
        <div className="absolute top-2/4 w-full h-[5px] bg-orange-300 rounded-lg"></div>
      </h3>

      <p className="mb-8 mt-10 text-xl text-center font-bold lg:text-2xl sm:px-16 lg:px-48 text-orange-100">
        Reach out to us through any of our social media platforms.
      </p>

      <div className="mt-10 mb-8 flex flex-wrap justify-center gap-6">
        {socials.map((social, index) => (
          <Link
            href="#"
            key={index}
            className="relative w-[150px] h-[150px] p-2 rounded-md bg-gray-800 border border-background shadow-xl flex flex-col items-center justify-center gap-4"
          >
            <img
              src={`${social.toLowerCase()}.svg`}
              alt={social}
              className="w-[80px] h-[80px]"
            />
            <span className="absolute -bottom-3 px-2 rounded-md shadow-2xl bg-orange-300 text-background border border-background font-medium">
              {social}
            </span>
          </Link>
        ))}
      </div>

      <p className="mb-8 mt-20 text-xl text-center font-bold lg:text-2xl sm:px-16 lg:px-48 text-orange-100">
        <span className="font-extrabold text-2xl lg:text-4xl">OR</span> book a
        call with us through{" "}
        <span className="underline underline-offset-4 decoration-4 decoration-orange-300">
          calendly
        </span>{" "}
        right now.
      </p>

      <div className="mt-10 flex justify-center items-center">
        <button className="inline-flex justify-center items-center py-3 px-4 text-xl font-medium text-center text-orange-100 rounded-md bg-orange-800 hover:bg-orange-900 shadow-xl border-2 border-background">
          Book a call
        </button>
      </div>

      <p className="mb-8 mt-16 text-xl text-center font-bold lg:text-2xl sm:px-16 lg:px-48 text-orange-100">
        <span className="font-extrabold text-2xl lg:text-4xl">OR</span> send an{" "}
        <span className="underline underline-offset-4 decoration-4 decoration-orange-300">
          email
        </span>{" "}
        with information about you and, your project and, how we can help.
      </p>

      <div className="mt-10 flex justify-center items-center">
        <div className="w-full max-w-sm p-4 border rounded-md shadow-xl sm:p-6 md:p-8 bg-gray-800 border-background">
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email address
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="border-2 text-base rounded-md outline-none focus:border-background block w-full p-2.5 bg-gray-600 border-gray-500 text-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                How can we help?
              </label>
              <textarea
                name="password"
                id="password"
                className="resize-none border-2 text-base rounded-md outline-none focus:border-background block w-full p-2.5 bg-gray-600 border-gray-500 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center bg-orange-600 hover:bg-orange-700 focus:ring-orange-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
