import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([
    { id: 1, title: "Anime 1", src: "https://yourvideolink.mp4" },
    { id: 2, title: "Anime 2", src: "https://yourvideolink.mp4" },
    { id: 3, title: "Anime 3", src: "https://yourvideolink.mp4" },
    { id: 4, title: "Anime 4", src: "https://yourvideolink.mp4" },
    { id: 5, title: "Anime 5", src: "https://yourvideolink.mp4" },
    { 
      id: 6, 
      title: "Solo Leveling Season 1", 
      details: {
        genre: "Aksi, Fantasi, Isekai, Petualangan",
        characters: "[ Tampilkan ]",
        status: "Selesai ✓",
        release: "Jan 11, 2024",
        type: "Serial TV",
        episodes: "12 Episode",
        duration: "23 Menit",
        author: "Noboru Kimura",
        studio: "A-1 Pictures",
        season: "Winter",
        episodesList: [
          { id: 1, title: 'Episode 1', videoUrl: 'https://mega.nz/embed/wVQESDiL#rWrzrxNp6Ip17-s-dICc2iaMr73T5Pic5Ep563F3vlY!' },
          { id: 2, title: 'Episode 2', videoUrl: 'https://mega.nz/embed/gA5VnRBL#7RQII5KdmoV-Tj4OwaBOJ3ncg7q70Et7K86OE4WLPA0!' },
          { id: 3, title: 'Episode 3', videoUrl: 'https://mega.nz/embed/9d43yZgA#JfeYXtCuhCNDbxejLHRDkeTdW3nRK1Xz5RC1sAowfL4!' },
          { id: 4, title: 'Episode 4', videoUrl: 'https://mega.nz/embed/5UQCmIYR#4Lsgd_7srCe5I40zUoAqYruTYSkh6RumVAOocKoD5-g!' },
          { id: 5, title: 'Episode 5', videoUrl: 'https://mega.nz/embed/sEwWjTwZ#MJwYHtqIN7hp_yXCqeIyqACGZtIOVZ-YrKeoGesmBpA!' },
          { id: 6, title: 'Episode 6', videoUrl: 'https://mega.nz/embed/hYxzCLBQ#hfwORuSgBA7kw5_YDlqNQf-YPJhuCbc08jzzzRHQXgA!' },
          { id: 7, title: 'Episode 7', videoUrl: 'https://mega.nz/embed/xYxjCCKK#IXwLYHqhopYbAH6VZ4ZVv-9RxuoE0OTBgB5VkZicwJA!' },
          { id: 8, title: 'Episode 8', videoUrl: 'https://mega.nz/embed/cdAzCbzY#I5LwEY-QLsk6XkgJ4Fd_fWE403R_wZV6t-lOGb5-lQM!' },
          { id: 9, title: 'Episode 9', videoUrl: 'https://mega.nz/embed/5VxjxJ7A#mOLObws05S43C2hxxoiCAJqkJs-O3ro1LIXdoMP9xeo!' },
          { id: 10, title: 'Episode 10', videoUrl: 'https://mega.nz/embed/Mcp3jbJI#bwfSBck90h_u0X050bXrQF5k7KZVnNR4hY_1HN4EaNI!' },
          { id: 11, title: 'Episode 11', videoUrl: 'https://mega.nz/embed/4N5mTQyZ#1P2XC3_DohVFY_d1wpR80Zf1U0ORhXwX7wG7298rSg0!' },
          { id: 12, title: 'Episode 12', videoUrl: 'https://mega.nz/embed/BZpjALxA#9Bl_75xizjLGer-xbb9m8qMLbufl10ChJK9Y7JhFmwc!' }
        ]
      }
    }
  ]);
  const [filteredAnime, setFilteredAnime] = useState(animeList);

  useEffect(() => {
    setFilteredAnime(
      animeList.filter(anime =>
        anime.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, animeList]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex flex-col`}>
      <Head>
        <title>NontonX - Streaming Anime Gratis</title>
        <meta name="description" content="Nonton anime gratis dengan kualitas terbaik hanya di NontonX." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <header className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} shadow-lg flex justify-between items-center sticky top-0 z-50`}>
        <h1 className="text-3xl font-extrabold text-blue-400">NontonX</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/"><a className="hover:text-blue-400 transition">Home</a></Link></li>
            <li><Link href="/loby"><a className="hover:text-blue-400 transition">Loby</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-blue-400 transition">Contact</a></Link></li>
          </ul>
        </nav>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
    </div>
  );
}
