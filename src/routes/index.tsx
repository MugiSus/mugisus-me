import { A } from '@solidjs/router';

export default function Home() {
  return (
    <main>
      <div class='fixed top-0 right-0 flex flex-col gap-0 p-12 text-4xl text-emerald-950'>
        <p>MUGISUS</p>
        <p>MINATO Masayuki</p>
        <p>湊 真之</p>
      </div>

      <div class='fixed bottom-0 left-0 flex flex-col gap-12 p-12 text-3xl text-emerald-950'>
        <ul class='flex flex-col gap-2'>
          <li>
            <a href='https://tmacyes.vercel.app'>
              themostaccurateclockyouveeverseen
            </a>
          </li>
          <li>
            <a href='https://signsystemme.vercel.app'>s.s.m.</a>
          </li>
        </ul>
        <A href='/works' class='w-fit'>
          WORKS
        </A>
        <ul class='flex flex-col gap-2'>
          <li>
            <a href='https://github.com/mugisus'>GitHub: mugisus</a>
          </li>
          <li>
            <a href='https://twitter.com/mugisus'>X: mugisus</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
