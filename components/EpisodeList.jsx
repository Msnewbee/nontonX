import { useState } from 'react';

const episodes = [
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
  { id: 12, title: 'Episode 12', videoUrl: 'https://mega.nz/embed/BZpjALxA#9Bl_75xizjLGer-xbb9m8qMLbufl10ChJK9Y7JhFmwc!' },
];

export default function EpisodeList() {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

  return (
    <div className="episode-list mt-8">
      <h2 className="text-3xl font-semibold mb-6">Solo Leveling Season 1</h2>
      <div className="flex">
        <ul className="w-1/4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
          {episodes.map((episode) => (
            <li key={episode.id}>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 ${selectedEpisode.id === episode.id ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
                onClick={() => setSelectedEpisode(episode)}
              >
                {episode.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="w-3/4 p-4">
          <iframe
            width="640"
            height="360"
            frameBorder="0"
            src={selectedEpisode.videoUrl}
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
