import React from 'react';

function MenuBarItem({ label, Icon, onClick }) {
  return (
    <div
      className={`items-center text-white text-[0.60rem] px-3 py-2 hover:bg-[#3D8F92] cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex justify-center">
        {Icon && <Icon size={20} />}
      </div>
      <div className='text-center'>{label}</div>
    </div>
  );
}

export default MenuBarItem;
