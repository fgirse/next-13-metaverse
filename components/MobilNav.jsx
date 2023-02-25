'use client';

import { NextLogo } from '../ui/NextLogo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import InfoBar from './InfoBar';
import {
  CakeIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', icon: HomeIcon, current: true, href: './.' },
  {
    name: 'Über uns',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Geschichte', href: '/geschichte' },
      { name: 'Team', href: '/team' },
    ],
  },
  {
    name: 'Drinks & Snacks',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Biere ', href: '/biere' },
      { name: 'Weine & Kurze', href: '/weine' },
      { name: 'Softgetränke & Cocktails', href: '/cocktails' },
      { name: 'Snacks', href: '/snacks' },
    ],
  },
  {
    name: 'Sportarena',
    icon: CalendarIcon,
    current: false,
    children: [
      { name: 'SC Freiburg', href: '/scfreiburg' },
      { name: 'Bundesliga', href: '/bundesliga' },
    ],
  },
  {
    name: 'Events',
    icon: CakeIcon,
    current: true,
    href: '/events',
  },

  {
    name: 'Wohin?',
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: 'Lageplan & Info', href: '/lageplan' },
      { name: 'Openstreet', href: '/openstreet' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function MobilNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div
      id="topBorderMobil"
      className="fixed top-0 z-10 flex h-auto w-full flex-col border-b border-gray-300 bg-gray-900 lg:hidden "
    >
      <div className="py- flex h-10 items-center px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center space-x-2.5"
          onClick={close}
        >
          <div className="h-5 w-6  group-hover:transform">
            <NextLogo width="200" height="160" />
          </div>

          <h3 className="font-black tracking-wide text-gray-100 hover:bg-yellow-600 hover:text-gray-50">
            <span className="Work in progress"></span>
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-12 items-center space-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-400" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>
      <InfoBar />

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-slate-800': isOpen,
          hidden: !isOpen,
        })}
      >
        {/*<nav className="space-y-6 px-2 py-5">
          {demos.map((section) => {
            return (
              <div className='' key={section.name}>
                   
                <div className="mb-2 px-3 text-[1.33rem] font-bold uppercase tracking-wider text-yellow-600 flex items-center gap-x-1">
                <Image src="/bulleye.svg" height="50" width={50} alt="Bullauge"/>             
                  <div>{section.name}</div>
                </div>

                <div className="text-[1.33rem] space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>*/}
        <div className="mt-5 flex flex-grow flex-col">
          <nav
            className="flex-1 space-y-1 bg-slate-800 px-2 text-[1.33rem]  font-black text-white"
            aria-label="Sidebar"
          >
            {navigation.map((item) =>
              !item.children ? (
                <div key={item.name}>
                  <Link
                    href="#"
                    className={classNames(
                      item.current
                        ? 'bg-slate-600 text-gray-100 hover:bg-yellow-600'
                        : 'bg-slate-600 text-gray-100',
                      'group flex w-full items-center rounded-md py-2 pl-2 text-[1.33rem] font-black',
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-yellow-500 group-hover:text-violet-500'
                          : 'text-yellow-400',
                        'mr-3 h-6 w-6 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </div>
              ) : (
                <Disclosure as="div" key={item.name} className="space-y-1">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          item.current
                            ? 'bg-slate-600 font-black text-gray-100 hover:bg-yellow-600 hover:text-gray-100'
                            : 'bg-slate-600 text-gray-200 ',
                          'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left font-black text-[1.33] hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500',
                        )}
                      >
                        <item.icon
                          className="mr-3 h-6 w-6 flex-shrink-0 text-yellow-500 group-hover:text-violet-500"
                          aria-hidden="true"
                        />
                        <span className="flex-1">{item.name}</span>
                        <svg
                          className={classNames(
                            open ? 'rotate-90 text-gray-400' : 'text-gray-300',
                            'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-yellow-500',
                          )}
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="space-y-1">
                        {item.children.map((subItem) => (
                          <Disclosure.Button
                            key={subItem.name}
                            as="a"
                            href={subItem.href}
                            className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-[1.3rem] font-black text-gray-100 hover:bg-yellow-500 hover:text-gray-50"
                          >
                            {subItem.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ),
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobilNav;
