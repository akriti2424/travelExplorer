import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white p-6 text-center">
    <div className="flex justify-center gap-6 mb-4">
      <FaInstagram  className="cursor-pointer"/>
      <FaTwitter   className="cursor-pointer"/>
    </div>
  <div className="inline-block p-2 rounded bg-white text-gray-600 cursor-pointer">
  Subscribe to newsletter
</div>

    <p className="mt-4 text-sm">© 2026 Travel Explorer</p>
  </footer>
);

export default Footer;
