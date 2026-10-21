'use client'
import React, { useState } from 'react'

function page() {
  const [counter, setCounter] = useState(0)
  let count = 0
  function increment() {
    count = counter + 1
    setCounter(count)
    console.log("count", count)
  }
  function decrement() {
    if (counter <= 0) {
      setCounter(0)
    } else {
      count = counter - 1
      setCounter(count)
    }

  }
  function reset(){
    setCounter(0)
  }
  return (
    <section className='flex justify-center items-center gap-10 flex-col min-h-screen'>
      <div className='flex justify-center gap-10 items-center'>
        <button type="sumbit" onClick={() => increment()} className='bg-white hover:bg-white/80 py-2 px-4 cursor-pointer text-black text-2xl  rounded-md '>+</button>
        <p id="messeage" className='text-4xl'>{counter}</p>
        <button type="sumbit" onClick={() => decrement()} className='bg-white  hover:bg-white/80 cursor-pointer py-2 px-4 text-black text-2xl  rounded-md '>-</button>
      </div>
      <div>
        <button id="reset" className='bg-white cursor-pointer  hover:bg-white/80  py-2 px-4 text-black text-xl  rounded-md ' onClick={() => reset()}>Reset</button>
      </div>




    </section>)
}

export default page