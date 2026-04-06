import { A } from '@solidjs/router';
import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-solid';
import { For } from 'solid-js';

export default function WorksPage() {
  return (
    <main>
      <ul class='flex min-h-screen flex-col gap-2 p-12 text-3xl'>
        <li class='sticky top-12 mb-6'>
          <A href='/' class='flex items-center gap-2'>
            <ArrowLeftIcon stroke-width={1.5} size={32} />
            Back to Home
          </A>
        </li>
        <For each={Array(40).fill(null)}>
          {() => (
            <li class='ml-10 flex items-center gap-1'>
              <a href='https://signsystemme.vercel.app'>s.s.m.</a>
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}
