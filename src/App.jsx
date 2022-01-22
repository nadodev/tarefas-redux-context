import React from "react";
import Task from "./components/task";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import ContextProvider from "./context/context";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContextProvider>
          <Task />
        </ContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
