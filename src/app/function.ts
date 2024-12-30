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

export function onClickButton(memory: string[], input: string): string[] {
  // ACが入力された場合の処理
  if (input === 'AC') {
    return ['0'];
  }

  // NaNの場合、演算子を受け付けない
  if (memory[0] === 'NaN') {
    return memory;
  }

  // =が入力された場合の処理
  if (input === '=') {
    // 計算がある場合は計算して結果を返す
    if (memory.length === 3) {
      return [calculate(memory)];
    }
    // それ以外はそのまま返す
    return memory;
  }

  const last: string = memory[memory.length - 1];

  // 演算子が入力された場合の処理
  if (
    input === Operator.ADD ||
    input === Operator.SUBTRACT ||
    input === Operator.MULTIPLY ||
    input === Operator.DIVIDE
  ) {
    // 既に計算がある場合は計算してから演算子を追加
    if (memory.length === 3) {
      return [calculate(memory), input];
    }
    // 最後の入力が演算子なら上書き
    if (memory.length === 2) {
      return [memory[0], input];
    }
    // それ以外はそのまま追加
    return [memory[0], input];
  }

  // 数字が入力された場合の処理
  // 最後の入力が演算子なら新しい数字を追加
  if (
    last === Operator.ADD ||
    last === Operator.SUBTRACT ||
    last === Operator.MULTIPLY ||
    last === Operator.DIVIDE
  ) {
    return [...memory, input];
  }
  // 最後の入力が0なら上書き
  if (last === '0') {
    return [...memory.slice(0, memory.length - 1), input];
  }
  // それ以外は、数字を後ろに追加
  return [...memory.slice(0, memory.length - 1), last + input];
}

// [1, '+', 2] の形式のみ計算する
const calculate = (memory: string[]): string => {
  const operator = memory[1];
  if (operator === Operator.ADD) {
    return String(Number(memory[0]) + Number(memory[2]));
  }
  if (operator === Operator.SUBTRACT) {
    return String(Number(memory[0]) - Number(memory[2]));
  }
  if (operator === Operator.MULTIPLY) {
    return String(Number(memory[0]) * Number(memory[2]));
  }
  if (operator === Operator.DIVIDE) {
    if (Number(memory[2]) === 0) {
      return NaN.toString();
    }
    return String(Number(memory[0]) / Number(memory[2]));
  }
  throw new Error('Invalid operator');
};
