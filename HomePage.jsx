import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import VideoPlayer from "@/components/VideoPlayer";

const movies = [
  { id: 1, title: "Film Pertama", thumbnail: "/thumbnail1.jpg", videoUrl: "https://drive.google.com/uc?export=download&id=VIDEO_ID_1", description: "Deskripsi film pertama." },
  { id: 2, title: "Film Kedua", thumbnail: "/thumbnail2.jpg", videoUrl: "https://drive.google.com/uc?export=download&id=VIDEO_ID_2", description: "Deskripsi film kedua." },
  { id: 3, title: "Film Ketiga", thumbnail: "/thumbnail3.jpg", videoUrl: "https://drive.google.com/uc?export=download&id=VIDEO_ID_3", description: "Deskripsi film ketiga." },
  { id: 4, title: "Film Baru", thumbnail: "/thumbnail4.jpg", videoUrl: "https://drive.google.com/uc?export=download&id=1dnMqCcjnRCtq3OWB73smp7HB5cFiykAx", description: "Film terbaru yang ditambahkan." },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <header className="flex justify-between p-4 border-b">
        <h1 className="text-xl font-bold">NontonX</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </header>

      {selectedMovie ? (
        <div className="p-4">
          <Button onClick={() => setSelectedMovie(null)} className="mb-4">Kembali</Button>
          <h2 className="text-2xl font-bold mb-2">{selectedMovie.title}</h2>
          <p className="mb-4">{selectedMovie.description}</p>
          <VideoPlayer videoUrl={selectedMovie.videoUrl} />
        </div>
      ) : (
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {movies.map((movie) => (
            <Card key={movie.id} className="cursor-pointer hover:shadow-lg" onClick={() => setSelectedMovie(movie)}>
              <CardContent className="p-2">
                <img src={movie.thumbnail} alt={movie.title} className="rounded-lg w-full" />
                <p className="text-center mt-2 font-semibold">{movie.title}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}
    </div>
  );
}
