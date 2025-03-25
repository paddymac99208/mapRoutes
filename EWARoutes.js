const locations = [
  {
    route: "Central Spokane",
    placeId: "ChIJuWUQL-4YnlQRecNUdVsfVSo",
    edition: "EWA",
    notes: "Inside EX Rack; Opens at 11am",
    address: "1320 N Division St, Spokane, WA 99202, USA",
    lat: 47.67036830000001,
    lng: -117.4107588
  },
  {
    route: "Central Spokane",
    placeId: "ChIJP29QyeUYnlQR7NclQlFHvSg",
    edition: "EWA",
    notes: "Inside Auto Clipper Rack",
    address: "1918 N Division St #2252, Spokane, WA 99207, USA",
    lat: 47.6758403,
    lng: -117.4108012
  },
  {
    route: "Central Spokane",
    placeId: "ChIJOVp3KOQYnlQRZt78rofalF0",
    edition: "EWA",
    notes: "Shared rack top shelf; 6pm close",
    address: "2020 N Division St, Spokane, WA 99207, USA",
    lat: 47.6768492,
    lng: -117.4102867
  },
  {
    route: "Central Spokane",
    placeId: "ChIJaxHCMOEYnlQRq0Lk3Bl0HuI",
    edition: "EWA",
    notes: "Shared rack inside",
    address: "2424 N Division St, Spokane, WA 99207, USA",
    lat: 47.680107,
    lng: -117.410356
  },
  {
    route: "Central Spokane",
    placeId: "ChIJffVkJN4YnlQRueeV7BzxHxo",
    edition: "EWA",
    notes: "Inlander store rack - 2 pockets, west door. ",
    address: "210 E North Foothills Dr, Spokane, WA 99207, USA",
    lat: 47.6815931,
    lng: -117.4055263
  },
  {
    route: "Central Spokane",
    placeId: "ChIJBfQ0CyMZnlQRCnVtXnLZ4f8",
    edition: "EWA",
    notes: "Inlander Rack; Opens at 12pm",
    address: "3714 N Division St, Spokane, WA 99207, USA",
    lat: 47.6919587,
    lng: -117.4102374
  },
  {
    route: "Central Spokane",
    placeId: "ChIJpWcTcCMZnlQRVmhLkeaxSWM",
    edition: "EWA",
    notes: "Inside Store Rack ",
    address: "12 E Empire Ave, Spokane, WA 99207, USA",
    lat: 47.6926291,
    lng: -117.410415
  },
  {
    route: "Central Spokane",
    placeId: "ChIJpetyQTsZnlQR-ODvgpN1x5Y",
    edition: "EWA",
    notes: "Community rack - claim top shelf",
    address: "4120 N Division St, Spokane, WA 99207, USA",
    lat: 47.6959263,
    lng: -117.4107787
  },
  {
    route: "Central Spokane",
    placeId: "ChIJc8NVBzsZnlQR2KJkBZQQdzE",
    edition: "EWA",
    notes: "Single EX rack inside",
    address: "4320 N Division St, Spokane, WA 99207, USA",
    lat: 47.6974584,
    lng: -117.4107841
  },
  {
    route: "Central Spokane",
    placeId: "ChIJJeDyJzQZnlQRa91quEi_bqc",
    edition: "EWA",
    notes: "",
    address: "5023 N Addison St, Spokane, WA 99207, USA",
    lat: 47.70380789999999,
    lng: -117.4034464
  },
  {
    route: "Central Spokane",
    placeId: "ChIJZwb96TkZnlQRrkOTLBWjZlQ",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "4750 N Division St, Spokane, WA 99207, USA",
    lat: 47.7024811,
    lng: -117.4101016
  },
  {
    route: "Central Spokane",
    placeId: "ChIJPa0txDcZnlQRpMu5PY1AT1w",
    edition: "EWA",
    notes: "Table in entryway",
    address: "27 E Queen Ave, Spokane, WA 99207, USA",
    lat: 47.7044504,
    lng: -117.4099229
  },
  {
    route: "Central Spokane",
    placeId: "ChIJTTklM-CBVIcR7sFsTCIsoYc",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "5102 N Division St, Spokane, WA 99207, USA",
    lat: 47.70459699999999,
    lng: -117.4105505
  },
  {
    route: "Central Spokane",
    placeId: "ChIJqSnPJ0gZnlQRFgi53PzUYCA",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "5406 N Division St, Spokane, WA 99207, USA",
    lat: 47.7072631,
    lng: -117.4104353
  },
  {
    route: "Central Spokane",
    placeId: "ChIJl_Rar0kZnlQRIXfWd2Euf0I",
    edition: "EWA",
    notes: "Inside Community Shelf",
    address: "5422 N Division St, Spokane, WA 99207, USA",
    lat: 47.70758499999999,
    lng: -117.4107802
  },
  {
    route: "Central Spokane",
    placeId: "ChIJXdkuFkoZnlQR5TXI5S7znhY",
    edition: "EWA",
    notes: "",
    address: "220 E Rowan Ave, Spokane, WA 99207, USA",
    lat: 47.7077272,
    lng: -117.406274
  },
  {
    route: "Central Spokane",
    placeId: "ChIJeYSyuUsZnlQRNVwTYeHjHII",
    edition: "EWA",
    notes: "Single EX rack inside main entrance",
    address: "5633 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7114573,
    lng: -117.4071068
  },
  {
    route: "Central Spokane",
    placeId: "ChIJUQsZmocYnlQRkesb_WBdpTI",
    edition: "EWA",
    notes: "(at HF Hospital, NE Corner of building)Single EX rack by fireplace",
    address: "5715 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.70983119999999,
    lng: -117.4060833
  },
  {
    route: "Central Spokane",
    placeId: "ChIJh-pSuEsZnlQR7ujQJphXnv4",
    edition: "EWA",
    notes: "Double EX rack inside",
    address: "5633 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7102515,
    lng: -117.4063559
  },
  {
    route: "Central Spokane",
    placeId: "ChIJPZzyvEwZnlQRmnWaRJbyqlA",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "6002 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7127609,
    lng: -117.4051043
  },
  {
    route: "Central Spokane",
    placeId: "ChIJoZ9PI00ZnlQR_ciucHcGvyI",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "102 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.714701,
    lng: -117.407702
  },
  {
    route: "Central Spokane",
    placeId: "ChIJy_oF37MenlQRvOceQQPIX9o",
    edition: "EWA",
    notes: " Inside EX Rack; ",
    address: "725 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.7153973,
    lng: -117.3984741
  },
  {
    route: "Central Spokane",
    placeId: "ChIJF2oDkbIenlQRG5DmxnvJtTM",
    edition: "EWA",
    notes: "",
    address: "6410 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7165786,
    lng: -117.4053582
  },
  {
    route: "Central Spokane",
    placeId: "ChIJL0Bd27IenlQR4CuK1-2dxAA",
    edition: "EWA",
    notes: "Inside EX wire rack",
    address: "315 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.7156081,
    lng: -117.4050981
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ3Vrj6CEZnlQRF5RcrU00CtE",
    edition: "EWA",
    notes: "Single EX rack ; ",
    address: "3201 N Division St Ste A, Spokane, WA 99207, USA",
    lat: 47.68785129999999,
    lng: -117.4116629
  },
  {
    route: "Central Spokane",
    placeId: "ChIJDylrhO8YnlQR5_Ixr4GefRg",
    edition: "EWA",
    notes: "",
    address: "1712 N Division St, Spokane, WA 99207, USA",
    lat: 47.6730497,
    lng: -117.410701
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ12Ihku8YnlQROBq0xvoixP8",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "1625 N Division St, Spokane, WA 99207, USA",
    lat: 47.67247039999999,
    lng: -117.4115115
  },
  {
    route: "Central Spokane",
    placeId: "ChIJeVF6le8YnlQRhNZAzwKpsns",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "1101 N Division St, Spokane, WA 99202, USA",
    lat: 47.66749869999999,
    lng: -117.4118193
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ28lDRPEYnlQR9_uolwbP9DA",
    edition: "EWA",
    notes: "",
    address: "301 W Boone Ave #2313, Spokane, WA 99201, USA",
    lat: 47.667572,
    lng: -117.416311
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ37N-Hu4YnlQRTxsRCtKmdQk",
    edition: "EWA",
    notes: "Need Rack? ",
    address: "1230 N Division St, Spokane, WA 99202, USA",
    lat: 47.669193,
    lng: -117.4108084
  },
  {
    route: "Central Spokane",
    placeId: "ChIJf8VdM8wZnlQRb19r2K_AJVU",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "322 W North River Dr, Spokane, WA 99201, USA",
    lat: 47.66529990000001,
    lng: -117.4146008
  },
  {
    route: "Colville Loop",
    placeId: "ChIJQecdvov9YVMRSd1dQnH5B24",
    edition: "EWA",
    notes: "Single EX outside",
    address: "23312 US-395, Colbert, WA 99005, USA",
    lat: 47.8692375,
    lng: -117.4217083
  },
  {
    route: "Colville Loop",
    placeId: "ChIJmW1VYYEHYlMR6-JMRL7L81E",
    edition: "EWA",
    notes: "Inside Single EX Rack",
    address: "3937 Gardenspot Rd, Loon Lake, WA 99148, USA",
    lat: 48.0605943,
    lng: -117.6202324
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ__-LFIEHYlMRTzG4wwROmb0",
    edition: "EWA",
    notes: "Inside Single EX Rack",
    address: "3938 WA-292, Loon Lake, WA 99148, USA",
    lat: 48.0600706,
    lng: -117.6218432
  },
  {
    route: "Colville Loop",
    placeId: "ChIJN9xnEIEHYlMRk06Ed2L0zNE",
    edition: "EWA",
    notes: "Outside Double EX",
    address: "3942 WA-292, Loon Lake, WA 99148, USA",
    lat: 48.0598842,
    lng: -117.6224713
  },
  {
    route: "Colville Loop",
    placeId: "ChIJN9xnEIEHYlMRk06Ed2L0zNE",
    edition: "IND",
    notes: "1 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "3942 WA-292, Loon Lake, WA 99148, USA",
    lat: 48.0598842,
    lng: -117.6224713
  },
  {
    route: "Colville Loop",
    placeId: "ChIJnxEo-OX5nVQRETvW0fOufEE",
    edition: "EWA",
    notes: "SHARED RACK INSIDE ",
    address: "203 W Shaffer Ave, Springdale, WA 99173, USA",
    lat: 48.0575661,
    lng: -117.7434139
  },
  {
    route: "Colville Loop",
    placeId: "ChIJWWkevxMKYlMRROEENAnzOOU",
    edition: "EWA",
    notes: "Leave on Bench if closed; Inside white community",
    address: "3071 3rd Ave, Valley, WA 99181, USA",
    lat: 48.1754006,
    lng: -117.7258784
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ3yQ34zULYlMRqXLbeY7gK-g",
    edition: "EWA",
    notes: "Community Rack Right, by Deli",
    address: "2509 US-395, Chewelah, WA 99109, USA",
    lat: 48.2415189,
    lng: -117.7144461
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ54b2ep50YlMR4D8z6cWh4ro",
    edition: "EWA",
    notes: "Outside Tall Angle Iron",
    address: "403 S Park St, Chewelah, WA 99109, USA",
    lat: 48.2725413,
    lng: -117.7152549
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ54b2ep50YlMR4D8z6cWh4ro",
    edition: "IND",
    notes: "1 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "403 S Park St, Chewelah, WA 99109, USA",
    lat: 48.2725413,
    lng: -117.7152549
  },
  {
    route: "Colville Loop",
    placeId: "ChIJG4zwhH9zYlMRMRAVB3n9IVM",
    edition: "EWA",
    notes: "Bag",
    address: "101 W Robert Ave, Chewelah, WA 99109, USA",
    lat: 48.2734338,
    lng: -117.7160533
  },
  {
    route: "Colville Loop",
    placeId: "ChIJHS2bZGJzYlMRbLgtEmU2zJQ",
    edition: "EWA",
    notes: "Bag",
    address: "205 E Main Ave, Chewelah, WA 99109, USA",
    lat: 48.27641180000001,
    lng: -117.714086
  },
  {
    route: "Colville Loop",
    placeId: "ChIJN9gANNRzYlMRi2iqZlrxxsc",
    edition: "EWA",
    notes: "",
    address: "309 E Main Ave, Chewelah, WA 99109, USA",
    lat: 48.276503,
    lng: -117.7127802
  },
  {
    route: "Colville Loop",
    placeId: "ChIJw5Uh-WJzYlMRTuWbQcZW848",
    edition: "EWA",
    notes: "Inander Rack, Opens at 10AM, BAG IF CLOSED",
    address: "311 E Clay Ave, Chewelah, WA 99109, USA",
    lat: 48.2775809,
    lng: -117.7130261
  },
  {
    route: "Colville Loop",
    placeId: "ChIJw5Uh-WJzYlMRTuWbQcZW848",
    edition: "IND",
    notes: "1 BUNDLE OF INLANDER ",
    address: "311 E Clay Ave, Chewelah, WA 99109, USA",
    lat: 48.2775809,
    lng: -117.7130261
  },
  {
    route: "Colville Loop",
    placeId: "ChIJt7gbTH1zYlMRSRiO_OBGDB8",
    edition: "EWA",
    notes: "4 pockets + Bottom Shelf Inlander Rack ",
    address: "10 W Colville Ave, Chewelah, WA 99109, USA",
    lat: 48.2797304,
    lng: -117.7160692
  },
  {
    route: "Colville Loop",
    placeId: "ChIJt7gbTH1zYlMRSRiO_OBGDB8",
    edition: "IND",
    notes: "3 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "10 W Colville Ave, Chewelah, WA 99109, USA",
    lat: 48.2797304,
    lng: -117.7160692
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ_ZLGH31zYlMRBuftumZJdQc",
    edition: "EWA",
    notes: "Inside EX Single",
    address: "516 N Park St, Chewelah, WA 99109, USA",
    lat: 48.2804556,
    lng: -117.7152167
  },
  {
    route: "Colville Loop",
    placeId: "ChIJQbHSEHxzYlMRngNqjOZOX2o",
    edition: "EWA",
    notes: "Inside Black Single ",
    address: "1409 N Park St, Chewelah, WA 99109, USA",
    lat: 48.2868353,
    lng: -117.7233097
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ7XJz94h2YlMR0bXb99yTy2U",
    edition: "EWA",
    notes: "Shelf above EPOCH",
    address: "1677 Blue Creek Rd W, Chewelah, WA 99109, USA",
    lat: 48.3183809,
    lng: -117.8218983
  },
  {
    route: "Colville Loop",
    placeId: "ChIJNSENoz13YlMR9bfp57mThYo",
    edition: "EWA",
    notes: "Outside Green Community Box",
    address: "1372 North St, Addy, WA 99101, USA",
    lat: 48.3589374,
    lng: -117.8356653
  },
  {
    route: "Colville Loop",
    placeId: "ChIJfQOAVK57YlMR4yJubXbDN4A",
    edition: "EWA",
    notes: "INSIDE COUNTER",
    address: "635 US-395, Colville, WA 99114, USA",
    lat: 48.45835049999999,
    lng: -117.8794909
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ72WeAQ18YlMRQcAMitWpCuI",
    edition: "EWA",
    notes: "Outside EX Double Rack",
    address: "545 US-395 B, Colville, WA 99114, USA",
    lat: 48.4688644,
    lng: -117.888051
  },
  {
    route: "Colville Loop",
    placeId: "ChIJcYzHgnB9YlMR7iE4YqLJE3g",
    edition: "EWA",
    notes: "Inside Shared rack",
    address: "1265 S Main St, Colville, WA 99114, USA",
    lat: 48.5321368,
    lng: -117.903637
  },
  {
    route: "Colville Loop",
    placeId: "ChIJma3Hn3t9YlMR4Nvn0WHySag",
    edition: "EWA",
    notes: "",
    address: "980 S Main St, Colville, WA 99114, USA",
    lat: 48.53562059999999,
    lng: -117.9064913
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ_YvqbXt9YlMRbOQjj4vdFv8",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "915 S Main St, Colville, WA 99114, USA",
    lat: 48.5356994,
    lng: -117.9050401
  },
  {
    route: "Colville Loop",
    placeId: "ChIJJTR-aHt9YlMR9lyhglOwhKw",
    edition: "EWA",
    notes: "Two outside racks - one on either side; Most papers on South door",
    address: "Colville, WA 99114, USA",
    lat: 48.5365504,
    lng: -117.9052709
  },
  {
    route: "Colville Loop",
    placeId: "ChIJS9Co0nx9YlMRrK_OEVThYx4",
    edition: "EWA",
    notes: "Inside second doors, to left on shelf ",
    address: "557 S Main St, Colville, WA 99114, USA",
    lat: 48.53924,
    lng: -117.9044122
  },
  {
    route: "Colville Loop",
    placeId: "ChIJPw1rJoaHYlMR436R97YBvx8",
    edition: "EWA",
    notes: "Inside Community Rack Center of store",
    address: "466 W 1st Ave, Colville, WA 99114, USA",
    lat: 48.5440984,
    lng: -117.9113519
  },
  {
    route: "Colville Loop",
    placeId: "ChIJDzECvo6HYlMRZYYUiL55O3s",
    edition: "EWA",
    notes: "Outside EX Double",
    address: "285 W 5th Ave, Colville, WA 99114, USA",
    lat: 48.54841589999999,
    lng: -117.9084551
  },
  {
    route: "Colville Loop",
    placeId: "ChIJK5l65Y6HYlMRvqUVw2WWE0A",
    edition: "EWA",
    notes: "Inside Community rack by Check Stand",
    address: "370 W 5th Ave, Colville, WA 99114, USA",
    lat: 48.54895519999999,
    lng: -117.9098457
  },
  {
    route: "Colville Loop",
    placeId: "ChIJxyy25I6HYlMRNpju8aRDPYM",
    edition: "EWA",
    notes: "USE inside White Sasquatch rack",
    address: "505 N Lincoln St, Colville, WA 99114, USA",
    lat: 48.548851,
    lng: -117.911013
  },
  {
    route: "Colville Loop",
    placeId: "ChIJvbfY04-HYlMRjPl4GAUoke0",
    edition: "EWA",
    notes: "Inside Rack",
    address: "710 N Hwy, Colville, WA 99114, USA",
    lat: 48.55124959999999,
    lng: -117.9138649
  },
  {
    route: "Colville Loop",
    placeId: "ChIJXbDBUImHYlMRwxjnPmbEtWY",
    edition: "EWA",
    notes: "",
    address: "391 N Main St, Colville, WA 99114, USA",
    lat: 48.54722979999999,
    lng: -117.9064062
  },
  {
    route: "Colville Loop",
    placeId: "ChIJXbDBUImHYlMRwxjnPmbEtWY",
    edition: "IND",
    notes: "",
    address: "391 N Main St, Colville, WA 99114, USA",
    lat: 48.54722979999999,
    lng: -117.9064062
  },
  {
    route: "Colville Loop",
    placeId: "ChIJqXXLS5eHYlMR5HuQB-QPHAo",
    edition: "EWA",
    notes: "20 bundles at 40 dependent on page count Inlanders on bottom rack Leave only 1 pocket for N.Colombia",
    address: "1250 N Hwy, Colville, WA 99114, USA",
    lat: 48.5562115,
    lng: -117.9202721
  },
  {
    route: "Colville Loop",
    placeId: "ChIJqXXLS5eHYlMR5HuQB-QPHAo",
    edition: "IND",
    notes: "",
    address: "1250 N Hwy, Colville, WA 99114, USA",
    lat: 48.5562115,
    lng: -117.9202721
  },
  {
    route: "Colville Loop",
    placeId: "ChIJyw0BSQ2EYlMRhTm7Ht3H2uE",
    edition: "EWA",
    notes: "Bottom Shelf in from door; Inside Rack",
    address: "103 E 3rd Ave, Kettle Falls, WA 99141, USA",
    lat: 48.6110559,
    lng: -118.0562731
  },
  {
    route: "Colville Loop",
    placeId: "ChIJKZAfTwyEYlMRDlV8FArG4Qs",
    edition: "EWA",
    notes: "Drop in book drop box",
    address: "615 Meyers St, Kettle Falls, WA 99141, USA",
    lat: 48.6074183,
    lng: -118.0556137
  },
  {
    route: "Colville Loop",
    placeId: "ChIJh2sQK3OEYlMR4Gyz9BR4JNU",
    edition: "EWA",
    notes: "Leave in Laundry - Other end of building",
    address: "260 W 3rd Ave, Kettle Falls, WA 99141, USA",
    lat: 48.61154490000001,
    lng: -118.0586475
  },
  {
    route: "Colville Loop",
    placeId: "ChIJo4SnTl-FnVQRUjT3wHwF6zU",
    edition: "EWA",
    notes: "Leave inside",
    address: "3379 WA-25, Gifford, WA 99131, USA",
    lat: 48.3065807,
    lng: -118.1467698
  },
  {
    route: "Colville Loop",
    placeId: "ChIJpYVletPqnVQR2Jualchhifc",
    edition: "EWA",
    notes: "YELLOW RACK",
    address: "4983 WA-25, Hunters, WA 99137, USA",
    lat: 48.1175848,
    lng: -118.2025598
  },
  {
    route: "Colville Loop",
    placeId: "ChIJgXvrS3zqnVQRnEIKwQ_xARQ",
    edition: "EWA",
    notes: "Outside rack by bench",
    address: "5369 WA-25, Fruitland, WA 99129, USA",
    lat: 48.07123319999999,
    lng: -118.1982156
  },
  {
    route: "Colville Loop",
    placeId: "ChIJe8hUQ57EnVQRPbWtS88lbwM",
    edition: "EWA",
    notes: "Outside single EX",
    address: "6394 West End Rd, Fruitland, WA 99129, USA",
    lat: 47.963041,
    lng: -118.2340165
  },
  {
    route: "Colville Loop",
    placeId: "ChIJr7HJOZLgnVQRGXwjZ50mDS0",
    edition: "EWA",
    notes: "Store Rack",
    address: "6206 Ford-Wellpinit Rd, Wellpinit, WA 99040, USA",
    lat: 47.8884015,
    lng: -117.9892477
  },
  {
    route: "Colville Loop",
    placeId: "ChIJi2Gz8g3hnVQR1tCcJWcgxwo",
    edition: "EWA",
    notes: "INSIDE single EX",
    address: "6144 Ford-Wellpinit Rd, Wellpinit, WA 99040, USA",
    lat: 47.88998789999999,
    lng: -117.9802366
  },
  {
    route: "Colville Loop",
    placeId: "ChIJD-2O0bPjnVQREX2l-WUbsBM",
    edition: "EWA",
    notes: "INSIDE double EX",
    address: "Washington 99013, USA",
    lat: 47.91583509999999,
    lng: -117.8497404
  },
  {
    route: "Colville Loop",
    placeId: "ChIJyfETOavjnVQRBgH_pASEeRs",
    edition: "EWA",
    notes: "Only wants 10 papers",
    address: "5243 Ford-Wellpinit Rd, Ford, WA 99013, USA",
    lat: 47.9085328,
    lng: -117.8088898
  },
  {
    route: "Colville Loop",
    placeId: "ChIJpb0KuPkEnlQRiZVZFnj-Z6M",
    edition: "EWA",
    notes: "Inlander Community Rack; 3 Pockets ",
    address: "5912 WA-291, Nine Mile Falls, WA 99026, USA",
    lat: 47.8126747,
    lng: -117.5621314
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ77N6vPkEnlQROS2MrIPTJwA",
    edition: "EWA",
    notes: "Inside Single Ex; ",
    address: "5919 WA-291, Nine Mile Falls, WA 99026, USA",
    lat: 47.810738,
    lng: -117.561657
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ_w1fCNEanlQR7X0YzoxLqsM",
    edition: "EWA",
    notes: "Green Community Box Top Right spot",
    address: "12602 N Nine Mile Rd, Nine Mile Falls, WA 99026, USA",
    lat: 47.7717494,
    lng: -117.5431856
  },
  {
    route: "Colville Loop",
    placeId: "ChIJgycTCNEanlQRhh2F9pMnbnk",
    edition: "EWA",
    notes: "Outside EX Single; ",
    address: "12516 N Nine Mile Rd, Nine Mile Falls, WA 99026, USA",
    lat: 47.77116909999999,
    lng: -117.5435789
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJM0RElicfnlQR7vlQMSJjQGE",
    edition: "EWA",
    notes: "Inlander Store Rack Rack - 2 pockets; North Door (MAX 120 for 30)",
    address: "3919 N Market St, Spokane, WA 99207, USA",
    lat: 47.6941507,
    lng: -117.3673333
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJq6raq94enlQR6CKdnv4HAL0",
    edition: "EWA",
    notes: "Black Spokesman Rack inside door",
    address: "3021 E Wellesley Ave, Spokane, WA 99217, USA",
    lat: 47.700883,
    lng: -117.3653308
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJbc-jMN0enlQRqptZMsDr9sI",
    edition: "EWA",
    notes: "Inside top pocket of rack",
    address: "5217 N Market St, Spokane, WA 99217, USA",
    lat: 47.70578669999999,
    lng: -117.364936
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJZ3rf6ukenlQRKAAnnkdF7eg",
    edition: "EWA",
    notes: "Single EX rack ",
    address: "5803 N Market St Unit B, Spokane, WA 99208, USA",
    lat: 47.7105965,
    lng: -117.3650854
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJO4LlDYQenlQRQq05g33ndM0",
    edition: "EWA",
    notes: "; RED EX (old Auto Clipper) Box",
    address: "8213 N Market St, Spokane, WA 99217, USA",
    lat: 47.7323372,
    lng: -117.3651301
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJg_ZE0r8dnlQRn_tvUEP7iV8",
    edition: "EWA",
    notes: "Shared rack, top shelf inside",
    address: "11810 N Market St, Mead, WA 99021, USA",
    lat: 47.76468559999999,
    lng: -117.3549287
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJWxAiipYdnlQRmGHy5WBw9aY",
    edition: "EWA",
    notes: "Leave by entrance door, bag if possible",
    address: "12218 N Market St, Mead, WA 99021, USA",
    lat: 47.7688268,
    lng: -117.3540591
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ2XSZzHgdnlQRQhIS_6Yp7QA",
    edition: "EWA",
    notes: "Inlander Community Rack; 3 Pockets ; ",
    address: "14202 N Market St, Mead, WA 99021, USA",
    lat: 47.78640859999999,
    lng: -117.3506782
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJeyuYtH0dnlQRoSMncn2vRQo",
    edition: "EWA",
    notes: "Yellow Community Rack, Right of dooe outside (MAX 60)",
    address: "14710 N Newport Hwy, Mead, WA 99021, USA",
    lat: 47.7912167,
    lng: -117.3515078
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJdzDes4LiYVMRh_Cw4U05MdI",
    edition: "EWA",
    notes: "OUTSIDE RED BOX",
    address: "15228 N Newport Hwy, Mead, WA 99021, USA",
    lat: 47.79496770000001,
    lng: -117.3494429
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJSXfu2sriYVMRDmoqtDOJUJc",
    edition: "EWA",
    notes: "Bag - Opens at 11am",
    address: "18711 N Yale Rd, Colbert, WA 99005, USA",
    lat: 47.8275489,
    lng: -117.3465358
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJwZB1Tqj-YVMRCUQ5c8YwMpU",
    edition: "EWA",
    notes: "EX Single Wire Rack w/ WCD; ",
    address: "28312 N Newport Hwy, Chattaroy, WA 99003, USA",
    lat: 47.91469540000001,
    lng: -117.3497987
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJT9JLlu74YVMRnx_7wbrcP3A",
    edition: "EWA",
    notes: "Inside store Rack (MAX 120 for bundles of 30)",
    address: "Washington 99003, USA",
    lat: 47.97093779999999,
    lng: -117.3487555
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ-4uYp5MCYlMRpSMN83Pzdxg",
    edition: "EWA",
    notes: "Outside Double Ex Wire Rack",
    address: "39824 N Newport Hwy, Elk, WA 99009, USA",
    lat: 48.0174595,
    lng: -117.3489622
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJTzgtKHP_YVMR8b0w0NAi5h4",
    edition: "EWA",
    notes: "EX Single Wire Rack Inside",
    address: "2915 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9549056,
    lng: -117.4344417
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJqdtthZ7_YVMRBZfE6PhPZXs",
    edition: "EWA",
    notes: "@ Roundabout Store Rack",
    address: "1501 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9549585,
    lng: -117.45316
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJIRIEGpL_YVMRI2ZJIZakJII",
    edition: "EWA",
    notes: "Inside Community Shelf",
    address: "115 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9544431,
    lng: -117.4744981
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJvZoZcJL_YVMRSp7SnVSqxlA",
    edition: "EWA",
    notes: "; On Pillar By Window",
    address: "5 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9546718,
    lng: -117.4765116
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJa8JfnI7_YVMR4B9tXR4hGkA",
    edition: "EWA",
    notes: "Angle Iron Exchange Rack",
    address: "109 W 4th St, Deer Park, WA 99006, USA",
    lat: 47.9580491,
    lng: -117.4791119
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJHXB2EY3_YVMRoXFjjOAkn6A",
    edition: "EWA",
    notes: "Opens 11 AM Bottom of Huckleberry rack",
    address: "122 W 1st St, Deer Park, WA 99006, USA",
    lat: 47.9556281,
    lng: -117.4804141
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJbWdMjI3_YVMRnOHCUZl29k8",
    edition: "EWA",
    notes: "Spread across Tables, counters, rack",
    address: "202 W 1st St, Deer Park, WA 99006, USA",
    lat: 47.9561456,
    lng: -117.4809408
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJq3o6exb_YVMRVKRx7vGu1AM",
    edition: "EWA",
    notes: "",
    address: "121 W Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9539204,
    lng: -117.480423
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ2UPJ8ZL_YVMRykdWEOhY4kk",
    edition: "EWA",
    notes: "Desk",
    address: "110 S Main St, Deer Park, WA 99006, USA",
    lat: 47.952808,
    lng: -117.477225
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJbSOxZJL_YVMRUYDirSp5rvs",
    edition: "EWA",
    notes: "Store shelves",
    address: "220 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9515445,
    lng: -117.4773936
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ_dp_SZP_YVMRa6rF4wf_4hA",
    edition: "EWA",
    notes: "Coffee Table",
    address: "404 S Main St, Deer Park, WA 99006, USA",
    lat: 47.95040160000001,
    lng: -117.4775623
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJz14fHvT_YVMRwSUGB8AxCSY",
    edition: "EWA",
    notes: "",
    address: "517 S Fir Ave, Deer Park, WA 99006, USA",
    lat: 47.94867559999999,
    lng: -117.4819712
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJr0N8mOv_YVMRJ4dzCNqvvkk",
    edition: "EWA",
    notes: " EX Single Wire Rack Opens 11AM (side door if not open)",
    address: "619 S Fir Ave, Deer Park, WA 99006, USA",
    lat: 47.9471859,
    lng: -117.479981
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJDdwoejP_YVMRWVW1zczpiMU",
    edition: "EWA",
    notes: "Bottom of Huckleberry rack",
    address: "141 W H St, Deer Park, WA 99006, USA",
    lat: 47.94675600000001,
    lng: -117.480117
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJmTiRVer_YVMRdLc58oGiMJk",
    edition: "EWA",
    notes: "Inlander Community Rack; 4 Pockets        ",
    address: "810 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9465621,
    lng: -117.4781558
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ0QRdYur_YVMRBuSAvgjt-78",
    edition: "EWA",
    notes: "EX Single Angle Iron Rack; Inside North Door",
    address: "900 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9441409,
    lng: -117.4777897
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJD4H9XFH_YVMRE0s376omEOI",
    edition: "EWA",
    notes: "2 Racks inside by door to Left wooden",
    address: "1100 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9435996,
    lng: -117.4776179
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJWYzbier_YVMRgay1MAYFbgs",
    edition: "EWA",
    notes: "Inside EX Single Wire Rack (MAX 75 bundles of 30)",
    address: "1005 S Main St, Deer Park, WA 99006, USA",
    lat: 47.945,
    lng: -117.4763889
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJjYHA6ur_YVMR6HvLB_oVBgc",
    edition: "EWA",
    notes: "Single wire EX rack",
    address: "811 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9456497,
    lng: -117.4758541
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJIUoY-ev5YVMRtQdwjwJcl7o",
    edition: "EWA",
    notes: "opens 11, leave bag; Entry shelf",
    address: "34608 N Newport Hwy, Chattaroy, WA 99003, USA",
    lat: 47.96989139999999,
    lng: -117.349053
  },
];
