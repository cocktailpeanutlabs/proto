module.exports = {
  version: "4.0",
  title: "Prototype",
  menu: [{
    image: "python.png",
    text: "Python Project",
    menu: [{
      text: "New Python Project",
      href: "python/new.js"
    }, {
      text: "New Pytorch Python Project",
      href: "python/pytorch.js"
    }, {
      text: "Clone a Python Project",
      href: "python/clone.js"
    }, {
      text: "Clone a Python Project (Pytorch)",
      description: "Clone a python project that uses Pytorch",
      href: "python/clone.js"
    }]
  }, {
    image: "nodejs.png",
    text: "Node.js Project",
    menu: [{
      text: "New Node.js Project",
      href: "nodejs/new.js"
    }, {
      text: "Clone a Node.js Project",
      href: "nodejs/clone.js"
    }]
  }, {
    image: "command/minimal.png",
    text: "CLI App Launcher",
    menu: [{
      text: "Instant CLI Launcher",
      href: "cli/instant.js"
    }, {
      text: "Installable CLI Launcher",
      href: "cli/install.js"
    }]
  }]
}
