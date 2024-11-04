import './Spinner.css'

export const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
        </div>
    </div>
  )
}
