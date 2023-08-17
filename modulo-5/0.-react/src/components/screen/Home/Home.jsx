import { Link } from "react-router-dom";
import { getUsers } from "../../../api";
import { useEffect, useState } from "react";
// import Loading from "../../atom/Loading/Loading";

import { FcAlarmClock } from "react-icons/fc";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [users]);

  return (
    <>
      {loading ? (
        // <Loading />
        <FcAlarmClock />
      ) : (
        <>
          <div>Welcome to my Home Page 🏠</div>
          <pre>{JSON.stringify(users)}</pre>
          <div>
            <Link to="/login">Go to login</Link>
          </div>
          <div>
            <Link to="/register">Go to register</Link>
          </div>
          <div>
            <Link to="/dashboard">Go to dashboard</Link>
          </div>
          <div>
            <Link to="/register">Go to Sign Up</Link>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
