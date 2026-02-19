'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "166b07939618926c546a5a84d56cd93a",
".git/config": "8ee161b4ec0e5891ef2909c32f1da49d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8f0379c56ee84b079d11e089665df0d4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "df0204c99acd53ea0b6c4b0c71ae43e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4fea26a54b12a049935fff1a4d60bffe",
".git/logs/refs/heads/master": "4fea26a54b12a049935fff1a4d60bffe",
".git/logs/refs/remotes/origin/master": "628ddd5c7e9731d38f63b7b9ef25ab04",
".git/objects/00/63e898cda744c424efa7e4f018627af945549c": "ef323a6e7c86b641ce99928e738d1253",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/1373db66b8f43ce6191792c01735e5d08f3ead": "4123c2df2c89bc314b7b9779dc437f2e",
".git/objects/07/cbffc111c62a93faa9cbe311ebc6db75c3c69a": "538ea6b8dbf325f3a4fa63716d0862dc",
".git/objects/08/00bef8b02d1b2b3349734de319ede38824439e": "51c834885b5af4e27952adffec1c511e",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/aac653625e7532808bdd2aa37f66bcea84bd9d": "ec4510d9db54d509b4bd0863bfc80600",
".git/objects/24/7acd71431f65ab649ec442f89e303b668cf2c5": "cbd83ddd8720a6d8f0eef5e36400fe3b",
".git/objects/32/7048ff352fbedf08ad329ab6f3159b352b2d13": "210bc70456be3905f024945af0f1d890",
".git/objects/39/bb6a57e85d9c3863a5f86cc51efbd4c76a282b": "7fc78cda3ff43c33476eaf91cdf0d562",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/4f5f2f9f876b197aa3cc4c17fa1fb38ee80dd0": "290587c8598ce0c6a3c341b6c116c1da",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/b1feb681f0d7174588f72c0302b07ce7d68d05": "7c5ec9583af0350484833d72b01c812f",
".git/objects/58/c58afefb045f1e7f3938e65eac49e633b1cc7e": "df876fa1de6272e6b9a0123837d71fe0",
".git/objects/59/417294ba9f28ec4bb3202253ffb9e2a3bc2c79": "3a50742287ab7e7560663f65cad0db61",
".git/objects/5a/386123797183ffbc1cad55925835d011f8d5e9": "2fc963436721ad37bdb679dcee92421e",
".git/objects/62/395da6faea7cf70849c1af10ac6bbdffd81e26": "f04e87f4272ffe259fe3d97820ffa1ee",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7d/a7dddf07d4af22931e526f7db67d7786dde565": "cf8ca30910d304ef5578ed9f4cb0f693",
".git/objects/7f/8125617aff88bc9e4bd8bd2ef146020cad9253": "1543262f6fa7c828999ec8c86987de53",
".git/objects/80/ecb74d72a83fb95a7f4bfcdc3d74fd52fc4207": "f540b4b2d86b5b4cd0965d775a0c177e",
".git/objects/84/91829b1eb01f7c84a9a6eec40324801f95b13e": "69ed8f45b6ade5ba7690c62b7cbd590c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8f2e22084ce162c8672c35c1d9ef96ffd1bc04": "4a1305df5b05e8ddd0aa5a5f4ea801e9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/bb0edf3ba05cf8f80598d467cd7955baeaac70": "e9291e4c1ec79dcfbcb569584178a47f",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/35f9a465bc157f6d9cb2c896d353815e87c97c": "6512b5189adb26a7a30ac534e865d88b",
".git/objects/93/4d0adc62f8db664d77d0f0f7dcbfdc429deeaf": "ead8dce295655bf401d5a69e636c50cf",
".git/objects/94/12caf430d52f0d264a4bec23be6bbb665d7750": "22e55164cbb3930ae0bfb53af1375583",
".git/objects/98/11bf7a238534346e690ea8f80614cad8b647e3": "9f7c349cd8ef5588eade007c71f0422d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/d58aad0a25c398ff5de2f2ebca9482019fce80": "e9cbdc7b9b664c62a9353287e457c8d5",
".git/objects/a5/e604bd5017f5b9f3da1d97d8070aaffffe755e": "63327622fc894e5e1f5456b1f68fbd73",
".git/objects/a6/5d92fb992da72e48e73e1a897be139dfdb4048": "9dfce65532c489cb16909f416045af08",
".git/objects/a8/8a98b76214d9de82600c60f2a3665b762c516b": "384e6824e7a2e3fdc3376bb22b97410f",
".git/objects/ac/f50aa33ef0661d6edb20ef3becffe32edb6c68": "ada8ef212dce2274319c73b63b0a1f29",
".git/objects/b0/592faba56ff43399c883b8f9385ca0509f21de": "ea79acc6dbdf8a53de71383a972ee8f7",
".git/objects/b0/698482787803a898b15da06d933f86f23bb26c": "b7a428d541f50cf314b73d26ae3bfda6",
".git/objects/b1/8311016ef127397d16931ef70d012d98d4cb6f": "4f3bbd6ae9a307b51387a0d489ee0bcd",
".git/objects/b5/7a072952ab5f4768611d4fd0d41bd0ad6a8048": "6f3bb488fd4a15900d8371af154c3542",
".git/objects/b7/0bcbe2869b7d949bb4cce822b36bed182f1fc9": "455a85805de0758c95c29279c44c2af0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/716d0e8d377cb030d54f4f699ffad0bc4c7594": "018a5468a3195d55e4042cd375a15a84",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d0/5ef89181019d96c5af17a56ff7e8f8f3219acf": "b6d83bbb981f64b9e7907adecd164dcf",
".git/objects/d0/a7b36fb9ca5e0e0a27ecabe04046607b84f2d9": "a6de188c877ecfdc71958a2f31f08ea1",
".git/objects/d1/b7936084e02f5394937bd20ea4960e43df0a70": "df7f01cd0c504d49c8aefac45113a532",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/9db134ad9ac6c683c33524e9fd22b362a7e80e": "bb8dc3d1a8607a802e5a5c14d20b0500",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/fc5fb70c84498f1519f83bff27ce7c9ff91538": "2170a6d69432922bf7afb7f1534e7399",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/de/027c055894be4b48bb9194def8935805857927": "b925999a7a77012c3d918fc3dcd644a8",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/924800e3eae031332de46c15c26b9ceabe8c3c": "48351693ab2193e73e7303f933442629",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/79f2df46c742359bdffb22ef55f32d4aa8646f": "aad49aeb0ba928d346c961b49af04915",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fd/e37977a7292e7bbab97c109b30b6805e26fa72": "860b68897b57424adf63bc3807640c2d",
".git/refs/heads/master": "831fc098befe6ae2db9f5a01099935e7",
".git/refs/remotes/origin/master": "831fc098befe6ae2db9f5a01099935e7",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3a5fb6246e1915af0e4e1452182aaa3f",
"assets/NOTICES": "379423048ac2ad00a68b01abda40995f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b71b5b60c2bd831720ac3c3d85c22230",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e5837d35e8f9dc680ed905fff958dbb",
"/": "4e5837d35e8f9dc680ed905fff958dbb",
"main.dart.js": "fc781e2078db3f6f6b317b64f21ce614",
"manifest.json": "aa4bcb8040f08be345358bd5c7e00bc3",
"version.json": "f17613e7197366663a85faac6b501ab7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
