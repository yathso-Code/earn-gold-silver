import React, { useState } from "react";
import "./FAQ.css"; // import css

const faqs = [
  {
    question: "What is Gold & Silver saving?",
    answer: "It is a digital saving scheme where you can buy and save gold or silver in small quantities securely."
  },
  {
    question: "Is my investment safe?",
    answer: "Yes, your investment is 100% secured with trusted vault partners and backed by real physical gold & silver."
  },
  {
    question: "How can I withdraw?",
    answer: "You can sell your gold or silver anytime or request delivery of physical assets depending on the plan."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No hidden charges. All charges, if applicable, will be transparently shown during the transaction."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq_container">
      <h1 className="faq_title">Frequently Asked Questions</h1>
      <div className="faq_list">
        {faqs.map((item, index) => (
          <div key={index} className={`faq_item ${openIndex === index ? "open" : ""}`}>
            <div className="faq_question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="faq_answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
