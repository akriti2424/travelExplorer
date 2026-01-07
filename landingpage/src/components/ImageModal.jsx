import { motion } from "framer-motion";

const ImageModal = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg p-4 max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.urls.regular} className="rounded mb-4" />
        <p><strong>Photographer:</strong> {image.user.name}</p>
        <p><strong>Likes:</strong> ❤️ {image.likes}</p>
      </motion.div>
    </div>
  );
};

export default ImageModal;
