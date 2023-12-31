'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "47f270fc998dda73a7c88bbc6e022696",
".git/config": "43fc1908d04d3092e02002427375f178",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "68adcb6d8a4104133b52b8be1cd6a483",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "999d64cc1514955d25611112e5440015",
".git/logs/refs/heads/main": "e3ffc47d7e4457d3ddae2319b16c3fbd",
".git/logs/refs/remotes/origin/main": "e9199fac313947586721328467a79fdb",
".git/objects/00/a9a6571f2610065b639c5dcc19427972d702de": "d1cc25e93fbceeacad5af5f06b8f3292",
".git/objects/00/e84e8848c619faf12992cf63667a4929be2b13": "c7a18d97cee2029a426dbd28eed65f11",
".git/objects/02/63b1adfb45e626d65103dffe5248a3de3725ff": "0dec75c829cee85b2d1c69042be02afd",
".git/objects/03/9ec92b10b4522f6116e6bbfc1999ce678917ee": "f69f342ce01a37e984b0fea341197556",
".git/objects/0a/a63a27d53fa77b4675fd2af187313220fa0c6a": "10991402e24d574079c990d7e9252def",
".git/objects/0b/2bed48491434d0d94504a61a289dbbd9602d71": "d02206e6483dbb8e5a9b551c7de7c88a",
".git/objects/0c/c80c8d27bb58e4add5350be062b370c1242beb": "f85a1d64f0d726c60301552ebaded08d",
".git/objects/0f/fc641756d8b93eb8e98f31d48c36e5992c53c4": "2420c52c9841671b6d35f2983a1f109f",
".git/objects/12/81298ec6e1717866e9e63a03b47f3089d236c1": "7f37909bfed419269fc432ed165cca2b",
".git/objects/14/e832f969f60e42901026c7fc3a564bad2eb4ac": "693810e65008dfc035c15212f5fb9873",
".git/objects/18/b2c2dd1baa8e42b595d4cdf426a7d7b6fc30cc": "3aa66157fdb8fdbcad6ab76de8a09039",
".git/objects/1e/05ec1ef5e4cfe671b92b237ea254b04e3f7df5": "af50566bdb9b47cd0436c5efe6b12f2e",
".git/objects/1e/3ba6f7195a8e53d3a71cbffb7b9637103ad879": "b4902b93483da34a597e6eb2c0e19f42",
".git/objects/21/418f90722be125e7940c4019d4d6ddb33d452d": "bf76d14b8047836dd464643ca3b81036",
".git/objects/22/16df27d62c5fb44d5277098731f84944b3035e": "899602d52e1b160e92f1fec561135d1b",
".git/objects/22/87b44fd29bb03f97595e7dd6f01b6435db42c3": "b2efee8b5c482d9a88e2f44c442a29eb",
".git/objects/22/bc48fb3741af5d662e6ae3f706362b137794e0": "4b8da97b99f0416807ffa6486ce59ef3",
".git/objects/23/04e4807a26985397ce0652194c94c41e9b2919": "f12877c10f27dc3e16539b2f46f16640",
".git/objects/25/77417d7790e83b0563902b885acd3428e56bf2": "5cf2ee2fe49d5653a3446a9d9c050319",
".git/objects/28/2af992072383e3d954198e0b1de322f5e19fcb": "79f91d7727709c82e98f710a8b652b61",
".git/objects/2a/dac826f9948c60e71ccdaf10826d8883db8656": "e684f1be7f3d2ae7bfaa3168ae08e5c3",
".git/objects/2c/2c649854add90dc1062fffbe331bb87a730807": "abb5b8857f3fc6708cd788fe4e0d6efe",
".git/objects/2c/3f1a4a558f8861d02d408142c3625abe442623": "22ad2ab887285f47c7b496814922a2c1",
".git/objects/2f/13d2a88040da42297443fb342042c01ce3f7d4": "3ac980585eb12899c92758e85f508f93",
".git/objects/30/0e1ff21e90a85cbd9af277165814be21ed8693": "7e38d5a272108d28a1727568ec91f485",
".git/objects/30/202efdacba350db6e2ab84fdc53e70d6182286": "4fa6cd4032a9cb5c49b6373b7cec50b7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/c468786cd8e9a4a7679136d4874467d942f63c": "612aae689fa416d51a3e7c5c0e996a94",
".git/objects/39/8fa7ee99f023eb78ce97945fde32ee08e6f821": "c9845021f54bb3ecb9fb83502f97ed2b",
".git/objects/3b/e79c33e9f9c4cf35ee3f18122dc772fe987948": "817dcd0db9be1b582a2d602f762e765f",
".git/objects/3c/a7c0f7a1fdbc7ea98d095d37b67bc2acc80fcf": "e334e8997d7aadf9d4f79bf78f18241e",
".git/objects/44/c656c6160f447e1f28e37867924fa37eae659a": "1d5ddb84ee7750887184337fa634cfee",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/84c348fc556bf66353f91d8899b837dbeee988": "491ea388d0ab380dd61a05bcc712aa02",
".git/objects/48/bd0bafef38f00b93159868b2a7afd934d75df0": "0ea408ecf03a59656537d3422b375ef4",
".git/objects/49/75c369ae06f05ebd42456c813cd47e925dd477": "6592e2969ccbe5f1023ea002e6bd7d89",
".git/objects/49/f96d654f71376440b86286aed08666e83c3d7b": "8f1b9f996876a0614b8aa7133e0c600a",
".git/objects/4a/761163a49bb19ac2d5e0c11da3e5535409ab88": "a57f68f1208e5ee0967c5513e7123ef1",
".git/objects/4b/b5fcb706bd17a89e35c27b4ac7933f47d8727d": "561664d186b15a9460a33097adbc3796",
".git/objects/4d/545bd7ab8def466c6fd1b546d19ca87e2effe7": "559d984d2b2b56131171d1e0994f19bd",
".git/objects/4e/a06315f14406e3987c6c8d90c0045ae71ae425": "ab38730ecd18db92742999040f796c70",
".git/objects/4f/7284faa55d394aa450a50a8ebb3735125d4ca6": "9f02df93f8e5fbc1375d3bcc69f67002",
".git/objects/50/f4ba425ad1ed4c3810043ecd0cbd881ade7a30": "cce588888e0d95130d62df930be8ef0d",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/0bcf53a6bf91e8d5867a06fc9fbcdbdf98a365": "dfdb850217950f28d6586537a91b99e7",
".git/objects/56/425cf3b792976e8cdbb107eb570e336c9f9c90": "639a7abbd49cc1731a5bf5d262630ea9",
".git/objects/58/623cc7814c75cf295b301f8d7ffbd1c007cba9": "2a7644af4648e86f62b232c51252f16d",
".git/objects/58/e2bbba1205f5c3a00588cce17f28de218e3f46": "f932d5cc85f17eb4561f188ee5079ff7",
".git/objects/59/dd5b387b4c07d0e4d7d371c1379078ea9e2935": "d079164f5625ebcf8088f17d821989b7",
".git/objects/5c/1fe055ceecd6f27432468a0dac0c9f0f09db23": "db6558f0ad95c8b86c31736234886c68",
".git/objects/5f/ad6be97591e179621295f95be7e22aaef19267": "54f923d8e98686689c886767e2cd60ec",
".git/objects/5f/f071e45e33c5dd3a0a1f8d45c7a18353c3c200": "95532b619410d3ee2e9dad0cdc9e8b1c",
".git/objects/63/9ec1ed2a012215f11953482cd6be4b93adf3c5": "c75a893f721fe08b803d3867fac6f8ba",
".git/objects/6e/8ce349d6010c1ccbac2650fb7ddfdd9bbc658a": "6195a4503a5015017cdda1fdacf41191",
".git/objects/73/c6b192bf22609cff8802b531cdb710a04afe98": "df7228d6dca15e5ca3b106dcf3741e48",
".git/objects/74/27799e9d1c43dfc12342cb1f99286758edbd10": "7628cb7c720b617d35996d0bf4128b03",
".git/objects/79/9e9e1c29bf8f869fe6d7b1d9efad148d6a5447": "83147fda5a29b83dca182d3b1e36594c",
".git/objects/7b/84c0a115fdc3137920eb92240b91d160bc3979": "92fb29ef91b34ddabf867272b6fba2a6",
".git/objects/7f/0cbf6580df278019109f94c38b61468c61c536": "6c03d2edb423810373cfd295c29636e2",
".git/objects/83/4b2a3d900a3ec847b11569a0ba41992bfc542b": "e36533465897a6bc7ef9aada29b8bcf0",
".git/objects/84/149aba8bdce06ff7f5513d2cc5e8c775caac2a": "fedd0ebcf520e1279d2318a4321507e4",
".git/objects/85/6a84b93a95064af3e796da153ea23335c620c5": "7c79d5eb50d3222d46079207b82386a9",
".git/objects/87/53223557d6358d7dd859a0db76a9d6b9dfb1a2": "e53dcc391f03eaa77bcf47358e094b30",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/92/0f49f06be5a4eba6636868aecb0b552d262167": "da4c7751c02f94d9da8f5e35d74cacf4",
".git/objects/94/18743f61a112bde01d76e64f318492cf719436": "690984e64010b5a41ea38878602db9b9",
".git/objects/94/2452b3593c8fef42a909c77156423521306c02": "039d45b08a9729a7ac2b07f8f00c6616",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/981da0056e8c0b952347999d4e9611de12d1a1": "f1ecadb30c097dd3a35b15dbaa0796f6",
".git/objects/95/4e047d358ad2dd5ba7f6050e58b14c916868b1": "1d00fae7b8c0b5acf92e4d7c3c47f954",
".git/objects/96/a48d7636bd6a9e9c88b961ae7f5c0167d739fc": "a643dee5a71a3e1cf9ac5a770163b6ff",
".git/objects/98/03b48751f0032231f30492c72d64b457a81349": "ab3f5abe53813f1804d68641ac7f64d7",
".git/objects/99/b72b8e6fb1f0eeecf86c1e0261357f59fb1636": "320bbbb65d67913554da8f683ce661cb",
".git/objects/9b/e06df4e5671e2f19da0e8efdfacd33c5047db9": "e6b700863e8e2cfc63b7c2129a53545e",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/8a92996b06e910ad896362f664cb1c4a893384": "dedc07f2ad8ef225ebd05ccec096e9a7",
".git/objects/9e/a0d83e85fb267f5d2a2cee523d6c3c0b185612": "eeeac7390bdd3718b02630b701e80fb9",
".git/objects/a3/d07661a729147f43731135f206f3f4138a86df": "c146d6ec291404682e5958f8a2de5d10",
".git/objects/a5/7e26b98e4f91e83c2734c46c33c8085ada447c": "eee4fd5b2a1762b799f10d963be1269a",
".git/objects/a6/52a3cf64d4025f5062f811abbc919de7bd034e": "1e5538125739d0e2164af5d8003ce8f1",
".git/objects/a8/2196bc0addbc10cfff5c540105db3807715f2f": "a9fce5e02918cd13a494e1dec0a3ab32",
".git/objects/aa/1c5fd904c2f965ec11e20ed5641a28f5163c48": "b1879f67d5f763e47f4d9106069d2869",
".git/objects/ac/15a971888b5416aaa754c0e551c0f46f61b0e5": "45eed4f757e2c241065c3971b3bd765a",
".git/objects/ac/52276108c834520209404d015c73a3364fd1c7": "16dc76fc5fa40aac1efe9655b50bf22f",
".git/objects/af/7348f6adef3891c4c603377a0cd572da3f3f4c": "5d41327a969f6978ab7893f3f06a9d14",
".git/objects/af/734e40631395a2dac43bc11c8e88aa9c15bf4c": "1ceb3cb4c2064cd32f0960be818bbc10",
".git/objects/af/e307683a2634140ebabd9c0b2be46a4f71f775": "589d7352b645da89ddaacf22f87343ab",
".git/objects/b0/a59bb155a14297301b2710bd192c701a4c6d1c": "21053db304ac99f9df27b6a3b1e4dbed",
".git/objects/b5/c098ac630d9b200dd5dd6e8b2d663ee7d2a7d7": "0b92719db8bd71393e06a63aaaf3ab47",
".git/objects/b5/eada7ba9eeb673d6d0da95657d35450bdd0ca0": "7fbfeef721e42eff2cea6dba475dbae7",
".git/objects/b7/023ff333621a6c22a2d2937c8415cd3f357b8d": "b0c23f9441c8d928839e7a83c48cc083",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/1e823af090449fd5716d439719e5e7f346f7df": "84112d581bc421c2485baa6f0509a0fa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/bf0e19b22ac60f56029a76f7dc3e4410374465": "50e3b8a48a351016d2815b60b94f2537",
".git/objects/c2/4095d9b1e2b1b361dce60f5e534a4371b1207f": "947b0ac50632de53900f477b365896e4",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/1e6dd047152d671f803d9339cf9fffa32ec5fb": "f2c780874dbbb5118bc6c27944e366da",
".git/objects/ca/1e5bd707dee9dc86a869665c22e5d4f6554493": "f082a532df9911a7f7396c8b901e0cd9",
".git/objects/ca/2c609833381b8240c3a9a361637831b104ec28": "affeda9624d4a26a2f559a0c1ae32178",
".git/objects/ca/565b9f2e5e2604c00fb2a4bf8d6d89fe77e98e": "6d55778408f68d509702375ff87248c6",
".git/objects/cb/c4faf2ac7008413306a0027105f0fb976e692b": "6bf7ae4a2f16e0bfb4499196ec76fc90",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/0cb3fc9ea3251c5c6fbd40aafa6de4bcc07216": "cc4bc5c8f2ad84ac18b94a8f3b6c5e87",
".git/objects/db/beedc18fefa4be46131eeccc62052d1528527e": "d4576699fe7a7af5b044a134dcaab475",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/d6ce5df4e77f5529ade1cf312fe35af61f01d2": "a48233de8e6ab786cda47b0283c381b6",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/5b925278180243089549ed077625346bc61df5": "0858b1acc307c689922256389535fa85",
".git/objects/e5/318a433412b11cffd2c0906e31664d11f1a0e1": "33aca57a01d502a2678d8f61cb57d3cc",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/150883e97b04a7649d09be4312b510abe00f71": "f948097d60ab84231650aca067fb12d5",
".git/objects/e8/7589386545e341a48f2360673633af21c46e0b": "9fce13bec8728827affb6df348747dc1",
".git/objects/e9/bc63b655b57789b5c693f12a024a821191d4e5": "81b1fccbbbbb6fbd4f3c9ae23718ee9d",
".git/objects/ea/2e874ddfeb1a10c8999180938bd52780c0e25c": "6bc5eb4dd373e236c74b6e0eb568b91e",
".git/objects/ea/9994e849704dd7ca815d08a9539094ba101c84": "5a7f76be602a938ea3f5f07605da0690",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/e3cea1f4c11b5ed40f778a5032a6e146c7634a": "a0408477951c667b4f3af1915d186efd",
".git/objects/f3/cddf99fda700693177774c225d211a779e9b9c": "bc068ccc233ef1e757339497994aadf7",
".git/objects/f5/210dd852ebb477040abbf435b53308519cd614": "2b2646c87363e057c0fdfbc84fe318e3",
".git/objects/f6/d3109f6d5811fc326ff90ca44c29b4ac52a2d1": "d042db2a0026078e9a24c64138a8b2a1",
".git/objects/f8/1f59c9572bd72af8886cc71eab159daaaeaecf": "7760fe6a9757319b8ca39f5da594dcc7",
".git/objects/f9/af372067d952d73a996ce4d3a0d735ac63f0e0": "fb6c921d4f2b418b34d1bbec877b1d38",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/1a4e8651b64e80a421010d611cc8804f01b615": "1501f9252917bf7136e368e818bb8e3e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/f268f8cc79689a51b0a28ae75e62b8434d26a5": "efbf5e7db1546151a6cdb336f638d05a",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/fe/c6c6fb63d14230f514ef620c3cda47939038be": "71abcc4018a2aa15d0df319b8b3dd695",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "f8955eb1a780714a9960754a72d5b55d",
".git/refs/remotes/origin/main": "f8955eb1a780714a9960754a72d5b55d",
"assets/AssetManifest.bin": "03704e4e9d79d867e1911be3839c188a",
"assets/AssetManifest.json": "e736f908a17bf1e3c3c79a5a39c44909",
"assets/assets/animations/android.json": "4c29861118babb5095e2ba5561d1cc53",
"assets/assets/animations/aws.json": "c4ff7265a0bcdfc12c10e2c4f9252453",
"assets/assets/animations/dart.json": "d8a48c74cf7cad05f028d3a525ac0d20",
"assets/assets/animations/fblogo.json": "78cc246d05049db495d09e105c6ee721",
"assets/assets/animations/flutter.json": "0e6337e7fbc4ce8fefa9b077bd4c2fa2",
"assets/assets/animations/github.json": "d4e153ca39a7a9c25223a533e66fd1e7",
"assets/assets/animations/java.json": "40cd36601ae13b796eba1d40021959de",
"assets/assets/animations/mobile1.json": "fb9ed5d6883967270a6563fc92a1e342",
"assets/assets/animations/mobile2.json": "0c1fb8816d9e52820ab0b9e9cdf105c8",
"assets/assets/animations/mobile3.json": "3abf476ed6c17f6fff1a5dddcb444a84",
"assets/assets/animations/mobile4.json": "8aeb7b565b6fb4c13d075210c00e7619",
"assets/assets/animations/mobile5.json": "fc7c7ba5ea7a339d66478042d005668a",
"assets/assets/images/android_logo.png": "df2873f8e05047e41d0e0954bf545b46",
"assets/assets/images/aws_logo.png": "cff33a3bbb4a140404c0533343909ef8",
"assets/assets/images/cv.png": "f94604703f8ab7f5ca22ab74c5596329",
"assets/assets/images/dart_logo.jpg": "60fbd31aec7b4a720354e75682f53901",
"assets/assets/images/dash.png": "ac9d3e804bfc692c064b9647e3ebff5b",
"assets/assets/images/firebase_logo.png": "13894f0a8b5d0c4b0a0119f0b3b9d984",
"assets/assets/images/flutter_logo.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/assets/images/git_icon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/git_logo.png": "7c3933e2dd58a1ba4b7ede83407faaea",
"assets/assets/images/gmail_icon.png": "4eabb7c8e3cc645df78c54c1f5105c2b",
"assets/assets/images/java_logo.png": "c61b19c045fa11e25fbf3f78d6a16dfc",
"assets/assets/images/linkedin_icon.png": "1b7d4f5b2025a53313e11dce7efec543",
"assets/assets/images/pickaxe.jpg": "d741645348aa72a2bedce1151e9be363",
"assets/assets/images/sword.png": "2d48c663eb81f3ac3562c3f823649e12",
"assets/assets/images/tom.png": "ed09048595d9710ce55141207c6afb77",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "49342ad8be424611795ff3db09226774",
"assets/NOTICES": "3e57d17a96e217ad69ac393164115b58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "904cdd335d87fb342c6199575ac8d0cc",
"/": "904cdd335d87fb342c6199575ac8d0cc",
"main.dart.js": "8c54c774c73e9caca4b63a1e3c5d35a7",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
