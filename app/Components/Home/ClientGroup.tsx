import Image from "next/image";

import React from "react";

interface ClientProps {
  src: string;
  width: number;
}

const Client: React.FC<ClientProps> = ({ src, width }) => {
  return (
    <div className="bg-white px-12 py-4 flex justify-center items-center w-[200px] rounded-xl hover:drop-shadow-md hover:scale-105">
      <Image src={src} alt="Client Image" width={width} height={10} />
    </div>
  );
};

const ClientGroup = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div className="section-container flex justify-center items-center flex-col gap-4">
        <h2 className="text-colorBlack font-bold text-4xl">Dipercaya Oleh</h2>
        <p className="px-5 py-1 bg-colorSecondary font-semibold text-white rounded-full">
          Beberapa Klien yang menggunakan Layanan Kami
        </p>
        <div className="flex flex-row gap-4">
          <Client src="/img/client/asiapest.png" width={150} />
          <Client src="/img/client/bank-dki.png" width={150} />
          <Client src="/img/client/djp.png" width={100} />
          <Client src="/img/client/fastmed.png" width={60} />
          <Client src="/img/client/hastek.jpg" width={200} />
        </div>
        <div className="flex flex-row gap-4">
          <Client src="/img/client/mediaoptima.jpg" width={80} />
          <Client src="/img/client/primed.png" width={100} />
          <Client src="/img/client/pringastula.png" width={55} />
          <Client src="/img/client/value-star.png" width={150} />
        </div>
      </div>
    </div>
  );
};

export default ClientGroup;
