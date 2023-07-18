import React from 'react';

function FormPopup({isOpen, onClose, mainText, subText}) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">{mainText}</h2>
                <p className="text-gray-700 dark:text-gray-300">{subText}</p>
                <button
                    type="button"
                    className="btn bg-teal-500 hover:bg-teal-400 text-white mt-4"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default FormPopup;
