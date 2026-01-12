import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';

import white_logo from '../../public/white_logo.png'

export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <Image src={white_logo} alt="FAST CYBER Logo" className="w-[150px] max-w-lg" />
            
            <p className="text-gray-400 dark:text-gray-500 text-sm">SOLUÇÕES EM TECNOLOGIA</p>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#início" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#soluções" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#consultoria" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  Política Geral
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 dark:text-gray-500 text-sm">São Paulo</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="text-cyan-500 dark:text-cyan-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 dark:text-gray-500 text-sm">+55 11 97588-0882</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon className="text-cyan-500 dark:text-cyan-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 dark:text-gray-500 text-sm">
                  contato@fastcyber.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Copyright {currentYear} © Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>;
}