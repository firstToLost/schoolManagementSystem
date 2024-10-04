import AboutImg from "../assets/images/img-group.png";
import LabImg from "../assets/images/lab-img.png";

const About = () => {
  return (
    <main className="bg-light-bg min-h-screen">
      <section
        id="hero"
        className="scroll-mt-40 bg-babyBlue-bg min-h-screen w-full"
      >
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center md:gap-8 lg:px-28 px-12 max-[380px]:px-4">
          <div data-aos="fade" className="md:w-1/2 pt-4 md:pt-32 mx-auto ">
            <h1 className="text-3xl sm:text-3xl md:text-5xl text-primary  font-extrabold">
              About our school
            </h1>

            <p className="mt-5 mb-8">
              We aim to improve school quality by supporting pupils in line with
              Ethiopian Education and Training Policy. We aim to improve school
              quality by supporting pupils in line with Ethiopian Education and
              Training Policy.
            </p>

            <a href="#details" className="text-secondary text-sm">
              Scroll to see more
            </a>
          </div>

          <div
            data-aos="fade"
            className="mx-auto self-center lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={AboutImg} className="w-full" />
          </div>
        </div>
      </section>

      <section id="details" className="scroll-mt-20  w-full">
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col-reverse md:flex-row justify-center gap-16 py-8 md:py-16 lg:px-12 px-6">
          <div
            data-aos="fade-right"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={LabImg} className="w-full" />
          </div>

          <div data-aos="fade-left" className="md:w-1/2 pt-4 md:pt-16 mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-primary  font-extrabold">
              Goals
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

        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center gap-16 py-8 md:py-16 lg:px-12 px-6">
          <div data-aos="fade-right" className="md:w-1/2 pt-4 md:pt-16 mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-primary  font-extrabold">
              Mission
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
            <img src={LabImg} className="w-full" />
          </div>
        </div>

        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col-reverse md:flex-row justify-center gap-16 py-8 md:py-16 lg:px-12 px-6">
          <div
            data-aos="fade-right"
            className="mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2"
          >
            <img src={LabImg} className="w-full" />
          </div>

          <div data-aos="fade-left" className="md:w-1/2 pt-4 md:pt-16 mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl text-primary  font-extrabold">
              Vission
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
      </section>
    </main>
  );
};

export default About;
