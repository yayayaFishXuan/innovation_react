import React from 'react';
export const Data = () => {
  // let tipshow = sessionStorage.getItem('tk') === 'true'
  // let backtopshow = false

  const [address, setAddress] = React.useState('');
  const [isinstall, setIsinstall] = React.useState(false);
  // const [tipShow, setTipShow] = React.useState(tipshow);
  // const [backTopShow, setBackTopShow] = React.useState(backtopshow);
  return {
    address,
    setAddress,
    isinstall, 
    setIsinstall, 
    // tipShow, 
    // setTipShow, 
    // backTopShow, 
    // setBackTopShow
  };
};