import { lazy, Suspense, useEffect, useState } from "react";

// General imports
import Navbar from "@components/sections/common-sections/Navbar";
import FooterSection from "@components/sections/common-sections/FooterSection";
import PageLoader from "@components/sections/common-sections/PageLoader";
import { supabase } from "@lib/supabaseClient";

// Lazy load section for performance
const FaqSection = lazy(
  () => import("@/components/sections/faqs-sections/FaqSection"),
);

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

  // 🔵 Page-level loading: whole Q&A page is basically this content
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
      {/* Suspense is only for code-splitting the section component */}
      <Suspense fallback={<PageLoader />}>
        <FaqSection faqs={faqs} errorMsg={errorMsg} />
      </Suspense>
      <FooterSection />
    </>
  );
};

export default Faqs;
