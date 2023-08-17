import React from "react";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      index={index}
      className={"faq " + (faq.open ? "open" : "")}
      onClick={() => toggleFAQ(index)}>
      <div className="faq-question" index={index}>
        {faq.question}
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div> 
  );
}

export default FAQ;