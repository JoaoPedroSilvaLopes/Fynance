import { useMutation } from "@tanstack/react-query"
import { AuthServices } from "../../../services";

export const useLogin = () => {
  return useMutation(AuthServices.cadastroUsuario)
}
