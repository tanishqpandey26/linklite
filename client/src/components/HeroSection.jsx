import React from 'react';
import styles from "../styles/HeroSection.module.css";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";

function HeroSection() {
  return (
    
     <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to LinkSaver ✨</h1>
        <p className={styles.description}>
          Save links and get instant AI-powered summaries. Whether it's an article, blog post, or
          research doc – drop the URL, and we do the rest. Stay organized, informed, and productive.
        </p>

        <div className={styles.instructions}>
          <h2>How to Use</h2>
          <ul>
            <li>➡️ Sign up with your email to create your account.</li>
            <li>➡️ Paste any URL to get an automatic summary + save it to your dashboard.</li>
            <li>➡️ Revisit, search, or export your saved links anytime.</li>
            <li>➡️ Your data is private & synced across devices.</li>
          </ul>
        </div>

        <div className={styles.buttonGroup}>
          <a href="/signin" className={styles.button}>Sign In</a>
          <a href="/signup" className={styles.buttonAlt}>Sign Up</a>
        </div>

        <div className={styles.intro}>
          <h2>Hi, I'm Tanishq Pandey </h2>
          <p>
            Passionate full-stack developer building tools that simplify digital workflows. Connect with me or explore my projects:
          </p>

          <div className={styles.socialLinks}>

            <a href="mailto:tanishqpandey@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <IoMdMail />
            </a>
            <a href="https://github.com/tanishq-pandey" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tanishq-pandey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://docs.google.com/document/d/your-project-doc-link" target="_blank" rel="noopener noreferrer" aria-label="Docs">
              <SiGoogledocs />
            </a>
            <a href="https://tanishqpandey.dev/projects" target="_blank" rel="noopener noreferrer" aria-label="Projects">
              <FaSquareXTwitter />
            </a>

          </div>
        </div>
      </div>
    </section>
    
  );
}

export default HeroSection;