import ChemistryImg from "../assets/images/chemistry-img.jpg";
import InnovationImg from "../assets/images/innovation-img.jpg";
import BiologyImg from "../assets/images/biology-img.jpg";
import ArrowDown from "../assets/arrow-down.svg";

const Clubs = () => {
  return (
    <main>
      <section
        id="hero"
        className="scroll-mt-20 min-h-screen bg-fixed  bg-[url('/images/clubs-hero-img.png')] bg-opacity-60 text-white bg-black bg-blend-darken  bg-cover bg-center"
      >
        <div className="text-center w-full lg:container mx-auto flex justify-center py-4 px-4">
          <div data-aos="fade" className="pt-4 md:pt-24 mx-auto">
            <h1 className="text-4xl sm:text-4xl md:text-4xl font-extrabold sm:font-extrabold">
              Explore Our Clubs
            </h1>

            <p className="mt-5 mb-8 max-w-xl">
              Dive into our awesome clubs and activities where you can have fun,
              make friends and grow!
            </p>
          </div>

          <div className="absolute bottom-16 w-16 h-16 animate-bounce">
            <a href="#details">
              <img src={ArrowDown} />
            </a>
          </div>
        </div>
      </section>

      <section id="details" className="scroll-mt-30 md:py-24 min-h-screen">
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center gap-16 py-8  lg:px-12 px-6">
          <div data-aos="fade-right" className="md:w-1/2 pt-4 md:pt-16 mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-primary  font-extrabold">
              Science Club
            </h2>

            <p className="mt-5 mb-8 max-w-xl">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy. We aim to improve school
              quality by supporting pupils in line with Ethiopian Education and
              Training Policy.
            </p>

            <a href="/about" className="text-secondary text-sm">
              Learn More
            </a>
          </div>

          <div
            data-aos="fade-left"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={ChemistryImg} className="w-full rounded-3xl" />
          </div>
        </div>

        <div className="text-center md:text-left w-full lg:container mx-auto flex mt-16 flex-col-reverse md:flex-row justify-center gap-16 py-8  lg:px-12 px-6">
          <div
            data-aos="fade-right"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={InnovationImg} className="w-full rounded-3xl" />
          </div>

          <div data-aos="fade-left" className="md:w-1/2 pt-4 md:pt-16 mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-primary  font-extrabold">
              Innovation Club
            </h2>

            <p className="mt-5 mb-8 max-w-xl">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy. We aim to improve school
              quality by supporting pupils in line with Ethiopian Education and
              Training Policy.
            </p>

            <a href="/about" className="text-secondary text-sm">
              Learn More
            </a>
          </div>
        </div>

        <div className="text-center md:text-left w-full lg:container mx-auto flex mt-16 flex-col md:flex-row justify-center gap-16 py-8  lg:px-12 px-6">
          <div data-aos="fade-right" className="md:w-1/2 pt-4 md:pt-16 mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-primary  font-extrabold">
              Biology Club
            </h2>

            <p className="mt-5 mb-8 max-w-xl">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy. We aim to improve school
              quality by supporting pupils in line with Ethiopian Education and
              Training Policy.
            </p>

            <a href="/about" className="text-secondary text-sm">
              Learn More
            </a>
          </div>

          <div
            data-aos="fade-left"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={BiologyImg} className="w-full rounded-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clubs;
