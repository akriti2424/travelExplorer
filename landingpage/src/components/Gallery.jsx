import ImageCard from "./ImageCard";
import Skeleton from "./Skeleton";
const Gallery = ({ images, loading, onSelect }) => {
  console.log('Image', images);
  return (
   <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
              <Skeleton key={i} />
            ))
          : images.map((img) => (
              <ImageCard
                key={img.id}
                image={img}
                onClick={onSelect}
              />
            ))}
      </div>
    </div>
  );
};

export default Gallery;
