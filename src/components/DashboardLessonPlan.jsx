
import MyDropzone from "./MyDropzone";
export default function DashboardLessonPlan() {
  return (
    <>
      <form
        className="glass flex lesson-plan-form border-radius height-1 margin-inline margin-block"
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

          <button type="submit" className="btn">
            Submit
          </button>
        </fieldset>
        <fieldset style={{ width: "55%" }} className="lp-file-drop ">
          <MyDropzone classN={"height-1"} />
        </fieldset>
      </form>
    </>
  );
}
