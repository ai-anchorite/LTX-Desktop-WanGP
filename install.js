module.exports = {

  pre: [
    {
      env: "WANGP_ROOT",
      description: "Enter the path to an existing Wan2GP installation (the folder containing wgp.py), e.g. C:\\pinokio\\api\\wan2gp.git\\app. Or Leave as 'None' for a fresh setup.",
      default:"None"
    }
  ],
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/deepbeepmeep/LTX-Desktop-WanGP.git app",
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
          "pnpm setup:dev:win"
        ]
      }
    },

    {
      method: "notify",
      params: {
        html: "Installation complete! Click Start to run LTX-Desktop-WanGP!."
      }
    }
  ]
}
