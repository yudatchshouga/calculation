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
});
