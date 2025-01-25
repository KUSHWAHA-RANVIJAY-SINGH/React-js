import React from 'react'

function ContactFrom() {
  return (
    <div className='m-10 '>
      <form class="w-full max-w-lg mx-auto mt-10 space-y-4">
  <div class="flex flex-col">
    <input type="text" placeholder="Name" class="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
  </div>
  <div class="flex flex-col">
    <input type="text" placeholder="Phone" class="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
  </div>
  <div class="flex flex-col">
    <input type="text" placeholder="Email" class="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
  </div>
  <div class="flex flex-col">
    <textarea placeholder="Message" class="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
  </div>
  <div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
  </div>
</form>

    </div>
  )
}

export default ContactFrom