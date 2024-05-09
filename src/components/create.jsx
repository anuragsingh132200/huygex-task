import * as React from "react";

function PublisherInfo({ publisherLogo, publisherName }) {
  return (
    <div className="hidden sm:flex gap-5 justify-between ml-16 text-xs font-bold text-zinc-500">
      <img loading="lazy" src={publisherLogo} alt={`${publisherName} logo`} className="shrink-0 aspect-square w-[81px]" />
      <div className="flex flex-col justify-center self-start">
        <div>Published by</div>
        <img loading="lazy" src={publisherName} alt={`${publisherName} name`} className="self-center mt-3 aspect-[3.33] w-[115px]" />
      </div>
    </div>
  );
}

function CreateFlashcardButton({ icon }) {
  return (
    <div className="flex gap-2 sm:mr-16 ml-16  my-auto text-xl font-semibold">
      <img loading="lazy" src={icon} alt="Create flashcard icon" className="shrink-0 aspect-square w-[40px]" />
      <div className="my-auto bg-clip-text">Create Flashcard</div>
    </div>
  );
}

function MyComponent() {
  const publisherData = {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/16c84e17a4fe7033c7966affcb6864ea85c60ae432d8011fba5ea6483d3f617f?apiKey=b50d8dc577384bdca9e5737a70660b12&",
    name: "https://cdn.builder.io/api/v1/image/assets/TEMP/f41939828555f9d73fd6b5cb5945e93df923788f66e0fb3ec09d936d6aac7520?apiKey=b50d8dc577384bdca9e5737a70660b12&",
  };

  const createFlashcardIcon = "https://cdn.builder.io/api/v1/image/assets/TEMP/22a9fe7118550e920d6cd03b2918500bf5e065b43c6df7d944f937d035d58cc5?apiKey=b50d8dc577384bdca9e5737a70660b12&";

  return (
    <div className="flex sm:gap-5 justify-between px-0.5 mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <PublisherInfo publisherLogo={publisherData.logo} publisherName={publisherData.name} />
      <CreateFlashcardButton icon={createFlashcardIcon} />
    </div>
  );
}
export default MyComponent