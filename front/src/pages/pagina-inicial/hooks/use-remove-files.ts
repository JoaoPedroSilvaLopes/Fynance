import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FilesServices } from '../../../services';

export const useRemoveFiles = () => {
  const queryClient = useQueryClient();

  return useMutation(FilesServices.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries(['/arquivos-usuarios']);
    },
  });
};
