export const projects = [
    // All projects below are preserved and appended without overwriting
    {
        id: 1,
        title: "Trash to Treasure",
        stack_tags: ["HTML", "CSS", "JavaScript", "Firebase", "Mapbox API"],
        quick_description:
            "A recycling helper app that lets users figure out what materials are recyclable and shows the nearest drop-off depots using an interactive map.",
        github_href: "https://github.com/mjwanless/Trash_To_Treasure",
        example_img: "/images/projects/trash-to-treasure/cover.jpg",
        project_imgs: [
            "/images/projects/trash-to-treasure/homepage.jpg",
            "/images/projects/trash-to-treasure/locator.jpg",
            "/images/projects/trash-to-treasure/material.jpg",
        ],
        full_description:
            "Trash to Treasure is a web app built to make recycling simpler. Users can search or browse common household materials to learn how to properly dispose of or recycle them. It uses the Mapbox API to show nearby depots based on the user’s location and provides helpful context for each item type. The app is fully client-side and powered by Firebase for storage and hosting. It was designed with sustainability in mind—making it easier for people to get recycling info without having to dig through government websites. Features include categorized material info, real-time location-based depot lookup, and a clean, responsive UI.",
    },
    {
        id: 2,
        title: "Barcode Scanner Robot",
        stack_tags: ["RobotC", "EV3", "MATLAB", "Data Processing"],
        quick_description:
            "An EV3 robot that scans barcodes using a color sensor, processes the data, and decodes characters through MATLAB analysis.",
        github_href: "https://github.com/mjwanless/Barcode_Scanner_Robot",
        example_img: "/images/projects/barcode-scanner-robot/cover.jpg",
        project_imgs: [
            "/images/projects/barcode-scanner-robot/scanning.jpg",
            "/images/projects/barcode-scanner-robot/sensor-setup.jpg",
            "/images/projects/barcode-scanner-robot/data-visualization.jpg",
        ],
        full_description:
            "This project involved designing and programming an EV3 robot capable of scanning barcodes using a color sensor. As the robot traverses over a barcode, it records color intensity values, which are then saved to a text file. These values are converted into a CSV format and analyzed using MATLAB scripts to decode the corresponding characters. The integration of RobotC for controlling the robot and MATLAB for data processing demonstrates a practical application of robotics and signal analysis in interpreting visual data.",
    },
    {
        id: 3,
        title: "Climate in a Box: Smart Planter Project",
        stack_tags: ["Arduino", "C++", "Electronics", "IoT", "Sensors"],
        quick_description:
            "A smart planter system designed to automate plant care through controlled-environment agriculture using Arduino technology.",
        github_href: "https://github.com/mjwanless/Planter_Project",
        example_img: "/images/projects/planter-project/cover.jpg",
        project_imgs: [
            "/images/projects/planter-project/image1.jpg",
            "/images/projects/planter-project/image2.jpg",
            "/images/projects/planter-project/image3.jpg",
        ],
        full_description:
            "The Planter Project, also known as 'Climate in a Box,' is an innovative smart farming system designed to provide automated plant care in a controlled environment. The system uses an Arduino Uno to monitor and control key variables affecting plant growth, such as light timing and soil moisture. Users can set specific parameters, including light schedules and minimum soil moisture levels, and the system autonomously adjusts these conditions for optimal plant health.\n\nThis prototype demonstrates the potential of hyper-local food production by creating a climate-controlled growing environment that mimics large-scale agricultural practices. The project was inspired by smart farming concepts and aims to make farming more precise and efficient at the household level. Future enhancements include adding air humidity and temperature sensors, as well as integrating Bluetooth or Wi-Fi connectivity for app-based monitoring and control.",
    },
    {
        id: 4,
        title: "Maze Generator Robot",
        stack_tags: ["RobotC", "EV3", "Algorithms"],
        quick_description: "An EV3 robot programmed to autonomously solve generated mazes using pathfinding algorithms.",
        github_href: "https://github.com/mjwanless/Maze_Generator_Robot",
        example_img: "/images/projects/maze-generator-robot/cover.jpg",
        project_imgs: [
            "/images/projects/maze-generator-robot/maze-example.jpg",
            "/images/projects/maze-generator-robot/robot-pathfinding.jpg",
            "/images/projects/maze-generator-robot/maze-solution.jpg",
        ],
        full_description:
            "This project involves programming an EV3 robot to solve randomly generated mazes using pathfinding algorithms. The robot navigates through the maze by recognizing walls and applying maze-solving techniques. Developed with RobotC, the project emphasizes autonomous movement and decision-making in real-world scenarios.",
    },

    {
        id: 5,
        title: "Colonel's Quest",
        stack_tags: ["Python"],
        quick_description: "A text-based adventure game where players challenge Colonel Sanders to claim his secret recipe.",
        github_href: "https://github.com/mjwanless/Colonels-quest",
        example_img: "/images/projects/colonels-quest/cover.jpg",
        project_imgs: [
            "/images/projects/colonels-quest/gameplay.jpg",
            "/images/projects/colonels-quest/battle-scene.jpg",
            "/images/projects/colonels-quest/victory-screen.jpg",
        ],
        full_description:
            "Colonel's Quest is a text-based adventure game developed as a term-end project for a Python course at BCIT. In this game, players embark on a quest to defeat Colonel Sanders and claim the powers of his 11 herbs and spices. The game features various spells and challenges, providing an engaging experience for players interested in interactive fiction.",
    },
    {
        id: 6,
        title: "C Final Project: Hangman Game",
        stack_tags: ["C", "Game Development", "Algorithms"],
        quick_description: "A terminal-based Hangman game built from scratch using C for a final course project.",
        github_href: "https://github.com/mjwanless/CFinalProjectHangman",
        example_img: "/images/projects/c-hangman-game/cover.jpg",
        project_imgs: [
            "/images/projects/c-hangman-game/title-screen.jpg",
            "/images/projects/c-hangman-game/gameplay.jpg",
            "/images/projects/c-hangman-game/game-logic.jpg",
        ],
        full_description:
            "This project is a command-line Hangman game developed as a final project for a C programming course. The game features a randomized word selection, letter-guessing mechanics, and a visual representation of the hangman progress. Built entirely in C, the project demonstrates a deep understanding of control flow, string manipulation, and basic algorithms.",
    },
    {
        id: 7,
        title: "FreshPlate",
        stack_tags: ["HTML", "CSS", "EJS", "Node.js", "Express", "MongoDB"],
        quick_description: "A recipe discovery and management app featuring personalized recommendations and a shopping cart for ingredients.",
        github_href: "https://github.com/mjwanless/2800-202410-DTC13",
        example_img: "/images/projects/freshplate/cover.jpg",
        project_imgs: [
            "/images/projects/freshplate/landing-page.jpg",
            "/images/projects/freshplate/home-page.jpg",
            "/images/projects/freshplate/browse-page.jpg",
            "/images/projects/freshplate/recipe-info-page.jpg",
        ],
        full_description:
            "FreshPlate is a collaborative web application developed by Team DTC-13, comprising Malcolm Wanless, Xini Wang, Caroline Su, Flora Deng, and Joao Eduardo Santos Pollhuber. The application offers users a seamless experience for discovering and managing recipes, featuring personalized recommendations and a shopping cart for ingredients. Built with a frontend utilizing HTML, CSS, and EJS, and a backend powered by Node.js, Express, and MongoDB, FreshPlate aims to enhance culinary exploration and organization.",
    },
    {
        id: 8,
        title: "Dice Adventure 2",
        stack_tags: ["Java", "LibGDX", "OOP", "Design Patterns"],
        quick_description: "A turn-based dice combat auto-battler game developed using Java and LibGDX.",
        github_href: "https://github.com/mjwanless/COMP-2522-202410-Term-Project-MH",
        example_img: "/images/projects/dice-adventure-2/cover.jpg",
        project_imgs: [
            "/images/projects/dice-adventure-2/gameplay1.jpg",
            "/images/projects/dice-adventure-2/gameplay2.jpg",
            "/images/projects/dice-adventure-2/uml-diagram.jpg",
        ],
        full_description:
            "Dice Adventure 2 is a turn-based dice combat auto-battler game developed as a term project for the COMP 2522 course. The game allows players to choose two classes and engage in combat against enemies in various arenas. Players roll dice to attack, and enemies retaliate. The game features a storyline, multiple classes (currently with identical stats), and additional attacks per combat for strategic advantage. Developed using Java and the LibGDX framework, the project demonstrates object-oriented programming principles and the implementation of design patterns.",
    },
    {
        id: 9,
        title: "Big Data Assignment 1",
        stack_tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
        quick_description:
            "A Python-based project analyzing Bollywood and heart disease datasets using data cleaning, visualization, and statistical methods.",
        github_href: "https://github.com/mjwanless/BigDataAssignment1",
        example_img: "/images/projects/big-data-assignment-1/cover.jpg",
        project_imgs: [
            "/images/projects/big-data-assignment-1/bollywood-analysis.jpg",
            "/images/projects/big-data-assignment-1/heart-disease-analysis.jpg",
            "/images/projects/big-data-assignment-1/data-visualization.jpg",
        ],
        full_description:
            "This project involves analyzing two datasets: one related to Bollywood movies and another concerning heart disease. Utilizing Python libraries such as Pandas, NumPy, and Matplotlib, the project performs data cleaning, exploratory data analysis, and visualization. Key tasks include calculating return on investment for movies, examining genre distributions, and exploring correlations in health data. The project demonstrates proficiency in data manipulation, statistical analysis, and the creation of insightful visualizations to interpret complex datasets.",
    },
    {
        id: 10,
        title: "FridgeToFork",
        stack_tags: ["Python", "Flask", "YOLO", "HTML", "CSS", "JavaScript", "Tailwind CSS", "PyTorch", "Spoonacular API"],
        quick_description: "A web app that identifies ingredients from photos and suggests recipes you can make with them.",
        github_href: "https://github.com/mjwanless/BD-Food-Detection-App",
        example_img: "/images/projects/fridge-to-fork/cover.jpg",
        project_imgs: [
            "/images/projects/fridge-to-fork/ingredient-detection.jpg",
            "/images/projects/fridge-to-fork/recipe-suggestions.jpg",
            "/images/projects/fridge-to-fork/recipe-details.jpg",
        ],
        full_description:
            "FridgeToFork is a web application that helps users discover recipes based on ingredients they already have. By capturing ingredients using a webcam or uploading an image, the app utilizes a custom YOLO model for AI-powered ingredient detection. Users can manually edit or add ingredients, filter recipes by cuisine type and dietary restrictions, and view detailed recipe information with direct links to full instructions. The frontend is built with HTML, CSS (Tailwind CSS), and JavaScript, while the backend is powered by Flask (Python). The application integrates the Spoonacular API for recipe search and requires Python 3.8 or higher, Flask, and PyTorch.",
    },
    {
        id: 11,
        title: "IA RESTful AI Project",
        stack_tags: ["JavaScript", "HTML", "REST API", "AI Integration"],
        quick_description: "A web application integrating AI functionalities through a RESTful API interface.",
        github_href: "https://github.com/mjwanless/IA-restful-AI-Project",
        example_img: "/images/projects/ia-restful-ai-project/cover.jpg",
        project_imgs: [
            "/images/projects/ia-restful-ai-project/interface.jpg",
            "/images/projects/ia-restful-ai-project/api-endpoints.jpg",
            "/images/projects/ia-restful-ai-project/ai-integration.jpg",
        ],
        full_description:
            "The IA RESTful AI Project is a web application that integrates artificial intelligence functionalities through a RESTful API interface. Developed using JavaScript and HTML, the project demonstrates how to build and consume RESTful APIs to incorporate AI features into web applications. The project structure includes separate backend and frontend directories, showcasing a modular approach to development. While specific AI functionalities are not detailed, the project serves as a foundation for integrating AI services via RESTful APIs.",
    },
    {
        id: 12,
        title: "PML Assignment 2: Credit Default Prediction",
        stack_tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "Ensemble Learning"],
        quick_description: "A machine learning project predicting credit defaults using ensemble models and feature engineering.",
        github_href: "https://github.com/mjwanless/PML-Assignment-2",
        example_img: "/images/projects/pml-assignment-2/cover.jpg",
        project_imgs: [
            "/images/projects/pml-assignment-2/feature-importance.jpg",
            "/images/projects/pml-assignment-2/model-performance.jpg",
            "/images/projects/pml-assignment-2/ensemble-architecture.jpg",
        ],
        full_description:
            "PML Assignment 2 focuses on building, evaluating, and deploying multiple machine learning models to predict the likelihood of a customer defaulting on their credit payment. The workflow includes extensive feature engineering, model training, performance evaluation, hyperparameter tuning, and ensemble stacking. The dataset comprises historical credit data, demographic information, and bill/payment behavior. The project demonstrates proficiency in handling real-world data, implementing various machine learning algorithms, and optimizing model performance through ensemble techniques.",
    },
    {
        id: 13,
        title: "PML Assignment 1: Predicting Cat Shelter Outcomes",
        stack_tags: ["Python", "Pandas", "scikit-learn", "Machine Learning", "Data Cleaning", "EDA"],
        quick_description: "A supervised machine learning project predicting outcomes for shelter cats based on intake attributes.",
        github_href: "https://github.com/mjwanless/PML_assignment_1",
        example_img: "/images/projects/pml-assignment-1/cover.jpg",
        project_imgs: [
            "/images/projects/pml-assignment-1/data-cleaning.jpg",
            "/images/projects/pml-assignment-1/model-training.jpg",
            "/images/projects/pml-assignment-1/prediction-results.jpg",
        ],
        full_description:
            "This project applies supervised machine learning to predict outcomes for cats admitted to a shelter, utilizing features such as age, intake time, coat color, and spay/neuter status. The workflow encompasses data cleaning, feature engineering, exploratory data analysis (EDA), model evaluation, and ensemble learning. The dataset originates from animal shelter intake records, and the project demonstrates proficiency in handling real-world data, implementing machine learning algorithms, and optimizing model performance.",
    },
    {
        id: 14,
        title: "Personal Portfolio Site",
        stack_tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
        quick_description: "A responsive developer portfolio built with Next.js and Tailwind CSS, showcasing projects and skills.",
        github_href: "https://github.com/mjwanless/portfolio-site",
        example_img: "/images/projects/portfolio-site/cover.jpg",
        project_imgs: [
            "/images/projects/portfolio-site/homepage.jpg",
            "/images/projects/portfolio-site/projects-section.jpg",
            "/images/projects/portfolio-site/contact-form.jpg",
        ],
        full_description:
            "This personal portfolio site is designed to showcase my projects, skills, and professional background. Built with Next.js and TypeScript, it leverages Tailwind CSS for responsive and modern styling. The site features a clean layout, interactive project cards, and a contact form, providing visitors with an engaging experience. Hosted on Vercel, it ensures fast load times and seamless deployment. The project demonstrates proficiency in modern web development practices and serves as a central hub for my professional presence.",
    },
];
