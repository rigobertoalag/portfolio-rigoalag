import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import courses from '../json/course.js'
import Footer from './Footer.js'

export default function Courses() {
    const [open, setOpen] = useState(false)
    const [courseData, setCourseData] = useState({
        title: null,
        courseBy: null,
        courseId: null,
        duration: null,
        date: null,
        img: null
    })
    const cancelButtonRef = useRef(null)

    return (
        <div className='flex flex-col bg-black justify-center items-center mt-4'>
            <p className='text-2xl font-extralight mb-4'>Educación</p>

            <div className="w-72 sm:w-80 p-2 font-light mb-5">
                <p className="text-sm">09/2015 - 04/2019</p>
                <p className="text-indigo-500 font-semibold">Ingenieria en Tecnologias de la información</p>
                <p className="text-gray-200 text-sm italic">UNIVERSIDAD TECNOLOGICA DE MANZANILLO</p>
                {/* <p className="text-gray-200 text-justify">{e.description}</p> */}

                <div className="border-2 rounded-xl w-56 border-indigo-600 mt-2 sm:mt-6"></div>
            </div>

            <p className='text-2xl font-semibold mb-4'>Cursos en linea</p>

            <div className="grid grid-cols-1 gap-6 place-items-stretch mb-8 w-72">
                {
                    courses.map((c) => (
                        <div className="text-white text-center flex flex-col justify-center items-center cursor-pointer border-2 border-gray-800 " onClick={() => {
                            setOpen(true)
                            setCourseData({
                                title: c.title,
                                courseBy: c.courseBy,
                                courseId: c.courseId,
                                duration: c.duration,
                                date: c.date,
                                img: c.img
                            })
                        }} key={c.id}>
                            {/* <img src={c.img} alt={c.title} className="w-2/3 my-4 shadow-lg" /> */}
                            <img src={process.env.PUBLIC_URL + c.img} alt={c.title} className="object-contain" />
                            <p className="p-4 text-sm font-light">{c.title}</p>
                        </div>
                    ))
                }

            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="block items-end justify-center min-h-screen p-0 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-middle bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-60 w-80 bg-red-100">
                                            {/* <img src={courseData.img} alt={courseData.title} className="w-full my-2 " /> */}
                                            <img src={process.env.PUBLIC_URL + courseData.img} alt={courseData.title} className="object-contain" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left text-white">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium">
                                                {courseData.title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm font-semibold">Impartido por:</p>
                                                <p className="text-sm">{courseData.courseBy}</p>
                                                <p className="text-sm font-semibold">ID del curso:</p>
                                                <p className="text-xs">{courseData.courseId}</p>
                                                <p className="text-sm font-semibold">Duracion:</p>
                                                <p className="text-sm">{courseData.duration} hrs</p>
                                                <p className="text-sm font-semibold">Fecha de obtencion:</p>
                                                <p className="text-sm">{courseData.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-col-reverse">
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-indigo-500 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-white"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <Footer />
        </div>
    )
}