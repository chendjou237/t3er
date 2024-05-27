import { SignedOut, SignedIn } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


async function Images(){
  const images = await db.query.posts.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });
  return (<div className="flex flex-wrap gap-4">
  {images.map((image) => (<div key={image.id} className="w-48 flex flex-col ">
    <img src={image.url} alt="image" />
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
