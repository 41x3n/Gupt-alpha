import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
const FAQ = () => {
  const [faq, setFaq] = useState("");
  const [isToggle, seIsToggle] = useState(false);

  const faqs = [
    {
      id: 1,
      q1: "What is gupt exactly?",
      a1: "GUPT",
    },
    {
      id: 2,
      q1: "What end-to-end encryption?",
      a1: `E2E`,
    },
    {
      id: 3,
      q1: "How can you use gupt?",
      a1: "EAF",
    },
    {
      id: 4,
      q1: "Is this another social media app or something?",
      a1: "Wormhole",
    },
  ];
  return (
    <div
      id="faq"
      className="d-flex flex-column align-items-center"
      style={{ width: "800px" }}
    >
      <h5>FAQs</h5>
      {faqs.map((i) => {
        return (
          <div
            key={i.id}
            className={`p-3 m-1 col-sm-2 col-sm-7 co-sm-2 color-CECDE1 cursor-pointer ${
              faq === i.id ? "Opend" : "Not Opened"
            }`}
            onClick={() => setFaq(faq === i.id ? "" : i.id)}
            style={{ background: "#FFC7C9", borderRadius: "10px" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{i.q1}</strong>
              </div>
              <div>
                {faq === i.id ? (
                  <FontAwesomeIcon icon={faMinusCircle} />
                ) : (
                  <FontAwesomeIcon icon={faPlusCircle} />
                )}
              </div>
            </div>
            <div
              className={`pt-3 text-align-left ${
                faq === i.id ? `d-block` : `d-none`
              }`}
            >
              <p className="whitespace-preline">
                <small>{i.a1}</small>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
