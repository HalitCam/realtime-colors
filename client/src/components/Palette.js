import React, { useState } from "react";
import { send } from "../socketApi";

function Palette(activeColor) {
    const [color, setColor] = useState("#0000");

    return (
        <div className="palette">

            <input type="color" value={activeColor} onChange={(e) => setColor(e.target.value)} name="" id="" />
            <button type="submit" onClick = {()=>send(color)}> Click </button>
            <br /><br />
            {color}
        </div>
    )
}

export default Palette;