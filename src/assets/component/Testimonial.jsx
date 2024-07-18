import { IoCheckmarkSharp } from "react-icons/io5";

function Testimonial() {
  return (
    <div className="mx-auto w-[50%] my-[15%]">
      <div className="font-bold text-[30px] flex items-center justify-center">
        <h1>Skills Overview</h1>
      </div>
      <div className="flex items-center gap-4 my-[4em] ">
        <div className="flex justify-center items-center bg-gray-100">
          <div className="relative bg-white shadow-2xl rounded-lg p-6 w-80">
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-blue-400 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img
                src="src/image/Web Design.png"
                alt="Web Design Icon"
                className="w-12 h-12"
              />
            </div>
            <h1 className="text-center text-2xl font-semibold mt-16">
              Frontend
            </h1>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> React
              </li>
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> Javascript
              </li>
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> Node.js
              </li>

              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" />{" "}
                HTML/CSS/SASS
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gray-100">
          <div className="relative bg-white shadow-2xl rounded-lg p-6 w-80">
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-blue-400 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img
                src="src/image/Backend.png"
                alt="Web Design Icon"
                className="w-12 h-12"
              />
            </div>
            <h1 className="text-center text-2xl font-semibold mt-16">
              Backend
            </h1>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> MongoDB
              </li>
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" />{" "}
                Python/Django
              </li>
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> Node.js
              </li>

              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> MySQL{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center bg-gray-100">
          <div className="relative bg-white shadow-2xl rounded-lg p-6 w-80">
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-blue-400 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <img
                src="src/image/others.png"
                alt="Web Design Icon"
                className="w-12 h-12"
              />
            </div>
            <h1 className="text-center text-2xl font-semibold mt-16">Others</h1>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> Figma
              </li>
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> Tailwindcss
              </li>
              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> Firebase
              </li>

              <li className="flex items-center text-gray-700">
                <IoCheckmarkSharp className="text-blue-500 mr-2" /> React-Native{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="border border-gray-300 px-[70px] py-[50px]  shadow-2xl">
          <div>
            <h1 className="flex justify-center mb-4 text-[20px]">Frontend</h1>
            <div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">React</li>
              </div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">Javascript</li>
              </div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">Node.js</li>
              </div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">HTML/CSS/SASS</li>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="border border-gray-300 px-[70px] py-[50px]  shadow-2xl">
          <div>
            <h1 className="flex justify-center mb-4 text-[20px]">Frontend</h1>
            <div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">React</li>
              </div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">Javascript</li>
              </div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">Node.js</li>
              </div>
              <div className="flex gap-4 mb-2">
                <IoCheckmarkSharp className="text-blue-500" />
                <li className="list-none">HTML/CSS/SASS</li>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonial;
