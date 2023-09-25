import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FilesServices } from '../../../services';

export const useAddArquivo = () => {
  const queryClient = useQueryClient();

  return useMutation(FilesServices.add, {
    onSuccess: () => {
      queryClient.invalidateQueries(['/arquivos-usuarios']);
    },
  });
};
