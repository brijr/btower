import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/solid";


export default function Back() {
  return (
    <div>
      <Link className="flex gap-1 items-center transition-all hover:opacity-50" href="/">
        <div className="w-4 h-4">
          <ArrowLeftIcon />
        </div>
        <p className="my-4">Home</p>
      </Link>
    </div>
  );
}