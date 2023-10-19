import Magician from '../Magician';

test('Должна расчитать силу урона мага', () => {
  const wizard = new Magician();
  wizard.attack = 100;
  wizard.distance = 2;
  wizard.stoned = true;
  wizard.getAttack();
  expect(wizard.attack).toBe(85);
});
