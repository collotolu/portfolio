function Footer() {
  return (
    <div>
      <div className="bg-blue-400 h-[30vh] flex justify-center flex-col items-center">
        <div className="mx-auto w-[60%]">
          <div className="mx-auto w-[20%]">
            <img
              src="src/image/fa0ae377e50df92055b9cc02a62f528f.jpg"
              alt=""
              className="w-[80px] h-[80px] rounded-full"
            />
          </div>
          <div className="text-white">
            <h2 className="font-bold text-[30px] mx-auto w-[60%]">
              Interested in hiring me for your project?
            </h2>
            <p className="w-[70%] mx-auto">
              Looking for an experienced full-stack developer to build your web
              app or ship your software product? To start an initial chat, just
              drop me an email at{" "}
              <a
                href=""
                className="text-blue-900 cursor-pointer hover:underline underline-offset-2"
              >
                otienomito99@gmail.com
              </a>{" "}
              or use the
              <span className="text-blue-900">form on the contact page.</span>
            </p>
          </div>
        </div>
      </div>
      <div className=" border border-gray-700 pt-4 bg-gray-600">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Web Dev. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
