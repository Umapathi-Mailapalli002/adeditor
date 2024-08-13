"use client";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import { IconEdit,IconUpload } from '@tabler/icons-react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { setData } from "../features/bannerSlice";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import { useDispatch, useSelector } from "react-redux";

export function EditIconComp({id}:{id:any}) {
  const state = useSelector((state:any) => state.banner.data.banners);
  const dispatch = useDispatch()
  const [editId, setEditId] = useState("")

 
  const [fields, setFields] = useState(state || {
    title: '',
    description: '',
    cta: '',
  });


  

  // handle update it acept the functionalities in the banner
  const handleUpdate = async () => {
    if (editId === null) return;
  
    try {
      const res = await fetch('/api/updatedJSON', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: editId, ...fields }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const updatedData = await res.json();
      console.log(updatedData)
      dispatch(setData(updatedData));
    } catch (error) {
      console.error('Error updating data:', error);
      // Optionally, set an error state or notify the user
    }
  };
  
 const handleInputChange = (e:any) => {
  const { id, value } = e.target;
  setFields((prevFields: any) => ({
    ...prevFields,
    [id]: value,
  }))
 }
  //for download banner
  const downloadImage = () => {
    // const container = document.getElementById("my-container");

    // html2canvas(container, {
    //   scale: 25, // Set scale to 25x for full HD resolution (1920x1080)
    //   useCORS: true // Enable CORS to allow screenshot of external images
    // }).then(canvas => {
    //   canvas.toBlob(blob => saveAs(blob, "download.png"));
    // });
  }

  //to display the data to edit acording to the triggered id
  const handleClick = (e:any) => {
const id = e.currentTarget.id
setEditId(id);
for (let index = 0; index < state.length; index++) {
  const banner = state[index].id;
  if(banner == id){
    setFields(state[banner]);
    }
  
}
//     
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl shadow-input ">
      <Modal>
        <ModalTrigger>
          {/* triiger modal */}
          <IconEdit id={id} onClick={handleClick} className="text-yellow-100" stroke={2} />
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h2 className="text-xl text-left dark:text-neutral-400">
              Edit Banner
            </h2>
            <div className="w-56">
              {/* Banner preview */}

            </div>
            <div className="text-left">
              {/* image upload */}
              <span className="text-gray-400 ">upload Image</span><br />
              <div  onClick={()=> document.querySelector("#imageFile").click()} className="bg-gray-700 cursor-pointer flex items-center mt-3 size-14 rounded-full">
              <IconUpload className="mx-auto size-8 text-gray-400" stroke={3} />
              <input className=" hidden" type="file" name="file" id="imageFile" accept="image/*" />
              </div>
            </div>


            {/* banner form to edit the data */}
            <form className="my-8">
              <div className="text-left">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                  <LabelInputContainer>
                    <Label className="ml-1" htmlFor="title">Title</Label>
                    <Input id="title" placeholder="" onChange={handleInputChange} value={fields.title} type="text" />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                  <Label className="ml-1" htmlFor="description">Description</Label>
                  <textarea id="description" placeholder="" className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400" rows="4" onChange={handleInputChange} value={fields.description}  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label className="ml-1" htmlFor="cta">Button Text</Label>
                  <Input id="cta" placeholder=""  onChange={handleInputChange} value={fields.cta} type="text" />
                </LabelInputContainer>
              </div>


              <button onClick={handleUpdate}
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="button"
              >
                Done
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
            <button onClick={downloadImage}
              className=" relative -mt-9 group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
           
            >
              <span className="text-neutral-700  dark:text-neutral-300 text-sm">
                Download
              </span>
              <BottomGradient />
            </button>
          </ModalContent>

        </ModalBody>

      </Modal>



    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
