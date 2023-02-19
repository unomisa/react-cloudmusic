const theme = {
    size: {
        headerHeight: 80,
        contentWidth: 1200,
        playBarHeight: 90
    },
    color: {
        primaryColor: "#d83993",
        secondaryColor: ""
    },
    text: {
        primaryColor: "#333333",
        secondaryColor: "#222222"
    },
    link: {
        normal: "#527fb0",
        hover: "#7c83fd"
    },
    gray: {
        primary: "#808080",
        secondary: "#a0a0a0"
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
        },
        border: `
           border: 1px solid #f3f3f3;
        `
    }
};

export default theme;
