export default function DashboardReport() {
  return (
    <form
      className="glass flex border-radius height-1 padding"
      onSubmit={(e) => e.preventDefault()}
    >
      <fieldset style={{ width: "40%" }}>
        <label className="input-label" htmlFor="send-title">
          Title
        </label>
        <input type="text" id="send-title" className="input border-radius" />
        <label className="input-label" htmlFor="send-description">
          Description
        </label>
        <input
          type="text"
          id="send-description"
          className="input border-radius"
        />
        <label htmlFor="to" className="input-label">
          To
        </label>
        <select type="text" className="input border-radius" id="to">
          <option value="student">student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button type="submit" className="btn">
          Submit
        </button>
      </fieldset>
      <fieldset style={{ width: "55%" }} className="lp-file-drop ">
        <label
          htmlFor="lp-file"
          style={{ height: "100%" }}
          className="lp-file-label border-radius block"
        >
          drop your file here
        </label>
        <input id="lp-file" type="file" className="lp-file" hidden />
      </fieldset>
    </form>
  );
}
