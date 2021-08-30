import axios from 'axios'

export default {
  defaults: {
    changefreq: 'daily',
    priority: 0.8,
    lastmod: new Date()
  },
  exclude: [],
  routes: async () => {
    const routeSitemap = []
    const axiosGet = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const getData = await Promise.all([
      axiosGet.get('/articles', {
        params: {
          'fields[articles]': 'slug',
          'filter[type]': 'info',
          sort: '-published_at',
          'page[size]': 30
        }
      })
    ])

    getData[0].data.data.forEach(i => {
      routeSitemap.push('/info-hidrasi/artikel/' + i.slug)
    })

    return routeSitemap
  }
}