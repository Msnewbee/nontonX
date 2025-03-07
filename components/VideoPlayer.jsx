export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
      <video
        src={videoUrl}
        className="w-full h-full"
        controls
      />
    </div>
  );
}
