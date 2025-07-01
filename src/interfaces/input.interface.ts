export interface IInput {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  defaultValue?: string;
  readOnly?: boolean;
  icon?: React.ReactNode;
  ref?: React.RefObject<HTMLInputElement> | null;
  iconPosition?: "left" | "right" | undefined;
  label?: string;
}
