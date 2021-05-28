import { Suspense, lazy } from "react"; // loads content as needed
import { Route, Switch } from "react-router-dom";

const Auth = lazy(() => import("./components/Auth/Auth"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Home = lazy(() => import("./components/Home/Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
