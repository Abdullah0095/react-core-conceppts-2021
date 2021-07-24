import React from 'react';
import Counter from './Components/Counter/Counter';
import DynamicUsers from './Components/DynamicUsers/DynamicUsers';
import Mapping from './Components/Mapping/Mapping';
import PropsObject from './Components/PropsObject/PropsObject';
import MapWithFunc from './MapWithFunc/MapWithFunc';

const App = () => {
  return (
    <div>
      <PropsObject></PropsObject>
      <Mapping/>
      <MapWithFunc/>
      <Counter/>
      <DynamicUsers/>
      </div>
  );
};

export default App;