import { Menu } from "@headlessui/react"
import React from "react"
import {
  ChevronDownIcon,
  FolderIcon,
  CollectionIcon,
  UsersIcon,
} from "@heroicons/react/outline"
import cl from "clsx"
import Link from "next/link"

function CreateMenuSidebar() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={cl(
          "header_hover_small relative flex w-full items-center justify-start pl-4 font-bold"
        )}
      >
        <h1>Create</h1>
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-black "
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute ml-16 mt-2 flex w-56 flex-col space-y-2 rounded-lg border-2 bg-white text-sm shadow-md"
      >
        <Menu.Item>
          {({ active }) => (
            <Link href="/user/create-set">
              <a
                className={cl(
                  active && "bg-[#f6f7fb] text-black",
                  "flex items-center px-6 py-2 font-bold text-[#939bb4]"
                )}
              >
                <CollectionIcon className="mr-4 h-6 text-[#939bb4]" />
                Study set
              </a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/auth/login">
              <a
                className={cl(
                  active && "bg-[#f6f7fb] text-black",
                  "flex items-center px-6 py-2 font-bold text-[#939bb4]"
                )}
              >
                <FolderIcon className="mr-4 h-6 text-[#939bb4]" />
                Folder
              </a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/auth/login">
              <a
                className={cl(
                  active && "bg-[#f6f7fb] text-black",
                  "mb-2 flex items-center px-6 py-2 font-bold text-[#939bb4]"
                )}
              >
                <UsersIcon className="mr-4 h-6 text-[#939bb4]" />
                Class
              </a>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default CreateMenuSidebar
