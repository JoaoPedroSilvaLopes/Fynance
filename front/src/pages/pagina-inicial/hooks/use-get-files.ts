import { useQuery } from "@tanstack/react-query"
import { FilesServices } from "../../../services";

export const useGetFiles = () => {
  return useQuery(['/arquivos-usuarios'], async () => await FilesServices.getByUser())
}
