import { describe, expect, it } from '@jest/globals';
import { getNewMemory, Operator } from './function';

describe('', () => {
  // No.1
  it('0 → 0', () => {
    const initialState = ['0'];
    const resultState = getNewMemory(initialState, '0');
    expect(resultState).toEqual(['0']);
  });

  // No.2
  it('0 → 1', () => {
    const initialState = ['0'];
    const resultState = getNewMemory(initialState, '1');
    expect(resultState).toEqual(['1']);
  });

  // No.3
  it('0 → +', () => {
    const initialState = ['0'];
    const resultState = getNewMemory(initialState, Operator.ADD);
    expect(resultState).toEqual(['0', Operator.ADD]);
  });

  // No.4
  it('0 → =', () => {
    const initialState = ['0'];
    const resultState = getNewMemory(initialState, '=');
    expect(resultState).toEqual(['0']);
  });

  // No.5
  it('2 → 0', () => {
    const initialState = ['2'];
    const resultState = getNewMemory(initialState, '0');
    expect(resultState).toEqual(['20']);
  });

  // No.6
  it('2 → 1', () => {
    const initialState = ['2'];
    const resultState = getNewMemory(initialState, '1');
    expect(resultState).toEqual(['21']);
  });

  // No.7
  it('2 → +', () => {
    const initialState = ['2'];
    const resultState = getNewMemory(initialState, Operator.ADD);
    expect(resultState).toEqual(['2', Operator.ADD]);
  });

  // No.8
  it('2 → =', () => {
    const initialState = ['2'];
    const resultState = getNewMemory(initialState, '=');
    expect(resultState).toEqual(['2']);
  });

  // No.9
  it('1 → + → 0', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = getNewMemory(initialState, '0');
    expect(resultState).toEqual(['1', Operator.ADD, '0']);
  });

  // No.10
  it('1 → + → 2', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = getNewMemory(initialState, '2');
    expect(resultState).toEqual(['1', Operator.ADD, '2']);
  });

  // No.11
  it('1 → + → +', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = getNewMemory(initialState, Operator.ADD);
    expect(resultState).toEqual(['1', Operator.ADD]);
  });

  // No.12
  it('1 → + → -', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = getNewMemory(initialState, Operator.SUBTRACT);
    expect(resultState).toEqual(['1', Operator.SUBTRACT]);
  });

  // No.13
  it('1 → + → =', () => {
    const initialState = ['1', Operator.ADD];
    const resultState = getNewMemory(initialState, '=');
    expect(resultState).toEqual(['1', Operator.ADD]);
  });

  // No.14
  it('1 → + → 0 → 0', () => {
    const initialState = ['1', Operator.ADD, '0'];
    const resultState = getNewMemory(initialState, '0');
    expect(resultState).toEqual(['1', Operator.ADD, '0']);
  });

  // No.15
  it('1 → + → 0 → 2', () => {
    const initialState = ['1', Operator.ADD, '0'];
    const resultState = getNewMemory(initialState, '2');
    expect(resultState).toEqual(['1', Operator.ADD, '2']);
  });

  // No.16
  it('1 → + → 0 → +', () => {
    const initialState = ['1', Operator.ADD, '0'];
    const resultState = getNewMemory(initialState, Operator.ADD);
    expect(resultState).toEqual(['1', Operator.ADD]);
  });

  // No.17
  it('1 → + → 0 → =', () => {
    const initialState = ['1', Operator.ADD, '0'];
    const resultState = getNewMemory(initialState, '=');
    expect(resultState).toEqual(['1']);
  });

  // No.18
  it('1 → + → 2 → 0', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = getNewMemory(initialState, '0');
    expect(resultState).toEqual(['1', Operator.ADD, '20']);
  });

  // No.19
  it('1 → + → 2 → 3', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = getNewMemory(initialState, '3');
    expect(resultState).toEqual(['1', Operator.ADD, '23']);
  });

  // No.20
  it('1 → + → 2 → +', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = getNewMemory(initialState, Operator.ADD);
    expect(resultState).toEqual(['3', Operator.ADD]);
  });

  // No.21
  it('1 → + → 2 → =', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = getNewMemory(initialState, '=');
    expect(resultState).toEqual(['3']);
  });

  // No.22
  it('ACを押した', () => {
    const initialState = ['1', Operator.ADD, '2'];
    const resultState = getNewMemory(initialState, 'AC');
    expect(resultState).toEqual(['0']);
  });

  // No.23
  it('1を押した → ÷を押した → 0を押した → =を押した', () => {
    const initialState = ['1', Operator.DIVIDE, '0'];
    const resultState = getNewMemory(initialState, '=');
    expect(resultState).toEqual(['NaN']);
  });

  // No.24
  it('NaN → 1', () => {
    const initialState = ['NaN'];
    const resultState = getNewMemory(initialState, '1');
    expect(resultState).toEqual(['NaN']);
  });

  // No.25
  it('NaN → +', () => {
    const initialState = ['NaN'];
    const resultState = getNewMemory(initialState, Operator.ADD);
    expect(resultState).toEqual(['NaN']);
  });

  // No.26
  it('NaN → =', () => {
    const initialState = ['NaN'];
    const resultState = getNewMemory(initialState, '=');
    expect(resultState).toEqual(['NaN']);
  });

  // No.27
  it('NaN → AC', () => {
    const initialState = ['NaN'];
    const resultState = getNewMemory(initialState, 'AC');
    expect(resultState).toEqual(['0']);
  });
});
