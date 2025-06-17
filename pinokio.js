module.exports = {
  version: "4.0",
  title: "Prototype",
  menu: [{
    icon: "python.png",
    title: "Python Project",
    menu: [{
      title: "New Python Project",
      description: "Set up a minimal Python project",
      href: "python/new.js"
    }, {
      title: "New Pytorch Python Project",
      description: "Automatically determine the correct version of Pytorch for each platform",
      href: "python/pytorch.js"
    }, {
      title: "Clone a Python Project",
      href: "python/clone.js"
    }, {
      title: "Clone a Python Project (Pytorch)",
      description: "Clone a python project that uses Pytorch",
      href: "python/clone.js"
    }]
  }, {
    icon: "nodejs.png",
    title: "Node.js Project",
    menu: [{
      title: "New Node.js Project",
      href: "nodejs/new.js"
    }, {
      title: "Clone a Node.js Project",
      href: "nodejs/clone.js"
    }]
  }, {
    icon: "command/minimal.png",
    text: "CLI App Launcher",
    menu: [{
      title: "Instant CLI Launcher",
      description: "CLI apps without separate install steps (npx, uvx, etc.)",
      href: "cli/instant.js"
    }, {
      title: "Installable CLI Launcher",
      description: "CLI apps that require install steps",
      href: "cli/install.js"
    }]
  }]
}
