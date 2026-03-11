module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app", 
        message: [
          "pnpm dev",
        ],
      }
    }
  ]
}
