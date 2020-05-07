let field = document.getElementById('field')

let Char = class {
  constructor(name, type, health, level, attack, defence) {
  this.name = name;
  this.type = type;
  this.health = health;
  this.level = level;
  this.attack = attack;
  this.defence = defence;
}
}



let zombIcon = '🧟',
bowIcon = '😠',
swordsmanIcon = '😡',
magicIcon = '🧐',
daemonIcon = '👿',
undeadIcon = '💀',
attackIcon = '⚔',
defenceIcon = '🛡',
healthIcon = '❤';

function zombie(Char) {
  this.name = 'Зомби';
  this.type = 'Monster';
  this.health = 10;
  this.level = 1;
  this.attack = 3;
  this.defence = 2;
field.innerHTML = `${zombIcon}\n ${this.name[0]}(${this.level})\n ${attackIcon}${this.attack}\n${defenceIcon}${this.defence}\n${healthIcon}${this.health}`
}

function swordsman(Char) {
  this.name = 'Мечник';
  this.type = 'Swordsman';
  this.health = 50;
  this.level = 1;
  this.attack = 40;
  this.defence = 50;
field.innerHTML = `${swordsmanIcon}\n ${this.name[0]}(${this.level})\n ${attackIcon}${this.attack}\n${defenceIcon}${this.defence}\n${healthIcon}${this.health}`
}

function daemon(Char) {
  this.name = 'Демон';
  this.type = 'Daemon';
  this.health = 100;
  this.level = 1;
  this.attack = 65;
  this.defence = 100;
field.innerHTML = `${daemonIcon}\n ${this.name[0]}(${this.level})\n ${attackIcon}${this.attack}\n${defenceIcon}${this.defence}\n${healthIcon}${this.health}`
}

function magician(Char) {
  this.name = 'Маг';
  this.type = 'Magican';
  this.health = 30;
  this.level = 1;
  this.attack = 30;
  this.defence = 0;
field.innerHTML = `${magicIcon}\n ${this.name[0]}(${this.level})\n ${attackIcon}${this.attack}\n${defenceIcon}${this.defence}\n${healthIcon}${this.health}`
}

function undead(Char) {
  this.name = 'Лич';
  this.type = 'Undead';
  this.health = 20;
  this.level = 1;
  this.attack = 25;
  this.defence = 5;
field.innerHTML = `${undeadIcon}\n ${this.name[0]}(${this.level})\n ${attackIcon}${this.attack}\n${defenceIcon}${this.defence}\n${healthIcon}${this.health}`
}

undead()