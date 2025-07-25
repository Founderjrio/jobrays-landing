import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white text-sm py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} JobRays. All rights reserved.
        </p>

        {/* Legal Links */}
        <nav className="flex flex-wrap gap-4 justify-center">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <a href="mailto:support@jobrays.io" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/company/jobrays"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JobRays on LinkedIn"
            className="hover:text-[var(--accent)] transition"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://twitter.com/jobrays"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JobRays on Twitter"
            className="hover:text-[var(--accent)] transition"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://instagram.com/jobrays"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JobRays on Instagram"
            className="hover:text-[var(--accent)] transition"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
