import { Menu } from "@headlessui/react"
import React from "react"
import {
  ChevronDownIcon,
  FolderIcon,
  CollectionIcon,
  UsersIcon,
  PlusIcon,
} from "@heroicons/react/outline"
import cl from "clsx"

function CreateMenu() {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="btn btn-sm border-none bg-[#4255ff] normal-case hover:bg-[#2f3cb4]">
          <h1 className="hidden lg:inline-flex">Create</h1>
          <ChevronDownIcon
            className="ml-2 -mr-1 hidden h-5 w-5 text-violet-200 hover:text-violet-100 lg:inline-flex"
            aria-hidden="true"
          />
          <PlusIcon
            className="inline-flex h-5 w-5 text-violet-200 hover:text-violet-100 lg:hidden"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Menu.Items
        as="div"
        className="absolute mt-2 flex w-56 flex-col space-y-2 rounded-lg border-2 bg-white text-sm shadow-md"
      >
        <Menu.Item>
          {({ active }) => (
            <a
              className={cl(
                active && "bg-[#f6f7fb] text-black",
                "flex items-center px-6 py-2 font-bold text-[#939bb4]"
              )}
              href="/account-settings"
            >
              <CollectionIcon className="mr-4 h-6 text-[#939bb4]" />
              Study set
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={cl(
                active && "bg-[#f6f7fb] text-black",
                "flex items-center px-6 py-2 font-bold text-[#939bb4]"
              )}
              href="/account-settings"
            >
              <FolderIcon className="mr-4 h-6 text-[#939bb4]" />
              Folder
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={cl(
                active && "bg-[#f6f7fb] text-black",
                "mb-2 flex items-center px-6 py-2 font-bold text-[#939bb4]"
              )}
              href="/account-settings"
            >
              <UsersIcon className="mr-4 h-6 text-[#939bb4]" />
              Class
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default CreateMenu
