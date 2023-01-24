const theme = {
    size: {
        headerHeight: 80,
        contentWidth: 1200
    },
    color: {
        primaryColor: "#d83993",
        secondaryColor: ""
    },
    text: {
        primaryColor: "#333333",
        secondaryColor: "#222222"
    },
    gray: {
        primary: "#a9a9a9"
    },
    // 样式混入
    mixin: {
        boxShadow: `
            transition: box-shadow 200ms ease;

            &:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
            }
        `,
        multilineEllipsis: (num) => {
            return `
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                -webkit-line-clamp: ${num};
            `;
        }
    }
};

export default theme;
