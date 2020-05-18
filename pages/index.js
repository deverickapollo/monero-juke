import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This site hosts various services - you can visit my personal site to keep up at{' '}
          <a href="https://deverick.io">Deverick.io</a>
        </p>
      </section>
    </Layout> 
  )
}