import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Home, PhoneCall, Mail, Briefcase } from "lucide-react";

export const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Versturen...");

    emailjs
      .sendForm(
        "service_1p0ughn", // Replace with your EmailJS service ID
        "template_g13si3q", // Replace with your EmailJS template ID
        form.current,
        "5qUMTiN78sbC7JRea" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Email succesvol verzonden!");
          form.current.reset();
        },
        (error) => {
          setStatus("Verzenden mislukt, probeer opnieuw.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mb-8 grid md:grid-cols-2 gap-8 md:gap-16">
      <div className="bg-orange-50/50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Neem Contact Op</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Naam</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              placeholder="Uw naam"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">Telefoonnummer</label>
            <input
              type="tel"
              name="user_phone"
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              placeholder="06 12345678"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              placeholder="uw@email.nl"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">Bericht</label>
            <textarea
              name="message"
              rows={6}
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white resize-none"
              placeholder="Uw bericht..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 font-semibold"
          >
            Versturen
          </button>
          {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
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
                <p className="text-gray-600">Platinaweg 25, 2544 EZ Den Haag</p>
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
  );
};
