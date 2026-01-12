import React from 'react';
import { CheckCircleIcon } from 'lucide-react';

export function Consulting() {
  // O conteúdo principal foi movido para um array estruturado
  const consultingTopics = [
    {
      title: 'Segurança e Proteção Digital Total',
      description: 'De Análise de Vulnerabilidades a Perícia Forense, incluindo Threat Hunting e Resposta a Incidentes. Fazemos a Blindagem de Redes Sociais e E-mails, gerenciamos seu Firewall e DNS e definimos seu Baseline de Segurança.',
    },
    {
      title: 'Redes e Conectividade Total',
      description: 'Projetamos e configuramos Redes, Roteadores e Access Points, com serviços de cabeamento estruturado (incluindo crimpagem de cabos), assegurando uma comunicação rápida e estável.',
    },
    {
      title: 'Eficiência e Inovação',
      description: 'Implementamos projetos de IoT e Automações para otimizar processos. Criamos Dashboards que convertem dados complexos em insights visuais para decisões estratégicas.',
    },
    {
      title: 'Continuidade e Suporte',
      description: 'Garanta a longevidade dos seus ativos com Manutenção de Hardware e um Suporte Técnico ágil. Sua tranquilidade é completa com Câmeras de Monitoramento e Serviços de Backup robustos.',
    },
  ];

  // Serviços chave, removidos, mas a estrutura de lista será replicada usando <ul>

  return <section id="consultoria" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">CONSULTORIA</h2>
          <div className="h-1 w-24 bg-cyan-500 dark:bg-cyan-400 mx-auto"></div>
        </div>
        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          {/* Título e Descrição Principal */}
          <h3 className="text-2xl font-bold mb-8 leading-snug">
            Nossa consultoria especializada abrange todo o ciclo de vida da sua TI, garantindo um ambiente tecnológico seguro, eficiente e preparado para o crescimento.
          </h3>
          
          {/* Lista de tópicos no formato de "bolinhas" (ul/li) */}
          <ul className="list-disc pl-5 space-y-4 text-cyan-50 dark:text-cyan-100 text-lg leading-relaxed">
            {consultingTopics.map((topic, index) => (
              <li key={index}>
                <span className="font-bold">{topic.title}:</span> {topic.description}
              </li>
            ))}
          </ul>

          <div className="text-center mt-12 pt-6 border-t border-cyan-300 dark:border-cyan-400">
             <p className="text-xl font-semibold text-white">Obtenha uma Consultoria completa para um futuro digital seguro e produtivo.</p>
          </div>
        </div>
      </div>
    </section>;
}