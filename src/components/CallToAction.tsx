import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface CallToActionProps {
  title: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({ title }) => (
  <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-8 md:py-16 mt-8 md:mt-16 rounded-2xl md:rounded-3xl overflow-hidden relative">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBoMTAwdjEwMEgxMDBWMFptLTEwMCAxMDBoMTAwdjEwMEgwVjEwMFoiIGZpbGw9IiNmZmZmZmYwOCIvPjwvc3ZnPg==')] opacity-10"></div>
    <div className="max-w-4xl mx-auto px-4 relative">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Hallo <span className="text-white/90">{title}</span>
          </h2>
          <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
            Klaar om te starten?<br />
            Contact ons.
          </h3>
        </div>
        <div>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            Alle vragen beantwoorden wij graag. Telefonisch, per e-mail, via (Whats)app of kom langs op ons kantoor. Wij staan u graag te woord.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <button className="bg-white text-orange-500 p-3 rounded-full hover:bg-orange-50 transition-colors">
              <Phone className="w-6 h-6" />
            </button>
            <button className="bg-white text-orange-500 p-3 rounded-full hover:bg-orange-50 transition-colors">
              <Mail className="w-6 h-6" />
            </button>
            <button className="bg-white text-orange-500 p-3 rounded-full hover:bg-orange-50 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);