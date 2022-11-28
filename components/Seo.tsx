import Head from "next/head";

interface Props {
    title: string;
}

export default function Seo({title} : Props) {
    const message = `${title} | Next Movies`;
    return (
        <Head>
            <title>{message}</title>
        </Head>
    );
}