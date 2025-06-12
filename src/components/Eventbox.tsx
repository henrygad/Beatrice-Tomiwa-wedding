

type Props = {
    iconUrl: string,
    time: string,
    event: string
};


const Eventbox = ({iconUrl, time, event}:Props) => {

    return <span className="block space-y-10 text-center">
        <span className="flex justify-between items-center flex-col gap-5">
            {/*display icon */}
            < img
                src={iconUrl}
                alt={event}
                className="h-[78px] w-[70px] object-center object-cover"
            />
            {/* display time */}
            <p className="font-main text-[36px] text-[#FFFFFF] leading-[100%] tracking-normal whitespace-pre text-nowrap text-center">
                {time}
            </p >
       </span>
        {/* display event */}
        <p className="font-main text-[24px] text-[#FFFFFF] leading-[100%] tracking-normal whitespace-pre text-nowrap text-center">
            {event}
        </p >
    </span >
}

export default Eventbox