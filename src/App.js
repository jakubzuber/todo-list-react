import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import AuthorPage from "./features/AuthorPage/Author";
import TasksList from "./features/TasksPage/TasksList";
import TaskPage from "./features/TasksPage/TaskPage";
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
          <TasksList />
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