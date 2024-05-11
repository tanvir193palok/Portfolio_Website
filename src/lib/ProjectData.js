import Project1 from "../assets/portfolio/Project-1.png";
import Project2 from "../assets/portfolio/Project-2.png";
import Project3 from "../assets/portfolio/Project-3.png";
import Project4 from "../assets/portfolio/Project-4.png";
import Project6 from "../assets/portfolio/Project-6.png";
import Project7 from "../assets/portfolio/Project7.jpg";
import Project8 from "../assets/portfolio/Project8.jpg";
import Project9 from "../assets/portfolio/Project9.jpg";
import Project10 from "../assets/portfolio/Project10.png";
import Project11 from "../assets/portfolio/Project11.png";
import Project12 from "../assets/portfolio/Project12.png";
import Project13 from "../assets/portfolio/Project13.png";
import Project16 from "../assets/portfolio/Project16.png";

export const projects = [
  {
    id: 1,
    name: "Eventry",
    isFeatured: true,
    details:
      "Multipage website showing event information that user can attend.",
    keyFeatures: [
      "Login and registration functionality.",
      "Integrate Structured Event Schema from Google Schema.",
      "Integrate search with searchTerm and debouncing.",
      "Interested and going functionality as well as on going sending email on a successful payment.",
      "Image optimization and handling blur placeholder.",
    ],
    usedTechnologies: [
      "Next.js",
      "Tailwind CSS",
      "Mongoose",
      "MongoDB Atlas",
      "MongoDB compass",
    ],
    concepts: [
      "Server Actions",
      "Debounce",
      "Server Side Rendering",
      "Client Side Rendering",
      "Data Fetching",
      "Dynamic Routing",
      "schema",
      "Context API in Next.js",
      "Dynamic Metadata",
      "Opengraph Images",
      "Resend API",
    ],
    image: Project11,
    liveUrl: "https://eventry-amber.vercel.app/",
    gitUrl: "https://github.com/tanvir193palok/Eventry",
  },
  {
    id: 2,
    name: "LinkLoom",
    isFeatured: true,
    details:
      "A simple social website for sharing post about day to day life containing various feature.",
    keyFeatures: [
      "Login, Signup and Authentication through JWT Authentication.",
      "Post adding, updating and deleting using CRUD operation.",
      "Profile information(Image, bio) updating.",
      "Post like and comment functionality.",
    ],
    usedTechnologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "Axios",
      "React Hook Form",
      "React Router Dom",
      "JSON Server",
    ],
    concepts: [
      "JWT Authentication",
      "Data Fetching using Axios",
      "Reducer",
      "Custom Hooks in React",
      "Loading and Error handling",
    ],
    image: Project16,
    liveUrl: "https://link-loom-vert.vercel.app/",
    gitUrl: "https://github.com/tanvir193palok/LinkLoom",
  },
  {
    id: 3,
    name: "Gym me",
    isFeatured: true,
    details:
      "Well designed and animated platform showcasing a Gym's curriculums.",
    keyFeatures: [
      "Different section providing information about the Gym.",
      "Eye-catchy animation using AOS.",
      "Touch interactive slider functionality using Swiper.",
      "Custom accordion for FAQ.",
    ],
    usedTechnologies: ["React", "Tailwind CSS"],
    concepts: ["AOS", "Swiper"],
    image: Project8,
    liveUrl: "https://palok-gym.netlify.app/",
    gitUrl: "https://github.com/tanvir193palok/Gym_Website",
  },
  {
    id: 4,
    name: "Bistro Cafe",
    isFeatured: false,
    details:
      "Well designed and animated website for a restaurant with some amazing features.",
    keyFeatures: [
      "Different section providing information about the restaurant.",
      "Smooth and eye-catchy animation and design using Tailwind CSS and Framer Motion.",
      "Slider using React-responsive-carousel.",
      "For handling date input in booking form used React-date-picker and React-time-picker.",
    ],
    usedTechnologies: ["React", "Tailwind CSS", "Framer Motion"],
    concepts: ["React Icons", "React Date Picker", "React Time Picker"],
    image: Project7,
    liveUrl: "https://bistro-cafe.netlify.app/",
    gitUrl: "https://github.com/tanvir193palok/Restaurant_Website",
  },
  {
    id: 5,
    name: "Portfolio Website",
    isFeatured: false,
    details:
      "My personal portfolio website showcasing my detailed information.",
    keyFeatures: [
      "Different section showing my about, skills, experience, projects and social links.",
      "Smooth animation of different variants.",
      "Smooth scrolling navigation using React Scroll.",
      "Contact me through email functionality.",
      "Cursor effect using context API.",
    ],
    usedTechnologies: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
    concepts: [
      "Context API",
      "React Scroll",
      "3D Model renderring",
      "Responsive Design",
    ],
    image: Project9,
    liveUrl: "https://tanvir-ahmed-palok-portfolio.netlify.app/",
    gitUrl: "https://github.com/tanvir193palok/Portfolio_Website",
  },
  {
    id: 6,
    name: "E-commerce Website",
    isFeatured: false,
    details: "A multipage website to conduct functionality of a business.",
    keyFeatures: [
      "Multipage(Home page, prodcuts page, product details page, cart page, signin and register page) navigation using React Router Dom.",
      "Backend in progress.",
    ],
    usedTechnologies: [
      "React",
      "Styled Components",
      "React Router Dom",
      "Axios",
    ],
    concepts: ["Data Fetching", "Routing"],
    image: Project1,
    liveUrl: "https://tanvir193palok.github.io/E-commerce-Site/",
    gitUrl: "https://github.com/tanvir193palok/E-commerce-Site",
  },
  {
    id: 7,
    name: "Quizzy",
    isFeatured: true,
    details: "Multipage quiz platform with various functionality.",
    keyFeatures: [
      "Multipage(Login, signup, Home page, Quiz page, Result page) navigation using React Router Dom.",
      "Login and signup functionality.",
      "A video watching functionality to watch youtube content using React Player.",
      "Performing quiz and result calculation.",
    ],
    usedTechnologies: ["React", "CSS", "React Router Dom", "Firebase"],
    concepts: [
      "React Player",
      "React Infinite Scroll",
      "Context API",
      "Custom Hooks",
    ],
    image: Project2,
    liveUrl: "https://tanvir193palok.github.io/",
    gitUrl: "https://github.com/tanvir193palok/Quiz-Application",
  },
  {
    id: 8,
    name: "Recipe App",
    isFeatured: false,
    details:
      "A basic website that fetches data from an API and visualize according to users preferences.",
    keyFeatures: [
      "Showing recipe based on filtering.",
      "Searching about food with name.",
      "Fething data from third party API.",
    ],
    usedTechnologies: ["React", "SCSS"],
    concepts: ["Data fetching"],
    image: Project10,
    liveUrl: "https://recipe-app2x4.netlify.app/",
    gitUrl: "https://github.com/tanvir193palok/Recipe_App",
  },
  {
    id: 9,
    name: "Pixel Harmony",
    isFeatured: false,
    details:
      "A portfolio website for a photographer showcasing her skills in photography.",
    keyFeatures: [
      "Different sections to show photographers personal information.",
      "Smooth animation using Framer Motion",
      "Page to page navigation using React Router Dom",
    ],
    usedTechnologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router Dom",
    ],
    concepts: ["React Scroll"],
    image: Project6,
    liveUrl: "https://shimmering-wisp-8a5007.netlify.app/",
    gitUrl: "https://github.com/tanvir193palok/PixelHarmony",
  },
  {
    id: 10,
    name: "ThreeJS Project",
    isFeatured: false,
    details:
      "A website showing a 3D model integration that can be used as a feature in E-commerce site.",
    keyFeatures: [
      "3D model which can be customized using imported logo and texture.",
      "Color picker to choose various color implemented using React Color.",
      "Importing Logo functionality.",
      "AI bot feature which can be used to generate logo from prompt.",
    ],
    usedTechnologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Express",
      "Open AI",
    ],
    concepts: [
      "React Color",
      "Maath",
      "Valtio",
      "3D model renderring",
      "OpenAI API response integration",
    ],
    image: Project3,
    liveUrl:
      "https://653ebc0b7cf24033aad61f55--deluxe-kitten-e4a77b.netlify.app/",
    gitUrl: "https://github.com/tanvir193palok/ThreeJS-Project",
  },
  {
    id: 11,
    name: "Material UI Project",
    isFeatured: false,
    details:
      "A basic social website design implemented with material UI features.",
    keyFeatures: [
      "Simple UI design made with MUI components, icons and styled components",
      "Theme toggle functionality",
    ],
    usedTechnologies: ["React", "Material UI", "Styled Components"],
    concepts: ["Dark mode toggling"],
    image: Project4,
    liveUrl: "https://tanvir193palok.github.io/MaterialUI-Project/",
    gitUrl: "https://github.com/tanvir193palok/MaterialUI-Project",
  },
  // {
  //   id: 11,
  //   name: "",
  //   details: "",
  //   keyFeatures: [],
  //   usedTechnologies: [],
  //   concepts: [],
  //   image: Project11,
  //   liveUrl: "https://eventry-amber.vercel.app/",
  //   gitUrl: "https://github.com/tanvir193palok/Eventry",
  // },
  {
    id: 12,
    name: "EcoVista",
    isFeatured: true,
    details: "A website showcasing weather details of a particular location.",
    keyFeatures: [
      "Current location detection using Geolocation API.",
      "Searching weather information based on some location provided in database.",
      "Fetching Weather information based on location using OpenWeatherMap API.",
    ],
    usedTechnologies: ["Next.js", "Tailwind CSS"],
    concepts: [
      "Parallel Routing",
      "Dynamic Routing",
      "API Development",
      "Data fetching",
    ],
    image: Project12,
    liveUrl: "https://eco-vista-chi.vercel.app/",
    gitUrl: "https://github.com/tanvir193palok/EcoVista",
  },
  {
    id: 13,
    name: "MovieDB",
    isFeatured: false,
    details: "Multipage website showing movie related details.",
    keyFeatures: [
      "Showing movie in homepage from a json file.",
      "Intercepting dynamic movie route and showing that dynamic data in a modal.",
      "Default language picker as well as language switcher functionality through Internationalization.",
    ],
    usedTechnologies: ["Next.js", "Tailwind CSS"],
    concepts: [
      "Internationalization",
      "Intercepting Routes",
      "Dynamic Routing",
      "REST API Development",
      "Data Fetching",
      "Dynamic Import",
    ],
    image: Project13,
    liveUrl: "https://movie-db-three-tau.vercel.app/",
    gitUrl: "https://github.com/tanvir193palok/MovieDB",
  },
];
