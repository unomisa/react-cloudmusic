export function formatCount(count) {
    if (count >= 100000) {
        return Math.floor(count / 10000) + "万";
    }
    return count;
}

/**
 * @description: 格式化日期
 * @param {String} fmt 格式化字符串
 * @param {Date} date Date对象
 * @return {String} 格式化后的字符串
 */
export function dateFormat(fmt: string, date: Date) {
    let ret;
    const opt: Record<string, any> = {
        "Y+": date.getFullYear().toString(), // 年
        "M+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "h+": date.getHours().toString(), // 时
        "m+": date.getMinutes().toString(), // 分
        "s+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(
                ret[1],
                ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
            );
        }
    }
    return fmt;
}
