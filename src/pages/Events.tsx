import React from "react";
function Events() {
  return (    
<div className="events-carousel">
  
  <article className="event-card">
    <img src="/event1-doc1.jpg" alt="Event 1" />
    <div className="event-content">
      <h3>WWF X YouthFunded X Chicco Jericho</h3>
      <p>Collaborated with TUSK Force and WWF on a 
        fundraising initiative to support elephant 
        conservation in Indonesia. 
      </p>
      <div className="event-meta">
        <p>
        <strong> Date: </strong>
         August 2026 — October 2026
        </p>
        <p>
        <strong> Place: </strong>
         Taman Nasional Way Kambas & WWF Jakarta Office
        </p>
        </div>
        <a href="/events/wwf-youthfunded" className="event-read-more">
       Read More <span aria-hidden="true">↗</span>
       </a>
      
    </div>
  </article>
  </div>
  );
}

export default Events;



