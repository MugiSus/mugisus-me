import { A } from '@solidjs/router';
import { ArrowUpRightIcon } from 'lucide-solid';

export default function HomePage() {
  return (
    <main>
      <div class='fixed top-0 left-0 flex flex-col gap-0 p-12 text-4xl text-emerald-950'>
        <p>MUGISUS</p>
        <p>Masayuki Minato</p>
        <p class='mt-1'>湊 真之</p>
      </div>

      <div class='fixed bottom-0 left-0 flex flex-col gap-12 p-12 text-3xl text-emerald-950'>
        <ul class='flex flex-col gap-2'>
          <li>
            <a
              href='https://tmacyes.vercel.app'
              class='flex w-fit items-center gap-1'
            >
              themostaccurateclockyouveeverseen
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
          <li>
            <a
              href='https://signsystemme.vercel.app'
              class='flex w-fit items-center gap-1'
            >
              s.s.m.
              <ArrowUpRightIcon stroke-width={1.5} size={32} />
            </a>
          </li>
        </ul>
        <A href='/works' class='w-fit'>
          others
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
        </ul>
      </div>
    </main>
  );
}
