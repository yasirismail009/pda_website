import Image from "next/image";
import Users from "../../Assets/users.svg";
import Star from "../../Assets/star.svg";
export default function BasicCard(props) {
  const data = props.data;
  return (
    <div className="lg:h-64 flex flex-col items-center justify-center lg:p-8 sm:p-2 p-2 shadow-2xl lg:m-8 sm:m-2 m-2">
      <Image src={Users} alt="users" />
      <div className="flex flex-row items-center justify-center lg:mb-0 sm:mb-2 mb-2">
        <Image
          src={Star}
          alt="rating star"
          className="lg:m-2 sm:m-1 m-1"
          width={25}
        />
        <Image
          src={Star}
          alt="rating star"
          className="lg:m-2 sm:m-1 m-1"
          width={25}
        />
        <Image
          src={Star}
          alt="rating star"
          className="lg:m-2 sm:m-1 m-1"
          width={25}
        />
        <Image
          src={Star}
          alt="rating star"
          className="lg:m-2 sm:m-1 m-1"
          width={25}
        />
        <Image
          src={Star}
          alt="rating star"
          className="lg:m-2 sm:m-1 m-1"
          width={25}
        />
      </div>
      <div className="flex justify-start items-start">
        <p className="text-primary-dark lg:text-sm sm:text-xs text-xs font-medium ml-2">
          {data}
        </p>
      </div>
    </div>
  );
}
