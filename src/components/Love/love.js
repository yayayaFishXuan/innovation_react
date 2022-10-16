import React, { Component, useContext, useState, useEffect, useRef } from 'react';

const Love = (props) => {
    const { group } = props;
    return (
        <a href={'/SingleGroup?query='+{group}} className='loveGroup'>
            {group}
        </a>
    )
}
export default Love;