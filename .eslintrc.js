module.exports = {
    root: true,
    env: {
        // 全局环境
        browser: true,
        es2021: true, // 例子：这样设置之后，就支持新的 ES6 全局变量和类型
        node: true // 例子：这样设置之后，就支持新的 node 全局变量和类型
    },
    parserOptions: {
        // 优先级低于parse的语法解析配置
        parser: "@typescript-eslint/parser", // 指定ESlint的解析器
        ecmaVersion: 2020, // 允许使用ES语法
        sourceType: "module" // 允许使用import
    },
    extends: [],
    plugins: [], // 使用第三方插件检查规则
    rules: {
        // 规则，手动自定义代码规范
    }
};
