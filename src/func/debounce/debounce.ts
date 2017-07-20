export function debounce (fn, delay: number)  {

    //Shared timeout between each closure call;
    let timerId;

    return function () {
        let context = this, args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(() => fn.apply(context, args), delay);
    }
}
