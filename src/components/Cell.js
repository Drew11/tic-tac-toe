import React from 'react';

function Cell({playerStep, index, cell}) {

        return <div
            onClick={()=>playerStep(index)}
            className={"cell"}>
            {cell}
        </div>
}

export default Cell;