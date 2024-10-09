import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to={"/"}> Home | </Link>
        <Link to={"/user"}> User |</Link>
        <Link to={"/post"}> Post </Link> |
        <Link to={"/transaction"}> Transaction </Link>
      </nav>

      <hr />
    </>
  );
}
