import { Dialog, Tab } from "@headlessui/react"
import React, { Fragment } from "react"
import QuizletLogo from "@svgs/quizletlogo.svg"
import { ArrowLeftIcon } from "@heroicons/react/outline"
import LogInForm from "@components/home/forms/LogInForm"
import { useRouter } from "next/router"

//TODO:MOVE THIS TO A LOGIN PAGE FOR CREATING A CUSTOM LOGIN PAGE THAT WILL REDIRECT TO THAT PAGE
function ModalLoginAndSignIn() {
  const router = useRouter()
  return (
    <>
      <Dialog
        as="div"
        open={true}
        className="fixed inset-0 z-50 h-screen w-screen overflow-y-auto"
        onClose={() => router.push("/")}
      >
        <div className="h-full w-full text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black/70" />

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block h-full w-full transform bg-white text-left align-middle shadow-xl transition-all">
            <div className="flex h-screen">
              <div className="loginpage_image hidden flex-col justify-between p-8 sm:flex">
                <h1 className="w-1/3 text-4xl font-bold text-[#3b4c9b]">
                  Smash sets in your sweats.
                </h1>
                <QuizletLogo className="text-8xl text-white" />
              </div>
              <div className="w-full overflow-y-scroll sm:w-1/2 sm:p-8">
                <ArrowLeftIcon
                  className="absolute left-0 top-0 mt-4 ml-4 h-8 w-8 cursor-pointer"
                  onClick={() => router.push("/")}
                />
                <Tab.Group className="mt-8 p-8" as="div">
                  <Tab.List className="mb-8 flex space-x-4">
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
                      <LogInForm />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ModalLoginAndSignIn
