import React from 'react';
import Cell from "./Cell"

function Board({cells, playerStep}) {

    return <div
    className={"board"}
    >{
        cells.map((cell, index)=><Cell
                            playerStep={playerStep}
                            index={index}
                            cell={cell}
                            key={index}
                            />
        )
    }
    </div>

}

export default Board;