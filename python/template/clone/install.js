const config = require('./config.json')
module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        message: [
          `git clone ${config.url} app`
        ],
      },
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: `${config.install_path}`,
        message: [
          `${config.install_command}`,
        ],
      }
    },
  ]
}
