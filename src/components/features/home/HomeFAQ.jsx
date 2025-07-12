import { useState } from "react";
import { faqs } from "../../../constants/homePageData";

const HomeFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleFAQ = index => {
    setIsOpen(prev => (prev === index ? null : index));
  };

  return (
    <section className="overflow-hidden bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="animate-on-scroll mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Pertanyaan Umum (FAQ)</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Temukan jawaban atas pertanyaan yang paling sering diajukan tentang platform kami.
          </p>
        </div>
        <div id="faq-container" className="animate-on-scroll space-y-4">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item border-b border-gray-200 pb-4 dark:border-gray-700 ${isOpen === index ? "active" : ""}`}
              key={index}
              onClick={() => handleToggleFAQ(index)}
            >
              <div className="faq-question flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                <i className="faq-chevron bx bx-chevron-down text-2xl" />
              </div>
              <div className="faq-answer pt-2 text-slate-600 dark:text-slate-400">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
