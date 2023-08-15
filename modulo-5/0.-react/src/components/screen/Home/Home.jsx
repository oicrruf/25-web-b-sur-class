import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Welcome to my Home Page 🏠</div>
      <div>
        <Link to="/login">Go to login</Link>
      </div>
      <div>
        <Link to="/register">Go to register</Link>
      </div>
    </>
  );
};

export default Home;
