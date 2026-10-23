
import { useState, useRef, useEffect, type TouchEvent } from "react";
import { events } from "../data/events";

type EventDetailProps = {
  slug: string;
};

type EventDocument = {
  title: string;
  file: string;
};

type EventMedia = {
  photos: string[];
  documents?: EventDocument[];
};

/*
 * Sesuaikan slug dengan src/data/events.ts.
 * Event yang tidak dicantumkan akan menggunakan event.image
 * dan tidak menampilkan Event Documents.
 */
const eventMedia: Record<string, EventMedia> = {
  "wwf-youthfunded": {
    photos: Array.from(
      { length: 12 },
      (_, index) => `/event1doc${index + 1}.jpg`
    ),
    documents: [
  {
    title: "YouthFunded x TUSK FORCE Certificate",
    file: "/youthfundedwwfcertificates.jpg",
  },
  {
    title: "Certificate of Appreciation (Founder) "
    file: "/nadinewwfcertificates.jpg",
  },
],
  },

  /*
   * Contoh event lain:
   *
   * "slug-event-lain": {
   *   photos: [
   *     "/event2doc1.jpg",
   *     "/event2doc2.jpg",
   *     "/event2doc3.jpg",
   *   ],
   *   documents: [
   *     {
   *       title: "Certificate",
   *       file: "/event2certificate.pdf",
   *     },
   *   ],
   * },
   *
   * Jika event tidak punya dokumen, hilangkan properti documents.
   */
};

function EventDetail({ slug }: EventDetailProps) {
  const event = events.find((item) => item.slug === slug);
  const media = eventMedia[slug];

  const photos =
    media?.photos?.length ? media.photos : event ? [event.image] : [];

  const documents = media?.documents ?? [];

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setCurrentPhoto(0);
  }, [slug]);

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
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  const nextPhoto = () => {
    setCurrentPhoto((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const difference =
      e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(difference) > 45 && photos.length > 1) {
      if (difference < 0) {
        nextPhoto();
      } else {
        previousPhoto();
      }
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
        <section
          className="event-gallery"
          aria-label="Event photo gallery"
        >
          <div
            className="event-gallery-frame"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              className="event-detail-image"
              src={photos[currentPhoto]}
              alt={`${event.title} — photo ${currentPhoto + 1}`}
            />

            {photos.length > 1 && (
              <>
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
              </>
            )}
          </div>

          {photos.length > 1 && (
            <div className="event-gallery-caption">
              <span>EVENT DOCUMENTATION</span>
              <span>
                {String(currentPhoto + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
            </div>
          )}
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

        {/* OPTIONAL EVENT DOCUMENTS */}
        {documents.length > 0 && (
          <section className="event-documents">
            <div className="event-documents-heading">
              <p className="section-label">EVENT ARCHIVE</p>
            </div>

            <div className="event-documents-grid">
              {documents.map((document) => (
                <article
                  className="event-document"
                  key={document.file}
                >
                  <div className="event-document-preview">
  {/\.(jpg|jpeg|png|webp|gif)$/i.test(document.file) ? (
    <img
      src={document.file}
      alt={document.title}
      loading="lazy"
    />
  ) : (
    <iframe
      src={`${document.file}#toolbar=0&navpanes=0`}
      title={document.title}
      loading="lazy"
    />
  )}
</div>

                  <h3>{document.title}</h3>
                </article>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}

export default EventDetail;
