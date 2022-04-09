import { Dialog, Tab, Transition } from "@headlessui/react"
import React, { Dispatch, Fragment, SetStateAction } from "react"
import { ModalData } from "../../typings"
import QuizletLogo from "@svgs/quizletlogo.svg"
import { XIcon } from "@heroicons/react/outline"

import SignInForm from "./forms/SignInForm"
import LogInForm from "./forms/LogInForm"

interface Props {
  modalData: ModalData | undefined
  setModalData: Dispatch<SetStateAction<ModalData>>
}
//TODO:MOVE THIS TO A LOGIN PAGE FOR CREATING A CUSTOM LOGIN PAGE THAT WILL REDIRECT TO THAT PAGE
function ModalLoginAndSignIn({ modalData, setModalData }: Props) {
  return (
    <>
      <Transition appear show={modalData?.modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 h-screen w-screen overflow-y-auto"
          onClose={() => setModalData({ modalOpen: false })}
        >
          <div className="h-full w-full text-center">
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
              <div className="inline-block h-full w-full transform bg-white text-left align-middle shadow-xl transition-all">
                <div className="flex h-screen">
                  <div className="loginpage_image flex flex-col justify-between p-8">
                    <h1 className="w-1/3 text-4xl font-bold text-[#3b4c9b]">
                      Smash sets in your sweats.
                    </h1>
                    <QuizletLogo className="text-8xl text-white" />
                  </div>
                  <div className="w-1/2 overflow-y-scroll p-8">
                    <XIcon
                      className="absolute right-0 mr-4 h-8 w-8 cursor-pointer"
                      onClick={() => setModalData({ modalOpen: false })}
                    />
                    <Tab.Group
                      className="mt-8 p-8"
                      as="div"
                      defaultIndex={modalData?.modalOption}
                    >
                      <Tab.List className="mb-8 flex space-x-4">
                        <Tab
                          className={({ selected }) =>
                            selected
                              ? "text-2xl font-bold text-[#303545]"
                              : "text-2xl font-bold text-[#939bb4]"
                          }
                        >
                          Sign up
                        </Tab>
                        <Tab
                          className={({ selected }) =>
                            selected
                              ? "text-2xl font-bold text-[#303545]"
                              : "text-2xl font-bold text-[#939bb4]"
                          }
                        >
                          Log in
                        </Tab>
                      </Tab.List>
                      <Tab.Panels>
                        <Tab.Panel>
                          <SignInForm />
                        </Tab.Panel>
                        <Tab.Panel>
                          <LogInForm />
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalLoginAndSignIn
