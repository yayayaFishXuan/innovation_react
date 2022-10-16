import React, { Component, useContext, useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

const Love = (props) => {
    let history = useHistory();
    const { group } = props;
    return (
        <div className='loveGroup' onClick={() => {history.push({ pathname:"/SingleGroup", search:'?query='+group })}}>
            {group}
        </div>
    )
}
export default Love;