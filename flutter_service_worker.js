'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "df1f2acaca88d46d30ae7542af71c6a3",
"icons/Icon-192.png": "19a1ffe82dd8c1477807d61163291bf4",
"icons/Icon-maskable-192.png": "19a1ffe82dd8c1477807d61163291bf4",
"icons/Icon-512.png": "229432b5e42588ef83e9e033a688946b",
"icons/Icon-maskable-512.png": "229432b5e42588ef83e9e033a688946b",
"version.json": "e667b8c784d8c302f7e973e8cd57f6ba",
"CNAME": "1ef1c29db7a8134ba4b94ac6b4f1af01",
"main.dart.js": "a9fe2bfa67c640196ff79cd3e82c21a8",
"assets/AssetManifest.json": "29bd54d92c5f002c8c7ae9c122575453",
"assets/NOTICES": "86ae794876426dc0ddc190946a159664",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "67184c95f7bcce901b4ae906ee18dceb",
"assets/AssetManifest.bin.json": "03fd80502da7336a70d3e16008e8964a",
"assets/fonts/MaterialIcons-Regular.otf": "8d11ca9f24ba966c74a246a8670d3fd7",
"assets/assets/images/ed-astra-logo.png": "5df59d4e7727c0a74d47713f0400b566",
"assets/assets/images/404.png": "112d5af6363ba91b67e49ae6c334cb57",
"assets/assets/images/ed-astra-text.png": "0a5e0232c916660e5eff57198cb163d7",
"assets/assets/images/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "50ff45f73ba19d554f2f535dec031530",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "d7df275f1e4395c111bfc54dd6eef7b6",
".git/config": "71373c5d45437770186eb21365f10079",
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
".git/refs/remotes/origin/main": "44661fc8a1385e5165a4c4bd18c5023c",
".git/refs/heads/main": "44661fc8a1385e5165a4c4bd18c5023c",
".git/logs/HEAD": "eb5da1e6aa006517424b9084276cd491",
".git/logs/refs/remotes/origin/main": "1dac9c222cc67685cd239ca2a19682d4",
".git/logs/refs/heads/main": "f49a1ed837135c751c7460aa1d081891",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/6ce2a09168aabf63dde9827e7aefdc6d3d8241": "6a0625872e6493a84589b19d4afe71d6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f13ce6cbdeb782c355520bf0d5fb0aa521ea75": "a8e9a1045deec148c9aad83ab9726f8e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/9f/9da3c21a536ce797dd7fdc90cb6279bbe4e4a7": "10525dbbe0bfe27bdbef93c83add0cd2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/ac/195be4a416cad7c24a42af2f4ef8e1544f0bc3": "f595a8c830bed97612708998c24177b2",
".git/objects/1e/d95ff083add6eed4ebb58872d6b8e31ca42018": "338c0d49f48efaaa84376a08b61886e7",
".git/objects/3b/235323b695bc4045ca532b36e9e45bdcabc1e5": "f089c46b997c0d6ea61e25d20690a05d",
".git/objects/73/42c8fa19a22b875edb9bceadf8a7e0b42ad72c": "50e8f60f3cc2203a89f0f1984987fbb7",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/be/bac9a7ac506fbe17ce1d31baa42e64190746df": "1b8dabd4be0cd0a01827486630b647a1",
".git/objects/cc/c9a6fb3b940ec891ce1f28ffc342ad07be4152": "37f42525e11c4569babc2c94c8d91fdf",
".git/objects/cc/05eb61195330b9b199b907f82ad3e08d9f7452": "cb72f9944debf19cd6f250dc632dcbb2",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/90/c6b094cb9cd6876427a5e27c264e3f116f9b70": "35ac941a8e45438d0f9d140671127661",
".git/objects/65/191dc1b607f2cf7d17a30bc9d0965c6ad18a8d": "740617ca631eaf3f25d845efd8869658",
".git/objects/bb/8a0e145d3b3735415e1ef00d4b90c394159e2d": "68b04ad6a6a6711df56078be14efd95d",
".git/objects/76/906792b73038a4d6d3f244f30102949a2ca9f8": "e52f7ed184948c9714dd30b32f2409b4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/78/1b59886202f3ff3b1c1730cf9c8923dd0d31c4": "a571488a09d3d239a201d454b16f57d1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/209a550a90ce110ee4401bc7c644c353e8e48b": "7a46145d6836ce8784c5480f9aac2032",
".git/objects/4b/d6f2bc32706a5444ffd4242f870b901ebfdeb7": "a998125ca24013cc7d6f4454855bbb30",
".git/objects/08/618a40f200f6265f5e42527d6a41c678fb0340": "f510db4251a988b00696935e8497f87b",
".git/objects/5b/f5e64db2c42207d9e1f1a8e3579d6ecd5baa6c": "211264396d14731ff143b7268e45ac08",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/fa/1e45dd93ca38e87794bf9e5263bebf5bb21079": "c0dbd185f26c21bf08c6da0d18420594",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/7c/d53be5d6d65d81f5ad65862c7a0cec304adc49": "3c9ab4e973acc4e5534583a63ded8f22",
".git/objects/34/b8f91bb1be16d5ae7494c84f03f150f9384d75": "81762a2969a9e0e4fd0f89660c5d1c33",
".git/objects/4e/47a8b89e43018226f953c2a94f86e7272454cd": "80c08cbe289b6f521d98c59dea11917d",
".git/objects/45/6b1721f686b09862b6f4e438d31fcf7b906689": "a39cc15db1f0c489af5becd67789a3f6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/27/d3077016c81dca26562e7f1cf752b8b8c3ed94": "643bf525c3d097b062d40fa2739c42ce",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b2/fc24f45380bfc833740b60f85690594c619698": "99da044026d627559292b4841f0a4b8b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/33/ee6c791329cffa2f459e71eb046bc7059e3fb8": "1db54153f6f3e6d9395033513ce9bfcc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ee/3e5434d70f65f450193c2afd8eb6638cdded8c": "3bedfcf1b6a790d86e4bb3f97bcfe78a",
".git/objects/2b/1df5ba67bbfc467deea30f572e52953c801f0c": "49a048bbb2863fd448371e96e37f08d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6d/49032f0dddf9d645d4964b4ffec5f5b724903d": "c58eaba0e1f85376b9aa5c8895c41103",
".git/objects/06/c66e798b73d35fd5dec0c9d79109a1b87e427f": "d917cc68b16002f692604f6da8d9fcf8",
".git/objects/1a/efd53c255e4bba6900d8ff024c1fd7c505e39b": "08a597e6dd65c1bce4e43864f3a150c7",
".git/objects/5a/1f7d9cbae849d6bd59fca29c983940f40f7adf": "266024c137b5bba047a682431075050a",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/52/591804085cd96e3355c7038c5a38e851f3316f": "c3df91ddb32c0a1793081efc2ad7a4ae",
".git/objects/24/b25ba6c1303ef594c9fdcd825b60b5d57d944d": "92112784ab94dd43ce6209dca02d69b3",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/ec/b56960b6ce7a8faac2b71092e01c58c5c63e33": "2f2fad49329dc2abbcc294d8609e2082",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/cc3a3eaee39d2c60280ebf1e403f1414bf90bb": "fdbcc303fd77c98249549ee71a483d99",
".git/objects/f1/d25c4fa9fda921ce4df9c01dbda00f8ea06f41": "10649a57f4cd899fdf38a88160d57c51",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/8c/659729df78401b863a45ccf27e2e82669faa43": "a5c3191015179d19cec8e8ef09e1385c",
".git/objects/5e/c90c8a4d468610122ff7aab4c5a750b2274ac6": "a8f13fb96f6ce6370eb2fdd8d0a0f86c",
".git/objects/bd/8e5508a834445c3641f39e65480f969ebe0ac0": "d8f40467a30e6772204057578f351933",
".git/objects/1b/9287b9488e193080ed7d31589b69e700c36ea1": "4783cbdcb5d8b1c08daf8a03ae47ef2a",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/9a/b688aa46ab99d3ce7c70d55b3d543110b449e6": "beae71d17346cb3f2e1decaa14e37a49",
".git/objects/8d/013ddda80a8552a0feaae01e2e9c9dd5331bb5": "c4b7b71981e76c08348418c4038db04f",
".git/objects/b6/960cbc3c5d11d6edb4ddb8cd47980c67cea697": "b47b9eb5e5fe6d4c286ef99be63e95f1",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/f4/8239d0342224de03e7879927ccf06a57eb7847": "259f7ea8da27e4976e6b6f69941a26ec",
".git/objects/25/8759bfeaabaf3d4b7358a10a2cbf443da8a434": "d0a41ae311533a14b5b5b318059e0369",
".git/objects/a9/3509ddea2c024b93e3a2bf9df83041d908f0e3": "92a160d048df1cbc13469b2ce876b87d",
".git/objects/05/f0a993a75675fa543a050a14e0f4ea6c747fae": "4f9e4ea773616fd5cb76bf78f763587c",
".git/objects/b0/d1e73644fdf4107dffb1c2b72576f83df2134d": "b984822524f74f3adeed61a14506c8a0",
".git/objects/a2/7d75d63c89a2c993fd06ba7d3228894e309681": "71cfee28b1c686a38951c73f2ee4b527",
".git/objects/71/d33373f64bfccede951822e10f5c3d9c87b58f": "2324a4eff6a16533a476c90fa778dfcd",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/17/d6a31406f6b77ab831f455598113db2c1880fc": "c553e3f74e97870daeb1d1305b351e3f",
".git/objects/66/dca4c280e614dc2cfd846773e3ec6309f22e94": "7322587c08da3a2ccf80afe8d380825f",
".git/objects/66/8e761c881c5a6c31315d108c7825511ce93a8b": "e76afd998a10ad312b03f95c40568f9a",
".git/objects/66/dee6abe58a45f1aca431444d326dbd29a80994": "34333f529607931a40eec1219abec1a1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/81/9385d6ee56979ca989a70446e2e5b3268988f7": "b5504836f32e72e6fd63c733f5ea1446",
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
"index.html": "9abd476ef2e588d72d928c014ff0dc7b",
"/": "9abd476ef2e588d72d928c014ff0dc7b"};
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
