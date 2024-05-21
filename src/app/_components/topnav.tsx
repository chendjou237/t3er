import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

export default function TopNav(){
   return (
     <nav className="flex items-center justify-between w-full p-4 border-b text-xl font-semibold">
       <div>Gallery</div>
       <SignedIn >
         <UserButton />
       </SignedIn>
       <SignedOut>
       <SignInButton />
       </SignedOut>
     </nav>
   )
 }
 