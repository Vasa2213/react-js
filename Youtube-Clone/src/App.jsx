import React from "react";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Pagecontent from "./components/Pagecontent";
const App = () => {
const youtubeGenres = [
  { id: 1, genre: "Technology" },
  { id: 2, genre: "Gaming" },
  { id: 3, genre: "Education" },
  { id: 4, genre: "Music" },
  { id: 5, genre: "Travel" },
  { id: 6, genre: "Comedy" },
  { id: 7, genre: "Sports" },
  { id: 8, genre: "Food & Cooking" },
  { id: 9, genre: "Movies & Trailers" },
  { id: 10, genre: "News" },
  { id: 11, genre: "Podcasts" },
  { id: 12, genre: "Science" },
  { id: 13, genre: "Finance" },
  { id: 14, genre: "Business" },
  { id: 15, genre: "Fashion" },
  { id: 16, genre: "Beauty" },
  { id: 17, genre: "Health & Fitness" },
  { id: 18, genre: "Motivation" },
  { id: 19, genre: "DIY & Crafts" },
  { id: 20, genre: "Animation" },
  { id: 21, genre: "Cars & Bikes" },
  { id: 22, genre: "Pets & Animals" },
  { id: 23, genre: "Photography" },
  { id: 24, genre: "Programming" },
  { id: 25, genre: "Artificial Intelligence" },
  { id: 26, genre: "Documentaries" },
  { id: 27, genre: "Vlogs" },
  { id: 28, genre: "History" },
  { id: 29, genre: "Cricket" },
  { id: 30, genre: "Live Streams" }
];
const videos = [
  {
    id: 1,
    videoTime: "12:45",
    videoTitle: "React JS Full Course for Beginners",
    channelName: "Code Academy",
    views: "1.2M views",
    uploadedTime: "8 months ago",
    thumbnail:"https://images.unsplash.com/photo-1728128527225-e4cc69fc5d21?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profile:"https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    videoTime: "8:32",
    videoTitle: "Build a YouTube Clone with React & Tailwind",
    channelName: "Sheriyans Coding School",
    views: "850K views",
    uploadedTime: "3 months ago",
    thumbnail:"https://images.unsplash.com/photo-1647696038157-649df6d4d7f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbnNjYXBlJTIwYXJ0fGVufDB8fDB8fHww",
    profile:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    videoTime: "15:18",
    videoTitle: "JavaScript Interview Questions and Answers",
    channelName: "Tech Simplified",
   views: "2.1M views",
    uploadedTime: "1 year ago",
    thumbnail:"https://plus.unsplash.com/premium_vector-1719419318551-d4e6af72c1a7?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profile:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  },
  { id: 4,
    videoTime: "15:18",
    videoTitle: "JavaScript Interview Questions and Answers",
    channelName: "Tech Simplified",
   views: "2.1M views",
    uploadedTime: "1 year ago",
    thumbnail:"https://plus.unsplash.com/premium_vector-1719419318551-d4e6af72c1a7?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profile:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  }
];
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Pagecontent geners={youtubeGenres} content={videos}/>
    </div>
  );
};

export default App;
