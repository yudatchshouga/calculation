'use client';
import { isNotNumber } from './function';

const numberButtonColor = {
  border: '1px solid #cbcbcb',
  backgroundColor: '#dcdcdc',
  color: '#000',
};

const notNumButtonColor = (isActive: boolean) => {
  return isActive
    ? {
        border: '1px solid #ec891d',
        backgroundColor: '#ffffff',
        color: '#fe9a2d',
      }
    : {
        border: '1px solid #ec891d',
        backgroundColor: '#fe9a2d',
        color: '#ffffff',
      };
};

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
  isActive?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { value, onClick, isActive = false } = props;

  const color = isNotNumber(value)
    ? notNumButtonColor(isActive)
    : numberButtonColor;

  return (
    <button
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '8px',
        fontSize: '30px',
        ...color,
      }}
      onClick={() => {
        onClick(value);
      }}
    >
      {value}
    </button>
  );
};
