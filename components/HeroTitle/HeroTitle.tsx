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
          <Text className={classes.description} mt="md">
            Full-stack software developer with a frontend focus, passionate about creating clean
            user interfaces and efficient backend systems.
          </Text>
          <Group mt={30}></Group>
        </div>
      </div>
    </Container>
  );
}
