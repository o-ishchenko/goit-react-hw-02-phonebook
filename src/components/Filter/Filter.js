import React from "react";
import { nanoid } from 'nanoid'
import propTypes from "prop-types";
import s from './Filter.module.css'

let filterId = nanoid()
const Filter = ({ value, onChange }) => (
    <div className={ s.filter}>
        <label htmlFor={filterId}>Find contacts by name</label>
        <input
            type="text"
            name="filter"
            id={filterId}
            value={value}
            onChange={onChange}                
            />
        </div>
);
Filter.propTypes = {
    value: propTypes.string.isRequired,
}

export default Filter