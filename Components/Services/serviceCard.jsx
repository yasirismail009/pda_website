import Image from "next/image";
import ReadMore from "../../Assets/read_more.svg";
import Link from "next/link";
import { validateConfig } from "next/dist/server/config-shared";

export default function BasicCard(props) {
  const AndroidData = props.AndroidData;
  return (
    <div className="lg:p-6 sm:p-3 p-3 lg:m-2 flex flex-col justify-center items-center  sm:m-2 m-2 shadow-2xl bg-primary-card text-primary-main hover:bg-primary-text hover:text-primary-dark rounded-2xl">
      <div className="lg:h-52 sm:h-48 h-48 flex flex-col justify-start items-center  ">
        <Image
          src={AndroidData.img}
          alt={AndroidData.title}
          className="mb-2"
          // width={50}
          height={60}
        />
        <p className="lg:text-base sm:text-xs text-xs font-bold mb-5  text-center">
          {AndroidData.title}
        </p>
        <p className=" lg:text-sm sm:text-[10px] text-[10px] font-medium text-center">
          {AndroidData.details}
        </p>
      </div>
      <div>
        <Link href={`/features${AndroidData.url}`}>
          <div className="mt-4 lg:w-40 flex flex-row items-center justify-center cursor-pointer font-bold text-sm lg:px-6 sm:px-4 px-4 py-2 text-primary-main bg-primary-dark hover:bg-primary-card   lg:rounded-xl sm:rounded-md rounded-md shadow-xl">
            <Image src={ReadMore} alt="Read More" />
            <p className="lg:text-sm sm:text-xs text-xs font-semibold lg:ml-4 sm:ml-2 ml-2">
              Read More
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
