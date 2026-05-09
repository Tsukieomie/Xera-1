import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppLayout } from "@/components/AppLayout";
import NotFound from "@/pages/not-found";
import Overview from "@/pages/Overview";
import EvidenceBoard from "@/pages/EvidenceBoard";
import Timeline from "@/pages/Timeline";
import Hypotheses from "@/pages/Hypotheses";
import ResearchPlan from "@/pages/ResearchPlan";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Overview} />
      <Route path="/evidence" component={EvidenceBoard} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/hypotheses" component={Hypotheses} />
      <Route path="/plan" component={ResearchPlan} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router hook={useHashLocation}>
            <AppLayout>
              <AppRouter />
            </AppLayout>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
