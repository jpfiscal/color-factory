import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ColorIndex.css';

const ColorIndex = ({colors}) => {
    return(
        <div className="ColorIndex">
            <h1>Welcome to the color factory.</h1>
            <Link to={`/colors/new`}>Add a color </Link>
            {colors.length > 0 ? (
                <>
                    <h3>Please select a color.</h3>
                    {colors.map(color => (
                            <Link key={color.colorName} to={`/colors/${color.colorName}`}>
                                {color.colorName}
                            </Link>
                        )
                    )}
                </>
            ): <p> No colors added yet.</p>
            }
        </div>
    );
}

export default ColorIndex;