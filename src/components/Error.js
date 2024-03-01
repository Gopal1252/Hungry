import { useRouteError } from "react-router-dom"
import error404 from "../../public/images/error.png"

const Error = () => {

  const err = useRouteError();

  return (
    <div className="flex flex-col items-center mt-10">
        <div className="w-[35rem]">
            <img src={error404} className="p-5"></img>
        </div> 
        <h1 className="text-9xl font-extrabold">{err.status}</h1>
        <h1 className="text-xl mb-5">{err.statusText}</h1>
        <h2 className="text-4xl font-bold text-center">Oops..., it seems something<br/> went wrong</h2>
        <button className="mt-5 text-2xl border-2 border-black px-4 py-2 rounded-2xl hover:bg-gray-100">Go Home</button>
    </div>
  )
}

export default Error
