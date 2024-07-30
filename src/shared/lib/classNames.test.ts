import { classNames } from './classNames';

describe('classNames', () => {
  test('classNames only with first arg', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('classNames with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames(
      'someClass',
      {},
      ['class1', 'class2'],
    )).toBe(expected);
  });
  test('classNames with mods', () => {
    const expected = 'someClass class1 class2 hovered outline';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        outline: true,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });
  test('classNames with mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        outline: false,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });
  test('classNames with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        outline: undefined,
      },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
