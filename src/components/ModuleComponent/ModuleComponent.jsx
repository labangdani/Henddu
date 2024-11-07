import React from 'react';

function ModuleComponent({ label, moduleIcon, onClick }) {
    return (
        <div
        >
            <button onClick={() => setCurrentTab("1")} className={`py-4 px-10 border-b-4 ${currentTab === '2' ? 'border-[#0D7377] text-[#0D7377]' : 'border-gray-500 text-gray-400'} `}>
                <div className="flex justify-center">
                    <img className="mb-2" src={moduleIcon} alt="capture monitoringicon" />
                </div>
                <span className="capitalize text-center">{label}</span>
            </button>
        </div>
    );
}

export default ModuleComponent;
