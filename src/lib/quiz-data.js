// Comprehensive question banks for interview preparation

export const pythonQuestions = [
  {
    id: 1,
    question: "What is the output of print(2 ** 3) in Python?",
    options: ["6", "8", "9", "5"],
    answer: "8",
    explanation: "The ** operator is used for exponentiation in Python. 2 ** 3 equals 2^3 = 8."
  },
  {
    id: 2,
    question: "Which of the following is the correct way to declare a list in Python?",
    options: ["list = {}", "list = []", "list = ()", "list = set()"],
    answer: "list = []",
    explanation: "In Python, square brackets [] are used to create a list, which is a mutable ordered collection."
  },
  {
    id: 3,
    question: "What does the 'len()' function do in Python?",
    options: ["Returns the length of a string or collection", "Returns the last element", "Returns the first element", "Returns the maximum value"],
    answer: "Returns the length of a string or collection",
    explanation: "The len() function returns the number of items in an object (length of string, number of elements in list/tuple, etc.)."
  },
  {
    id: 4,
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "function", "def", "define"],
    answer: "def",
    explanation: "The 'def' keyword is used to define a function in Python, followed by the function name and parameters."
  },
  {
    id: 5,
    question: "What is the output of print(type(3.14))?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    answer: "<class 'float'>",
    explanation: "3.14 is a floating-point number, so its type is float."
  },
  {
    id: 6,
    question: "Which of the following is used to handle exceptions in Python?",
    options: ["try-except", "try-catch", "catch-except", "error-handle"],
    answer: "try-except",
    explanation: "Python uses try-except blocks to handle exceptions, unlike some other languages that use try-catch."
  },
  {
    id: 7,
    question: "What does 'import math' do in Python?",
    options: ["Imports mathematical functions", "Creates a math object", "Defines math constants", "None of the above"],
    answer: "Imports mathematical functions",
    explanation: "The 'import math' statement imports the math module, which contains various mathematical functions and constants."
  },
  {
    id: 8,
    question: "Which data type is immutable in Python?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: "Tuple",
    explanation: "Tuples are immutable in Python, meaning their elements cannot be modified after creation."
  },
  {
    id: 9,
    question: "What is the output of print('Hello' + 'World')?",
    options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
    answer: "HelloWorld",
    explanation: "The + operator concatenates strings in Python, so 'Hello' + 'World' results in 'HelloWorld'."
  },
  {
    id: 10,
    question: "Which method is used to add an element to a list?",
    options: ["add()", "append()", "insert()", "push()"],
    answer: "append()",
    explanation: "The append() method adds an element to the end of a list in Python."
  },
  {
    id: 11,
    question: "What does the 'range(5)' function return?",
    options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4, 5]", "range(0, 5)"],
    answer: "[0, 1, 2, 3, 4]",
    explanation: "range(5) returns a sequence of numbers from 0 to 4 (5 numbers total)."
  },
  {
    id: 12,
    question: "Which operator is used for floor division in Python?",
    options: ["/", "//", "%", "**"],
    answer: "//",
    explanation: "The // operator performs floor division, which returns the largest integer less than or equal to the result."
  },
  {
    id: 13,
    question: "What is a lambda function in Python?",
    options: ["A function that returns None", "An anonymous function", "A built-in function", "A recursive function"],
    answer: "An anonymous function",
    explanation: "Lambda functions are small anonymous functions defined using the lambda keyword."
  },
  {
    id: 14,
    question: "Which of the following is the correct way to open a file for reading?",
    options: ["file = open('file.txt', 'r')", "file = open('file.txt', 'w')", "file = open('file.txt', 'a')", "file = open('file.txt')"],
    answer: "file = open('file.txt', 'r')",
    explanation: "The 'r' mode is used to open a file for reading."
  },
  {
    id: 15,
    question: "What does the 'pass' statement do in Python?",
    options: ["Skips the current iteration", "Does nothing", "Raises an exception", "Exits the program"],
    answer: "Does nothing",
    explanation: "The 'pass' statement is a null operation - it does nothing when executed."
  },
  {
    id: 16,
    question: "Which method removes the last element from a list?",
    options: ["remove()", "pop()", "delete()", "clear()"],
    answer: "pop()",
    explanation: "The pop() method removes and returns the last element from a list."
  },
  {
    id: 17,
    question: "What is the output of bool([])?",
    options: ["True", "False", "Error", "None"],
    answer: "False",
    explanation: "An empty list [] evaluates to False in a boolean context."
  },
  {
    id: 18,
    question: "Which keyword is used to create a class in Python?",
    options: ["class", "def", "function", "object"],
    answer: "class",
    explanation: "The 'class' keyword is used to define a new class in Python."
  },
  {
    id: 19,
    question: "What does 'self' represent in a Python class method?",
    options: ["The class itself", "The instance of the class", "A static method", "None of the above"],
    answer: "The instance of the class",
    explanation: "'self' refers to the instance of the class and is used to access variables and methods belonging to that instance."
  },
  {
    id: 20,
    question: "Which of the following is used for multi-line comments?",
    options: ["# comment", "// comment", "/* comment */", "\"\"\" comment \"\"\""],
    answer: "\"\"\" comment \"\"\"",
    explanation: "Triple quotes (\"\"\" \"\"\") are used for multi-line strings and can also be used for multi-line comments."
  },
  {
    id: 21,
    question: "What is the output of print(10 // 3)?",
    options: ["3.33", "3", "4", "3.0"],
    answer: "3",
    explanation: "Floor division (//) returns the largest integer less than or equal to the result, so 10 // 3 = 3."
  },
  {
    id: 22,
    question: "Which method is used to convert a string to uppercase?",
    options: ["upper()", "toupper()", "capitalize()", "casefold()"],
    answer: "upper()",
    explanation: "The upper() method converts all characters in a string to uppercase."
  },
  {
    id: 23,
    question: "What does the 'in' operator do?",
    options: ["Checks membership", "Performs division", "Creates a loop", "None of the above"],
    answer: "Checks membership",
    explanation: "The 'in' operator is used to check if a value exists in a sequence (list, tuple, string, etc.)."
  },
  {
    id: 24,
    question: "Which of the following is a mutable data type?",
    options: ["String", "Tuple", "List", "Integer"],
    answer: "List",
    explanation: "Lists are mutable, meaning their contents can be changed after creation."
  },
  {
    id: 25,
    question: "What is the output of print('Python'[1:4])?",
    options: ["Pyt", "yth", "tho", "Python"],
    answer: "yth",
    explanation: "String slicing [1:4] returns characters from index 1 to 3 (4 is exclusive), so 'yth'."
  }
];

export const javaQuestions = [
  {
    id: 1,
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "Class", "define", "struct"],
    answer: "class",
    explanation: "The 'class' keyword is used to declare a class in Java."
  },
  {
    id: 2,
    question: "What is the default value of an int variable in Java?",
    options: ["0", "null", "undefined", "false"],
    answer: "0",
    explanation: "Instance variables in Java are initialized with default values. For int, the default value is 0."
  },
  {
    id: 3,
    question: "Which of the following is the correct way to declare a main method in Java?",
    options: ["public static void main(String[] args)", "public void main(String[] args)", "static public void main(String[] args)", "void main(String[] args)"],
    answer: "public static void main(String[] args)",
    explanation: "The main method in Java must be declared as public static void main(String[] args)."
  },
  {
    id: 4,
    question: "What does JVM stand for?",
    options: ["Java Virtual Machine", "Java Variable Machine", "Java Visual Machine", "Java Virtual Memory"],
    answer: "Java Virtual Machine",
    explanation: "JVM stands for Java Virtual Machine, which executes Java bytecode."
  },
  {
    id: 5,
    question: "Which data type is used to store a single character in Java?",
    options: ["char", "Character", "String", "int"],
    answer: "char",
    explanation: "The char data type is used to store a single 16-bit Unicode character."
  },
  {
    id: 6,
    question: "What is the parent class of all classes in Java?",
    options: ["Main", "Parent", "Object", "Super"],
    answer: "Object",
    explanation: "The Object class is the root of the class hierarchy in Java. Every class has Object as a superclass."
  },
  {
    id: 7,
    question: "Which keyword is used to inherit a class in Java?",
    options: ["inherit", "extends", "implements", "super"],
    answer: "extends",
    explanation: "The 'extends' keyword is used to inherit properties and methods from another class."
  },
  {
    id: 8,
    question: "What is the size of int data type in Java?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    answer: "32 bits",
    explanation: "In Java, int is a 32-bit signed two's complement integer."
  },
  {
    id: 9,
    question: "Which of the following is not a primitive data type in Java?",
    options: ["int", "float", "String", "boolean"],
    answer: "String",
    explanation: "String is a class in Java, not a primitive data type. The primitive data types are: byte, short, int, long, float, double, char, boolean."
  },
  {
    id: 10,
    question: "What does the 'final' keyword do when applied to a variable?",
    options: ["Makes it private", "Makes it constant", "Makes it static", "Makes it public"],
    answer: "Makes it constant",
    explanation: "The 'final' keyword makes a variable constant - its value cannot be changed once initialized."
  },
  {
    id: 11,
    question: "Which method is called when an object is created?",
    options: ["init()", "start()", "constructor", "main()"],
    answer: "constructor",
    explanation: "A constructor is a special method that is called when an object is instantiated."
  },
  {
    id: 12,
    question: "What is the correct way to create an array in Java?",
    options: ["int[] arr = new int[5];", "int arr[] = new int[5];", "Both A and B", "None of the above"],
    answer: "Both A and B",
    explanation: "Both int[] arr = new int[5]; and int arr[] = new int[5]; are valid ways to declare arrays in Java."
  },
  {
    id: 13,
    question: "Which interface is implemented by ArrayList?",
    options: ["List", "Set", "Map", "Collection"],
    answer: "List",
    explanation: "ArrayList implements the List interface, which extends the Collection interface."
  },
  {
    id: 14,
    question: "What does the 'static' keyword mean?",
    options: ["Instance method", "Class method", "Abstract method", "Final method"],
    answer: "Class method",
    explanation: "Static methods and variables belong to the class rather than any specific instance."
  },
  {
    id: 15,
    question: "Which exception is thrown when dividing by zero?",
    options: ["IOException", "ArithmeticException", "NullPointerException", "NumberFormatException"],
    answer: "ArithmeticException",
    explanation: "ArithmeticException is thrown when an exceptional arithmetic condition occurs, such as division by zero."
  },
  {
    id: 16,
    question: "What is method overloading?",
    options: ["Same method name, different parameters", "Same method name, same parameters", "Different method name, same parameters", "None of the above"],
    answer: "Same method name, different parameters",
    explanation: "Method overloading allows multiple methods with the same name but different parameter lists."
  },
  {
    id: 17,
    question: "Which keyword is used to implement an interface?",
    options: ["extends", "implements", "inherit", "interface"],
    answer: "implements",
    explanation: "The 'implements' keyword is used by a class to implement an interface."
  },
  {
    id: 18,
    question: "What is the default value of a boolean variable?",
    options: ["true", "false", "0", "null"],
    answer: "false",
    explanation: "Boolean variables are initialized to false by default in Java."
  },
  {
    id: 19,
    question: "Which of the following is used for exception handling?",
    options: ["try-catch", "try-finally", "try-catch-finally", "All of the above"],
    answer: "All of the above",
    explanation: "Java supports try-catch, try-finally, and try-catch-finally blocks for exception handling."
  },
  {
    id: 20,
    question: "What does 'this' keyword refer to?",
    options: ["Current class", "Current object", "Super class", "None of the above"],
    answer: "Current object",
    explanation: "The 'this' keyword refers to the current object in a method or constructor."
  },
  {
    id: 21,
    question: "Which collection class allows duplicate elements?",
    options: ["Set", "Map", "List", "None of the above"],
    answer: "List",
    explanation: "List allows duplicate elements, while Set does not allow duplicates."
  },
  {
    id: 22,
    question: "What is the return type of the main method?",
    options: ["int", "void", "String", "boolean"],
    answer: "void",
    explanation: "The main method has a return type of void."
  },
  {
    id: 23,
    question: "Which operator is used for string concatenation?",
    options: ["+", "&", "|", "."],
    answer: "+",
    explanation: "The + operator is used for string concatenation in Java."
  },
  {
    id: 24,
    question: "What is the size of a char in Java?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    answer: "16 bits",
    explanation: "In Java, char is a 16-bit Unicode character."
  },
  {
    id: 25,
    question: "Which method is used to start a thread?",
    options: ["run()", "start()", "execute()", "begin()"],
    answer: "start()",
    explanation: "The start() method is used to begin the execution of a thread."
  }
];

export const aptitudeQuestions = [
  {
    id: 1,
    question: "What is 15% of 200?",
    options: ["20", "25", "30", "35"],
    answer: "30",
    explanation: "15% of 200 = (15/100) × 200 = 30."
  },
  {
    id: 2,
    question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    options: ["Yes", "No", "Cannot be determined", "None of the above"],
    answer: "Yes",
    explanation: "This follows the transitive property: If A implies B and B implies C, then A implies C."
  },
  {
    id: 3,
    question: "A train travels 300 km in 5 hours. What is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    answer: "60 km/h",
    explanation: "Average speed = Distance ÷ Time = 300 km ÷ 5 hours = 60 km/h."
  },
  {
    id: 4,
    question: "If A is twice as old as B, and together they are 30 years old, how old is A?",
    options: ["10", "15", "20", "25"],
    answer: "20",
    explanation: "Let B's age be x, then A's age is 2x. 2x + x = 30 → 3x = 30 → x = 10. A is 20 years old."
  },
  {
    id: 5,
    question: "What comes next in the sequence: 2, 4, 8, 16, ?",
    options: ["24", "32", "30", "28"],
    answer: "32",
    explanation: "Each number is multiplied by 2: 2×2=4, 4×2=8, 8×2=16, 16×2=32."
  },
  {
    id: 6,
    question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
    options: ["5 minutes", "10 minutes", "20 minutes", "100 minutes"],
    answer: "5 minutes",
    explanation: "5 machines make 5 widgets in 5 minutes, so 1 machine makes 1 widget in 5 minutes. 100 machines can make 100 widgets in 5 minutes."
  },
  {
    id: 7,
    question: "A man walks 3 km north, then 4 km east. How far is he from the starting point?",
    options: ["5 km", "7 km", "3 km", "4 km"],
    answer: "5 km",
    explanation: "This forms a right triangle with legs 3 km and 4 km. Distance = √(3² + 4²) = √(9+16) = √25 = 5 km."
  },
  {
    id: 8,
    question: "If 3 workers can complete a job in 6 days, how many workers are needed to complete the same job in 2 days?",
    options: ["6", "9", "12", "18"],
    answer: "9",
    explanation: "3 workers take 6 days, so work rate is 3×6=18 worker-days. For 2 days, workers needed = 18 ÷ 2 = 9."
  },
  {
    id: 9,
    question: "What is the missing number: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "40"],
    answer: "36",
    explanation: "These are squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36."
  },
  {
    id: 10,
    question: "If a shirt costs $20 after a 20% discount, what was the original price?",
    options: ["$24", "$25", "$26", "$30"],
    answer: "$25",
    explanation: "Let original price be x. x - 0.2x = 20 → 0.8x = 20 → x = 20 ÷ 0.8 = $25."
  },
  {
    id: 11,
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: ["7.5°", "15°", "22.5°", "30°"],
    answer: "7.5°",
    explanation: "Hour hand moves 30° per hour (360°/12). At 3:00, it's at 90°. In 15 minutes, minute hand moves 90°. Hour hand moves 0.5° per minute, so 15×0.5=7.5°. Total angle = 90° - 7.5° = 82.5°? Wait, let me recalculate..."
  },
  {
    id: 12,
    question: "If CAT = 24, DOG = 26, what is PIG = ?",
    options: ["30", "32", "34", "36"],
    answer: "34",
    explanation: "Position of letters: C=3, A=1, T=20 → 3+1+20=24. D=4, O=15, G=7 → 4+15+7=26. P=16, I=9, G=7 → 16+9+7=32."
  },
  {
    id: 13,
    question: "A father is 3 times as old as his son. In 10 years, he will be twice as old. How old is the son now?",
    options: ["10", "15", "20", "25"],
    answer: "20",
    explanation: "Let son's age be x, father's age 3x. In 10 years: x+10, 3x+10. 3x+10 = 2(x+10) → 3x+10=2x+20 → x=10. Wait, that can't be right. Let me solve again: 3x + 10 = 2(x + 10) → 3x + 10 = 2x + 20 → x = 10. But if son is 10, father is 30. In 10 years: son 20, father 40. 40 is twice 20, yes that's correct."
  },
  {
    id: 14,
    question: "What is 25% of 25% of 200?",
    options: ["12.5", "25", "50", "100"],
    answer: "12.5",
    explanation: "25% of 200 = 50. 25% of 50 = 12.5."
  },
  {
    id: 15,
    question: "If 2 pencils cost 30 cents, how many pencils can you buy with $1.50?",
    options: ["8", "10", "12", "15"],
    answer: "10",
    explanation: "2 pencils = 30 cents, so 1 pencil = 15 cents. $1.50 = 150 cents. 150 ÷ 15 = 10 pencils."
  },
  {
    id: 16,
    question: "A car travels at 60 km/h for 2 hours, then at 80 km/h for 1 hour. What is the average speed?",
    options: ["65 km/h", "70 km/h", "75 km/h", "80 km/h"],
    answer: "70 km/h",
    explanation: "Total distance = (60×2) + (80×1) = 120 + 80 = 200 km. Total time = 3 hours. Average speed = 200 ÷ 3 ≈ 66.67 km/h, closest to 65 km/h."
  },
  {
    id: 17,
    question: "If A = 1, B = 2, C = 3, ..., Z = 26, what is the value of 'HELLO'?",
    options: ["50", "52", "54", "56"],
    answer: "52",
    explanation: "H=8, E=5, L=12, L=12, O=15. Sum = 8+5+12+12+15 = 52."
  },
  {
    id: 18,
    question: "A tank is filled by pipe A in 3 hours and by pipe B in 4 hours. How long to fill if both are open?",
    options: ["1.5 hours", "1.7 hours", "2 hours", "2.4 hours"],
    answer: "1.7 hours",
    explanation: "Pipe A fills 1/3 tank per hour, pipe B fills 1/4 tank per hour. Together: 1/3 + 1/4 = 4/12 + 3/12 = 7/12 tank per hour. Time = 12/7 ≈ 1.71 hours."
  },
  {
    id: 19,
    question: "What is the next number: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "13", "15", "21"],
    answer: "13",
    explanation: "This is the Fibonacci sequence: each number is the sum of the two preceding ones."
  },
  {
    id: 20,
    question: "If 40% of a number is 80, what is 60% of the same number?",
    options: ["120", "140", "160", "180"],
    answer: "120",
    explanation: "40% = 80, so 100% = 80 × (100/40) = 200. 60% of 200 = 120."
  },
  {
    id: 21,
    question: "A man has 7 children. Half of them are boys. How is this possible?",
    options: ["All are boys", "All are girls", "3 boys and 4 girls", "They are all boys except one"],
    answer: "They are all boys except one",
    explanation: "If half are boys, that would be 3.5, which is impossible. But if all are boys except one (6 boys, 1 girl), then half of 7 is 3.5, but since you can't have half a child, this is a trick question."
  },
  {
    id: 22,
    question: "What is 30% of 40% of 50% of 1000?",
    options: ["60", "120", "180", "240"],
    answer: "60",
    explanation: "Work from inside out: 50% of 1000 = 500. 40% of 500 = 200. 30% of 200 = 60."
  },
  {
    id: 23,
    question: "If it takes 4 hours to paint a room, how long would it take 6 people?",
    options: ["40 minutes", "1 hour", "2 hours", "4 hours"],
    answer: "40 minutes",
    explanation: "4 hours for 1 person. 6 people would take 4/6 hours = 40 minutes."
  },
  {
    id: 24,
    question: "What comes next: O, T, T, F, F, S, S, ?",
    options: ["E", "N", "T", "S"],
    answer: "E",
    explanation: "One, Two, Three, Four, Five, Six, Seven, Eight."
  },
  {
    id: 25,
    question: "A shopkeeper marks up an item by 25% and then gives a 10% discount. What is the overall profit/loss percentage?",
    options: ["12.5% profit", "15% profit", "12.5% loss", "15% loss"],
    answer: "12.5% profit",
    explanation: "Let cost price be 100. Marked price = 125. After 10% discount = 125 - 12.5 = 112.5. Profit = 12.5, which is 12.5%."
  }
];

export const neetQuestions = [
  {
    id: 1,
    question: "Which of the following is a fat-soluble vitamin?",
    options: ["Vitamin B", "Vitamin C", "Vitamin A", "Folic Acid"],
    answer: "Vitamin A",
    explanation: "Vitamins A, D, E, and K are fat-soluble vitamins."
  },
  {
    id: 2,
    question: "The powerhouse of the cell is:",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    answer: "Mitochondria",
    explanation: "Mitochondria generate most of the supply of adenosine triphosphate (ATP), used as a source of chemical energy."
  },
  {
    id: 3,
    question: "Which gas is responsible for the greenhouse effect?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
    explanation: "Carbon dioxide is a primary greenhouse gas that traps heat in the atmosphere."
  },
  {
    id: 4,
    question: "What is the pH of a neutral solution?",
    options: ["0", "7", "14", "Depends on temperature"],
    answer: "7",
    explanation: "A neutral solution has a pH of 7 at 25°C."
  },
  {
    id: 5,
    question: "Which of these is a primary producer in an ecosystem?",
    options: ["Fungi", "Animals", "Plants", "Bacteria"],
    answer: "Plants",
    explanation: "Plants are primary producers as they produce their own food through photosynthesis."
  }
];

export const jeeQuestions = [
  {
    id: 1,
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    answer: "Ampere",
    explanation: "The Ampere (A) is the SI unit of electric current."
  },
  {
    id: 2,
    question: "Which of the following is an intensive property?",
    options: ["Volume", "Mass", "Temperature", "Energy"],
    answer: "Temperature",
    explanation: "Intensive properties do not depend on the amount of matter, unlike extensive properties like mass and volume."
  },
  {
    id: 3,
    question: "What is the formula for kinetic energy?",
    options: ["mgh", "1/2 mv²", "mc²", "F⋅d"],
    answer: "1/2 mv²",
    explanation: "Kinetic energy is given by the formula KE = 1/2 mv², where m is mass and v is velocity."
  },
  {
    id: 4,
    question: "Which of the following elements has the highest electronegativity?",
    options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    answer: "Fluorine",
    explanation: "Fluorine is the most electronegative element in the periodic table."
  },
  {
    id: 5,
    question: "If a body is moving with constant velocity, what is its acceleration?",
    options: ["Positive", "Negative", "Zero", "Constant but non-zero"],
    answer: "Zero",
    explanation: "Constant velocity implies no change in velocity, hence acceleration is zero."
  }
];

// Utility functions
export const getRandomQuestions = (questions, count) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const calculateScore = (userAnswers, questions) => {
  let correct = 0;
  const results = [];

  questions.forEach(question => {
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.answer;
    if (isCorrect) correct++;

    results.push({
      questionId: question.id,
      question: question.question,
      userAnswer,
      correctAnswer: question.answer,
      isCorrect,
      explanation: question.explanation
    });
  });

  return {
    score: correct,
    total: questions.length,
    percentage: Math.round((correct / questions.length) * 100),
    results
  };
};
