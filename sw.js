importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06fbc85b65fddbf6779f.js",
    "revision": "6c6dbd5ae3a830bc0ed257ec21dfeede"
  },
  {
    "url": "/_nuxt/0ad4158a05c0dfac9b76.js",
    "revision": "3b0dbda3d2ecd2d6da96d0f77769ae1a"
  },
  {
    "url": "/_nuxt/11793363fe625ff8329e.css",
    "revision": "8a3038e77e4f64df341c8df2c984cb30"
  },
  {
    "url": "/_nuxt/1526fe6b65aea4324e40.js",
    "revision": "0a22dc2da8979846033eff723f499d10"
  },
  {
    "url": "/_nuxt/2ab0257c15ad97c373f4.css",
    "revision": "4df0a19378ca0f3089d8259eb9e99cec"
  },
  {
    "url": "/_nuxt/2dbec88e06cabe51f3db.css",
    "revision": "4397a62f27c45343aa58544ad6c0da94"
  },
  {
    "url": "/_nuxt/47258f84de728e518e70.js",
    "revision": "93b0a0a771d33f7e20484030a2f4048f"
  },
  {
    "url": "/_nuxt/48704163a79e006aefc3.css",
    "revision": "c6160867a9c9586db6d6922d09b2f10a"
  },
  {
    "url": "/_nuxt/48e70ea58e9686d99f09.js",
    "revision": "0501ff18b7438029d4fc8be82848e2d6"
  },
  {
    "url": "/_nuxt/683eb362f6cbe0514622.css",
    "revision": "4f5a7cf9d39a529cb1d6806b81d19626"
  },
  {
    "url": "/_nuxt/69519637906d4bddb967.js",
    "revision": "92473b7347b894b2b558ede5dd1b2500"
  },
  {
    "url": "/_nuxt/6f5b41c2bc986b73caab.css",
    "revision": "115e8c591234c5172377482478676f82"
  },
  {
    "url": "/_nuxt/8cecb87dee827cdc367a.js",
    "revision": "2e223b217b26471152f803f596e332e6"
  },
  {
    "url": "/_nuxt/90de0c4a21130d597984.js",
    "revision": "ea7179932a022a454982b1a9b07e2872"
  },
  {
    "url": "/_nuxt/943a38eb4f580545b16a.css",
    "revision": "61f4650f30cfe645cb9d74d63f055a9e"
  },
  {
    "url": "/_nuxt/9a99e71df16dbc7d83bb.js",
    "revision": "8b412491108766749a0da94427ba842d"
  },
  {
    "url": "/_nuxt/9e450fb9ab1585467900.js",
    "revision": "24b22f5b08a3d0724cff7babdb5a825a"
  },
  {
    "url": "/_nuxt/b02d574903b0dbdede9b.js",
    "revision": "889402629f231a7b565770bbde9c28bc"
  },
  {
    "url": "/_nuxt/c1e6672eb01629102c03.js",
    "revision": "0db7606dce293c560c6c83b7b0b79903"
  },
  {
    "url": "/_nuxt/c40d45a024df27183e86.css",
    "revision": "82d2a16f4f142c5dea73c3be774f7996"
  },
  {
    "url": "/_nuxt/dd8ccc90b0db62d7a369.js",
    "revision": "159fc9ee479dc4c713d363a47ca73cc2"
  },
  {
    "url": "/_nuxt/e88d893abda6f7535d2e.css",
    "revision": "33f8294302dfb6a0666d01e6708e5265"
  },
  {
    "url": "/_nuxt/e99fafeb9e2b656da5f0.js",
    "revision": "ec6fb4984abeed4dac000b72f3cfecc9"
  }
], {
  "cacheId": "worlds-adrift-map",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://map.cardinalguild.com/data/.*'), workbox.strategies.cacheFirst({"cacheName":"surveyor-geo-cache","cacheExpiration":{"maxAgeSeconds":86400}}), 'GET')

workbox.routing.registerRoute(new RegExp('/data/.*'), workbox.strategies.cacheFirst({"cacheName":"surveyor-geo-cache-data","cacheExpiration":{"maxAgeSeconds":86400}}), 'GET')

workbox.routing.registerRoute(new RegExp('/island_images/.*'), workbox.strategies.cacheFirst({"cacheName":"media-cache","cacheExpiration":{"maxAgeSeconds":86400}}), 'GET')
