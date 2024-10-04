import MyDropzone from "./MyDropzone";
export default function DashboardUpload() {
  return (
    <div className="p-3 h-main">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex glass rounded-md h-full p-4 justify-between gap-3"
      >
        <fieldset className="w-1/2">
          <label className="input-label" htmlFor="title">
            Title
          </label>
          <input className="input w-full" type="text" id="title" />
          <label className="input-label" htmlFor="description">
            Description
          </label>
          <input className="input w-full" type="text" id="description" />
          <label className="input-label" htmlFor="upload-type">
            Type
          </label>
          <select type="text" id="upload-type" className="input w-full">
            <option value="assignment">Assignment</option>
            <option value="work-sheets">Work sheets</option>
            <option value="Handouts">Handouts</option>
            <option value="books">Books</option>
            <option value="notes">Notes</option>
          </select>
          <button type="submit" className="btn">
            Submit
          </button>
        </fieldset>
        <fieldset className="w-1/2">
          <MyDropzone />
        </fieldset>
      </form>
    </div>
  );
}
