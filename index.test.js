describe('Slugify', function() {
  const slugify = require('./index');

  it('should be able to slugify an accented string', () => {
    const input = 'Frase em português, com acentuação!!!';
    const output = 'frase-em-portugues-com-acentuacao';

    expect(slugify(input)).toEqual(output);
  });

  it('should throw an error if argument of other type then string', () => {
    const input = 123;
    const errorMessage =
      'Slugify function must receive a string as a parameter!';

    expect(() => slugify(input)).toThrowError(errorMessage);
  });

  it('should ignore special characters', () => {
    const input = 'ˆ%$ˆsOME, string :)))!@#$%^ˆ*';
    const output = 'some-string';

    expect(slugify(input)).toEqual(output);
  });
});
