const render = (options) => {
  return Promise.resolve();
};

(global => {
  global['prehtml'] = {
    bootstrap: () => {
      console.log('html开始加载');
      return Promise.resolve();
    },
    mount: (options) => {
      console.log('html页面加载完毕', options);
      return render(options);
    },
    unmount: () => {
      console.log('html页面销毁');
      return Promise.resolve();
    },
  };
})(window);
