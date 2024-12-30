import { describe, expect, it } from '@jest/globals';
import { onClickButton, Operator } from './function';

describe('', () => {
  it('初期状態 → 1を押した', () => {
    const initialState = {
      currentValue: '0',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, '1');
    expect(resultState).toEqual({
      currentValue: '1',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: false,
    });
  });

  it('1を押した → 2を押した', () => {
    const initialState = {
      currentValue: '1',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual({
      currentValue: '12',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: false,
    });
  });

  it('ACを押した', () => {
    const initialState = {
      currentValue: '12',
      previousValue: '34',
      operator: Operator.ADD,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, 'AC');
    expect(resultState).toEqual({
      currentValue: '0',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    });
  });

  it('1を押した → +を押した', () => {
    const initialState = {
      currentValue: '1',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual({
      currentValue: '1',
      previousValue: '0',
      operator: Operator.ADD,
      isNewInput: true,
    });
  });

  it('1を押した → +を押した → 2を押した', () => {
    const initialState = {
      currentValue: '1',
      previousValue: '0',
      operator: Operator.ADD,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual({
      currentValue: '2',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    });
  });

  it('1を押した → +を押した → 2を押した → 3を押した', () => {
    const initialState = {
      currentValue: '2',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, '3');
    expect(resultState).toEqual({
      currentValue: '23',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    });
  });

  it('1を押した → +を押した → 0を押した', () => {
    const initialState = {
      currentValue: '1',
      previousValue: '0',
      operator: Operator.ADD,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, '0');
    expect(resultState).toEqual({
      currentValue: '0',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    });
  });

  it('1を押した → +を押した → 0を押した → 2を押した', () => {
    const initialState = {
      currentValue: '0',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual({
      currentValue: '2',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    });
  });

  it('1を押した → +を押した → 2を押した → =を押した', () => {
    const initialState = {
      currentValue: '2',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual({
      currentValue: '3',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    });
  });

  it('1を押した → +を押した → 2を押した → =を押した → =を押した', () => {
    const initialState = {
      currentValue: '3',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual({
      currentValue: '3',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    });
  });

  it('1を押した → +を押した → 2を押した → +を押した', () => {
    const initialState = {
      currentValue: '2',
      previousValue: '1',
      operator: Operator.ADD,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual({
      currentValue: '3',
      previousValue: '0',
      operator: Operator.ADD,
      isNewInput: true,
    });
  });

  it('1を押した → +を押した → +を押した', () => {
    const initialState = {
      currentValue: '1',
      previousValue: '0',
      operator: Operator.ADD,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual({
      currentValue: '1',
      previousValue: '0',
      operator: Operator.ADD,
      isNewInput: true,
    });
  });

  it('3を押した → -を押した', () => {
    const initialState = {
      currentValue: '3',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, Operator.SUBTRACT);
    expect(resultState).toEqual({
      currentValue: '3',
      previousValue: '0',
      operator: Operator.SUBTRACT,
      isNewInput: true,
    });
  });

  it('3を押した → -を押した → 2を押した', () => {
    const initialState = {
      currentValue: '3',
      previousValue: '0',
      operator: Operator.SUBTRACT,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual({
      currentValue: '2',
      previousValue: '3',
      operator: Operator.SUBTRACT,
      isNewInput: false,
    });
  });

  it('3を押した → -を押した → 2を押した → =を押した', () => {
    const initialState = {
      currentValue: '2',
      previousValue: '3',
      operator: Operator.SUBTRACT,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual({
      currentValue: '1',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    });
  });

  it('3を押した → -を押した → 4を押した → =を押した', () => {
    const initialState = {
      currentValue: '4',
      previousValue: '3',
      operator: Operator.SUBTRACT,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual({
      currentValue: '-1',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    });
  });

  it('3を押した → -を押した → -を押した', () => {
    const initialState = {
      currentValue: '3',
      previousValue: '0',
      operator: Operator.SUBTRACT,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, Operator.SUBTRACT);
    expect(resultState).toEqual({
      currentValue: '3',
      previousValue: '0',
      operator: Operator.SUBTRACT,
      isNewInput: true,
    });
  });

  it('-1 → +を押した → 2を押した → =を押した', () => {
    const initialState = {
      currentValue: '-1',
      previousValue: '2',
      operator: Operator.ADD,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual({
      currentValue: '1',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    });
  });

  it('2を押した → ×を押した', () => {
    const initialState = {
      currentValue: '2',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, Operator.MULTIPLY);
    expect(resultState).toEqual({
      currentValue: '2',
      previousValue: '0',
      operator: Operator.MULTIPLY,
      isNewInput: true,
    });
  });

  it('2を押した → ×を押した → 3を押した', () => {
    const initialState = {
      currentValue: '2',
      previousValue: '0',
      operator: Operator.MULTIPLY,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, '3');
    expect(resultState).toEqual({
      currentValue: '3',
      previousValue: '2',
      operator: Operator.MULTIPLY,
      isNewInput: false,
    });
  });

  it('2を押した → ×を押した → 3を押した → =を押した', () => {
    const initialState = {
      currentValue: '3',
      previousValue: '2',
      operator: Operator.MULTIPLY,
      isNewInput: false,
    };
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual({
      currentValue: '6',
      previousValue: '0',
      operator: Operator.NONE,
      isNewInput: true,
    });
  });

  it('2を押した → ×を押した → ×を押した', () => {
    const initialState = {
      currentValue: '2',
      previousValue: '0',
      operator: Operator.MULTIPLY,
      isNewInput: true,
    };
    const resultState = onClickButton(initialState, Operator.MULTIPLY);
    expect(resultState).toEqual({
      currentValue: '2',
      previousValue: '0',
      operator: Operator.MULTIPLY,
      isNewInput: true,
    });
  });
});
