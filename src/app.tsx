import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import GradientBackground from "~/components/GradientBackground";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <>
          <GradientBackground />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
