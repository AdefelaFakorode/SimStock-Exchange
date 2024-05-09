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

        if(amount < 0){
            return
        }
        else{
            setBalance((parseFloat(balance) + amount).toFixed(2));
            onClose();
        }
    }
    
    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="border-b-2 border-gray-300 mb-4">
                    <h1 className="font-bold text-center text-xl text-gray-700">
                        Enter Amount Below
                    </h1>
                </div>
    
                <div className="px-4">
                    <label htmlFor="Curr-PopUp" className="font-semibold">Amount (USD $)</label>
                    <input id="Curr-PopUp" type="text" className="border border-gray-300 p-3 rounded-lg w-full mt-2 mb-6" placeholder="$50.00"/>
                </div>
                <div className="text-center">
                    <button onClick={onClose} className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-150 m-2">
                        Cancel
                    </button>
    
                    <button onClick={handleOnConfirm} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-150 m-2">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );    
}

export default CurrencyPopUp;