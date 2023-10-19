import Daemon from '../Daemon';

test('Должна расчитать силу урона демона', () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  daemon.distance = 3;
  daemon.stoned = true;
  daemon.getAttack();
  expect(daemon.attack).toBe(72);
});
