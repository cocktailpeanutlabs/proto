const fs = require('fs')
const path = require('path')
module.exports = {
  run: [
    {
      method: "input",
      params: {
        title: "Command Launcher",
        form: [{
          title: "Enter the launch command",
          key: "command"
        }]
      }
    },
    {
      method: async (req, ondata, kernel) => {
        await fs.promises.cp(path.resolve(__dirname, "template/install"), req.cwd, { recursive: true })
        await fs.promises.writeFile(path.resolve(req.cwd, "start.json"), JSON.stringify({
          run: [{
            method: "shell.run",
            params: {
              input: true,
              message: req.input.command
            }
          }]
        }, null, 2))
      },
    }
  ]
}
