import { HeroTitle } from '@/components/HeroTitle/HeroTitle';
import ProjectCards from '@/components/ProjectCards/ProjectCards';
import TechStack from '@/components/TechStack/TeckStack';

export default function HomePage() {
  return (
    <>
      <HeroTitle />
      <ProjectCards />
      <TechStack />
    </>
  );
}
