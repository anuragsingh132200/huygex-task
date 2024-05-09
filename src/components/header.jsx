import * as React from "react";

function NavItem({ children }) {
  return <div>{children}</div>;
}

export default function MyComponent() {
  const navItems = ["Home", "Flashcard", "Contact","FAQ"];

  return (
    <div className="mt-4 sm:ml-20 sm:mr-20 m-4">
      <header className="flex gap-5 justify-between px-0.5 w-full text-lg whitespace-nowrap text-neutral-700 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a17c8e7a3cccc25059974149e64cf6e25e817c97ceca9831b7c26698f44f4779?apiKey=b50d8dc577384bdca9e5737a70660b12&"
          alt="Company logo"
          className="shrink-0 my-auto max-w-full aspect-[5] sm:w-[150px] w-[100px]"
        />
        <nav className="flex gap-5 justify-between items-center max-md:flex-wrap">
          <div className=" gap-5 hidden md:flex justify-between self-stretch my-auto">
            {navItems.map((item, index) => (
              <NavItem key={index}>{item}</NavItem>
            ))}
          </div>
          <div className="justify-center self-stretch px-10 py-3.5 font-medium text-white bg-[#06286E] rounded-[32px] max-md:px-5">
            Login
          </div>
        </nav>
      </header>
    </div>
  );
}
