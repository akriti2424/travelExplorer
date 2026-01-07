import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ImageModal from "./components/ImageModal";
import Footer from "./components/Footer";
import {searchImages} from './services/unplash';


function App() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load default images on first render
  useEffect(() => {
    loadDefaultImages();
  }, []);

  const loadDefaultImages = async () => {
    try {
      setLoading(true);
      const res = await searchImages("paris travel");
      setImages(res.data.results);
    } catch (error) {
      console.error("Failed to load default images", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query) return;
    try {
      setLoading(true);
      const res = await searchImages(query);
      setImages(res.data.results);
    } catch (error) {
      console.error("Search failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      <Gallery images={images} loading={loading}  onSelect={setSelected} />
      {selected && <ImageModal image={selected} onClose={() => setSelected(null)} />}
      <Footer />
    </>
  );
}

export default App;
