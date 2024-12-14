import MyDropzone from "../../MyDropzone";
import { Formik, Form, Field } from "formik";
import Modal from "../../Modal";
import { useState } from "react";

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const initialValues = {
    title: "",
    description: "",
    to: "",
  };
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div className="p-3 h-main">
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Create Event
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values }) => (
            <Form className="max-sm:w-screen h-max p-4">
              <div className="flex max-sm:flex-col rounded-md  sm:w-[600px] p-4 justify-between gap-3 bg-babyBlue-bg">
                <fieldset className="sm:w-1/2 ">
                  <div className="my-2">
                    <label className="input-label" htmlFor="title" name="title">
                      Title
                    </label>
                    <Field
                      className="input w-full"
                      type="text"
                      id="title"
                      name="title"
                    />
                  </div>
                  <div className="my-2">
                    <label className="input-label" htmlFor="description">
                      Description
                    </label>
                    <Field
                      className="input w-full"
                      type="text"
                      id="description"
                      name="description"
                      as="textarea"
                    />
                  </div>
                  <div className="my-2">
                    <label className="input-label" htmlFor="upload-type">
                      To
                    </label>
                    <Field
                      type="text"
                      id="upload-type"
                      className="input w-full"
                      name="to"
                      as="select"
                    >
                      <option value="assignment">Assignment</option>
                      <option value="work-sheets">Work sheets</option>
                      <option value="Handouts">Handouts</option>
                      <option value="books">Books</option>
                      <option value="notes">Notes</option>
                    </Field>
                  </div>

                  <button type="submit" className="btn-primary">
                    Submit
                  </button>
                </fieldset>
                <fieldset className="sm:w-1/2">
                  <MyDropzone />
                </fieldset>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="rounded-md w-full sm:w-1/2 border border-[#e4e4e7] shadow px-8 pt-2 pb-8 my-3">
          <table className="border-collapse w-full text-left text-sm">
            <caption className="py-2">
              <p className="text-2xl font-bold text-left text-primary">
                Events
              </p>
            </caption>
            <thead>
              <tr className="after:bg-gray-400 after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[2px] relative">
                <th>
                  <span className="px-2 block">Event</span>
                </th>
                <th>
                  <span className="px-2 block">Status</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="after:bg-gray-400 after:content-[''] after:w-full after:absolute after:left-0 after:bottom-0 after:h-[1px] relative">
                <td>
                  <span className="py-4 font-semibold px-2 block">
                    Parent meeting
                  </span>
                </td>
                <td>
                  <span className="py-4 font-semibold px-2 block">pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-md w-full sm:w-1/2  border border-[#e4e4e7] shadow px-8 p-2 sm:my-3">
          <p className="text-2xl font-bold text-left text-primary my-4">
            Upcoming Events
          </p>
          <div className="">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">Parent Meeting</span>
                <p className="text-xs max-w-[40ch]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  dolorem non error reiciendis eveniet alias possimus minus
                  similique..
                </p>
              </div>
              <time className="text-sm font-semibold" datetime="10/10/2001">
                10/10/2001
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
