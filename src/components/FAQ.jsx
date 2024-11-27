// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: 'Como faço para reservar uma viagem?',
      answer: 'Você pode reservar sua viagem diretamente em nosso site, escolhendo o destino, datas e quantidade de pessoas no nosso formulário de cotação.',
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos pagamentos via cartão de crédito, boleto bancário e transferências bancárias.',
    },
    {
      question: 'Posso alterar a data da minha reserva?',
      answer: 'Sim, você pode alterar a data da sua reserva. Entre em contato com nosso suporte para mais informações.',
    },
    {
      question: 'Como posso entrar em contato com o suporte?',
      answer: 'Você pode nos contatar via email, telefone ou através do nosso chat ao vivo disponível no site.',
    },
    {
      question: 'O que está incluso nos pacotes de viagem?',
      answer: 'Nossos pacotes incluem passagens aéreas, hospedagem, passeios e alguns até alimentação. Verifique os detalhes do pacote na página de descrição.',
    },
  ];

  return (
    <section className="py-40 bg-lightGray">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center text-[#6347F9] mb-8">Perguntas Frequentes</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left text-lg font-medium text-gray-800 hover:text-[#6347F9] focus:outline-none flex items-center justify-between"
              >
                <span>{item.question}</span>
                <span className="ml-2">
                  {activeIndex === index ? (
                    <FiChevronUp className="text-[#6347F9]" /> 
                  ) : (
                    <FiChevronDown className="text-[#6347F9]" />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
