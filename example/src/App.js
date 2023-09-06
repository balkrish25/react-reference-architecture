import React from 'react';
import TestAPIServices from './TestAPIServices';
import { ErrorBoundary } from 'demo';

const App =()=>{
  const baseUrl = "https://jsonplaceholder.typicode.com"
  
  return (
    <div>
      <>
        <ErrorBoundary>
        <TestAPIServices baseUrl={baseUrl}/>
        </ErrorBoundary>
      </>
    </div>
  ); 
}
export default App;
