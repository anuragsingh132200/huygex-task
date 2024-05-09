import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="flex gap-5 justify-center px-6 py-4 mt-6 max-w-full text-base font-semibold leading-7 rounded-xl border border-blue-600 border-solid text-zinc-800 md:mr-16 md:ml-16 mr-4 ml-4  max-md:flex-wrap max-md:px-5 max-md:mt-10">
      <p className="flex-auto my-auto">
        {props.content}
      </p>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d1dbfbefa0e872a41ec093030280941582c1c5ac671c6f897ff83d21967471?apiKey=b50d8dc577384bdca9e5737a70660b12&"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
    </div>
  );
}