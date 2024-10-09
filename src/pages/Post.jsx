import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { increment, incrementWithThunk } from "../store/actions/counterAction";

function Post() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(incrementWithThunk(10));
  };

  return (
    <div>
      <Navbar />
      <h1>Post</h1>
      <p>Counter: {counter}</p>
      <button onClick={inc}>Inc</button>
    </div>
  );
}

export default Post;
