import { IconBrandLinkedinFilled, IconMail } from '@tabler/icons-react';
import {
  Anchor,
  Button,
  Container,
  Flex,
  Group,
  Image,
  List,
  rem,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import classes from './Contact.module.css';

export function Contact() {
  return (
    <Container className={classes.container} size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title order={2} className={classes.title} ta="center" mt="sm">
            Contact Me
          </Title>
          <Flex align="center" gap="md" mt="md">
            <IconMail size="2em" />
            <Anchor
              href="mailto:angelalkim10@gmail.com"
              size="xl"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              angelalkim10@gmail.com
            </Anchor>
          </Flex>

          <Flex align="center" gap="md" mt="sm">
            <IconBrandLinkedinFilled size="2em" />
            <Anchor
              href="https://www.linkedin.com/in/angela-kim10/"
              size="xl"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Anchor>
          </Flex>

          <Group mt={30}></Group>
        </div>
      </div>
    </Container>
  );
}
