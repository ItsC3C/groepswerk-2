import React from "react";
import styles from "../../css/Components-css/AboutCSS/OurTeamComponent.module.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface OurTeamComponentProps {
  team: TeamMember[];
}

const OurTeamComponent: React.FC<OurTeamComponentProps> = ({ team }) => {
  return (
    <div className={styles.teamContainer}>
      <h2 className={styles.teamHeading}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {team.map((member) => (
          <div key={member.name} className={styles.teamMember}>
            <div className={styles.teamImageContainer}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.teamImage}
              />
            </div>
            <h3 className={styles.teamMemberName}>{member.name}</h3>
            <p className={styles.teamMemberRole}>{member.role}</p>
            <div className={styles.teamSocial}>
              <a href="#" className={styles.teamSocialLink}>
                X
              </a>
              <a href="#" className={styles.teamSocialLink}>
                In
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamComponent;
