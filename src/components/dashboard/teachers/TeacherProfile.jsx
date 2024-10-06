import joker from "/joker.jpg";
import { useState } from "react";
import Modal from "../../Modal";
import { Formik, Form, Field } from "formik";
import GradeDropdown from "../../GradeDropdown";

export default function TeacherProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const examData = [
    {
      label: "First Name:",
      theData: "Ding",
      label2: "Last Name:",
      theData2: "Liren",
    },
    {
      label: "Email:",
      theData: "ding@email.com",
      label2: "Birthday:",
      theData2: "2015-07-10",
    },
    {
      label: "Nationality:",
      theData: "Ethiopia",
      label2: "Religion:",
      theData2: "Catholic",
    },
    {
      label: "Address:",
      theData: "Hosaena/hexo",
      label2: "Address 2:",
      theData2: "N/A",
    },
    {
      label: "City:",
      theData: "hossana",
      label2: "Phone Number:",
      theData2: "+25190787890",
    },
  ];
  return (
    <div className="p-3 flex gap-4">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Formik>
          {({ values }) => (
            <Form className="rounded-md w-[300px] p-4 bg-babyBlue-bg">
              <fieldset>
                <div className="my-2">
                  <label className="input-label" htmlFor="upload-type">
                    Assign To semester
                  </label>
                  <Field
                    type="text"
                    id="upload-type"
                    className="input w-full"
                    name="to"
                    as="select"
                  >
                    <option value="assignment">All</option>
                    <option value="work-sheets">1</option>
                    <option value="Handouts">2</option>
                    <option value="books">3</option>
                    <option value="notes">4</option>
                  </Field>
                </div>
                <div className="my-2">
                  <label className="input-label" htmlFor="upload-type">
                    Assign To Grade
                  </label>
                  <GradeDropdown />
                </div>
                <div className="my-2">
                  <label className="input-label" htmlFor="upload-type">
                    Assign To Section
                  </label>
                  <Field
                    type="text"
                    id="upload-type"
                    className="input w-full"
                    name="to"
                    as="select"
                  >
                    <option value="assignment">All</option>
                    <option value="work-sheets">A</option>
                    <option value="Handouts">B</option>
                    <option value="books">C</option>
                  </Field>
                </div>
                <div className="my-2">
                  <label className="input-label" htmlFor="upload-type">
                    Assign To Subject
                  </label>
                  <Field
                    type="text"
                    id="upload-type"
                    className="input w-full"
                    name="to"
                    as="select"
                  >
                    <option value="assignment">English</option>
                    <option value="work-sheets">Physics</option>
                    <option value="Handouts">Civics</option>
                  </Field>
                </div>

                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </Modal>
      <div className="rounded-md border border-primary shadow self-start">
        <div className="px-2 pt-2">
          <img src={joker} alt="profile picture" width={300} height={300} />
        </div>
        <p className="text-primary px-2 text-lg font-bold">The Joker</p>
        <p className="text-primary px-2 text-sm font-medium">
          ID: 2020-7808-8897-88
        </p>
        <p className="border border-y-primary text-primary px-2 text-sm font-medium">
          Gender: Male
        </p>
        <p className="text-primary px-2 text-sm font-medium">
          Phone Number: +2519070989
        </p>
      </div>
      <div className="flex-1">
        <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4">
          <table className="border-collapse w-full text-left text-sm">
            <caption className="flex justify-between items-center">
              <span className="text-left text-primary font-semibold my-2 text-lg">
                Teacher Information
              </span>

              <button className="btn-primary" onClick={() => setIsOpen(true)}>
                Assign
              </button>
            </caption>
            <tbody>
              {examData.map((exam, index) => (
                <tr
                  key={index}
                  className="after:bg-gray-400 last:after:content-none after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[1px] relative"
                >
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label2}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData2}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-md border border-[#e4e4e7] shadow px-6 py-4 mt-2">
          <table className="border-collapse w-full text-left text-sm">
            <caption className="text-left text-primary font-semibold my-2 text-lg ">
              Parent Information
            </caption>
            <tbody>
              {examData.map((exam, index) => (
                <tr
                  key={index}
                  className="after:bg-gray-400 last:after:content-none after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[1px] relative"
                >
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.label2}
                    </span>
                  </td>
                  <td>
                    <span className="py-2 font-semibold px-2 block">
                      {exam.theData2}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
