import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios(API);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users Page</h1>
      {users.map((elem) => (
        <Link to={`/users/${elem.id}`} key={elem.id}>
          <li>{elem.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Users;
