import React, { useEffect } from 'react';

function CurrencyPopUp({ onClose, balance, setBalance }) {
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleOnConfirm();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);


    function handleOnClose(e) {
        if (e.target.id === "container") {
            onClose();
        }
    }

    function handleOnConfirm() {
        let amount = parseFloat(document.getElementById('Curr-PopUp').value);

        if (isNaN(amount)) {
            amount = 0.00;
        }
        
        setBalance((parseFloat(balance) + amount).toFixed(2));
        onClose();
    }
    
    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20">
            <div className="bg-white p-4 rounded">
                <div className="border-b-2 border-black mb-5">
                    <h1 className="font-bold text-center text-xl text-gray-70">
                        ENTER AMOUNT BELOW
                    </h1>
                </div>
    
                <div className="">
                    <label htmlFor="Curr-PopUp" className="font-semibold">Total Balance (USD $) </label>
                    <input id="Curr-PopUp" type="text" className="border border-gray-700 p-2 rounded mb-5" placeholder="$50.00"/>
                    
                </div>
                <div className="text-center">
                    <button onClick={onClose} className="px-5 py-2 bg-red-500 text-white rounded m-2">
                        Cancel
                    </button>

                    <button onClick={handleOnConfirm} className="px-5 py-2 bg-blue-500 text-white rounded m-2">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CurrencyPopUp;