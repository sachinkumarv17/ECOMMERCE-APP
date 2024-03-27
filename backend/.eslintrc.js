module.exports = {
    env :{
        es2016: true,
        mode : true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser : '@typescript-eslint/parser',
    parserOptions:{
        ecmaVersion : 'es2016',
        sourceType : 'module'
    },
    Plugins :['@typescript-eslint'],
}