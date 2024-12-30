'use client';

import { useEffect, useState } from 'react';
import { getNewMemory, isNotNumber, isOperator, Operator } from './function';

export default function Home() {
  const [memory, setMemory] = useState<string[]>(['0']);
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    const last = memory[memory.length - 1];
    if (isOperator(last)) {
      setDisplayValue(memory[memory.length - 2]);
    } else {
      setDisplayValue(last);
    }
  }, [memory]);

  useEffect(() => {
    console.log('isFinished:', isFinished);
  }, [isFinished]);

  function onClick(value: string) {
    if (value === 'AC') {
      // ACの場合
      setIsFinished(false);
      const newMemory = getNewMemory(memory, 'AC');
      setMemory(newMemory);
    } else if (value === '=') {
      // =の場合
      setIsFinished(true);
      const newMemory = getNewMemory(memory, '=');
      setMemory(newMemory);
    } else if (isOperator(value)) {
      // 演算子の場合
      setIsFinished(false);
      const newMemory = getNewMemory(memory, value);
      setMemory(newMemory);
    } else if (isFinished) {
      // 直前に=が押されていた場合。新しい計算を始める
      setIsFinished(false);
      const newMemory = getNewMemory(['0'], value);
      setMemory(newMemory);
    } else {
      setIsFinished(false);
      const newMemory = getNewMemory(memory, value);
      setMemory(newMemory);
    }
  }

  type ButtonProps = {
    value: string;
  };

  const Button = (props: ButtonProps) => {
    const { value } = props;
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

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '286px',
          height: '60px',
          backgroundColor: '#888888',
          borderRadius: '8px',
          marginBottom: '2px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0 12px',
          color: '#fff',
          fontSize: '24px',
        }}
      >
        {displayValue}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 70px)',
          gridTemplateRows: 'repeat(4, 70px)',
          columnGap: '2px',
          rowGap: '2px',
        }}
      >
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value={Operator.DIVIDE} />
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value={Operator.MULTIPLY} />
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value={Operator.SUBTRACT} />
        <Button value="0" />
        <Button value="AC" />
        <Button value="=" />
        <Button value={Operator.ADD} />
      </div>
    </div>
  );
}
