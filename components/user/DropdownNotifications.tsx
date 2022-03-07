import { Menu, Transition } from "@headlessui/react"
import { BellIcon } from "@heroicons/react/outline"
import Image from "next/image"
import React, { Fragment } from "react"

function DropdownNotifications() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group mask mask-circle cursor-pointer rounded-full border-2 border-[#e5e7eb] p-2 transition-colors hover:border-[#a7adc1]">
          <BellIcon className="h-4 w-4 text-[#adb3c6] transition-colors group-hover:text-[#4e4361]" />
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
        <Menu.Items className="absolute right-0 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#f6f7fb]" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-4 text-sm`}
                >
                  <Image
                    src="/fire.png"
                    height={40}
                    width={40}
                    alt="fireHardcoded"
                  />
                  <p>Hardcoded Notification</p>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownNotifications
