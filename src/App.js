import React from 'react';
import { SuperAgentProvider } from './Component/Context/SuperAgentState';
import SuperAgent from './Component/SuperAgent/SuperAgent';

function App() {
  return (
    <SuperAgentProvider>
      <div className="App">
        <SuperAgent />
      </div>
    </SuperAgentProvider>
  );
}

export default App;
