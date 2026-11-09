import {registerRoot, Composition} from 'remotion';
import {AlurNexa} from './AlurNexa.jsx';
const Root = () => (
  <Composition id="AlurNexa" component={AlurNexa} durationInFrames={360} fps={30} width={1280} height={720} />
);
registerRoot(Root);
