import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Me from './Me'
import Projects from './Projects'
import Education from './Education'
import Work from './Work'


const Pages=({user})=>{
    return (<Router>
<Switch>
<Route exact path="/portfolio">
<Me user={user}/>
</Route>


<Route exact path="/portfolio/projects">
<Projects user={user}/>
</Route>

<Route exact path="/portfolio/education">
<Education user={user}/>
</Route>

<Route exact path="/portfolio/work">
<Work user={user}/>
</Route>

</Switch>
</Router>);


};

export default Pages;