const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4;', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toBe(expected);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson;', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');
    expect(actual).toEqual(expected);
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(actual).toBe(expected);
  });

  it('Para o argumento location deve retornar a string NW', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(actual).toStrictEqual(expected);
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    const expected = 'undefined';
    const actual = handlerElephants();
    expect(actual).toBe(expected);
  });

  it('Para o argumento location deve retornar a string NW', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(5);
    expect(actual).toBe(expected);
  });

  it('Para um argumento que não existe deve retornar null', () => {
    const expected = 'null';
    const actual = handlerElephants('counter');
    expect(actual).toBe(expected);
  });
});
