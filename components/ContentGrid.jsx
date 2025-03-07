import { useState } from 'react';

const movies = [
    { id: 1, title: 'Film 1', rating: '8.5', thumbnail: '/path/to/thumbnail1.jpg' },
    { id: 2, title: 'Film 2', rating: '7.4', thumbnail: '/path/to/thumbnail2.jpg' },
    { id: 3, title: 'Film 3', rating: '9.1', thumbnail: '/path/to/thumbnail3.jpg' },
    // Tambahkan lebih banyak film di sini
];

export default function ContentGrid() {
    const [hoveredMovie, setHoveredMovie] = useState(null);

    return (
        <section className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map(movie => (
                    <div
                        key={movie.id}
                        className="relative cursor-pointer"
                        onMouseEnter={() => setHoveredMovie(movie.id)}
                        onMouseLeave={() => setHoveredMovie(null)}
                    >
                        <img src={movie.thumbnail} alt={movie.title} className="w-full h-auto rounded-lg shadow-md" />
                        {hoveredMovie === movie.id && (
                            <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white p-4">
                                <h2 className="text-xl font-bold">{movie.title}</h2>
                                <p>Rating: {movie.rating}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
