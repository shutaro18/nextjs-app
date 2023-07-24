import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '@/components/Layout'

import Link from 'next/link'
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '@/lib/post'

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyle.headingMd}>
          <p>Next.jsエンジニアです</p>
        </section>

        <section>
          <h2 className={utilStyle.headingMd}>📝エンジニアのブログ</h2>
          <br />
          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`}
                    className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${id}`}>
                  <p className={utilStyle.boldText}>{title}</p>
                </Link>
                <small className={utilStyle.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>


      </Layout>
  )
}
