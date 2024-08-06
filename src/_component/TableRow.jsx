import React, { useRef } from 'react'
import { FiLoader } from "react-icons/fi";

function TableRow() {
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

                <td className="table_row" > <div style={{display:'flex',alignItems:'center' }}><FiLoader style={{with:'.8vw',height:'1vw'}} /><a style={{width:'1vw',marginLeft:'2px'}}>Progress</a></div> </td>

            </tr>
        </>
    )
}

export default TableRow
