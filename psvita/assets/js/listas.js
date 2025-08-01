// Lista de juegos
const juegos = [
    {
        id: "AC ® III Liberation",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/aciii.webp",
        altText: "AC ® III Liberation",
        title: "AC ® III Liberation (PCSE00053) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1JXN8P9LPya7dapji79SuFg" // Segundo enlace de descarga

    },       
    {
        id: "Angry Birds™ Star Wars",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/angrybirdstar.webp",
        altText: "Angry Birds™ Star Wars",
        title: "Angry Birds™ Star Wars (PCSE00294) (USA).zip",
        downloadLink2: "https://nephobox.com/s/17XZqc-94rQfXwe5XAWkyhg" // Segundo enlace de descarga

    },       
    {
        id: "Angry Birds™ Trilogy",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/angrybird.webp",
        altText: "Angry Birds™ Trilogy",
        title: "Angry Birds™ Trilogy (PCSE00322) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1d92pPKlZkzkGDCumU5UQOA" // Segundo enlace de descarga

    },       
    {
        id: "Attack On Titan Wings Of Freedom",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/aotitan.webp",
        altText: "Attack On Titan Wings Of Freedom",
        title: "Attack On Titan Wings Of Freedom (USA) (PCSE00812).zip",
        downloadLink2: "https://nephobox.com/s/1w0q8bEj9ru5mZee3d_Djgw" // Segundo enlace de descarga

    },       
    {
        id: "Attack On Titan 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/aotitan2.webp",
        altText: "Attack On Titan 2",
        title: "Attack On Titan 2 (JPN) (PCSG01102).zip",
        downloadLink2: "https://nephobox.com/s/1dgFzOsXbpBdyrUNw9Qk72g" // Segundo enlace de descarga
        
    },       
    {
        id: "BLAZBLUE CP EXTEND",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/blazblue.webp",
        altText: "BLAZBLUE CP EXTEND",
        title: "BLAZBLUE CP EXTEND (PCSE00677) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1d_nlz8pnqCSC9oCJQa-FwQ" // Segundo enlace de descarga

    },       
    {
        id: "Borderlands 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/borderlands2.webp",
        altText: "Borderlands 2",
        title: "Borderlands 2 (PCSE00383) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1Kftg_nJOQ5RM8JuU2SWXpA" // Segundo enlace de descarga

    },       
    {
        id: "Call of Duty Black Ops - Declassified",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/cod.webp",
        altText: "Call of Duty Black Ops - Declassified",
        title: "Call of Duty Black Ops - Declassified (PCSE00097) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1VJ4P-HZZUuj6JFegRQfkFw" // Segundo enlace de descarga

    },       
    {
        id: "Dragon Ball Z Battle of Z",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/dragonball.webp",
        altText: "Dragon Ball Z Battle of Z",
        title: "Dragon Ball Z Battle of Z (PCSE00305) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1VNNT9sgwEPantw6eOjD18w" // Segundo enlace de descarga

    },       
    {
        id: "FIFA13",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/fifa13.webp",
        altText: "FIFA13",
        title: "FIFA13 (USA) (PCSE00093).zip",
        downloadLink2: "https://nephobox.com/s/1SAAZk_nmfTOjpp1xcUt8Fw" // Segundo enlace de descarga

    },       
    {
        id: "FIFA15",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/fifa15.webp",
        altText: "FIFA15",
        title: "FIFA15 (PCSE00482).zip",
        downloadLink2: "https://nephobox.com/s/1KZK6Mtq-C7uvJUvE7QUYPQ" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X HD Remaster",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/final.webp",
        altText: "Final Fantasy X HD Remaster",
        title: "Final Fantasy X HD Remaster (USA) (PCSE00293).zip",
        downloadLink2: "https://nephobox.com/s/1buLzihGmCIboJb7McThk6A" // Segundo enlace de descarga

    },       
    {
        id: "Final Fantasy X 2 HD Remaster",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/final2.webp",
        altText: "Final Fantasy X-2 HD Remaster",
        title: "Final Fantasy X-2 HD Remaster (USA) (PCSE00283).zip",
        downloadLink2: "https://nephobox.com/s/1jgGq3XYSspIxQFwjLLt0ng" // Segundo enlace de descarga

    },       
    {
        id: "God of War Collection",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/godofwar.webp",
        altText: "God of War Collection",
        title: "God of War Collection.zip",
        downloadLink2: "https://nephobox.com/s/1cQxw6-P5sQRAEeAS0uBghg" // Segundo enlace de descarga

    },       
    {
        id: "GRAVITY RUSH",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/gravityrush.webp",
        altText: "GRAVITY RUSH",
        title: "GRAVITY RUSH (PCSA00011).zip",
        downloadLink2: "https://nephobox.com/s/1lnW9d-3lFzGU1qbjKAIPAw" // Segundo enlace de descarga

    },       
    {
        id: "Guilty Gear XX Accent Core Plus R",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/guilty.webp",
        altText: "Guilty Gear XX Accent Core Plus R",
        title: "Guilty Gear XX Accent Core Plus R (USA) (PCSE00137).zip",
        downloadLink2: "https://nephobox.com/s/1QThJHQ9HbHFz2cN_zqtUiA" // Segundo enlace de descarga

    },       
    {
        id: "Hyperdimension Neptunia Re;Birth1",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/hyper1.webp",
        altText: "Hyperdimension Neptunia Re;Birth1",
        title: "Hyperdimension Neptunia Re;Birth1 (USA) (PCSE00443).zip",
        downloadLink2: "https://nephobox.com/s/16kNC5UPmND3O4UjxuAp1Vg" // Segundo enlace de descarga

    },       
    {
        id: "Hyperdimension Neptunia Re;Birth2 Sisters Generation",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/hyper2.webp",
        altText: "Hyperdimension Neptunia Re;Birth2 Sisters Generation",
        title: "Hyperdimension Neptunia Re;Birth2 Sisters Generation (USA) (PCSE00508).zip",
        downloadLink2: "https://nephobox.com/s/1PBJ96OXVzM67Z7_ayWY56A" // Segundo enlace de descarga

    },       
    {
        id: "Hyperdimension Neptunia Re;Birth3 V Generation",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/hyper3.webp",
        altText: "Hyperdimension Neptunia Re;Birth3 V Generation",
        title: "Hyperdimension Neptunia Re;Birth3 V Generation (USA) (PCSE00661).zip",
        downloadLink2: "https://nephobox.com/s/1iZ5MEPLE--59QSn5D5U1Ig" // Segundo enlace de descarga

    },       
    {
        id: "Injustice Gods Among Us - Ultimate Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/injustice.webp",
        altText: "Injustice Gods Among Us - Ultimate Edition",
        title: "Injustice Gods Among Us - Ultimate Edition (PCSE00271) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1WcF9wTVIThd_MJ3Ys_h4Hg" // Segundo enlace de descarga

    },       
    {
        id: "J-STARS Victory VS",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/jstars.webp",
        altText: "J-STARS Victory VS",
        title: "J-STARS Victory VS (PCSE00595) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1_bSdOYVemI6YQgQB62pQqg" // Segundo enlace de descarga

    },       
    {
        id: "Killzone Mercenary",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/killzone.webp",
        altText: "Killzone Mercenary",
        title: "Killzone Mercenary (PCSA00107) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1_V2eMDbVmNRT0tQHj3dmug" // Segundo enlace de descarga

    },       
    {
        id: "LittleBigPlanet PlayStationVita",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/bigplanet.webp",
        altText: "LittleBigPlanet PlayStationVita",
        title: "LittleBigPlanet PlayStationVita (PCSA00017) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1r3OXRlC-JevqKjiC3UwGLQ" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/metalgear2.webp",
        altText: "Metal Gear Solid 3",
        title: "Metal Gear Solid 3 (PCSE00079) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1A6PmfPbHiwK5Kl18sOck2A" // Segundo enlace de descarga

    },       
    {
        id: "Metal Gear Solid HD",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/metalsolidhd.webp",
        altText: "Metal Gear Solid HD",
        title: "Metal Gear Solid HD (PCSE00020) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1yVgQcIbELwIEEcMnNgU9yw" // Segundo enlace de descarga

    },       
    {
        id: "METAL SLUG 3",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/metal3.webp",
        altText: "METAL SLUG 3",
        title: "METAL SLUG 3 (PCSE00665) (USA).zip",
        downloadLink2: "https://nephobox.com/s/16RpvOIpWnHK9dSl3EMkmTA" // Segundo enlace de descarga
        
    },       
    {
        id: "Minecraft - PlayStation®Vita Edition",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/minecraft.webp",
        altText: "Minecraft - PlayStation®Vita Edition",
        title: "Minecraft - PlayStation®Vita Edition [PCSB00560] [EUR].zip",
        downloadLink2: "https://nephobox.com/s/1syd5IkV2FxfF9y5LcgYQWQ" // Segundo enlace de descarga

    },       
    {
        id: "Mario Kart Vita",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/mkvita.webp",
        altText: "Mario Kart Vita",
        title: "Mario Kart Vita.vpk",
        downloadLink2: "https://nephobox.com/s/1mbeFVeEYUh-C5cmjVAaHSg" // Segundo enlace de descarga

    },       
    {
        id: "MLB 15 The Show",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/mlb15.webp",
        altText: "MLB 15 The Show",
        title: "MLB 15 The Show (PCSA00511) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1JLoZcsVSRj4mnuGb4JckkQ" // Segundo enlace de descarga

    },       
    {
        id: "Mortal Kombat 9",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/mk9.webp",
        altText: "Mortal Kombat 9",
        title: "Mortal Kombat 9 (PCSE00023).zip",
        downloadLink2: "https://nephobox.com/s/1bpFK6DX8de3uVTuQA1mXUg" // Segundo enlace de descarga

    },       
    {
        id: "One Piece Unlimited World Red",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/opunlimited.webp",
        altText: "One Piece Unlimited World Red",
        title: "One Piece Unlimited World Red (USA) (PCSE00423).zip",
        downloadLink2: "https://nephobox.com/s/1lGp0f4jI_zLqQZwR53uePg" // Segundo enlace de descarga

    },       
    {
        id: "PlayStation All-Stars",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/playallstars.webp",
        altText: "PlayStation All-Stars",
        title: "PlayStation All-Stars (PCSA00069) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1sg6RNoAhfDTD-alvQe-YdQ" // Segundo enlace de descarga

    },       
    {
        id: "Rayman Legends",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/rayman.webp",
        altText: "Rayman Legends",
        title: "Rayman Legends (PCSE00277) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1OJoT4KuvTMb9vbY33NVQ6w" // Segundo enlace de descarga

    },       
    {
        id: "Resident Evil Revelations 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/resident.webp",
        altText: "Resident Evil Revelations 2",
        title: "Resident Evil Revelations 2 (USA) (PCSE00608).zip",
        downloadLink2: "https://nephobox.com/s/1vyJnxVQiP2IISKe0bLW76Q" // Segundo enlace de descarga

    },       
    {
        id: "Resistance - Burning Skies",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/resistance.webp",
        altText: "Resistance - Burning Skies",
        title: "Resistance - Burning Skies (PCSA00008) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1PvyO-jzzlBa_-EoASA4n2g" // Segundo enlace de descarga

    },       
    {
        id: "Ridge Racer",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/ridge.webp",
        altText: "Ridge Racer",
        title: "Ridge Racer (USA) (PCSE00001).zip",
        downloadLink2: "https://nephobox.com/s/1myJAq2ciMgdzWn1oH1bOQA" // Segundo enlace de descarga

    },       
    {
        id: "Sly Cooper - Thieves in Time",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/slycoopertime.webp",
        altText: "Sly Cooper - Thieves in Time",
        title: "Sly Cooper - Thieves in Time (PCSA00068).zip",
        downloadLink2: "https://nephobox.com/s/1Yzs3z7yBucktRA5d9wSATQ" // Segundo enlace de descarga

    },       
    {
        id: "Street Fighter X Tekken",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/streetfigtherxtekken.webp",
        altText: "Street Fighter X Tekken",
        title: "Street Fighter X Tekken (PCSE00005) (USA).zip",
        downloadLink2: "https://nephobox.com/s/1PX0D96qnkgAZ5irMVmfUSw" // Segundo enlace de descarga

    },       
    {
        id: "Sword Art Online Lost Song",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/sword.webp",
        altText: "Sword Art Online Lost Song",
        title: "Sword Art Online Lost Song (USA) (PCSE00740).zip",
        downloadLink2: "https://nephobox.com/s/1Ey2Deeno8K6wLVZjHHyA9g" // Segundo enlace de descarga

    },       
    {
        id: "The Amazing Spider-Man",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/spiderman2.webp",
        altText: "The Amazing Spider-Man",
        title: "The Amazing Spider-Man (USA) (PCSE00333).zip",
        downloadLink2: "https://terabox.com/s/163LDWUrs8qD6KCN-Ni8AXA" // Segundo enlace de descarga

    },       
    {
        id: "The Binding of Isaac - Rebirth",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/isaac.webp",
        altText: "The Binding of Isaac - Rebirth",
        title: "The Binding of Isaac - Rebirth (PCSE00507) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1bbvQor2ajMuSXfw11kJu3w" // Segundo enlace de descarga

    },       
    {
        id: "The Walking Dead - S2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/walkingdead.webp",
        altText: "The Walking Dead - S2",
        title: "The Walking Dead - S2 (PCSE00372) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1PF4-TbMgHShf25xh1GyVFQ" // Segundo enlace de descarga

    },       
    {
        id: "Toukiden 2",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/toukiden2.webp",
        altText: "Toukiden 2",
        title: "Toukiden 2 (USA) (PCSE00940).zip",
        downloadLink2: "https://nephobox.com/s/1rkFDc7Yps7ZvtKMfOyL3yg" // Segundo enlace de descarga

    },       
    {
        id: "Uncharted Golden Abyss",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/Uncharted.webp",
        altText: "Uncharted Golden Abyss",
        title: "Uncharted Golden Abyss (PCSA00029).zip",
        downloadLink2: "https://nephobox.com/s/1HbaVqJpqGrziVdy0XcCMQA" // Segundo enlace de descarga

    },       
    {
        id: "Velocity2X",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/velocity2x.webp",
        altText: "Velocity2X",
        title: "Velocity2X (PCSE00374) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/16elIrDlQD3SQwIBaO6gYDg" // Segundo enlace de descarga

    },       
    {
        id: "WipEout 2048",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/wipeout.webp",
        altText: "WipEout 2048",
        title: "WipEout 2048 (PCSA00015) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/18LjujkQrUG6qCUU1jI_TCg" // Segundo enlace de descarga

    },       
    {
        id: "WRC 5",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/wrc5.webp",
        altText: "WRC 5",
        title: "WRC 5 (PCSE00667) (NTSC).zip",
        downloadLink2: "https://nephobox.com/s/1X0SJza_HoAwEI5dQRGw_Lg" // Segundo enlace de descarga

    },       
    {
        id: "YAKUZA 0 Companion app",
        imgSrc: "https://cdn.jsdelivr.net/gh/Chakielzero/imagenes@main/psvita/yakuza0.webp",
        altText: "YAKUZA 0 Companion app",
        title: "YAKUZA 0 Companion app (JPN) (PCSG00503).zip",
        downloadLink2: "https://nephobox.com/s/1ERVcMwOLzOoAXY_FR9LtwA" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
