// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#6347F9] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Coluna 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Sobre Nós</h2>
          <p className="text-sm">
            Conectando você aos melhores destinos do mundo com praticidade e segurança.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Links Rápidos</h2>
          <ul className="space-y-2">
            <li><a href="/destinos" className="hover:text-gray-300">Destinos</a></li>
            <li><a href="/pacotes" className="hover:text-gray-300">Pacotes</a></li>
            <li><a href="/contato" className="hover:text-gray-300">Contato</a></li>
            <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contato</h2>
          <p className="text-sm">Email: suporte@viajante.com</p>
          <p className="text-sm">Telefone: (11) 99999-9999</p>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Viajante. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
