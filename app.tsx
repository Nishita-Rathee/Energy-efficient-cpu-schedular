import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AppLayout } from "@/components/layout/AppLayout";
import Simulator from "@/pages/Simulator";
import ProcessManager from "@/pages/ProcessManager";
import AlgorithmComparison from "@/pages/AlgorithmComparison";
import PowerMetrics from "@/pages/PowerMetrics";
import ThermalMonitor from "@/pages/ThermalMonitor";
import NotFound from "@/pages/not-found";
import { SimulatorProvider } from "@/context/SimulatorContext";

function Router() {
  console.log("Router rendering");
  return (
    <AppLayout>
      <Switch>
        <Route path="/"><Simulator /></Route>
        <Route path="/processes"><ProcessManager /></Route>
        <Route path="/algorithms"><AlgorithmComparison /></Route>
        <Route path="/thermal"><ThermalMonitor /></Route>
        <Route path="/metrics"><PowerMetrics /></Route>
        <Route><NotFound /></Route>
      </Switch>
    </AppLayout>
  );
}

function App() {
  console.log("App is rendering");
  const queryClient = new QueryClient();
  
  return (
    <SimulatorProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </SimulatorProvider>
  );
}

export default App;
