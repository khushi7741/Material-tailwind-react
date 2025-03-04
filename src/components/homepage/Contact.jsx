import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="sm:max-w-xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center gap-5 sm:px-0 px-8 mb-16">
          <h4 className="capitalize text-xl font-bold text-black">
            contact us
          </h4>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Want to work with us?
          </h2>
          <p className="sm:text-lg text-gray-500 font-medium">
            Complete this form and we will get back to you in 24 hours.
          </p>
        </div>
        <div className="mb-24 sm:px-0 px-8">
          <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex sm:flex-row flex-col gap-5">
                <input
                  type="text"
                  placeholder="Full name"
                  className="border border-gray-400 w-full rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 w-full rounded-md p-2"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="w-full border border-gray-400 rounded-md h-full p-2 min-h-52"
              ></textarea>
              <div className="flex gap-3">
                <input type="checkbox" />
                <p className="text-gray-600">I agree the Terms & conditions</p>
              </div>
            </div>
            <div>
              <button className="uppercase w-full bg-black/80 rounded-md text-white py-3 px-1 font-bold text-sm">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
