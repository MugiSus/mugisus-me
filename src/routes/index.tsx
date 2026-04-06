import { A } from '@solidjs/router';
import { ArrowUpRightIcon } from 'lucide-solid';

export default function Home() {
  return (
    <main>
      <div class='fixed top-0 left-0 flex flex-col gap-0 p-12 text-4xl text-emerald-950'>
        <p>MUGISUS</p>
        <p>MINATO Masayuki</p>
        <p class='my-0.5'>湊 真之</p>
      </div>

      <div class='fixed bottom-0 left-0 flex flex-col gap-12 p-12 text-3xl text-emerald-950'>
        <ul class='flex flex-col gap-2'>
          <li class='flex items-center gap-1'>
            <a href='https://tmacyes.vercel.app'>
              themostaccurateclockyouveeverseen
            </a>
            <ArrowUpRightIcon stroke-width={1.5} size={32} />
          </li>
          <li class='flex items-center gap-1'>
            <a href='https://signsystemme.vercel.app'>s.s.m.</a>
            <ArrowUpRightIcon stroke-width={1.5} size={32} />
          </li>
        </ul>
        <A href='/works' class='w-fit'>
          WORKS
        </A>
        <ul class='flex flex-col gap-2'>
          <li class='flex items-center gap-1'>
            <a href='https://github.com/mugisus'>GitHub: mugisus</a>
            <ArrowUpRightIcon stroke-width={1.5} size={32} />
          </li>
          <li class='flex items-center gap-1'>
            <a href='https://twitter.com/mugisus'>X: mugisus</a>
            <ArrowUpRightIcon stroke-width={1.5} size={32} />
          </li>
        </ul>
      </div>
    </main>
  );
}
