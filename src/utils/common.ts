// 节流函数,每隔一段时间，只执行一次函数。
export function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

// 防抖动函数
export function debounce(func, delay = 300) {
    let timer;
    return function () {
        const arg = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arg);
        }, delay);

        return timer;
    };
}

/**
 * * js 动画函数
 * @timing 时间函数
 * @draw 绘制函数
 * @duration 动画时间
 */
// export function animate({ timing, draw, duration }) {
//     let start = performance.now();

//     requestAnimationFrame(function animate(time) {
//         // timeFraction 从 0 增加到 1
//         // * 用当前时间减去开始时间除以总时间，得到当前进程百分比数
//         let timeFraction = (time - start) / duration;
//         if (timeFraction > 1 || timeFraction < 0) timeFraction = 1; // 超出动画时间或手动暂停动画归1以正常结束

//         // 计算当前动画状态
//         const progress = timing(timeFraction);

//         draw(progress); // 每次都会绘制

//         if (timeFraction < 1) {
//             // 如果动画时间未到达，继续绘制
//             requestAnimationFrame(animate);
//         }
//     });

//     return function () {
//         start = start + duration; // 使timeFraction为负数来使动画停止
//     };
// }

export function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction 从 0 增加到 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // 计算当前动画状态
        let progress = timing(timeFraction);

        draw(progress); // 绘制

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

// 使节点滚动至固定位置（流畅动画）
export function ElScroll(el: HTMLElement, scrollTop: number, time = 300) {
    const currentTop = el.scrollTop;
    const scrollHeight = scrollTop - currentTop;
    animate({
        duration: time,
        timing: function (timeFraction) {
            return timeFraction;
        },
        draw: function (progress) {
            el.scrollTop = currentTop + progress * scrollHeight;
        }
    });
}
