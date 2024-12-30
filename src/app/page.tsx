'use client';

import { useEffect, useState } from 'react';
import { onClickButton, Operator } from './function';

export default function Home() {
  const [previousValue, setPreviousValue] = useState<string>('0');
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [operator, setOperator] = useState<Operator>(Operator.NONE);
  const [isNewInput, setIsNewInput] = useState<boolean>(true);

  useEffect(() => {
    console.log(
      'previous:',
      previousValue,
      'operator:',
      operator,
      'current:',
      currentValue,
      'isNewInput:',
      isNewInput
    );
  }, []);

  useEffect(() => {
    console.log(
      'previous:',
      previousValue,
      'operator:',
      operator,
      'current:',
      currentValue,
      'isNewInput:',
      isNewInput
    );
  }, [previousValue, currentValue, operator, isNewInput]);

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
        {currentValue}
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
            console.log(value);
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
            const result = onClickButton(
              {
                currentValue,
                previousValue,
                operator,
                isNewInput,
              },
              value
            );
            setCurrentValue(result.currentValue);
            setPreviousValue(result.previousValue);
            setOperator(result.operator);
            setIsNewInput(result.isNewInput);
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
            const result = onClickButton(
              {
                currentValue,
                previousValue,
                operator,
                isNewInput,
              },
              value
            );
            setCurrentValue(result.currentValue);
            setPreviousValue(result.previousValue);
            setOperator(result.operator);
            setIsNewInput(result.isNewInput);
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
            const result = onClickButton(
              {
                currentValue,
                previousValue,
                operator,
                isNewInput,
              },
              'AC'
            );
            setCurrentValue(result.currentValue);
            setPreviousValue(result.previousValue);
            setOperator(result.operator);
            setIsNewInput(result.isNewInput);
          }}
        />
        <EqualButton
          onClick={() => {
            const result = onClickButton(
              {
                currentValue,
                previousValue,
                operator,
                isNewInput,
              },
              '='
            );
            setCurrentValue(result.currentValue);
            setPreviousValue(result.previousValue);
            setOperator(result.operator);
            setIsNewInput(result.isNewInput);
          }}
        />
        <OperatorButton
          value={Operator.ADD}
          onClick={(value) => {
            const result = onClickButton(
              {
                currentValue,
                previousValue,
                operator,
                isNewInput,
              },
              value
            );
            setCurrentValue(result.currentValue);
            setPreviousValue(result.previousValue);
            setOperator(result.operator);
            setIsNewInput(result.isNewInput);
          }}
        />
      </div>
    </div>
  );

  function onClickNumber(value: number) {
    console.log(value);
    const result = onClickButton(
      {
        currentValue,
        previousValue,
        operator,
        isNewInput,
      },
      value.toString()
    );
    setCurrentValue(result.currentValue);
    setPreviousValue(result.previousValue);
    setOperator(result.operator);
    setIsNewInput(result.isNewInput);
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
