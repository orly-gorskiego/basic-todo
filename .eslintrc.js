module.exports = {
  "extends": [
    "airbnb",
  ],
    "parser": "babel-eslint",
      "rules": {
    "import/no-unresolved": "off",
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [".js", ".jsx"]
        }
      ],
  },
  "rules": {
    "semi": 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/jsx-props-no-spreading": 0,
    "@typescript-eslint/camelcase": 0,
    "react/jsx-indent": 0,
    "max-len": 1,
  },
}