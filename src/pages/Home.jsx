import HeroImg from "../assets/images/hero-img.png";
import AboutImg from "../assets/images/about-img.png";
import BooksImg from "../assets/images/books-img.png";
import { NavLink } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const { width } = useWindowSize();

  return (
    <main>
      <section id="hero" className="scroll-mt-20 min-h-screen bg-light-bg">
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center gap-8 py-4 lg:px-28 sm:px-14 px-4">
          <div data-aos="fade" className="pt-4 md:pt-16 mx-auto">
            <h1 className="text-5xl md:text-6xl text-primary max-w-[13ch] font-extrabold sm:font-black">
              Let's start building a new generation
            </h1>

            <p className="mt-5 mb-8">Shaping Tomorrow's Innovators Today</p>

            <div className="flex gap-2 max-md:mx-auto w-fit sm:text-left text-sm">
              <NavLink to="/login">
                <button className="btn-primary font-semibold text-primary">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn-outline font-semibold">Register</button>
              </NavLink>
            </div>
          </div>

          <div
            data-aos="fade"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96"
          >
            <img src={HeroImg} className="w-full" />
          </div>
        </div>
      </section>

      <section id="boxes" className="scroll-mt-20 bg-light-bg py-4">
        <div className="container mx-auto flex-wrap pb-8 lg:p-8 w-full flex justify-center gap-4 lg:gap-16">
          <div
            data-aos={width <= 640 ? "fade-right" : "fade-up"}
            className="rounded max-w-80 sm:max-w-60 py-8 px-6 bg-white shadow-xl hover:shadow-2xl cursor-default"
          >
            <h1 className="text-primary text-3xl font-bold mb-2">Goal</h1>
            <p className="text-sm">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy.
            </p>
          </div>

          <div
            data-aos={width <= 640 ? "fade-left" : "fade-down"}
            className="rounded max-w-80 sm:max-w-60 py-8 px-6 bg-white shadow-xl hover:shadow-2xl cursor-default"
          >
            <h1 className="text-primary text-3xl font-bold mb-2">Mission</h1>
            <p className="text-sm">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy.
            </p>
          </div>

          <div
            data-aos={width <= 640 ? "fade-right" : "fade-up"}
            className="rounded max-w-80 sm:max-w-60 py-8 px-6 bg-white shadow-xl hover:shadow-2xl cursor-default"
          >
            <h1 className="text-primary text-3xl font-bold mb-2">Vision</h1>
            <p className="text-sm">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 bg-babyBlue-bg w-full">
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center gap-8 py-8 md:py-16 lg:px-28 px-6">
          <div
            data-aos="zoom-out"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={AboutImg} className="w-full" />
          </div>

          <div data-aos="fade-left" className="md:w-1/2 pt-4 md:pt-16 mx-auto">
            <h1 className="text-3xl sm:text-3xl md:text-4xl text-primary  font-black">
              About our school
            </h1>

            <p className="mt-5 mb-8">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy. We aim to improve school
              quality by supporting pupils in line with Ethiopian Education and
              Training Policy.
            </p>

            <NavLink to="/about" className="text-secondary text-sm">
              Learn More
            </NavLink>
          </div>
        </div>
      </section>

      <section id="login" className="scroll-mt-20 bg-light-bg w-full">
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center gap-8 py-8 md:py-16 lg:px-28 px-6">
          <form
            data-aos="fade-right"
            className="md:w-1/2"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-primary text-4xl font-semibold ">Login</h1>
            <p className="text-primary font-semibold mt-1 mb-4">
              Ready to Continue? Login Now.
            </p>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border w-full outline-none px-4 py-2 rounded "
              />
              <label htmlFor="email" className="absolute left-[-999999999px]">
                Email
              </label>
            </div>

            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="border mb-4 w-full outline-none px-4 py-2 rounded "
              />
              <label
                htmlFor="password"
                className="absolute left-[-999999999px]"
              >
                Password
              </label>
            </div>

            <div className="text-start mt-4">
              <button className="btn-primary max-md:w-full">Login</button>
            </div>
          </form>

          <div
            data-aos="zoom-out"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={BooksImg} className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
