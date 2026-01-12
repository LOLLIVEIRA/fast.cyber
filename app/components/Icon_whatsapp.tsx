'use client';

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = '5511975880682';
  const infoMessage = encodeURIComponent("Vi o site e quero mais informações sobre os serviços.");
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${infoMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 text-white p-4 rounded-full shadow-lg dark:shadow-green-900/50 transition-colors duration-300 z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}