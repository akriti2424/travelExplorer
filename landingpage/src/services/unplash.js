 import axios from "axios"; 

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
  },
});

export const searchImages = (query) =>
  api.get(`/search/photos`, {
    params: { query, per_page: 12 },
  });

  