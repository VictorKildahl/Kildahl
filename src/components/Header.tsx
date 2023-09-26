"use client";
import Icon from "./Icon";
import Menu from "./Menu";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center">
      <Icon />
      <Menu />
    </div>
  );
}
