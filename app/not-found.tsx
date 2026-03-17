import Image from "next/image";
import BackToHomeButton from "./components/BackToHomeButton";

export default function NotFound() {
  return (
    <div className="mx-auto w-full items-center h-screen text-center flex flex-col gap-5">
      <Image src="/images/site/404.svg" width={200} height={200} alt="" />
      <h1 className="font-black text-4xl!">Page Not Found</h1>
      <BackToHomeButton />
    </div>
  );
}
