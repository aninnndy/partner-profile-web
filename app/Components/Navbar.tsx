"use client";
import Link from "next/link";
import Logo from "../../public/Brand-Logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ListProps {
  content: string;
  href: string;
}

const List: React.FC<ListProps> = ({ content, href }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`hover:text-colorPrimary animate ${
        isActive
          ? "text-colorPrimary underline decoration-colorSecondary underline-offset-4 underline-2"
          : "text-colorBlack"
      }`}
    >
      {content}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="text-base font-medium flex gap-4 bg-white/80 backdrop-blur-sm justify-around items-center h-[10vh] fixed w-full z-20">
      <Image src={Logo} alt="Image Icon" />
      <div className="flex gap-8">
        <List content="Home" href="/" />
        <List content="Projects" href="/projects" />
        <List content="Services" href="/services" />
        <List content="Client" href="/client" />
        <List content="Contact" href="/contact" />
      </div>
    </nav>
  );
};

export default Navbar;
