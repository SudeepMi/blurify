import FileUpload from "@/components/Fileupload";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full grid px-20 py-14 gap-5">
       <div className="col-span-1 px-4 w-[75%] m-auto text-center">
        <h2 className="text-6xl font-bold text-orange-500 tracking-wider">Blurify</h2>
        <p className="mt-2">Blurify is a Next.js application that uses the Face Pixelizer API to <span className="text-3xl font-bold text-orange-500">anonymize faces in images through blurring and pixelization</span> . Easily upload images, and the app will automatically detect and anonymize faces to protect privacy.</p>
      </div>
      <div className="w-[75%] m-auto h-[10vh]">
      <FileUpload />
      </div>
     
    </main>
  );
}
