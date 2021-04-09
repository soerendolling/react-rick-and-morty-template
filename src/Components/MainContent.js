import "./MainContent.css";
import { Switch, Route } from "react-router-dom";

export default function MainContent() {
  return (
    <main className="body-main">
      <Switch>
        <Route path="/characters">
          <div></div>
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <div></div>
        </Route>
      </Switch>
    </main>
  );
}
