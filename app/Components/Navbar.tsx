import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-base font-medium flex gap-4 bg-white justify-center items-center h-[8vh]">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/">Projects</Link>
      <Link href="/">Services</Link>
      <Link href="/">Client</Link>
      <Link href="/">Contact</Link>
    </nav>
  );
};

export default Navbar;
