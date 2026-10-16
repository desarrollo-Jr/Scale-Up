
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://instagram.com" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://facebook.com" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="https://wa.me/" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
}


