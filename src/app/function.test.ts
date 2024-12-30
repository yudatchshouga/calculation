import { describe, expect, it } from '@jest/globals';
import { onClickButton, Operator } from './function';

describe('', () => {
  it('初期状態 → 1を押した', () => {
    const initialState = ['0'];
    const resultState = onClickButton(initialState, '1');
    expect(resultState).toEqual(['1']);
  });

  it('1を押した → 2を押した', () => {
    const initialState = ['1'];
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual(['12']);
  });

  it('1を押した → =を押した', () => {
    const initialState = ['1'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['1']);
  });

  it('ACを押した', () => {
    const initialState = ['12'];
    const resultState = onClickButton(initialState, 'AC');
    expect(resultState).toEqual(['0']);
  });

  it('1を押した → +を押した', () => {
    const initialState = ['1'];
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual(['1', Operator.ADD]);
  });

  it('1を押した → +を押した → =を押した', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['1', Operator.ADD]);
  });

  it('1を押した → +を押した → 2を押した', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual(['1', Operator.ADD, '2']);
  });

  it('1を押した → +を押した → +を押した', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual(['1', Operator.ADD]);
  });

  it('1を押した → +を押した → 2を押した → 3を押した', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = onClickButton(initialState, '3');
    expect(resultState).toEqual(['1', Operator.ADD, '23']);
  });

  it('1を押した → +を押した → 0を押した', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = onClickButton(initialState, '0');
    expect(resultState).toEqual(['1', Operator.ADD, '0']);
  });

  it('1を押した → +を押した → 0を押した → 2を押した', () => {
    const initialState = ['1', Operator.ADD, '0'];
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual(['1', Operator.ADD, '2']);
  });

  it('1を押した → +を押した → 2を押した → =を押した', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['3']);
  });

  it('1を押した → +を押した → 2を押した → =を押した → =を押した', () => {
    const initialState = ['3'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['3']);
  });

  it('1を押した → +を押した → 2を押した → +を押した', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual(['3', Operator.ADD]);
  });

  it('3を押した → -を押した', () => {
    const initialState = ['3'];
    const resultState = onClickButton(initialState, Operator.SUBTRACT);
    expect(resultState).toEqual(['3', Operator.SUBTRACT]);
  });

  it('1を押した → -を押した → +を押した', () => {
    const initialState = ['1', Operator.SUBTRACT];
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual(['1', Operator.ADD]);
  });

  it('3を押した → -を押した → 2を押した', () => {
    const initialState = ['3', Operator.SUBTRACT];
    const resultState = onClickButton(initialState, '2');
    expect(resultState).toEqual(['3', Operator.SUBTRACT, '2']);
  });

  it('3を押した → -を押した → 2を押した → =を押した', () => {
    const initialState = ['3', Operator.SUBTRACT, '2'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['1']);
  });

  it('3を押した → -を押した → 4を押した → =を押した', () => {
    const initialState = ['3', Operator.SUBTRACT, '4'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['-1']);
  });

  it('3を押した → -を押した → -を押した', () => {
    const initialState = ['3', Operator.SUBTRACT];
    const resultState = onClickButton(initialState, Operator.SUBTRACT);
    expect(resultState).toEqual(['3', Operator.SUBTRACT]);
  });

  it('-1 → +を押した → 2を押した → =を押した', () => {
    const initialState = ['-1', Operator.ADD, '2'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['1']);
  });

  it('2を押した → ×を押した', () => {
    const initialState = ['2'];
    const resultState = onClickButton(initialState, Operator.MULTIPLY);
    expect(resultState).toEqual(['2', Operator.MULTIPLY]);
  });

  it('2を押した → ×を押した → 3を押した', () => {
    const initialState = ['2', Operator.MULTIPLY];
    const resultState = onClickButton(initialState, '3');
    expect(resultState).toEqual(['2', Operator.MULTIPLY, '3']);
  });

  it('2を押した → ×を押した → 3を押した → =を押した', () => {
    const initialState = ['2', Operator.MULTIPLY, '3'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['6']);
  });

  it('2を押した → ×を押した → ×を押した', () => {
    const initialState = ['2', Operator.MULTIPLY];
    const resultState = onClickButton(initialState, Operator.MULTIPLY);
    expect(resultState).toEqual(['2', Operator.MULTIPLY]);
  });

  it('1を押した → ÷を押した → 0を押した → =を押した', () => {
    const initialState = ['1', Operator.DIVIDE, '0'];
    const resultState = onClickButton(initialState, '=');
    expect(resultState).toEqual(['NaN']);
  });

  it('NaN → +を押した', () => {
    const initialState = ['NaN'];
    const resultState = onClickButton(initialState, Operator.ADD);
    expect(resultState).toEqual(['NaN']);
  });
});
