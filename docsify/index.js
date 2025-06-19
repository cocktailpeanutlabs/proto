const fs = require('fs')
const path = require('path')
let config = {
  name: '',
  repo: '',
  maxLevel: 3,
  themeColor: "black",
}
module.exports = {
  run: [
    {
      method: "input",
      params: {
        title: "Select a folder",
        description: "Select a local folder or a remote git to generate a documentation from",
        form: [{
          title: "Select a type",
          type: "select",
          key: "type",
          items: [{
            value: "local",
            text: "Local Folder",
          }, {
            value: "git",
            text: "Download from Remote Git URL",
          }, {
            value: "web",
            text: "Instantly Load from Remote Web URL (Online)"
          }]
        }]
      }
    },
    {
      method: "jump",
      params: {
        id: "{{input.type}}"
      }
    },
    {
      id: "local",
      method: "filepicker.open",
      params: {
        title: "Select a folder with README.md",
        type: "folder"
      }
    },
    {
      method: async (req, ondata, kernel) => {
        config.basePath = req.input.local
        await fs.promises.writeFile(path.resolve(req.cwd, "docs/docsify.config.json"), JSON.stringify(config, null, 2))
        
//        await fs.promises.cp(req.input.paths[0], path.resolve(req.cwd, 'docs'), { recursive: true, force: true })
//        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true, force: true })
      },
      next: null    // terminate
    },
    {
      id: "git",
      method: "input",
      params: {
        title: "Enter a git URL",
        form: [{
          title: "Git URL",
          description: "Enter a Git URL to clone from",
          key: "url",
        }]
      }
    },
    {
      method: async (req, ondata, kernel) => {
        await kernel.exec({
          message: `git clone ${req.input.url} repo`,
          path: req.cwd
        }, ondata)
        config.basePath = path.resolve(req.cwd, "repo")
        await fs.promises.writeFile(path.resolve(req.cwd, "docs/docsify.config.json"), JSON.stringify(config, null, 2))
        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true, force: true })
      },
      next: null,
    },
    {
      id: "web",
      method: "input",
      params: {
        title: "Enter a Web base URL",
        description: "Enter a base URL from which to load README.md from (ex: https://raw.githubusercontent.com/ryanmcdermott/clean-code-javascript/master/)",
        form: [{
          title: "Base URL",
          key: "url",
        }]
      }
    },
    {
      method: async (req, ondata, kernel) => {
        config.basePath = req.input.url
        await fs.promises.writeFile(path.resolve(req.cwd, "docs/docsify.config.json"), JSON.stringify(config, null, 2))
        await fs.promises.cp(path.resolve(__dirname, "template"), req.cwd, { recursive: true, force: true })
      },
      next: null,
    },
  ]
}
