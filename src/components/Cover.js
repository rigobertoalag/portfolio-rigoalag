export default function Cover() {
    return (
        <div className="bg-black sm:h-72 md:h-full lg:h-full flex justify-center items-center ">
            <img src={process.env.PUBLIC_URL + "/img/cover.jpg"} alt="cover" className="object-contain sm:h-full sm:w-full md:w-full md:h-full" />
        </div>
    )
}