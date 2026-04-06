import { A } from '@solidjs/router';
import { ArrowLeftIcon } from 'lucide-solid';

export default function NotFound() {
  return (
    <main class='mx-auto flex h-svh items-center justify-center gap-4 p-4 text-center'>
      <h1 class='text-2xl font-light'>404</h1>
      <div class='h-6 w-px bg-emerald-950' />
      <A href='/' class='flex items-center gap-1 no-underline!'>
        <ArrowLeftIcon stroke-width={1} size={20} />
        Back to Home
      </A>
    </main>
  );
}
