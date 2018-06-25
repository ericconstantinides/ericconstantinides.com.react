module.exports = {
  apps: [{
    name: 'ericconstantinides.com',
    script: 'node server.js'
  }],
  deploy: {
    production: {
      user: 'eric',
      host: 'eric2',
      ref: 'origin/master',
      repo: 'git@github.com:ericconstantinides/ericconstantinides.com.react.git',
      path: '/var/www/node/ericconstantinides.com',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
