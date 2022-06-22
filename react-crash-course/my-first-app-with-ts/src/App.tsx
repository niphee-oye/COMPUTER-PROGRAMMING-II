import React from 'react';
import HelloWorld from './components/HelloWorld2';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
const App: React.FC = () => {
return (
    <div>
        <HelloWorld />
        <HelloWorld2 name="Pius" />
        <HelloWorld2 />
        <HelloWorld3 name="Joy"/>
        <HelloWorld4 />
    </div>
);
}
export default App;