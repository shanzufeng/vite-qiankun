import { configHtmlPlugin } from './src/html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export function createVitePlugins() {
  const vitePlugins = []
  vitePlugins.push(configHtmlPlugin())
  vitePlugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()]
    })
  )
  vitePlugins.push(
    Components({
      resolvers: [ElementPlusResolver()]
    })
  )
  return vitePlugins
}
