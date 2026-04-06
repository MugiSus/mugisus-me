import { A } from '@solidjs/router';
import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-solid';
import { For } from 'solid-js';
import type { WorkSummary } from '~/lib/works';

interface WorksPageProps {
  works: WorkSummary[];
}

export default function WorksPage(props: WorksPageProps) {
  return (
    <main>
      <ul class='flex min-h-screen flex-col gap-48 p-12 pb-96 text-3xl'>
        <li class='sticky top-12 mb-auto'>
          <A href='/' class='flex items-center gap-2'>
            <ArrowLeftIcon stroke-width={1.5} size={32} />
            Back
          </A>
        </li>
        <For each={props.works}>
          {(work) => (
            <li class='flex items-baseline gap-2'>
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
              <time class='w-24 text-base font-bold'>
                {work.date.replaceAll('-', '.')}
              </time>
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}
