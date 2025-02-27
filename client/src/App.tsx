import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Information from "@/pages/Information";
import Ultraviolet from "@/pages/Ultraviolet";
import DogeUnblocker from "@/pages/DogeUnblocker";
import HolyUnblocker from "@/pages/HolyUnblocker";
import NetShield from "@/pages/NetShield";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/information" component={Information} />
        <Route path="/ultraviolet" component={Ultraviolet} />
        <Route path="/doge-unblocker" component={DogeUnblocker} />
        <Route path="/holy-unblocker" component={HolyUnblocker} />
        <Route path="/net-shield" component={NetShield} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
