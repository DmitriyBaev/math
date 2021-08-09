import Character from '../Character';
import Magician from '../Magician';
import Deamon from '../Deamon';

const magician = new Magician('Gina', 'magician');
const deamon = new Deamon('Joe', 'deamon');

test('correctAttack1', () => {
  magician.dist = 2;
  magician.stoned = true;
  magician.attack = 100;

  expect(magician.attack).toBe(85);
});

test('correctAttack2', () => {
  magician.dist = 1;
  magician.stoned = false;
  magician.attack = 100;

  expect(magician.attack).toBe(100);
});

test('notCorrectAttack', () => {
  deamon.dist = 200;
  deamon.stoned = true;
  deamon.attack = 100;

  expect(deamon.attack).toBe(0);
});

// проверки из предыдущих домашек, чтобы Jest показывал 100% покрытие тестами
test('Character', () => {
  const result = new Character('Edgar', 'bowerman');
  const expectation = {
    name: 'Edgar',
    type: 'bowerman',
    health: 100,
    level: 1,
  };

  expect(result).toEqual(expectation);
});

test('lengthOfName', () => {
  expect(() => new Deamon('E', 'deamon')).toThrowError(
    'Некорректная длина имени',
  );
});

test('typeOfUnit', () => {
  expect(() => new Deamon('Edgar', 'archer')).toThrowError(
    'Некорректный тип юнита',
  );
});
