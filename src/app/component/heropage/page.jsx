'use client';
import { Description } from '@headlessui/react';
import { title } from 'process';
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function HeroPage() {

const data=[
  {
    img:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    title:"Donec lectus leo",
    Description:"Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.",
    btn:"Read more",
  },
  {
    img:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    title:"Donec lectus leo",
    Description:"Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.",
    btn:"Read more",
  },
  {
    img:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    title:"Donec lectus leo",
    Description:"Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.",
    btn:"Read more",
  },
  {
    img:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    title:"Donec lectus leo",
    Description:"Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.",
    btn:"Read more",
  },
  {
    img:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    title:"Donec lectus leo",
    Description:"Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.",
    btn:"Read more",
  },
  {
    img:"https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    title:"Donec lectus leo",
    Description:"Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.",
    btn:"Read more",
  },
]

  return (
  <>
  
<section className='my-5 lg:my-12 '>

<div className='text-center py-6'> 
<h1 className='text-3xl pb-3 '>Donec Lectus Leo</h1>
<p>Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
</div>

<div className='flex flex-wrap px-4 lg:px-24 pt-4'>
        {data.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Card className="w-full shadow-lg rounded-lg"  >
              <CardBody>
                <img
                  src={item.img}
                  alt="card-image"
                  className="w-full h-48 object-cover"
                />
                <Typography variant="h5" color="blue-gray" className="mt-2">
                  {item.title}
                </Typography>
                <Typography className="mt-2">
                  {item.Description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button color="blue" buttonType="link" className='py-3 bg-blue-500 text-white'>
                  {item.btn}
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

</section>
  </>
  )
}
