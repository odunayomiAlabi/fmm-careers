import styled from 'styled-components';
import { FMMTheme } from '../theme';

const BtnBackground = (type: string) => {
  switch (type) {
    case 'primary':
      return FMMTheme.colors.primary_500;
    case 'secondary':
      return FMMTheme.colors.teal_500;
    case 'tertiary':
      return FMMTheme.colors.white;
    default:
      return '#fff';
  }
};

const BtnBoxShow = (type: string) => {
  switch (type) {
    case 'primary':
      return FMMTheme.colors.primary_100;
    case 'secondary':
      return FMMTheme.colors.teal_100;
    case 'tertiary':
      return FMMTheme.colors.grey_200;
    default:
      return '#fff';
  }
};

export const MktButtonStyle = styled.button<{
  type?: string;
  $width?: string;
  $color?: string;
  $maxWidth?: number;
  $height?: number;
}>`
  height: ${(props) => props.$height || 48}px;
  width: ${(props) => props.$width || '100%' || 'fit-content'};
  max-width: ${(props) => props.$maxWidth || 300}px;
  background-color: ${(props) => BtnBackground(props.type || '')};
  border-radius: 12px;
  color: ${(props) => props.$color || FMMTheme.colors.white};
  font-size: ${FMMTheme.fontSize.base};
  font-weight: ${FMMTheme.fontWeight.bold};
  cursor: pointer;
  box-shadow: 0px 0px 0px 2px ${(props) => BtnBoxShow(props.type || '')};
  letter-spacing: 0.5px;
  padding: 0 12px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:disabled {
    cursor: default;
    background-color: ${(props) => props.type === 'primary' ? '#D8D8D8' : 'transparent'};
    border: 1px solid #D8D8D8;
    color: ${(props) => props.type === 'primary' ? '#ffff' : '#D8D8D8'};
    box-shadow: none;
  } 

`;
