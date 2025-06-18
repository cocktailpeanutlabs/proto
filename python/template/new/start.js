module.exports = {
  daemon: true,
  run: [
    // Edit this step to customize your app's launch command
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",                // Edit this to customize the venv folder path
        env: { },                   // Edit this to customize environment variables (see documentation)
        message: [
          "python app.py"
        ],
        on: [{
          // The regular expression pattern to monitor.
          // When this pattern occurs in the shell terminal, the shell will return,
          // and the script will go onto the next step.
          "event": "/http:\/\/\\S+/",   

          // "done": true will move to the next step while keeping the shell alive.
          // "kill": true will move to the next step after killing the shell.
          "done": true
        }]
      }
    },
    {
      when: "{{input && input.event && Array.isArray(input.event) && input.event.length > 0}}",
      method: "local.set",
      params: {
        // the input.event is the regular expression match object from the previous step
        url: "{{input.event[0]}}"
      },
      next: null
    },
    {
      id: "error",
      method: "log",
      params: {
        raw: "\r\nTo automatically launch the web app in a new tab, the app code must print the launch URL in the terminal..."
      },
    },
  ]
}

