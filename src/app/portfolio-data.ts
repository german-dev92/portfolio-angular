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
    'End-to-end data project focused on understanding and predicting energy consumption patterns in Spain, combining robust data processing with analysis and modeling.',
  highlights: [
    'Built data pipelines for data cleaning and processing',
    'Implemented time series forecasting models',
    'Applied clustering techniques (K-Means) for segmentation',
    'Performed exploratory data analysis to uncover trends and anomalies',
  ],
  technologies: ['Python', 'Pandas', 'PySpark', 'Time Series', 'K-Means', 'EDA'],
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
