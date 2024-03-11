'use client';

import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function CategoryQuickView() {

  const [visible, setVisible] = useState(true);
  const [categories, setCategories] = useState([
    'Fresh Meat', 'Vegetables', 'Fruit & Nut Gifts', 'Fresh Berries',
    'Ocean Foods', 'Butter & Eggs', 'Fastfood', 'Fresh Onion', 'Papayaya & Crisps'
  ]);

  return (
    <div className="relative">
      <div onClick={() => setVisible(!visible)} className="w-[90%] inline-flex items-center justify-between font-bold text-white bg-orange-400 border border-orange-400 p-2 hover:cursor-pointer">
        <div className="ml-5">
          <FontAwesomeIcon icon={faBars} className="mr-2"/>
          <span>All Categories</span>
        </div>
        <FontAwesomeIcon icon={faAngleDown} className="mr-2"/>
      </div>

      <div className={`${visible ? 'opacity-100' : 'opacity-0'} absolute w-[90%] right-[10%] z-10 px-6 py-4 border border-gray-200 transition-opacity duration-700 ease-out`}>
        <ul>
          {
            categories.map((category: any, index: number) => (
              <li key={index} className="p-1">
                <a href="#" className="text-gray-600">
                  {category}
                </a>  
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
