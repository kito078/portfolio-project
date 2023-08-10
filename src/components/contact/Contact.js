import React from "react";

function Contact() {
  return (
    <div>
      <div className="mx-6 lg:mx-0">
        <h3 className="text-2xl font-bold mb-6 text-gray-300">Message Me</h3>

        <form className="">
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-3.5 px-0 w-full  rounded-md  text-gray-400 bg-gray-800 
           appearance-none 
           focus:border-b text-white text-md pl-3 border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name"
                required
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-3.5 px-0 w-full  rounded-md  text-gray-400 bg-gray-800 
           appearance-none 
           focus:border-b text-white text-md pl-3 border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-3.5 px-0 w-full  rounded-md  text-gray-400 bg-gray-800 
           appearance-none 
           focus:border-b text-white text-md pl-3 border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Subject"
              required
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <textarea
              name="floating_message"
              id="floating_message"
              class="block py-3.5 px-3 w-full h-[8rem] rounded-md text-gray-400 bg-gray-800
           appearance-none resize-none
           focus:border-b border-blue-500
           focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
