"use client"
import React, { useRef } from 'react'
import { FiLoader } from "react-icons/fi";

function TableSuccess() {
    let inputBg = useRef('');

    return (
        < >
            <tr>
                <td onClick={() => inputBg.current.style.backgroundColor = "blue"}>
                    <input type="radio" ref={inputBg} className='option-input' />
                </td>
                <td className="table_row"  >11/09/24</td>
                <td className="table_row">13:45:59</td>
                <td className="table_row">Money Transfer</td>
                <td className="table_row">Rp123</td>

                <td className="table_row" > <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemdefault_103756.png' style={{ with: '.9rem', height: '1.2rem' }} /><a style={{ width: '1.2rem', marginLeft: '2px' }}>Complete</a></div> </td>

            </tr>
        </>
    )
}

export default TableSuccess
