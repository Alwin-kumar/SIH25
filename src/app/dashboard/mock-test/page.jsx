"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Sidebar from "@/components/Sidebar";
import { pythonQuestions, javaQuestions, aptitudeQuestions, getRandomQuestions } from "@/lib/quiz-data";

// Quiz categories configuration
const quizCategories = {
  python: {
    name: "Python Programming",
    questions: pythonQuestions,
    icon: "🐍",
    color: "bg-blue-500"
  },
  java: {
    name: "Java Programming",
    questions: javaQuestions,
    icon: "☕",
    color: "bg-orange-500"
  },
  aptitude: {
    name: "Aptitude Test",
    questions: aptitudeQuestions,
    icon: "🧠",
    color: "bg-purple-500"
  },
  mixed: {
    name: "Mixed Questions",
    questions: [...pythonQuestions, ...javaQuestions, ...aptitudeQuestions],
    icon: "🎯",
    color: "bg-green-500"
  }
};

export default function MockTest() {
  const [selectedCategory, setSelectedCategory] = useState("python");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

  // Initialize quiz questions when category changes
  const initializeQuiz = (category) => {
    const categoryData = quizCategories[category];
    const questions = getRandomQuestions(categoryData.questions, category === 'aptitude' ? 15 : 10);
    setQuizQuestions(questions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowExplanation(false);
  };

  // Initialize with Python questions on component mount
  useState(() => {
    initializeQuiz("python");
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    initializeQuiz(category);
  };

  const handleAnswerSelect = (questionId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    initializeQuiz(selectedCategory);
  };

  const getCurrentScore = () => {
    return Object.entries(selectedAnswers).reduce((acc, [qid, ans]) => {
      const question = quizQuestions.find((q) => q.id === parseInt(qid));
      if (question && question.answer === ans) {
        return acc + 1;
      }
      return acc;
    }, 0);
  };

  const getAnsweredQuestionsCount = () => {
    return Object.keys(selectedAnswers).length;
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const score = getCurrentScore();
  const answeredCount = getAnsweredQuestionsCount();
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (quizQuestions.length === 0) {
    return (
      <Sidebar>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p>Loading questions...</p>
          </div>
        </div>
      </Sidebar>
    );
  }

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Mock Test</h1>
          <Badge variant="outline" className="text-sm">
            {answeredCount}/{quizQuestions.length} answered
          </Badge>
        </div>

        {/* Category Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Select Quiz Category:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(quizCategories).map(([key, category]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => handleCategoryChange(key)}
                className={`h-auto p-4 flex flex-col items-center gap-2 ${
                  selectedCategory === key ? category.color : ""
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {!showResults ? (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <span>{quizCategories[selectedCategory].icon}</span>
                    {quizCategories[selectedCategory].name}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {currentQuestion?.question}
                  </CardDescription>
                </div>
                <Badge variant="secondary">
                  Score: {score}/{answeredCount}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedAnswers[currentQuestion?.id] || ""}
                onValueChange={(value) => handleAnswerSelect(currentQuestion?.id, value)}
              >
                {currentQuestion?.options.map((option, idx) => (
                  <div key={idx} className="mb-3">
                    <RadioGroupItem value={option} id={`option-${idx}`} />
                    <label htmlFor={`option-${idx}`} className="ml-2 cursor-pointer hover:text-black dark:hover:text-white transition-colors">
                      {option}
                    </label>
                  </div>
                ))}
              </RadioGroup>

              {/* Show explanation button after answering */}
              {selectedAnswers[currentQuestion?.id] && (
                <div className="mt-4 p-3 bg-transparent text-white rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowExplanation(!showExplanation)}
                  >
                    {showExplanation ? "Hide" : "Show"} Explanation
                  </Button>
                  {showExplanation && (
                    <p className="mt-2 text-sm text-white">
                      {currentQuestion?.explanation}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswers[currentQuestion?.id]}
                >
                  {currentQuestionIndex === quizQuestions.length - 1 ? "Submit Quiz" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>{quizCategories[selectedCategory].icon}</span>
                Quiz Results
              </CardTitle>
              <CardDescription>
                You scored {score} out of {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className={`text-6xl font-bold ${
                    (score / quizQuestions.length) >= 0.8 ? "text-green-500" :
                    (score / quizQuestions.length) >= 0.6 ? "text-yellow-500" : "text-red-500"
                  }`}>
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </div>
                  <p className="text-gray-600 mt-2">
                    {score >= quizQuestions.length * 0.8 ? "Excellent! 🎉" :
                     score >= quizQuestions.length * 0.6 ? "Good job! 👍" : "Keep practicing! 💪"}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleRestart} className="flex-1">
                    Try Again
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const newCategory = selectedCategory === 'python' ? 'java' :
                                        selectedCategory === 'java' ? 'aptitude' :
                                        selectedCategory === 'aptitude' ? 'mixed' : 'python';
                      handleCategoryChange(newCategory);
                    }}
                    className="flex-1"
                  >
                    Try Different Category
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </Sidebar>
  );
}
