import { useEffect, useState } from "react";

// General imports
import Navbar from "@components/sections/common-sections/Navbar";
import FooterSection from "@components/sections/common-sections/FooterSection";
import PageLoader from "@components/sections/common-sections/PageLoader";
import { supabase } from "@lib/supabaseClient";

// Normal import instead of lazy
import FaqSection from "@/components/sections/faqs-sections/FaqSection";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.title = "Q&A | RoboTUM";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const loadFaqs = async () => {
      setLoading(true);
      setErrorMsg("");

      const { data, error } = await supabase
        .from("faqs")
        .select("id, question, answer, category, created_at")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error loading FAQs:", error);
        setErrorMsg("Failed to load FAQs. Please try again later.");
      } else {
        setFaqs(data || []);
      }

      setLoading(false);
    };

    loadFaqs();
  }, []);

  // Page-level loading
  if (loading) {
    return (
      <>
        <Navbar />
        <PageLoader />
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <FaqSection faqs={faqs} errorMsg={errorMsg} />
      <FooterSection />
    </>
  );
};

export default Faqs;