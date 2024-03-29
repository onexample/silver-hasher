export function debounce(fn, delay: number, immediate?: boolean) {
    //Shared timeout between each closure call;
    let timerId;

    return function (...args) {
        const context = this;

        const later = () => {
            timerId = null;

            if (!immediate) {
                fn.apply(context, args);
            }
        };

        clearTimeout(timerId);

        timerId = setTimeout(later, delay);

        if (immediate && !timerId) {
            fn.apply(context, args);
        }
    };
}
