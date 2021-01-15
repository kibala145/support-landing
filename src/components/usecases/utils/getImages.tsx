export const getImages = (r: __WebpackModuleApi.RequireContext) => {
  const imgs = r.keys().map((item) => ({ content: r(item).default, id: item.replace(/\.\/|\.png/gi, '') }))

  return imgs
}
