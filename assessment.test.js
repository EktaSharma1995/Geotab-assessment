import * as Utils from './assessment.js';

test('perform operation - returns modified number with one decimal if not integer', () => {
    expect(Utils.performOperations(9900000000000, 1000000000000)).toBe('9.9');
});

test('perform operation - if integer, returns calculated number only', () => {
    expect(Utils.performOperations(1000000, 1000000)).toBe(1);
});

test('return pretty string as K when number has 3 zeroes', () => {
    const spy = jest.spyOn(Utils, 'performOperations');
    spy.mockReturnValue(45);
    expect(Utils.returnPrettiedString(45000)).toBe('45K')
});

test('return pretty string as million when number has 6 zeroes', () => {
    const spy = jest.spyOn(Utils, 'performOperations');
    spy.mockReturnValue(1);
    expect(Utils.returnPrettiedString(1000000)).toBe('1M')
});

test('return pretty string as billion when number has 9 zeroes', () => {
    const spy = jest.spyOn(Utils, 'performOperations');
    spy.mockReturnValue(1.1);
    expect(Utils.returnPrettiedString(1123456789)).toBe('1.1B')
});

test('return number if less than 6 digits', () => {
    expect(Utils.returnPrettiedString(532)).toBe(532)
});