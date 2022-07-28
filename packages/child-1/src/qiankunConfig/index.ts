const env = import.meta.env

function setDomain() {
  window.ISNK = document.domain.indexOf('192') > -1 // 如果是172客户的域名,那就拿客户地址,自动判断,这里搞个全局判断标志
  window.ORIGIN =
    env.MODE === 'development'
      ? process.env.VITE_ORIGIN_DEV
      : window.ISNK
      ? process.env.VITE_ORIGIN_PRO
      : process.env.VITE_ORIGIN_PRO_TEST
}
setDomain()
