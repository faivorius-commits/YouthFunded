
import { Link } from "react-router-dom";
import { events } from "../data/events";

type EventDetailProps = {
  slug: string;
};

function EventDetail({ slug }: EventDetailProps) {
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return (
      <main className="section-pad">
        <h1>Event not found</h1>
        <p>This event may not exist yet.</p>
        <a href="/events">← Back to Events</a>
      </main>
    );
  }

  return (
    <main className="event-detail-page section-pad">
      <a className="text-link" href="/events">
        ← Back to Events
      </a>

      <article className="event-detail-content">
        <img
          className="event-detail-image"
          src={event.image}
          alt={event.title}
        />

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
      </article>
    </main>
  );
}

export default EventDetail;
