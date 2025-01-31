'use client';


import React from 'react';
import { Carousel } from "@material-tailwind/react";
import styles from '@/app/component/testimonials/page.module.css';

export default function Testimonials() {
 const data=[
  {
    imglink:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
       imglink:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    name: "Jane Smith",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    imglink:"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    name: "Alice Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
 ]

  return (
    <>
    <div className="flex justify-center items-center h-screen overflow-hidden bg-slate-400">
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
       
          <div className="absolute   left-2/4 z-50 flex -translate-x-2/4 gap-2 " id={styles.spacebottom}>
            {Array.from({ length }).map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
         
        )}
      >
      {
        data.map((Item, index)=> (
          <div key={index} className="flex flex-col items-center justify-center">
            <img
              src={Item.imglink}
              alt="image"
              className="h-40 w-40 object-cover rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{Item.name}</h2>
            <p className="text-center">{Item.description}</p>
          </div>
        ))}
 
      </Carousel>
    </div>

    
   </>
  );
}
