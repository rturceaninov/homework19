module.export = {
    "env": {
        "browser": true,
        "jest": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5,
        "soutceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-multiple-empty-lines": [
            "error"
        ],
        "coma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ]
    }
};