import React from 'react'

function Message() {
  return (
    <div className='py-20'>
        <div className='w-10/12 mx-auto flex justify-between'>
            <div>
                <h1 className='text-4xl font-semibold'>Send a Message</h1>
            </div>

            <div>
                <div className='flex items-center gap-12'>
                    <input className='w-[500px] h-[80px] bg-[#f8f8f8] rounded-lg px-5 text-2xl outline-[#0071dc]' type="text" placeholder='Your Name' />
                    <input className='w-[500px] h-[80px] bg-[#f8f8f8] rounded-lg px-5 text-2xl outline-[#0071dc]' type="text" placeholder='Email' />
                </div>
                <input className='w-[1050px] h-[200px] bg-[#f8f8f8] rounded-lg px-5 pt-0 text-2xl outline-[#0071dc] mt-10' type="text" placeholder='Message' />
            </div>
        </div>
    </div>
  )
}

export default Message