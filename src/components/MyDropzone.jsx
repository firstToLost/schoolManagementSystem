import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function MyDropzone({ setter, state }) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // setter(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className="w-full h-full flex flex-col justify-center border border-dashed border-[#e4e4e7] shadow-2xl rounded-md items-center px-4"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-xl">Drop the files here ...</p>
      ) : (
        <>
          <span className="text-7xl">
            <AiOutlineCloudUpload />
          </span>
          <p className="text-xl">
            Drag {"'n'"} drop some files here, or click to select files
          </p>
          <span className="my-2.5 font-medium">or</span>
          <button className="shadow-xl cursor-pointer text-xl py-3 px-6 bg-white rounded-md text-black font-semibold">
            Select File
          </button>
        </>
      )}
    </div>
  );
}
