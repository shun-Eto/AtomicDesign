import { Languages } from "./environment";

interface ListItemProps<T> {
  id: string;
  value: T;
  label: T | Languages<T>;
}
