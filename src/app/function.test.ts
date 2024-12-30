import { describe, expect, it } from '@jest/globals';
import { onClickButton, Operator } from './function';

describe('', () => {
  it('初期状態 → 1を押した', () => {
    const initialState = {
      currentValue: '0',
      previousValue: '0',
      operator: Operator.NONE,
    };
    const resultState = onClickButton(initialState, '1');
    expect(resultState).toEqual({
      currentValue: '1',
      previousValue: '0',
      operator: Operator.NONE,
    });
  });

  it('1を押した → 2を押した', () => {
    const initialState = {
      currentValue: '1',
      previousValue: '0',
      operator: Operator.NONE,
    };
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual({
      currentValue: '12',
      previousValue: '0',
      operator: Operator.NONE,
    });
  });
});
