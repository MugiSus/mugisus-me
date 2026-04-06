import { A } from "@solidjs/router";
import { ArrowLeftIcon } from "lucide-solid";

export default function NotFound() {
  return (
    <main class="text-center mx-auto p-4 flex flex-col items-center justify-center h-svh gap-4">
      <h1 class="text-6xl font-thin">404</h1>
      <A href="/" class="flex gap-1 items-center no-underline!">
        <ArrowLeftIcon stroke-width={1} size={20} />
        Back to Home
      </A>
    </main>
  );
}
