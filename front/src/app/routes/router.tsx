import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  PaginaLogin,
  PaginaInicial,
  PaginaAdicaoArquivo,
  PaginaNaoEncontrada,
  PaginaCadastro,
} from '../../pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<PaginaLogin />} />
        <Route path="cadastro" element={<PaginaCadastro />} />
        <Route path="pagina-nao-encontrada" element={<PaginaNaoEncontrada />} />
        <Route path="/" element={<PaginaInicial />} />
        <Route
          path="pagina-adicionar-arquivo"
          element={<PaginaAdicaoArquivo />}
        />
        <Route
          path="*"
          element={<Navigate to={'/pagina-nao-encontrada'} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
