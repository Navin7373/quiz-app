import { useState } from "react";
import questions from "../data/questions";
import axios from "axios";

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );



  // CATEGORY SCORES

  const [categoryScores, setCategoryScores] = useState({

    HTML: 0,

    CSS: 0,

    JavaScript: 0,

    React: 0,

  });



  // TOTAL SCORE

  const totalScore =

    categoryScores.HTML +

    categoryScores.CSS +

    categoryScores.JavaScript +

    categoryScores.React;



  // SAVE RESULT TO DATABASE

  const saveResult = async (updatedScores) => {

    try {

      await axios.post(
        "http://localhost:5000/api/results/save",

        {

          email: user.email,

          htmlScore: updatedScores.HTML,

          cssScore: updatedScores.CSS,

          jsScore: updatedScores.JavaScript,

          reactScore: updatedScores.React,

          totalScore:
            updatedScores.HTML +
            updatedScores.CSS +
            updatedScores.JavaScript +
            updatedScores.React,

        }
      );

      console.log("Result Saved");

    } catch (error) {

      console.log(error);

    }

  };



  // HANDLE ANSWER

  const handleAnswer = (selectedOption) => {

    const correctAnswer =
      questions[currentQuestion].answer;

    let updatedScores = { ...categoryScores };



    // CORRECT ANSWER

    if (selectedOption === correctAnswer) {

      const category =
        questions[currentQuestion].category;

      updatedScores[category] += 1;

      setCategoryScores(updatedScores);
    }



    const nextQuestion = currentQuestion + 1;



    // NEXT QUESTION

    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion);

    }

    // QUIZ COMPLETED

    else {

      setShowResult(true);

      saveResult(updatedScores);

    }

  };



  return (

    <div className="quiz-container">

      {showResult ? (

        <div className="result-box">

          <h1>Quiz Completed 🎉</h1>

          <div className="score-card">

            <h2>
              HTML : {categoryScores.HTML} / 10
            </h2>

            <h2>
              CSS : {categoryScores.CSS} / 10
            </h2>

            <h2>
              JavaScript : {categoryScores.JavaScript} / 10
            </h2>

            <h2>
              React : {categoryScores.React} / 10
            </h2>

            <h1>
              Total Score : {totalScore} / 40
            </h1>

          </div>

        </div>

      ) : (

        <div className="question-box">

          <h3 className="category">

            {questions[currentQuestion].category}

          </h3>

          <h2>

            Question {currentQuestion + 1}

          </h2>

          <h1>

            {questions[currentQuestion].question}

          </h1>

          <div className="options">

            {questions[currentQuestion].options.map(

              (option, index) => (

                <button
                  key={index}
                  onClick={() =>
                    handleAnswer(option)
                  }
                >
                  {option}
                </button>

              )
            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default Quiz;