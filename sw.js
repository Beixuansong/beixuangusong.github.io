/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/11/Blog/hello-world/index.html","306e3cb137d2730ad6874c9816dc6056"],["/2023/07/12/Thought/恋爱与婚姻/index.html","a1f352408421f328a479ec8df570372a"],["/2023/07/12/Traditional-Chinese-Medicine/中医基础理论/index.html","d5d52f52f1d64c9f07c96e567f50111d"],["/2023/07/12/Traditional-Chinese-Medicine/中医诊断学/index.html","3067a3b9a7c4fc9651e5f1c7724c02c0"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/001.png","8acd9849840d18d9418f2ed0decd49ed"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/002.png","f5198a72a77955023a883a02ba999b2f"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/003.png","ad7fad460dafd1b19f4b340ab229b765"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/004.png","03dea0239a20f1e45fd13059dfeec40c"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/005.png","1e9a2842019e961e57fe147805ac05f8"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/006.png","a6f739601c4cc9c9c7a28fc2cdc6955b"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/007.png","037db45789058819429371b115f4b5e0"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/008.png","bd904e555d08263992111796bef64604"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/009.png","30c6d4d96ee0811718e170ea4af6c4c3"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/010.png","62e7eae512ffcfa12e067b62e43ba86b"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/011.png","c6eddd5e8722ccab243599590f07b83c"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/012.png","b45d6f17cba7ee02545938d14979d949"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/013.png","6e4e3bbde710f2fb49b06b4b085c644b"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/014.png","6a65fba201c12937424b4e15ef4c77b4"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/015.png","b8b2fcf426722e6e9cf459b8abe441c0"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/016.png","428d2cc3ef9606b91893049e639e32dc"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/017.png","a9ce81c53c26716b59e2d007e6a134d5"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/018.png","4033196a770d0c26958772fc14f5ef3a"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/019.png","f8ebf0e9602ec3d888eb49b2f1fc6f2f"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/020.png","369e2202d510dcd60fb1d39ee9beaad2"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/021.png","76fcc97dc034720f0c7bd2681c5b1788"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/022.png","f0aff8f64d47329d6a7202b8bd40528e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/023.png","d16a38f52b8b556f5dd6ec6c8bc4ce09"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/024.png","cd0478fd9c41069269276e04253d7ab8"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/025.png","5eb6a064dc660337b7fd3e9ea905dc98"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/026.png","d57430d62176a302f77c5badc49dbac5"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/027.png","276bc8a352c5006f831340ae239c6d22"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/028.png","86c743310fd2d95f8db6a48e1b7f6df1"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/029.png","da4f7ecca2894e5ca66a150fa7f94eb5"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/030.png","7ae5ac472749e56c18eec3651ef14f43"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/031.png","45459c3445f1fd32af5d6e9fd1cd2d04"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/032.png","6d39532275e00260af672501e7a86be1"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/033.png","ff47e48d91e2481f377c63d5ce9d2340"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/034.png","8715b7b3c032174659f8505f5badc21d"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/035 (1).png","26f3bf46699ea13a5d45f1fe31e4aa68"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/035.png","dcf00c3b9c4a793083147cdc296089d2"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/036.png","2889c4923d675d33ca488c32572020a6"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/037.png","b089eb51f8957cb5acc5dfe998ef06f2"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/038.png","4e2e8eb373e754c212e82c6a0903b019"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/039.png","e406bb8958ddacb0a266e10acc6e61cc"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/040.png","3b982a40d1ea319ba6d860c00a9eeb54"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/041.png","2cdc6756eb9d913d3f5dad34becfbe6b"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/042.png","98a719774a2a6c48f2b4091604d31fd2"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/043.png","ba19af3f4b89396d28eaf3b6de1683a4"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/044.png","797df1b532b07c8b5a112ff09e052120"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/045.png","8331c608af7c445f268ccb796594391f"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/046.png","d048ecf1bf479107d13102355ccef437"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/047.png","1cc32d5caea698f15031014fabbafdb9"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/048.png","1eb247029e9f90e0f77db9b88efe5b45"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/049.png","9cc649910d6e8797c49238d186c35eb6"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/050.png","31e561b73a3cdd8c2623bdc86e76b356"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/051.png","2530bfa2409d11bcb0e19783e6ebfca2"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/052.png","954798df227c7e107720b037cd72a7b3"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/053.png","26800164a7490b34ed2f8b485b0a94a5"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/054.png","1e82279614cebeb78ad76679aecadf18"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/055.png","f94585ee2ffd676630164eb66763422e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/056.png","262ba5aeb99c0a6e3f24fca755736170"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/057.png","65816ff4b8577837a0e0e4aff25d1656"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/058.png","6dc8801c5670d7ac00a8ca9c9258becb"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/059.png","9cdc569a852ee915480131718dc555b9"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/060.png","8da239de331b6e3ed2e344c66de6fe58"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/061.png","aced745fc7739c403f166cf6796a2303"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/062.png","5ad386f49e10188b635ac928b991e5c9"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/063.png","5389865b060a2b97b195c7069e050462"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/064.png","ee5e7ccd4f77b85c88c293785bab9c0c"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/065.png","306b1aa94b4a3bd5c0091bd516e5a805"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/067.png","8128aadb3cbdb65fd12fccfa301359ed"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/068.png","a122edfd90108e511f792898bda8e386"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/069.png","5745d9ab06006145d7accc09fc86e517"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/070.png","90a94c2831d4574f7ea64ef967581116"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/071.png","4d7e4bd387bd5483226e1384b2fe265e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/072.png","06c976dd5b97a72ef810188cca621bca"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/073.png","862e778e5edc2bf891aac1e85a7c9667"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/074.png","d695fbd4432b20a947a1a0577b40db0d"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/075.png","793e4890aec7419fb6617760c85b1976"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/076.png","3728d34c4a4704dd2624aac24ace350e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/077.png","2e9d175adf586c6df333c5239b21ceba"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/078.png","9e8111ca64522922dfbce20161af2913"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/079.png","1453f79efb22632a2b595022071c9ca6"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/080.png","04353327bd5bd3e971c01c6f1099c7fa"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/081.png","9395e5b138357ae0003ad613a4b84b03"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/082.png","dcec09eb46410dde34f423c9aa40dada"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/083.png","dae30e967ead2bbdf4297f14d170ef48"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/084.png","3e2ba0ed269a60f2752c562e7007e6e0"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/085.png","b2c69cddb75f9f66970517f542bedc24"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/086.png","6ce5e848b63e5937a70e3ed21c244bbd"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/087.png","93283ee686191174576039f7e08ceb54"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/088.png","a9e9de729776ac4a731ace206e42ba2a"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/089.png","f68f3d50630ed6fe0ae0a89506cf57d1"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/090.png","f81b98500bf2e38166d4cc18e503ea40"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/091.png","3d895e470e7a825428ff2d5d991b2fc8"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/092.png","e507c5dd1fb9f20183ec5cda137decc0"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/093.png","0504fd2f882e2b5017b14f08a7410b8c"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/094.png","7a0882b15f3d71954622ae8472a51f25"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/096.png","1aa8ff5f8a2d6b02f3af3eb4894dc1cf"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/097.png","57f35f39b19d51e9c00f722d7b6afe56"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/098.png","ee13da14305532ec78ea470eaeb9e48e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/099.png","fdce463f34598cc6cb24e4875c2faefb"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/100.png","36ca57409cdba35702e77116fe1a2210"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/101.png","b76e3bdef9b357751fb2eff672afcc40"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/102.png","e6619673fe5381abb275450ac4e4dd45"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/103.png","0fb6a46553a89d02100fc92494f31833"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/104.png","69ef1d9aba2fe4c79909910e23df7622"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/105.png","c38623c8faa91454a62d2718051dd594"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/106.png","dde969bd8c3d9a8348a063f239fa987e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/107.png","f464f7ed51cbe3a1d26bf0d7e3ff8a0f"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/108.png","b8111953a82db61af262e737b986660f"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/109.png","4432fc83bb9466cd474b3e52a86524a0"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/110.png","7c705d75d7d133f0f7ca53bf83a811fd"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/111.png","ba259c992415535ace245ce6e6ca9b1f"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/112.png","9daf2ed8e104b070a543f0bfc35da926"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/113.png","cefb932cd6a09dbf92c2faa7ae0c0423"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/114.png","27d2486046cd5cdbcd85dec6da6f498f"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/115.png","e5626fa9fad0aeb4d1e65dfae1b024d7"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/116.png","b550c626bc453e87432ab29e7a6a3ef6"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/117.png","8d865088b54e0c1e7c793f7e9738aed4"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/118.png","b4973e9963feb6836c1fedd76ae9da8e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/119.png","345ee5b3f86249082d7926f520aad912"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/120.png","2e3a61e213774fade59a1ebef912e7a5"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/121.png","86a0ab0311341c6a3a9543b5731d42c6"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/122.png","28e6e5d339bdb93b777cec018ca9ae30"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/123.png","62d92f93ce93b6bb45bea3a18b8ff1e4"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/124.png","92388b5b5e9dd7691e999c26cc3c76c9"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/125.png","fe8e53140d5d7774c90917ea4f1f9f2c"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/126.png","54ef65394eab291f670619345cb1cb67"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/127.png","2b504d66a856117d703684312556ddc4"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/128.png","90e3b718d98b82eb382bec619a3ae155"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/129.png","24d04088f7b943d28f32864da1acd4da"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/130.png","dcdf6fb8dbc6cc7487427d261181db3e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/131.png","a19c784db11d3b20e74dbc442bf8ad3e"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/132.png","79679107060e70af152b62de81b5fc41"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/133.png","b92a5caf7162d7f4f126a19abf0e454c"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/135.png","aa108d6b0923c691d1c355dfc8755128"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/136.png","cc3ce4f61ccf9f88c4fd5fe6df9da5ef"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/137.png","20e967896c45e02a5345f4366d3695fc"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/138.png","d7b174793692b1089bc89d3a663e3611"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/139.png","c2a69fb1e32a15fc0efe89cd9698d682"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/140.png","2ea77942c3f6b2209d21223e671bbcd9"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/141.png","23f637aa6603d287ce41e7abbece0c98"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/142.png","712f4a1d3bacb41fd849a6380ed91e06"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/143.png","98ef69cec5ccb3727d1829c41252cb82"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/144.png","fbb0c602cf9ed4f0b32923d9535ea3d0"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/145.png","02b7c67ebebe68ab055dc424382b3dc3"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/146.png","3b1cc49ffd5ae4885b7c0ba2617b2c50"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/147.png","e4ded8e9c9ae96b5c1f9346fa3b1cce9"],["/2023/08/04/Blog/小白搭建博客与fluid主题运用/index.html","bfb1f82246f092e9eaba4cdcbc538c40"],["/2023/08/05/Life/长相思/index.html","04f6062696da87b489b62783d50bf058"],["/2023/08/05/Life/长相思/蝶恋花·阅尽天涯离别苦.jpg","3f9d6abde3343907504999e37bcd3e4d"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/001....png","8cdbcb2f5793218d52c1618836f1f0b8"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/001...png","c4a48bdff041a2301e6a2a752cc717f5"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/001.png","ad7fad460dafd1b19f4b340ab229b765"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/002...png","7400bba7bd341bd2d28f33d1f5f84a1c"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/002..png","0e20901199d30ce7d55706fb7b93471b"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/002.png","03dea0239a20f1e45fd13059dfeec40c"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/003...png","f26798b9e92bac0762c2236c29a4a2f5"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/003..png","737a48d47f2e66c48009f68c1414e036"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/003.png","cda371e9ba92db88fa24966677af3a7d"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/004..png","ab24459bcd63592538f9243ec9a6ba61"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/004.png","ccb9dca0b7a506fccccde86d2accedcd"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/005...png","bd407c22e3163eb8ef04c156bc1af902"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/005..png","fc0082df3cf788477ec3efde4d3e1a4d"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/006..png","0c434b4dd423bf799a0da1edfdcc44f2"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/006.png","c9ba4584097a5d7e52c044a7de5bc5dc"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/007..png","d10c75c1fbe1531977b7b77e3fdff142"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/007.png","cfb3d3359b44cf0943fa867b5ec08010"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/008..png","41b7c4b78e307d9363aed3e834a711d2"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/008.png","3241ce0c8d703e563747b14ed8c4253f"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/009..png","eff263b48e760808825076cc25322133"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/010.png","43704e48ecd3cbb3019b03880c882738"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/011.png","c01fc14f37bca66597a2b9c961efdde7"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/012.png","199172198bc02f713c9477e96828abbd"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/013.png","dc25cbb6e7f9a2c7ba1740aeea9d9dd4"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/014.png","18b02f565633f06f0810cf18aee7f549"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/015.png","4091dc228268e1ab01325b42cb6f1c2d"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/016..png","282d8e5cb6a44119f87ac71ada66bdc5"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/017.png","a8fa285fcfe90b7d52d09656243b9b67"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/018.png","cd2573b4ffa5d2ea89faf3f03baacb0d"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/019.png","95ca98764475fe2d31c8669e854a77c0"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/020.png","24f2750472b7cdfaa5b9905fcbec6ede"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/021.png","b99bc1451c3ba6ec32a83d4f4b4aa55c"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/022.png","0eb8af7f8598b4becb773d277825d89b"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/023.png","f86eee8a7327aaaabb8f94007c80e3c5"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/024.png","b99084482a8ca0c6cba6e43bb5e127cf"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/025.png","e6fe39371307e293e34ad0ace5fa4347"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/026.png","074c35bcf69f9ac0863359425ae39cc8"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/027.png","93568a634a6b1b81339939332ac12cc7"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/028.png","e3ab19e930a245be47626845ae28851d"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/029.png","ffc4dc2c6ecb0d32f117c44469059505"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/030.png","c79a1b6911d0f9aa701a30ac7b03ea17"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/031.png","40d1a5f85c22da203dfc8d99f2f8f936"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/032.png","f20c4ce9d5a93acf9509d5f37706702a"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/033.png","143318ed4aebc18ae14c02bb1bd66867"],["/2023/09/03/Blog/腾讯云serverless部署Hexo个人博客/index.html","5186950318c54ac76fb26330dea90305"],["/2023/09/06/Life/琵琶行/index.html","ec51fa9fe3b5674ae3063fae4da0ec7d"],["/2023/09/06/Life/琵琶行/夕阳.jpg","eeca5ef3bfb92e940b0ae5d1c906aadc"],["/2023/09/17/Thought/争论/index.html","3a019f525ab347e9edf469d879fd7a7d"],["/3104/index.html","a52262d2f5d95730317c6ad407bead57"],["/404.html","88f240c07ca249df238b34b769a7edad"],["/Jstyle/index.html","57892e4de2441e3ec5a34d547f814634"],["/about/index.html","cc20764616509ffb5825477878386c11"],["/album/index.html","7eb0c42a3031d4b5ee69646dc934362a"],["/anzhiyu/random.js","7156a6274fbd774fa2bf00c66b1efa41"],["/archives/2023/07/index.html","c93607a307353ccf5f039d1ab95a9cb8"],["/archives/2023/08/index.html","e3c8c949c6e2fed07d3d108c9ac90344"],["/archives/2023/09/index.html","7ef086a28f42d868fa04fb400fd51cca"],["/archives/2023/index.html","237daaa13188fa3c3e4d425a03e812a1"],["/archives/index.html","71bd7ee22461d8f4ad930b893533c7ee"],["/categories/Blog/index.html","492129e0451c099bd22f48f7e13b3d08"],["/categories/Essay/index.html","92ed52a9700ad793c5c933daba524bb4"],["/categories/Life/index.html","9eafca2ca5ecb33248477b9b4df6b3aa"],["/categories/Thought/index.html","96c76d5246c91440b00d2e5cb64a6767"],["/categories/Traditional-Chinese-Medicine/index.html","f5e916ed4d8ccb2dd3788ae051bab32f"],["/categories/index.html","b26ed73bf926cce799f386933ca514d8"],["/comments/index.html","d10adace1af108c3852076cc1b4144be"],["/css/index.css","85fc2b15fc36b93216ef0ee85cb54c83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7b5f488bb0d942743dd1d19d6ac0db44"],["/fcircle/index.html","e337819aa81646c2fd93349e99aff460"],["/hbucm/index.html","46164008cd1469ace216fff5c8da7ca9"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","a060c6478343da63e238fca456fbfa9b"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/README.html","6fde7ef665fc922b0f488d3c4ac2df72"],["/img/siteicon/android-chrome-144x144.png","3b189736d64f154ac69ddcc2599730b9"],["/img/siteicon/android-chrome-192x192.png","61afaed29f42639b59a192cc641f23e0"],["/img/siteicon/android-chrome-256x256.png","67d57d5d43e6c10bd9f32f456396d6fb"],["/img/siteicon/android-chrome-36x36.png","b2a26c5c05e8f2a071d53dcb6442ef9a"],["/img/siteicon/android-chrome-384x384.png","9cd660722c7a339613c9000a7b57b34b"],["/img/siteicon/android-chrome-48x48.png","34881e4fd071758e72c96a1e38606103"],["/img/siteicon/android-chrome-512x512.png","a060c6478343da63e238fca456fbfa9b"],["/img/siteicon/android-chrome-72x72.png","3c3383a70f26de72805e05deee85360f"],["/img/siteicon/android-chrome-96x96.png","5e5ac63f6228a622f3b13a8ae943a7b8"],["/img/siteicon/apple-touch-icon.png","947e719bc211bc205803f3e6859acda8"],["/img/siteicon/browserconfig.xml","51248b7f9d3fb815771098779f5aafa4"],["/img/siteicon/favicon-16x16.png","4bc1cd8465613dc9c4e6aa4ea36a09ca"],["/img/siteicon/favicon-32x32.png","930c19aebd4e4f49724343aa7c5037b9"],["/img/siteicon/mstile-150x150.png","8da8f06d0c0daa88beab62c78bf0ca8b"],["/img/siteicon/safari-pinned-tab.svg","fa6d66012eaac9072b68a21d72ac1892"],["/index.html","2e8ac2c1f43ca36318b981f342f49434"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","53aaa1f5e7f59ab1acdf7621f98a48c0"],["/js/main.js","4f0f8444535b9267c4a35f41d07d4ea2"],["/js/search/algolia.js","786c28bf4b8d9142c17432680c0edcec"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","6c40232d42f0a3b43a8bcc85c01066c2"],["/link/index.html","a54168bf1aa447bca76b48db06329f5b"],["/search.xml","fd5c783501ba3231626cc2ef47a8f84b"],["/service-worker.js","0878330c2436b2dc450fa0f5befe981a"],["/sw-register.js","b0d124443fe6d32bd9f2471e0b836970"],["/tags/blog/index.html","601ca0c8fdc97ebca50de04ee33ae6b6"],["/tags/index.html","56928de8b1f9d965a015fb95ad1f51e7"],["/tags/三观/index.html","78514c06806346a4012c166ff7dbf425"],["/tags/中医/index.html","3ec76c271c72060675055c4c9db06065"],["/tags/生活/index.html","c9634ae4d255c5ca54785d18eae3a552"],["/tags/随笔/index.html","bf42aaf2f21fb9da547283077f49c695"],["/workbox-f2630e7e.js","bf6c170e6f464d92274602ef5aa0f96c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"console.dogecloud.com"});





/* eslint-enable */
