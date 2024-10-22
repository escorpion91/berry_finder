// SocialLinks.js
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Example icon imports
import './app.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <br></br>
      <h2>Welcome to the Pokémon 3rd gen Berry Finder App</h2>
      <h3>
        Search for the berry you need by flavor. I'll eventually add some stat
        filters, categories, and all things emerald berries. Happy planting!
      </h3>
      <div className="icons">
        {/* <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a> */}
        <a
          href="https://github.com/escorpion91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/juanmanuelenderica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/fenomenomenofeno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <p>Feel free to reach out for any questions!</p>
    </div>
  );
};

export default SocialLinks;
