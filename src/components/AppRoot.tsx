import { Suspense, type ParentProps } from 'solid-js';
import GradientBackground from '~/components/GradientBackground';

export default function AppRoot(props: ParentProps) {
  return (
    <>
      <GradientBackground />
      <Suspense>{props.children}</Suspense>
      {/* <footer class='fixed inset-y-0 right-0 -z-50 w-4 bg-[#82A52C] py-0.5 pr-2 text-right text-xs font-semibold' /> */}
    </>
  );
}
