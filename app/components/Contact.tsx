'use client';
import React, { useState } from 'react';
import { SendIcon, PhoneIcon, PackageIcon, Building2Icon } from 'lucide-react';
import Image from 'next/image';


import office_icon from '../../public/office_icon.png' 

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // O número do WhatsApp (mantido do seu código)
  const whatsappNumber = '5511975880682'; 
  
  // Mensagem para o link de contato (Atendimento 24h)
  const infoMessage = encodeURIComponent("Vi o site e quero mais informações sobre os serviços.");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Cria o texto da mensagem com formatação Markdown (negrito) para WhatsApp
    const text = `*✨ Nova Avaliação/Mensagem Recebida ✨*
----------------------------------------
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Mensagem:* ${formData.message}
----------------------------------------`;

    // 2. Codifica o texto para ser seguro na URL
    const encodedText = encodeURIComponent(text);

    // 3. Monta a URL do WhatsApp API
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;

    // 4. Abre o WhatsApp Web/App em uma nova aba
    window.open(url, "_blank");

    // Opcional: Limpar o formulário após o envio
    // setFormData({ name: '', email: '', message: '' }); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return <section id="contato" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Deixe sua Avaliação
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Queremos ouvir sua opinião!</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Seu Nome
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-800 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                  placeholder="Digite seu nome" 
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Seu E-mail
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-800 outline-none transition-all bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Sua Avaliação
                </label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-800 outline-none transition-all resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400" 
                  placeholder="Compartilhe sua experiência..." 
                  required 
                />
              </div>
              <button type="submit" className="w-full bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span>Enviar Avaliação via WhatsApp</span>
                <SendIcon size={20} />
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            {/* 24h Support */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-8 rounded-2xl border border-green-200 dark:border-green-700 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Agendamentos
              </h3>
              {/* === ALTERAÇÃO FEITA AQUI: Adicionado o parâmetro 'text' na URL === */}
              <a 
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${infoMessage}`} 
                className="inline-flex items-center space-x-3 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold text-lg transition-colors"
              >
                <PhoneIcon size={24} />
                <span>+55 11 97588-0682</span> 
              </a>
            </div>
            {/* Office Package */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                {/* Substituído o componente Next/Image e a imagem estática pelo ícone Building2Icon da Lucide */}
                <div >
                  <Image src={office_icon} alt='icone do office'/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Adquira seu Pacote Office
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Licenças originais Microsoft</li>
                    <li>• Suporte completo incluído</li>
                    <li>• Instalação e configuração</li>
                    <li>• Preços competitivos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
