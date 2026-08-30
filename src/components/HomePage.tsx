import { A } from '@solidjs/router';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-solid';

export default function HomePage() {
  return (
    <main>
      <div class='fixed top-0 left-0 flex flex-col gap-0.5 p-12 text-4xl font-medium'>
        <h1>
          <A href='/'>mugisus</A>
        </h1>
        <p>
          <A href='/'>masayuki minato</A>
        </p>
      </div>

      <div class='fixed bottom-0 left-0 flex flex-col gap-12 p-12 text-3xl'>
        <ul class='flex flex-col gap-2'>
          <li>
            <a
              href='https://waazu.mugisus.me'
              class='flex w-fit items-center gap-1'
            >
              WAAZU
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
          <li>
            <a
              href='https://wakita.sfc.keio.ac.jp/'
              class='flex w-fit items-center gap-1'
            >
              Akira Wakita Lab. Website
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
          <li>
            <a
              href='https://sundial.mugisus.me'
              class='flex w-fit items-center gap-1'
            >
              Sundial
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
        </ul>
        <A href='/works' class='flex w-fit items-center gap-1'>
          others
          <ArrowRightIcon stroke-width={1.5} size={32} />
        </A>
        <ul class='flex flex-col gap-2'>
          <li>
            <a
              href='https://github.com/mugisus'
              class='flex w-fit items-center gap-1'
            >
              GitHub
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/mugisus'
              class='flex w-fit items-center gap-1'
            >
              X
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/mugisus_/'
              class='flex w-fit items-center gap-1'
            >
              Instagram
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
