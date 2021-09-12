import Logo from "./Logo";
import Link from 'next/link'

export const Header = () => {
  return (
    <nav className="w-full z-30 text-white py-4 bg-logo select-none">
      <div className="flex flex-row mx-auto items-center px-2">
        <Link href="/">
          <a className="inline-block flex flex-row">
            <Logo fill="white" width="5em" height="auto" />
            <h1 className="text-4xl font-bold ml-6 font-header">Bus to Show</h1>
          </a>
        </Link>
      </div>
    </nav>
  );
};
