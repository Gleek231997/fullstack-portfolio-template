import React from "react";
// Added specific solid icons relevant to the new categories
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faDatabase, 
    faCloud, 
    faCode, 
    faTerminal, 
    faCogs, 
    faProjectDiagram 
} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { motion } from "framer-motion";

// --- Updated Skill Data based on user's list ---

const languages = [
    "JavaScript", "TypeScript", "Python", "C#", "SQL", "HTML5", "CSS3", "Bash"
];

const frontEnd = [
    "Angular 10+", "Bootstrap", "RxJS", "Responsive Design"
];

const backEnd = [
    "ASP.NET Core", "Node.js", "Flask", "REST API Development", "Microservices"
];

const databases = [
    "PostgreSQL", "MySQL", "MongoDB", "Azure SQL", "Snowflake"
];

const cloudDevOps = [
    "AWS (Lambda, S3, EC2)", "Azure (App Services, Data Factory)", "Docker", "Kubernetes", "Jenkins", "Azure DevOps", "Git", "CI/CD Pipelines"
];

const dataEngineering = [
    "Kafka", "PySpark", "Hadoop (basic)", "ETL Pipelines"
];

const coreConcepts = [
    "API Design", "Authentication & Authorization", "Unit Testing", "Agile/Scrum"
];

const toolsReporting = [
    "Postman", "Swagger", "JIRA", "Visual Studio", "Power BI", "Tableau"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                {/* 1. Programming Languages & Scripting */}
                <div className="skill">
                    <FontAwesomeIcon icon={faTerminal} size="3x"/>
                    <h3 className="gradient-heading">
                      Programming Languages & Scripting
                    </h3>
                    <div className="space-y-2 text-gray-900 dark:text-gray-100"> 
                        {[
                             "Proficient in compiled (C#) and scripting (Python, JS/TS) languages, focusing on efficient and scalable code.",
                             "Strong command of SQL for complex data query and manipulation across various platforms.",
                             "Utilize Bash for scripting, automation, and streamlining DevOps workflows."
                            ] .map((text, index) => (
                            <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="leading-relaxed"
                            >
                                {text}
                                </motion.p>
                            ))}
                    </div>
                    <div className="flex-chips">
                        <span className="chip-title">Languages:</span>
                        {languages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 2. Full-Stack & API Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x" />
                         <h3 className="gradient-heading">
                            Full-Stack & API Development
                        </h3>
                        <p>
                            Experienced in building end-to-end applications, specializing in Angular for dynamic UIs and robust backend frameworks like ASP.NET Core, Node.js, and Flask for scalable REST API and Microservices architecture.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Frontend:</span>
                            {frontEnd.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Backend:</span>
                            {backEnd.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                </div>

                {/* 3. Data Persistence & Databases */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3 className="gradient-heading">
                        Data Persistence & Databases
                    </h3>
                    <p>
                        Proficient in designing, optimizing, and maintaining relational (PostgreSQL, MySQL, Azure SQL) and NoSQL (MongoDB) data stores. Experienced with modern cloud data warehousing using Snowflake.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Platforms:</span>
                        {databases.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                {/* 4. Cloud Infrastructure & DevOps */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x" />
                     <h3 className="gradient-heading">
                        Cloud Infrastructure & DevOps
                    </h3>
                     <p>
                        Expertise in multi-cloud environments (AWS & Azure), leveraging serverless computing and infrastructure as code. Strong focus on containerization (Docker, Kubernetes) and implementing robust CI/CD pipelines.
                         </p>
                         <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {cloudDevOps.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />))}
                         </div>
                </div>

                {/* 5. Big Data & Data Engineering */}
                <div className="skill">
                    <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
                    <h3 className="gradient-heading">
                        Big Data, Streaming & ETL
                    </h3>
                    <p>
                        Skilled in processing and analyzing large datasets using PySpark and basic Hadoop. Experience with real-time data streaming via Kafka and designing efficient, scalable ETL pipelines.
                        </p>
                        <div className="flex-chips">
                        <span className="chip-title">Platforms:</span>
                        {dataEngineering.map((label, index) => (
                            <Chip key={index} className="chip" label={label} />))}
                        </div>
                </div>


                {/* 6. Tools & Core Concepts */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x" />
                    <h3 className="gradient-heading">
                        Core Concepts & Tools
                    </h3>
                    <p>
                        A strong foundation in software development principles (Unit Testing, Agile/Scrum) and application architecture (API Design, Auth). Proficient with development, testing, and reporting tools.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Concepts:</span>
                            {coreConcepts.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />))}
                        </div>
                        <div className="flex-chips">
                            <span className="chip-title">Tools/Reporting:</span>
                            {toolsReporting.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />))}
                        </div>
                </div>


            </div>
        </div>
    </div>
    );
}
export default Expertise;
