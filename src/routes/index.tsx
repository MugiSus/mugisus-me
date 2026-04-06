import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <div class="text-4xl flex fixed right-0 top-0 p-12 text-emerald-950 flex-col gap-0">
        <p>MUGISUS</p>
        <p>MINATO Masayuki</p>
        <p>湊 真之</p>
      </div>

      <div class="fixed text-3xl text-emerald-950 left-0 bottom-0 p-12 flex gap-12 flex-col">
        <ul class="flex flex-col gap-2">
          <li>
            <a href="https://tmacyes.vercel.app">themostaccurateclockyouveeverseen</a>
          </li>
          <li>
            <a href="https://signsystemme.vercel.app">s.s.m.</a>
          </li>
        </ul>
        <A href="/works" class='w-fit'>WORKS</A>
        <ul class="flex flex-col gap-2">
          <li>
            <a href="https://github.com/mugisus">GitHub: mugisus</a>
          </li>
          <li>
            <a href="https://twitter.com/mugisus">X: mugisus</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
