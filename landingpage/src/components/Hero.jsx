const Hero = ({ onSearch }) => {
  return (
    <div className="h-[70vh]  bg-cover bg-center relative"
    style={{
  backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}

    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Travel Explorer</h1>
        <p className="mb-6 text-lg">Discover beautiful destinations</p>

        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full max-w-md p-3 rounded text-black outline-none  focus:ring-2 focus:ring-blue-200"
          onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Hero;
