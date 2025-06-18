module.exports = {
  version: "4.0",
  title: "Prototype",
  menu: [{
    image: "python/python.png",
    text: "Python Project",
    menu: [{
      text: "New Python Project",
      href: "python/new.js",
      readme: "python/new.md"
    }, {
      text: "New Pytorch Python Project",
      href: "python/pytorch.js",
      readme: "python/pytorch.md"
    }, {
      text: "Clone a Python Project",
      href: "python/clone.js",
      readme: "python/clone.md"
    }, {
      text: "Clone a Python Project (Pytorch)",
      description: "Clone a python project that uses Pytorch",
      href: "python/clone.js",
      readme: "python/clone_pytorch.md"
    }]
  }, {
    image: "nodejs/nodejs.png",
    text: "Node.js Project",
    menu: [{
      text: "New Node.js Project",
      href: "nodejs/new.js",
      readme: "nodejs/new.md"
    }, {
      text: "Clone a Node.js Project",
      href: "nodejs/clone.js",
      readme: "nodejs/clone.md"
    }]
  }, {
    image: "cli/minimal.png",
    text: "CLI App Launcher",
    menu: [{
      text: "Instant CLI Launcher",
      href: "cli/instant.js",
      readme: "cli/instant.md"
    }, {
      text: "Installable CLI Launcher",
      href: "cli/install.js",
      readme: "cli/install.md"
    }]
  }]
}
