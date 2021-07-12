import { blogColumn, blogTitle, lightText, Section, articleList } from '../components/LinaliaCSS';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <p>リンカといいます。デベロッパー？です</p>
      </Section>
      <Section paddingTop={'1px'}>
        <h2 className={blogTitle}>Blog</h2>
        <ul className={blogColumn}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={articleList} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
