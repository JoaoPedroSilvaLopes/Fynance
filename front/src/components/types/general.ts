import {
  AnchorHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { ButtonProps as BsButtonProps } from 'react-bootstrap';

export type ButtonProps = BsButtonProps & {
  isLoading?: boolean;
  isFull?: boolean;
  leftIcon?: ComponentType;
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
};

export type LinkButtonProps = Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'href'
> & {
  disabled?: boolean;
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  isRequired?: boolean;
  actions?: ReactNode[];
};

export type PanelProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  isRequired?: boolean;
  actions?: ReactNode[];
  children: ReactNode;
};
