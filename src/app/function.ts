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
  isNewInput: boolean;
};

export function onClickButton(
  state: CalculatorState,
  input: string
): CalculatorState {
  const { currentValue, previousValue, operator, isNewInput } = state;

  if (input === 'AC') {
    console.log('AC');
    return {
      currentValue: '0',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    };
  }

  if (input === Operator.ADD) {
    console.log(Operator.ADD);
    return {
      currentValue,
      previousValue,
      operator: Operator.ADD,
      isNewInput: true,
    };
  }

  if (currentValue === '0') {
    console.log('currentValue === 0');
    return {
      currentValue: input,
      previousValue,
      operator,
      isNewInput: false,
    };
  }

  console.log('default');
  return {
    currentValue: currentValue + input,
    previousValue,
    operator,
    isNewInput: false,
  };
}
