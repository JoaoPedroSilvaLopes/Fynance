import { CardGLB, IconButton } from '../../components';
import { AddArquivoModal, NavBar, RemoveArquivoModal } from './components';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { usePaginaInicial } from './hooks';
import { MockedData } from './utils';

import * as S from './pagina-inicial.styles';

const PaginaInicial: React.FC = () => {
  const {
    visualizationComponent,
    currentModel,
    visualizeModel,
    handleRemove,
    handleAdd,
    arquivosGLB,
    closeRemoveModal,
    isRemoveModalOPen,
    selectedFileGlb,
    closeAddModal,
    isAddModalOpen,
  } = usePaginaInicial();

  return (
    <>
      <NavBar />
      <S.PageLayout>
        {visualizationComponent()}
        <S.PanelModels
          title="Seus Modelos"
          actions={[<IconButton icon={FaPlus} onClick={handleAdd}/>]}
        >
          <S.Models>
            {MockedData.map((value, index) => {
              return (
                <CardGLB
                  url={value.url}
                  nome={value.nome}
                  actions={[
                    <IconButton
                      icon={
                        !currentModel || currentModel !== value
                          ? AiFillEye
                          : AiFillEyeInvisible
                      }
                      variant="secondary"
                      onClick={() => visualizeModel(value)}
                    />,
                    <IconButton
                      icon={FaTrash}
                      variant="danger"
                      onClick={() => handleRemove(value)}
                    />,
                  ]}
                />
              );
            })}
            {arquivosGLB &&
              arquivosGLB.map((value, index) => {
                return (
                  <CardGLB
                    key={index}
                    url={value.url}
                    nome={value.nome}
                    actions={[
                      <IconButton
                        icon={
                          !currentModel || currentModel !== value
                            ? AiFillEye
                            : AiFillEyeInvisible
                        }
                        variant="secondary"
                        onClick={() => visualizeModel(value)}
                      />,
                      <IconButton
                        icon={FaTrash}
                        variant="danger"
                        onClick={() => handleRemove(value)}
                      />,
                    ]}
                  />
                );
              })}
          </S.Models>
        </S.PanelModels>
      </S.PageLayout>
      <RemoveArquivoModal
        id={selectedFileGlb?.id}
        name={selectedFileGlb?.nome}
        isOpen={isRemoveModalOPen}
        onHide={closeRemoveModal}
      />
      <AddArquivoModal isOpen={isAddModalOpen} onHide={closeAddModal} />
    </>
  );
};

export default PaginaInicial;
