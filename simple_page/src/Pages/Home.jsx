import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This is my homepage.</p>

      <h2>all pages </h2>

      <Link to="/page1">go to Page 1</Link>
      <br />
      <Link to="/page2">go to Page 2</Link>
      <br />
      <Link to="/page3">go to page 3</Link>
    </div>
  );
}

export default Home;