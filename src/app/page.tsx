"use client";

import PageHeader from "@/app/page_sections/header";
import AboutSection from "./page_sections/about";
import ServicesSection from "./page_sections/services";
import CustomersSection from "./page_sections/customers";
import ContactsSection from "./page_sections/contacts";
import PageFooter from "./page_sections/footer";

export default function Home() {
  return (
    <>
      <header className="z-30 fixed top-0 w-full max-w-screen-2xl mx-auto">
        <PageHeader />
      </header>
      <main>
        <AboutSection />
        <ServicesSection />
        <CustomersSection />
        <ContactsSection />
      </main>
      <footer className="relative pt-10 bg-primary">
        <PageFooter />
      </footer>
    </>
  );
}
