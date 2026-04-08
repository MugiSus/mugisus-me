import { Suspense, type ParentProps } from 'solid-js';
import GradientBackground from '~/components/GradientBackground';

export default function AppRoot(props: ParentProps) {
  return (
    <>
      <GradientBackground />
      <Suspense>{props.children}</Suspense>
    </>
  );
}
