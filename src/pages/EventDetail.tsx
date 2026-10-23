import { useState, useRef, type TouchEvent } from "react";
import { events } from "../data/events";

type EventDetailProps = {
  slug: string;
};

const eventPhotos = Array.from(
  { length: 12 },
  (_, index) => `/event1doc${index + 1}.jpg`
);

const eventDocuments = [
  {
    title: "Certificate 01",
    description: "Event Certificate",
    file: "/event1certificate1.pdf",
  },
  {
    title: "Certificate 02",
    description: "Event Certificate",
    file: "/event1certificate2.pdf",
  },
  {
    title: "Letter of Appreciation",
    description: "Official Letter",
    file: "/event1letter.pdf",
  },
];

function EventDetail({ slug }: EventDetailProps) {
  const event = events.find((item) => item.slug === slug);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (!event) {
    return (
      <main className="section-pad">
        <h1>Event not found</h1>
        <p>This event may not exist yet.</p>
        <a href="/events">← Back to Events</a>
      </main>
    );
  }

  const previousPhoto = () => {
    setCurrentPhoto((current) =>
      current === 0 ? eventPhotos.length - 1 : current - 1
    );
  };

  const nextPhoto = () => {
    setCurrentPhoto((current) =>
      current === eventPhotos.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const difference =
      e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(difference) > 45) {
      difference < 0 ? nextPhoto() : previousPhoto();
    }

    touchStartX.current = null;
  };

  return (
    <main className="event-detail-page section-pad">
      <a className="text-link" href="/events">
        ← Back to Events
      </a>

      <article className="event-detail-content">
        {/* PHOTO CAROUSEL */}
        <section className="event-gallery" aria-label="Event photo gallery">
          <div
            className="event-gallery-frame"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              className="event-detail-image"
              src={eventPhotos[currentPhoto]}
              alt={`${event.title} — photo ${currentPhoto + 1}`}
              onError={(e) => {
                e.currentTarget.alt =
                  `Upload event1doc${currentPhoto + 1}.jpg to the public folder`;
              }}
            />

            <button
              className="event-gallery-arrow event-gallery-prev"
              onClick={previousPhoto}
              type="button"
              aria-label="Previous photo"
            >
              ‹
            </button>

            <button
              className="event-gallery-arrow event-gallery-next"
              onClick={nextPhoto}
              type="button"
              aria-label="Next photo"
            >
              ›
            </button>
          </div>

          <div className="event-gallery-caption">
            <span>EVENT DOCUMENTATION</span>
            <span>
              {String(currentPhoto + 1).padStart(2, "0")} / 12
            </span>
          </div>
        </section>

        {/* ORIGINAL EVENT INFORMATION */}
        <p className="section-label">YOUTHFUNDED · EVENT STORY</p>

        <h1>{event.title}</h1>

        <div className="event-detail-meta">
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Place:</strong> {event.place}
          </p>
        </div>

        <p className="event-detail-description">
          {event.description}
        </p>

        <div className="event-detail-story">
          {event.details.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* EVENT DOCUMENTS */}
        <section className="event-documents">
          <div className="event-documents-heading">
            <p className="section-label">EVENT ARCHIVE</p>
            <h2>Event Documents</h2>
            <p>
              Official certificates and appreciation from this event.
            </p>
          </div>

          <div className="event-documents-list">
            {eventDocuments.map((document, index) => (
              <a
                className="event-document-item"
                href={document.file}
                target="_blank"
                rel="noreferrer"
                key={document.file}
              >
                <span className="event-document-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="event-document-copy">
                  <strong>{document.title}</strong>
                  <small>{document.description} · PDF</small>
                </span>

                <span className="event-document-link">
                  View ↗
                </span>
              </a>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

export default EventDetail;
