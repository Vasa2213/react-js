import Card from "./components/Card";
const App = () => {
  return (
    <div className="parent">
      <Card
        name="Vansh"
        img="https://images.unsplash.com/vector-1745117998273-ecf49e078cd0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        name="Vandan"
        img="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=EYuvsrqyseRozuaThYrcP7XPO49NGmua1ygHNEcUwFk="
      />
    </div>
  );
};

export default App;
