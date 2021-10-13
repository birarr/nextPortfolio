import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="2 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year=" 2021"
          title="Dev Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aliquam"
        />
        <ExperienceItem
          year=" 2021"
          title="Dev Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aliquam"
        />
        <ExperienceItem
          year=" 2021"
          title="Dev Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aliquam"
        />
        <ExperienceItem
          year=" 2021"
          title="Dev Frontend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Aliquam"
        />
      </section>
    </Container>
  );
}

export default Experience;
