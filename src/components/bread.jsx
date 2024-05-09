import * as React from "react";

function FlashcardIcon() {
  return (
    <>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa79f2a6be98768deb6946ac9a8bde734d9a286b6cb87cdfcb46e0678efec65b?apiKey=b50d8dc577384bdca9e5737a70660b12&"
        className="shrink-0 self-stretch aspect-square w-[20px]"
        alt="Flashcard icon"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=b50d8dc577384bdca9e5737a70660b12&"
        className="shrink-0 self-stretch my-auto w-6 aspect-square"
        alt=""
      />
    </>
  );
}

function MathematicsIcon() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=b50d8dc577384bdca9e5737a70660b12&"
      className="shrink-0 w-6 aspect-square"
      alt="Mathematics icon"
    />
  );
}

function RelationAndFunctionIcon() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=b50d8dc577384bdca9e5737a70660b12&"
      className="shrink-0 w-6 aspect-square"
      alt="Relation and Function icon"
    />
  );
}

function MyComponent() {
  return (
    <div className="flex gap-0 self-start mt-10 ml-8 md:ml-20 text-sm text-center max-md:flex-wrap max-md:mt-10">
      <div className="flex gap-0 items-center font-medium whitespace-nowrap text-zinc-500">
        <FlashcardIcon />
        <div className="self-stretch my-auto">Flashcard</div>
      </div>
      <div className="flex gap-0 my-auto">
        <MathematicsIcon />
        <div className="font-medium text-zinc-500">Mathematics</div>
        <div className="flex gap-0 font-semibold text-blue-950">
          <RelationAndFunctionIcon />
          <div>Relation and Function</div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;