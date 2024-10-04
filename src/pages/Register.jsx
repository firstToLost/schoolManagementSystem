import { IoMdArrowBack } from "react-icons/io";
import MultiStepForm from "../components/MultiStepForm";
import useFormContext from "../hooks/useFormContext";

const Register = () => {
  const {
    page,
    setPage,
    title,
    subTitle,
    disableNext,
    disablePrev,
    handleSubmit,
  } = useFormContext();

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => prev - 1);

  return (
    <main>
      <section
        id="hero"
        className="scroll-mt-40 pb-4 bg-babyBlue-bg sm:bg-light-bg min-h-screen px-4 w-full flex items-center"
      >
        <div className="text-left bg-babyBlue-bg lg:container xl:max-w-[1122px] mx-auto pb-4 max-sm:min-h-[30rem] md:h-[30rem] rounded-3xl md:rounded-[5rem] flex flex-col  justify-center gap- md:gap-4 lg:px-28 sm:px-6 sm:max-[380px]:px-4">
          <div className="sm:pt-10 flex justify-center items-center relative">
            <div
              className={`${
                disablePrev && "hidden"
              } rounded-full p-2 hover:bg-black hover:bg-opacity-5 active:bg-opacity-10 cursor-pointer absolute left-0`}
              onClick={handlePrevPage}
            >
              <IoMdArrowBack size="1.5em" color="#36454f " />
            </div>

            <nav className="flex gap-4">
              <div
                className={`rounded-full bg-primary ${
                  page === 0 ? "bg-opacity-50" : "bg-opacity-80"
                } w-3 h-3`}
              ></div>
              <div
                className={`rounded-full bg-primary ${
                  page === 1 ? "bg-opacity-50" : "bg-opacity-80"
                } w-3 h-3`}
              ></div>
              <div
                className={`rounded-full bg-primary ${
                  page === 2 ? "bg-opacity-50" : "bg-opacity-80"
                } w-3 h-3`}
              ></div>
              <div
                className={`rounded-full bg-primary ${
                  page === 3 ? "bg-opacity-50" : "bg-opacity-80"
                } w-3 h-3`}
              ></div>
            </nav>
          </div>

          <div className="flex-1 gap-2 md:gap-16 flex flex-col sm:flex-row justify-center max-sm:px-6 max-sm:max-[380px]:px-4">
            <div className=" sm:w-1/2 pt-14 text-primary">
              <h1 className="font-bold text-[2rem] md:text-4xl max-w-[13ch]">
                {title[page]}
              </h1>

              <p className="pt-4 max-w-72">{subTitle[page]}</p>
            </div>

            <div className="pt-8 sm:w-1/2 flex flex-col ">
              <MultiStepForm />

              <div className="flex w-full justify-end">
                <button
                  className={`${
                    title.length - 1 === page && "hidden"
                  } btn-primary text-sm disabled:opacity-40`}
                  onClick={handleNextPage}
                  disabled={!disableNext}
                >
                  Next
                </button>

                <button
                  className={`${
                    title.length - 1 === page ? "block" : "hidden"
                  }  btn-primary text-sm disabled:opacity-40`}
                  onClick={handleSubmit}
                  disabled={!disableNext}
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
