import React, { useState } from "react";
import "../CSS/quizapp.css";

export const QuizComponent = () => {
  const quizData = [
    {
      question: "Which method is used to create an element using JavaScript?",
      answers: [
        { text: "document.create()", isCorrect: false },
        { text: "create()", isCorrect: false },
        { text: "document.createElement()", isCorrect: true },
        { text: "None of the options", isCorrect: false },
      ],
    },
    {
      question: "Which method is used to append a child element in JavaScript?",
      answers: [
        { text: "append", isCorrect: false },
        { text: "appendChild()", isCorrect: true },
        { text: "appendChildElement()", isCorrect: false },
        { text: "All of the options", isCorrect: false },
      ],
    },
    {
      question:
        "How can we set a class name for an element created in JavaScript?",
      answers: [
        { text: "ele.class = 'mainbox'", isCorrect: false },
        { text: "ele.classname = 'mainbox'", isCorrect: false },
        { text: "ele.className='mainbox'", isCorrect: true },
        { text: "ele.cName = 'mainbox'", isCorrect: false },
      ],
    },
    {
      question:
        "How can we set the text inside an element in JavaScript if const ele = document.createElement('p');?",
      answers: [
        { text: "ele.text = 'hello'", isCorrect: false },
        { text: "ele.Text = 'Hello'", isCorrect: false },
        { text: "ele.innerHTML = 'hello'", isCorrect: true },
        { text: "None of the options", isCorrect: false },
      ],
    },
    {
      question: "How can you get an element by tag name?",
      answers: [
        { text: "document.getElemetnsByTagName()", isCorrect: true },
        { text: "document.getelementbytag()", isCorrect: false },
        { text: "document.getelementbytagname()", isCorrect: false },
        { text: "document.getElementByTag()", isCorrect: false },
      ],
    },
    {
      question: "On which of side, form validation occurs?",
      answers: [
        { text: "client", isCorrect: false },
        { text: "server", isCorrect: false },
        { text: "options 1 and 2", isCorrect: true },
        { text: "none of the options", isCorrect: false },
      ],
    },
    {
      question: "Choose the correct option?",
      answers: [
        {
          text: "JavaScript form validation occurs at only server side",
          isCorrect: false,
        },
        {
          text: "JavaScript form validation occurs when user click on submit button",
          isCorrect: true,
        },
        {
          text: "JavaScript form validation occurs at only client side",
          isCorrect: false,
        },
        { text: "none of the options", isCorrect: false },
      ],
    },
    {
      question: "JavaScript allows you to verify the data _____.",
      answers: [
        { text: "before submitting it to the server", isCorrect: true },
        { text: "only after submitting to the server", isCorrect: false },
        { text: "only while entering data", isCorrect: false },
        { text: "none of the options", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following function is used to validate the form in JavaScript?",
      answers: [
        { text: "validate()", isCorrect: false },
        { text: "validatation()", isCorrect: false },
        { text: "formvalidate()", isCorrect: false },
        { text: "no predefined function for data validation", isCorrect: true },
      ],
    },
    {
      question:
        "If the client entered a wrong data in the form, then form validation must _____.",
      answers: [
        { text: "send back the data", isCorrect: false },
        { text: "wait for the correctness", isCorrect: false },
        { text: "send back and wait for the correctness", isCorrect: true },
        { text: "none of the options", isCorrect: false },
      ],
    },
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [btnState, setBtnState] = useState(null);

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setBtnState(null)
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleAnswers = (isCorrect,index) => {

    if (isCorrect === true) {
      setScore(score + 1);
    }
    setBtnState(index)
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading">Quiz</h1>
        {showScore ? (
          <div className="score">
            <div id="head">Your Score</div>
            <div id="score-value">{score} out of {quizData.length}</div> 
          </div>
        ) : (
          <div id="quiz">
            <h2 className="quiz-heading">
              {quizData[currentQuestion].question}
            </h2>
            <div id="quiz-btns">
              {quizData[currentQuestion].answers.map((data, index) => {
                return (
                  <button
                    className={`btns ${btnState === index ? "selected" : ""}`}
                    key={index}
                    onClick={() => {
                      handleAnswers(data.isCorrect,index);
                    }}
                  >
                    {data.text}
                  </button>
                );
              })}
            </div>

            <div className="nxt-btn">
              {" "}
              <button onClick={prevQuestion}>Previous</button>
              <button onClick={nextQuestion}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
