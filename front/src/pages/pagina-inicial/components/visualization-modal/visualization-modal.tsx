import { AiFillEye } from 'react-icons/ai';
import { Modal, ModalProps } from '../../../../components';

import * as S from './visualization-modal.styles';
import { FileGlb } from 'src/domain-types';

type Props = Pick<ModalProps, 'isOpen' | 'onHide'> & {
  url: string;
  nome: string;
  unCheckModel: React.Dispatch<React.SetStateAction<FileGlb | undefined>>
};

const VisualizationModal: React.FC<Props> = ({ isOpen, onHide, url, nome, unCheckModel }) => {
  const onClose = () => {
    onHide()
    unCheckModel(undefined)
  }

  const modalConfigs: ModalProps = {
    isOpen,
    title: `Visualização do modelo ${nome}`,
    icon: AiFillEye,
    actions: [],
    onHide: onClose,
    size: 'md',
  };

  return (
    <Modal {...modalConfigs}>
      <S.Card>
        <model-viewer src={url} ar camera-controls touch-action="pan-y" />
      </S.Card>
    </Modal>
  );
};

export default VisualizationModal;
