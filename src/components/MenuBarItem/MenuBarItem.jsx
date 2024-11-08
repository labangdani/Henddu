import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//
function MenuBarItem({ label, to, Icon }) {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);


  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(location.pathname === to)
  }, [location])

  const onClickHandle = () => {
    navigate(to,)
  }

  return (
    <div onClick={onClickHandle} className={`items-center text-white text-[0.60rem] px-3 py-2 hover:bg-[#3D8F92] cursor-pointer ${active ? 'bg-[#3D8F92]' : ''} `}>
      <div className="flex justify-center">
        {Icon && <Icon size={20} />}
      </div>
      <div className='text-center'>{label}</div>
    </div>
  );
}

export default MenuBarItem;
