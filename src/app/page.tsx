'use client';

import { useEffect, useState } from 'react';
import { getNewMemory, isOperator, Operator } from './function';
import { Button } from './Button';

export default function Home() {
  const [memory, setMemory] = useState<string[]>(['0']);
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    console.log('memory:', memory);

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

  const buttonContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 70px)',
    gridTemplateRows: 'repeat(4, 70px)',
    columnGap: '2px',
    rowGap: '2px',
  };

  const displayStyle = {
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
  };

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <div style={displayStyle}>{displayValue}</div>
      <div style={buttonContainer}>
        <Button value="7" onClick={onClick} />
        <Button value="8" onClick={onClick} />
        <Button value="9" onClick={onClick} />
        <Button
          value={Operator.DIVIDE}
          onClick={onClick}
          isActive={memory[1] === Operator.DIVIDE}
        />
        <Button value="4" onClick={onClick} />
        <Button value="5" onClick={onClick} />
        <Button value="6" onClick={onClick} />
        <Button
          value={Operator.MULTIPLY}
          onClick={onClick}
          isActive={memory[1] === Operator.MULTIPLY}
        />
        <Button value="1" onClick={onClick} />
        <Button value="2" onClick={onClick} />
        <Button value="3" onClick={onClick} />
        <Button
          value={Operator.SUBTRACT}
          onClick={onClick}
          isActive={memory[1] === Operator.SUBTRACT}
        />
        <Button value="0" onClick={onClick} />
        <Button value="AC" onClick={onClick} />
        <Button value="=" onClick={onClick} isActive={isFinished} />
        <Button
          value={Operator.ADD}
          onClick={onClick}
          isActive={memory[1] === Operator.ADD}
        />
      </div>
    </div>
  );
}
