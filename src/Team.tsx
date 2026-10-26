
import React from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

const founder: Member = {
  name: "Nadine Andini Wirawan",
  role: "Founder",
  image: "/images/nadine.jpg",
};

const overallHeads: Member[] = [
  {
    name: "Overall Head Name",
    role: "Overall Head",
    image: "/images/overall-head-1.jpg",
  },
  {
    name: "Overall Head Name",
    role: "Overall Head",
    image: "/images/overall-head-2.jpg",
  },
];

const divisions = [
  {
    name: "Creative",
    members: [
      { name: "Member Name", role: "Head", image: "/images/creative-head.jpg" },
      { name: "Member Name", role: "Co-Head", image: "/images/creative-cohead.jpg" },
    ],
  },
  {
    name: "Academics",
    members: [
      { name: "Rayyan Othman Haniyoto", role: "Member", image: "/images/rayyan.jpg" },
    ],
  },
  {
    name: "Media & Communications",
    members: [
      { name: "Member Name", role: "Head", image: "/images/media-head.jpg" },
    ],
  },
  {
    name: "Events",
    members: [
      { name: "Member Name", role: "Head", image: "/images/events-head.jpg" },
    ],
  },
  {
    name: "Fundraising",
    members: [
      { name: "Member Name", role: "Head", image: "/images/fundraising-head.jpg" },
    ],
  },
  {
    name: "Technology",
    members: [
      { name: "Ainiya Faida Haura", role: "Member", image: "/images/ainiya.jpg" },
      { name: "Avenessha Maria", role: "Member", image: "/images/avenessha.jpg" }, 
    ],
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="yf-member-card">
      <div className="yf-member-photo">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
        <span className="yf-photo-placeholder">YF</span>
      </div>

      <div className="yf-member-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  );
}

function Team() {
  return (
    <main className="yf-team-page">
      <section className="yf-team-heading">
        <p className="section-label">YOUTHFUNDED • OUR TEAMS</p>
        <h1>Meet Our Teams</h1>
        <p className="yf-team-subtitle">
          The people working together to make financial literacy
          accessible to young people.
        </p>
      </section>

      <section className="yf-team-leadership">
        <p className="section-label">01 — FOUNDER</p>

        <div className="yf-founder-wrap">
          <MemberCard member={founder} />
        </div>

        <div className="yf-overall-heading">
          <p className="section-label">02 — OVERALL LEADERSHIP</p>
          <h2>Overall Heads</h2>
        </div>

        <div className="yf-overall-grid">
          {overallHeads.map((member, index) => (
            <MemberCard key={`${member.role}-${index}`} member={member} />
          ))}
        </div>
      </section>

      <section className="yf-team-divisions">
        <div className="yf-division-heading">
          <p className="section-label">03 — OUR DIVISIONS</p>
          <h2>Meet the Divisions</h2>
        </div>

        {divisions.map((division, index) => (
          <section className="yf-division" key={division.name}>
            <div className="yf-division-title">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{division.name}</h3>
            </div>

            <div className="yf-member-grid">
              {division.members.map((member, memberIndex) => (
                <MemberCard
                  key={`${division.name}-${memberIndex}`}
                  member={member}
                />
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

export default Team;
