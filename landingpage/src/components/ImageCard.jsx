const ImageCard = ({ image, onClick }) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onClick={() => onClick(image)}
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-full h-64 object-cover group-hover:scale-110 transition"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-end p-4 text-white transition">
        {image.user.location
}
      </div>
    </div>
  );
};

export default ImageCard;
