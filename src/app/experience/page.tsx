'use client';

import { plusJakarta, oswald } from '@/styles/fonts';
import Navbar from '@/components/navbar';
import styles from './experience.module.css';

export default function Experience() {
  return (
    <main
      className={`${styles.main} ${plusJakarta.variable} ${oswald.variable}`}
    >
      <Navbar />
      <div className={styles.pageContainer}>
        <h3>2023 June - 2023 September</h3>
        <h2>Choice Tiling</h2>
        <h4>Site Supervisor</h4>
        <p>
          Was responsible for organising material deliveries, ensuring Q&A
          onsite, organising workers and project start to end dates. During my
          time there, I was on commerical job sites such as Microsoft Data
          center in Westgate, few University of Auckland buildings and many
          residential buildings.
        </p>
        <br />
        <h3>2021 Nov - 2023 June</h3>
        <h2>Infosys/Spark</h2>
        <h4>Technical Associate/Frontend Developer</h4>
        <p>
          Responsible for the migration of existing an javascript repo into
          typescript for the convergence squad and our work led to a new chapter
          within Spark. Worked with Mapbox GL, typescript, next.js, react query
          and next-auth to create our &quot;ConvergEX&quot; web app for internal
          spark use. I handled the frontend logic and performance within the
          app.
        </p>
        <br />
        <h3>2021 March - 2021 July</h3>
        <h2>Mission Ready</h2>
        <h4>Agile Software Developer (AI & Cloud)</h4>
        <p>
          During this year 6 month coding bootcamp, I was exposed to working
          collobaratively in a software developement team with UX designers in
          order to simulate a professional working environment. I used various
          technologies such as Docker and cloud computing services from AWS,
          Azure, Google cloud and IBM cloud. Also handled REST APIs and
          fullstack development in an agile environment.
        </p>
      </div>
    </main>
  );
}
