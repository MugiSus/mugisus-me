import { A } from '@solidjs/router';
import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-solid';
import { For } from 'solid-js';
import type { WorkSummary } from '~/lib/works';

interface WorksPageProps {
  works: WorkSummary[];
}

export default function WorksPage(props: WorksPageProps) {
  return (
    <main class='overflow-clip'>
      <A
        href='/'
        class='fixed top-0 left-0 flex items-start gap-2 p-12 text-3xl'
      >
        <ArrowLeftIcon stroke-width={1.5} size={32} />
        Back
      </A>
      <ul class='flex w-max flex-none flex-col gap-16 overflow-clip p-12 py-[50svh] text-3xl'>
        <For each={props.works}>
          {(work) => (
            <li class='flex items-baseline gap-2 whitespace-nowrap'>
              {work.href ? (
                <a
                  href={work.href}
                  class='flex items-center gap-1'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>{work.title}</span>
                  <ArrowUpRightIcon stroke-width={1.5} size={32} />
                </a>
              ) : (
                <p>{work.title}</p>
              )}
              <time class='w-24 text-lg font-extrabold'>
                {work.date.replaceAll('-', '.')}
              </time>
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}
