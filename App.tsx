import React from 'react';
import {Provider} from 'react-redux';
import AppNavigation from '@navigation/navigation';
import store from '@state/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
