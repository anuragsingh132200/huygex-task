import * as React from "react";

function NavItem({ children }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="px-3 pb-3.5">{children}</div>
    </div>
  );
}

function ActiveNavItem({ children }) {
  return (
    <div className="flex flex-col justify-center font-bold text-blue-950">
      <div className="px-3 pb-3.5">{children}</div>
    </div>
  );
}

export default function MyComponent() {
  const navItems = ["Quiz", "Test", "Game", "Others"];

  return (
    <nav className="flex gap-5 justify-center self-center mt-8 text-md font-medium whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:mt-10">
      <ActiveNavItem>Study</ActiveNavItem>
      {navItems.map((item) => (
        <NavItem  className="hover:text-blue-950" key={item}>{item}</NavItem>
      ))}
    </nav>
  );
}