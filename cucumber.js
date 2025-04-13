module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["tests/step_definitions/**/*.ts"],
    paths: ["tests/features/"],
    format: ["summary", "progress-bar"],
  },
};
