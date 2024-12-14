export default function ScheduleNew() {
  return (
    <div className="p-3">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="glass rounded-md h-main p-4 justify-between gap-3"
      >
        <div className="my-2">
          <label className="input-label" htmlFor="title">
            Title
          </label>
          <input className="input w-full" type="text" id="title" />
        </div>
        <div className="my-2">
          <label className="input-label" htmlFor="description">
            Description
          </label>
          <textarea className="input w-full" type="text" id="description" />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
