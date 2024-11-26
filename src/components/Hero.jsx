/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          A beautiful place every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let's travel a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          The world is full of wonders waiting to be discovered. Embark on the journey of your dreams and turn each destination into a new story to tell
        </p>
        <button className="bg-[#6347F9] text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          get on board today
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4331639/pexels-photo-4331639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/12677482/pexels-photo-12677482.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/27585637/pexels-photo-27585637/free-photo-of-cidade-meio-urbano-por-do-sol-linha-do-horizonte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/5537711/pexels-photo-5537711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/17377646/pexels-photo-17377646/free-photo-of-cidade-meio-urbano-ponto-de-referencia-ponto-historico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/9229056/pexels-photo-9229056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/27700244/pexels-photo-27700244/free-photo-of-panorama-vista-paisagem-ensolarado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/28101141/pexels-photo-28101141/free-photo-of-mar-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/7443678/pexels-photo-7443678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/5850352/pexels-photo-5850352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/28948985/pexels-photo-28948985/free-photo-of-ponte-25-de-abril-ao-entardecer-em-lisboa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/4161862/pexels-photo-4161862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/16951967/pexels-photo-16951967/free-photo-of-cidade-meio-urbano-carros-veiculos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/3815135/pexels-photo-3815135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/11310114/pexels-photo-11310114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;