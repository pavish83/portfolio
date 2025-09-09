const projects = [
  {
    id: 1,
    nameKey: "Store application",
    descriptionKey: "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with the latest Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.",
    featuresKeys: [
      "User Authentication with Appwrite: Implement signup, login, and logout functionality using Appwrite's authentication system.",
      "File Uploads: Effortlessly upload a variety of file types, including documents, images, videos, and audio, ensuring all your important data.",
      "View and Manage Files: Users can browse through their uploaded files stored in Appwrite storage, view on a new tab, rename file or delete.",
      "Download Files: Users can download their uploaded files giving them instant access to essential documents.",
      "File Sharing: Users can easily share their uploaded files with others, enabling collaboration and easy access to important content.",
      "Dashboard: Gain insights at a glance with a dynamic dashboard that showcases total and consumed storage, recent uploads, and a summary of files grouped by type.",
      "Global Search: Users can quickly find files and shared content across the platform with a robust global search feature.",
      "Sorting Options: Organize files efficiently by sorting them by date, name, or size, making file management a breeze.",
      "Modern Responsive Design: A fresh and minimalist UI that emphasizes usability, ensuring a clean aesthetic across all devices.",
      "And many more, including the latest React 19, Next.js 15 and Appwrite features alongside code architecture and reusability.",
    ],
    tags: ["React","Next.js","TypeScript","ShadCN", "Appwrite", "TailwindCSS"],
    github: "https://github.com/pavish83/store-it/",
    demo: "https://store-app-pv.vercel.app/",
    image: "/screenshots/store-app.png",
  },
  {
    id: 1,
    nameKey: "Search movies application",
    descriptionKey: "Built with React.js for the user interface, Appwrite for backend services, and styled with TailwindCSS, this Movie App lets users browse trending movies, search titles, and explore content using the TMDB API. It features a responsive layout and a sleek, modern design.",
    featuresKeys: [
      "Browse All Movies: Explore a wide range of movies available on the platform.",
      "Search Movies: Easily search for specific movies using a search function.",
      "Trending Movies Algorithm: Displays trending movies based on a dynamic algorithm.",
      "Modern UI/UX: A sleek and user-friendly interface designed for a great experience.",
      "Responsiveness: Fully responsive design that works seamlessly across devices."
    ],
    tags: ["React","Appwrite", "TailwindCSS", "TMDB API"],
    github: "https://github.com/pavish83/movie-app",
    demo: "https://movie-search-pv.vercel.app/",
    image: "/screenshots/movies-app.png",
  },
];
export default projects;