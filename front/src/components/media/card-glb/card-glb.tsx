import { Panel, Section } from '../../general';
import * as S from './card-glb.styles';

type Props = {
  url: string
}

const CardGLB: React.FC<Props> = ({ url }) => {
  return (
    <Panel title='Teste'>
      <model-viewer
        src={url}
        ar
        camera-controls
        touch-action="pan-y"
      />
    </Panel>
  );
};

export default CardGLB;
