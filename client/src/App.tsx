import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MartialArts from "./pages/MartialArts";
import Music from "./pages/Music";
import AITechnology from "./pages/AITechnology";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/martial-arts"} component={MartialArts} />
      <Route path={"/music"} component={Music} />
      <Route path={"/ai-technology"} component={AITechnology} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
