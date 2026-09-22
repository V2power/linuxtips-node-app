import { soma } from '../index.js';

describe('Função soma()', () => {
  test('soma dois números inteiros', () => {
    expect(soma(3, 4)).toBe(7);
  });

  test('aceita strings numéricas e devolve Number', () => {
    const resultado = soma('10', '25');
    expect(resultado).toBe(35);
    expect(typeof resultado).toBe('number');
  });
});