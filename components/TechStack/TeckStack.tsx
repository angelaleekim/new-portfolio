import React from 'react';
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJira,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiGit,
  SiJavascript,
  SiMantine,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { Button, Container, Grid, GridCol, Group, Paper, Title } from '@mantine/core';
import classes from './TechStack.module.css';

export default function TechStack() {
  const frontendSkills = [
    { name: 'React Js', icon: <FaReact size={20} color="#61DBFB" /> },
    { name: 'HTML', icon: <FaHtml5 size={20} color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={20} color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript size={20} color="#F7DF1E" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} color="#38B2AC" /> },
    { name: 'Typescript', icon: <SiTypescript size={20} color="#38B2AC" /> },
    { name: 'Mantine', icon: <SiMantine size={20} color="#000000" /> },
  ];

  const backendSkills = [
    { name: 'SpringBoot', icon: <SiSpringboot size={20} color="#3ECF8E" /> },
    { name: 'Node Js', icon: <FaNodeJs size={20} color="#68A063" /> },
    { name: 'MySQL', icon: <SiMysql size={20} color="#00758F" /> },
    { name: 'MongoDB', icon: <SiMongodb size={20} color="#47A248" /> },
    { name: 'Java', icon: <FaJava size={20} color="#3ECF8E" /> },
    { name: 'Python', icon: <FaPython size={20} color="#3ECF8E" /> },
    { name: 'C', icon: <SiC size={20} color="#3ECF8E" /> },
    { name: 'C++', icon: <SiCplusplus size={20} color="#3ECF8E" /> },
  ];

  const otherSkills = [
    { name: 'Git', icon: <SiGit size={20} color="#F05032" /> },
    { name: 'GitHub', icon: <FaGithub size={20} color="#181717" /> },
    { name: 'Jira', icon: <FaJira size={20} color="#007ACC" /> },
    { name: 'VS Code', icon: <FaReact size={20} color="#007ACC" /> },
  ];

  type Skill = {
    name: string;
    icon: React.ReactNode; // Represents the JSX elements used as icons
  };

  const renderSkills = (skills: Skill[]): JSX.Element[] =>
    skills.map((skill: Skill, index: number) => (
      <Button
        key={`${skill.name}-${index}`} // Ensures unique key
        variant="outline"
        radius="xl"
        size="lg"
        leftSection={<Group>{skill.icon}</Group>}
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontWeight: 500,
          border: '1px solid',
        }}
      >
        {skill.name}
      </Button>
    ));

  return (
    <Container size="xl" py="xl">
      <div className={classes.inner}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Tech Stack
        </Title>
        <Grid mt={'4rem'} gutter="xl">
          {/* Frontend Section */}
          <GridCol span={{ base: 12, sm: 6 }}>
            <Paper
              className={classes.card}
              shadow="md"
              radius="xl"
              p="xl"
              withBorder
              style={{
                width: '100%',
                margin: '0 auto',
                maxWidth: '500px',
              }}
            >
              <Title className={classes.cardTitle} ta={'center'} order={2} mb="lg">
                Frontend
              </Title>
              <Group>{renderSkills(frontendSkills)}</Group>
            </Paper>
          </GridCol>

          {/* Backend Section */}
          <GridCol span={{ base: 12, sm: 6 }}>
            <Paper
              className={classes.card}
              shadow="md"
              radius="xl"
              p="xl"
              withBorder
              style={{
                width: '100%',
                margin: '0 auto',
                maxWidth: '500px',
              }}
            >
              <Title className={classes.cardTitle} ta={'center'} order={2} mb="lg">
                Backend
              </Title>
              <Group>{renderSkills(backendSkills)}</Group>
            </Paper>
          </GridCol>

          {/* Others Section */}
          <GridCol
            span={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Paper
              className={classes.card}
              shadow="md"
              radius="xl"
              p="xl"
              withBorder
              style={{
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center',
                margin: '0 auto',
              }}
            >
              <Title className={classes.cardTitle} ta={'center'} order={2} mb="lg">
                Others
              </Title>
              <Group>{renderSkills(otherSkills)}</Group>
            </Paper>
          </GridCol>
        </Grid>
      </div>
    </Container>
  );
}
