export type Usuario = {
  id: number;
  nome: string;
  email: string;
};

export type LoginUsuarioFormInput = {
  email: string;
  senha: string;
};

export type CadastroUsuarioFormInput = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
};
