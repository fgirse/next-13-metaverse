/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import BeerIcon from '../public/Bierglas99.svg';

const features = [
  {
    name: 'Frisches Pils vom Fass',
    description:
      'Flensburger Pils - das kühle Blonde von der Waterkant. Astra-Pils - das Kultbier natürlich direkt vom Kiez !',
    imageUrl: 'Bierglas99.svg',
  },
  {
    name: 'regionale Weine',
    description:
      'Qualitativ hochwertige Weine aus der Region Kaiserstuhl und dem Markgräflerland. Hauslieferant Weingut Heinemann Scherzingen.  ',
    imageUrl: 'weinIcon.svg',
  },
  {
    name: 'Cocktails & Longdrinks',
    description:
      'Zahlreiche internationale Longdrinks und Cocktaila - alles was das Herz begehrt. Zahlreiche "Kurze" für jeden Geschmack.',
    imageUrl: 'cocktailIcon.svg',
  },
  {
    name: 'Live Fussball TV',
    description:
      ' Jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch Spiele der Champions League und natürlich der grossen Turniere von EM und WM. Bei Topspielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt dabei !',
    imageUrl: 'footballIcon.svg',
  },
  {
    name: 'Party Event?',
    description:
      'Der Rettungsanker ist die ideale Location für Ihren privaten oder Business Event. Im Rahmen einer "gesckossenen Gesellschaft" stehen Ihnen die Räumlichkeiten des Rettungsankers zur Verfügung. Auf Wunsch Catering durch unseren Kooperationspartner möglich ! Sprechen Sie uns an oder kontaktieren Sie uns per e.mail.',
    imageUrl: 'eventIcon.svg',
  },
  {
    name: 'Hans Albers',
    description:
      ' Hans Phillip August Albers (* 22.September 1891 in Hamburg , 24. Juli 1960 in Berg, Bayern) war ein deutscher Schauspieler und Sänger, der als "blonder Hans" Volkssidol wurde. Zu den bekanntesten Spielfilmen in denen er mitwirkte gehören "der Mann, der Sherlock Holmes war" (1937), "Münchhausen" (1943), "die grosse Freiheit Nr.7" (1943) sowie "Auf fer Reeperbahn Nachts um halb eins"',
    imageUrl: 'halbersIcon.svg',
  },
];

export default function Example() {
  return (
    <div className="bg transparent py-12">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-yellow-500 lg:text-5xl">
            Gastlichkeit ist unsere Philosophie.{' '}
          </h2>
          <p className="trackin/g-tight mt-2 text-3xl font-extrabold text-gray-200 sm:text-4xl">
            Rettungsanker Features
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Der Rettungsanker Freiburg ist ein Treffpunkt zum Spass und gute
            Laune haben. Geniessen Sie unser Angebot welches wir anstreben
            ständig zu verbessern ! Sollten Sie einen besonderen Wunsch haben -
            sprechen Sie uns an ! Wir werden versuchen Ihre Anliegen umzusetzen.
          </p>
          <div className="mt-12">
            <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-md bg-indigo-900/10 text-white">
                      <img
                        className="mx-auto h-32 w-36  xl:h-24 xl:w-24"
                        src={feature.imageUrl}
                        alt=""
                      />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-yellow-400">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
