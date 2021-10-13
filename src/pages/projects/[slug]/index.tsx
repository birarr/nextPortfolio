import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';

import { getPrismicClient } from '../../../services/prismic';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }
  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} | My Portfolio</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>
      <Header />
      <ProjectBanner
        title={project.title}
        type={project.type}
        imgUrl={project.thumbnail}
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tenetur, velit tempora corrupti rem praesentium numquam. Ex atque
          cupiditate vel, possimus deleniti eveniet, temporibus vero, sint
          molestias labore eaque voluptates esse numquam nobis minima eligendi
          consequuntur repellendus enim. Nisi, optio? Debitis reprehenderit
          reiciendis et tenetur animi quibusdam sit placeat blanditiis. Pariatur
          cumque ducimus beatae modi saepe ullam natus expedita! Doloribus sed
          excepturi adipisci praesentium vero assumenda veniam nisi quaerat
          tempore facilis possimus nam vel quidem totam, tenetur quibusdam
          cumque quos.
        </p>
        <button type="button">
          <a href={project.link} target="_blank" rel="noreferrer">
            See online project
          </a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'project')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('project', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.online_project.url,
    thumbnail: response.data.thumbnail.url
  };
  return {
    props: { project },
    revalidate: 86400
  };
};
