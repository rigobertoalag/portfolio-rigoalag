import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import courses from '../json/course.js'

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
        <div className="w-full bg-gray-100">
            <div className="flex justify-center py-10 text-4xl font-bold">
                <p className="text-green-600">Cursos y Reconocimientos</p>
            </div>
            <div className="grid grid-cols-3 gap-6 place-items-stretch mb-8">
                {
                    courses.map((c) => (
                        <div className="bg-gray-200 text-green-900 text-center flex flex-col justify-center items-center cursor-pointer shadow-lg" onClick={() => {
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
                            <img src={c.img} alt={c.title} className="w-2/3 my-4 shadow-lg" />
                            <p className="mb-4">{c.title}</p>
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
                            <div className="inline-block align-middle bg-gray-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-60 w-80 bg-red-100">
                                            <img src={courseData.img} alt={courseData.title} className="w-full my-2 " />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-green-600">
                                                {courseData.title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-green-600 font-semibold">Impartido por:</p>
                                                <p className="text-sm text-green-600">{courseData.courseBy}</p>
                                                <p className="text-sm text-green-600 font-semibold">ID del curso:</p>
                                                <p className="text-xs text-green-600">{courseData.courseId}</p>
                                                <p className="text-sm text-green-600 font-semibold">Duracion:</p>
                                                <p className="text-sm text-green-600">{courseData.duration} hrs</p>
                                                <p className="text-sm text-green-600 font-semibold">Fecha de obtencion:</p>
                                                <p className="text-sm text-green-600">{courseData.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-green-600 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
        </div>
    )
}