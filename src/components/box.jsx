import * as React from "react";

function MyComponent(props) {
  return (
    <div classNme="">
      <main className="flex bg-gradient-to-tr from-blue-500 to-indigo-600 flex-col self-center px-9 pt-9 pb-20 mt-8 max-w-[90vw] rounded-[42.507px] w-[712px] max-md:px-5">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42dd811246ada8ad7dd314bd6d1c656084ba72904a5d77b2fc12b64ff0183611?apiKey=b50d8dc577384bdca9e5737a70660b12&"
            alt=""
            className="shrink-0 aspect-square w-[34px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd8308b5b18627e386fca32bc335ce479745731082dcee76b5dacbc964de52a6?apiKey=b50d8dc577384bdca9e5737a70660b12&"
            alt=""
            className="shrink-0 aspect-square w-[34px]"
          />
        </div>
        <h1 className="self-center mt-28 mb-16 md:text-4xl sm:text-xl text-md font-bold tracking-wider text-center text-white max-md:my-10">
          {props.exp}
        </h1>
      </main>
    </div>
  );
}

export default MyComponent;
