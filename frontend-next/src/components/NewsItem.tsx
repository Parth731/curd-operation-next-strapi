import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/NewsItem.module.css';
import moment from 'moment';

export default function NewsItem({ news }: any) {
  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image
          alt='news'
          src={
            news?.attributes?.images?.data?.attributes?.url
              ? news?.attributes?.images?.data?.attributes?.url
              : 'No Image'
          }
          width={150}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>{moment(news?.attributes?.Date).format('yyyy-MM-DD:HH-MM')}</span>
        <h3>{news?.attributes?.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/news/${news?.attributes?.slug}`}>
          <span className='btn'>Read More</span>
        </Link>
      </div>
    </div>
  );
}
