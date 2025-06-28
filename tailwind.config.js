const { bitsUiPreset } = require("bits-ui");

module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/bits-ui/**/*.{js,svelte,ts}"
  ],
  theme: {
    extend: {},
  },
  presets: [bitsUiPreset()],
  plugins: [],
};