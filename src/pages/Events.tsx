import React from "react";
import EventCalendar from "./EventCalendar";

const eyebrow = {
  fontSize: 10,
  fontWeight: 800,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  margin: "0 0 12px",
};


function Events() {
return (
<section className="events-page">
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
    <p className="section-label">YOUTHFUNDED · OUR EVENTS</p>
    <h2>Our Events</h2>
  </div>

  <div className="events-page-description">
    <p>Take a look at our past events</p>
  </div>

  {/* Featured Event Card */}
  <section className="events-carousel">

  <article className="event-card">
    <img src="/event3-doc1.jpg"
      alt="YouthFunded visit to National Global School"
    /> <div className="event-content">
      <h3>YouthFunded Visit to National Global School</h3>
      <p>  A meaningful day of shared learning, inspiring
        conversations, and new connections with students.
        Together, we celebrated the power of knowledge,
        collaboration, and youth empowerment  </p>
      <div className="event-meta">
        <p> <strong>Date:</strong> November 7, 2026 </p>
        <p>
          <strong>Place:</strong> National Global School
        </p>
      </div>
      <a
        className="event-read-more"
        href="/events/national-global-school-visit"  >
        Read More <span aria-hidden="true">↗</span>
      </a>
    </div>
  </article>

  <article className="event-card">
    <img src="/event2-doc1.jpg" alt="Workshop Visit: Panti Asuhan Maria Imaculata Bekasi" />
    <div className="event-content">
      <h3>Workshop Visit: Maria Imaculata Orphanage</h3>
      <p>An educational visit dedicated to introducing children to essential financial literacy. Through interactive learning and fun activities, we encouraged smarter and more responsible financial decisions.</p>
      <div className="event-meta">
        <p><strong>Date:</strong>October 24, 2026</p>
        <p><strong>Place:</strong>Maria Imaculata Orphanage, Bekasi</p>
      </div>
      <a className="event-read-more" href="/events/workshop-visit-maria-imaculata-orphanage">Read More <span aria-hidden="true">↗</span></a>
    </div>
  </article>
  {/* Kartu 1 */}
  <article className="event-card">
    <img src="/event1-doc1.jpg" alt="WWF and YouthFunded fundraising event" />
    <div className="event-content">
      <h3>WWF X YouthFunded X Chicco Jericho</h3>
      <p>Collaborated with TUSK Force and WWF on a fundraising initiative to support elephant conservation in Indonesia.</p>
      <div className="event-meta">
        <p><strong>Date:</strong> November 2025 — December 2025</p>
        <p><strong>Place:</strong> Taman Nasional Way Kambas & WWF Jakarta Office</p>
      </div>
      <a className="event-read-more" href="/events/wwf-youthfunded">Read More <span aria-hidden="true">↗</span></a>
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
