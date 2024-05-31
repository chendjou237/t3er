import { SignedOut, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";


async function Images(){
 const images = await getMyImages();
  return (<div className="flex flex-wrap gap-4 p-4">
  {[...images,...images,...images].map((image) => (<div key={image.id} className="w-48 flex flex-col  h-48 justify-center">
    <Link href={`/photos/${image.id}`}>
    <Image src={image.url} style={{ objectFit: "contain" }} width={192} height={192}  alt={image.name}   />
    </Link>
    <div>{image.name}</div>
    </div>))}
</div>)
}

export default async function HomePage() {
  
  
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl">Sign in above to see the gallery</div>
      </SignedOut>
      <SignedIn>
      <Images />
      </SignedIn>
    </main>
  );
}
