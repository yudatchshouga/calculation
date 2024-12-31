'use client';
import { isNotNumber } from './function';

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
};
export const Button = (props: ButtonProps) => {
  const { value, onClick } = props;
  const color = isNotNumber(value)
    ? {
        border: '1px solid #ec891d',
        backgroundColor: '#fe9a2d',
        color: '#ffffff',
      }
    : {
        border: '1px solid #cbcbcb',
        backgroundColor: '#dcdcdc',
        color: '#000',
      };
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
