import {Suspense} from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import routerList from "./router"

function App() {
  return (
    <Suspense fallback={<h1></h1>}>
      <HashRouter>
        <Switch>
          {
            routerList.map((item,index)=>{
              return <Route key={index} path={item.path} component={item.component}></Route>
            })
          }
          <Redirect to="/"/>
        </Switch>
      </HashRouter>
    </Suspense>
  );
}

export default App;
