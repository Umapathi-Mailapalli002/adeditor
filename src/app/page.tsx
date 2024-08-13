"use client"
import { Banner1, Banner2, Loader } from "@/app/components/index";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./features/bannerSlice";
export default function Home() {

  const dispatch = useDispatch()
const state = useSelector((state:any) => state.banner);
useEffect(() =>{
    const fetchData =  async() => {
      const res = await fetch('/api/updatedJSON');
      const json = await res.json();
      setTimeout(() => {
        dispatch(setData(json));
      }, 2000);
    };

    fetchData();
},[ dispatch]);

if (state.isLoading) {
  return <Loader/>
}


  const handleEdit = () => { }
  return (
    <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:mx-44">
        {state.data.banners.map((banner: any) => (
          <div className="flex justify-center" key={banner.id}>
            {banner.id % 2 == 0 ? (
              <Banner2
              id={banner.id}
                image={banner.image}
                bannerTemplate={banner.template}
                title={banner.title}
                description={banner.description}
                CTA={banner.cta}
                 />) :
              (<Banner1
                title={banner.title}
                bannerTemplate={banner.template}
                image={banner.image}
                description={banner.description}
                CTA={banner.cta}
                id={banner.id} />)}
          </div>
        ))}
      </div>
    </div>

  );
}
