"use client";

import { useState, useRef, useEffect } from "react";

import PageHeader from "@/app/page_sections/header";
import AboutSection from "./page_sections/about";
import ServicesSection from "./page_sections/services";
import CustomersSection from "./page_sections/customers";
import ContactsSection from "./page_sections/contacts";
import PageFooter from "./page_sections/footer";

import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  //# header states
  //about, services, customers, contacts
  const [activeSection, setActiveSection] = useState("");
  const [dropdownBooking, setDropdownBooking] = useState(false);
  const [country, setCountry] = useState("United Kingdom");
  const [countryDropdown, setCountryDropdown] = useState(false);

  const aboutRef = useRef<HTMLElement | null>(null); // about section
  const servicesRef = useRef<HTMLElement | null>(null); // services section
  const customersRef = useRef<HTMLElement | null>(null); // customers section
  const contactsRef = useRef<HTMLElement | null>(null); // contact section

  const { toast } = useToast();

  //toast
  function showToast() {
    toast({
      title: "Ile Ayo Movie",
      description: "Coming Soon! - Friday, February 16, 2024",
    });
  }

  useEffect(() => {
    const sectionElements = [
      aboutRef.current,
      servicesRef.current,
      customersRef.current,
      contactsRef.current,
    ] as HTMLElement[];

    // setting the initial active section
    let current = sectionElements.reduce((res, sectionEl) => {
      if (window.scrollY >= sectionEl?.offsetTop) {
        res = sectionEl?.id;
      }
      return res;
    }, "about");

    setActiveSection(() => current);

    // setting the active section when the user scrolls through page
    window.addEventListener("scroll", function () {
      sectionElements.forEach((sectionEl, index) => {
        if (this.scrollY <= sectionElements[0]?.offsetTop) {
          current = "about";
        }
        if (
          this.scrollY >=
          sectionEl?.offsetTop - sectionEl?.offsetHeight / 2
        ) {
          current = sectionEl?.id;
        } else {
          return;
        }
      });

      setActiveSection(() => current);
    });

    // remove the scroll event
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      onClick={() => {
        setCountryDropdown(false);
        setDropdownBooking(false);
      }}
    >
      <header className="z-30 fixed top-0 w-full max-w-screen-2xl mx-auto">
        <PageHeader
          {...{
            activeSection,
            dropdownBooking,
            setDropdownBooking,
            countryDropdown,
            setCountryDropdown,
            country,
            setCountry,
          }}
        />
      </header>

      <main>
        <AboutSection aboutRef={aboutRef} showToast={showToast} />
        <ServicesSection servicesRef={servicesRef} />
        <CustomersSection customersRef={customersRef} />
        <ContactsSection contactsRef={contactsRef} />
      </main>

      <footer className="relative pt-10 bg-primary">
        <PageFooter />
      </footer>
    </div>
  );
}
