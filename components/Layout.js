import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shu";
export const siteTitle = "Next.js Sample Website";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                      <img src="/images/profile.png" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/>
                      <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>

                ) : (
                    <>
                     <img src="/images/profile.png" className={`${utilStyles.borderCircle} ${styles.headerImage}`}/>
                      <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}


            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;
