import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Page not found</h1>
        <p className="text-center mt-2">
          <Link to="/">Check out the homepage</Link>
        </p>
      </div>
    </main>
  );
};

export default NotFound;
