import type { ReactElement } from "react"

type Props = {
    displayImageUrl: string
    title: string | ReactElement
    content: string | ReactElement
    buttonField: string
    className?: string
}

const Regularsection = ({displayImageUrl, title, content, buttonField, className = ""}:Props) => {
    return <div className={`container flex-1 flex flex-wrap justify-between items-center gap-10 ${className}`}>
        {/* Display image area */}
        <div className="flex-1 flex justify-center">
            <img
                src={displayImageUrl}
                alt="Beatrice & Tomiwa"
                className="h-[674px] w-[440px] object-center object-cover rounded shadow shadow-slate-700"
            />
        </div>
        {/* Text area  */}
        <div className="flex-2 flex justify-center items-center">
            <span className="block space-y-20">
                <span className="block">
                    <h2 className="text-[#000000] text-[48px] leading-[60px] tracking-normal font-normal font-main whitespace-pre text-nowrap text-start">
                        {title}
                    </h2>
                </span>
                <span className="block space-y-10">
                    <p className="text-[#808080] text-[24px] leading-normal tracking-normal font-normal font-main whitespace-normal text-wrap text-start">
                        {content}
                    </p>
                    <span className="w-auto max-w-[300px] h-[114px] flex justify-center items-center border-[1.5px] border-[#808080] rounded-[90%]">
                        <p className="text-[#000000] text-[36px] leading-[100%] tracking-normal font-normal font-main whitespace-normal text-wrap text-start">
                            {buttonField}
                        </p>
                    </span>
                </span>

            </span>
        </div>
    </div>
};

export default Regularsection;