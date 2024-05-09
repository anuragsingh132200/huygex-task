import * as React from "react";

function ArrowButton({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 self-stretch my-auto ml-4 mr-4 aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] md:w-[30px] w-[20px]"
    />
  );
}

function PageIndicator() {
  return (
    <div className="flex gap-5 justify-between self-stretch">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/affea15f0bd878ec7eb4ad491b24cd9251b2493b11e824322d9a27520ae6e811?apiKey=b50d8dc577384bdca9e5737a70660b12&"
        alt="Previous page"
        className="shrink-0 aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[20px] md:w-[60px]"
      />
      <div className="my-auto">01/10</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04a9a5dfcfe47fd64195eaf8fde2df4cee387b71de68c4d98298f882f756ab24?apiKey=b50d8dc577384bdca9e5737a70660b12&"
        alt="Next page"
        className="shrink-0 aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[20px] md:w-[60px]"
      />
    </div>
  );
}

function MyComponent() {
  return (
    <nav className="flex gap-5 justify-between items-center self-center mt-8 ml-4 mr-4 max-w-full text-2xl font-bold text-gray-800 whitespace-nowrap w-[500px] max-md:flex-wrap">
      <ArrowButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/af47569d13cc24353617ada0ddd677ffa2bc8d1a2f8ad810f513efb31284780f?apiKey=b50d8dc577384bdca9e5737a70660b12&" alt="Previous" />
      <PageIndicator />
      <ArrowButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5e3491c74fa4345aeb84d3d8f68934ca64a366332600971612b9b2698d7e2e?apiKey=b50d8dc577384bdca9e5737a70660b12&" alt="Next" />
    </nav>
  );
}
export default MyComponent