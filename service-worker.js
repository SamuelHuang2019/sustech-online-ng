/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "417be456b67c297b5407ad1c36a6a6af"
  },
  {
    "url": "about.html",
    "revision": "e70012da383bddd36da87d4b480d63b6"
  },
  {
    "url": "assets/css/0.styles.4189fa3e.css",
    "revision": "353d2b5b7d11bf80251b39d858c4cb0b"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/szmc-system-map-2020.baa0800d.png",
    "revision": "baa0800d66d21cad0c6185f5c196a35c"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.e9c1590f.js",
    "revision": "fc1bc34a53dfd070cc68706b01ceb19e"
  },
  {
    "url": "assets/js/11.59b2fe0e.js",
    "revision": "840a929b35a73c10a31690e5781f3504"
  },
  {
    "url": "assets/js/12.c94a8726.js",
    "revision": "08121a122467fcd36b6e3152c883e1b9"
  },
  {
    "url": "assets/js/13.879250a7.js",
    "revision": "6d371c304b1257929258def6d08af365"
  },
  {
    "url": "assets/js/14.c94f50ef.js",
    "revision": "f7485414d7ef7ffa063e2ba1d9c26dc7"
  },
  {
    "url": "assets/js/15.052ef094.js",
    "revision": "d7149626930f4504bdf3c8e2b470c775"
  },
  {
    "url": "assets/js/16.cb69f067.js",
    "revision": "d761687f44b37b480d38096d8fd4f869"
  },
  {
    "url": "assets/js/17.7c8e3b37.js",
    "revision": "dae5bc924d0858933e2e19b5f0e08dc4"
  },
  {
    "url": "assets/js/18.5a83c0d6.js",
    "revision": "fea2aee0413abba876f98ccccf005e55"
  },
  {
    "url": "assets/js/19.b768bf6f.js",
    "revision": "ca0ce9c7598861649f061a487594d924"
  },
  {
    "url": "assets/js/2.ff2015fa.js",
    "revision": "39af0d0cb7a2b4f244d5d635165230a7"
  },
  {
    "url": "assets/js/20.47f9d82c.js",
    "revision": "94935411fbb0c5195a0cd2ebef4c95a5"
  },
  {
    "url": "assets/js/21.6bc93e2e.js",
    "revision": "54ee18b7d54a19d072a990cf3dc14cd2"
  },
  {
    "url": "assets/js/22.c8904f61.js",
    "revision": "2d3b858f6afbdf185f1084ae0d2eaf70"
  },
  {
    "url": "assets/js/23.17ef3c9b.js",
    "revision": "bf4b184ce10b6d2a9793f7d284842680"
  },
  {
    "url": "assets/js/24.793aef4f.js",
    "revision": "4ff67e3891b1198b377d7a5897da7b8c"
  },
  {
    "url": "assets/js/25.3d5b347f.js",
    "revision": "097f7ac0b3bff9fad1938cb464974c73"
  },
  {
    "url": "assets/js/26.0a7a6b37.js",
    "revision": "42b98e79dc325cc9f7d51ce14e704a97"
  },
  {
    "url": "assets/js/27.645a4d4e.js",
    "revision": "b6abf86e94c58b808ea7fb7af8f8d8d5"
  },
  {
    "url": "assets/js/28.6a154fc1.js",
    "revision": "7b4314761121f6b17cdd5e7154dfcc78"
  },
  {
    "url": "assets/js/29.56d3e87e.js",
    "revision": "b52d4ef16fd9a1a09aa3c79fe1b22fbd"
  },
  {
    "url": "assets/js/3.98085737.js",
    "revision": "c0d4a87e2726cf75d8ac3be839ff7bf4"
  },
  {
    "url": "assets/js/30.ab69fcf2.js",
    "revision": "44ddeb5a7e095ef1537bf763337c4477"
  },
  {
    "url": "assets/js/31.83992771.js",
    "revision": "f5705f8961286e6753e0a0a23c35ca5d"
  },
  {
    "url": "assets/js/32.e567f81b.js",
    "revision": "e2c5e89bb9810c247c5f87f6c68c2f06"
  },
  {
    "url": "assets/js/33.20c44a7e.js",
    "revision": "f0dc0948bf5c90002a4d4aa032951c50"
  },
  {
    "url": "assets/js/34.5d3b0d17.js",
    "revision": "926864b38948ea0796555514095d0d3a"
  },
  {
    "url": "assets/js/35.2bcba66e.js",
    "revision": "8a16ff4718d832c037dee8f965abcdfb"
  },
  {
    "url": "assets/js/36.5eb70879.js",
    "revision": "15dc139a0f37e73f872ef1418ffc4a37"
  },
  {
    "url": "assets/js/37.619b2f68.js",
    "revision": "276f87bea26e50453d745771cbbe120f"
  },
  {
    "url": "assets/js/38.d205fbd4.js",
    "revision": "bfde8724dc7daa8c5f5551e0b5f63703"
  },
  {
    "url": "assets/js/39.a6f730df.js",
    "revision": "b08cbcc084ddaf834edb4e4d9286d665"
  },
  {
    "url": "assets/js/4.55c4456e.js",
    "revision": "d29b2b2117adb5f7e631b1d511ee1784"
  },
  {
    "url": "assets/js/40.21b6b711.js",
    "revision": "aa396ad47959e4551d44a2c50488a1a7"
  },
  {
    "url": "assets/js/41.f757fbe8.js",
    "revision": "97dde270883dc2cf9240ce0a2193638d"
  },
  {
    "url": "assets/js/42.abee8eed.js",
    "revision": "839d4f00c5a63077b47e907467a09048"
  },
  {
    "url": "assets/js/43.355da329.js",
    "revision": "55d0d13755a6a8ab4de35967d1d445df"
  },
  {
    "url": "assets/js/44.2266a85c.js",
    "revision": "15f1d71542c6c768390cbaa1e1eabadc"
  },
  {
    "url": "assets/js/45.4967be59.js",
    "revision": "1c7e5e1c66e0b3d78bd2232462d21997"
  },
  {
    "url": "assets/js/46.6f9a0fc1.js",
    "revision": "6483e0f4fa678f97c4229879ee2ca25a"
  },
  {
    "url": "assets/js/47.307e8365.js",
    "revision": "b374262e51aa391d8d311b76b60329eb"
  },
  {
    "url": "assets/js/48.5cc0ac2a.js",
    "revision": "aaa74baf8187effa7eb1d9945e8663c2"
  },
  {
    "url": "assets/js/49.a8a479d9.js",
    "revision": "2c3085280883a959f35cb7019e087d51"
  },
  {
    "url": "assets/js/5.4f1bf9d4.js",
    "revision": "e2dd3da747257919d284558e43c43fd0"
  },
  {
    "url": "assets/js/50.ba9d84a9.js",
    "revision": "28ca129074ff9751c59f54725329fc82"
  },
  {
    "url": "assets/js/6.536c45ea.js",
    "revision": "f7de4dc53453ed17c3d390a5226605ac"
  },
  {
    "url": "assets/js/7.9ad5b102.js",
    "revision": "dd32e549cda630dc360b1474c06301b9"
  },
  {
    "url": "assets/js/8.21ce1996.js",
    "revision": "64cadcc1320f8cf6ba5e4a84138ba5b4"
  },
  {
    "url": "assets/js/9.857e5f8a.js",
    "revision": "5e2150cd98c73223aa25ee4046f1b683"
  },
  {
    "url": "assets/js/app.60ec7a40.js",
    "revision": "0af1bc081c29e9e6e3cb28c5a4258e3b"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "c3f05834d5b61d575260e681bd89964f"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "ac88a7fc24e5f7eefdd143902e0a6d05"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "ee1a91f633d1e44ccda5fe86dee930d7"
  },
  {
    "url": "calendar/index.html",
    "revision": "6cedc4876adc24b8e7c4cfd3e29de93e"
  },
  {
    "url": "catering/index.html",
    "revision": "85e489cf57db0d47965351a29220b7e9"
  },
  {
    "url": "contact/index.html",
    "revision": "dfc86c31c59bc1a26917d66c92450947"
  },
  {
    "url": "facility/index.html",
    "revision": "fe4908c36014ebf65706810b3a85ee4e"
  },
  {
    "url": "facility/panolens.html",
    "revision": "4fff6ec06be0558de82a57796f070f3b"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "e3155bfb9060fd5a35cfb0c4bec47b95"
  },
  {
    "url": "index.html",
    "revision": "8f12f6729dc046d1d8f108a53c124d4d"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "d577a0d5873144c503a6a51fc76ee035"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "11237be81e240821428e4eb24f36bd98"
  },
  {
    "url": "life/index.html",
    "revision": "64d904cb2f4c923ccb4586fb4b66b5f9"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "3f16ffb504bf08c0a92e9970b867ae0e"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "c35d5e4a6bb4d69534ca768d0a2e00f5"
  },
  {
    "url": "organizations/index.html",
    "revision": "6d7b683b8b8caac0287b667c8324c91f"
  },
  {
    "url": "organizations/registered-organization.html",
    "revision": "fcbd1c9fdf27cb9cdf0d221682228b7a"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "e8403b158e0f854d50aa37e271c8573b"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "266076afbcb4da64fc504cfa352fd194"
  },
  {
    "url": "service/email/index.html",
    "revision": "eec054d4c01ba04d56594cc59e21bbe3"
  },
  {
    "url": "service/index.html",
    "revision": "7479d077fef42a698e0a9e868507eb17"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "81a06ad783770cd0942c10cc9e0c655d"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "afae4ab3a0182bfa3aa714edeada3166"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "bb192a0ecbe5d8c668af14ad209514c6"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "e9b09050f93061773103789c7e4121a2"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "626132af1c9ad68505a6287bb89a280e"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "b7c884268213c3c7c856478f6725021c"
  },
  {
    "url": "service/network/index.html",
    "revision": "42b2f60dc1dd1b6032320029a248c318"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "969395358349abc55f791ec37fb474a6"
  },
  {
    "url": "service/sid/index.html",
    "revision": "6afc2ca096d6f73cbd17700da494c442"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "bb3f600561cf89b146b8c007b010d887"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "60da34ebec443ee2009eff55af329652"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "7e4adc3c7a14b1a96c7a40bcadf6318e"
  },
  {
    "url": "site-help/index.html",
    "revision": "30f681d49c275932c03a89e60a0a8fee"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "521b4162bade524f9392da301b7c6262"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "d108f40daed98d5d13596a8d6b0b6c0b"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "105f03f7f0a347037f1063c0e1177bee"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "a90685952b6204d1155717d7614daf77"
  },
  {
    "url": "study/index.html",
    "revision": "a8237051a63b622a637ed00f57417ee7"
  },
  {
    "url": "surroundings/index.html",
    "revision": "2e95cfb09ab507556c362d6025e251c3"
  },
  {
    "url": "transport/holiday.html",
    "revision": "c91107e164f160d002fdea02bd29d26b"
  },
  {
    "url": "transport/index.html",
    "revision": "22c9ef0e4d78cfa3097e7690fcedad84"
  },
  {
    "url": "transport/workday.html",
    "revision": "9f4e2df943667dc6cc71c58ae81b3feb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
