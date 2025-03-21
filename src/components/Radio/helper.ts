import { IRadioOption } from './types';

export const isCurrentRef = <Value>(
  option: IRadioOption<Value>,
  value: Value,
  currentIndex: number
): boolean => {
  if (option.value === value) {
    return true;
  }
  return currentIndex === 0;
};
