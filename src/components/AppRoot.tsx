import { Suspense, type ParentProps } from 'solid-js';
import AdobeTypekitLoader from '~/components/AdobeTypekitLoader';
import GradientBackground from '~/components/GradientBackground';

export default function AppRoot(props: ParentProps) {
  return (
    <>
      <AdobeTypekitLoader kitId='lys1dpr' />
      <GradientBackground />
      <Suspense>{props.children}</Suspense>
    </>
  );
}
