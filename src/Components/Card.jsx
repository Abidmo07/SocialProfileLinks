
import ramziImage from "../assets/ramzi.jpg"
export default function Card() {
  return (
    <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center  bg-zinc-800 space-y-5 px-14 py-5 my-[50px] rounded-lg ">
 
        <img className="w-24 h-24 rounded-full" src={ramziImage} alt="" />
        <p className="text-white text-2xl">Ramzi Abid</p>
        <p className="text-lime-400 text-pretty font-medium font ">Sétif,Algeria</p>
        <p className="text-gray-300">React && Laravel Developer,Self Learner</p>
        <div className="flex flex-col space-y-3 w-full">
          
            <a className="bg-zinc-600 text-center  py-2  rounded-lg font-medium text-white" href="https://github.com/Abidmo07?tab=repositories">GitHub</a>
            <a className="bg-zinc-600 text-center  p-2 rounded-lg font-medium text-white" href="https://www.frontendmentor.io/profile/Abidmo07">Frontend Mentor</a>
            <a className="bg-zinc-600 text-center  p-2 rounded-lg font-medium text-white " href=" https://www.linkedin.com/in/mohamed-abid-4061b8325/  ">Linkedin</a>
            <a className="bg-zinc-600 text-center  p-2 rounded-lg font-medium text-white    " href="https://www.instagram.com/top_g.19?igsh=MTllazllZXg3a3cwcw==">Instagram</a>
        </div>

      
    </div>
    </div>

  )
}
