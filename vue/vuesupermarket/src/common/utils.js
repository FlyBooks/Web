export function debounce(func, delay) {
    let timer = null;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export function format(date, fmt) {
    let o = {
        "M+": date.getMonth() + 1,
        'd+': date.getDate(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (let key in o) {
        if (new RegExp(`(${key})`).test(fmt)) {
            let str = o[key] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substring(str.length);
}
