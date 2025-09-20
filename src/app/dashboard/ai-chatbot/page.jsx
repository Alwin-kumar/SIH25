"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, HelpCircle, AlertCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";

// Mock FAQs for fallback
const faqs = [
  {
    question: "What is the best career path for me?",
    answer: "The best career path depends on your interests, skills, and market demand. Use our Career Roadmap feature to explore different domains and job roles.",
  },
  {
    question: "How do I prepare for coding interviews?",
    answer: "Use our Interview Preparation section with programming quizzes in Python and Java. Practice regularly and focus on data structures and algorithms.",
  },
  {
    question: "What skills are in high demand?",
    answer: "Check our Industry Insights feature to see current market trends, growth rates, and top skills needed for different job roles.",
  },
  {
    question: "How can I improve my resume?",
    answer: "Use our Resume Builder with AI improvement suggestions and ATS analyzer to optimize your resume for better job applications.",
  },
];

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm your AI career advisor. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState('unknown'); // 'unknown', 'available', 'unavailable'
  const scrollAreaRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Call the AI API
      const response = await fetch('/api/chat/route-fixed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory: messages.slice(-10) // Send last 10 messages for context
        }),
      });

      const data = await response.json();

      if (data.success) {
        const botResponse = {
          id: messages.length + 2,
          type: "bot",
          content: data.response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setApiStatus('available');
      } else {
        // Handle API error with fallback
        const errorResponse = {
          id: messages.length + 2,
          type: "bot",
          content: data.response || "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorResponse]);
        setApiStatus('unavailable');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorResponse = {
        id: messages.length + 2,
        type: "bot",
        content: "I'm experiencing technical difficulties. Please check your connection and try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
      setApiStatus('unavailable');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFAQClick = (faq) => {
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: faq.question,
      timestamp: new Date(),
    };

    const botMessage = {
      id: messages.length + 2,
      type: "bot",
      content: faq.answer,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Sidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-3xl font-bold">AI Career Advisor</h1>
          {apiStatus === 'unavailable' && (
            <Badge variant="destructive" className="flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              AI Service Unavailable
            </Badge>
          )}
          {apiStatus === 'available' && (
            <Badge variant="default" className="flex items-center gap-1 bg-green-500">
              <Bot className="w-3 h-3" />
              AI Service Active
            </Badge>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  Career Advisor Chat
                </CardTitle>
                <CardDescription>
                  Ask me anything about careers, education, or job preparation
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages Container with Proper Scrolling */}
                <div className="flex-1 overflow-hidden">
                  <ScrollArea className="h-full px-6">
                    <div className="space-y-4 py-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex gap-3 ${
                            message.type === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          {message.type === "bot" && (
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              message.type === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                          {message.type === "user" && (
                            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4" />
                            </div>
                          )}
                        </motion.div>
                      ))}

                      {isLoading && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex gap-3 justify-start"
                        >
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div className="bg-muted p-3 rounded-lg">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    {/* Invisible element to scroll to */}
                    <div ref={messagesEndRef} />
                  </ScrollArea>
                </div>

                {/* Input */}
                <div className="flex gap-2 mt-4 px-6 pb-4">
                  <Input
                    placeholder="Ask me about careers, education, or job preparation..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Quick Questions
                </CardTitle>
                <CardDescription>
                  Click on any question to get instant answers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left h-auto p-3 justify-start"
                      onClick={() => handleFAQClick(faq)}
                    >
                      <div className="text-sm font-medium">{faq.question}</div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features Overview */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Explore Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Career Roadmap
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Industry Insights
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Resume Builder
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    Interview Prep
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* API Status */}
            {apiStatus === 'unavailable' && (
              <Card className="mt-6 border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Setup Required
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-700">
                  <p className="text-sm mb-2">
                    To enable AI chat functionality, add your Gemini API key to the <code>.env</code> file:
                  </p>
                  <code className="text-xs bg-yellow-100 p-2 rounded block">
                    GEMINI_API_KEY=your_actual_api_key_here
                  </code>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </motion.div>
    </Sidebar>
  );
}
