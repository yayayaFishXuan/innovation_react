import React,{ createContext } from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import Page from './Page'
import {Data} from './data';

export const InitContext = createContext();
function MyComponent() {
  const data = Data();
  return (

    <InitContext.Provider value={data}>
     {/* value就是通過context 共享數據 */}
      <Page/>
    </InitContext.Provider>
  );

}
  ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

export default MyComponent;