import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth, Cache } from '../../../../core';
import { Button } from '../../../../components';

import * as S from './panel-visualization.styles';
import { FileGlb } from 'src/domain-types';

type Props = {
  file?: FileGlb
}

export const PanelVisualization: React.FC<Props> = ({ file }) => {
  return (
    <S.CurrencyModel>
      {file && 
      <S.Card>

        <model-viewer src={file.url} ar camera-controls touch-action="pan-y" loading="eager" shadow-intensity="2" />
      </S.Card>
      
      }
    </S.CurrencyModel>
  );
};

export default PanelVisualization;
