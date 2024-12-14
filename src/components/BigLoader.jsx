import { AiOutlineReload } from "react-icons/ai";
export default function BigLoader({ err, retry }) {
  return (
    <div className="flex items-center justify-center w-full h-main">
      {err ? (
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold">{err}</span>
          <button className="btn-primary" onClick={retry}>
            <AiOutlineReload />
          </button>
        </div>
      ) : (
        <div className="big-loader" />
      )}
    </div>
  );
}
