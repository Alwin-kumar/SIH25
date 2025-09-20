"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Sidebar from "@/components/Sidebar";

// Mock questions for programming and aptitude quizzes
const programmingQuestions = [
  {
    id: 1,
    question: "What is the output of print(2 ** 3) in Python?",
    options: ["6", "8", "9", "5"],
    answer: "8",
  },
  {
    id: 2,
    question: "Which keyword is used to define a function in Java?",
    options: ["func", "function", "def", "void"],
    answer: "void",
  },
  // Add more questions up to 10
];

const aptitudeQuestions = [
  {
    id: 1,
    question: "What is 15% of 200?",
    options: ["20", "25", "30", "35"],
    answer: "30",
  },
  {
    id: 2,
    question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    options: ["Yes", "No", "Cannot be determined", "None of the above"],
    answer: "Yes",
  },
  // Add more questions up to 15
];

export default function InterviewPrep() {
  const [quizType, setQuizType] = useState("programming");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = quizType === "programming" ? programmingQuestions : aptitudeQuestions;

  const handleAnswerSelect = (questionId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qid, ans]) => {
    const question = questions.find((q) => q.id === parseInt(qid));
    if (question && question.answer === ans) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">Interview Preparation</h1>

        {/* Quiz Type Selection */}
        <div className="mb-6 flex gap-4">
          <Button variant={quizType === "programming" ? "default" : "outline"} onClick={() => setQuizType("programming")}>
            Programming Quiz
          </Button>
          <Button variant={quizType === "aptitude" ? "default" : "outline"} onClick={() => setQuizType("aptitude")}>
            Aptitude Quiz
          </Button>
        </div>

        {!showResults ? (
          <Card>
            <CardHeader>
              <CardTitle>Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
              <CardDescription>{questions[currentQuestionIndex].question}</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedAnswers[questions[currentQuestionIndex].id] || ""}
                onValueChange={(value) => handleAnswerSelect(questions[currentQuestionIndex].id, value)}
              >
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <div key={idx} className="mb-2">
                    <RadioGroupItem value={option} id={`option-${idx}`} />
                    <label htmlFor={`option-${idx}`} className="ml-2 cursor-pointer">{option}</label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-4 flex justify-end">
                <Button onClick={handleNext} disabled={!selectedAnswers[questions[currentQuestionIndex].id]}>
                  {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>
                You scored {score} out of {questions.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleRestart}>Restart Quiz</Button>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </Sidebar>
  );
}
