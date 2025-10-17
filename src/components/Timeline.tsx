import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>CAREER HISTORY</h1>
        <VerticalTimeline>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Research Assistant – Data Science</h2>
            <h3 className="vertical-timeline-element-subtitle"> Abraira Lab, Rutgers Universit | New Brunswick, NJ.</h3>
            <div className="timeline-details">
              <ul>
                <li>Applied machine learning and data analytics to spinal cord injury research, assisting in behavioral data modeling and visualization.</li> 
                <li>Automated data preprocessing pipelines and supported neural activity analysis to improve research efficiency and reproducibility.</li>
                </ul>
             </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Data Researcher for Career Exploration Services</h2>
            <h3 className="vertical-timeline-element-subtitle">Rutgers University | New Brunswick, NJ.</h3>
            <div className="timeline-details">
              <ul>
                <li>Deploy predictive models (XGBoost, Logistic Regression), improving career resource recommendations and
                  boosting engagement by 25%.</li> 
                <li>Automate Python ETL pipelines and optimized SQL workflows, cutting manual effort by 40%.</li>
                <li>Conduct EDA on student engagement data, delivering insights for policy and program improvement.</li>
                </ul>
             </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 – May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Co-op </h3>
            <h4 className="vertical-timeline-element-subtitle">Merck & Rutgers Statistics Dept | New Brunswick, NJ.</h4>
            <div className="timeline-details">
            <ul>
                <li>Applied conformal predictions on neural networks for reliable uncertainty estimation.</li> 
                <li>Enhanced interpretability using SHAP values and Integrated Gradients.</li>
                <li>Designed diagnostics (FDS plots, power curves) to improve experiment validity.</li>
             </ul>
             </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2021 – Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture | Bangalore, India </h4>
            <div className="timeline-details">
            <ul>
                <li>Conducted SQL-driven analysis and automated ETL workflows, supporting predictive models and BI dashboards.</li> 
                <li>Collaborated on ML pipeline optimization, enabling scalable monthly data processing.</li>
                <li>Developed and deployed REST APIs and web applications, enhancing data accessibility and reducing reporting turnaround time by 30%</li>
                <li>Led a team of 3 junior engineers to deliver scalable applications, improving deployment efficiency by 15%.</li>
             </ul>
             </div>
             



          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2019 – Aug 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Vital Axis Pvt Ltd </h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
            <div className="timeline-details">
            <ul>
                <li>Delivered scalable healthcare applications by developing and deploying ASP.NET MVC frameworks with SQL Server and Entity Framework, supporting over 1,000 concurrent users with high availability.</li>
                <li>Improved system throughput by refactoring SQL schema designs and implementing stored procedures and triggers, reducing database latency by 70% and increasing transaction capacity.</li>
                <li>Worked in Agile sprints with cross-functional teams to implement client-requested Angular features, raising customer satisfaction scores by 20%.</li>
                <li>Enhanced release stability by introducing automated unit testing with NUnit and Moq, reducing regression defects by 30%.</li>
             </ul>
             </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;