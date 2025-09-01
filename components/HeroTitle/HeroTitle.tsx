import { Button, Container, Group, Image, List, rem, Text, ThemeIcon, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './HeroTitle.module.css';

export function HeroTitle() {
  return (
    <Container className={classes.container} size="md">
      <ColorSchemeToggle />
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text
            variant="gradient"
            gradient={{ from: 'pink.5', to: 'purple.5' }}
            className={classes.title}
          >
            Angela Kim
          </Text>
          <Text className={classes.description} c="dimmed" mt="md">
            A fullstack software developer passionate about helping others live more efficient and
            enjoyable lives.
          </Text>
          <Group mt={30}>
            {/* <Button variant={'filled'} color={'pink.5'}>
              View My Work
            </Button>
            <Button radius="xl" size="md" className={classes.control}>
              About Me
            </Button> */}
          </Group>
        </div>
      </div>
    </Container>
  );
}
