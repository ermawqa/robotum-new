import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FaqSection = ({ faqs, errorMsg }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-container hero-offset font-sans section-dark-primary surface-pattern">
      <div>
        <h2 className="heading heading-h2 font-bold text-center mb-10">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>

        {errorMsg && (
          <div className="text-center text-sm text-red-400 mb-6">
            {errorMsg}
          </div>
        )}

        {!errorMsg && (
          <div className="space-y-8">
            {faqs.map((item, index) => (
              <div key={item.id ?? index} className="space-y-3">
                {/* Question */}
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full text-left text-text1 font-semibold bg-transparent hover:text-accent hover:cursor-pointer transition-colors duration-300 flex items-center justify-between"
                >
                  <span>{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-accent" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-accent" />
                  )}
                </button>

                {/* Answer with smooth sliding animation */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-text2 text-white/80 leading-relaxed mt-2">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

            {faqs.length === 0 && (
              <div className="text-center text-sm text-white/60">
                No FAQs available yet.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
