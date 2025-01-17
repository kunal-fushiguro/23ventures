import Link from "next/link";

interface ButtonProps {
  text: string;
  onClickUrl: string;
}

const Button = ({ text, onClickUrl }: ButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <Link href={onClickUrl} className="min-w-40">
        <button className="min-w-40 py-3 px-12  rounded-full flex justify-center items-center bg-white text-black font-bold">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
