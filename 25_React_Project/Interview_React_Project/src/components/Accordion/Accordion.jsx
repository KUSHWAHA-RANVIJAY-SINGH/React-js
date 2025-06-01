import React, {  useState } from 'react'
import Data from './data'
import './style.css'


function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [enblemultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleClick(getcurrentid){
        setActiveIndex(getcurrentid === activeIndex ? null : getcurrentid);
    }
    function handleMultiClick(getcurrentid) {
        if (enblemultiSelection) {
            if (multiple.includes(getcurrentid)) {
                setMultiple(multiple.filter(id => id !== getcurrentid));
            } else {
                setMultiple([...multiple, getcurrentid]);
            }
        } else {
            setActiveIndex(getcurrentid === activeIndex ? null : getcurrentid);
        }
    }

  return (
    <>
       <div className='header'>
        <h1>Accordion</h1>
       </div>
        
        <div className='wrapper'>

        <div className="accordion">
        <button onClick={() => setEnableMultiSelection(!enblemultiSelection)} className='btn'>
            Enable Multi Selection
        </button>

        {Data && Data.length > 0 ? (
            <div className='item'>
            {Data.map((item) => {
                const isOpen = enblemultiSelection ? multiple.includes(item.id) : activeIndex === item.id;
                return (
                    <div
                        key={item.id}
                        onClick={enblemultiSelection ? () => handleMultiClick(item.id) : () => handleSingleClick(item.id)}
                        className='accordion-item'
                    >
                        <h2 className='accordion-header'>{item.question}</h2>
                        <span>{isOpen ? '-' : '+'}</span>
                        {isOpen && (
                            <div className='content'>
                                {item.answer}
                            </div>
                        )}
                    </div>
                );
            })}
            </div>
           
        ) : (
            <div className='error'>No Data Found</div>
        )}
        </div>
        </div>

    </>
  )
}

export default Accordion