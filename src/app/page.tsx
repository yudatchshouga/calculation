'use client';

import { use, useEffect, useState } from 'react';
import { onClickButton, Operator } from './function';

export default function Home() {
  const [memory, setMemory] = useState<string[]>(['0']);
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    console.log('memory:', memory);
  }, []);

  useEffect(() => {
    console.log('memory:', memory);
    const last = memory[memory.length - 1];
    if (
      last === Operator.ADD ||
      last === Operator.SUBTRACT ||
      last === Operator.MULTIPLY ||
      last === Operator.DIVIDE
    ) {
      setDisplayValue(memory[memory.length - 2]);
    } else {
      setDisplayValue(last);
    }
  }, [memory]);

  useEffect(() => {
    console.log('isFinished:', isFinished);
  }, [isFinished]);

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
        <NumberButton
          value={7}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <NumberButton
          value={8}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <NumberButton
          value={9}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <OperatorButton
          value={Operator.DIVIDE}
          onClick={(value) => {
            onClickOperator(value);
          }}
        />
        <NumberButton
          value={4}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <NumberButton
          value={5}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <NumberButton
          value={6}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <OperatorButton
          value={Operator.MULTIPLY}
          onClick={(value) => {
            onClickOperator(value);
          }}
        />
        <NumberButton
          value={1}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <NumberButton
          value={2}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <NumberButton
          value={3}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <OperatorButton
          value={Operator.SUBTRACT}
          onClick={(value) => {
            onClickOperator(value);
          }}
        />
        <NumberButton
          value={0}
          onClick={(value) => {
            onClickNumber(value);
          }}
        />
        <AllClearButton
          onClick={() => {
            const newMemory = onClickButton(memory, 'AC');
            setMemory(newMemory);
          }}
        />
        <EqualButton
          onClick={() => {
            const newMemory = onClickButton(memory, '=');
            setMemory(newMemory);
            setIsFinished(true);
          }}
        />
        <OperatorButton
          value={Operator.ADD}
          onClick={(value) => {
            onClickOperator(value);
          }}
        />
      </div>
    </div>
  );

  function onClickOperator(value: Operator) {
    setIsFinished(false);
    const newMemory = onClickButton(memory, value);
    setMemory(newMemory);
  }

  function onClickNumber(value: number) {
    // 直前に=が押されていた場合。新しい計算を始める
    if (isFinished) {
      setIsFinished(false);
      const newMemory = onClickButton(['0'], value.toString());
      setMemory(newMemory);
      return;
    }
    const newMemory = onClickButton(memory, value.toString());
    setMemory(newMemory);
  }
}

type NumberButtonProps = {
  value: number;
  onClick: (value: number) => void;
};

const NumberButton = (props: NumberButtonProps) => {
  const { value, onClick } = props;
  return (
    <button
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '8px',
        border: '1px solid #cbcbcb',
        backgroundColor: '#dcdcdc',
        color: '#000',
        fontSize: '30px',
      }}
      onClick={() => {
        onClick(value);
      }}
    >
      {value}
    </button>
  );
};

type OperatorButtonProps = {
  value: Operator;
  onClick: (value: Operator) => void;
};

const OperatorButton = (props: OperatorButtonProps) => {
  const { value, onClick } = props;
  return (
    <button
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '8px',
        border: '1px solid #ec891d',
        backgroundColor: '#fe9a2d',
        color: '#ffffff',
        fontSize: '30px',
      }}
      onClick={() => {
        onClick(value);
      }}
    >
      {value}
    </button>
  );
};

type EqualButtonProps = {
  onClick: () => void;
};

const EqualButton = (props: EqualButtonProps) => {
  const { onClick } = props;
  return (
    <button
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '8px',
        border: '1px solid #ec891d',
        color: '#fff',
        backgroundColor: '#fe9a2d',
        fontSize: '30px',
      }}
      onClick={onClick}
    >
      =
    </button>
  );
};

type AllClearButtonProps = {
  onClick: () => void;
};

const AllClearButton = (props: AllClearButtonProps) => {
  const { onClick } = props;
  return (
    <button
      style={{
        width: '70px',
        height: '70px',
        borderRadius: '8px',
        border: '1px solid #ec891d',
        backgroundColor: '#fe9a2d',
        color: '#fff',
        fontSize: '30px',
      }}
      onClick={onClick}
    >
      AC
    </button>
  );
};
