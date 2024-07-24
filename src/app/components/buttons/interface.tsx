export interface MktButtonProps {
  label: string;
  type?: string;
  $width?: string;
  $color?: string;
  $maxWidth?: number;
  $height?: number;
  $disabled?: boolean;
  $className?: string;
  icon?: JSX.Element;
  suffixIcon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
