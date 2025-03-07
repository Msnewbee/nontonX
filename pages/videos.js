import Head from 'next/head';
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import EpisodeList from '../components/EpisodeList';

export default function Videos() {
  return (
    <div>
      <Head>
        <title>Videos - NontonX</title>
        <meta name="description" content="Watch videos on NontonX." />
      </Head>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Watch Videos</h1>
        <EpisodeList />
      </main>
    </div>
  );
}
