import loading from "/public/Ripple-2.3s-200px.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Image className="w-1/2" src={loading} alt="Loading" />
    </div>
  );
}
