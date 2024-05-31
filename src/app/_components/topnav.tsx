
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import SimpleUploadButton from "./simple-upload-button";

export default function TopNav(){
   return (
     <nav className="flex items-center justify-between w-full p-4 border-b text-xl font-semibold">
       <div>Gallery</div>
       <div className="flex flex-row justify-center gap-4 items-center" >
       <SignedIn >
         <div >
         <SimpleUploadButton />
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
 