import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="3 years" description="of experience" />

      <section>
        <ExperienceItem
          year=" 2022"
          title="Dev Frontend"
          description="Frontend dev, working with React, Typescript, Graphql, Redux and Tailwind."
        />
        <ExperienceItem
          year=" 2021"
          title="Dev Frontend"
          description="Frontend dev, working with React, Javascript, Redux and Material-UI."
        />
        <ExperienceItem
          year=" 2020"
          title="Dev Frontend"
          description="Frontend internship working with React."
        />
        <ExperienceItem
          year=" 2019"
          title="Dev Frontend"
          description="Frontend internship working with php and wordpress."
        />
      </section>
    </Container>
  );
}

export default Experience;
