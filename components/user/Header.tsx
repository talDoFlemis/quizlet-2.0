import QuizletLogo from "../svgs/quizletlogo.svg"
import QuizletLogoOptions from "../svgs/quizletLogoOptions.svg"
import CreateMenu from "./CreateMenu"
import { SearchIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react"
import cl from "clsx"
import { useRouter } from "next/router"
import CreateMenuSidebar from "./CreateMenuSideBar"
import Link from "next/link"
import DropdownUserAvatar from "./DropdownUserAvatar"
import DropdownNotifications from "./DropdownNotifications"

function Header() {
  const [searchBarWideOpen, setSearchBarWideOpen] = useState(false)
  const [navbarMobileToggle, setNavbarMobileToggle] = useState(false)

  const router = useRouter()
  const { pathname } = router

  return (
    <nav className="sticky top-0 z-30 flex h-[6vh] items-center justify-between bg-[#ffffff] px-4 shadow-md md:h-[8vh] md:px-8">
      {navbarMobileToggle && (
        <div className="absolute top-0 left-0 z-50 flex min-h-screen w-full flex-col justify-start space-y-4 bg-white py-4 shadow-md">
          <XIcon
            className="ml-4 h-8 w-8 cursor-pointer rounded-full p-1 text-[#586380] hover:bg-[#5863803a] hover:text-black"
            onClick={() => setNavbarMobileToggle(false)}
          />
          <Link href="/latest">
            <a
              className={cl(
                "header_hover_small relative w-full items-center justify-center pl-4 font-bold",
                pathname === "/latest" && "header_current_small"
              )}
            >
              Home
            </a>
          </Link>
          <a
            href="https://quizlet.com/explanations"
            className={cl(
              "header_hover_small relative w-full items-center justify-center pl-4 font-bold",
              pathname === "/Explanation" && "header_current_small"
            )}
          >
            Explanation
          </a>
          <CreateMenuSidebar />
        </div>
      )}
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setNavbarMobileToggle(!navbarMobileToggle)}
      >
        <QuizletLogoOptions className="text-4xl text-[#4255ff]" />
      </div>
      <div className="relative hidden h-full items-center space-x-6 md:flex">
        <Link href="/latest">
          <a>
            <QuizletLogo className="h-16 w-24 cursor-pointer text-[#4255ff]" />
          </a>
        </Link>
        <Link href="/latest">
          <a
            className={cl(
              "header_hover_highlight relative hidden h-full items-center text-sm font-bold lg:flex",
              pathname === "/latest" && "header_current"
            )}
          >
            Home
          </a>
        </Link>
        <a
          href="https://quizlet.com/explanations"
          className={cl(
            "header_hover_highlight relative flex h-full items-center text-sm font-bold",
            pathname === "/explanation" && "header_current"
          )}
        >
          Explanation
        </a>
        <CreateMenu />
      </div>
      {!searchBarWideOpen ? (
        <div className="flex items-center space-x-2">
          <div
            className="group flex cursor-pointer items-center space-x-2 rounded-full border-2 bg-transparent p-2 font-bold text-[#555967] transition-colors hover:border-[#a7adc1] lg:w-56 lg:rounded-md lg:bg-[#f6f7fb] lg:py-1 lg:px-3"
            onClick={() => setSearchBarWideOpen(!searchBarWideOpen)}
          >
            <SearchIcon className="h-4 text-[#a7adc1] transition-colors group-hover:text-black lg:h-6 lg:text-black" />
            <h1 className="hidden text-sm lg:inline-flex">
              Study sets, textbook...
            </h1>
          </div>
          <DropdownNotifications />
          <DropdownUserAvatar />
        </div>
      ) : (
        <div className="flex w-5/12 items-center justify-between rounded-lg border-2 bg-[#f6f7fb] py-2 px-3 font-bold text-[#555967]">
          <div className="flex items-center space-x-2">
            <div>
              <SearchIcon className="h-6 text-black" />
            </div>
            <h1 className="text-sm">Study sets, textbook...</h1>
          </div>
          <div>
            <XIcon
              className="h-6 cursor-pointer text-black"
              onClick={() => setSearchBarWideOpen(!searchBarWideOpen)}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
