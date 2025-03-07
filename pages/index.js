import Head from 'next/head';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import VideoPlayer from '../components/VideoPlayer';
import EpisodeList from '../components/EpisodeList';

export default function Home() {
  const videoUrl = 'https://www.example.com/video.mp4';

  return (
    <div>
      <Head>
        <title>NontonX</title>
        <meta name="description" content="Platform streaming film berbasis Next.js" />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Selamat Datang di NontonX</h1>
        <VideoPlayer videoUrl={videoUrl} />
        <Card className="mt-8">
          <CardContent>
            <h2 className="text-2xl font-semibold">Fitur NontonX</h2>
            <ul className="list-disc ml-5 mt-2">
              <li>Streaming video langsung</li>
              <li>Mode gelap & terang</li>
              <li>Desain responsif</li>
              <li>Integrasi Video.js</li>
            </ul>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <img src="https://mega.nz/file/YMwVRRwa#XDwrSQoGjMXktNAa_WPbvVcR715V_fDgkSmLi1nYOdk" alt="Solo Leveling Season 1" className="mx-auto mb-4 rounded-lg shadow-md" />
        </div>
        <EpisodeList />
        <div className="text-center mt-8">
          <Button onClick={() => alert('Mulai Nonton!')}>Mulai Nonton</Button>
        </div>
      </main>
    </div>
  );
}
