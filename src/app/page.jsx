"use client";

import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import { TrendingUp, MapPin, FileText, GraduationCap, BookOpen, MessageCircle, Target, ArrowRight, } from "lucide-react";
import dynamic from "next/dynamic";



const COLORS = ["#00ffcc", "#33ccff", "#9966ff", "#ff66cc", "#ffff66"];

const features = [
  {
    icon: TrendingUp,
    title: "Industry Insights",
    description: "Get market outlook, growth rates, and salary ranges for different careers",
  },
  {
    icon: MapPin,
    title: "Career Roadmap",
    description: "Explore domains, subdomains, and job roles with requirements and courses",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create ATS-friendly resumes with AI improvement and PDF export",
  },
  {
    icon: GraduationCap,
    title: "College Suggestions",
    description: "Find nearby colleges with rankings, ownership, and facilities",
  },
  {
    icon: BookOpen,
    title: "Courses",
    description: "Access free Infosys Springboard and paid Udemy courses",
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot",
    description: "Get career advice and answers to your education queries",
  },
  {
    icon: Target,
    title: "Interview Prep",
    description: "Practice programming and aptitude tests with scoring",
  },
];

const steps = [
  {
    step: 1,
    title: "Choose Your Path",
    description: "Select your domain and explore career options",
  },
  {
    step: 2,
    title: "Get Insights",
    description: "View market data, salary ranges, and required skills",
  },
  {
    step: 3,
    title: "Build Your Future",
    description: "Create resumes, take tests, and get personalized recommendations",
  },
];



export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage1 = useMotionTemplate`
    radial-gradient(circle farthest-corner at center, #020617 75%, ${color})
  `;
  const backgroundImage = useMotionTemplate`
    radial-gradient(150% 125% at 0% 30%, #020617 20%, ${color})
  `;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div className="min-h-screen bg-background relative overflow-hidden  grid   px-4 text-gray-200" style={{ backgroundImage }}>
      
      <Header />

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20 animate-gradient-x"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{ boxShadow, border }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className=" rounded-lg p-8 mb-8 border border-primary/30">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Future Readiness
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Your AI-powered guide to career and education decisions
              </p>
                  <Link href="/dashboard">
                    <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Comprehensive tools for your career journey</p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors hover:scale-105">
                      <CardHeader>
                        <feature.icon className="h-12 w-12 text-primary mb-4" />
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to your dream career</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-center hover:scale-105 transition-transform"
              >
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">Made by Future Forge</p>
        </div>
      </footer>
    </motion.div>
  );
}
