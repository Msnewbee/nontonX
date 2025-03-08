import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - NontonX</title>
        <meta name="description" content="Welcome to NontonX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to NontonX</h1>
        <p>Enjoy the best streaming experience with our platform. Watch your favorite movies and shows without interruption.</p>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </main>
    </div>
  )
}
