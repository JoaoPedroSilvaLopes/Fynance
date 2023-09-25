import { useMutation } from "@tanstack/react-query"
import { UsuarioServices } from "../../../services";

export const useLogin = () => {
  return useMutation(UsuarioServices.cadastroUsuario)
}
