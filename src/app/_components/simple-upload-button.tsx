"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadThing";
import { toast } from "sonner"

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      console.log("no file selected")
      return;
    }
    console.log("upload initialize")
    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

function UploadIcon(){
  return <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>

}
function LoadingIndicator(){
  return (<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse className="spinner_rXNP" cx="12" cy="5" rx="4" ry="4"/></svg>)
}
export default function SimpleUploadButton(){
  const router = useRouter();
  const {inputProps} = useUploadThingInputProps("imageUploader", {
    onUploadBegin(){
      toast.info(<div className="flex gap-2 text-white items-end"><LoadingIndicator /><span className="text-lg "> Uploading...</span></div>, 
        {
          duration: 100000,
          id: "upload-begin",
        }
      );
    },
    onClientUploadComplete(){
      toast.dismiss("upload-begin");
      toast.success("Image uploaded successfully!");

      router.refresh();
    }
  });

   return (<div>
    <label htmlFor="upload-button" className="cursor-pointer"><UploadIcon/></label>
      <input id="upload-button" type="file" className="sr-only" {...inputProps}/>
   </div>)
}
