import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white">
      <section className="px-6 py-12 sm:p-24 bg-white container mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap gap-6 md:gap-16 px-4 md:px-0 sm:justify-center">
          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">School Info</li>
            <li className="mb-1">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Our Goals</Link>
            </li>
          </ul>

          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">Location</li>
            <li className="mb-1">
              <Link to="/">Hosanna, Ethiopia</Link>
            </li>
          </ul>

          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">Mobile App</li>
            <li className="mb-1">
              <Link to="/">iOS & Android</Link>
            </li>
          </ul>

          <ul className="text-primary text-sm">
            <li className="font-bold mb-2">Get in Touch</li>
            <li className="mb-1">
              <Link to="/">+251 935 338 211</Link>
            </li>
            <li className="mb-1">
              <Link to="/">Hosaena Ethiopia</Link>
            </li>
            <li className="mb-1">
              <Link to="/">iOS & Android</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="container flex justify-between items-center py-4 px-8">
          <p className="max-sm:text-sm">&copy; copyright 2024</p>

          <div>
            <label htmlFor="lang" className="absolute left-[-999999999px]">
              Languages
            </label>
            <select
              name="languages"
              id="lang"
              className="sm:px-4 sm:py-2 max-sm:text-sm border outline-none rounded"
            >
              <option value="English">English</option>
              <option value="Amharic">Amharic</option>
            </select>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
