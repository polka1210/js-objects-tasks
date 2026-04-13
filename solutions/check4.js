import getDomainInfo from './solutions/4-using.js';

console.log('Тип функции:', typeof getDomainInfo);
console.log('Результат для yandex.ru:', getDomainInfo('yandex.ru'));
console.log('Результат для https://yandex.ru:', getDomainInfo('https://yandex.ru'));