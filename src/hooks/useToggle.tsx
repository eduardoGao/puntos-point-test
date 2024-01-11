import { useState } from "react";

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const handleToggle = () => setIsOpen(!isOpen);

  return [isOpen, handleToggle];
};
