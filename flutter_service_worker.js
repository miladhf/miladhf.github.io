'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "89c7b15dfef74db12e39aff110180f0e",
"assets/assets/fonts/Shabnam-Bold.ttf": "46e5d535fe67587761993f17835e382e",
"assets/assets/fonts/Shabnam.ttf": "7b18a4a8f65b3f5eac92df3c91fe4400",
"assets/assets/icons/ic_email.svg": "2bc75893ec3fc028be0d972b15479c7b",
"assets/assets/icons/ic_linkedin.svg": "a0a9e32a1142a2ff5ddc39d11824f163",
"assets/assets/icons/ic_phone.svg": "2092444b7592c4674f5fcacdfa7364a1",
"assets/assets/images/bazyaftche_pic.png": "63ecab83685d60e24d9e5ee471bc0eab",
"assets/assets/images/bazyaftche_screenshot_1.jpg": "54a7c4bfddd6a6d0c66a8681c32b5f2a",
"assets/assets/images/bazyaftche_screenshot_10.jpg": "113082e8fb9d06ef2fc34de2512b1f6a",
"assets/assets/images/bazyaftche_screenshot_11.jpg": "65a7b1a85111f884fe7615c5f2d5472d",
"assets/assets/images/bazyaftche_screenshot_12.jpg": "cadb67d50564afdb3e24d3723c3ba886",
"assets/assets/images/bazyaftche_screenshot_13.jpg": "4c755b179d69e319e604cf9bf1e2a6eb",
"assets/assets/images/bazyaftche_screenshot_2.jpg": "8bc8aa767bfad3c83f5b17840ec8810b",
"assets/assets/images/bazyaftche_screenshot_3.jpg": "ab4a9c4f91a72c8d12cdc20c7561a20b",
"assets/assets/images/bazyaftche_screenshot_4.jpg": "98603c97245d37679543ba4e653414a0",
"assets/assets/images/bazyaftche_screenshot_5.jpg": "337ced99be04a921373916932ddd0bbb",
"assets/assets/images/bazyaftche_screenshot_6.jpg": "e9d6f5f476fbc11177a157b6820ae770",
"assets/assets/images/bazyaftche_screenshot_7.jpg": "261a2baeee0654aa9a336d88c8aed6b7",
"assets/assets/images/bazyaftche_screenshot_8.jpg": "9a60025390b20a18fc113fc774de68eb",
"assets/assets/images/bazyaftche_screenshot_9.jpg": "1ca20c8dd33c236e33fed9e667a05f32",
"assets/assets/images/financial_management_pic.png": "f05f54b360316d64b33fde6032c42c2d",
"assets/assets/images/financial_management_screenshot_1.png": "ba2592dfe28c87e73b2df9232ca49405",
"assets/assets/images/financial_management_screenshot_2.png": "cabfd8ed53b9ea8a214faf5a48d2b388",
"assets/assets/images/financial_management_screenshot_3.png": "3b9646c1ec77be853f943dd3e4ff5582",
"assets/assets/images/financial_management_screenshot_4.png": "e89ae4e26b19d261128bf5d46a114be2",
"assets/assets/images/financial_management_screenshot_5.png": "e2ac2fda44f74618902963ff73560658",
"assets/assets/images/financial_management_screenshot_6.png": "1c6fc8ad2f1c7ec337484488949dd749",
"assets/assets/images/komak_pic.png": "d6819f1286dc2b24946fc4f45a2176a2",
"assets/assets/images/komak_screenshot_1.jpg": "b866ece4c13a223afd926429c33a34d9",
"assets/assets/images/komak_screenshot_10.jpg": "6a8ae1c1f15acdce78f664aebe47c3d6",
"assets/assets/images/komak_screenshot_11.jpg": "ab12bc99e65b69abec6e23f0ac57380a",
"assets/assets/images/komak_screenshot_12.jpg": "f734eb1839ddc847c14dee345c3daf25",
"assets/assets/images/komak_screenshot_13.jpg": "66e35d7ec74c459e9c63a41f8c5e837e",
"assets/assets/images/komak_screenshot_14.jpg": "ce77aee0adb76269fc89725fab47990b",
"assets/assets/images/komak_screenshot_15.jpg": "afd4210dbfa53b714120b7f9f98fa2f4",
"assets/assets/images/komak_screenshot_16.jpg": "57eb473ceb19fe6ed786295f9d923d57",
"assets/assets/images/komak_screenshot_17.jpg": "607928e3de963e48b53f634f915654b1",
"assets/assets/images/komak_screenshot_18.jpg": "cbe1946d1123896b8ba1efb970fc4b3d",
"assets/assets/images/komak_screenshot_19.jpg": "a2125cf1291e56bf3debb2a5d737737e",
"assets/assets/images/komak_screenshot_2.jpg": "87428fafa36dadc6f2f4f3bfdae234b8",
"assets/assets/images/komak_screenshot_20.jpg": "bd89cf99ce9e56e6d938183279c71c8b",
"assets/assets/images/komak_screenshot_21.jpg": "62d750d3cf1b913fc8a1b4f3ed6eeea3",
"assets/assets/images/komak_screenshot_22.jpg": "2ddb244e90d42a2b1a39df7885724c81",
"assets/assets/images/komak_screenshot_23.jpg": "4315256bf2b889f851255745ae7e8fd4",
"assets/assets/images/komak_screenshot_24.jpg": "3590f1a2af5bfca5bee8fed5f6ac9662",
"assets/assets/images/komak_screenshot_25.jpg": "3aad987ce50a943680773b84b92a7b40",
"assets/assets/images/komak_screenshot_26.jpg": "f1994052a5ead0c7f0af6028f581a2e3",
"assets/assets/images/komak_screenshot_27.jpg": "dde34008d896181a00d824b0e55ca254",
"assets/assets/images/komak_screenshot_28.jpg": "ab58f4b213662bdc363460e9aa43bd78",
"assets/assets/images/komak_screenshot_3.jpg": "a007f8e7e96d082f46cf9af2bae46154",
"assets/assets/images/komak_screenshot_4.jpg": "c27ae697d0056919b34874b7e55357ed",
"assets/assets/images/komak_screenshot_5.jpg": "ab1ac8544aa135ecae9569643ad34341",
"assets/assets/images/komak_screenshot_6.jpg": "c075e82780c099379fd6b65b15dc92cb",
"assets/assets/images/komak_screenshot_7.jpg": "7abae5eec29d5f71dbe9d3484e57f333",
"assets/assets/images/komak_screenshot_8.jpg": "baeeb3b7439469971b018d5069c8ab03",
"assets/assets/images/komak_screenshot_9.jpg": "1e06d0b22766e833689047d128c17d2d",
"assets/assets/images/market_pic.png": "7c8c00e5f22312c507c2c0ece3c334e0",
"assets/assets/images/market_screenshot_1.jpg": "ee76510bfc1bd867669c33b49de184ea",
"assets/assets/images/market_screenshot_10.jpg": "a72e684a85905de5b6690d64c483763a",
"assets/assets/images/market_screenshot_2.jpg": "1860027b8f2b4b2ae2975a1711d88a61",
"assets/assets/images/market_screenshot_3.jpg": "4e81ce2b8dd85213c0a14c5eda72b760",
"assets/assets/images/market_screenshot_4.jpg": "34e3f4c82bb0c42f2d4a9eb81e76503a",
"assets/assets/images/market_screenshot_5.jpg": "08d021b25e58528e060aef94e4f5cad9",
"assets/assets/images/market_screenshot_6.jpg": "9588ec70638d87b581d302c8c8475265",
"assets/assets/images/market_screenshot_7.jpg": "1ce25baf89423d6c763e7c1bbeb82515",
"assets/assets/images/market_screenshot_8.jpg": "a9224c83af28e41f32204e4e2c163025",
"assets/assets/images/market_screenshot_9.jpg": "0d820f167a2346270169a913c77e76cc",
"assets/assets/images/tebebehan_pic.png": "e37c09c02f392ef403b44c5ffe9cbca9",
"assets/assets/images/tebebehan_screenshot_1.jpg": "adc6792d88bf70a50694772d916dd877",
"assets/assets/images/tebebehan_screenshot_2.jpg": "8233fc4a0d459b823555b2be31d0a4bc",
"assets/assets/images/tebebehan_screenshot_3.jpg": "c13c615a23037baf87acf87f3756cff7",
"assets/assets/images/tebebehan_screenshot_4.jpg": "a2021e75502331744018f66b917ebb53",
"assets/assets/images/tebebehan_screenshot_5.jpg": "6adb572b9670e9e667720e3be107a188",
"assets/assets/outputs/bazyaftche.apk": "2b8bff5315922e38c68bfdbe2859f291",
"assets/assets/outputs/financial-management_setup.exe": "f6da190364b8165508928cef9083e24c",
"assets/assets/outputs/komak.apk": "d9b13435226c1da88fcf34a0afe06e01",
"assets/FontManifest.json": "58dcf88231be77222a102d95a7749982",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "bc0be8588e49b7c2c66839ff2bb197d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "abcffb1dfb0610666657bd6c6f6b3747",
"icons/Icon-192.png": "1e4c6bd580c20f69251ff2245f57a6e1",
"icons/Icon-512.png": "1e4c6bd580c20f69251ff2245f57a6e1",
"icons/Icon-maskable-192.png": "1e4c6bd580c20f69251ff2245f57a6e1",
"icons/Icon-maskable-512.png": "1e4c6bd580c20f69251ff2245f57a6e1",
"index.html": "0ae233197aba1a5598e9cc18533b051a",
"/": "0ae233197aba1a5598e9cc18533b051a",
"main.dart.js": "0d383f19cc18f8ad7f68df0778ce7b94",
"manifest.json": "1ba7ffa14dc66cc9bc67bcbb070f2a60",
"version.json": "f21b77009aa3d2bf8e49b390d379b8a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
