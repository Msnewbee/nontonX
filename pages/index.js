import Head from 'next/head';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import VideoPlayer from '../components/VideoPlayer';

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
        <div className="text-center mt-8">
          <Button onClick={() => alert('Mulai Nonton!')}>Mulai Nonton</Button>
        </div>
      </main>
    </div>
  );
}
