import React from 'react';

function MenuBarItem({ label, Icon, bgColor = '#3D8F92', onClick }) {
  return (
    <div
      className={`items-center text-white text-[0.65rem] px-5 py-4 hover:bg-[${bgColor}] cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex justify-center">
        {Icon && <Icon size={24} />}
      </div>
      <div className='text-center'>{label}</div>
    </div>
  );
}

export default MenuBarItem;
