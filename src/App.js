import React, { useState } from 'react';
import './App.css';

const quizData = [
  {
    question: 'Which is my shelter?',
    animal: 'Dog',
    image: '/images/dog.jpeg',
    options: ['Kennel', 'Den', 'Nest', 'Stable'],
    answer: 'Kennel',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Lion',
    image: '/images/lion.jpeg',
    options: ['Burrow', 'Hive', 'Den', 'Stable'],
    answer: 'Den',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Cat',
    image: '/images/cat.jpeg',
    options: ['Den', 'Burrow', 'House', 'Nest'],
    answer: 'House',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Octopus',
    image: '/images/octopus.jpeg',
    options: ['Den', 'Cave', 'Reef', 'Burrow'],
    answer: 'Den',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Crab',
    image: '/images/crab.jpeg',
    options: ['Burrow', 'Cave', 'Shell', 'Nest'],
    answer: 'Burrow',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Penguin',
    image: '/images/penguin.jpeg',
    options: ['Burrow', 'Nest', 'Cave', 'Ice Den'],
    answer: 'Ice Den',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Bird',
    image: '/images/bird.jpeg',
    options: ['Cave', 'Nest', 'Burrow', 'Coop'],
    answer: 'Nest',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Horse',
    image: '/images/horse.jpeg',
    options: ['Stable', 'Kennel', 'Den', 'Burrow'],
    answer: 'Stable',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Bee',
    image: '/images/bee.jpeg',
    options: ['Den', 'Burrow', 'Hive', 'Stable'],
    answer: 'Hive',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Spider',
    image: '/images/spider.jpeg',
    options: ['Web', 'Nest', 'Cave', 'Stable'],
    answer: 'Web',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Rabbit',
    image: '/images/rabbit.jpeg',
    options: ['Kennel', 'Burrow', 'Cave', 'Nest'],
    answer: 'Burrow',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Cow',
    image: '/images/cow.jpeg',
    options: ['Stable', 'Shed', 'Burrow', 'Nest'],
    answer: 'Shed',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Ant',
    image: '/images/ant.jpeg',
    options: ['Hill', 'Nest', 'Hive', 'Web'],
    answer: 'Hill',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Pig',
    image: '/images/pig.jpeg',
    options: ['Sty', 'Cave', 'Den', 'Nest'],
    answer: 'Sty',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Bat',
    image: '/images/bat.jpeg',
    options: ['Cave', 'Nest', 'Stable', 'Den'],
    answer: 'Cave',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Owl',
    image: '/images/owl.jpeg',
    options: ['Nest', 'Cave', 'Burrow', 'Coop'],
    answer: 'Nest',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Chicken',
    image: '/images/chicken.jpeg',
    options: ['Coop', 'Nest', 'Shed', 'Cave'],
    answer: 'Coop',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Sheep',
    image: '/images/sheep.jpeg',
    options: ['Fold', 'Den', 'Burrow', 'Stable'],
    answer: 'Fold',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Polar Bear',
    image: '/images/polarbear.jpeg',
    options: ['Den', 'Cave', 'Burrow', 'Nest'],
    answer: 'Den',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Tiger',
    image: '/images/tiger.jpeg',
    options: ['Den', 'Hive', 'Stable', 'Burrow'],
    answer: 'Den',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Elephant',
    image: '/images/elephant.jpeg',
    options: ['Stable', 'Burrow', 'Jungle', 'Nest'],
    answer: 'Jungle',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Wolf',
    image: '/images/wolf.png',
    options: ['Den', 'Nest', 'Burrow', 'Cave'],
    answer: 'Den',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Squirrel',
    image: '/images/squirrel.png',
    options: ['Nest', 'Tree Hollow', 'Burrow', 'Den'],
    answer: 'Tree Hollow',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Fox',
    image: '/images/fox.png',
    options: ['Den', 'Nest', 'Burrow', 'Stable'],
    answer: 'Den',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Goat',
    image: '/images/goat.png',
    options: ['Shed', 'Nest', 'Fold', 'Stable'],
    answer: 'Shed',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Deer',
    image: '/images/deer.png',
    options: ['Jungle', 'Stable', 'Den', 'Burrow'],
    answer: 'Jungle',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Duck',
    image: '/images/duck.png',
    options: ['Nest', 'Coop', 'Pond', 'Cave'],
    answer: 'Pond',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Frog',
    image: '/images/frog.png',
    options: ['Pond', 'Burrow', 'Cave', 'Tree'],
    answer: 'Pond',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Lizard',
    image: '/images/lizard.png',
    options: ['Nest', 'Burrow', 'Cave', 'Tree Hollow'],
    answer: 'Burrow',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Giraffe',
    image: '/images/giraffe.png',
    options: ['Savanna', 'Stable', 'Cave', 'Burrow'],
    answer: 'Savanna',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Rat',
    image: '/images/rat.png',
    options: ['Burrow', 'Nest', 'Hole', 'Stable'],
    answer: 'Hole',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Monkey',
    image: '/images/monkey.png',
    options: ['Tree', 'Nest', 'Cave', 'Jungle'],
    answer: 'Tree',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Kangaroo',
    image: '/images/kangaroo.png',
    options: ['Burrow', 'Pouch', 'Cave', 'Tree'],
    answer: 'Pouch',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Koala',
    image: '/images/koala.png',
    options: ['Nest', 'Burrow', 'Tree', 'Den'],
    answer: 'Tree',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Panda',
    image: '/images/panda.png',
    options: ['Nest', 'Bamboo Tree', 'Cave', 'Burrow'],
    answer: 'Bamboo Tree',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Shark',
    image: '/images/shark.png',
    options: ['Reef', 'Ocean', 'Den', 'Cave'],
    answer: 'Ocean',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Snake',
    image: '/images/snake.jpeg',
    options: ['Burrow', 'Nest', 'Cave', 'Hole'],
    answer: 'Burrow',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Zebra',
    image: '/images/zebra.png',
    options: ['Stable', 'Burrow', 'Savanna', 'Nest'],
    answer: 'Savanna',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Bear',
    image: '/images/bear.png',
    options: ['Den', 'Cave', 'Nest', 'Stable'],
    answer: 'Cave',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Hippo',
    image: '/images/hippo.png',
    options: ['River', 'Burrow', 'Swamp', 'Cave'],
    answer: 'River',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Ostrich',
    image: '/images/ostrich.png',
    options: ['Nest', 'Burrow', 'Cave', 'Desert'],
    answer: 'Nest',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Snail',
    image: '/images/snail.png',
    options: ['Shell', 'Nest', 'Cave', 'Burrow'],
    answer: 'Shell',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Crocodile',
    image: '/images/crocodile.jpeg',
    options: ['Burrow', 'Nest', 'Cave', 'Den'],
    answer: 'Burrow',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Crane',
    image: '/images/crane.png',
    options: ['Nest', 'Burrow', 'Den', 'Cave'],
    answer: 'Nest',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Grasshopper',
    image: '/images/grasshopper.png',
    options: ['Burrow', 'Nest', 'Leaf', 'Cave'],
    answer: 'Leaf',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Seal',
    image: '/images/seal.png',
    options: ['Cave', 'Den', 'Burrow', 'liars'],
    answer: 'liars',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Leopard',
    image: '/images/leopard.png',
    options: ['Savanna', 'Burrow', 'Den', 'Nest'],
    answer: 'Savanna',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Yak',
    image: '/images/yak.png',
    options: ['Barn', 'Cave', 'Den', 'Nest'],
    answer: 'Barn',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Ladybug',
    image: '/images/ladybug.png',
    options: ['Leaf', 'Nest', 'Burrow', 'Hive'],
    answer: 'Leaf',
  },
  {
    question: 'Which is my shelter?',
    animal: 'Camel',
    image: '/images/camel.png',
    options: ['Oasis', 'Desert', 'Burrow', 'Den'],
    answer: 'Desert',
  }  
];


const AnimalShelterQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showCorrectAnswerMessage, setShowCorrectAnswerMessage] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerOptionClick = (option) => {
    setSelectedAnswer(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
      setShowCorrectAnswerMessage(true);
      setShowAnswer(false);
    } else {
      setShowAnswer(true);
      setShowCorrectAnswerMessage(false);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');
      setShowCorrectAnswerMessage(false);
      setShowAnswer(false);
    } else {
      setShowScore(true);
    }
  };

  const revealAnswerAndNext = () => {
    setShowAnswer(true); // Display the answer
    setShowCorrectAnswerMessage(false); // Hide correct answer message
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer('');
    setShowCorrectAnswerMessage(false);
    setShowAnswer(false);
    setQuizStarted(false);
  };

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <div className="start-section">
          <h2>Guess My Shelter</h2>
          <button className="start-button" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      ) : showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}/{quizData.length}</h2>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h2>{quizData[currentQuestion].question}</h2>
            <img
              src={quizData[currentQuestion].image}
              alt={quizData[currentQuestion].animal}
              className="animal-image"
            />
          </div>
          <div className="options-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerOptionClick(option)}
                disabled={!!selectedAnswer} // Disable options once selected
              >
                {option}
              </button>
            ))}
          </div>
          {showCorrectAnswerMessage && !showAnswer && (
            <>
              <p className="correct-answer-message">Correct Answer!</p>
              <button className="next-button" onClick={handleNextQuestion}>
                Next
              </button>
            </>
          )}
          {showAnswer && (
            <>
              <p className="answer-message">Correct Answer: {quizData[currentQuestion].answer}</p>
              <button className="next-button" onClick={handleNextQuestion}>
                Next
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AnimalShelterQuiz;

