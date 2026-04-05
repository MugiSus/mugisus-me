export default function Home() {
  return (
    <main>
      <div class="text-4xl flex fixed right-16 top-12 text-emerald-950 flex-col gap-0">
        <p>MUGISUS</p>
        <p>MINATO Masayuki</p>
        <p>湊 真之</p>
      </div>

      <div class="fixed left-16 bottom-16 flex gap-12 flex-col">
        <ul class="text-3xl text-emerald-950 flex flex-col gap-2">
          <li>
            <a href="https://sundial.mugisus.me" class="underline underline-offset-4 decoration-2">Sundial</a>
          </li>
          <li>
            <a href="https://signsystemme.vercel.app" class="underline underline-offset-4 decoration-2">SSM</a>
          </li>
        </ul>
        <ul class="text-3xl text-emerald-950 flex flex-col gap-2">
          <li>
            <a href="https://github.com/mugisus" class="underline underline-offset-4 decoration-2">GitHub: mugisus</a>
          </li>
          <li>
            <a href="https://twitter.com/mugisus" class="underline underline-offset-4 decoration-2">X: mugisus</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
