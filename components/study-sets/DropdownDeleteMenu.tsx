import { Menu, Transition } from "@headlessui/react"
import { DotsHorizontalIcon, TrashIcon } from "@heroicons/react/outline"
import React, { Fragment } from "react"

interface Props {
  setDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function DropdownDeleteMenu({ setDeleteModalVisible }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="relative mb-0 cursor-pointer rounded-full">
          <DotsHorizontalIcon className="h-6 w-6" />
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
        <Menu.Items className="absolute right-0 w-44 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-[#ffcd1f] text-black" : "text-[#ff725b]"
                  } group flex w-full items-center space-x-4 px-2 py-2 text-sm font-bold`}
                  onClick={() => setDeleteModalVisible(true)}
                >
                  <TrashIcon className="h-6 w-6 " />
                  <p>Delete</p>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownDeleteMenu
