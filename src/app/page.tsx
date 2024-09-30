import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white rounded-xl">
        <div className="container p-3 shadow-lg py-32">
          <div className="grid grid-row justify-center gap-5">
            <p className="text-3xl">คุณมีบัญชีแล้วหรือยัง?</p>
            <div className="grid grid-cols-2 gap-4">
              <Link href={"/login"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                เข้าสู่ระบบ
              </Link>
              <Link href={"/register"} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                สมัครสมาชิก
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
