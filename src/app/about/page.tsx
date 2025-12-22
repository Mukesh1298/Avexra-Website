import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
