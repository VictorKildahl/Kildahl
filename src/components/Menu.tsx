export default function Menu() {
  return (
    <div className="flex justify-between gap-5 font-bold">
      <a
        className="transition duration-300 ease-in-out hover:text-[#12486B] hover:cursor-pointer text-xl text-white"
        onClick={() => console.log("Scroll to Home")}
      >
        Home
      </a>
      <a
        className="transition duration-300 ease-in-out hover:text-[#12486B] hover:cursor-pointer text-xl text-white"
        onClick={() => console.log("Scroll to About")}
      >
        About
      </a>
      <a
        className="transition duration-300 ease-in-out hover:text-[#12486B] hover:cursor-pointer text-xl text-white"
        onClick={() => console.log("Scroll to Portfolio")}
      >
        Portfolio
      </a>
      <a
        className="transition duration-300 ease-in-out hover:text-[#12486B] hover:cursor-pointer text-xl text-white"
        onClick={() => console.log("Scroll to Contact")}
      >
        Contact
      </a>
    </div>
  );
}
