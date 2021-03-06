import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { HomeContainer } from '../styles/HomeStyles';

import HomeHero from '../components/HomeHero';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <HomeContainer>
      <Head>
        <title>Home | My Portfolio</title>
        <meta
          name="description"
          content="I'm a frontend engineer and here are some of my projects!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="I'm a frontend engineer and here are some of my projects!"
        />
      </Head>
      <Header />
      <main className="container">
        <HomeHero />
        <Experience />
        <Projects projects={projects} />
        <Knowledge />
        <ContactForm />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.online_project,
    thumbnail: project.data.thumbnail.url
  }));
  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
