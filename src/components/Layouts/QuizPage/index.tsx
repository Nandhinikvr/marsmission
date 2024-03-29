import React, { useEffect } from "react";
import "./styles.scss";
import Quiz from "../../Quiz";

const QuizPage: React.FC = () => {
  useEffect(() => {
    document.title = "Mars Mission | Quiz";
  }, []);

  return (
    <div className="gutter">
      <div className="quiz-page layout">
        <div className="coverImageContainer">
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
