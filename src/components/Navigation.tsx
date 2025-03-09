import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

export default function Navigation() {
    return (
        <>
            <Disclosure as="nav" className="bg-black">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="/" className="px-3 py-2 text-lg font-large text-white hover:bg-gray-700 hover:text-white">matt miling</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Menu as="div" className="ml-3 relative">
                                <div className="flex space-x-4">
                                    <MenuButton className="px-3 py-2 font-medium text-lg text-white hover:bg-gray-700" aria-expanded="false" aria-haspopup="true">
                                        portfolio
                                    </MenuButton>
                                </div>

                                <MenuItems className="absolute right1 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-400 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" aria-orientation="vertical" aria-labelledby="portfolio-menu-button">
                                    <MenuItem>
                                        <a href="https://blog.mattmiling.com" className="block px-4 py-2 text-lg text-black" role="menuitem" tabIndex={-1} id="user-menu-item-0">blog</a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="https://commuter.mattmiling.com" className="block px-4 py-2 text-lg text-black" role="menuitem" tabIndex={-1} id="user-menu-item-1">commuter</a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="/about" className="px-3 py-2 text-lg font-medium text-white hover:bg-gray-700">about</a>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="/contact" className="px-3 py-2 text-lg font-medium text-white hover:bg-gray-700">contact</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </Disclosure>
        </>
    )
}