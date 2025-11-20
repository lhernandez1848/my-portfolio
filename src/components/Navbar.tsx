import { useLocation } from "react-router"
import Toggle from "./Toggle"
import { useState } from "react"
import { filterClassnames } from "../lib/utils"

type NavProps = {
  handleChange: () => void,
  isDark: boolean
}

export default function Navbar({ handleChange, isDark }: NavProps) {
  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === "/" ? true : false },
    { name: 'Projects', href: '/projects', current: location.pathname === "/projects" ? true : false }
  ]

  const navMenu = navigation.map((item) => (
    <li key={item.name}>
      <a
      href={item.href}
      aria-current={item.current ? 'page' : undefined}
      className={filterClassnames(
        item.current ? 'text-white bg-cyan-800 sm:bg-transparent sm:text-cyan-800 sm:p-0 sm:dark:text-cyan-500' : 'hover:bg-gray-100 sm:hover:bg-transparent sm:hover:text-cyan-800 sm:p-0 sm:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white sm:dark:hover:bg-transparent dark:border-gray-700', 'text-gray-900 rounded-sm',
      )}>{item.name}</a>
    </li>
  ))

  return (
    <nav className="bg-white dark:bg-gray-950 w-full border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 focus:outline-hidden dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isOpen 
                ? <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                : <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
              }              
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <ul className="flex flex-col p-4 sm:p-0 mt-4 font-medium rounded-lg sm:space-x-8 rtl:space-x-reverse sm:flex-row sm:mt-0 sm:border-0">
                  {navMenu}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Toggle isDark={isDark} handleChange={handleChange} />
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isOpen &&
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <ul className="flex flex-col p-2 font-medium border border-gray-100 rounded-lg bg-gray-50 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
              {navMenu}
            </ul>
          </div>
        </div>
      }      
    </nav>
  )
}