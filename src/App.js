import "./App.css";
import { Button, Container, Form } from "react-bootstrap";
import QuizTemplate from "./QuizTemplate";
import { useState } from "react";

function App() {
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);
  const [currentActiveTeam, setCurrentActiveTeam] = useState(1);
  const questions = [
    {
      question:
        "What is the first thing you thought when you entered this college? ",
      answer1: "Amazing! It was fun to see new faces!",
      answer2: "I hope I get placed.",
      answer3: "Holy shit, this is a huge campus!",
      answer4: "God, I hope I dont suffer in engineering.",
      answer5: "Im nervous as all hell.",
      answer6: "Roz ghar jaake phadunga.",
      answer7: "The building looks amazing!",
      answer8: "No thoughts, brain empty.",
    },
    {
      question: "What is the Subject that was the most annoying to learn?",
      answer1: "Neural Network",
      answer2: "ATC",
      answer3: "Basic Electronics",

      answer4: "Advanced Linear Algebra",
      answer5: "English",
      answer6: "Micro Controllers and Embedded Systems",
      answer7: "Anything that involved memorising.",
      answer8: "Bro, everything.",
    },
    {
      question: "What the Best spot to hangout in college?",
      answer1: "Sarthak PG",
      answer2: "Dambel",
      answer3: "Corridors of the college and the canteen.",
      answer4: "Beach is bae <3.",
      answer5: "Security room that was never used by the security.",
      answer6: "Vrindavana",
      answer7: "College parking is also bae <3.",
      answer8: "Ajeer na Angadi",
    },
    {
      question: "What is one thing Antony sir was behind you the most about?",
      answer1: "PROJECT. REPORT.",
      answer2: "Everything macha. ",
      answer3: "Attendance. I barely have 60%.",
      answer4:
        "I will never forget the words 'Data Structures and Algorithms'.",
      answer5:
        "Not attending workshops (In our defence, it was liiiiiiitle boring bro ).",
      answer6: "-",
      answer7: "-",
      answer8: "-",
    },
    {
      question: "Who in class cannot keep a secret?",
      answer1: "All the girls. ",
      answer2: "Akshay DT",
      answer3: "Srinivas",
      answer4: "Riya",
      answer5: "Shameel",
      answer6: "Bhavana",
      answer7: "Nil",
      answer8: "Deeksha",
    },
    {
      question: "Who never submitted assignments on time?",
      answer1: "Akash",
      answer2: "Amal",
      answer3: "All the guys. (This was revenge for the previous one.)",
      answer4: "Manu",
      answer5: "Akshay",
      answer6: "Bharath",
      answer7: "Karthikeya",
      answer8: "Shameel",
    },
    {
      question:
        "Who always claimed to have not studied but always aced the exam?",
      answer1: "Ninad",
      answer2: "Bhavna",
      answer3: "Riftha",
      answer4: "Ranjith",
      answer5: "Prathiksha",
      answer6: "Everyone man, all of them are rats.",
      answer7: "Shivashankar",
      answer8: "Karishma",
    },
    {
      question: "Who sleeps the most in class?",
      answer1: "Shihab",
      answer2: "Chirag",
      answer3: "Akshay",
      answer4: "Akash",
      answer5: "Srinivas",
      answer6: "Fayez",
      answer7: "Amal",
      answer8: "Lavanya",
    },
    {
      question: "Name the Person who bunks the class the most?",
      answer1: "Sarthak",
      answer2: "Fayez",
      answer3: "Chandana",
      answer4: "Karthikeya",
      answer5: "Sourabh",
      answer6:
        "No one bunks, we're all good students. (Biggest lie of the century.)",
      answer7: "Prathiksha",
      answer8: "Bharath",
    },
    {
      question: "Name the Event during which you had the most fun? ",
      answer1: "Aakar",
      answer2: "Branch Entry",
      answer3: "Cooking without Fire",
      answer4: "DJ Night mast scenes mare.",
      answer5: "The event where we got sign from HOD.",
      answer6: "No event, my life was boring >:(.",
      answer7: "Any event that gave us attendance and got us out of classes.",
      answer8: "-",
    },
    {
      question: "Whats one thing you'll miss the most in college?",
      answer1: "Friends da, I'll miss them all <3.",
      answer2: "Bunking Classes",
      answer3: "All the College scenes.",
      answer4: "Getting sign from HOD for reports :') ",
      answer5: "Going to beach whenever we wanted to.",
      answer6: "Hostel lyfe best lyfe.",
      answer7: "-",
      answer8: "Nothing (Who ever said this, little sad it is.)",
    },
  ];
  const [revealValue1, setRevealValue1] = useState(false);
  const [revealValue2, setRevealValue2] = useState(false);
  const [revealValue3, setRevealValue3] = useState(false);
  const [revealValue4, setRevealValue4] = useState(false);
  const [revealValue5, setRevealValue5] = useState(false);
  const [revealValue6, setRevealValue6] = useState(false);
  const [revealValue7, setRevealValue7] = useState(false);
  const [revealValue8, setRevealValue8] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const maxQuestion = 10;
  const resetRevealHandler = () => {
    setRevealValue1(false);
    setRevealValue2(false);
    setRevealValue3(false);
    setRevealValue4(false);
    setRevealValue5(false);
    setRevealValue6(false);
    setRevealValue7(false);
    setRevealValue8(false);
  };
  const setPoints = (key) => {
    if (currentActiveTeam == 1) {
      setTeam1(team1 + 2 + 3 * (key - 1));
    }
    if (currentActiveTeam == 2) {
      setTeam2(team2 + 2 + 3 * (key - 1));
    }
  };
  const nextButtonHandler = () => {
    resetRevealHandler();
    console.log(team1, team2);
    setCurrentQuestion(currentQuestion + 1);
  };
  const prevButtonHandler = () => {
    resetRevealHandler();
    setCurrentQuestion(currentQuestion - 1);
  };
  const handleKeyPress = (event) => {
    switch (event.key) {
      case "1":
        setRevealValue1(true);
        setPoints(8);
        break;
      case "2":
        setRevealValue2(true);
        setPoints(7);
        break;
      case "3":
        setRevealValue3(true);
        setPoints(6);
        break;
      case "4":
        setRevealValue4(true);
        setPoints(5);
        break;
      case "5":
        setRevealValue5(true);
        setPoints(4);
        break;
      case "6":
        setRevealValue6(true);
        setPoints(3);
        break;
      case "7":
        setRevealValue7(true);
        setPoints(2);
        break;
      case "8":
        setRevealValue8(true);
        setPoints(1);
        break;
    }
  };
  return (
    <Container onKeyPress={(event) => handleKeyPress(event)}>
      <QuizTemplate
        num={currentQuestion}
        question={questions[currentQuestion - 1].question}
        answer1={questions[currentQuestion - 1].answer1}
        answer2={questions[currentQuestion - 1].answer2}
        answer3={questions[currentQuestion - 1].answer3}
        answer4={questions[currentQuestion - 1].answer4}
        answer5={questions[currentQuestion - 1].answer5}
        answer6={questions[currentQuestion - 1].answer6}
        answer7={questions[currentQuestion - 1].answer7}
        answer8={questions[currentQuestion - 1].answer8}
        revealValue1={revealValue1}
        revealValue2={revealValue2}
        revealValue3={revealValue3}
        revealValue4={revealValue4}
        revealValue5={revealValue5}
        revealValue6={revealValue6}
        revealValue7={revealValue7}
        revealValue8={revealValue8}
      />

      <Button
        style={{
          position: "absolute",
          right: "10px",
          bottom: "10px",
          backgroundColor: "#e9e9f0",
          color: "#0f1cd4",
        }}
        onClick={() => nextButtonHandler()}
      >
        Next
      </Button>
      <Button
        style={{
          position: "absolute",
          left: "10px",
          bottom: "10px",
          backgroundColor: "#e9e9f0",
          color: "#0f1cd4",
        }}
        onClick={() => prevButtonHandler()}
      >
        Prev
      </Button>
    </Container>
  );
}

export default App;
