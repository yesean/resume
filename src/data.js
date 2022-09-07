export default {
  experience: [
    {
      title: 'Front End Engineer Intern',
      organization: { name: 'Meta', href: 'https://www.metacareers.com/' },
      date: 'Jun 2022 - Sep 2022',
      description: [
        'Designed an <b>E2E</b> logging solution to precisely measure performance bottlenecks in UI requests',
        'Reduced network request sizes by <b>80%</b>, by redesigning the Node <b>GraphQL schema</b>',
        'Decreased page load times by <b>75%</b> by <b>leading the migration</b> to a new routing framework',
        'Discovered and addressed existing performance issues in React components, improving load times and page <b>interactivity</b>',
        'Created a custom testing framework with a JSON deserializer to <b>automate</b> GraphQL object assertions',
      ],
    },
    {
      title: 'SDE Intern',
      organization: {
        name: 'Amazon',
        href: 'https://www.amazonuniversity.jobs/',
      },
      link: {
        name: 'GitHub',
        href: 'https://github.com/jmazanec15/opensearch-knn-perf-tool',
      },
      date: 'Jun 2021 - Sep 2021',
      description: [
        "Designed and lead the development of a <b>Python</b> testing framework for <b>OpenSearch's</b> (Amazon Elasticsearch) <b>k-NN</b> plugin",
        "<b>Automated</b> the benchmarking and detection of performance regressions in the plugin's <b>CI/CD</b> workflow, preventing potential production bugs and enabling faster/robust development",
        'Leveraged <b>OO</b> and strong abstractions to maintain simplicity and extensibility while efficiently processing millions of documents per test',
        'Utilized <b>Docker/Compose</b> for test isolation and automated deployment; <b>EC2</b> instances for scalability',
      ],
    },
    {
      title: 'Lead Front End Developer',
      organization: {
        name: 'Hollr Technologies',
        href: 'https://www.joinhollr.com/',
      },
      date: 'Aug 2020 - Feb 2022',
      description: [
        'Developed <b>Chrome extension</b> at a startup facilitating users in streamlining the sharing of products with others such as Amazon, Netflix, Youtube',
        'Used <b>React TypeScript</b> on the frontend and <b>Firebase/Firestore</b> to manage user settings and endorsements',
      ],
    },
  ],
  projects: [
    {
      name: 'Path Maze Visualizer',
      siteUrl: 'https://www.pathmazer.com/',
      githubUrl: 'https://github.com/seanye24/pathmazer',
      date: 'Summer 2020',
      description: [
        'Built <b>React</b> application to visualize different pathﬁnding and maze generation algorithms',
        'Implemented 10 different algorithms, including <b>Dijkstra</b>, A* Search, Kruskal, Prim, etc.',
        'Utilized in a class of <b>100+</b> to help learn and build intuition on algorithms',
      ],
    },
    {
      name: 'Todo List',
      siteUrl: 'https://minimaltodos.com',
      githubUrl: 'https://github.com/seanye24/todo',
      date: 'Spring 2020',
      description: [
        'Built <b>full stack</b> web app for storing and managing todos with user authentication and a <b>RESTful</b> Todo API',
        'Used <b>React</b> on the frontend with an emphasis on <b>Material Design</b> (Material-UI)',
        'Used <b>Node.js / Express</b> for API requests and <b>MongoDB</b> for persisting data',
      ],
    },
  ],
  education: {
    courses: [
      'Software Engineering',
      'Advanced Data Structures',
      'Algorithms',
      'Programming Languages',
      'Computer Vision',
      'Machine Learning',
      'Search and Reasoning',
    ],
  },
  honors: [
    'National Merit Finalist',
    'Warren Honor Society',
    'National AP Scholar',
  ],
  skills: {
    languages: [
      'TypeScript/JavaScript',
      'Python',
      'Go',
      'C/C++',
      'Java',
      'HTML5/CSS3',
      'Haskell',
      'SQL',
      'Bash',
    ],
    frameworks: ['React.js', 'Node.js', 'Relay', 'PostgreSQL', 'MongoDB', 'Qt'],
    tools: ['GraphQL', 'AWS', 'Docker', 'Firebase', 'Git', 'Vim', 'Linux'],
  },
};
