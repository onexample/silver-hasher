export const concurrencyLimit = async <T>(jobs: Array<() => Promise<T>>, limit = Infinity): Promise<T[]> => {
    if (!Number.isFinite(limit)) {
        return Promise.all(jobs.map((job) => job()));
    }

    const result: T[] = [];
    const jobEntries = jobs.entries();

    const processTask = async (iterator) => {
        for (const [index, job] of iterator) {
            result[index] = await job();
        }
    };

    const workers = Array(limit).fill(jobEntries).map(processTask);
    await Promise.allSettled(workers);

    return result;
};
