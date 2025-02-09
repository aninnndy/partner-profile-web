import Image from "next/image";
import React from "react";
import Link from "next/link";

interface ListProps {
  content: string;
  href: string;
}

const ListComponent: React.FC<ListProps> = ({ content, href }) => {
  return (
    <li className="hover:scale-[1.05] animate">
      <Link
        className="text-colorWhite/0 font-medium bg-gradient-to-r from-colorWhiteDark to-colorWhite bg-clip-text "
        href={href}
      >
        {content}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="w-[100vw] h-[40vh] flex justify-center items-center bg-gradient-to-r from-colorPrimary via-colorPrimaryDark to-colorPrimary mt-32 ">
      <div className="container flex flex-col items-center justify-center gap-12">
        {/* List Wrapper */}
        <div className="w-full flex justify-center items-start gap-32">
          <Image
            src="/img/Birohmatika-Logo-White.png"
            width={250}
            height={100}
            alt="Birohmatika Logo"
          />
          <div className="flex flex-row gap-8">
            <ul className="flex gap-2 flex-col">
              <h4 className="font-semibold text-3xl text-colorWhite/0 bg-gradient-to-r from-colorWhiteDark to-colorWhite bg-clip-text">
                Postingan
              </h4>
              <ListComponent content="Web Applications" href="/" />
              <ListComponent content="Dekstop Applications" href="/" />
              <ListComponent content="Mobile Applications" href="/" />
            </ul>
            <ul className="flex gap-2 flex-col">
              <h4 className="font-semibold text-3xl text-colorWhite/0 bg-gradient-to-r from-colorWhiteDark to-colorWhite bg-clip-text">
                Layanan
              </h4>
              <ListComponent content="Web Applications" href="/" />
              <ListComponent content="Dekstop Applications" href="/" />
              <ListComponent content="Mobile Applications" href="/" />
            </ul>
            <ul className="flex gap-2 flex-col">
              <h4 className="font-semibold text-3xl text-colorWhite/0 bg-gradient-to-r from-colorWhiteDark to-colorWhite bg-clip-text">
                Legal
              </h4>
              <ListComponent content="Kebijakan Privasi" href="/" />
              <ListComponent content="Syarat & Ketentuan" href="/" />
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-3xl text-colorWhite/0 bg-gradient-to-r from-colorWhiteDark to-colorWhite bg-clip-text">
              Get In Touch
            </h2>
            <div className="bg-white flex flex-row justify-center items-center rounded-xl">
              <input
                type="text"
                className="w-full outline-none bg-transparent px-5 py-2"
                placeholder="Email Anda @"
              />
              <button className="bg-colorSecondary hover:bg-colorSecondaryHover px-5 py-2 text-white font-semibold rounded-r-xl flex flex-row justify-center items-center gap-2">
                Subscribe{" "}
                <i className="ri-arrow-right-up-line text-sm border border-white bg-white/10 rounded-full px-1"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Copyright */}

        <hr className="bg-gradient-to-r from-colorWhite via-colorSecondary to-colorWhite w-full h-[3px]" />
        <h2 className="font-semibold text-2xl text-colorWhite/0 bg-clip-text bg-gradient-to-r from-colorGray to-colorWhite">
          Copyright &copy; {new Date().getFullYear()} All Right Reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
