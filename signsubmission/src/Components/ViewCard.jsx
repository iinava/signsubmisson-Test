import React from 'react'

export default function ViewCard({views}) {
  return (
    <div class="relative flex w-80 flex-col rounded-xl border border-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border border border-white text-white shadow-lg shadow-blue-gray-500/40 bg-">
    <img src={views.signature} alt="" />
    </div>
    <div class="p-6 text-white underline underline-offset-8">
      <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-green-500 antialiased">
       {views.name}
      </h5>
      <p>{views.email}</p>
      <p>{views.phone}</p>
       
    </div>
    <div class="p-6 pt-0">
      
    </div>
  </div>
  )
}
