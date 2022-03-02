import { Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { LogoutIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { signOut } from "next-auth/react"
import { Session } from "next-auth"

interface Props {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  image: string
  name: string
  role: string
}

interface Props2 {
  session: Session | null
}

function DropdownUserAvatar({ session }: Props2) {
  const image = session?.user?.image
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="mask mask-circle relative h-8 w-8 cursor-pointer">
          {image && (
            <Image
              src={image}
              alt="user_icon"
              objectFit="contain"
              layout="fill"
            />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#f6f7fb] text-black" : "text-[#646f90]"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => signOut()}
                >
                  {active ? (
                    <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  ) : (
                    <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  )}
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownUserAvatar
