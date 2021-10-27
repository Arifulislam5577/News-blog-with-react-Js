import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact key="general" path="/">
          <Main category="general"></Main>
        </Route>
        <Route exact key="business" path="/business">
          <Main category="business"></Main>
        </Route>
        <Route exact key="entertainment" path="/entertainment">
          <Main category="entertainment"></Main>
        </Route>
        <Route exact key="health" path="/health">
          <Main category="health"></Main>
        </Route>
        <Route exact key="science" path="/science">
          <Main category="science"></Main>
        </Route>
        <Route exact key="sports" path="/sports">
          <Main category="sports"></Main>
        </Route>
        <Route exact key="technology" path="/technology">
          <Main category="technology"></Main>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
