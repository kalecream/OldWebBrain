module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "perf", "refactor", "style", "test", "build", "ops", "docs", "chore", "merge", "revert", "WIP"],
    ],
    "scope-enum": [2, "always", []],
    "subject-case": [2, "never", ["sentence-case"]],
  },
};
