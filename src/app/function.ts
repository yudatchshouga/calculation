export enum Operator {
  ADD = '+',
  SUBTRACT = '–',
  MULTIPLY = '×',
  DIVIDE = '÷',
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
    return {
      currentValue: '0',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    };
  }

  if (input === '=') {
    if (operator === Operator.NONE) {
      return state;
    }
    if (operator === Operator.ADD) {
      return {
        currentValue: String(Number(previousValue) + Number(currentValue)),
        previousValue: '0',
        operator: Operator.NONE,
        isNewInput: true,
      };
    }
    if (operator === Operator.SUBTRACT) {
      return {
        currentValue: String(Number(previousValue) - Number(currentValue)),
        previousValue: '0',
        operator: Operator.NONE,
        isNewInput: true,
      };
    }
    if (operator === Operator.MULTIPLY) {
      return {
        currentValue: String(Number(previousValue) * Number(currentValue)),
        previousValue: '0',
        operator: Operator.NONE,
        isNewInput: true,
      };
    }
  }

  if (input === Operator.ADD) {
    if (operator === Operator.ADD) {
      return {
        currentValue: String(Number(previousValue) + Number(currentValue)),
        previousValue: '0',
        operator: Operator.ADD,
        isNewInput: true,
      };
    }
    if (operator === Operator.SUBTRACT) {
      return {
        currentValue: String(Number(previousValue) - Number(currentValue)),
        previousValue: '0',
        operator: Operator.ADD,
        isNewInput: true,
      };
    }
    if (operator === Operator.MULTIPLY) {
      return {
        currentValue: String(Number(previousValue) * Number(currentValue)),
        previousValue: '0',
        operator: Operator.ADD,
        isNewInput: true,
      };
    }
    return {
      currentValue,
      previousValue,
      operator: Operator.ADD,
      isNewInput: true,
    };
  }

  if (input === Operator.SUBTRACT) {
    if (operator === Operator.ADD) {
      return {
        currentValue: String(Number(previousValue) + Number(currentValue)),
        previousValue: '0',
        operator: Operator.SUBTRACT,
        isNewInput: true,
      };
    }
    if (operator === Operator.SUBTRACT && isNewInput) {
      return {
        currentValue: String(Number(previousValue) - Number(currentValue)),
        previousValue: '0',
        operator: Operator.SUBTRACT,
        isNewInput: true,
      };
    }
    if (operator === Operator.SUBTRACT) {
      return {
        currentValue: String(Number(previousValue) - Number(currentValue)),
        previousValue: '0',
        operator: Operator.SUBTRACT,
        isNewInput: true,
      };
    }
    if (operator === Operator.MULTIPLY) {
      return {
        currentValue: String(Number(previousValue) * Number(currentValue)),
        previousValue: '0',
        operator: Operator.SUBTRACT,
        isNewInput: true,
      };
    }
    return {
      currentValue,
      previousValue,
      operator: Operator.SUBTRACT,
      isNewInput: true,
    };
  }

  if (input === Operator.MULTIPLY) {
    if (operator === Operator.ADD) {
      return {
        currentValue: String(Number(previousValue) + Number(currentValue)),
        previousValue: '0',
        operator: Operator.MULTIPLY,
        isNewInput: true,
      };
    }
    if (operator === Operator.SUBTRACT) {
      return {
        currentValue: String(Number(previousValue) - Number(currentValue)),
        previousValue: '0',
        operator: Operator.MULTIPLY,
        isNewInput: true,
      };
    }
    if (operator === Operator.MULTIPLY) {
      return {
        currentValue: String(Number(previousValue) * Number(currentValue)),
        previousValue: '0',
        operator: Operator.MULTIPLY,
        isNewInput: true,
      };
    }
    return {
      currentValue,
      previousValue,
      operator: Operator.MULTIPLY,
      isNewInput: true,
    };
  }

  if (isNewInput) {
    return {
      currentValue: input,
      previousValue: currentValue,
      operator,
      isNewInput: false,
    };
  }

  if (currentValue === '0') {
    return {
      currentValue: input,
      previousValue,
      operator,
      isNewInput: false,
    };
  }

  // 12 + 3 → 123
  return {
    currentValue: currentValue + input,
    previousValue,
    operator,
    isNewInput: false,
  };
}
