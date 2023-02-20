import { useState } from "react";

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="faq-question">
        <a href="/#" className="faq-question-link" onClick={handleClick}>
          <span>{question}</span>
          <span className={`icon ${isExpanded ? "minus-icon" : "plus-icon"}`}>
            {isExpanded ? "-" : "+"}
          </span>
        </a>
      </div>
      <div className={`faq-answer ${isExpanded ? "show" : ""}`}>
        <p>{answer}</p>
      </div>
    </>
  );
};

export default Question;
