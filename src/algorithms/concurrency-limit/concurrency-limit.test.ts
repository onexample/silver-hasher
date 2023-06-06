import { concurrencyLimit } from './concurrency-limit';
describe('concurrencyLimit', () => {
    const delayResolve = <T>(value: T, ms: number) => new Promise((resolve) => setTimeout(() => resolve(value), ms));

    it('should return array of results in the same order', async () => {
        const target = 'abcdefghijkl';
        const jobs = Array.from(target, (v, i) => () => delayResolve(v, i * 100));
        const result = await concurrencyLimit(jobs, 2);
        expect(result).toEqual(target.split(''));
    });
});
