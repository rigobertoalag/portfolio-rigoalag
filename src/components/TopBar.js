
export default function TopBar() {
    return (
        <div className="flex h-12 items-center justify-center border-b-2 border-gray-300">
            <p className="cursor-pointer">logo</p>
            <div className="flex flex-row-reverse w-10/12">
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">label 1</p>
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">label 2</p>
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">label 3</p>
                <p className="mr-4 text-black hover:text-gray-600 cursor-pointer">label 4</p>
            </div>
        </div>
    )
}