import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>sorry, the page you are looking was not found</h2>
      <Link to="/"> return to home</Link>
    </div>
  );
}
export default NotFound;
