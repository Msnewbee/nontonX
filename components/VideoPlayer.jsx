export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="relative w-full aspect-video">
      <video
        src={videoUrl}
        className="w-full h-full"
        controls
      />
    </div>
  );
}
