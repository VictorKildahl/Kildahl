import Hello from "./Hello";
import Profile from "./Profile";

export default function Home() {
  return (
    <div className="flex lg:justify-around justify-center items-center xl:flex-row flex-col py-48 gap-32">
      <Hello />
      <Profile />
    </div>
  );
}
