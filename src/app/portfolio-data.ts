import { Profile, Project, SkillGroup } from './models';

export const PROFILE: Profile = {
  name: 'German Velasquez Zelaya',
  role: 'Full Stack Developer | Data & AI-Oriented Developer',
  location: 'Madrid, Spain',
  summary:
    'Full Stack Developer with a background in Big Data and Data Science. I build web applications with Angular, Node.js, and Python, and I apply data analysis and ML techniques (forecasting, clustering, visualization) to solve real-world problems. I also use AI tools and prompt engineering to accelerate development and debugging.',
};

export const FEATURED_PROJECT: Project = {
  id: 'energy-consumption',
  kind: 'featured',
  title: 'Energy Consumption Analysis and Prediction System in Spain',
  subtitle: 'Featured project · Time series forecasting + clustering + EDA',
  description:
    'Master’s thesis project analyzing petroleum product consumption across Spain’s autonomous communities (2020–2024) to identify demand patterns and forecast trends through 2026, supporting energy-transition planning with explainable insights.',
  highlights: [
    'Built an automated pipeline to collect, clean, and normalize data (PySpark + pandas)',
    'Performed deep EDA to surface correlations across fuel types and regional characteristics',
    'Segmented regions with K-Means to identify groups with similar consumption behavior (notably a transition-ready cluster)',
    'Compared forecasting approaches and selected SARIMAX for seasonality; assessed limitations without key exogenous variables',
  ],
  technologies: ['Python', 'Pandas', 'PySpark', 'EDA', 'K-Means', 'Time Series', 'SARIMAX'],
};

export const PROJECTS: Project[] = [
  FEATURED_PROJECT,
  {
    id: 'real-estate-analysis',
    kind: 'project',
    title: 'Real Estate Data Analysis',
    description:
      'Data cleaning, trend analysis, and visualization to identify market dynamics and actionable insights from property datasets.',
    technologies: ['Python', 'Pandas', 'SQL', 'Data Visualization'],
  },
  {
    id: 'hotel-reviews-app',
    kind: 'project',
    title: 'Hotel Reviews Analysis Web App',
    description:
      'Web application that processes review data and presents clear, recruiter-friendly insights through a simple frontend visualization layer.',
    technologies: ['Angular', 'Node.js', 'Python', 'Data Processing', 'Visualization'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'Java'],
  },
  {
    title: 'Data',
    items: ['Python (Pandas, PySpark)', 'SQL', 'Predictive Models', 'Visualization'],
  },
  {
    title: 'Cloud & Tools',
    items: ['Azure (basic)', 'Terraform (basic)', 'Git', 'GitHub', 'MongoDB', 'MySQL'],
  },
  {
    title: 'AI Skills',
    items: ['Prompt Engineering', 'AI Agents', 'AI-assisted Debugging', 'AI-assisted Workflows'],
  },
];
