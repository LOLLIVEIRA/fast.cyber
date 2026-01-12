'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';

import black_logo from '../../public/black_logo.png'
import Image from 'next/image';


export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const techImages = ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % techImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return <section id="início" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Image src={black_logo} alt="FAST CYBER Logo" className="w-full max-w-lg dark:invert" />
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Segurança e Proteção de Dados, Manutenções em Notebooks e Desktops
              e Vendas de Licenças Pacote Office Originais e Vitalícias.
            </p>
            <button className="bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Conheça Nossas Soluções</span>
              <ArrowRightIcon size={20} />
            </button>
          </div>
          <div className="relative h-80 md:h-96">
            <div className="absolute inset-0 bg-cyan-500 dark:bg-cyan-600 rounded-3xl transform rotate-3 opacity-10"></div>
            {techImages.map((image, index) => <img key={index} src={image} alt={`Technology ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
          </div>
        </div>
      </div>
    </section>;
}