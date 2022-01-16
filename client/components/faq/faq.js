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
      a1: "GUPT is an end-to-end file sharing website.",
    },
    {
      id: 2,
      q1: "What is end-to-end encryption?",
      a1: `In an end-to-end encryption system, the only people who can access the data are the sender and the intended recipients(s) - and no one else. Neither hackers nor unwanted third parties can access the encrypted data on the server. In true end-to-end encryption, encryption occurs at the device level. That is, messages and files are encrypted before they leave the phone or computer and isn’t decrypted until it reaches its destination. As a result, hackers cannot access data on the server because they do not have the private keys to decrypt the data. Instead, secret keys are stored with the individual user on their device which makes it much harder to access an individual’s data.`,
    },
    {
      id: 3,
      q1: "How can you use gupt?",
      a1: "To begin with, you have to choose a file, then upload it. In addition, there will generate a link. Furthermore, You have two options First, you have to copy the generated link and paste it new tab download the file and another option is you have to download the qr code and share it.",
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
