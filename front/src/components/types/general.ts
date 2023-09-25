import {
  AnchorHTMLAttributes,
  ComponentType,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from 'react';
import {
  AlertProps,
  ButtonProps as BsButtonProps,
  ModalProps as BsModalProps,
} from 'react-bootstrap';

export type ButtonProps = BsButtonProps & {
  isLoading?: boolean;
  isFull?: boolean;
  leftIcon?: ComponentType;
  variant?: 'primary' | 'secondary' | 'warning' | 'danger';
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
export type MessageProps = AlertProps & {
  title?: string;
  children: ReactNode;
};

export type MessageListProps = Omit<MessageProps, 'children'> & {
  items: string[];
};

export type IconButtonProps = Omit<ButtonProps, 'children' | 'isFull'> & {
  icon: ComponentType;
};

export type AvailableModalSizes = 'sm' | 'lg' | 'xl';

export type ModalProps = Omit<BsModalProps, 'show'> & {
  isOpen?: boolean;
  icon?: ComponentType;
  title?: string;
  actions?: ReactNode[];
  size?: AvailableModalSizes | 'md';
  children?: ReactNode;
};

export type ConfirmModalProps = Omit<ModalProps, 'actions' | 'children'> & {
  message: string;
  isLoading?: boolean;
  onConfirm: () => void;
};
