module.exports = {
  apps: [{
    name: 'ericconstantinides.com',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'eric',
      host: 'eric2',
      ref: 'origin/master',
      repo: 'git@github.com:ericconstantinides/ericconstantinides.com.react.git',
      path: '/var/www/node/ericconstantinides.com',
      'post-deploy': 'rm -Rf node_modules && npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
