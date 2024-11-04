import './ProjectInfo.css'
interface Props{
    isImageFirst: boolean;
    subtitle?: string;
    text: string;
    image: string;
}

export const ProjectInfo = ({
    isImageFirst,
    subtitle,
    text,
    image
}:Props) => {

// Divide el texto en líneas y agrega <br /> donde sea necesario
  const textLines = text.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <>
        {
            isImageFirst && 
            <div className="mb-10">
                <article className="w-full lg:flex lg:justify-between lg:items-center">
                    <div className="appear-animation w-full mx-auto mb-5 lg:w-2/5">
                        <img className="w-full" src={image} alt={subtitle} />
                    </div>
            
                    <div className="w-full lg:w-2/4">
                        { subtitle && <h4 className="text-4xl text-center py-5 lg:text-start">{ subtitle }</h4> }
                        <p className="text-xl text-justify md:text-3xl lg:text-start"> { textLines } </p>
                    </div>
                </article>
                <hr className="mt-10" />
            </div>
        }
        {
            !isImageFirst && 
            <div className="mb-10">
                <article className="w-full lg:flex lg:justify-between lg:items-center">
                    <div className="w-full mb-5 lg:w-2/4">
                        { subtitle && <h4 className="text-4xl text-center py-5 lg:text-start">{ subtitle }</h4> }
                        <p className="text-xl text-justify md:text-3xl lg:text-start"> { textLines } </p>
                    </div>

                    <div className="appear-animation w-full mx-auto lg:w-2/5">
                        <img className="w-full" src={image} alt={subtitle} />
                    </div>
                </article>
                <hr className="mt-10" />
            </div>
        }
    </>
  )
}
