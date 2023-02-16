import Featuredinfo from "../components/Featuredinfo";
import Sales from "../components/Sales";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Featuredinfo />
      <Sales />
    </div>
  );
}

export default Home;