import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { API_URL } from '@/config/index';
import styles from '@/styles/News.module.css';

export default function SingleNews() {
  const [news, setNews] = useState([]);
  const router = useRouter();

  console.log('router===>', router.query);

  useEffect(() => {
    handleGetSports();
  }, []);

  const handleGetSports = async () => {
    try {
      const res = await fetch(`${API_URL}/api/sports/${router.query.slug}`);
      const sport = await res.json();
      console.log(sport);
      //   setNews(sport.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {/* <div className={styles.news}>
        <span>
          {news.date} {news.time}
        </span>

        <h1>{news.name}</h1>
        {news.image && (
          <div className={styles.image}>
            <Image alt='image' src={news.image} width={900} height={600} />
          </div>
        )}
        <p>{news.detail}</p>
        <Link href='/news'>
          <a className={styles.back}>Go Back</a>
        </Link>
      </div> */}
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();
//   const paths = news.map((item) => ({
//     params: { slug: item.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/api/news/${slug}`);
//   const singleNews = await res.json();
//   return {
//     props: {
//       news: singleNews[0],
//     },
//     revalidate: 1,
//   };
// }

// export async function getServerSideProps({ query: { slug } }: any) {
//   const res = await fetch(`${API_URL}/api/news/${slug}`);
//   const singleNews = await res.json();
//   console.log(singleNews);
//   return {
//     props: {
//       news: singleNews[0],
//     },
//   };
// }
