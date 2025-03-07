export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="relative w-full aspect-video">
      <iframe
        src={videoUrl}
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
}
