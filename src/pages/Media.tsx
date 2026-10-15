import React from "react";

const Media: React.FC = () => {
return (
<section className="media-section section-pad" id="media">
<div className="media-container">
<div className="media-heading">
<span className="media-eyebrow">STAY CONNECTED</span>

      <h2>
        Find Us <span>Beyond the Website.</span>
      </h2>

      <p>
        Follow our journey, explore our initiatives, and connect
        with YouthFunded through our official platforms.
      </p>
    </div>

    <div className="media-grid">
      {/* INSTAGRAM */}
      <a
        className="media-card instagram-card"
        href="https://www.instagram.com/YOUR_USERNAME/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="media-card-icon" aria-hidden="true">
          ◎
        </div>

        <span className="media-platform">INSTAGRAM</span>
        <h3>Follow Our Journey</h3>
        <p>
          Discover our activities, stories, and latest updates.
        </p>

        <span className="media-arrow" aria-hidden="true">↗</span>
      </a>

      {/* LINKEDIN */}
      <a
        className="media-card linkedin-card"
        href="https://www.linkedin.com/company/YOUR_USERNAME/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="media-card-icon" aria-hidden="true">
          in
        </div>

        <span className="media-platform">LINKEDIN</span>
        <h3>Grow With Us</h3>
        <p>
          Explore our initiatives, collaborations, and impact.
        </p>

        <span className="media-arrow" aria-hidden="true">↗</span>
      </a>

      {/* EMAIL */}
      <a
        className="media-card email-card"
        href="mailto:YOUR_EMAIL@example.com"
      >
        <div className="media-card-icon" aria-hidden="true">
          ✉
        </div>

        <span className="media-platform">EMAIL</span>
        <h3>Let's Connect</h3>
        <p>
          Reach out for inquiries, partnerships, and collaborations.
        </p>

        <span className="media-arrow" aria-hidden="true">↗</span>
      </a>
    </div>

    <div className="media-bottom">
      <span className="media-bottom-star" aria-hidden="true">✳</span>
      <p>Small Steps, Big Impact.</p>
      <span className="media-bottom-note">
        Let's make a difference together.
      </span>
    </div>
  </div>
</section>

);
};

export default Media;
