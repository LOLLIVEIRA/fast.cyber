import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ISSO É OBRIGATÓRIO PARA HOSPEDAGEM COMUM
  images: {
    unoptimized: true, // Necessário para o comando export funcionar com imagens
  },
};

export default nextConfig;