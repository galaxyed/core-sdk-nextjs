module.exports = {
  name: '@icanid/icanid-sdk-nextjs',
  out: './docs/',
  exclude: [
    './src/icanid-session/**',
    './src/session/cache.ts',
    './src/client/use-config.tsx',
    './src/utils/!(errors.ts)'
  ],
  entryPointStrategy: 'expand',
  excludeExternals: true,
  excludePrivate: true,
  hideGenerator: true,
  readme: 'none'
};
