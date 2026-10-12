import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nb9kk4a8',
    dataset: 'production'
  },
  deployment: {
    appId: 'j65rnjms4lf2tay27dwkr1zr',
    autoUpdates: true,
  },
})
