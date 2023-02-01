import { useAppSelector } from "@/store/redux-hooks";

export function useLoginAuth(fnc: Function): () => void {
    const fncCopy = fnc;
    const { isLogin } = useAppSelector((state) => state.common);

    return function () {
        if (!isLogin) {
            console.log("还没有登录");
        } else {
            console.log("arguments: ", arguments);
            fncCopy(arguments);
        }
    };
}
