import React from "react";
import EventCalendar from "./EventCalendar";

function Events() {
return (
<section className="events-page">
{/* Main Heading */}
<div className="events-heading">
<h2>Our Events</h2>
</div>
  <div className="events-page-description">
  <h4>Take a look at our past events</h4>
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
            Kambas &amp; WWF Jakarta Office
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
