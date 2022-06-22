import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
const App = () => {
return (
<div>
<HelloWorld name = "Nifemi" />
<HelloWorld2 name="Pius"/>
<HelloWorld2 />
<HelloWorld3 name="Joy"/>
</div>
);
}
export default App;