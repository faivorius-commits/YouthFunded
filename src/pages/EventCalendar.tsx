
import { useState } from "react";
import "./EventCalendar.css";

type CalendarEvent = {
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
  status: "upcoming" | "past";
  time?: string;
};

const events: CalendarEvent[] = [
  {
    startDate: "2025-11-10",
    endDate: "2025-11-10",
    title: "Fundraising Collaboration with WWF",
    description:
      "A fundraising collaboration with WWF to support environmental conservation initiatives.",
    status: "past",
  },
  {
    startDate: "2025-12-08",
    endDate: "2025-12-08",
    title: "WWF Donation Day",
    description:
      "A donation initiative to support WWF's environmental and wildlife conservation efforts.",
    status: "past",
  },
  {
    startDate: "2026-10-24",
    endDate: "2026-10-24",
    title: "Orphanage Visit 1",
    description:
      "An educational visit dedicated to introducing financial literacy to children through fun and interactive learning activities. Participants will learn the basics of money management, saving, and making wise financial decisions to build healthy financial habits from an early age.",
    status: "upcoming",
  },
  {
    startDate: "2026-11-01",
    endDate: "2026-11-01",
    title: "Orphanage Visit 2",
    description:
      "An educational visit dedicated to introducing financial literacy to children through fun and interactive learning activities. Participants will learn the basics of money management, saving, and making wise financial decisions to build healthy financial habits from an early age.",
    status: "upcoming",
  },
  {
    startDate: "2026-11-08",
    endDate: "2026-11-08",
    title: "Orphanage Visit 3",
    description:
      "An educational visit combining financial literacy learning with an environmental awareness seminar in collaboration with WWF Indonesia. Through interactive teaching sessions, children will learn the fundamentals of money management, saving, and wise financial decisions while exploring the importance of environmental conservation, biodiversity, and sustainable living.",
    status: "upcoming",
  },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(2026, 9, 1)
  );

  const [selectedDate, setSelectedDate] = useState("2026-10-17");

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  function formatKey(day: number) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  }

  function changeMonth(amount: number) {
    setCurrentMonth(new Date(year, month + amount, 1));
  }

  function getEventsForDate(dateKey: string) {
    return events.filter((event) => {
      const endDate = event.endDate ?? event.startDate;

      return dateKey >= event.startDate && dateKey <= endDate;
    });
  }

  const selectedEvents = getEventsForDate(selectedDate);

  return (
    <section className="event-calendar-section">
      <div className="event-calendar-heading">
        <span className="event-calendar-eyebrow">
          ACTIVITY CALENDAR
        </span>

        <h2>OUR EVENTS</h2>

        <p>Join our upcoming fundraising initiatives!</p>
      </div>

      <div className="event-calendar-layout">
        <div className="calendar-card">
          <div className="calendar-header">
            <button
              type="button"
              className="calendar-nav-button"
              onClick={() => changeMonth(-1)}
              aria-label="Previous month"
            >
              ‹
            </button>

            <div className="calendar-month-title">
              <h3>{monthNames[month]}</h3>
              <span>{year}</span>
            </div>

            <button
              type="button"
              className="calendar-nav-button"
              onClick={() => changeMonth(1)}
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          <div className="calendar-weekdays">
            {weekdays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="calendar-grid">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="calendar-day empty"
                  />
                );
              }

              const dateKey = formatKey(day);
              const dayEvents = getEventsForDate(dateKey);
              const isSelected = selectedDate === dateKey;

              return (
                <button
                  type="button"
                  key={dateKey}
                  className={`calendar-day ${
                    isSelected ? "selected" : ""
                  } ${dayEvents.length > 0 ? "has-event" : ""}`}
                  onClick={() => setSelectedDate(dateKey)}
                  aria-label={`${formatDate(dateKey)}${
                    dayEvents.length > 0 ? ", has events" : ""
                  }`}
                >
                  <span className="calendar-day-number">
                    {day}
                  </span>

                  {dayEvents.length > 0 && (
                    <span className="calendar-event-dot" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="calendar-legend">
            <span className="calendar-event-dot" />
            <span>Event scheduled</span>
          </div>
        </div>

        <aside className="selected-events-card">
          <span className="event-calendar-eyebrow">
            SELECTED DATE
          </span>

          <h3>{formatDate(selectedDate)}</h3>

          {selectedEvents.length > 0 ? (
            <div className="selected-events-list">
              {selectedEvents.map((event) => (
                <article
                  className="calendar-event-item"
                  key={`${event.startDate}-${event.title}`}
                >
                  <span
                    className={`event-status ${
                      event.status === "upcoming"
                        ? "upcoming"
                        : "past"
                    }`}
                  >
                    {event.status === "upcoming"
                      ? "Upcoming Event"
                      : "Past Event"}
                  </span>

                  <h4>{event.title}</h4>

                  {event.endDate && (
                    <p className="event-date-range">
                      {formatDate(event.startDate)} –{" "}
                      {formatDate(event.endDate)}
                    </p>
                  )}

                  {event.time && (
                    <p className="event-time">{event.time}</p>
                  )}

                  <p className="event-description">
                    {event.description}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="calendar-empty-state">
              <span className="empty-state-star">✦</span>

              <p>No events scheduled for this date.</p>

              <span>
                Choose another date to explore our activities.
              </span>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

export default EventCalendar;
