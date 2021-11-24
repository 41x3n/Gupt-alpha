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
      a1: "tokenora is a community-first crypto initiative that aims to bring together crypto enthusiasts from all walks of life. whether you are a professional crypto maniac or someone who is following their curiosity, we want to serve them all.",
    },
    {
      id: 2,
      q1: "What end-to-end encryption?",
      a1: `our mission is simple - helping everyone understand about crypto currency and everything that relates to it. \n
    
    we created tokenora because we believe decentralisation is the ultimate future, and to get everyone on board with it, we have to make ourselves familiar with it first. \n
    at tokenora, we play the zero sum game. everyone grows. and that's what makes us special.`,
    },
    {
      id: 3,
      q1: "How can you use gupt?",
      a1: "you can start by typing in your email and reserving a username.",
    },
    {
      id: 4,
      q1: "Is this another social media app or something?",
      a1: "Tokenora is a community-first crypto initiative that aims to bring together crypto enthusiasts from all walks of life. whether you are a professional crypto maniac or someone who is following their curiosity, we want to serve them all.",
    },
  ];
  return (
    <div
      id="faq"
      className="d-flex flex-column align-items-center"
      style={{ margin: "0 368px", width: "800px" }}
    >
      <h5>FAQs</h5>
      {faqs.map((i) => {
        return (
          <div
            key={i.id}
            className={`p-3 m-1 col-sm-2 col-md-9 col-sm-1 color-CECDE1 cursor-pointer ${
              faq === i.id ? "Opend" : "Not Opened"
            }`}
            onClick={() => setFaq(faq === i.id ? "" : i.id)}
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
