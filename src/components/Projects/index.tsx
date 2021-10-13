import Link from 'next/link';

import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProject[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a href="">Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
