import { Link } from "react-router-dom";
import { getUsers } from "../../../api";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
// import Loading from "../../atom/Loading/Loading";
import { FcAlarmClock } from "react-icons/fc";

const SearchSchema = Yup.object().shape({
  user: Yup.string().required("Required"),
});

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    console.log(users);
  }, [users]);

  const searchUser = ({ user }) => {
    let filtered = users.filter((u) => user == u.name);
    setSearchResult(filtered);
    // return filtered
  };

  return (
    <>
      {loading ? (
        // <Loading />
        <FcAlarmClock />
      ) : (
        <>
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

          <h1>Welcome to my Home Page 🏠</h1>

          <Formik
            initialValues={{
              user: "",
            }}
            validationSchema={SearchSchema}
            onSubmit={(values) => {
              searchUser(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <label htmlFor="user">First Name</label>
                  <Field id="user" name="user" placeholder="Jane" />
                  {errors.user && touched.user ? (
                    <div>{errors.user}</div>
                  ) : null}
                </div>

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>

          {searchResult.map((u) => (
            <p className="mt-3" key={u.id}>{JSON.stringify(u)}</p>
          ))}
        </>
      )}
    </>
  );
};

export default Home;
