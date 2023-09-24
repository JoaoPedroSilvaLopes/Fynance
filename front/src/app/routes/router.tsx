import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  PaginaLogin,
  PaginaInicial,
  PaginaCadastro,
  PaginaNaoEncontrada,
} from '../../pages';
import ProtectedRoute from './protected-route';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<PaginaLogin />} />
        <Route path="cadastro" element={<PaginaCadastro />} />
        <Route path="pagina-nao-encontrada" element={<PaginaNaoEncontrada />} />
        <Route
          path="*"
          element={<Navigate to={'/pagina-nao-encontrada'} replace />}
        />
        <Route
          path="/"
          element={<ProtectedRoute component={PaginaInicial} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
