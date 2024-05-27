'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadThing"

export default function TopNav(){
  const router = useRouter();
   return (
     <nav className="flex items-center justify-between w-full p-4 border-b text-xl font-semibold">
       <div>Gallery</div>
       <div className="flex flex-row justify-center gap-4" >
       <SignedIn >
         <div >
         <UploadButton endpoint="imageUploader" onClientUploadComplete={()=> {
          router.refresh();
         }} /> 
         </div>
         <UserButton />
       </SignedIn>
       <SignedOut>
       <SignInButton />
       </SignedOut>
       </div>
      
     </nav>
   )
 }
 