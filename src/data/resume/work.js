/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: "Tappshare",
    position: "Frontend Engineer",
    url: "http://skepticalinvestments.biz",
    startDate: "2023-09-01",
    summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
    YC companies.`,
    highlights: [
      "Led a project and played a key role in another, both utilizing server-side React rendering to ensure optimal performance and SEO. My contributions were focused on building the user interface from the ground up and implementing efficient data fetching",
      "Integrated React Query for efficient data fetching, caching, and synchronization with backend APIs. Implemented solutions for data fetching, error handling, and API call optimization.",
      "Created highly reusable and modular components using React, significantly reducing development time for future features and ensuring consistency across the application.",
      "Leveraged Material UI for styling, ensuring a modern, responsive, and clean design throughout the project. Customized themes and components to align with the application's brand and design language",
      "Worked closely with the backend team to define and implement API endpoints, ensuring smooth data flow between the frontend and backend. Collaborated with designers to bring the UI vision to life while adhering to the latest UX best practices.",
    ],
  },
  {
    name: "Kleekit",
    position: "Lead Frontend Engineer",
    url: "https://smileidentity.com",
    startDate: "2021-02-01",
    endDate: "2024-12-31",
    summary: `Kleekit is a small, Warri‑based Information Technology & Services firm (2–10 employees) founded around 2019. Their mission is “to build tech‑enabled solutions for businesses,” providing the technical and technological tools required to help companies grow and compete online.
    They offer end‑to‑end web and mobile development services, including custom website design and management, app development, e‑commerce integration, SEO‑friendly builds, and content creation. They also maintain clients’ social media pages and provide ongoing site support
    Kleekit prides itself on delivering “hassle‑free tech services” that help businesses grow and adapt in a digital marketplace`,
    highlights: [
      "Developed and integrated the frontend for an online cryptocurrency payment platform, implementing robust security measures such as encryption and token-based authentication to enhance data protection and transaction security",
      "Designed and developed the frontend of scalable and user-centric online medical system using React, enhancing accessibility and efficiency for doctors and patients while ensuring a seamless user experience",
      "Developed, and maintained responsive, high-performance web applications using React, ensuring optimal user experience and cross-browser compatibility",
      "Integrated Apollo GraphQl, Reach Hooks, React Query, Rest API, TailwindCSS, NextJS, Redux, Material UI, Axios, GraphQl, Typescript, and Yarn Package Manager to enhance web application functionality and user experienc",
      "Collaborated with cross-functional teams to ensure timely delivery of high-quality projects within budget",
    ],
  },
];

export default work;
