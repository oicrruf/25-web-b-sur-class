import axios from "axios";

const getUsers = async () => {
  let users = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      return response
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    return users
};

export { getUsers };
