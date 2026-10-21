import React from "react";
import EventCalendar from "./EventCalendar";

function Events() {
return (
<section className="events-page">
  {/* Hiasan Latar — murni CSS, tidak pakai gambar */}
  <div className="decor-circle circle-1"></div>
  <div className="decor-circle circle-2"></div>
  <div className="decor-circle circle-3"></div>
  <div className="decor-star star-1">✦</div>
  <div className="decor-star star-2">✦</div>
  <div className="decor-star star-3">✦</div>
  <div className="decor-dot dot-1"></div>
  <div className="decor-dot dot-2"></div>
  <div className="decor-dot dot-3"></div>

  {/* Main Heading */}
  <div className="events-heading">
    <p className="events-eyebrow">YOUTHFUNDED • OUR EVENTS</p>
    <h2>Our Events</h2>
  </div>

  <div className="events-page-description">
    <p>Take a look at our past events</p>
  </div>

  {/* Featured Event Card */}
  <section className="events-carousel">
    <article className="event-card">
      <img
        src="/event1-doc1.jpg"
        alt="WWF and YouthFunded fundraising event"
      />

      <div className="event-content">
        <h3>WWF X YouthFunded X Chicco Jericho</h3>

        <p>
          Collaborated with TUSK Force and WWF on a fundraising
          initiative to support elephant conservation in Indonesia.
        </p>

        <div className="event-meta">
          <p>
            <strong>Date:</strong> November 2025 — December 2025
          </p>

          <p>
            <strong>Place:</strong> Taman Nasional Way
            Kambas & WWF Jakarta Office
          </p>
        </div>

        <a
          className="event-read-more"
          href="/events/wwf-youthfunded"
        >
          Read More <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
    <article className="event-card">
      <img
        src="/event2-doc1.jpg"
        alt="Coming Soon!"
      />

      <div className="event-content">
        <h3>??</h3>

        <p>
          ??
        </p>

        <div className="event-meta">
          <p>
            <strong>Date:</strong> ??
          </p>

          <p>
            <strong>Place:</strong> ??
          </p>
        </div>

        <a
          className="event-read-more"
          href="/events/comingsoon-youthfunded"
        >
          Read More <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  </section>

  {/* Calendar Introduction */}
  <div className="events-calendar-intro">
    <p>Join our upcoming fundraising initiatives!</p>
  </div>

  {/* Calendar */}
  <EventCalendar />
</section>

);
}

export default Events;
