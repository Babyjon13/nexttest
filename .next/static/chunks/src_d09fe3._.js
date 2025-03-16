(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_d09fe3._.js", {

"[project]/src/app/components/ImageSlider.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "activeDot": "ImageSlider-module__pIq8Wq__activeDot",
  "dot": "ImageSlider-module__pIq8Wq__dot",
  "dotsContainer": "ImageSlider-module__pIq8Wq__dotsContainer",
  "image": "ImageSlider-module__pIq8Wq__image",
  "slide": "ImageSlider-module__pIq8Wq__slide",
  "sliderContainer": "ImageSlider-module__pIq8Wq__sliderContainer",
  "sliderWrapper": "ImageSlider-module__pIq8Wq__sliderWrapper",
});
}}),
"[project]/src/app/components/ImageSlider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/components/ImageSlider.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
;
;
const ImageSlider = ({ images, interval = 3000 })=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoPlay, setAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    if (!images || images.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                color: 'red'
            },
            children: "No images to display!"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ImageSlider.js",
            lineNumber: 9,
            columnNumber: 12
        }, this);
    }
    const handleDotClick = (index)=>{
        setCurrentIndex(index);
        setAutoPlay(false);
        setTimeout(()=>setAutoPlay(true), interval);
    };
    const handleNext = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % images.length);
        setAutoPlay(false);
        setTimeout(()=>setAutoPlay(true), interval);
    };
    const handlePrev = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length);
        setAutoPlay(false);
        setTimeout(()=>setAutoPlay(true), interval);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageSlider.useEffect": ()=>{
            let timer;
            if (autoPlay) {
                timer = setInterval({
                    "ImageSlider.useEffect": ()=>{
                        setCurrentIndex({
                            "ImageSlider.useEffect": (prev)=>(prev + 1) % images.length
                        }["ImageSlider.useEffect"]);
                    }
                }["ImageSlider.useEffect"], interval);
            }
            return ({
                "ImageSlider.useEffect": ()=>clearInterval(timer)
            })["ImageSlider.useEffect"];
        }
    }["ImageSlider.useEffect"], [
        autoPlay,
        images.length,
        interval
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderContainer,
            children: [
                images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide,
                        style: {
                            opacity: index === currentIndex ? 1 : 0,
                            zIndex: index === currentIndex ? 1 : 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img,
                            alt: `Slide ${index + 1}`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ImageSlider.js",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/app/components/ImageSlider.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dotsContainer,
                    children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${index === currentIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ImageSlider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeDot : ''}`,
                            onClick: ()=>handleDotClick(index),
                            "aria-label": `Go to slide ${index + 1}`
                        }, index, false, {
                            fileName: "[project]/src/app/components/ImageSlider.js",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ImageSlider.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ImageSlider.js",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/ImageSlider.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
_s(ImageSlider, "2nTCUQKgPrrqvZVMOKx/x6rBSo4=");
_c = ImageSlider;
const __TURBOPACK__default__export__ = ImageSlider;
var _c;
__turbopack_refresh__.register(_c, "ImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/data.json (json)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__(JSON.parse("[{\"id\":{\"$oid\":\"67c9ae343716ad78388737ad\"},\"title\":\"Начинка для блинов из грибов\",\"description\":\"Сытно, необычно, вкусно — разнообразьте свое меню! Начинка для блинов из грибов не самая распространенная, но очень вкусная! Грибы для нее обжариваются с луком и получаются сочными и ароматными. Для сытости в нее добавляются вареные яйца.\",\"images\":[\"/uploads/1741589601007_1.jpg\",\"/uploads/1741589601008_2.jpg\",\"/uploads/1741589601009_3.jpg\",\"/uploads/1741589601010_4.jpg\"],\"author\":\"katushafin\",\"ingredients\":[{\"name\":\"Мука\",\"value\":80,\"unit\":\"г\",\"bel\":10,\"fats\":1,\"carbs\":75,\"id\":{\"$oid\":\"67c9ae343716ad78388737a1\"}},{\"name\":\"Яйца\",\"value\":1,\"unit\":\"шт\",\"bel\":13,\"fats\":11,\"carbs\":1,\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481dfd\"}},{\"name\":\"Молоко\",\"value\":200,\"unit\":\"мл\",\"bel\":3,\"fats\":4,\"carbs\":5,\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481dfe\"}},{\"name\":\"Масло сливочное\",\"value\":50,\"unit\":\"г\",\"bel\":1,\"fats\":81,\"carbs\":1,\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481dff\"}},{\"name\":\"Сахар\",\"value\":40,\"unit\":\"г\",\"bel\":0,\"fats\":0,\"carbs\":100,\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e00\"}},{\"name\":\"Соль\",\"value\":1,\"unit\":\"г\",\"bel\":0,\"fats\":0,\"carbs\":0,\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e01\"}}],\"cookingTime\":\"1 ч 0 мин\",\"portion\":4,\"nutritionalValue\":{\"kkal\":153,\"bel\":6,\"fats\":10,\"carbs\":9,\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e02\"}},\"steps\":[{\"stepTitle\":\"Шаг 1\",\"stepDescription\":\"Как сделать начинку для блинов из грибов? Подготовьте продукты. Сначала для блинов. Молоко подойдет любой жирности, можете разбавить его водой. Количество соли и сахара регулируйте по своему вкусу. Растительное масло берите без запаха. Вы также можете испечь блины по любому другому рецепту. С другими вариантами можно ознакомиться по ссылке после описания последнего шага.\",\"stepImage\":\"/uploads/1741589601010_5.jpg\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e03\"}},{\"stepTitle\":\"Шаг 2\",\"stepDescription\":\"Яйцо вбейте в миску. Всыпьте к нему сахар и соль. Влейте около трети от всего количества молока. Перемешайте все вместе венчиком.\",\"stepImage\":\"/uploads/1741589601011_6.jpg\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e04\"}},{\"stepTitle\":\"Шаг 3\",\"stepDescription\":\"Всыпьте в яично-молочную смесь всю муку сразу и перемешайте тесто венчиком. У вас получится густая масса, так и должно быть. Таким способом вы сможете избежать образование комочков в тесте.\",\"stepImage\":\"/uploads/1741589601012_7.jpg\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e05\"}},{\"stepTitle\":\"Шаг 4\",\"stepDescription\":\"Начните вливать в тесто оставшееся молоко. Доведите его до нужной густоты (как жидкий питьевой йогурт). Молока у вас может уйти больше или меньше, чем указано в рецепте.\",\"stepImage\":\"/uploads/1741589601012_8.jpg\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e06\"}},{\"stepTitle\":\"Шаг 5\",\"stepDescription\":\"В конце влейте в тесто растительное масло, вновь перемешайте. При добавлении масла вам не нужно будет каждый раз смазывать сковороду. Оставьте тест на некоторое время на столе. Сколько должно стоять тесто для блинов? Оставьте тесто на 5-10 минут, чтобы разошлись все комочки и выделилась клейковина из муки, благодаря чему блинчики не будут рваться и прилипать к сковороде.\",\"stepImage\":\"/uploads/1741589601013_9.jpg\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e07\"}},{\"stepTitle\":\"Шаг 6\",\"stepDescription\":\"Жарьте блины на среднем огне на блинной сковороде. Так как в тесте уже есть масло, то смазывать сковороду можно только перед первым блином. Однако всё зависит от выбранной сковороды, поэтому ориентируйтесь по ситуации и при необходимости смажьте сковороду дополнительно. О том, как подобрать идеальную сковороду, а также как правильно выбрать растительное масло, читайте в отдельных статьях, ссылки в конце рецепта.\",\"stepImage\":\"/uploads/1741589601013_10.jpg\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e08\"}},{\"stepTitle\":\"Шаг 7\",\"stepDescription\":\"Готовый блин снимите на тарелку. Пожарьте таким образом блины из всего теста.\",\"stepImage\":\"/uploads/1741589601013_11.jpg\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e09\"}}],\"categories\":[{\"categoryKkal\":\"Меньше 300 ккал\",\"categoryTime\":\"Больше 60 минут\",\"category\":\"Завтраки\",\"id\":{\"$oid\":\"67ce8c612ef1c2ac8f481e0a\"}}],\"priority\":4,\"createdAt\":{\"$date\":\"2025-03-10T06:53:21.020Z\"},\"__v\":0},{\"id\":{\"$oid\":\"67c9ae343716ad78388737a1\"},\"title\":\"Бенто торт корейский\",\"description\":\"Самый модный, красивый, оригинальный, на праздник! Бенто торт корейский — последнее веяние кондитерской моды. Это торты маленького размера, на одного-двух человек, но сделанные по всем правилам — с бисквитом, начинкой и кремом. Украшаются они нарочито небрежно и упаковываются в коробки.\",\"images\":[\"/uploads/1741591448656_1.jpg\",\"/uploads/1741591448657_2.jpg\",\"/uploads/1741591448657_3.jpg\",\"/uploads/1741591448658_4.jpg\"],\"author\":\"katushafin\",\"ingredients\":[{\"name\":\"Мука\",\"value\":140,\"unit\":\"г\",\"bel\":10,\"fats\":1,\"carbs\":75,\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e56\"}},{\"name\":\"Яйца\",\"value\":5,\"unit\":\"шт\",\"bel\":13,\"fats\":11,\"carbs\":1,\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e57\"}},{\"name\":\"Сахар\",\"value\":150,\"unit\":\"г\",\"bel\":0,\"fats\":0,\"carbs\":100,\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e58\"}},{\"name\":\"Масло сливочное\",\"value\":20,\"unit\":\"г\",\"bel\":1,\"fats\":81,\"carbs\":1,\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e59\"}},{\"name\":\"Молоко\",\"value\":20,\"unit\":\"мл\",\"bel\":3,\"fats\":4,\"carbs\":5,\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e5a\"}},{\"name\":\"Соль\",\"value\":1,\"unit\":\"г\",\"bel\":0,\"fats\":0,\"carbs\":0,\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e5b\"}}],\"cookingTime\":\"24 ч 0 мин\",\"portion\":4,\"nutritionalValue\":{\"kkal\":306,\"bel\":9,\"fats\":24,\"carbs\":28,\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e5c\"}},\"steps\":[{\"stepTitle\":\"Шаг 1\",\"stepDescription\":\"Как сделать бенто торт корейский? Начните приготовление с выпечки бисквитов, ванильного и шоколадного. Подготовьте продукты. Я сначала пекла ванильный. Чтобы бисквит получился пышнее, все ингредиенты должны быть комнатной температуры, поэтому достаньте яйца заранее. Масло и молоко будут нагреваться, их можно вынуть перед готовкой. Я готовлю 4 торта — два ванильных с вишней и клубникой, шоколадный с вишней и Сникерс. О бисквитах читайте в конце рецепта.\",\"stepImage\":\"/uploads/1741591448658_5.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e5d\"}},{\"stepTitle\":\"Шаг 2\",\"stepDescription\":\"В глубокую миску вбейте яйца. Обязательно мойте яйца перед использованием, так как даже на кажущейся чистой скорлупе могут находиться вредные бактерии. Лучше всего использовать моющие средства для пищевых продуктов и щетку. Всыпьте ванилин и соль, которая сбалансирует и усилит вкус. Начните взбивать яйца на небольших скоростях миксера. Порциями всыпьте сахар, хорошо взбивая массу после каждого добавления. Взбивайте яйца с сахаром до пышной светлой массы.\",\"stepImage\":\"/uploads/1741591448658_6.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e5e\"}},{\"stepTitle\":\"Шаг 3\",\"stepDescription\":\"Влейте молоко в масло и хорошо прогрейте в микроволновке, практически до кипения. Масло должно полностью растопиться. Просейте муку и разрыхлитель во взбитые яйца. Этим вы не только уберете возможный мусор, но и насытите муку кислородом, что сделает пирог более воздушным. Аккуратными движениями снизу вверх вмешайте муку. Затем влейте молоко с маслом. Перемешайте до полной однородности. Тесто получится текучим, так и надо.\",\"stepImage\":\"/uploads/1741591448659_7.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e5f\"}},{\"stepTitle\":\"Шаг 4\",\"stepDescription\":\"Противень (у меня 30*40см, но лучше подойдет чуть меньшего размера) застелите пергаментом. Вылейте на него тесто, равномерно распределите его. Запекайте бисквит в духовке, предварительно разогретой до 180°С 15-20 минут. Точное время будет зависеть от особенностей вашей духовки и размера бисквита. Он должен зарумяниться и подняться. О духовках читайте в статье в конце рецепта.\",\"stepImage\":\"/uploads/1741591448659_8.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e60\"}},{\"stepTitle\":\"Шаг 5\",\"stepDescription\":\"Готовый бисквит выньте из духовки и снимите с противня. Остудите его, снимите бумагу. Формой подходящего размера вырежьте коржи. Я выбрала диаметр 12см, у меня вышло 4 штуки. Заверните бисквиты в пищевую пленку и уберите в холодильник на 8 часов — таким образом вся влага равномерно распределится и коржи будут меньше крошиться. Остатки бисквитов можете пустить для других десертов — пирожных картошка, например.\",\"stepImage\":\"/uploads/1741591448659_9.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e61\"}},{\"stepTitle\":\"Шаг 6\",\"stepDescription\":\"Пока у вас выпекается светлый корж, приготовьте шоколадный. Подготовьте продукты для него. Кефир и яйцо должны быть теплыми, какао возьмите натуральное, масло без запаха. Вскипятите воду, она понадобится горячей, температуры около 80°С.\",\"stepImage\":\"/uploads/1741591448659_10.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e62\"}},{\"stepTitle\":\"Шаг 7\",\"stepDescription\":\"Всыпьте в кефир соду, перемешайте и отставьте в сторону. Между ними произойдет реакция, выделится углекислый газ, который и поднимет бисквит при выпечке.\",\"stepImage\":\"/uploads/1741591448660_11.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e63\"}},{\"stepTitle\":\"Шаг 8\",\"stepDescription\":\"Просейте в миску муку и какао. Его тоже лучше просеивать, так как какао часто собирается в комочки. Добавьте щепотку соли, перемешайте сухие ингредиенты.\",\"stepImage\":\"/uploads/1741591448660_12.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e64\"}},{\"stepTitle\":\"Шаг 9\",\"stepDescription\":\"Яйцо вбейте в миску, взбейте его миксером на больших оборотах, постепенно добавляя сахар, до пышной светлой массы. Затем влейте в него масло и кефир, который увеличится в объеме и запузырится. Размешайте все миксером. В процессе влейте горячую воду.\",\"stepImage\":\"/uploads/1741591448660_13.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e65\"}},{\"stepTitle\":\"Шаг 10\",\"stepDescription\":\"Всыпьте сухие ингредиенты в жидкую часть, аккуратно перемешайте до однородности. Шоколадное тесто получается более густым. Размажьте его по противню, застеленным бумагой для выпечки (у меня опять 30*40см).\",\"stepImage\":\"/uploads/1741591448661_14.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e66\"}},{\"stepTitle\":\"Шаг 11\",\"stepDescription\":\"Пеките бисквит в духовке при t 180°С. Шоколадный корж печется дольше, от 30 до 40 минут. Готовый бисквит выньте, остудите, снимите бумагу. Таким же образом вырежьте круги, заверните их в пленку и уберите в холодильник.\",\"stepImage\":\"/uploads/1741591448662_15.jpg\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e67\"}}],\"categories\":[{\"categoryKkal\":\"300-500 ккал\",\"categoryTime\":\"Больше 60 минут\",\"category\":\"Десерты\",\"id\":{\"$oid\":\"67ce93982ef1c2ac8f481e68\"}}],\"priority\":4,\"createdAt\":{\"$date\":\"2025-03-10T07:24:08.670Z\"},\"__v\":0},{\"id\":{\"$oid\":\"67c9ae343716ad78388737a2\"},\"title\":\"Рис на сковороде рассыпчатый\",\"description\":\"Просто, очень вкусно, на скорую руку, на каждый день! Рассыпчатый рис на сковороде готовится из двух ингредиентов - самой крупы и лука. Идеальный гарнир на любые случаи. Хорош еще и тем, что его можно разнообразить по своему вкусу - добавляя другие овощи, грибы, зелень, приправы.\",\"images\":[\"/uploads/1741592447452_1.jpg\"],\"author\":\"Юлия М\",\"ingredients\":[{\"name\":\"Перец\",\"value\":200,\"unit\":\"г\",\"bel\":1,\"fats\":1,\"carbs\":6,\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481eb8\"}},{\"name\":\"Молоко\",\"value\":400,\"unit\":\"мл\",\"bel\":3,\"fats\":3.5,\"carbs\":5,\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481eb9\"}},{\"name\":\"Лук\",\"value\":50,\"unit\":\"г\",\"bel\":1,\"fats\":0,\"carbs\":9,\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481eba\"}},{\"name\":\"Масло сливочное\",\"value\":30,\"unit\":\"г\",\"bel\":1,\"fats\":81,\"carbs\":1,\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ebb\"}},{\"name\":\"Соль\",\"value\":1,\"unit\":\"г\",\"bel\":0,\"fats\":0,\"carbs\":0,\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ebc\"}}],\"cookingTime\":\"0 ч 30 мин\",\"portion\":4,\"nutritionalValue\":{\"kkal\":147,\"bel\":2,\"fats\":4,\"carbs\":26,\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ebd\"}},\"steps\":[{\"stepTitle\":\"Шаг 1\",\"stepDescription\":\"Как сделать рассыпчатый рис на сковороде? Подготовьте ингредиенты. Лук очистите от шелухи и промойте в холодной воде. С помощью острого ножа нарежьте мелко лук, смачивая нож в холодной воде, чтобы уберечь глаза. Как выбрать идеальный рис читайте в отдельной статье. Ссылку вы найдете в конце рецепта.\",\"stepImage\":\"/uploads/1741592447453_2.jpg\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ebe\"}},{\"stepTitle\":\"Шаг 2\",\"stepDescription\":\"На горячую сковороду налейте немного растительного масла и выложите нарезанный лук. Обжарьте лук до золотистого состояния. Периодически помешивайте, чтобы не подгорел. Удобно это делать с помощью деревянной лопатки. Как выбрать сковороду и масло для жарки читайте в статьях на эти темы. Ссылки есть в конце этого рецепта.\",\"stepImage\":\"/uploads/1741592447453_3.jpg\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ebf\"}},{\"stepTitle\":\"Шаг 3\",\"stepDescription\":\"Пока жарится лук, подготовьте необходимое количество риса. Промойте его несколько раз в холодной воде. Затем всю воду слейте, воспользовавшись дуршлагом.\",\"stepImage\":\"/uploads/1741592447454_4.jpg\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ec0\"}},{\"stepTitle\":\"Шаг 4\",\"stepDescription\":\"Когда лук обжарился, добавьте к нему в сковороду промытый рис. Перемешайте и обжарьте все вместе 3-4 минуты.\\n\",\"stepImage\":\"/uploads/1741592447454_5.jpg\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ec1\"}},{\"stepTitle\":\"Шаг 5\",\"stepDescription\":\"Добавьте к рису немного соли и специи. Для придания рису красивого желтого цвета можете добавить немного куркумы. Все хорошо перемешайте.\",\"stepImage\":\"/uploads/1741592447454_6.jpg\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ec2\"}},{\"stepTitle\":\"Шаг 6\",\"stepDescription\":\"Влейте в сковороду необходимое количество горячей воды. Перемешайте и доведите до кипения. Затем накройте сковороду крышкой, сделайте минимальный огонь и оставьте готовиться примерно на 10-15 минут. Нам нужно, чтобы крупа впитала жидкость.\",\"stepImage\":\"/uploads/1741592447454_7.jpg\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ec3\"}},{\"stepTitle\":\"Шаг 7\",\"stepDescription\":\"Как только вода впитается в рис, выключите огонь и оставьте рис постоять под крышкой еще минут 15. Затем можете подавать горячим. Такой гарнир из риса подойдет ко многим блюдам! Приятного аппетита!\",\"stepImage\":\"/uploads/1741592447455_8.jpg\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ec4\"}}],\"categories\":[{\"categoryKkal\":\"Меньше 300 ккал\",\"categoryTime\":\"30-60 минут\",\"category\":\"Ужины\",\"id\":{\"$oid\":\"67ce977f2ef1c2ac8f481ec5\"}}],\"priority\":4,\"createdAt\":{\"$date\":\"2025-03-10T07:40:47.459Z\"},\"__v\":0}]"));}}),
"[project]/src/app/exp/page.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/exp/page.js'

Expression expected`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/src/app/exp/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_d09fe3._.js.map