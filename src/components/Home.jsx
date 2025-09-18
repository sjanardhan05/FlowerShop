import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  const navigateToShopHere=()=>{
    navigate('gallery')
  }
  return (
    <>
      <div className="home_container">
        <div className="home_main">
          <h1><b>
            Welcome to{" "}
            <i>
              Flower<span style={{ color: "hotpink" }}>Shop</span>
            </i>
          </b></h1>
          <p>
            <i>
              Where every plant blooms into flower and fill your life with joy
            </i>
          </p>
          <button onClick={()=>navigateToShopHere()}>Shop Here</button>
        </div>
      </div>
    </>
  );
};

export default Home;
