import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewColor.css';

const NewColor = ({ addColor }) => {
    const navigate = useNavigate();
    const INITIAL_STATE = {
        colorName: '',
        colorValue: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor({...formData});
        setFormData(INITIAL_STATE);
        navigate('/colors/');
    }
    return(
        <form onSubmit={handleSubmit} className='NewColorForm'>
            <div className='InputGroup'> 
                <label htmlFor="colorName">Color Name</label>
                <input 
                    id="colorName"
                    type="text"
                    name="colorName"
                    placeholder="Enter the name of the color"
                    value={formData.colorName}
                    onChange={handleChange}
                />
            </div>
            <div className='InputGroup'> 
                <label htmlFor="colorValue">Color Value</label>
                <input 
                    id="colorValue"
                    type="color"
                    name="colorValue"
                    value={formData.colorValue}
                    onChange={handleChange}
                />
            </div>
            <button>Add this color</button>
        </form>
    )
}

export default NewColor;