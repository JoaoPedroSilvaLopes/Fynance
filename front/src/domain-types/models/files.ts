export type FileGlb = {
  id: number;
  usuarioId: number;
  nome: string;
  url: string;
  usuario: {
    id: number;
    nome: string;
    email: string;
  };
};

export type FileFormInput = {
  nome: string;
  file: any;
};
