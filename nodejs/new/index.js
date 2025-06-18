const fs = require('fs')
const path = require('path')
module.exports = {
  run: [
    {
      method: async (req, ondata, kernel) => {
        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true })
      }
    }
  ]
}
