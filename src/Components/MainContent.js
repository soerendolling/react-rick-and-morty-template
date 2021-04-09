import "./MainContent.css";
import { Switch, Route } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="body-main">
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}
