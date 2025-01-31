'use client';

import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
import HeroPage from '@/app/component/heropage/page';
import TestimonialsPage from '@/app/component/testimonials/page';

export default function Dashboard() {
  return (   
<>
<img
      className="h-96 w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />

{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  <div>01</div>
  <div>09</div>
</div> */}

<HeroPage/>
<TestimonialsPage/>

{/* <h1>hello</h1> */}

</>
  );
}
