import Link from "next/link";

export default function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="bg-gray-800 text-white! px-7! py-4! mt-20! text-xl rounded-3xl font-bold shadow-lg hover:bg-gray-700 w-fit transition-colors"
    >
      Back to Home
    </Link>
  );
}
