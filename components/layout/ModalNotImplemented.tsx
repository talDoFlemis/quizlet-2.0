import React, { Dispatch, Fragment, SetStateAction } from "react"
import { Transition, Dialog } from "@headlessui/react"
import Image from "next/image"

interface Props {
  text: string
  isModalVisible: boolean | undefined
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

function ModalNotImplemented({ text, isModalVisible, setModalVisible }: Props) {
  return (
    <>
      <Transition appear show={isModalVisible} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalVisible(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/70" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  This was not implemented yet
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{text}</p>

                  <div className="relative mx-auto mt-4 h-40 w-52">
                    <Image
                      src="https://c.tenor.com/qbhL03q9is4AAAAi/dance-scared.gif"
                      layout="fill"
                      objectFit="contain"
                      alt="yui"
                    />
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setModalVisible(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalNotImplemented
