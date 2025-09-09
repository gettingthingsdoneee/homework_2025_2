'use strict';
 
/**
 * Функция, возвращающая объект с уникальными свойствами из произвольного числа объектов
 * @param {...Object} objects - передаваемые объекты
 * 
 * @example
 * // returns { a: 1, d: 5, e: 6 }
 * findUniqueProperties(
 *  { a: 1, b: 2, c: 3 },
 *  { b: 2, c: 4, d: 5 },
 *  { b: 2, e: 6 }
 * );
 * 
 * @returns {Object} - объект с уникальными properties
 */
const findUniqueProperties = (...objects) => {
    if (objects.length === 0) {
        return {}
    }

    objects.forEach(obj => {
        if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
            throw new Error(`Invalid input: ${obj}`);
        }
    });

    const result = {};
    const keyCounts = new Map(); 
    
    objects.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            const currentCount = keyCounts.get(key) || 0;
            const newCount = currentCount + 1;
            keyCounts.set(key, newCount);
            
            if (newCount === 1) {
                result[key] = value;
            } else if (newCount === 2) {
                delete result[key];
            }
        });
    });
    
    return result;
};
