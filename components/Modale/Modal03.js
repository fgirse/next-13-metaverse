'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Iframe from 'react-iframe';
import { Tooltip, Button } from '@nextui-org/react';
import { CameraIcon } from '../icons/CameraIcon';
import SimpleTooltip from '../simpleTooltip';

export default function Modal03() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <div className="example-wrapper">
          <SimpleTooltip
            content="Reservierung Tisch - Du erhälst Bestätigung per email !!!"
            direction="top"
          >
            <Button
              onClick={openModal}
              size="xl"
              border="white .33rem solid"
              icon={<CameraIcon fill="currentColor" />}
              className="px- w-52 rounded-lg border-4 border-white bg-blue-700 py-2.5 text-center text-[1.333rem] font-black text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-yellow-500 dark:focus:ring-slate-100"
            >
              Reservation
            </Button>
          </SimpleTooltip>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-slate-700/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-gray-100-500 w-full max-w-5xl transform overflow-hidden rounded-2xl border bg-slate-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-amber-500"
                  >
                    TISCH RESERVATION
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-slate-50">
                      Buche eine Tischreservation online! Du erhälst dann eine
                      e-mail zur Bestätigung. Am Tag der Reservation erfolgt ein
                      Remindinding über sms an die von Dir angegebene
                      Telefonnummer. Danke für die Reservation
                    </p>{' '}
                    <br /> <p className="text-slate-50">Team Rettungsanker</p>
                  </div>
                  {/*<Script async src='https://app.tablein.com/sites/all/modules/custom/cumo_widget/js/code_outside_iframe.js?v2' type='text/javascript'></Script>*/}

                  <Script
                    async
                    src="//book.timify.com/widget/widget.min.js"
                    id="timify-widget"
                    data-position="flexible"
                    data-locale="de-de"
                  ></Script>

                  {/*<Iframe src='https://app.tablein.com/widget?restaurant_id=10788157&show-info=1' className='mt-5 mb-3 w-11/12 h-96'>

                          </Iframe>*/}

                  {/*<Iframe src='https://book.timify.com?accountId=62a8653b6249513136086cf4&fullscreen=1&hideCloseButton=1&showGuestBookingForm=1&locale=de-de' className='mt-5 mb-3 w-11/12 h-96'>

                        </Iframe>*/}
                  <div className="mt-20 flex flex-col items-center justify-center gap-y-9">
                    <div
                      className="timify-button mx-auto w-9/12 cursor-pointer rounded-2xl bg-lime-700 py-2 text-center text-xl text-slate-50 hover:bg-lime-500"
                      data-account-id="62a8653b6249513136086cf4"
                      data-show-guest-booking-form="true"
                    >
                      Termin online buchen
                    </div>

                    <div className="mt-0">
                      <button
                        type="button"
                        className="mb-[5vh] inline-flex justify-center rounded-md border border-transparent bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        zurück
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
