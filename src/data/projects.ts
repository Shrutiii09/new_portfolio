export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
  images?: string[];
  category: 'web' | 'security' | 'system' | 'compiler' | 'scraping' | 'ml' | 'fintech';
}

export const projects: ProjectData[] = [
  {
    id: '1',
    slug: 'personal-investment-advisor-chatbot',
    title: "Personal Investment Advisor Chatbot",
    shortDescription: "AI-powered chatbot using NLP and Finance APIs for real-time investment advice and financial calculations",
    description: [
      "In today's fast-paced digital era, individuals often seek quick and reliable financial advice without navigating complex websites or consulting advisors. This project presents a Personal Investment Advisor Chatbot, a smart virtual assistant that leverages Natural Language Processing (NLP) and Finance APIs to respond to investment-related queries in real time.",
      "The chatbot helps users with SIP calculations, FD estimations, mutual fund NAVs, stock and gold prices — all through a friendly chat interface. It combines machine learning for intent classification with real-time financial data integration to provide comprehensive investment guidance.",
      "Built with a modular architecture using Python and Streamlit, the system features an intelligent NLP engine that processes natural language queries and routes them to appropriate financial calculation modules. The chatbot can handle complex investment scenarios and provide visual representations of financial projections.",
      "The system integrates multiple data sources including Yahoo Finance for stock prices, AMFI for mutual fund NAVs, and web scraping for gold prices, ensuring users receive accurate and up-to-date financial information for their investment decisions."
    ],
    technologies: ["Python", "Streamlit", "NLP", "NLTK", "spaCy", "Scikit-learn", "Naive Bayes", "Yahoo Finance API", "BeautifulSoup", "Matplotlib", "Pandas", "Machine Learning"],
    github: "https://github.com/Shrutiii09/Investment-Advisor-Chatbot",
    category: 'fintech',
    features: [
      "Natural Language Processing for intent classification using CountVectorizer and Naive Bayes",
      "Real-time stock price lookup with live data from Yahoo Finance",
      "SIP (Systematic Investment Plan) calculator with interactive line charts and projections",
      "Fixed Deposit calculator with compound interest calculations and visual representations",
      "Mutual fund NAV lookup from AMFI with fuzzy matching for fund names",
      "Gold price scraping from trusted financial websites with real-time updates",
      "Interactive Streamlit web interface with persistent conversation history",
      "Modular architecture with separate handlers for different financial instruments",
      "Machine learning-based intent detection for accurate query understanding",
      "Visual charts and graphs for investment projections and historical data",
      "Comprehensive financial advice based on user risk profile and investment duration",
      "Support for multiple investment scenarios and personalized recommendations"
    ],
    challenges: [
      "Implementing accurate intent classification for diverse financial queries using NLP",
      "Integrating multiple financial data sources with different API structures and formats",
      "Handling real-time data fetching while maintaining application performance",
      "Creating intuitive conversation flows for complex financial calculations",
      "Implementing fuzzy matching for mutual fund names to handle user input variations",
      "Designing responsive charts and visualizations within the Streamlit framework",
      "Managing data consistency across different financial APIs and scraping sources",
      "Optimizing machine learning model performance for real-time query processing"
    ],
    learnings: [
      "Advanced Natural Language Processing techniques for financial domain applications",
      "Integration of multiple financial APIs and data sources in a single application",
      "Machine learning model development for text classification and intent recognition",
      "Real-time data processing and visualization using Python libraries",
      "Conversational AI design principles and user experience optimization",
      "Financial calculations and investment mathematics implementation",
      "Web scraping techniques for dynamic financial data extraction",
      "Streamlit framework for rapid prototyping and deployment of ML applications",
      "Modular software architecture design for scalable financial applications",
      "Data preprocessing and feature engineering for NLP models in finance"
    ]
  },
  {
    id: '2',
    slug: 'fake-news-detector',
    title: "Fake News Detector Using ML",
    shortDescription: "Machine learning-based system to classify news articles as FAKE or REAL using NLP and Logistic Regression",
    description: [
      "In the digital era, the rapid dissemination of information has introduced both unprecedented benefits and critical challenges. One of the most concerning challenges is the proliferation of fake news—deliberately misleading or false content presented as news.",
      "This project presents a machine learning-based Fake News Detection system that classifies news articles as either 'FAKE' or 'REAL' using natural language processing (NLP) techniques and supervised learning algorithms.",
      "The system was developed using a structured machine learning pipeline with data preprocessing, feature extraction using TF-IDF vectorization, and Logistic Regression for classification. The model achieved approximately 93% accuracy on the test dataset.",
      "The system was deployed using Streamlit, providing a user-friendly web interface that allows users to input news articles and receive instant predictions with visual feedback."
    ],
    technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn", "NLTK", "TF-IDF", "Logistic Regression", "Streamlit", "Pandas", "NumPy"],
    github: "https://github.com/Shrutiii09/Fake_news_detector.git",
    category: 'ml',
    features: [
      "Automated fake news detection with 93% accuracy",
      "Natural Language Processing for text preprocessing and cleaning",
      "TF-IDF vectorization for feature extraction from text data",
      "Logistic Regression model for binary classification",
      "Interactive Streamlit web interface for real-time predictions",
      "Balanced dataset with approximately 6,300 labeled news articles",
      "Comprehensive text preprocessing including stopword removal and tokenization",
      "Visual feedback system for prediction results"
    ],
    challenges: [
      "Handling large volumes of unstructured text data effectively",
      "Implementing comprehensive text preprocessing pipeline",
      "Achieving high accuracy while maintaining model interpretability",
      "Balancing precision and recall for both FAKE and REAL classes",
      "Creating an intuitive user interface for non-technical users",
      "Optimizing model performance with limited computational resources"
    ],
    learnings: [
      "Advanced Natural Language Processing techniques and implementation",
      "Machine Learning pipeline development from data preprocessing to deployment",
      "Text feature extraction using TF-IDF vectorization",
      "Model evaluation metrics and performance optimization",
      "Web application development using Streamlit framework",
      "Understanding of misinformation detection challenges and solutions",
      "Data science project lifecycle and best practices",
      "Real-world application of supervised learning algorithms"
    ]
  },
  {
    id: '3',
    slug: 'lexical-analyzer',
    title: "Lexical Analyzer with GUI Integration",
    shortDescription: "A compiler design project with interactive GUI for tokenizing source code",
    description: [
      "Developed a Lexical Analyzer as part of a compiler design project that efficiently tokenizes source code and identifies lexical patterns such as keywords, identifiers, operators, and symbols.",
      "The project was built using C++ with an interactive Graphical User Interface (GUI) using Dear ImGui and GLFW, ensuring real-time visual feedback during lexical analysis."
    ],
    technologies: ["C++", "Dear ImGui", "GLFW", "File Handling", "OOP"],
    github: "https://github.com/Shrutiii09/LexicalAnalyzer.git",
    category: 'compiler',
    features: [
      "Tokenization Engine: Parses input code and classifies tokens like keywords, identifiers, constants, operators, delimiters, and more",
      "Symbol Table Generator: Maintains a table of user-defined identifiers for use in later compiler phases",
      "Real-time GUI: Displays input source code, token table, and symbol table in a responsive and user-friendly interface",
      "Modular Design: Clear separation of logic using src/ and include/ directories for scalability and maintenance",
      "Performance-focused: Lightweight GUI built using Dear ImGui for minimal overhead and fast rendering"
    ],
    challenges: [
      "Implementing efficient tokenization algorithms for various programming language constructs",
      "Integrating C++ backend logic with ImGui for seamless real-time updates",
      "Managing memory efficiently while handling large source code files",
      "Creating an intuitive GUI layout that clearly displays complex compiler data"
    ],
    learnings: [
      "Deep understanding of lexical analysis phase in compiler design",
      "Experience with GUI development using Dear ImGui and GLFW",
      "Advanced C++ programming with focus on performance optimization",
      "Modular software architecture and separation of concerns"
    ]
  },
  {
    id: '4',
    slug: 'minishell',
    title: "MiniShell – Custom Command Line Shell",
    shortDescription: "A simplified command-line interpreter built with Python",
    description: [
      "Developed a MiniShell, a simplified command-line interpreter using Python, designed to mimic the core behavior of traditional UNIX/Linux shells.",
      "This project enhances understanding of shell scripting, process management, and system-level interaction in a high-level programming language."
    ],
    technologies: ["Python", "subprocess", "os module", "System Programming"],
    github: "https://github.com/Shrutiii09/minishelll.git",
    category: 'system',
    features: [
      "Command Execution: Runs both built-in and external system commands using the subprocess module",
      "Input Parsing: Handles user input with support for command arguments, pipes (|), and redirections (>, <)",
      "Piping & Redirection: Implements basic I/O redirection and piping to allow chaining of commands",
      "Error Handling: Provides meaningful error messages for invalid commands or failed executions",
      "Interactive Loop: Mimics a traditional shell prompt (myshell>) with continuous user interaction"
    ],
    challenges: [
      "Implementing proper process management and handling child processes",
      "Parsing complex command strings with pipes and redirections",
      "Managing file descriptors for I/O redirection",
      "Handling edge cases and providing robust error handling"
    ],
    learnings: [
      "System-level programming concepts in Python",
      "Process management and inter-process communication",
      "Command parsing and shell internals",
      "File handling and I/O redirection mechanisms"
    ]
  },
  {
    id: '5',
    slug: 'data-leak-detection',
    title: "Data Leak Detection System",
    shortDescription: "Real-time data monitoring system for identifying potential data leaks",
    description: [
      "Real time data monitoring system in Python",
      "Developed a Python system to effectively identify and flag potential data leaks.",
      "Integrated real-time monitoring for immediate detection and response to data breaches."
    ],
    technologies: ["Python", "Data Analysis", "Security", "Real-time Monitoring"],
    github: "https://github.com/Shrutiii09/data-leak-detection",
    category: 'security',
    features: [
      "Real-time monitoring of data flows and access patterns",
      "Pattern recognition algorithms to identify suspicious activities",
      "Automated alerting system for potential data breaches",
      "Comprehensive logging and audit trail functionality",
      "Configurable sensitivity levels for different data types"
    ],
    challenges: [
      "Implementing efficient real-time monitoring without performance impact",
      "Developing accurate pattern recognition to minimize false positives",
      "Handling large volumes of data while maintaining system responsiveness",
      "Creating a robust alerting mechanism for immediate response"
    ],
    learnings: [
      "Data security principles and breach detection methodologies",
      "Real-time system design and implementation",
      "Pattern recognition and anomaly detection algorithms",
      "Security monitoring best practices"
    ]
  },
  {
    id: '6',
    slug: 'steganography-tool',
    title: "Encryption and Decryption using Digital Cryptography",
    shortDescription: "Django-based steganography tool with LSB encryption for secure image data hiding",
    description: [
      "Developed a Django-based steganography tool using LSB encryption for secure image data hiding.",
      "Designed a responsive UI with JavaScript, Bootstrap, and Tailwind CSS; implemented unit testing for validation."
    ],
    technologies: ["Django", "JavaScript", "Bootstrap", "Tailwind CSS", "Cryptography", "LSB Encryption"],
    github: "https://github.com/Shrutiii09/steganography-tool",
    category: 'security',
    features: [
      "LSB (Least Significant Bit) encryption for hiding data in images",
      "User-friendly web interface for easy file upload and processing",
      "Support for multiple image formats (PNG, JPEG, BMP)",
      "Secure data extraction and decryption capabilities",
      "Responsive design optimized for all device sizes"
    ],
    challenges: [
      "Implementing efficient LSB encryption algorithms",
      "Maintaining image quality while embedding hidden data",
      "Creating an intuitive user interface for complex cryptographic operations",
      "Ensuring data integrity during the encryption/decryption process"
    ],
    learnings: [
      "Digital cryptography and steganography techniques",
      "Image processing and manipulation algorithms",
      "Full-stack web development with Django",
      "Security-focused application development"
    ]
  },
  {
    id: '7',
    slug: 'web-scraper',
    title: "Web Scraping Tool",
    shortDescription: "Python scraper with Beautiful Soup for automated data collection",
    description: [
      "Created a Python scraper with Beautiful Soup for automated data collection.",
      "Developed an adaptable, scalable tool for diverse web scraping tasks."
    ],
    technologies: ["Python", "Beautiful Soup", "Data Collection", "Web Scraping"],
    github: "https://github.com/Shrutiii09/web-scraper",
    category: 'scraping',
    features: [
      "Automated data extraction from multiple website structures",
      "Configurable scraping parameters for different data types",
      "Rate limiting and respectful scraping practices",
      "Data export in multiple formats (CSV, JSON, XML)",
      "Error handling and retry mechanisms for robust operation"
    ],
    challenges: [
      "Handling dynamic content and JavaScript-rendered pages",
      "Implementing respectful scraping with proper delays",
      "Managing different website structures and layouts",
      "Dealing with anti-scraping measures and CAPTCHAs"
    ],
    learnings: [
      "Web scraping ethics and best practices",
      "HTML parsing and data extraction techniques",
      "Handling HTTP requests and responses",
      "Data processing and export methodologies"
    ]
  },
  {
    id: '8',
    slug: 'tic-tac-toe',
    title: "TIC-TAC-TOE",
    shortDescription: "Interactive Tic-Tac-Toe game built with Next.js and TypeScript",
    description: [
      "Built a Tic-Tac-Toe game with Next.js, React, and TypeScript featuring animations and Vercel deployment."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "CSS Animations"],
    liveDemo: "https://bouncee.vercel.app/",
    github: "https://github.com/Shrutiii09/tic-tac-toe",
    category: 'web',
    features: [
      "Interactive game board with smooth animations",
      "Player vs Player gameplay with turn indicators",
      "Win detection and game state management",
      "Responsive design for mobile and desktop",
      "Reset functionality for continuous play"
    ],
    challenges: [
      "Implementing game logic with proper state management",
      "Creating smooth animations and transitions",
      "Ensuring responsive design across all devices",
      "Optimizing performance for smooth gameplay"
    ],
    learnings: [
      "Modern React development with hooks and state management",
      "TypeScript integration for type-safe development",
      "Next.js framework features and deployment",
      "CSS animations and user experience design"
    ]
  },
  {
    id: '9',
    slug: 'atm-simulation',
    title: "ATM Project",
    shortDescription: "Object-oriented ATM simulation system built with C++",
    description: [
      "Designed an ATM simulation project using object-oriented programming in C++.",
      "Simulated banking transactions and user interactions."
    ],
    technologies: ["C++", "OOP", "Banking System", "User Interface"],
    github: "https://github.com/Shrutiii09/atm-simulation",
    category: 'system',
    features: [
      "Complete ATM functionality simulation",
      "Account management with balance tracking",
      "Transaction history and receipt generation",
      "PIN-based authentication system",
      "Multiple account types support"
    ],
    challenges: [
      "Designing a secure authentication system",
      "Implementing proper error handling for banking operations",
      "Creating a user-friendly console interface",
      "Managing account data persistence"
    ],
    learnings: [
      "Object-oriented programming principles in C++",
      "Banking system logic and transaction processing",
      "User interface design for console applications",
      "Data validation and security considerations"
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): ProjectData[] => {
  return projects.filter(project => project.category === category);
};