import { useEffect, useState } from 'react';
import { FileGlb } from '../../../domain-types';
import { useModal, useResponsive } from '../../../core';
import { useGetFiles } from '.';
import { PanelVisualization, VisualizationModal } from '../components';

export const usePaginaInicial = () => {
  const [currentModel, setCurrentModel] = useState<FileGlb | undefined>();
  const [selectedFileGlb, setSelectedFileGlb] = useState<FileGlb>();

  const [isAddModalOpen, openAddModal, closeAddModal] = useModal();
  const [isRemoveModalOPen, openRemoveModal, closeRemoveModal] = useModal();
  const [
    isVisualizationModalOpen,
    openVisualizationModal,
    closeVisualizationModal,
  ] = useModal();

  const { data: arquivosGLB } = useGetFiles();
  const { isDesktop } = useResponsive();

  const visualizeModel = (file: FileGlb) => {
    currentModel === file ? setCurrentModel(undefined) : setCurrentModel(file);
  };

  const handleRemove = (file: FileGlb) => {
    setSelectedFileGlb(file);
    openRemoveModal();
  };

  const handleAdd = () => {
    openAddModal();
  };

  useEffect(() => {
    !isDesktop && openVisualizationModal();
  }, [isDesktop]);

  const visualizationComponent = () => {
    return (
      currentModel &&
      (isDesktop ? (
        <PanelVisualization file={currentModel} />
      ) : (
        <VisualizationModal
          nome={currentModel.nome}
          url={currentModel.url}
          isOpen={isVisualizationModalOpen}
          onHide={closeVisualizationModal}
          unCheckModel={setCurrentModel}
        />
      ))
    );
  };

  return {
    visualizationComponent,
    visualizeModel,
    currentModel,
    handleRemove,
    handleAdd,
    arquivosGLB,
    selectedFileGlb,
    
    isRemoveModalOPen,
    closeRemoveModal,

    isAddModalOpen,
    closeAddModal
  };
};
