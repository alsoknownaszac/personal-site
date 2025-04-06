const skills = [
  {
    title: "Javascript",
    competency: 5,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Node.JS",
    competency: 5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "React",
    competency: 5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "React Native",
    competency: 5,
    category: ["Mobile App Development", "Javascript"],
  },
  {
    title: "Next.JS",
    competency: 5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Express.JS",
    competency: 5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "React Hooks",
    competency: 5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "RestAPI",
    competency: 5,
    category: ["Web Development", "Javascript", "APIs"],
  },
  {
    title: "Git",
    competency: 5,
    category: ["Tools"],
  },
  {
    title: "Typescript",
    competency: 5,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "HTML + SASS/SCSS/CSS",
    competency: 5,
    category: ["Web Development", "Languages"],
  },
  {
    title: "GraphQL",
    competency: 5,
    category: ["Web Development", "Databases", "APIs"],
  },
  {
    title: "AJAX",
    competency: 5,
    category: ["Web Development", "Techniques", "APIs"],
  },
  {
    title: "Bootstrap",
    competency: 5,
    category: ["CSS Frameworks", "Web Development"],
  },
  {
    title: "TailwindCSS",
    competency: 5,
    category: ["CSS Frameworks", "Web Development"],
  },
  {
    title: "Material UI",
    competency: 5,
    category: ["CSS Frameworks", "Web Development"],
  },
  {
    title: "Styled Component",
    competency: 5,
    category: ["CSS Frameworks", "Web Development"],
  },
  {
    title: "React Query",
    competency: 5,
    category: ["Libraries", "Javascript"],
  },
  {
    title: "Jest",
    competency: 5,
    category: ["Libraries", "Javascript"],
  },
  {
    title: "Axios",
    competency: 5,
    category: ["Libraries", "Tools"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
