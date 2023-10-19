import MathCharacter from '../Math';

test('Должна проверить дистанцию на равенство 0', () => {
  const mathChar = new MathCharacter();
  mathChar.distance = 0;
  mathChar.attack = 100;
  mathChar.getAttack();
  expect(mathChar.attack).toBe(100);
});

test('Должна проверить влияние дурмана на силу урона', () => {
  const mathChar = new MathCharacter();
  mathChar.distance = 2;
  mathChar.attack = 100;
  mathChar.stoned = false;
  mathChar.getAttack();
  expect(mathChar.attack).toBe(90);
});

test('Уровень атаки должен быть >= 0', () => {
  const mathChar = new MathCharacter();
  mathChar.attack = 3;
  mathChar.distance = 3;
  mathChar.stoned = true;
  mathChar.getAttack();
  expect(mathChar.attack).toBe(0);
});

test('Должна установить значение атаки', () => {
  const mathChar = new MathCharacter();
  mathChar.setAttack(75);
  expect(mathChar.attack).toBe(75);
});

test('Должна вернуть значение влияния дурмана', () => {
  const mathChar = new MathCharacter();
  mathChar.setStoned(false);
  expect(mathChar.getStoned()).toBe(false);
});

test('Должна установить влияние дурмана', () => {
  const mathChar = new MathCharacter();
  mathChar.setStoned(true);
  expect(mathChar.stoned).toBe(true);
});
