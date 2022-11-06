import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AuthorPage from "./features/AuthorPage/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink, StyledNavListItem, StyledNavList } from "./styled";

const App = () => (
  <HashRouter>
    <nav>
      <StyledNavList>
        <StyledNavListItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledNavListItem>
      </StyledNavList>
      <Switch>
      <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App