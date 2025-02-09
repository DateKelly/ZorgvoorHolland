import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, PhoneCall, Heart, Mail, Briefcase, Clock, PiggyBank } from 'lucide-react';
import { Logo } from './components/Logo';
import { CallToAction } from './components/CallToAction';

// ZZP'er Page
const ZZPer = () => (
  <div className="w-full">
    <div className="relative h-[300px] md:h-[500px] mb-8 md:mb-16">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
        alt="Healthcare professional at work"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50">
        <div className="max-w-4xl mx-auto h-full px-4 py-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-orange-500">ZZP'er</span>{" "}
              <span className="text-gray-800">in de zorg</span>
            </h1>
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Als zelfstandige professional in de zorg bent u op zoek naar interessante opdrachten en goede voorwaarden. Bij Zorg voor Holland vindt u beide, met de persoonlijke aandacht die u verdient.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 mb-8">
      <div className="bg-orange-100/50 p-8 rounded-2xl mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">Direct aan de slag</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Wij hebben doorlopend opdrachten beschikbaar bij diverse zorginstellingen. Van kortdurende invalwerk tot langlopende opdrachten, wij matchen u met de opdracht die bij u past.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
        <div className="space-y-6 md:space-y-12">
          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-orange-500">Onze opdrachten</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Verzorgende IG
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Verpleegkundige niveau 4
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                HBO-Verpleegkundige
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Wijkverpleegkundige
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Thuishulp ZZP'er
              </li>
            </ul>
          </section>

          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-orange-500">Flexibiliteit</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Zelf uw werkdagen bepalen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Korte en lange opdrachten
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Dag-, avond- en nachtdiensten
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Weekenden naar keuze
              </li>
            </ul>
          </section>

          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-orange-500">Persoonlijke ontwikkeling</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bij Zorg voor Holland ondersteunen wij u in uw professionele groei. Wij bieden:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Toegang tot relevante opleidingen en cursussen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Begeleiding bij BIG-registratie
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Intervisie met andere zorgprofessionals
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Persoonlijk ontwikkelingsplan
              </li>
            </ul>
          </section>

          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-orange-500">Starten als ZZP'er</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Wij begeleiden u bij alle aspecten van het ZZP-schap:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Hulp bij KvK-inschrijving
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Advies over verzekeringen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Administratieve ondersteuning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Belastingadvies
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Contractbeheer
              </li>
            </ul>
          </section>

          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl md:text-2xl font-semibold text-orange-500">Thuishulp ZZP'ers</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Als zelfstandige thuishulp kunt u via Zorg voor Holland aan de slag bij particulieren of via WMO-opdrachten. Wij bieden:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Flexibele werktijden
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Keuze tussen WMO en particuliere zorg
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Vaste cliënten mogelijk
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Aantrekkelijke vergoedingen
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col justify-center relative mt-8 md:mt-0">
          <div className="md:sticky md:top-8 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                Waarom kiezen voor <span className="text-orange-500">ons?</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Bij Zorg voor Holland staat u als zorgprofessional centraal. Wij bieden niet alleen interessante opdrachten, maar zorgen ook voor persoonlijke begeleiding en uitstekende voorwaarden.
              </p>
            </div>

            <div className="bg-orange-50/50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <PiggyBank className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-semibold text-orange-500">Onze voordelen</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  Aantrekkelijke tarieven
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  Snelle betaling
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  Persoonlijke begeleiding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction title="ZZP'er" />
    </div>
  </div>
);

// Pages
const Zorg = () => (
  <div className="w-full">
    <div className="relative h-[300px] md:h-[500px] mb-8 md:mb-16">
      <img
        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
        alt="Healthcare professionals"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50">
        <div className="max-w-4xl mx-auto h-full px-4 py-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-orange-500">ZORG</span>{" "}
              <span className="text-gray-800">gaat door</span>
            </h1>
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Onderbezetting, vakantieverlof, zwangerschapsverlof, ziekte van personeel, door tal van redenen kan de planning niet rondkomen. Zorg voor Holland biedt direct zorgverleners voor uw zorginstelling, zodat het verlenen van zorg altijd door kan gaan.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 mb-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
        <div className="space-y-6 md:space-y-12">
          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-orange-500">Persoonlijk contact</h2>
            <p className="text-gray-700 leading-relaxed">
              Wij zijn bereikbaar voor u. Vragen, meldingen, even bijpraten. Onze lijnen zijn kort en we staan voor u klaar.
            </p>
          </section>

          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-orange-500">Ons netwerk</h2>
            <p className="text-gray-700 leading-relaxed">
              Een ruim aanbod aan enthousiaste, vakkundige en betrouwbare zorgprofessionals die direct inzetbaar zijn op uw locatie. Voor korte, maar ook voor langere opdrachten.
            </p>
          </section>

          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-orange-500">Zorg voor Holland ontzorgd</h2>
            <p className="text-gray-700 leading-relaxed">
              Alle zorgprofessionals screenen wij uitvoerig en hebben wij persoonlijk gesproken voordat wij hen voorstellen. Wij begeleiden hen naar de nieuwe opdracht en hebben ook alle benodigde documenten ontvangen. Deze kunt u altijd opvragen bij ons.
            </p>
          </section>
        </div>

        <div className="flex flex-col justify-center relative mt-8 md:mt-0">
          <div className="md:sticky md:top-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Wij <span className="text-orange-500">Zorgen</span>
            </h2>
            <div className="text-2xl md:text-3xl text-gray-700 space-y-2 md:space-y-3">
              <p>voor uw clienten</p>
              <p>voor uw instelling</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction title="Zorginstelling!" />
    </div>
  </div>
);

const Thuishulp = () => (
  <div className="w-full">
    <div className="relative h-[300px] md:h-[500px] mb-8 md:mb-16">
      <img
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80"
        alt="Thuishulp"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50">
        <div className="max-w-4xl mx-auto h-full px-4 py-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-orange-500">Thuishulp</span>{" "}
              <span className="text-gray-800">voor u</span>
            </h1>
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Zorg voor Holland biedt professionele thuishulp die bij u past, zowel via de WMO als particuliere thuishulp. Van huishoudelijke taken tot persoonlijke verzorging, wij staan voor u klaar met betrouwbare en ervaren zorgverleners.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 mb-8">
      <div className="bg-orange-100/50 p-8 rounded-2xl mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">Direct beschikbaar voor u</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Zorg voor Holland heeft meerdere Thuishulp medewerkers die direct inzetbaar zijn. Of u nu zorg nodig heeft via de WMO of kiest voor particuliere thuishulp, wij kunnen snel schakelen om aan uw zorgbehoefte te voldoen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
        <div className="space-y-6 md:space-y-12">
          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-orange-500">Huishoudelijke Taken</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Stofzuigen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Dweilen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Ramen zemen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Afstoffen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Schoonmaken van toilet
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Schoonmaken van keuken
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Schoonmaken van badkamer
              </li>
            </ul>
          </section>

          <section className="bg-orange-50/50 p-8 rounded-2xl hover:bg-orange-50 transition-colors">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-orange-500">Was & Linnen</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Afwassen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Wassen van kleding
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Opvouwen van de was
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Strijken
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Verschonen van beddengoed
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Opruimen
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col justify-center relative mt-8 md:mt-0">
          <div className="md:sticky md:top-8 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                Wij maken het <span className="text-orange-500">verschil</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Bij Zorg voor Holland begrijpen we dat elk huis en elke situatie uniek is. Onze ervaren thuishulpen werken met aandacht en respect, zodat u zich prettig voelt in uw eigen omgeving.
              </p>
            </div>

            <div className="bg-orange-50/50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">Onze Beloftes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  Vaste, vertrouwde gezichten
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  Flexibele planning
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  Persoonlijke aandacht
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction title="Gemeenten en Thuiszorginstellingen!" />
    </div>
  </div>
);

const Contact = () => (
  <div className="w-full">
    <div className="relative h-[300px] md:h-[500px] mb-8 md:mb-16">
      <img
        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=2000&q=80"
        alt="Contact us"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50">
        <div className="max-w-4xl mx-auto h-full px-4 py-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-orange-500">Contact</span>{" "}
              <span className="text-gray-800">met ons</span>
            </h1>
            <p className="text-gray-700 text-base md:text-xl leading-relaxed">
              Heeft u vragen of wilt u meer informatie? Wij staan voor u klaar. Neem gerust contact met ons op via onderstaand formulier of gebruik onze contactgegevens.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 mb-8 grid md:grid-cols-2 gap-8 md:gap-16">
      <div className="bg-orange-50/50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Neem Contact Op</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Naam</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              placeholder="Uw naam"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">Telefoonnummer</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              placeholder="06 12345678"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              placeholder="uw@email.nl"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Bericht</label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white resize-none"
              placeholder="Uw bericht..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 font-semibold"
          >
            Versturen
          </button>
        </form>
      </div>

      <div className="space-y-8">
        <div className="bg-orange-50/50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-orange-500">Contactgegevens</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
            <Home className="w-5 h-5 text-orange-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Ons adres</h3>
                <p className="text-gray-600">
                  Platinaweg 25<br />
                  2544 EZ Den Haag
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
            <PhoneCall className="w-5 h-5 text-orange-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Telefoon</h3>
                <p className="text-gray-600">020 - 123 4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-orange-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                <p className="text-gray-600">info@zorgvoorholland.nl</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-5 h-5 text-orange-500 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">KVK</h3>
                <p className="text-gray-600">88342948</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50/50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-orange-500">Openingstijden</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-gray-600">
              <span>Maandag - Vrijdag</span>
              <span>09:00 - 17:00</span>
            </div>
            <div className="flex justify-between items-center text-gray-600">
              <span>Zaterdag - Zondag</span>
              <span>Gesloten</span>
            </div>
            <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-orange-200">
              24/7 bereikbaar voor spoedzorg
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 mt-16">
      <CallToAction title="Zorgverlener!" />
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Logo className="w-16" />
              <span className="text-orange-500"><span className='font-bold'>Zorg</span> voor Holland</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link to="/zorg" className={`text-gray-600 hover:text-orange-500 ${location.pathname === '/zorg' ? 'text-orange-500' : ''}`}>
                Zorg
              </Link>
              <Link to="/thuishulp" className={`text-gray-600 hover:text-orange-500 ${location.pathname === '/thuishulp' ? 'text-orange-500' : ''}`}>
                Thuishulp
              </Link>
              <Link to="/zzper" className={`text-gray-600 hover:text-orange-500 ${location.pathname === '/zzper' ? 'text-orange-500' : ''}`}>
                ZZP'er
              </Link>
              <Link to="/contact" className={`text-gray-600 hover:text-orange-500 ${location.pathname === '/contact' ? 'text-orange-500' : ''}`}>
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/zorg"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500"
                onClick={closeMenu}
              >
                Zorg
              </Link>
              <Link
                to="/thuishulp"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500"
                onClick={closeMenu}
              >
                Thuishulp
              </Link>
              <Link
                to="/zzper"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500"
                onClick={closeMenu}
              >
                ZZP'er
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-orange-500"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Zorg />} />
        <Route path="/zorg" element={<Zorg />} />
        <Route path="/zzper" element={<ZZPer />} />
        <Route path="/thuishulp" element={<Thuishulp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-orange-500 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zorg voor Holland</h3>
              <p className="text-white/80">
                Professionele zorg en ondersteuning voor een betere kwaliteit van leven.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-white/80">
                Platinaweg 25<br />
                2544 EZ Den Haag<br />
                020 - 123 4567<br />
                info@zorgvoorholland.nl
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Openingstijden</h3>
              <p className="text-white/80">
                Maandag - Vrijdag: 09:00 - 17:00<br />
                24/7 bereikbaar voor spoedzorg
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
            <p>&copy; {new Date().getFullYear()} Zorg voor Holland. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App