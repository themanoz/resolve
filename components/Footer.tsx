import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-sm">
      <div className="w-full border-t px-8 py-6 flex justify-between">
        <h1>© 2024 Resolve. All rights reserved.</h1>
        <div className="flex gap-4 underline">
          <Link href={"/terms-service"}> Terms of service </Link>
          <Link href={"/terms-service"}> Privacy </Link>
        </div>
      </div>
    </div>
  );
}