import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';

export function Testimonials() {
  const testimonials = [{
    name: 'Jéssica P.',
    text: 'Estou tão feliz com meu Office. Obrigada mesmo!',
    rating: 5
  }, {
    name: 'Sabrina M.',
    text: 'Você foi um anjo real. Muito obrigada mesmo. Obrigado por me ajudar a proteger os meus dados e minhas Redes Sociais.',
    rating: 5
  }, {
    name: 'Leandro L.',
    text: 'Muito obrigado pelo atendimento e orientação ao meu Desktop.',
    rating: 5
  }, {
    name: 'Luciane A.',
    text: 'Tu é top mesmo, né? Super Atencioso! Obrigada!',
    rating: 5
  }, {
    name: 'Fabio V.',
    text: 'Lembrava que não era difícil, mas não lembrava o caminho.. Obrigado pelo suporte de sempre!',
    rating: 5
  }, {
    name: 'Marcus Vinícius L.',
    text: 'Deu tudo certo, do jeito que falou. Obrigado pelo atendimento de sempre!',
    rating: 5
  }];

  return <section id="avaliações" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AVALIAÇÕES</h2>
          <div className="h-1 w-24 bg-cyan-500 dark:bg-cyan-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <QuoteIcon className="text-cyan-500 dark:text-cyan-400 mb-4" size={32} />
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="text-yellow-400 fill-yellow-400 dark:text-yellow-500 dark:fill-yellow-500" size={18} />)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}