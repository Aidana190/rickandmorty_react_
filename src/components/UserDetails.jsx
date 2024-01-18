import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../helpers/const";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const getUser = async () => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, [id]);
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.image} alt="" />
    </div>
  );
};

export default UserDetails;
