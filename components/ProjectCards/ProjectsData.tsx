import classPass from '../../app/images/classPass.png';
import disney from '../../app/images/disney.jpg';
import uncluttered from '../../app/images/uncluttered.png';

const projects = [
  {
    title: 'System App Development Intern',
    company: 'The Walt Disney Company',
    date: 'July 2024 - January 2025',
    description:
      'Built an issue reporting platform using React and Spring Boot to consolidate multiple reporting channels, improving communication for internal teams at Disney Central. Designed reusable React components for a centralized form application and developed APIs to seamlessly connect the front-end with the backend. Leveraged CI/CD pipelines using GitLab CI and ensured high code quality through automated testing. Collaborated with developers and end-users to gather requirements and deliver solutions that streamlined workflows.',
    image: disney,
  },
  {
    title: 'Software Engineering Intern',
    company: 'ClassPass',
    date: 'June 2022 - September 2022',
    description:
      'Developed a model governance framework for the ML and Data team at ClassPass, integrating MLFlow with Docker and Amazon S3, and presented the solution to the engineering department. Led an A/B test for a send-time optimization model, achieving a 25% increase in user engagement. Enhanced testing, code review, and deployment processes, improving software quality and streamlining workflows.',
    image: classPass,
  },
  {
    title: 'Software Developer',
    company: 'Uncluttered',
    date: 'September 2023 - June 2024',
    description:
      'Collaborated with a team of five to develop a task management application for students using React, JavaScript, and Node.js. Designed intuitive interfaces with Tailwind CSS to enhance user navigation and experience. Built API endpoints to connect React components with a MongoDB backend, ensuring efficient data flow and management.',
    image: uncluttered,
  },
];

export default projects;
