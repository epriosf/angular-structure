module.exports = {
  extends: ['@commitlint/config-conventional'],
  // You can add custom rules or modify existing ones here
  rules: {
    // Example custom rule to require a scope
    'scope-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'test']],
  },
};
