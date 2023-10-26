import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'
import { GetStaticPaths } from 'next';

export default function Post({ postData }: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>

          <Date dateString={postData.date} /> { /* postData.date */ }
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths<GetStaticPaths>() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

/**
 * Fetches necessary data for the blog post with a given id. Receives params,
 * which contains id (because the file name is [id].js)
 * Uses getPostData() function to get the post data and return it as props
 */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}