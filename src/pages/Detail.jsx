import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Outlet, Link } from "react-router-dom";
import { fetchUser } from "../store/actions/userAction";

export default function Detail() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <h2>Param: {userId}</h2>
      <hr />
      <nav>
        <Link to={`/user/${userId}/profile`}> Profile |</Link>
        <Link to={"history"}> History</Link>
      </nav>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Outlet />
    </div>
  );
}
