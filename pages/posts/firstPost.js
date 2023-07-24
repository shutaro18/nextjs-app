import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    return(
        <div>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>最初のPost</h1>
            <Link href="/">ホームに戻る</Link>
        </div>
    );
}
