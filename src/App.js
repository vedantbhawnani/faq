import FAQ from "./components/FAQ";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [data, setdata] = useState([
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
    {
      id: 2,
      question: "How many programmers does it take to change a light bulb??",
      answer: "None, we don't solve hardware problems.",
      open: false,
    },
    {
      id: 2,
      question: "How many programmers does it take to change a light bulb??",
      answer: "None, we don't solve hardware problems.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setdata(
      data.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section>
      <Header />
      <div className="faqs">
        {data.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </section>
  );
}
