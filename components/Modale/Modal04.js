'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/outline'
import Tooltip from 'react-simple-tooltip';
import React from 'react';
import LogoLeckerladen from '../../public/LogoLeckerladen.svg'
import dynamic from 'next/dynamic';

export default function Modal04() {
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
          <Tooltip content="weitere infos !!!" direction="top">
            <button
              type="button"
              onClick={openModal}
              className="mb-[3vw] w-60 rounded-md border bg-green-500 bg-opacity-80 px-4 py-2 text-[1.46rem] font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
             <span className='text-3xl'>🎈 </span>weitere Infos
            </button>
          </Tooltip>
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
            <Dialog.Overlay className="fixed inset-0  bg-slate-700/90" />
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
                <Dialog.Panel className="border-gray-100-500 w-[66vw] max-w-md transform overflow-hidden rounded-2xl border bg-slate-900 p-6 text-left align-middle shadow-xl transition-all lg:h-[66vh]">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-amber-500"
                  >
                    INFO DEIN EVENT🎇
                  </Dialog.Title>
                  <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Der Rettungsanker und seine Räumlichkeiten sind eine
                        ideale Location um Ihre privaten oder geschäftlichen
                        Anlässe wie Geburtstage, Hochzeiten und Verlobungen,
                        aber auch Firmen- oder Belegschaftspartys zu gestalten.
                        Im Rahmen einer &quot;geschlossenen Gesellschaft&quot;
                        steht Ihnen der Rettungsanker mit seinen Räumlichkeiten
                        für Ihre Feierlichkeiten zur Verfügung. <br />
                        <br />
                        Auch können wir Ihnen - falls dies erwünscht - ein
                        vollumfängliches{' '}
                        <span className="font-bold text-yellow-400">
                          Catering
                        </span>{' '}
                        anbieten. Hier sind Ihren Wünschen im Grunde genommen
                        keine Grenzen gesetzt. <br />
                        <br /> Unsere Koperationspartner
                        für ausgezeichnete und ideenreiche Apero-Buffets
                        oder Menues besoders ausgewiesen und werden nichts
                        unversucht lassen Ihre Wünsche und Ideen umzusetzten.
                        <br />
                        <br /> Nähere Informationen zur Planung Ihres Events
                        besprechen wir am sinnvollsten nach{' '}
                        <span className="font-bold text-yellow-400">
                          Vereinbarung eines persönlichen Termins
                        </span>
                        . Senden Sie uns eine e-mail oder sprechen Sie uns
                        direkt im Rettungsanker an!!! Wir freuen uns Ihre
                        Feierlichkeiten professionell begleiten zu dürfen.
                        <br />
                        <br />
                        Michael Schreck und das Team Rettungsanker.
                    </p>

                  
                  
                  </div>
                  

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      zurück
                    </button>
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
