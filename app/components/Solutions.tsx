import React from 'react';
// Ícones ajustados para refletir melhor os serviços da imagem
import { MonitorIcon, CloudIcon, Zap, ShieldIcon, BarChart3Icon, PhoneIcon, CpuIcon, InfinityIcon, LinkIcon } from 'lucide-react'; 

export function Solutions() {
  const solutions = [{
    // ICONE: HARDWARE
    icon: MonitorIcon,
    title: 'Manutenções em Hardwares',
    description: 'Manutenção Rápida e Confiável. Realizamos consertos, upgrades e otimizações em seu notebook ou desktop, garantindo máxima performance e prolongando a vida útil de seus equipamentos com qualidade e agilidade.'
  }, {
    // ICONE: BACKUP
    icon: CloudIcon,
    title: 'Backups',
    description: 'Backup Confiável e Completo. Oferecemos cópias de segurança automáticas e seguras, garantindo a recuperação rápida e total de seus dados em caso de falhas ou imprevistos. Sua tranquilidade digital garantida.'
  }, {
    // ICONE: CONECTIVIDADE (usei Zap para representar a conexão rápida)
    icon: Zap, 
    title: 'Conectividade',
    description: 'Segurança e Conectividade Total. Gerenciamos e configuramos seu Firewall e DNS para proteção máxima. Realizamos crimpagem de cabos e configuramos seus roteadores e Access Points, garantindo uma rede rápida, estável e segura.'
  }, {
    // ICONE: SEGURANÇA
    icon: ShieldIcon,
    title: 'Segurança',
    description: 'Sua segurança começa aqui. Nossa consultoria especializada identifica vulnerabilidades e analisa malwares. Oferecemos Threat Hunting, Baseline de Segurança e Proteção de Dados, com serviços de Resposta a Incidentes e Perícia Forense para garantir a integridade total do seu ambiente.'
  }, {
    // ICONE: DASHBOARDS
    icon: BarChart3Icon,
    title: 'Dashboards',
    description: 'Dashboards Inteligentes. Transformamos seus dados complexos em painéis visuais, claros e interativos. Obtenha insights rápidos e precisos em tempo real para otimizar a tomada de decisões e impulsionar os resultados do seu negócio.'
  }, {
    // ICONE: SUPORTE TÉCNICO (usei Phone/headset)
    icon: PhoneIcon, 
    title: 'Suporte Técnico',
    description: 'Suporte Técnico Ágil e Eficaz. Oferecemos assistência remota e presencial para solucionar rapidamente problemas de software e hardware. Garantimos que sua tecnologia funcione sem interrupções e com máxima produtividade.'
  }, {
    // ICONE: IOT (usei CpuIcon para representar a inteligência do "Internet das Coisas")
    icon: CpuIcon,
    title: 'IOT (Internet das Coisas)',
    description: 'Inovação com IoT. Conectamos seus dispositivos e sistemas para automação inteligente. Criamos e implementamos soluções de Internet das Coisas que geram dados acionáveis, aumentam a eficiência operacional e impulsionam a transformação digital do seu negócio.'
  }, {
    // ICONE: AUTOMAÇÕES
    icon: InfinityIcon,
    title: 'Automações',
    description: 'Otimização e Produtividade. Automatizamos processos e tarefas repetitivas em sua empresa, liberando tempo e reduzindo erros. Implementamos soluções de automação sob medida para maximizar a eficiência e acelerar o crescimento do seu negócio.'
  }];

  return <section id="soluções" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">SOLUÇÕES</h2>
          <div className="h-1 w-24 bg-cyan-500 dark:bg-cyan-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 group">
                <div className="bg-cyan-50 dark:bg-cyan-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-600 transition-colors duration-300">
                  <Icon className="text-cyan-500 dark:text-cyan-400 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>;
          })}
        </div>
      </div>
    </section>;
}