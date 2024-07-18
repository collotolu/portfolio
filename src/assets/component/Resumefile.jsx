function Resumefile() {
  return (
    <>
      <div className="bg-blue-400 h-[35vh] absolute top-16 right-0 left-0">
        <h1 className="font-bold text-white text-[30px] mx-auto w-[46%]">Resume</h1>
      </div>
      <div className="max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg relative">
        <div className="flex flex-col pb-8 border-b">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Collins Otieno</h1>
            <p className="text-xl text-gray-600">Full Stack Developer</p>
          </div>
          <div className=" ">
            <a href="mailto:otienomito99@gmail.com" className="text-blue-500">
              otienomito99@gmail.com
            </a>
            <p className="text-gray-600">0707167918</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Career Summary</h2>
          <p className="text-gray-600 mt-4">
            I am a well-rounded and intuitive software developer with
            proficiency in three programming languages: HTML, JavaScript, and
            CSS. I have experience using tools such as React, React Native, and
            Tailwind CSS.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Achievements</h2>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800">
              MYC Tech Academy
            </h3>
            <p className="text-gray-600">
              I have worked and learned under the supervision of two teachers,
              which helped me develop and deploy group projects. This experience
              allowed me to participate in several significant projects:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>
                <strong>Jantah:</strong> I led a team of ten people in this
                project, which successfully concluded after a week of intense
                coding and deployment.
              </li>
              <li>
                <strong>Eternity Design:</strong> An app that registers
                companies/agencies dealing with interior design, making it
                easier for clients to find information. I was part of a
                five-person team, serving as an assistant for two weeks to help
                accomplish this project.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
          <ul className="list-none text-gray-600">
            <li>
              <strong>Software Development</strong>, Magoso Youth Center (MYC
              TECH ACADEMY)
            </li>
            <li>Achieved a certificate in software development.</li>
            <li>
              Acquired soft skills such as communication and confidence in
              presenting projects.
            </li>
            <li>
              <strong>Ngenia High School</strong> (2020-2023)
            </li>
            <li>
              <strong>Magoso Primary School</strong> (2011-2019)
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          <ul className="list-none text-gray-600">
            <li>Node.js</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Figma</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Referees</h2>
          <ul className="list-none text-gray-600">
            <li>
              Cynthia Oduol -{" "}
              <a href="mailto:cynthiaOdul@gmail.com" className="text-blue-500">
                cynthiaOdul@gmail.com
              </a>{" "}
              - 0707167918 - Nairobi
            </li>
            <li>
              Antony Ng’ang’a -{" "}
              <a
                href="mailto:antonyNg’ang’a@gmail.com"
                className="text-blue-500"
              >
                antonyNg’ang’a@gmail.com
              </a>{" "}
              - 0771916394 - Uthiru, Nairobi
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resumefile;
