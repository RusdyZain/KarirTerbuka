import Image from "next/image"

const GuideSection = () => {
  return (
    <section className=" pt-80 pl-[102px]  pr-[106px]">
    <div>
      <h2 className="text-5xl text-center font-lato font-medium">
        Bagaimana membantu anda?
      </h2>
      <div className="flex pt-12 px-5">
        <div className="border-4 border-gray-400 rounded-lgo px-[18px] py-8 rounded-lg shadow-xl">
          <Image
            src="/softwarecodepana.png"
            alt="ellipse"
            width={313}
            height={211}
            className="mx-auto"
          />

          <h3 className="text-2xl font-lato text-center font-semibold ">
            Daftarkan Diri Anda dan Temukan Pekerjaan
          </h3>
          <p className=" text-lg pt-[30px]">
            Langkah pertama adalah dengan membuat akun di KarirTerbuka.
            Setelah itu, Anda dapat mencari informasi tentang lowongan
            pekerjaan yang sesuai dengan minat dan keterampilan Anda, dan
            bergabung dengan komunitas yang relevan di platform ini.
          </p>
        </div>
        <Image
          src="/arrow.svg"
          alt="ellipse"
          width={67}
          height={211}
          className="mx-auto px-1"
        />
        <div className="border-4 border-gray-400 rounded-lgo px-[18px] py-8 rounded-lg shadow-xl">
          <Image
            src="/softwarecodepana.png"
            alt="ellipse"
            width={313}
            height={211}
            className="mx-auto"
          />
          <h3 className="text-2xl font-lato text-center font-semibold">
            Daftarkan Diri Anda dan Temukan Pekerjaan
          </h3>
          <p className=" text-lg pt-[30px]">
            Langkah pertama adalah dengan membuat akun di KarirTerbuka.
            Setelah itu, Anda dapat mencari informasi tentang lowongan
            pekerjaan yang sesuai dengan minat dan keterampilan Anda, dan
            bergabung dengan komunitas yang relevan di platform ini.
          </p>
        </div>
        <Image
          src="/arrow.svg"
          alt="ellipse"
          width={67}
          height={211}
          className="mx-auto px-1"
        />
        <div className="border-4 border-gray-400 rounded-lgo px-[18px] py-8 rounded-lg shadow-xl">
          <Image
            src="/softwarecodepana.png"
            alt="ellipse"
            width={313}
            height={211}
            className="mx-auto"
          />
          <h3 className="text-2xl font-lato text-center  font-semibold">
            Daftarkan Diri Anda dan Temukan Pekerjaan
          </h3>
          <p className=" text-lg pt-[30px]">
            Langkah pertama adalah dengan membuat akun di KarirTerbuka.
            Setelah itu, Anda dapat mencari informasi tentang lowongan
            pekerjaan yang sesuai dengan minat dan keterampilan Anda, dan
            bergabung dengan komunitas yang relevan di platform ini.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GuideSection