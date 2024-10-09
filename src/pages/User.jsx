import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/userAction";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { users: gusers, isLoading } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  function handleToDetail(id) {
    navigate(`/user/${id}`, {
      state: {
        name: "Udin",
      },
    });
  }

  return (
    <div>
      <Navbar />
      {isLoading ? <p>Loading...</p> : <h2>User</h2>}

      <ul>
        {gusers.map((user) => (
          <li key={user.id} onClick={() => handleToDetail(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
