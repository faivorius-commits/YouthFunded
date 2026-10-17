
import React from "react";
import EventCalendar from "./EventCalendar";

function Events() {
  return (
    <>
      <section className="events-carousel">
        <article className="event-card">
          <img
            src="/event1-doc1.jpg"
            alt="WWF and YouthFunded event"
          />

          <div className="event-content">
            <h3>WWF X YouthFunded X Chicco Jericho</h3>

            <p>
              Collaborated with TUSK Force and WWF on a fundraising
              initiative to support elephant conservation in Indonesia.
            </p>

            <div className="event-meta">
              <p>
                <strong>Date:</strong> August 2026 — October 2026
              </p>

              <p>
                <strong>Place:</strong> Taman Nasional Way Kambas
                &amp; WWF Jakarta Office
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
    </>
  );
}

export default Events;

