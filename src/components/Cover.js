export default function Cover() {
    return (
        // <div className="bg-black sm:h-72 md:h-full lg:h-1/2 flex justify-center items-center ">
        //     <img src={process.env.PUBLIC_URL + "/img/cover.jpg"} alt="cover" className="sm:h-full sm:w-full md:w-full md:h-1/2" />
        // </div>
        <div className="h-screen">
            <div className="bg-black sm:h-72 md:h-full lg:h-2/3 flex justify-center items-center ">
                <img src={process.env.PUBLIC_URL + "/img/cover.jpg"} alt="cover" className="sm:h-full sm:w-full md:w-full md:h-full" />
            </div>
        </div>
    )
}