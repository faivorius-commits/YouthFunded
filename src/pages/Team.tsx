
import React from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

const founder: Member = {
  name: "Nadine Andini Wirawan",
  role: "Founder",
  image: "/images/founder.jpg",
};

const overallHeads: Member[] = [
  {
    name: "Clara Victoria Tjokro",
    role: "Overall Head",
    image: "/images/clara.jpg",
  },
  {
    name: "Rafaela Miracle Jade Emmanuel Suwignyo ",
    role: "Overall Head",
    image: "/images/jade.jpg",
  },
];

const divisions = [
  {
    name: "Creative",
    members: [
      { name: "Marcia Amberlyn", role: "Head", image: "/images/marcia.jpg" },
      { name: "Taneisha Kaniel Ang", role: "Co-Head", image: "/images/taneisha.jpg" },
      { name: "Sarah Juliette Sie Tjandra", role: "Member", image: "/images/sarah.jpg" },
      { name: "Gwynne Calia Tan", role: "Member", image: "/images/gwynne.jpg" },
      { name: "Lauryn Suganda", role: "Member", image: "/images/lauryn.jpg" },
      { name: "Andrea Aiko Annabelle", role: "Member", image: "/images/andrea.jpg" },
      { name: "Malika Shafira Ricko ", role: "Member", image: "/images/malika.jpg" },
      { name: "Cresentia Kelyn", role: "Member", image: "/images/cresentia.jpg" },
      { name: "Patricia Renata Santana", role: "Member", image: "/images/patricia.jpg" },
      { name: "Stevanie Elaine Suwardi", role: "Member", image: "/images/stevanie.jpg" },
      { name: "Nathania Olivia Setiawan", role: "Member", image: "/images/nathania.jpg" },
      { name: "Celine Valerie", role: "Member", image: "/images/celine.jpg" },
      { name: "Naureen Aisha Rinaldi", role: "Member", image: "/images/naureen.jpg" },
    ],
  },

  {
    name: "Academics",
    members: [
      { name: "Alliyah Paelongan", role: "Head", image: "/images/alliyah.jpg" },
      { name: "Franzeska Dominique Gresia Srikandi" , role: "Co-Head", image: "/images/franzeska.jpg" },
      { name: "Vanessa Priyono", role: "Member", image: "/images/vanessa.jpg" },
      { name: "Bianca Hendrata", role: "Member", image: "/images/bianca.jpg" },
      { name: "Nadeline Sutandjati", role: "Member", image: "/images/nadeline.jpg" },
      { name: "Elizabeth Michelle Tanuwijaya", role: "Member", image: "/images/elizabeth.jpg" },
      { name: "Kenneth Adrian Sudjono", role: "Member", image: "/images/kenneth.jpg" },
      { name: "Regina Sayo Randa Nirmala", role: "Member", image: "/images/regina.jpg" },
      { name: "Darren Harold Tjandra", role: "Member", image: "/images/darren.jpg" },
      { name: "Syalomita Annabelle Aditya", role: "Member", image: "/images/syalomita.jpg" },
      { name: "Qur'ane Chelseameida Sofia", role: "Member", image: "/images/qur'ane.jpg" },
      { name: "Rayyan Othman Haniyoto", role: "Member", image: "/images/rayyan.jpg" }, 
    ],
  },
  {
    name: "Media & Communications",
    members: [
      { name: "Belinda Ariella Hou", role: "Head", image: "/images/belinda.jpg" },
      { name: "Grace Thalia Avalee", role: "Member", image: "/images/grace.jpg" },
      { name: "Jessica Colleen Indradjajae", role: "Member", image: "/images/jessica.jpg" },
      { name: "Elizaebeth Sarah Albina Fernandez Lamury", role: "Member", image: "/images/elizaebeth.jpg" },
      { name: "Nadine Tanu Utomo", role: "Member", image: "/images/nadine.jpg" },
      { name: "Faira Raissa Atheefa", role: "Member", image: "/images/faira.jpg" },
      { name: "Chen Zhi Xuan (Emilia)", role: "Member", image: "/images/chen.jpg" },
      { name: "Louise Tiffany Hartanto", role: "Member", image: "/images/louise.jpg" },
    ],
  },
  {
    name: "Events",
    members: [
      { name: "Priscila Langit Kuncoro", role: "Head", image: "/images/priscila.jpg" },
      { name: "Leonetta Jocelyn Akimi ", role: "Member", image: "/images/leonetta.jpg" },
      { name: "Kezia Aurelia Wijaya", role: "Member", image: "/images/kezia.jpg" },
      { name: "Josevin Anastasya Tanuwijaya", role: "Member", image: "/images/josevin.jpg" },
      { name: "Fiona Michelle Setiawan", role: "Member", image: "/images/fiona.jpg" },
      { name: "Irene Huelva Yang", role: "Member", image: "/images/irene.jpg" },
      { name: "Leticia Mary Gunawan", role: "Member", image: "/images/leticia.jpg" },
    ],
  },
  {
    name: "Fundraising",
    members: [
      { name: "Kristy Helgarani Simangunsong", role: "Head", image: "/images/kristy.jpg" },
      { name: "Charlene Angel", role: "Member", image: "/images/charlene.jpg" },
      { name: "Eugenia Keiko Wijaya", role: "Member", image: "/images/eugenia.jpg" },
      { name: "Ravel Dakari Nararya", role: "Member", image: "/images/ravel.jpg" },
      { name: "Nikita Susanto", role: "Member", image: "/images/nikita.jpg" },
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
        <h1>Meet The Crew</h1>
       <p className="yf-team-subtitle">  </p> 
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
