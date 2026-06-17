import "remixicon/fonts/remixicon.css";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
const App = () => {
  const user = [
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "",
      tag: "Setisfied",
      color: "blue",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "",
      tag: "Setisfied",
      color: "lightgreen",
    },
    {
      img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "",
      tag: "excellent",
      color: "crimson",
    },
    {
      img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "",
      tag: "unworked",
      color: "orange",
    },
  ];
  return (
    <div>
      <Section1 users={user} />
      <Section2 />
    </div>
  );
};

export default App;
