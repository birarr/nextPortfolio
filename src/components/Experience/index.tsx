import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="2 years" description="of experience" />

      <section>
        <ExperienceItem
          year=" 2021"
          title="Dev Frontend"
          description="Frontend dev, working with react, JS"
        />
        <ExperienceItem
          year=" 2020"
          title="Dev Frontend"
          description="Frontend internship working with react"
        />
        <ExperienceItem
          year=" 2019"
          title="Dev Frontend"
          description="Frontend internship working with php and wordpress"
        />
        <ExperienceItem
          year=" 2019"
          title="Dev Frontend"
          description=" University internship working with php, wordpress and SQL"
        />
      </section>
    </Container>
  );
}

export default Experience;
