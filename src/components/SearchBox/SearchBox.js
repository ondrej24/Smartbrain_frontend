import React from "react";
import './SearchBox.css';

const SearchBox = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className="f4 white">
                {'Detect the faces on the image'}
            </p>
            <div className="center">
                <div className="searchBoxWidth form center pa4 br3 shadow-5">
                    <input 
                        type='text' 
                        placeholder="Search faces in the image" 
                        className="w-70 f4 pa2"
                        onChange={ onInputChange }>
                    </input>
                    <button 
                        className="w-30 bg-gray bn ml2 f4 ph3 pv2 white link grow"
                        onClick={ onButtonSubmit }>
                        Detect
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchBox;