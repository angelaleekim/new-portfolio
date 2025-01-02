import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import { Badge, Button, Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './TechStack.module.css';

const mockdata = [
  {
    title: 'The Walt Disney Company',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
  },
  {
    title: 'ClassPass',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
  },
  {
    title: 'SLO Botanical Garden',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
  },
];

export default function TechStack() {
  //   const Projects = mockdata.map((project) => (
  //     <Card key={project.title} shadow="md" radius="md" className={classes.card} padding="xl">
  //       {/* <project.icon size={50} stroke={2} color={'pink.6'} /> */}
  //       <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
  //         {project.title}
  //       </Text>
  //       <Text fz="sm" c="dimmed" mt="sm">
  //         {project.description}
  //       </Text>
  //     </Card>
  //   ));

  return (
    <Container size="lg" py="xl">
      <div className={classes.inner}>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Tech Stack
        </Title>
        {/* <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text> */}

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {/* {Projects} */}
        </SimpleGrid>
      </div>
    </Container>
  );
}
