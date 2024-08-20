import React from "react";
import { useParams, Link } from "react-router-dom";

const ColorDetail = (colors) => {
    const { color } = useParams();
    let colorVal;
    if(colors.colors.length){
        colors.colors.map(colorItem => {
            if (colorItem.colorName === color){
                colorVal = colorItem.colorValue
            }
    })}
    return(
        <div 
            className="ColorDetail" 
            //set the background color based on the selected color
            style={{ backgroundColor: colorVal }}
        >
            <h1>This is {color}... isn't it beautiful?</h1>
            <Link key={color} to={'/colors/'}>
                GO BACK
            </Link>
        </div>
    )
}

export default ColorDetail;