
import { useState } from "react";
import "./EventCalendar.css";

type CalendarEvent = {
  date: string; // Format: YYYY-MM-DD
  title: string;
  description: string;
  status: "upcoming" | "past";
  time?: string;
};

const events: CalendarEvent[] = [
{
  startDate: "2026-08-01",
  endDate: "2026-10-31",
  title: "WWF X YouthFunded X Chicco jericho",
  description: "Collaborated with TUSK Force and WWF, raising and donating Rp 10,000,000 to support elephant conservation in Indonesia.",
  status: "Past Event",
}
];

const monthNames = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December",
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function EventCalendar() {
  const today = new Date();

  const [viewDate, setViewDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState(dateKey(today));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const selectedEvents = events.filter(
    (event) => event.date === selectedDate
  );

  function changeMonth(amount: number) {
    setViewDate(new Date(year, month + amount, 1));
  }

  return (
    <section className="event-calendar-section">
      <div className="calendar-heading">
        <span className="calendar-eyebrow">
          PLAN · PARTICIPATE · GROW
        </span>

        <h2>Event Calendar</h2>

        <p>
          Every date holds a possibility. Find our past moments
          and upcoming opportunities.
        </p>
      </div>

      <div className="calendar-layout">
        <div className="calendar-card">
          <div className="calendar-top">
            <div>
              <span className="calendar-small-label">
                BROWSE BY MONTH
              </span>
              <h3>
                {monthNames[month]} {year}
              </h3>
            </div>

            <div className="calendar-controls">
              <button
                type="button"
                aria-label="Previous month"
                onClick={() => changeMonth(-1)}
              >
                ‹
              </button>

              <button
                type="button"
                aria-label="Next month"
                onClick={() => changeMonth(1)}
              >
                ›
              </button>
            </div>
          </div>

          <div className="calendar-weekdays">
            {weekDays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="calendar-days">
            {cells.map((day, index) => {
              if (day === null) {
                return (
                  <div
                    className="calendar-day empty"
                    key={`empty-${index}`}
                  />
                );
              }

              const currentDate = new Date(year, month, day);
              const key = dateKey(currentDate);
              const dayEvents = events.filter(
                (event) => event.date === key
              );

              const isToday = key === dateKey(today);
              const isSelected = key === selectedDate;
              const hasUpcoming = dayEvents.some(
                (event) => event.status === "upcoming"
              );
              const hasPast = dayEvents.some(
                (event) => event.status === "past"
              );

              return (
                <button
                  type="button"
                  key={key}
                  className={[
                    "calendar-day",
                    isToday ? "is-today" : "",
                    isSelected ? "is-selected" : "",
                    dayEvents.length ? "has-event" : "",
                  ].join(" ")}
                  onClick={() => setSelectedDate(key)}
                  aria-label={`${monthNames[month]} ${day}, ${year}${
                    dayEvents.length
                      ? `, ${dayEvents.length} event(s)`
                      : ""
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>{day}</span>

                  {(hasUpcoming || hasPast) && (
                    <span className="calendar-dots">
                      {hasPast && (
                        <i className="calendar-dot past-dot" />
                      )}
                      {hasUpcoming && (
                        <i className="calendar-dot upcoming-dot" />
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="calendar-legend">
            <span>
              <i className="calendar-dot past-dot" />
              Past events
            </span>

            <span>
              <i className="calendar-dot upcoming-dot" />
              Upcoming events
            </span>
          </div>
        </div>

        <aside className="calendar-details">
          <span className="calendar-small-label">
            SELECTED DATE
          </span>

          <h3>
            {new Date(`${selectedDate}T12:00:00`).toLocaleDateString(
              "en-US",
              {
                month: "long",
                day: "numeric",
                year: "numeric",
              }
            )}
          </h3>

          {selectedEvents.length > 0 ? (
            <div className="calendar-event-list">
              {selectedEvents.map((event, index) => (
                <article
                  className={`calendar-event-item ${event.status}`}
                  key={`${event.date}-${event.title}-${index}`}
                >
                  <span className="calendar-event-status">
                    {event.status === "past"
                      ? "PAST EVENT"
                      : "UPCOMING EVENT"}
                  </span>

                  <h4>{event.title}</h4>
                  <p>{event.description}</p>

                  {event.time && (
                    <span className="calendar-event-time">
                      {event.time}
                    </span>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="calendar-empty-state">
              <span className="calendar-empty-icon">✳</span>
              <h4>No events on this date</h4>
              <p>
                Choose another date to explore YouthFunded
                activities.
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

