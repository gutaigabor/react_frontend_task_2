import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import { store, persistor } from './store';

import { Router } from './routes';

function App() {
  /* ----- Render ----- */
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/>
      </PersistGate>
    </Provider>
  )
}

export default App
