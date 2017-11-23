module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [// 使用单引号
            "error",
            "single"
        ],
        "semi": [// 语句不以分号结尾
            "error",
            "never"
        ],
        "dot-notation": [// 不允许关键字出现在变量中
            "error",
            {"allowKeywords": false}
        ],
        "keyword-spacing": [// 确保字符前后空格的一致性
            "error"
        ],
        "spaced-comment": [// 注释前需要一个空格
            "error"
        ]
    }
};