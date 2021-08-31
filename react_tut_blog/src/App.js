
import NavBar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

// this is not hmtl it is jsx (which is why it looks differently), babel converts it and renders it to the dom
//this is also the root component all others will be nested inside of it.
function App() {

  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
        {/* switch makes sure only one route shows at a time  */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          {/* passing in paramaters into the route  */}
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route>
            <NotFound path="*"/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
