/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

/*
  Об'єкти можуть бути будь-якого типу. Якщо вони мають однакові ключі та тип їх значень.
*/

function merge1<T extends object>(objA: T, objB: T) {
  return Object.assign(objA, objB);
}

export {}