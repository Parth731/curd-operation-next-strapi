import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { API_URL } from '@/config';
import NewsItem from '@/components/NewsItem';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    handleGetSports();
  }, []);

  const handleGetSports = async () => {
    try {
      const res = await fetch(`${API_URL}/api/sports?populate=*`);
      const sport = await res.json();
      console.log(sport);
      setNews(sport.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1>Latest News</h1>
      {news.length === 0 && <h3>No News</h3>}
      {news.map((item: any) => (
        <NewsItem key={item.id} news={item} />
      ))}
      {news.length > 0 && (
        <Link href='/news' className='btn-secondary'>
          View All News
        </Link>
      )}
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/sports`);

//   const news = await res.json();

//   return {
//     props: { news },
//   };
// }
