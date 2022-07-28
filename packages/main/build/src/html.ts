import { createHtmlPlugin } from 'vite-plugin-html'

export function configHtmlPlugin() {
  return createHtmlPlugin({
    inject: {
      data: {
        title: '我是main项目'
      },
      tags: [
        {
          injectTo: 'body-prepend', // 插入到哪里
          tag: 'div',
          attrs: {
            id: 'tag'
          }
          // children: '会在哪里显示？'里面的内容
        }
      ]
    }
  })
}
