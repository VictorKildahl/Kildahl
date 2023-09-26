import classNames from "classnames";

type Props = {
  title: string;
  reverse?: boolean;
};

export default function Divider({ title, reverse }: Props) {
  return (
    <div
      className={classNames(
        reverse ? "flex-row-reverse" : "flex-row",
        "flex w-3/5 flex-row items-center justify-center relative py-12"
      )}
    >
      <div
        className={classNames(
          reverse ? "left-[-50px]" : "right-[-50px]",
          "flex justify-center items-center absolute"
        )}
      >
        <div
          className={classNames(
            reverse ? "ml-4" : "mr-4",
            "border-white border-2 w-20 h-6 rounded-full flex justify-center items-center rotate-45 absolute"
          )}
        >
          <div className="border-white border-2 w-20 h-6 rounded-full rotate-90 absolute"></div>
        </div>
      </div>
      <div className="w-full rounded-l-2xl border-[1px] border-dashed border-[#12486B] opacity-60" />
      <h1 className="mx-4 whitespace-nowrap text-[#12486B] text-2xl md:text-4xl font-bold">
        {title}
      </h1>
      <div className="w-full rounded-l-2xl border-[1px] border-dashed border-[#12486B] opacity-60" />
    </div>
  );
}
