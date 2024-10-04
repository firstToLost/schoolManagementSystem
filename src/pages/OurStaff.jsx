import StaffCard from "../components/StaffCard.jsx";

const OurStaff = () => {
  return (
    <main className="min-h-screen">
      <section
        id="hero"
        className="scroll-mt-30 min-h-screen lg:px-24 px-6"
        data-aos="fade"
      >
        <div className="w-full lg:container pt-4 text-left">
          <h1 className="font-bold text-3xl text-primary">Meet The Team</h1>
        </div>

        <section id="admins" className="py-8">
          <h2 className="font-bold text-2xl text-slate-500">Admins</h2>
          <div className="flex mt-4 gap-4 md:gap-8 lg:gap-20 flex-wrap">
            <StaffCard />

            <StaffCard />

            <StaffCard />
          </div>
        </section>

        <section id="staff" className="py-8">
          <h2 className="font-bold text-2xl text-slate-500">Our Staff</h2>
          <div className="flex mt-4 gap-4 md:gap-8 lg:gap-20 flex-wrap">
            <StaffCard />

            <StaffCard />

            <StaffCard />
          </div>
        </section>
      </section>
    </main>
  );
};

export default OurStaff;
