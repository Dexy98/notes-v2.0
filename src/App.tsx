import React from 'react';

import ListItem from './components/ListItem';
import { AddToForm } from './components/AddToForm';

export const App: React.FC = () => {

  return (
    <div className="">
      <h1>App component. title Note</h1>
      <AddToForm/>
      <ListItem />
    </div>
  );
};

