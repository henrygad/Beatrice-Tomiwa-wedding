import type { ReactElement } from "react"

type Props = {
    displayImageUrl: string
    title: string | ReactElement
    content: string | ReactElement
    buttonField: string
    className?: string
}

const Regularsection = ({ displayImageUrl, title, content, buttonField, className = "" }: Props) => {
    return <div className={`flex-1 flex flex-wrap justify-between items-center gap-10 py-16 px-10 sm:px-20 ${className}`}>
        {/* Display image area */}
        <div className="flex-1 flex justify-center items-center">
            <img
                src={displayImageUrl}
                alt="Beatrice & Tomiwa"
                className="h-[295px] w-[250px] sm:h-[674px] sm:w-[440px] object-center object-cover rounded shadow shadow-inherit"
            />
        </div>
        {/* Text area  */}
        <div className="flex-2 flex justify-center items-center">
            <span className="block space-y-10 sm:space-y-20">
                <span className="block">
                    <h2 className="text-[#000000] text-[24px] sm:text-[48px] leading-normal sm:leading-[60px] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center sm:text-start">
                        {title}
                    </h2>
                </span>
                <span className="block space-y-10">
                    <p className="text-[#808080] text-[20px] sm:text-[24px] leading-normal tracking-normal font-normal font-main whitespace-normal text-wrap text-center sm:text-start">
                        {content}
                    </p>
                    <span className="flex justify-center sm:justify-start items-center">
                        <span className="w-auto min-w-[150px] sm:min-w-[300px] h-[57px] sm:h-[114px] flex justify-center items-center border-[1.5px] border-[#808080] rounded-[90%]">
                            <p className="text-[#000000] text-[18px] sm:text-[36px] leading-[100%] tracking-normal font-normal font-main whitespace-normal text-wrap text-start">
                                {buttonField}
                            </p>
                        </span>
                    </span>
                </span>

            </span>
        </div>
    </div>
};

export default Regularsection;