
export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  thumbnail: string;
  tools: string[];
  challengeDescription: string;
  process: string[];
  solution: string;
  results: string;
  liveDemo?: string;
  githubRepo?: string;
}

export const projects: Project[] = [
  {
    id: 'Youtube',
    title: 'Youtube Landing page Clone',
    role: 'Frontend Development',
    description: 'A replica of the popular video-sharing platform landing page, YouTube, built with HTML and CSS.',
    thumbnail:'/youtube clone thumbnail.jpg',
    tools: ['HTML', 'CSS',],
    challengeDescription: 'Create an intuitive Youtube Landing page that showcase its user interface, making it accessible for users of various technical backgrounds.',
    process: [
      'Visited the youtube.com website to understand the layout and functionality',
      'Analyzed the structure of the page and identified key components',
      'Created a wireframe to outline the layout and design elements',
      'Developed the HTML structure for the page, ensuring semantic markup',
      'Styled the page using CSS, focusing on responsiveness and accessibility',
    ],
    solution: 'A fully responsive landing page that mirrors the original YouTube design, including a navigation bar, video thumbnails. The layout is optimized for both desktop and mobile devices.',
    results: 'The project was completed within a week, and the final product received positive feedback for its accuracy and responsiveness. The code is clean and well-structured, making it easy to maintain and update.',
    liveDemo: 'https://you-tube-clone-nine-alpha.vercel.app/',
    githubRepo: 'https://github.com/Abdul-lah001/YouTube-Clone'
  },
  {
    id: 'Lakaka',
    title: 'Lakaka MoviesLab',
    role: 'Frontend Development',
    description: 'A movie discovery platform that allows users to explore and discover movies based on their preferences.',
    thumbnail:'/lakaka.jpg',
    tools: ['HTML', 'CSS', 'REACT',],
    challengeDescription: 'Create an intuitive Lakaka MoviesLab Landing page that showcase its user interface, making it accessible for users of various technical backgrounds.',
    process: [
      'Visited the youtube.com website to understand the layout and functionality',
      'Analyzed the structure of the page and identified key components',
      'Created a wireframe to outline the layout and design elements',
      'Developed the HTML structure for the page, ensuring semantic markup',
      'Styled the page using CSS, focusing on responsiveness and accessibility',
    ],
    solution: 'A fully responsive landing page that mirrors the original YouTube design, including a navigation bar, video thumbnails. The layout is optimized for both desktop and mobile devices.',
    results: 'The project was completed within a week, and the final product received positive feedback for its accuracy and responsiveness. The code is clean and well-structured, making it easy to maintain and update.',
    liveDemo: 'https://lakaka-movies-labs.vercel.app/',
    githubRepo: 'https://github.com/Abdul-lah001/Lakaka-Movies-Labs'
  },
  {
    id: 'Crypto',
    title: 'CryptoX',
    role: 'Frontend Development',
    description: 'Dapp platform that offers seamless transactions of different blockchain networks',
    thumbnail: '/cryptoX.png',
    tools: ['HTML','CSS','Bootstrap',],
    challengeDescription: 'Design a Dapp platform that you can trade, market and exchange different cryptocurrencies.',
    process: [
      'Researched different Dapps that offers same services',
      'Developed a component library focusing on interactive elements',
      'Leanrt new stack which added to my personal development',
      'Implemented gamification elements to increase engagement',
      'Built an easy interractive dashboard for user to navigate through different pages stressfree '
    ],
    solution: 'A Crypto platform with seamless features, and keep track of your transactions.',
    results: 'The platform is completed at 65% of its purpose and got positive feedbacks from peers and mentors',
    liveDemo: 'https://crypto-x-phi.vercel.app/',
    githubRepo: 'https://github.com/Abdul-lah001/CryptoX'
  },
  {
    id: 'furnisphere',
    title: 'Furnisphere',
    role: 'UI Design',
    description: 'A modern furniture e-commerce platform that offers a seamless shopping experience with personalized recommendations and AR features.',
    thumbnail: '/Furnisphere.png',
    tools: ['Figma','X', 'Unsplash'],
    challengeDescription: 'Create a user-friendly e-commerce Landing page that simplifies the furniture shopping experience while providing personalized recommendations.',
    process: [
      'Visited various furniture e-commerce sites to analyze user flows',
      'Created user flows focusing on simplifying complex financial tasks',
    ],
    solution: 'A clean and modern design that emphasizes product discovery and personalization. The design includes a personalized recommendation engine, AR features for product visualization, and a streamlined checkout process.',
    results: 'I received compliments and positive feedback from my peers and mentors for the design. The design was completed within a day, and I learned a lot about user-centered design principles and the importance of usability testing.',
    liveDemo: 'https://www.figma.com/design/eSviqBCfXaEHLvB4bljZ5a/Furnisphere?node-id=0-1&t=BnAIw8yp8JeLbrVR-1'
  },
  {
    id: 'Upstates',
    title: 'Upstates Electrical System LLC',
    role: 'UI Design',
    description: 'This provide reliable, top-quality electrical services across Upstate South Carolina. Fully licensed and insured',
    thumbnail: '/A.R.K.png',
    tools: ['Figma','X', 'Unsplash'],
    challengeDescription: 'Create a user-friendly Landing page that simplifies the services provided experience while providing personalized recommendations.',
    process: [
      'Visited various electrician  sites to analyze user flows',
      'Created user flows focusing on simplifying complex financial tasks',
    ],
    solution: 'A clean and modern design that emphasizes product discovery and personalization. The design includes a personalized recommendation engine, AR features for product visualization, and a streamlined checkout process.',
    results: 'I received compliments and positive feedback from my peers and mentors for the design. The design was completed within a day, and I learned a lot about user-centered design principles and the importance of usability testing.',
    liveDemo: 'https://www.figma.com/design/ZxYrQ9PI8pXzUt2Z3X2Rhl/A.R.K?node-id=0-1&t=GmQq2T282wwjn50g-1'
  },
  {
    id: 'Therapia',
    title: 'Theriapia',
    role: 'UI Design',
    description: 'A mental health platform that connects users with licensed therapists for online therapy sessions.',
    thumbnail: '/therapia.png',
    tools: ['Figma','X', 'Unsplash'],
    challengeDescription: 'Create a user-friendly mental health platform that simplifies the process of finding and booking therapy sessions while providing personalized recommendations.',
    process: [
      'Visited various mental health platforms to analyze user flows',
      'Created user flows focusing on simplifying complex financial tasks',
    ],
    solution: 'A clean and modern design that emphasizes product discovery and personalization. The design includes a personalized recommendation engine, AR features for product visualization, and a streamlined checkout process.',
    results: 'I received compliments and positive feedback from my peers and mentors for the design. The design was completed within a day, and I learned a lot about user-centered design principles and the importance of usability testing.',
    liveDemo: 'https://www.figma.com/design/hS4DOikR1aPLC9fL2E9HBf/Therapia?node-id=33-49&t=UKgn4uzo3sBhCDqd-1'
  }
];
