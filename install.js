module.exports = {

  pre: [
    {
      env: "WANGP_ROOT",
      description: "Enter the path to an existing Wan2GP installation (e.g., C:\\pinokio\\api\\wan2gp.got\\app). Leave this blank to let the installer perform a fresh setup automatically.",
      default: ""
    }
  ],

  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/deepbeepmeep/LTX-Desktop-WanGP.git app"
      }
    },
    
    {
      method: "shell.run",
      params: {
        path: "app",
        env: {
          WANGP_ROOT: "{{envs.WANGP_ROOT}}"
        },
        message: [
          "pnpm setup:dev:win",
          "pnpm dev"
        ]
      }
    }
  ]
}
