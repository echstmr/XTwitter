import React from 'react';
import data from '../assets/data/data.json';
import { GrApple } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";



const XLogin = () => {
  // Convert FooterLinks object to an array
  const footerLinks = Object.values(data.FooterLinks);

  return (
    <div className="text-white p-5">
      {/*Login 2 Col*/}
      <div className="w-[100%] h-[88vh] flex md:flex-row flex-col md:items-center items-start justify-evenly bg-black">
        {/* Col 1 */}
        <div>
          <img className='md:w-[300px] w-[50px]' src={data.Xlogin.logo} alt={data.Xlogin.alt} />
        </div>
        {/* Col 2 */}
        <div>
          {/* Col 2 Text */}
          <div className="flex flex-col gap-[50px]">
            <h1 className="text-4xl md:text-6xl font-bold">{data.Xlogin.Text1}</h1>
            <h2 className="text-3xl font-bold">{data.Xlogin.Text2}</h2>
          </div>
          {/* Col 2 Buttons */}
          <div className="flex flex-col items-start py-5 gap-3">
            <button className="w-[300px] bg-white h-[40px] text-gray-500 rounded-full font-bold text-[14px] flex items-center justify-center gap-3">
              <FcGoogle size={20}/>
              {data.Button.button1}
            </button>
            <button className="w-[300px] bg-white h-[40px] text-black rounded-full font-bold text-[14px] flex items-center justify-center gap-3">
              <GrApple size={20}/>
              {data.Button.button2}
            </button>
            <span className="text-center w-[300px]">or</span>
            <button className="w-[300px] h-[40px] rounded-full bg-[#3498db] text-[14px]">
              {data.Button.button3}
            </button>
            <p className="w-[350px] text-[11px] text-gray-500">
              By signing up, you agree to the{' '}
              <span className="text-blue-400 hover:underline">Terms of Service</span> and{' '}
              <span className="text-blue-400 hover:underline">Privacy Policy</span>, including{' '}
              <span className="text-blue-400 hover:underline">Cookie Use</span>.
            </p>
            <div className="flex flex-col gap-4 py-5">
              <h2>Already have an account?</h2>
              <button className="w-[300px] rounded-full h-[40px] border border-gray-500 text-sky-400">
                {data.Button.button4}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-[100%] px-1 flex flex-wrap items-center justify-center conte gap-3 text-center">
        {footerLinks.map((link, index) => (
          <p key={index} className="text-gray-400 font-light text-[13px] hover:underline cursor-pointer">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default XLogin;
