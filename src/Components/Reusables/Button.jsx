import { UilPhone } from "@iconscout/react-unicons";

function Button({Name}) {
  return (
    <div className="flex justify-center items-center gap-1 bg-[#8774d9] w-fit text-white px-5 py-2 rounded-full  cursor-pointer hover:bg-[#afa3e6]">
      <UilPhone className="w-4" />
      <p>{Name}</p>
    </div>
  );
}

export default Button;
