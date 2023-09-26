type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  color?: string;
  activeColor?: string;
  transpartent?: boolean;
};

export default function Button({
  children,
  href,
  color = "12486B",
  activeColor = "12486B",
  transpartent,
}: ButtonProps) {
  return (
    <div>
      {transpartent ? (
        <a
          className="font-bold inline-block rounded hover:border hover:border-[#12486B] px-4 py-3 text-sm text-[#12486B] hover:bg-[#12486B] hover:text-white focus:outline-none focus:ring active:bg-[#419197]"
          href={href}
        >
          {children}
        </a>
      ) : (
        <a
          className="inline-block rounded border border-[#12486B] bg-[#12486B] px-12 py-3 text-sm font-bold text-white hover:bg-transparent hover:text-[#12486B] focus:outline-none focus:ring active:text-[#419197]"
          href={href}
        >
          {children}
        </a>
      )}
    </div>
  );
}
