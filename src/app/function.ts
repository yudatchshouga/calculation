export enum Operator {
  ADD = '+',
  SUBTRACT = '–',
  MULTIPLY = '×',
  DIVIDE = '÷',
  EQUAL = '=',
  NONE = '',
}

export type CalculatorState = {
  currentValue: string;
  previousValue: string;
  operator: Operator;
};

export function onClickButton(
  state: CalculatorState,
  input: string
): CalculatorState {
  const { currentValue, previousValue, operator } = state;
  if (currentValue === '0') {
    return {
      currentValue: input,
      previousValue,
      operator,
    };
  }

  return {
    currentValue: currentValue + input,
    previousValue,
    operator,
  };
}
