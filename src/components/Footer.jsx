// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center py-10 bg-[#5237D3]"
      style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}
    >
      <div className="container mx-auto px-4">

        {/* Parte superior do footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Lista de Top Destinations */}
          <ul className="space-y-4">
            <li className="text-[#F4F6FA] font-bold text-lg">Top Destinations</li>
            {["Indonesia, Jakarta", "Maldives, Malé", "Australia, Canberra", "Thailand, Bangkok", "Morocco, Rabat"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-[#F4F6FA] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Lista de Categories */}
          <ul className="space-y-4">
            <li className="text-[#F4F6FA] font-bold text-lg">Categories</li>
            {["Travel", "Lifestyle", "Fashion", "Education", "Food & Drink"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-[#F4F6FA] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Lista de Quick Links */}
          <ul className="space-y-4">
            <li className="text-[#F4F6FA] font-bold text-lg">Quick Links</li>
            {["About", "Contact", "Tours", "Booking", "Terms & Conditions"].map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-[#F4F6FA] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Formulário de Newsletter */}
          <div className="space-y-4">
            <p className="text-[#F4F6FA] font-bold text-lg">Get a Newsletter</p>
            <p className="text-gray-300">
              For the latest deals and tips, travel no further than your inbox
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <button type="submit" className="bg-[#F4F6FA] text-[#6347F9] py-2 rounded-md transition">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-[#F4F6FA] pt-6">

          <a href="#" className="text-2xl font-bold text-[#F4F6FA]">Travel</a>

          <p className="flex mt-4 md:mt-0">
            &copy;<p className='pr-2'> 2022 </p>
            <a href="#" className="text-[#F4F6FA] hover:underline pr-2">codewithsadee</a> 
            <p>All Rights Reserved</p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
