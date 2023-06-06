import { debounce } from '../../func';

/**
 * Decorator for Class methods, used debounce()
 *
 * Example:
 *
 *      class ExampleApp {
 *
 *          constructor () {
 *              document.addEventListener('mousemove', this.example)
 *          }
 *
 *          @Debounced(500)
 *          public example() {
 *              console.log('hello')
 *          }
 *      }
 *
 *
 * @param {number} delay
 * @returns {(target, propertyKey: string, descriptor: PropertyDescriptor) => {configurable: boolean; enumerable: boolean; get: (() => any)}}
 * @constructor

 *
 */
export function Debounced<T>(delay: number) {
    return function (target: T, propertyKey: string, descriptor: PropertyDescriptor) {
        return {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            get: function () {
                Object.defineProperty(this, propertyKey, {
                    configurable: descriptor.configurable,
                    enumerable: descriptor.enumerable,
                    value: debounce(descriptor.value, delay),
                });
                return this[propertyKey];
            },
        };
    };
}
