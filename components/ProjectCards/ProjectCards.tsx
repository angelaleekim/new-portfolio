import NextImage from 'next/image';
import {
  Center,
  Container,
  Image,
  Paper,
  Text,
  Timeline,
  TimelineItem,
  Title,
} from '@mantine/core';
import projects from './ProjectsData';
import classes from './ProjectCards.module.css';

export default function ProjectCards() {
  const TimelineItems = projects.map((project) => (
    <TimelineItem title={project.date} fz={'h3'}>
      <Paper mt={'lg'} withBorder w={'50%'} fz={'h4'} shadow={'sm'} radius={'xl'} p={'xl'}>
        <Image
          radius={'lg'}
          h={190}
          w="auto"
          fit="contain"
          component={NextImage}
          src={project.image}
          alt="My image"
        ></Image>
        <Text mt={'sm'} className={classes.timelineText} fz={'h3'}>
          {project.title}
        </Text>
        <Text c="dimmed" fz={'h4'}>
          {project.company}
        </Text>
        <Text c="dimmed" fz={'h5'}>
          {project.date}
        </Text>
        <Text mt={'md'}>{project.description}</Text>
      </Paper>
    </TimelineItem>
  ));

  return (
    <Container size="lg" py="xl">
      <div className={classes.inner}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Work Experience & Projects
        </Title>
        <Timeline
          ml={'50'}
          align={'left'}
          active={projects.length}
          color={'purple'}
          mt={'4rem'}
          lineWidth={3}
          bulletSize={25}
        >
          {TimelineItems}
          <TimelineItem></TimelineItem>
        </Timeline>
      </div>
    </Container>
  );
}
