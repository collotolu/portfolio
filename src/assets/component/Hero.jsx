function Hero() {
  return (
    <div className="bg-blue-400 h-[35vh] absolute top-16 right-0 left-0">
      <div className="flex w-[70%] mx-auto items-center h-[35vh] gap-6">
        <div className=" ">
          <img src="src/image/fa0ae377e50df92055b9cc02a62f528f.jpg" alt="" className=" rounded-xl"/>
        </div>
        <div className="text-white  ">
          <p className="">Hello, my name is </p>
          <h1 className="font-bold text-[40px]">Collins Otieno</h1>
          <p>
            I'm a full-stack developer specialised in frontend and backend
            development for complex scalable web apps. I write about web
            development on my blog and regularly speak at various web
            conferences and meetups. Want to know how I may help your project?
            Check out my project case studies and<span> resume</span> .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
