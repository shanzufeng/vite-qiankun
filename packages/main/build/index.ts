import { configHtmlPlugin } from './src/html'

export function createVitePlugins() {
  const vitePlugins = []
  vitePlugins.push(configHtmlPlugin())
  return vitePlugins
}
