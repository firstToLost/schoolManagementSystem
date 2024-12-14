import joker from "/joker.jpg";
import { useState } from "react";
import ImgModal from "../../ImgModal";
export default function Registrations() {
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const openModal = (e) => {
    setImage(e.target.src);

    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <ImgModal isOpen={isOpen} onClose={closeModal} imageSrc={image} />
      <div className="h-main p-3">
        <div className="glass p-3 overflow-y-scroll h-full">
          <div className="flex justify-between mb-2 items-center gap-4 ps-8">
            <img className="w-[150px] aspect-3/4 object-cover" src={joker} />

            <div className="w-full">
              <p className="font-semibold">General Information</p>
              <p>
                <span className="text-slate-400">Name: </span>John Doe
              </p>
              <p>
                <span className="text-slate-400">Age: </span>27
              </p>
              <p>
                <span className="text-slate-400">Gender: </span>Male
              </p>
              <p>
                <span className="text-slate-400">Grade: </span>12<sup>th</sup>
              </p>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                className="bg-[#0f0] rounded-2xl font-semibold py-2 px-4 cursor-pointer text-sm"
              >
                Approve
              </button>
              <button
                type="button"
                className="bg-[#f00] rounded-2xl font-semibold py-2 px-4 cursor-pointer text-sm"
              >
                Reject
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <span
              className="bg-white text-black px-3 rounded-t-2xl cursor-pointer"
              onClick={() => setToggle(true)}
            >
              General Information
            </span>
            <span
              className="bg-white text-black px-3 rounded-t-2xl cursor-pointer"
              onClick={() => setToggle(false)}
            >
              Guardian Information
            </span>
          </div>

          {toggle ? (
            <div className="border border-solid border-white flex justify-between p-2 items-center">
              <div>
                <p>
                  <span className="text-slate-400">Full Name: </span>John Doe
                  Ahmed
                </p>
                <p>
                  <span className="text-slate-400">Full Name: </span>John Doe
                  Ahmed
                </p>
                <p>
                  <span className="text-slate-400">Full Name: </span>John Doe
                  Ahmed
                </p>
                <p>
                  <span className="text-slate-400">Full Name: </span>John Doe
                  Ahmed
                </p>
              </div>
              <div>
                <p className="font-semibold">Admittance, letter</p>
                <div className="flex gap-3 flex-wrap">
                  <img
                    src={joker}
                    className="w-[200px] aspect-3/4 object-cover"
                  />
                  <img
                    src={joker}
                    className="w-[200px] aspect-3/4 object-cover"
                  />
                  <img
                    src={joker}
                    className="w-[200px] aspect-3/4 object-cover"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-solid border-white p-2">
              <div className="flex justify-between items-center my-2">
                <img
                  src={joker}
                  className="w-[100px] aspect-3/4 object-cover"
                />

                <div>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center my-2">
                <img
                  src={joker}
                  className="w-[100px] aspect-3/4 object-cover cursor-pointer"
                  onClick={(e) => openModal(e)}
                />

                <div>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                  <p>
                    <span className="text-slate-400">Full Name: </span>John Doe
                    Ahmed
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
