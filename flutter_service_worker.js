'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"version.json": "e667b8c784d8c302f7e973e8cd57f6ba",
"main.dart.js": "7da92d5069308fc41f205bd7ce154956",
"assets/AssetManifest.json": "29bd54d92c5f002c8c7ae9c122575453",
"assets/NOTICES": "86ae794876426dc0ddc190946a159664",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "67184c95f7bcce901b4ae906ee18dceb",
"assets/AssetManifest.bin.json": "03fd80502da7336a70d3e16008e8964a",
"assets/fonts/MaterialIcons-Regular.otf": "4d57cae784b3992673cf061e93c97ce2",
"assets/assets/images/ed-astra-logo.png": "5df59d4e7727c0a74d47713f0400b566",
"assets/assets/images/404.png": "112d5af6363ba91b67e49ae6c334cb57",
"assets/assets/images/ed-astra-text.png": "0a5e0232c916660e5eff57198cb163d7",
"assets/assets/images/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "c9e47dbb0e1927076ed7b2e1ec157be7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "6d346d8d73f1c5158dfc06a7f59116b0",
".git/config": "8dcd99a4e9a2518d816380bc13b1d980",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/remotes/origin/main": "681cbb0daa9a882814b954d8e9343ba7",
".git/refs/heads/main": "681cbb0daa9a882814b954d8e9343ba7",
".git/logs/HEAD": "a75410838413680d92572901849134d4",
".git/logs/refs/remotes/origin/main": "bdc7990dda8ff6a403fc78bd9fd4027e",
".git/logs/refs/heads/main": "9bf994f8b1577d1079296ea3e80ac307",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f13ce6cbdeb782c355520bf0d5fb0aa521ea75": "a8e9a1045deec148c9aad83ab9726f8e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/9f/9da3c21a536ce797dd7fdc90cb6279bbe4e4a7": "10525dbbe0bfe27bdbef93c83add0cd2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/ac/195be4a416cad7c24a42af2f4ef8e1544f0bc3": "f595a8c830bed97612708998c24177b2",
".git/objects/3b/235323b695bc4045ca532b36e9e45bdcabc1e5": "f089c46b997c0d6ea61e25d20690a05d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/be/bac9a7ac506fbe17ce1d31baa42e64190746df": "1b8dabd4be0cd0a01827486630b647a1",
".git/objects/cc/c9a6fb3b940ec891ce1f28ffc342ad07be4152": "37f42525e11c4569babc2c94c8d91fdf",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/90/c6b094cb9cd6876427a5e27c264e3f116f9b70": "35ac941a8e45438d0f9d140671127661",
".git/objects/bb/8a0e145d3b3735415e1ef00d4b90c394159e2d": "68b04ad6a6a6711df56078be14efd95d",
".git/objects/76/906792b73038a4d6d3f244f30102949a2ca9f8": "e52f7ed184948c9714dd30b32f2409b4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4b/d6f2bc32706a5444ffd4242f870b901ebfdeb7": "a998125ca24013cc7d6f4454855bbb30",
".git/objects/5b/f5e64db2c42207d9e1f1a8e3579d6ecd5baa6c": "211264396d14731ff143b7268e45ac08",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/fa/1e45dd93ca38e87794bf9e5263bebf5bb21079": "c0dbd185f26c21bf08c6da0d18420594",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/34/b8f91bb1be16d5ae7494c84f03f150f9384d75": "81762a2969a9e0e4fd0f89660c5d1c33",
".git/objects/4e/47a8b89e43018226f953c2a94f86e7272454cd": "80c08cbe289b6f521d98c59dea11917d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b2/fc24f45380bfc833740b60f85690594c619698": "99da044026d627559292b4841f0a4b8b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/52/591804085cd96e3355c7038c5a38e851f3316f": "c3df91ddb32c0a1793081efc2ad7a4ae",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/cc3a3eaee39d2c60280ebf1e403f1414bf90bb": "fdbcc303fd77c98249549ee71a483d99",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/8d/013ddda80a8552a0feaae01e2e9c9dd5331bb5": "c4b7b71981e76c08348418c4038db04f",
".git/objects/b6/960cbc3c5d11d6edb4ddb8cd47980c67cea697": "b47b9eb5e5fe6d4c286ef99be63e95f1",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/f4/8239d0342224de03e7879927ccf06a57eb7847": "259f7ea8da27e4976e6b6f69941a26ec",
".git/objects/a9/3509ddea2c024b93e3a2bf9df83041d908f0e3": "92a160d048df1cbc13469b2ce876b87d",
".git/objects/05/f0a993a75675fa543a050a14e0f4ea6c747fae": "4f9e4ea773616fd5cb76bf78f763587c",
".git/objects/b0/d1e73644fdf4107dffb1c2b72576f83df2134d": "b984822524f74f3adeed61a14506c8a0",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/17/d6a31406f6b77ab831f455598113db2c1880fc": "c553e3f74e97870daeb1d1305b351e3f",
".git/objects/66/dca4c280e614dc2cfd846773e3ec6309f22e94": "7322587c08da3a2ccf80afe8d380825f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"manifest.json": "9c3a01762a84a09e43d644eb7b606da5",
"index.html": "41d8c000a691eddccccc943ed54954a5",
"/": "41d8c000a691eddccccc943ed54954a5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
