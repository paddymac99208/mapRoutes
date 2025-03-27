const locations = [
  {
    route: "Central Spokane",
    placeId: "ChIJuWUQL-4YnlQRecNUdVsfVSo",
    edition: "EWA",
    notes: "Inside EX Rack; Opens at 11am",
    address: "1320 N Division St, Spokane, WA 99202, USA",
    lat: 47.6703683,
    lng: -117.4107588,
    locationName: "Zip's Drive in"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJP29QyeUYnlQR7NclQlFHvSg",
    edition: "EWA",
    notes: "Inside Auto Clipper Rack",
    address: "1918 N Division St #2252, Spokane, WA 99207, USA",
    lat: 47.6758403,
    lng: -117.4108012,
    locationName: "Senor Froggy Mexican Foods"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJOVp3KOQYnlQRZt78rofalF0",
    edition: "EWA",
    notes: "Shared rack top shelf; 6pm close",
    address: "2020 N Division St, Spokane, WA 99207, USA",
    lat: 47.6768492,
    lng: -117.4102867,
    locationName: "The Salvation Army Family Store & Donation Center"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJaxHCMOEYnlQRq0Lk3Bl0HuI",
    edition: "EWA",
    notes: "Shared rack inside",
    address: "2424 N Division St, Spokane, WA 99207, USA",
    lat: 47.680107,
    lng: -117.410356,
    locationName: "The General Store & Ace Hardware"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJffVkJN4YnlQRueeV7BzxHxo",
    edition: "EWA",
    notes: "Inlander store rack - 2 pockets, west door. ",
    address: "210 E North Foothills Dr, Spokane, WA 99207, USA",
    lat: 47.6815931,
    lng: -117.4055263,
    locationName: "Yoke's Fresh Market - Foothills"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJBfQ0CyMZnlQRCnVtXnLZ4f8",
    edition: "EWA",
    notes: "Inlander Rack; Opens at 12pm",
    address: "3714 N Division St, Spokane, WA 99207, USA",
    lat: 47.6919587,
    lng: -117.4102374,
    locationName: "Cathay Inn"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJpWcTcCMZnlQRVmhLkeaxSWM",
    edition: "EWA",
    notes: "Inside Store Rack ",
    address: "12 E Empire Ave, Spokane, WA 99207, USA",
    lat: 47.6926291,
    lng: -117.410415,
    locationName: "Walgreens"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJpetyQTsZnlQR-ODvgpN1x5Y",
    edition: "EWA",
    notes: "Community rack - claim top shelf",
    address: "4120 N Division St, Spokane, WA 99207, USA",
    lat: 47.6959263,
    lng: -117.4107787,
    locationName: "Peking North Chinese Restaurant"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJc8NVBzsZnlQR2KJkBZQQdzE",
    edition: "EWA",
    notes: "Single EX rack inside",
    address: "4320 N Division St, Spokane, WA 99207, USA",
    lat: 47.6974584,
    lng: -117.4107841,
    locationName: "Burger King"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJJeDyJzQZnlQRa91quEi_bqc",
    edition: "EWA",
    notes: "",
    address: "5023 N Addison St, Spokane, WA 99207, USA",
    lat: 47.7038079,
    lng: -117.4034464,
    locationName: "Kayla Ava Mini Mart"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJZwb96TkZnlQRrkOTLBWjZlQ",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "4750 N Division St, Spokane, WA 99207, USA",
    lat: 47.7024811,
    lng: -117.4101016,
    locationName: "Mustard Seed"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJPa0txDcZnlQRpMu5PY1AT1w",
    edition: "EWA",
    notes: "Table in entryway",
    address: "27 E Queen Ave, Spokane, WA 99207, USA",
    lat: 47.7044504,
    lng: -117.4099229,
    locationName: "China Dragon Restaurant"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJTTklM-CBVIcR7sFsTCIsoYc",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "5102 N Division St, Spokane, WA 99207, USA",
    lat: 47.704597,
    lng: -117.4105505,
    locationName: "TacoTime"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJqSnPJ0gZnlQRFgi53PzUYCA",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "5406 N Division St, Spokane, WA 99207, USA",
    lat: 47.7072631,
    lng: -117.4104353,
    locationName: "Thai Bamboo Restaurant"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJl_Rar0kZnlQRIXfWd2Euf0I",
    edition: "EWA",
    notes: "Inside Community Shelf",
    address: "5422 N Division St, Spokane, WA 99207, USA",
    lat: 47.707585,
    lng: -117.4107802,
    locationName: "Phillycious"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJXdkuFkoZnlQR5TXI5S7znhY",
    edition: "EWA",
    notes: "",
    address: "220 E Rowan Ave, Spokane, WA 99207, USA",
    lat: 47.7077272,
    lng: -117.406274,
    locationName: "Franklin Park Medical Center"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJeYSyuUsZnlQRNVwTYeHjHII",
    edition: "EWA",
    notes: "Single EX rack inside main entrance",
    address: "5633 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7114573,
    lng: -117.4071068,
    locationName: "Providence Holy Family Hospital"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJUQsZmocYnlQRkesb_WBdpTI",
    edition: "EWA",
    notes: "(at HF Hospital, NE Corner of building)Single EX rack by fireplace",
    address: "5715 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7098312,
    lng: -117.4060833,
    locationName: "Inland Imaging Interventional Radiology Consultants"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJh-pSuEsZnlQR7ujQJphXnv4",
    edition: "EWA",
    notes: "Double EX rack inside",
    address: "5633 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7102515,
    lng: -117.4063559,
    locationName: "Providence Holy Family Hospital Emergency Room"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJPZzyvEwZnlQRmnWaRJbyqlA",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "6002 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7127609,
    lng: -117.4051043,
    locationName: "Kaiser Permanente Lidgerwood Medical Center"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJoZ9PI00ZnlQR_ciucHcGvyI",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "102 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.714701,
    lng: -117.407702,
    locationName: "De Leon Foods"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJy_oF37MenlQRvOceQQPIX9o",
    edition: "EWA",
    notes: " Inside EX Rack; ",
    address: "725 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.7153973,
    lng: -117.3984741,
    locationName: "Zip's Drive In"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJF2oDkbIenlQRG5DmxnvJtTM",
    edition: "EWA",
    notes: "",
    address: "6410 N Lidgerwood St, Spokane, WA 99208, USA",
    lat: 47.7165786,
    lng: -117.4053582,
    locationName: "Fraternal Order of Eagles"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJL0Bd27IenlQR4CuK1-2dxAA",
    edition: "EWA",
    notes: "Inside EX wire rack",
    address: "315 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.7156081,
    lng: -117.4050981,
    locationName: "Double Eagle Pawn"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ3Vrj6CEZnlQRF5RcrU00CtE",
    edition: "EWA",
    notes: "Single EX rack ; ",
    address: "3201 N Division St Ste A, Spokane, WA 99207, USA",
    lat: 47.6878513,
    lng: -117.4116629,
    locationName: "Coins Plus,Inc"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJDylrhO8YnlQR5_Ixr4GefRg",
    edition: "EWA",
    notes: "",
    address: "1712 N Division St, Spokane, WA 99207, USA",
    lat: 47.6730497,
    lng: -117.410701,
    locationName: "Chevron"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ12Ihku8YnlQROBq0xvoixP8",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "1625 N Division St, Spokane, WA 99207, USA",
    lat: 47.6724704,
    lng: -117.4115115,
    locationName: "D. Lish's Hamburgers"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJeVF6le8YnlQRhNZAzwKpsns",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "1101 N Division St, Spokane, WA 99202, USA",
    lat: 47.6674987,
    lng: -117.4118193,
    locationName: "Bulldog Liquor & Wine"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ28lDRPEYnlQR9_uolwbP9DA",
    edition: "EWA",
    notes: "",
    address: "301 W Boone Ave #2313, Spokane, WA 99201, USA",
    lat: 47.667572,
    lng: -117.416311,
    locationName: "UGM Thrift Store - Downtown"
  },
  {
    route: "Central Spokane",
    placeId: "ChIJ37N-Hu4YnlQRTxsRCtKmdQk",
    edition: "EWA",
    notes: "Need Rack? ",
    address: "1230 N Division St, Spokane, WA 99202, USA",
    lat: 47.669193,
    lng: -117.4108084,
    locationName: "Carl’s Jr."
  },
  {
    route: "Central Spokane",
    placeId: "ChIJf8VdM8wZnlQRb19r2K_AJVU",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "322 W North River Dr, Spokane, WA 99201, USA",
    lat: 47.6652999,
    lng: -117.4146008,
    locationName: "Kaiser Permanente Riverfront Medical Center"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJQecdvov9YVMRSd1dQnH5B24",
    edition: "EWA",
    notes: "Single EX outside",
    address: "23312 US-395, Colbert, WA 99005, USA",
    lat: 47.8692375,
    lng: -117.4217083,
    locationName: "Exxon"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJmW1VYYEHYlMR6-JMRL7L81E",
    edition: "EWA",
    notes: "Inside Single EX Rack",
    address: "3937 Gardenspot Rd, Loon Lake, WA 99148, USA",
    lat: 48.0605943,
    lng: -117.6202324,
    locationName: "Loon Lake Grocery and Gas"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ__-LFIEHYlMRTzG4wwROmb0",
    edition: "EWA",
    notes: "Inside Single EX Rack",
    address: "3938 WA-292, Loon Lake, WA 99148, USA",
    lat: 48.0600706,
    lng: -117.6218432,
    locationName: "Jmt"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJN9xnEIEHYlMRk06Ed2L0zNE",
    edition: "EWA, IND",
    notes: "Outside Double EX; 1 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "3942 WA-292, Loon Lake, WA 99148, USA",
    lat: 48.0598842,
    lng: -117.6224713,
    locationName: "All Season's Grocery & Hardware"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJnxEo-OX5nVQRETvW0fOufEE",
    edition: "EWA",
    notes: "SHARED RACK INSIDE ",
    address: "203 W Shaffer Ave, Springdale, WA 99173, USA",
    lat: 48.0575661,
    lng: -117.7434139,
    locationName: "Springdale Grocery & Hardware"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJWWkevxMKYlMRROEENAnzOOU",
    edition: "EWA",
    notes: "Leave on Bench if closed; Inside white community",
    address: "3071 3rd Ave, Valley, WA 99181, USA",
    lat: 48.1754006,
    lng: -117.7258784,
    locationName: "Valley Market"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ3yQ34zULYlMRqXLbeY7gK-g",
    edition: "EWA",
    notes: "Community Rack Right, by Deli",
    address: "2509 US-395, Chewelah, WA 99109, USA",
    lat: 48.2415189,
    lng: -117.7144461,
    locationName: "SpoKo Fuel"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ54b2ep50YlMR4D8z6cWh4ro",
    edition: "EWA, IND",
    notes: "Outside Tall Angle Iron; 1 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "403 S Park St, Chewelah, WA 99109, USA",
    lat: 48.2725413,
    lng: -117.7152549,
    locationName: "Hico"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJG4zwhH9zYlMRMRAVB3n9IVM",
    edition: "EWA",
    notes: "Bag",
    address: "101 W Robert Ave, Chewelah, WA 99109, USA",
    lat: 48.2734338,
    lng: -117.7160533,
    locationName: "Hartill’s Mountain Saw & Tractor"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJHS2bZGJzYlMRbLgtEmU2zJQ",
    edition: "EWA",
    notes: "Bag",
    address: "205 E Main Ave, Chewelah, WA 99109, USA",
    lat: 48.2764118,
    lng: -117.714086,
    locationName: "Sportsmans Bar & Grill"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJN9gANNRzYlMRi2iqZlrxxsc",
    edition: "EWA",
    notes: "",
    address: "309 E Main Ave, Chewelah, WA 99109, USA",
    lat: 48.276503,
    lng: -117.7127802,
    locationName: "The Yale Press"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJw5Uh-WJzYlMRTuWbQcZW848",
    edition: "EWA, IND",
    notes: "Inander Rack, Opens at 10AM, BAG IF CLOSED; 1 BUNDLE OF INLANDER",
    address: "311 E Clay Ave, Chewelah, WA 99109, USA",
    lat: 48.2775809,
    lng: -117.7130261,
    locationName: "Chewelah Library"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJt7gbTH1zYlMRSRiO_OBGDB8",
    edition: "EWA, IND",
    notes: "4 pockets + Bottom Shelf Inlander Rack ; 3 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "10 W Colville Ave, Chewelah, WA 99109, USA",
    lat: 48.2797304,
    lng: -117.7160692,
    locationName: "Safeway"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ_ZLGH31zYlMRBuftumZJdQc",
    edition: "EWA",
    notes: "Inside EX Single",
    address: "516 N Park St, Chewelah, WA 99109, USA",
    lat: 48.2804556,
    lng: -117.7152167,
    locationName: "Zip's Drive In"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJQbHSEHxzYlMRngNqjOZOX2o",
    edition: "EWA",
    notes: "Inside Black Single ",
    address: "1409 N Park St, Chewelah, WA 99109, USA",
    lat: 48.2868353,
    lng: -117.7233097,
    locationName: "JMT Express Mart"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ7XJz94h2YlMR0bXb99yTy2U",
    edition: "EWA",
    notes: "Shelf above EPOCH",
    address: "1677 Blue Creek Rd W, Chewelah, WA 99109, USA",
    lat: 48.3183809,
    lng: -117.8218983,
    locationName: "Bluecreek Mercantile"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJNSENoz13YlMR9bfp57mThYo",
    edition: "EWA",
    notes: "Outside Green Community Box",
    address: "1372 North St, Addy, WA 99101, USA",
    lat: 48.3589374,
    lng: -117.8356653,
    locationName: "76"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJfQOAVK57YlMR4yJubXbDN4A",
    edition: "EWA",
    notes: "INSIDE COUNTER",
    address: "635 US-395, Colville, WA 99114, USA",
    lat: 48.4583505,
    lng: -117.8794909,
    locationName: "Adams Tractor Colville"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ72WeAQ18YlMRQcAMitWpCuI",
    edition: "EWA",
    notes: "Outside EX Double Rack",
    address: "545 US-395 B, Colville, WA 99114, USA",
    lat: 48.4688644,
    lng: -117.888051,
    locationName: "Arden 1 Stop"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJcYzHgnB9YlMR7iE4YqLJE3g",
    edition: "EWA",
    notes: "Inside Shared rack",
    address: "1265 S Main St, Colville, WA 99114, USA",
    lat: 48.5321368,
    lng: -117.903637,
    locationName: "Zip's Drive-in"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJma3Hn3t9YlMR4Nvn0WHySag",
    edition: "EWA",
    notes: "",
    address: "980 S Main St, Colville, WA 99114, USA",
    lat: 48.5356206,
    lng: -117.9064913,
    locationName: "Grocery Outlet"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ_YvqbXt9YlMRbOQjj4vdFv8",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "915 S Main St, Colville, WA 99114, USA",
    lat: 48.5356994,
    lng: -117.9050401,
    locationName: "Benny's Colville Inn"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJJTR-aHt9YlMR9lyhglOwhKw",
    edition: "EWA",
    notes: "Two outside racks - one on either side; Most papers on South door",
    address: "Colville, WA 99114, USA",
    lat: 48.5365504,
    lng: -117.9052709,
    locationName: "Whitty's Mini Mart"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJS9Co0nx9YlMRrK_OEVThYx4",
    edition: "EWA",
    notes: "Inside second doors, to left on shelf ",
    address: "557 S Main St, Colville, WA 99114, USA",
    lat: 48.53924,
    lng: -117.9044122,
    locationName: "Clarks All Sports"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJPw1rJoaHYlMR436R97YBvx8",
    edition: "EWA",
    notes: "Inside Community Rack Center of store",
    address: "466 W 1st Ave, Colville, WA 99114, USA",
    lat: 48.5440984,
    lng: -117.9113519,
    locationName: "Country Store - Colville"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJDzECvo6HYlMRZYYUiL55O3s",
    edition: "EWA",
    notes: "Outside EX Double",
    address: "285 W 5th Ave, Colville, WA 99114, USA",
    lat: 48.5484159,
    lng: -117.9084551,
    locationName: "Conoco"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJK5l65Y6HYlMRvqUVw2WWE0A",
    edition: "EWA",
    notes: "Inside Community rack by Check Stand",
    address: "370 W 5th Ave, Colville, WA 99114, USA",
    lat: 48.5489552,
    lng: -117.9098457,
    locationName: "Chevron"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJxyy25I6HYlMRNpju8aRDPYM",
    edition: "EWA",
    notes: "USE inside White Sasquatch rack",
    address: "505 N Lincoln St, Colville, WA 99114, USA",
    lat: 48.548851,
    lng: -117.911013,
    locationName: "Ronnie D's Drive In"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJvbfY04-HYlMRjPl4GAUoke0",
    edition: "EWA",
    notes: "Inside Rack",
    address: "710 N Hwy, Colville, WA 99114, USA",
    lat: 48.5512496,
    lng: -117.9138649,
    locationName: "Country Value Auto"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJXbDBUImHYlMRwxjnPmbEtWY",
    edition: "EWA, IND",
    notes: "",
    address: "391 N Main St, Colville, WA 99114, USA",
    lat: 48.5472298,
    lng: -117.9064062,
    locationName: "Safeway"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJqXXLS5eHYlMR5HuQB-QPHAo",
    edition: "EWA, IND",
    notes: "20 bundles at 40 dependent on page count Inlanders on bottom rack Leave only 1 pocket for N.Colombia",
    address: "1250 N Hwy, Colville, WA 99114, USA",
    lat: 48.5562115,
    lng: -117.9202721,
    locationName: "Super 1 Foods"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJyw0BSQ2EYlMRhTm7Ht3H2uE",
    edition: "EWA",
    notes: "Bottom Shelf in from door; Inside Rack",
    address: "103 E 3rd Ave, Kettle Falls, WA 99141, USA",
    lat: 48.6110559,
    lng: -118.0562731,
    locationName: "Whitty's Mini Mart kettle falls"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJKZAfTwyEYlMRDlV8FArG4Qs",
    edition: "EWA",
    notes: "Drop in book drop box",
    address: "615 Meyers St, Kettle Falls, WA 99141, USA",
    lat: 48.6074183,
    lng: -118.0556137,
    locationName: "Kettle Falls Library"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJh2sQK3OEYlMR4Gyz9BR4JNU",
    edition: "EWA",
    notes: "Leave in Laundry - Other end of building",
    address: "260 W 3rd Ave, Kettle Falls, WA 99141, USA",
    lat: 48.6115449,
    lng: -118.0586475,
    locationName: "Kettle Falls Harvest Foods"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJo4SnTl-FnVQRUjT3wHwF6zU",
    edition: "EWA",
    notes: "Leave inside",
    address: "3379 WA-25, Gifford, WA 99131, USA",
    lat: 48.3065807,
    lng: -118.1467698,
    locationName: "United States Postal Service"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJpYVletPqnVQR2Jualchhifc",
    edition: "EWA",
    notes: "YELLOW RACK",
    address: "4983 WA-25, Hunters, WA 99137, USA",
    lat: 48.1175848,
    lng: -118.2025598,
    locationName: "Hunters Market & Liquor Store"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJgXvrS3zqnVQRnEIKwQ_xARQ",
    edition: "EWA",
    notes: "Outside rack by bench",
    address: "5369 WA-25, Fruitland, WA 99129, USA",
    lat: 48.0712332,
    lng: -118.1982156,
    locationName: "Fruitland Service LLC"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJe8hUQ57EnVQRPbWtS88lbwM",
    edition: "EWA",
    notes: "Outside single EX",
    address: "6394 West End Rd, Fruitland, WA 99129, USA",
    lat: 47.963041,
    lng: -118.2340165,
    locationName: "M&M's Corner"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJr7HJOZLgnVQRGXwjZ50mDS0",
    edition: "EWA",
    notes: "Store Rack",
    address: "6206 Ford-Wellpinit Rd, Wellpinit, WA 99040, USA",
    lat: 47.8884015,
    lng: -117.9892477,
    locationName: "Wellpinit Trading Post"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJi2Gz8g3hnVQR1tCcJWcgxwo",
    edition: "EWA",
    notes: "INSIDE single EX",
    address: "6144 Ford-Wellpinit Rd, Wellpinit, WA 99040, USA",
    lat: 47.8899879,
    lng: -117.9802366,
    locationName: "Spoko Fuel - Wellpinit"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJD-2O0bPjnVQREX2l-WUbsBM",
    edition: "EWA",
    notes: "INSIDE double EX",
    address: "Washington 99013, USA",
    lat: 47.9158351,
    lng: -117.8497404,
    locationName: "Kurt's Corner"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJyfETOavjnVQRBgH_pASEeRs",
    edition: "EWA",
    notes: "Only wants 10 papers",
    address: "5243 Ford-Wellpinit Rd, Ford, WA 99013, USA",
    lat: 47.9085328,
    lng: -117.8088898,
    locationName: "Number One Store"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJpb0KuPkEnlQRiZVZFnj-Z6M",
    edition: "EWA",
    notes: "Inlander Community Rack; 3 Pockets ",
    address: "5912 WA-291, Nine Mile Falls, WA 99026, USA",
    lat: 47.8126747,
    lng: -117.5621314,
    locationName: "Rosauers Supermarkets"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ77N6vPkEnlQROS2MrIPTJwA",
    edition: "EWA",
    notes: "Inside Single Ex; ",
    address: "5919 WA-291, Nine Mile Falls, WA 99026, USA",
    lat: 47.810738,
    lng: -117.561657,
    locationName: "Zip's Drive In"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJ_w1fCNEanlQR7X0YzoxLqsM",
    edition: "EWA",
    notes: "Green Community Box Top Right spot",
    address: "12602 N Nine Mile Rd, Nine Mile Falls, WA 99026, USA",
    lat: 47.7717494,
    lng: -117.5431856,
    locationName: "Nine Mile Store"
  },
  {
    route: "Colville Loop",
    placeId: "ChIJgycTCNEanlQRhh2F9pMnbnk",
    edition: "EWA",
    notes: "Outside EX Single; ",
    address: "12516 N Nine Mile Rd, Nine Mile Falls, WA 99026, USA",
    lat: 47.7711691,
    lng: -117.5435789,
    locationName: "Nine Mile Feed & Hardware"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJM0RElicfnlQR7vlQMSJjQGE",
    edition: "EWA",
    notes: "Inlander Store Rack Rack - 2 pockets; North Door (MAX 120 for 30)",
    address: "3919 N Market St, Spokane, WA 99207, USA",
    lat: 47.6941507,
    lng: -117.3673333,
    locationName: "Safeway"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJq6raq94enlQR6CKdnv4HAL0",
    edition: "EWA",
    notes: "Black Spokesman Rack inside door",
    address: "3021 E Wellesley Ave, Spokane, WA 99217, USA",
    lat: 47.700883,
    lng: -117.3653308,
    locationName: "76"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJbc-jMN0enlQRqptZMsDr9sI",
    edition: "EWA",
    notes: "Inside top pocket of rack",
    address: "5217 N Market St, Spokane, WA 99217, USA",
    lat: 47.7057867,
    lng: -117.364936,
    locationName: "Liquor & More"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJZ3rf6ukenlQRKAAnnkdF7eg",
    edition: "EWA",
    notes: "Single EX rack ",
    address: "5803 N Market St Unit B, Spokane, WA 99208, USA",
    lat: 47.7105965,
    lng: -117.3650854,
    locationName: "Hillyard Grocery & Liquor"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJO4LlDYQenlQRQq05g33ndM0",
    edition: "EWA",
    notes: "; RED EX (old Auto Clipper) Box",
    address: "8213 N Market St, Spokane, WA 99217, USA",
    lat: 47.7323372,
    lng: -117.3651301,
    locationName: "Conoco"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJg_ZE0r8dnlQRn_tvUEP7iV8",
    edition: "EWA",
    notes: "Shared rack, top shelf inside",
    address: "11810 N Market St, Mead, WA 99021, USA",
    lat: 47.7646856,
    lng: -117.3549287,
    locationName: "Glenn's Foods"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJWxAiipYdnlQRmGHy5WBw9aY",
    edition: "EWA",
    notes: "Leave by entrance door, bag if possible",
    address: "12218 N Market St, Mead, WA 99021, USA",
    lat: 47.7688268,
    lng: -117.3540591,
    locationName: "Zip's Drive-In - Mead, WA"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ2XSZzHgdnlQRQhIS_6Yp7QA",
    edition: "EWA",
    notes: "Inlander Community Rack; 3 Pockets ; ",
    address: "14202 N Market St, Mead, WA 99021, USA",
    lat: 47.7864086,
    lng: -117.3506782,
    locationName: "Yoke's Fresh Market - Mead"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJeyuYtH0dnlQRoSMncn2vRQo",
    edition: "EWA",
    notes: "Yellow Community Rack, Right of dooe outside (MAX 60)",
    address: "14710 N Newport Hwy, Mead, WA 99021, USA",
    lat: 47.7912167,
    lng: -117.3515078,
    locationName: "Conoco"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJdzDes4LiYVMRh_Cw4U05MdI",
    edition: "EWA",
    notes: "OUTSIDE RED BOX",
    address: "15228 N Newport Hwy, Mead, WA 99021, USA",
    lat: 47.7949677,
    lng: -117.3494429,
    locationName: "North 40 Outfitters"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJSXfu2sriYVMRDmoqtDOJUJc",
    edition: "EWA",
    notes: "Bag - Opens at 11am",
    address: "18711 N Yale Rd, Colbert, WA 99005, USA",
    lat: 47.8275489,
    lng: -117.3465358,
    locationName: "Big Red's Colbert Trading Company"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJwZB1Tqj-YVMRCUQ5c8YwMpU",
    edition: "EWA",
    notes: "EX Single Wire Rack w/ WCD; ",
    address: "28312 N Newport Hwy, Chattaroy, WA 99003, USA",
    lat: 47.9146954,
    lng: -117.3497987,
    locationName: "Ameripride"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJT9JLlu74YVMRnx_7wbrcP3A",
    edition: "EWA",
    notes: "Inside store Rack (MAX 120 for bundles of 30)",
    address: "Washington 99003, USA",
    lat: 47.9709378,
    lng: -117.3487555,
    locationName: "Watson's Market Harvest Foods"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ-4uYp5MCYlMRpSMN83Pzdxg",
    edition: "EWA",
    notes: "Outside Double Ex Wire Rack",
    address: "39824 N Newport Hwy, Elk, WA 99009, USA",
    lat: 48.0174595,
    lng: -117.3489622,
    locationName: "Millers One Stop Grocery"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJTzgtKHP_YVMR8b0w0NAi5h4",
    edition: "EWA",
    notes: "EX Single Wire Rack Inside",
    address: "2915 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9549056,
    lng: -117.4344417,
    locationName: "Deer Park Veterinary Clinic"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJqdtthZ7_YVMRBZfE6PhPZXs",
    edition: "EWA",
    notes: "@ Roundabout Store Rack",
    address: "1501 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9549585,
    lng: -117.45316,
    locationName: "Bob Mart"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJIRIEGpL_YVMRI2ZJIZakJII",
    edition: "EWA",
    notes: "Inside Community Shelf",
    address: "115 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9544431,
    lng: -117.4744981,
    locationName: "EXPRESSWAY"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJvZoZcJL_YVMRSp7SnVSqxlA",
    edition: "EWA",
    notes: "; On Pillar By Window",
    address: "5 E Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9546718,
    lng: -117.4765116,
    locationName: "NAPA Auto Parts"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJa8JfnI7_YVMR4B9tXR4hGkA",
    edition: "EWA",
    notes: "Angle Iron Exchange Rack",
    address: "109 W 4th St, Deer Park, WA 99006, USA",
    lat: 47.9580491,
    lng: -117.4791119,
    locationName: "Levis Mini Mart"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJHXB2EY3_YVMRoXFjjOAkn6A",
    edition: "EWA",
    notes: "Opens 11 AM Bottom of Huckleberry rack",
    address: "122 W 1st St, Deer Park, WA 99006, USA",
    lat: 47.9556281,
    lng: -117.4804141,
    locationName: "First Street Bar & Grill"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJbWdMjI3_YVMRnOHCUZl29k8",
    edition: "EWA",
    notes: "Spread across Tables, counters, rack",
    address: "202 W 1st St, Deer Park, WA 99006, USA",
    lat: 47.9561456,
    lng: -117.4809408,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJq3o6exb_YVMRVKRx7vGu1AM",
    edition: "EWA",
    notes: "",
    address: "121 W Crawford St, Deer Park, WA 99006, USA",
    lat: 47.9539204,
    lng: -117.480423,
    locationName: "Windermere North / Deer Park"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ2UPJ8ZL_YVMRykdWEOhY4kk",
    edition: "EWA",
    notes: "Desk",
    address: "110 S Main St, Deer Park, WA 99006, USA",
    lat: 47.952808,
    lng: -117.477225,
    locationName: "Ericks Realty"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJbSOxZJL_YVMRUYDirSp5rvs",
    edition: "EWA",
    notes: "Store shelves",
    address: "220 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9515445,
    lng: -117.4773936,
    locationName: "Inland Feed & Farm Supply"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ_dp_SZP_YVMRa6rF4wf_4hA",
    edition: "EWA",
    notes: "Coffee Table",
    address: "404 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9504016,
    lng: -117.4775623,
    locationName: "Real Estate Marketplace NW Inc"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJz14fHvT_YVMRwSUGB8AxCSY",
    edition: "EWA",
    notes: "",
    address: "517 S Fir Ave, Deer Park, WA 99006, USA",
    lat: 47.9486756,
    lng: -117.4819712,
    locationName: "EXIT Real Estate Professionals"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJr0N8mOv_YVMRJ4dzCNqvvkk",
    edition: "EWA",
    notes: " EX Single Wire Rack Opens 11AM (side door if not open)",
    address: "619 S Fir Ave, Deer Park, WA 99006, USA",
    lat: 47.9471859,
    lng: -117.479981,
    locationName: "Pizza Factory"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJDdwoejP_YVMRWVW1zczpiMU",
    edition: "EWA",
    notes: "Bottom of Huckleberry rack",
    address: "141 W H St, Deer Park, WA 99006, USA",
    lat: 47.946756,
    lng: -117.480117,
    locationName: "Deer Park Henery Hardware"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJmTiRVer_YVMRdLc58oGiMJk",
    edition: "EWA",
    notes: "Inlander Community Rack; 4 Pockets        ",
    address: "810 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9465621,
    lng: -117.4781558,
    locationName: "Yoke's Fresh Market - Deer Park"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJ0QRdYur_YVMRBuSAvgjt-78",
    edition: "EWA",
    notes: "EX Single Angle Iron Rack; Inside North Door",
    address: "900 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9441409,
    lng: -117.4777897,
    locationName: "McDonald's"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJD4H9XFH_YVMRE0s376omEOI",
    edition: "EWA",
    notes: "2 Racks inside by door to Left wooden",
    address: "1100 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9435996,
    lng: -117.4776179,
    locationName: "NomNom"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJWYzbier_YVMRgay1MAYFbgs",
    edition: "EWA",
    notes: "Inside EX Single Wire Rack (MAX 75 bundles of 30)",
    address: "1005 S Main St, Deer Park, WA 99006, USA",
    lat: 47.945,
    lng: -117.4763889,
    locationName: "Zip's Drive In - Deer Park"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJjYHA6ur_YVMR6HvLB_oVBgc",
    edition: "EWA",
    notes: "Single wire EX rack",
    address: "811 S Main St, Deer Park, WA 99006, USA",
    lat: 47.9456497,
    lng: -117.4758541,
    locationName: "Double Eagle Pawn"
  },
  {
    route: "Deer Park/ Spokane North",
    placeId: "ChIJIUoY-ev5YVMRtQdwjwJcl7o",
    edition: "EWA",
    notes: "opens 11, leave bag; Entry shelf",
    address: "34608 N Newport Hwy, Chattaroy, WA 99003, USA",
    lat: 47.9698914,
    lng: -117.349053,
    locationName: "The Ram Drive-In"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJt6AIjqgYnlQR39Sk8EpS-as",
    edition: "EWA",
    notes: "opens 9:30am",
    address: "3301 E Sprague Ave, Spokane, WA 99202, USA",
    lat: 47.6576281,
    lng: -117.3617703,
    locationName: "Axels Pawn Tools & Gold"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJ16T1W6IYnlQRN7KKBV4ahIM",
    edition: "EWA",
    notes: "Tall Single EX Rack               opens 10am",
    address: "2125 E Sprague Ave, Spokane, WA 99202, USA",
    lat: 47.6575269,
    lng: -117.3785814,
    locationName: "Zip's Drive In"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJo5MfxpMYnlQRsX8kCDfwKI0",
    edition: "EWA",
    notes: "Single EX Wire rack at front counter",
    address: "801 E Spokane Falls Blvd, Spokane, WA 99202, USA",
    lat: 47.66215,
    lng: -117.397029,
    locationName: "Spokane Power Tool & Equipment"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJZZmrmGYYnlQRpzAD3cplP18",
    edition: "EWA",
    notes: "Community rack to right",
    address: "822 W 2nd Ave, Spokane, WA 99201, USA",
    lat: 47.6547719,
    lng: -117.4248742,
    locationName: "76"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJ6_HqxLsYnlQRZ9DhWjPn9hA",
    edition: "EWA",
    notes: "Single EX outside",
    address: "1302 W 2nd Ave, Spokane, WA 99201, USA",
    lat: 47.6546235,
    lng: -117.431371,
    locationName: "Iron Goat Brewing"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJsZ3hvWkYnlQR87Y1Las77VY",
    edition: "EWA",
    notes: "",
    address: "1632 W 2nd Ave, Spokane, WA 99201, USA",
    lat: 47.654865,
    lng: -117.4370516,
    locationName: "Super Wash Laundromat"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJiZdEimkYnlQRT_exGUsyGFU",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket 1 Shelf; North Door",
    address: "1808 W 3rd Ave, Spokane, WA 99201, USA",
    lat: 47.653856,
    lng: -117.4395045,
    locationName: "Rosauers Supermarkets"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJCWjZUGoYnlQRWqWivowTAe0",
    edition: "EWA",
    notes: "",
    address: "1908 W Sunset Blvd, Spokane, WA 99201, USA",
    lat: 47.65297,
    lng: -117.440959,
    locationName: "Sunset Grocery"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJw2O_TVkYnlQRTC9432RSkfE",
    edition: "EWA",
    notes: "Share Inlander rack",
    address: "546 N Jefferson St, Spokane, WA 99201, USA",
    lat: 47.6625216,
    lng: -117.4293744,
    locationName: "Providence Kendall Yards Primary Care"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJ6ZBH714YnlQR5Y8O3VhBjio",
    edition: "EWA",
    notes: "",
    address: "1030 W Summit Pkwy, Spokane, WA 99201, USA",
    lat: 47.6625998,
    lng: -117.4271789,
    locationName: "My Fresh Basket"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJNza6-GEYnlQRPKhRwhlCTOI",
    edition: "EWA",
    notes: "Inside building to the right; Green Leaflet Rack",
    address: "Spokane, WA 99201, USA",
    lat: 47.6563567,
    lng: -117.4153822,
    locationName: "Amtrak Station - SPK"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJtb_puWEYnlQRjXxo-ZujY4A",
    edition: "EWA",
    notes: "Inside White Exchange Rack in Foyer",
    address: "402 W Sprague Ave, Spokane, WA 99201, USA",
    lat: 47.6574439,
    lng: -117.4182232,
    locationName: "P M Jacoy's"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJ7UZX2mAYnlQR6rPsMglY7q4",
    edition: "EWA",
    notes: "Inlander Rack",
    address: "778 W Sprague Ave, Spokane, WA 99201, USA",
    lat: 47.6573329,
    lng: -117.4231443,
    locationName: "Shop Around the Corner"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJBzQ9G14YnlQRcH7bm3zE3Dw",
    edition: "EWA",
    notes: "Single EX 2 shelf rack South entrance near juice bar/ self check out",
    address: "906 W Main, Spokane, WA 99201, USA",
    lat: 47.6594656,
    lng: -117.4254546,
    locationName: "Spokane Public Library - Central"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJrUu6EmkYnlQRsC9rTuzLkn8",
    edition: "EWA",
    notes: "Outside EX Single Rack",
    address: "1527 W 3rd Ave, Spokane, WA 99201, USA",
    lat: 47.6531313,
    lng: -117.4351317,
    locationName: "CITY FOOD MART"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJVc8TyHEYnlQRRivLkNtuoLk",
    edition: "EWA",
    notes: "Inside EX rack; Angle Iron Community; shared with Inlander",
    address: "926 S Monroe St, Spokane, WA 99204, USA",
    lat: 47.6466169,
    lng: -117.4274836,
    locationName: "Huckleberry's Natural Market"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJjdIaunYYnlQR91CUVZAuCss",
    edition: "EWA",
    notes: "Inlander Store Rack; 1 Pocket",
    address: "907 W 14th Ave, Spokane, WA 99204, USA",
    lat: 47.6419849,
    lng: -117.4248829,
    locationName: "Rosauers Supermarkets"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJt7SzOWQYnlQRREitJyFCGM0",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "223 S Lincoln St, Spokane, WA 99201, USA",
    lat: 47.6538804,
    lng: -117.4244064,
    locationName: "Zip's Drive In"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJkT0_1WUYnlQRxAt_EKL5VH4",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "224 S Lincoln St, Spokane, WA 99201, USA",
    lat: 47.6537408,
    lng: -117.425247,
    locationName: "Molly's Family Restaurant"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJ99brF4gYnlQRjaxose4Lv2U",
    edition: "EWA",
    notes: "Max 3 bundles; Stacks on counter",
    address: "10 E 3rd Ave, Spokane, WA 99202, USA",
    lat: 47.653194,
    lng: -117.4106997,
    locationName: "Dick's Hamburgers"
  },
  {
    route: "Downtown Spokane",
    placeId: "ChIJGUnmEIgYnlQRMaK8sThThNs",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "30 E 3rd Ave, Spokane, WA 99202, USA",
    lat: 47.653255,
    lng: -117.409899,
    locationName: "Frankie Doodle’s"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJVW8IagQ-nlQRGzEHvHRdZv4",
    edition: "EWA",
    notes: "outside front door",
    address: "11115 WA-902, Medical Lake, WA 99022, USA",
    lat: 47.59390775,
    lng: -117.5690761,
    locationName: "Exxon"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJp9IL81MVnlQRq376nCPRNt4",
    edition: "EWA",
    notes: "Outside store rack",
    address: "710 E, 710 WA-902, Medical Lake, WA 99022, USA",
    lat: 47.5790967,
    lng: -117.6741187,
    locationName: "Conoco"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJfTSOzqtqnlQRZVClzInEcoc",
    edition: "EWA",
    notes: "1 long pocket, 1 shelf",
    address: "215 WA-902, Medical Lake, WA 99022, USA",
    lat: 47.5812144,
    lng: -117.6817314,
    locationName: "Lakes Harvest Foods"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJKRZSdMg4nlQRaQWlDcjM4gU",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 pocket (Right entrance)",
    address: "2710 1st St, Cheney, WA 99004, USA",
    lat: 47.5059303,
    lng: -117.5674009,
    locationName: "Safeway"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJGazQxcc4nlQRdulfSEzjUsQ",
    edition: "EWA",
    notes: "Rack inside door on left",
    address: "2654 1st St, Cheney, WA 99004, USA",
    lat: 47.505213,
    lng: -117.565291,
    locationName: "Conoco"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJeaQQn7g4nlQRRhIHM5jf2dE",
    edition: "EWA",
    notes: "Inside front door",
    address: "2324 1st St, Cheney, WA 99004, USA",
    lat: 47.50206,
    lng: -117.5654832,
    locationName: "McDonald's"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJT5qEpLg4nlQRArTCHxYP1Wk",
    edition: "EWA",
    notes: "Inside front door",
    address: "2302 1st St, Cheney, WA 99004, USA",
    lat: 47.5017142,
    lng: -117.5651652,
    locationName: "Chevron"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJy4ZtNr84nlQRRwAs51Uk3vE",
    edition: "EWA",
    notes: "On far left counter",
    address: "2210 1st St, Cheney, WA 99004, USA",
    lat: 47.5003099,
    lng: -117.5657371,
    locationName: "O'Reilly Auto Parts"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJswLpvJc4nlQRHpcfA6GL7LM",
    edition: "EWA",
    notes: "Outside",
    address: "1122 1st St, Cheney, WA 99004, USA",
    lat: 47.492351,
    lng: -117.56981,
    locationName: "Taj Groceries"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJqcykf2JHnlQRb8ebq97Ciy8",
    edition: "EWA",
    notes: "",
    address: "24 W 1st St, Cheney, WA 99004, USA",
    lat: 47.4835982,
    lng: -117.5806386,
    locationName: "Bene's"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJ2TC_Y2JHnlQR6Q-RuhxyEyc",
    edition: "EWA",
    notes: "Inside on Inlander rack; ",
    address: "116 W 1st St, Cheney, WA 99004, USA",
    lat: 47.4833416,
    lng: -117.5819892,
    locationName: "Mitchell's Harvest Foods"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJkUdxmZk4nlQRbieBwzxDDaQ",
    edition: "EWA",
    notes: "Inside ; ",
    address: "723 1st St, Cheney, WA 99004, USA",
    lat: 47.4891667,
    lng: -117.5727778,
    locationName: "Gerardo's Authentic Mexican Food"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJYcZGRZk4nlQRipJcL7r4WKs",
    edition: "EWA",
    notes: "On the bench inside",
    address: "505 2nd St, Cheney, WA 99004, USA",
    lat: 47.48818,
    lng: -117.575565,
    locationName: "El Rodeo"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJqx4r25k4nlQRoHMp2M92Yoo",
    edition: "EWA",
    notes: "Single EX rack East entrance",
    address: "911 1st St, Cheney, WA 99004, USA",
    lat: 47.4904017,
    lng: -117.5712155,
    locationName: "Zip's Drive-In - Cheney"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJ09oFDr84nlQRYzVkydkVyWU",
    edition: "EWA",
    notes: "Leave in waiting area ",
    address: "7 Spokane St, Cheney, WA 99004, USA",
    lat: 47.4923172,
    lng: -117.5684508,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJI2UMZ784nlQRgaTy1etkj-Q",
    edition: "EWA",
    notes: "North Door; Exchange Rack and Inlander Community Rack 1 Pocket",
    address: "4 Cheney Spokane Rd, Cheney, WA 99004, USA",
    lat: 47.4996113,
    lng: -117.5636774,
    locationName: "Yoke's Fresh Market - Cheney"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJU5ff7GE5nlQRiR5N8cBrkx4",
    edition: "EWA",
    notes: "Inside entryway, single EX single shelf MAX 60",
    address: "2533 1st St, Cheney, WA 99004, USA",
    lat: 47.5039281,
    lng: -117.5639477,
    locationName: "Grocery Outlet"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJ896wo8g4nlQRx15O92vgI-U",
    edition: "EWA",
    notes: "Window Counter",
    address: "2827 1st St, Cheney, WA 99004, USA",
    lat: 47.5069095,
    lng: -117.5635062,
    locationName: "Maverik Adventure's First Stop"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJA1CWVE0-nlQRi6-_NjR_CfU",
    edition: "EWA",
    notes: "Single EX rack ; Inlander on bottom; ",
    address: "10021 WA-904, Cheney, WA 99004, USA",
    lat: 47.5621551,
    lng: -117.5939171,
    locationName: "76"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJGdtozwg-nlQRyjgcmieB--A",
    edition: "EWA",
    notes: "Use front truck rack, inside first door on left",
    address: "10506 W Aero Rd, Spokane, WA 99224, USA",
    lat: 47.5906292,
    lng: -117.5611778,
    locationName: "Iron Skillet"
  },
  {
    route: "Medical Lake/ Cheney",
    placeId: "ChIJkcGOitUXnlQRE6e0ZgaRwEE",
    edition: "EWA",
    notes: "Bottom of Spokesman rack at front door",
    address: "4110 S Fosseen Rd, Spokane, WA 99224, USA",
    lat: 47.6172086,
    lng: -117.5060792,
    locationName: "76"
  },
  {
    route: "Moses Lake",
    placeId: "ChIJuf0HFCo5mVQR_Haft1ej-eA",
    edition: "IND, WML",
    notes: "Take Exit 179; 1/2 Bundle of Inlander",
    address: "1810 Kittelson Rd, Moses Lake, WA 98837, USA",
    lat: 47.1020857,
    lng: -119.2451673,
    locationName: "Ernie's Fuel Stop"
  },
  {
    route: "Moses Lake",
    placeId: "ChIJO_ABvrw4mVQRDzkhBcs64CY",
    edition: "EWA, IND, WML",
    notes: "Inside Rack Far Left or Northern Entrance; 1 Bundle of Inlander",
    address: "601 S Pioneer Way, Moses Lake, WA 98837, USA",
    lat: 47.13038900000001,
    lng: -119.2683211,
    locationName: "Safeway"
  },
  {
    route: "Moses Lake",
    placeId: "ChIJgx1-Bl5HmVQRXRCeWfeM3Zg",
    edition: "EWA, IND, WML",
    notes: "Rack Inside Right Main Door leave WML Copies primary; 1/2 Bundle of Inlander",
    address: "1177 N Stratford Rd, Moses Lake, WA 98837, USA",
    lat: 47.145412,
    lng: -119.2769138,
    locationName: "Grocery Outlet"
  },
  {
    route: "Moses Lake",
    placeId: "ChIJUXK5FRQ_mVQR7UNxVcWHd4Y",
    edition: "EWA, IND, WML",
    notes: "Inside Rack On top/Inlander on bottom; 2 blocks past is 1-90 On Ramp; 1 Bundle of Inlander",
    address: "2709 W Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1040399,
    lng: -119.3100148,
    locationName: "Lep-Re-Kon Harvest Foods"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ65UXOH_dYVMRrwtVWjZEpf0",
    edition: "EWA",
    notes: "Outside community rack; w/ rock",
    address: "25105 E Trent Ave, Newman Lake, WA 99025, USA",
    lat: 47.7247316,
    lng: -117.0683777,
    locationName: "Newman Lake Store Exxon"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ53bzOCbqYVMRz0IE8VB6bvg",
    edition: "NID",
    notes: "Inside Table",
    address: "14319 W Hwy 53, Rathdrum, ID 83858, USA",
    lat: 47.8147393,
    lng: -116.8932291,
    locationName: "Dashco Laundry"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ1QoWMwDrYVMRybzsal_Q0Bw",
    edition: "NID",
    notes: "Place on ground by entry door.",
    address: "13735 W Hwy 53, Rathdrum, ID 83858, USA",
    lat: 47.8186222,
    lng: -116.8870254,
    locationName: "Paul Bunyan"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJASaxL43rYVMR3ivcwBn0mn4",
    edition: "NID",
    notes: "Set both Giorgis and O'Malleys on bench inside door",
    address: "13742 W Hwy 53, Rathdrum, ID 83858, USA",
    lat: 47.8178052,
    lng: -116.8861962,
    locationName: "Giorgi's Breakfast & Lunch"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJvb_O1f_qYVMRc2kvBtsKFP8",
    edition: "NID",
    notes: "See above",
    address: "13742 W Hwy 53, Rathdrum, ID 83858, USA",
    lat: 47.8178,
    lng: -116.8862245,
    locationName: "O'Malley's Sports Bar"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJlQeFhQfrYVMRmlu-xSt3sXw",
    edition: "NID",
    notes: "Inside Window Sill; OPENS 6AM",
    address: "13668 ID-53, Rathdrum, ID 83858, USA",
    lat: 47.818431,
    lng: -116.8854744,
    locationName: "Harlows Diner"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJvb5GXv7qYVMRMLr05D1xfjI",
    edition: "NID",
    notes: "Inside Foyer Community ; Top Shelf",
    address: "15963 ID-41, Rathdrum, ID 83858, USA",
    lat: 47.816466,
    lng: -116.882389,
    locationName: "HiCo 76"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJmxC5iPzqYVMRqeKE9Ol8Am8",
    edition: "NID",
    notes: "Set on ground by entry door if not open",
    address: "6600 Commercial Park Ave, Rathdrum, ID 83858, USA",
    lat: 47.81617560000001,
    lng: -116.8750233,
    locationName: "Local Deli "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ95gyruLqYVMRInOe_0gGL88",
    edition: "NID",
    notes: "Inlander Community Rack; 3 Pockets",
    address: "15837 N Westwood Dr Suite 1 # A, Rathdrum, ID 83858, USA",
    lat: 47.81582279999999,
    lng: -116.8766704,
    locationName: "Super 1"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJE9woaQLrYVMR3YMGZcKazTQ",
    edition: "NID",
    notes: "Outside EX Angle Iron Rack NEEDS PAINTED",
    address: "16484 ID-41, Rathdrum, ID 83858, USA",
    lat: 47.8204572,
    lng: -116.8808114,
    locationName: "Dollar Tree"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ5yTz8X2VYVMR0K96tdN4G98",
    edition: "NID",
    notes: "On counter",
    address: "4800 W Village Blvd, Rathdrum, ID 83858, USA",
    lat: 47.8673582,
    lng: -116.8507823,
    locationName: "Twin Lakes Trading Post"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJJfluIeyNYVMRCcFbxPwsyk8",
    edition: "NID",
    notes: "EX SINGLE RACK Inside store",
    address: "31450 N 5th Ave, Spirit Lake, ID 83869, USA",
    lat: 47.9539625,
    lng: -116.8674285,
    locationName: "Jifi Stop "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJRwgb6ZKNYVMRxsOITOvnwJk",
    edition: "NID",
    notes: "Outside ",
    address: "31964 N 5th Ave, Spirit Lake, ID 83869, USA",
    lat: 47.96213700000001,
    lng: -116.8682213,
    locationName: "Miller's Harvest Foods Gas"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJbe2F8pKNYVMRe8ggB7L8kfY",
    edition: "NID",
    notes: "Inside Table",
    address: "31916 N 5th Ave, Spirit Lake, ID 83869, USA",
    lat: 47.9624222,
    lng: -116.8682439,
    locationName: "Miller's Laundry"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJz9tO7pKNYVMRS0i3gWEG33I",
    edition: "NID",
    notes: "Inside Single ; EX Rack; Right of door",
    address: "31964 N 5th Ave, Spirit Lake, ID 83869, USA",
    lat: 47.9626584,
    lng: -116.867837,
    locationName: "Miller's Harvest Foods"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJffHmIpONYVMRSj3fzW_upmg",
    edition: "NID",
    notes: "Outside EX Single Rack; w/ WCD",
    address: "32068 N 5th Ave, Spirit Lake, ID 83869, USA",
    lat: 47.963937,
    lng: -116.8683116,
    locationName: "Spirits Mini Stop"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ2ZaTYpONYVMRrsVpaS-5Z_Y",
    edition: "NID",
    notes: "Place by entry door",
    address: "6249 W Maine St, Spirit Lake, ID 83869, USA",
    lat: 47.96533110000001,
    lng: -116.8708773,
    locationName: "Mi Pueblo"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJFSVGp4mQYVMRqOFd29FD9oQ",
    edition: "NID",
    notes: "Outside White EX Rack",
    address: "6300 ID-54, Athol, ID 83801, USA",
    lat: 47.94720510000001,
    lng: -116.700024,
    locationName: "Conoco Crossroads Food"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJzQqCq-mRYVMR2LC9XYHHZRA",
    edition: "NID",
    notes: "Outside white EX rack behind pillar at front door",
    address: "30396 N Roberts Rd, Athol, ID 83801, USA",
    lat: 47.9487365,
    lng: -116.6910485,
    locationName: "Kay's Quickstop Union 76"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJRfic_HeQYVMRaLDzzToghYg",
    edition: "NID",
    notes: "Inlander Community Rack ; 3 Pockets ",
    address: "30585 N Roberts Rd, Athol, ID 83801, USA",
    lat: 47.9500961,
    lng: -116.6932373,
    locationName: "Super 1"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJr7_3Qe3VY1MRx9YywQAAam8",
    edition: "NID",
    notes: "Outside Auto Clipper Rack; West side of building; w/ WCD",
    address: "468800 US-95, Sagle, ID 83860, USA",
    lat: 48.20356239999999,
    lng: -116.5660365,
    locationName: "Conoco (Travel America) "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJq2E_5kgrYlMRgLabL0yX1tU",
    edition: "NID",
    notes: "Place on ground under NW rack",
    address: "14663 US-2, Priest River, ID 83856, USA",
    lat: 48.1711138,
    lng: -116.7539711,
    locationName: "Laclede Store "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJRY5XTgApYlMRJWqafCO6blw",
    edition: "NID",
    notes: "Inside counter",
    address: "536 High St, Priest River, ID 83856, USA",
    lat: 48.1794123,
    lng: -116.9068865,
    locationName: "AJ's CAFÉ "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJadh37RwmYlMRr8xaLj--nMc",
    edition: "NID",
    notes: "Inside Community Shelf; to the left of NW",
    address: "1120 US-2, Priest River, ID 83856, USA",
    lat: 48.18138889999999,
    lng: -116.9216667,
    locationName: "Mitchell's Harvest Foods"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJI7gIWQUmYlMRYwq05cb5it4",
    edition: "NID",
    notes: "Inside Community Rack",
    address: "5499 US-2, Priest River, ID 83856, USA",
    lat: 48.1814474,
    lng: -116.9231906,
    locationName: "Ace Hardware "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJfUNwPRsmYlMRHzsrVfk_tbE",
    edition: "NID",
    notes: "Single EX Wire rack",
    address: "5398 US-2, Priest River, ID 83856, USA",
    lat: 48.179946,
    lng: -116.925066,
    locationName: "NAPA  "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJFwv69DskYlMRbwBVJSkol9s",
    edition: "NID",
    notes: "Inside Community Rack",
    address: "2694 US-2, Priest River, ID 83856, USA",
    lat: 48.17990129999999,
    lng: -116.9840305,
    locationName: "DJs Superstop"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJqwokE3IlYlMRolWTC-oOeb8",
    edition: "NID",
    notes: "Inlander Community Rack; 3 Pockets ",
    address: "86 Tank Rd, Oldtown, ID 83822, USA",
    lat: 48.1879463,
    lng: -117.0253219,
    locationName: "Super 1"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJc9DTKxUkYlMRBEmZ-JH7n_8",
    edition: "NID",
    notes: "Inside Foyer; EX Double Rack",
    address: "41 Old Diamond Mill Rd, Oldtown, ID 83822, USA",
    lat: 48.1859683,
    lng: -117.0279191,
    locationName: "Albeni Falls Building Supply"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJVzFz2mokYlMR64UwTS6vgr8",
    edition: "NID",
    notes: "On Front Counter",
    address: "33 Selkirk Way, Oldtown, ID 83822, USA",
    lat: 48.1875351,
    lng: -117.0289153,
    locationName: "O'Reilly Auto Parts "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJkbCazRQkYlMRcTXsUb3b_j0",
    edition: "NID",
    notes: "Inside EX Single Rack",
    address: "495 US-2, Oldtown, ID 83822, USA",
    lat: 48.18706,
    lng: -117.030602,
    locationName: "Ace Hardware"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ6UkIvhIkYlMRLVF1bLP7dEw",
    edition: "NID",
    notes: "Outside rack",
    address: "203 E 4th St N, Oldtown, ID 83822, USA",
    lat: 48.1832188,
    lng: -117.038143,
    locationName: "Dollar Tree"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJG3RAqBIkYlMRxGmG0AGyGjY",
    edition: "NID, EWA",
    notes: "Community Rack to Left of counter",
    address: "82 US-2, Oldtown, ID 83822, USA",
    lat: 48.1842364,
    lng: -117.0377136,
    locationName: "Mobil"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJjXcGUg0kYlMRV77PA4h3LWo",
    edition: "EWA",
    notes: "Keokee Community Rack; 3 Pockets; 2nd, 3rd, 4th row on left",
    address: "121 W Walnut St, Newport, WA 99156, USA",
    lat: 48.1833392,
    lng: -117.0405702,
    locationName: "Safeway"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJ9X9lMnMkYlMRpWwYof9gNYI",
    edition: "EWA",
    notes: "inside entry way",
    address: "311 N Washington Ave, Newport, WA 99156, USA",
    lat: 48.183463,
    lng: -117.0443631,
    locationName: "Mi Pueblo "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJHWEsTQQiYlMRJZLPRUMBcBE",
    edition: "EWA",
    notes: "Outside EX Single Rack",
    address: "333111 US-2, Newport, WA 99156, USA",
    lat: 48.1751571,
    lng: -117.0634355,
    locationName: "Exxon Country Store"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJLfK9H3jfuVIRHWxnfhbnUYk",
    edition: "EWA",
    notes: "On top of trash can HOLD AT 5 PER OWNER; West Door",
    address: "333211 US-2, Newport, WA 99156, USA",
    lat: 48.1747616,
    lng: -117.0650115,
    locationName: "Subway "
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJlwBxx-0jYlMRdQ7XxTkjjUU",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "US-2, Newport, WA 99156, USA",
    lat: 48.1738337,
    lng: -117.0666905,
    locationName: "Audry's Restaurant"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJT51UK_gZYlMRaUomYdykgu8",
    edition: "EWA",
    notes: "on counter just inside door",
    address: "802 S Shore Diamond Lake Rd, Newport, WA 99156, USA",
    lat: 48.12849039999999,
    lng: -117.1840744,
    locationName: "Edgewater Lounge"
  },
  {
    route: "Newport/ North Idaho",
    placeId: "ChIJQW3WRtUeYlMRTLhQxgcSel4",
    edition: "EWA",
    notes: "Inside community rack; Top Shelf",
    address: "325182 US-2, Newport, WA 99156, USA",
    lat: 48.1190649,
    lng: -117.2082984,
    locationName: "Diamond Lake Deli"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJT9q84xTfYVMR38-YLXT5duA",
    edition: "EWA",
    notes: "Exchange rack in entrance",
    address: "1425 N Liberty Lake Rd, Liberty Lake, WA 99019, USA",
    lat: 47.6696917,
    lng: -117.1081863,
    locationName: "Ace General Store          "
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJR9S9eY7eYVMRMuUwjU6tb6c",
    edition: "EWA",
    notes: "South Door; Inlander Community Rack; 1 Pocket",
    address: "1233 N Liberty Lake Rd, Liberty Lake, WA 99019, USA",
    lat: 47.6684214,
    lng: -117.106978,
    locationName: "Yoke's"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJb45qW_vfYVMRcpChHviwjIY",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket - 60 Max",
    address: "1304 N Liberty Lake Rd, Liberty Lake, WA 99019, USA",
    lat: 47.6694942,
    lng: -117.1034096,
    locationName: "Safeway"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ0-wp_47eYVMRiUa8uIMZAiI",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "1306 N Liberty Lake Rd, Liberty Lake, WA 99019, USA",
    lat: 47.66974949999999,
    lng: -117.1051812,
    locationName: "McDonald's"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJg3OC4I7eYVMRePkSgEcWR6M",
    edition: "EWA",
    notes: "Second Shelf Community Rack",
    address: "1502 N Liberty Lake Rd, Liberty Lake, WA 99019, USA",
    lat: 47.6706797,
    lng: -117.1056587,
    locationName: "Walgreens"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ7bNBkYneYVMRC_-61Jm49hI",
    edition: "EWA",
    notes: "Inside Top Community Rack",
    address: "21804 E Mission Ave, Liberty Lake, WA 99019, USA",
    lat: 47.67412859999999,
    lng: -117.1117433,
    locationName: "Divine's 76"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJDSuMrr_fYVMRuUYaNc3Zfbo",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "21121 E Wellesley Ave, Otis Orchards, WA 99027, USA",
    lat: 47.7006693,
    lng: -117.1213279,
    locationName: "KH Grocery Market"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJE5APEnXgYVMRTQy-_1ZRkBU",
    edition: "EWA",
    notes: "inside comm rack",
    address: "14515 E Trent Ave, Spokane Valley, WA 99216, USA",
    lat: 47.6955602,
    lng: -117.2087109,
    locationName: "Harvest Foods"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJk_cb6wvgYVMR5uA-ocmhLHg",
    edition: "EWA",
    notes: "Top of Community Rack ",
    address: "13819 E Trent Ave, Spokane, WA 99206, USA",
    lat: 47.69469219999999,
    lng: -117.2192243,
    locationName: "Mobil Fuel"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJm_agXQngYVMR93eP1biVdWY",
    edition: "EWA",
    notes: "inside EX rack; West Door",
    address: "13621 E Trent Ave, Spokane Valley, WA 99216, USA",
    lat: 47.69475169999999,
    lng: -117.2209144,
    locationName: "Zips"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJuZoiPoYfnlQRaCbEiEgqf4o",
    edition: "EWA",
    notes: "Single EX Wire Rack; South Door",
    address: "2315 N Argonne Rd, Spokane Valley, WA 99212, USA",
    lat: 47.67828,
    lng: -117.2833981,
    locationName: "Longhorn Barbecue"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJkbeKSH0fnlQRsC-iQjPUGL8",
    edition: "EWA",
    notes: "EX Rack Inside Rt of Door; Parris - Manager",
    address: "1330 N Argonne Rd, Spokane Valley, WA 99212, USA",
    lat: 47.66911469999999,
    lng: -117.2822794,
    locationName: "Ace Hardware"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJI-2bdSkgnlQRBaskgw74vBc",
    edition: "EWA",
    notes: "Opens 11am; In Foyer Community Shelf",
    address: "1611 N Mullan Rd, Spokane Valley, WA 99206, USA",
    lat: 47.6717243,
    lng: -117.282104,
    locationName: "Casa de Oro"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJUzdmLYYfnlQRGW2Pf6qQP3g",
    edition: "EWA",
    notes: "Inside EX Single Rack; South Door; ",
    address: "2222 N Argonne Rd, Spokane, WA 99212, USA",
    lat: 47.6775698,
    lng: -117.28214,
    locationName: "McDonalds"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJIw3x7IgfnlQRocWhexcPFjE",
    edition: "EWA",
    notes: "Inlander Store Rack; 2 Pockets. (MAX 100 bundles 30)",
    address: "9329 E Montgomery Ave, Spokane Valley, WA 99206, USA",
    lat: 47.68013759999999,
    lng: -117.2795566,
    locationName: "Yoke's"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJvTJIJ-cfnlQRLXBpyH7eLl0",
    edition: "EWA",
    notes: "Inside Community Angle Iron EX Rack",
    address: "9211 E Montgomery Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6801046,
    lng: -117.2813519,
    locationName: "True Value Hardware"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJRf5nF48fnlQRCyMqR066TMo",
    edition: "EWA",
    notes: "Opens 8am; store Spokesman rack",
    address: "2702 N Argonne Rd, Millwood, WA 99212, USA",
    lat: 47.6816402,
    lng: -117.2818047,
    locationName: "Walgreens"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ9aoHG8AfnlQRPmiN-ReXmXU",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "4322 N Argonne Rd, Spokane, WA 99212, USA",
    lat: 47.696421,
    lng: -117.2817497,
    locationName: "Argonne Library"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJz80kgoUfnlQRyWDbt65zGRc",
    edition: "EWA",
    notes: "Inlander Community rack; 2 Pockets (MAX 90 BUNDLES of 30)",
    address: "8851 E Trent Ave, Spokane, WA 99212, USA",
    lat: 47.6818063,
    lng: -117.28572,
    locationName: "Safeway"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJN3_fgoMfnlQRHRi8ahfviXM",
    edition: "EWA",
    notes: "Inside EX Double Rack; West Door",
    address: "8307 E Trent Ave, Millwood, WA 99212, USA",
    lat: 47.67984499999999,
    lng: -117.2927027,
    locationName: "North 40 Outfitters"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ38p7oYMfnlQRZiAtVSTr5lk",
    edition: "EWA",
    notes: "Front Counter",
    address: "2425 N Vista Rd, Spokane Valley, WA 99212, USA",
    lat: 47.6793252,
    lng: -117.2937677,
    locationName: "Indiana Harness"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ-SAFsWgfnlQR1_94pMZiSpc",
    edition: "EWA",
    notes: "Community top shelf to left of door",
    address: "6021 E Trent Ave, Spokane, WA 99212, USA",
    lat: 47.6755876,
    lng: -117.3231615,
    locationName: "Mobil"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ_2uQ5HEfnlQRY8QRYm4PF_o",
    edition: "EWA",
    notes: "Inside Single EX Rack CLOSES 2PM",
    address: "6105 E Rutter Ave, Spokane, WA 99212, USA",
    lat: 47.6805285,
    lng: -117.3199859,
    locationName: "Skyway Rest. Felts Field"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJm5n2GjAfnlQRVlp2cA3RwLE",
    edition: "EWA",
    notes: "Yellow Inlander Rack",
    address: "3404 E Euclid Ave, Spokane, WA 99217, USA",
    lat: 47.68600499999999,
    lng: -117.3603504,
    locationName: "Neighborhood Grocery"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJW7XQSS4fnlQROuN69VZlH6U",
    edition: "EWA",
    notes: "Inside EX rack SOUTH door; Inside EX rack NORTH door",
    address: "3212 N Market St, Spokane, WA 99207, USA",
    lat: 47.68667609999999,
    lng: -117.3647368,
    locationName: "Zip's - SOUTH DOOR"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJMccQmtUenlQRPzEKamlcH9g",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket",
    address: "2103 E Empire Ave, Spokane, WA 99207, USA",
    lat: 47.6932364,
    lng: -117.3786767,
    locationName: "Bargain Giant"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJhyzXUdAenlQRoMQ3dUS_tgM",
    edition: "EWA",
    notes: "Inside Community Rack Between In/Out doors",
    address: "2105 E Wellesley Ave, Spokane, WA 99207, USA",
    lat: 47.70108139999999,
    lng: -117.3784755,
    locationName: "Walgreens"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ4WkfTdkenlQRp05r8XWPHbg",
    edition: "EWA",
    notes: "InsideEX Single Rack; ",
    address: "4619 N Market St, Spokane, WA 99207, USA",
    lat: 47.70027,
    lng: -117.365347,
    locationName: "M&K Smoke Shop"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJI1nzRNwenlQRGWSWu0exdms",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "4915 N Market St, Spokane, WA 99217, USA",
    lat: 47.70298699999999,
    lng: -117.3651387,
    locationName: "Green's Market"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJea0Gar8enlQRr6ximlGiFrw",
    edition: "EWA",
    notes: "Inside Yellow Inlander Rack; ",
    address: "2104 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.7147038,
    lng: -117.3783391,
    locationName: "G&B Groceries"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJx4ojUsQfnlQRqH_n-yyCF_c",
    edition: "EWA",
    notes: "Bottom Inlander Rack",
    address: "1703 E Francis Ave, Spokane, WA 99208, USA",
    lat: 47.71519769999999,
    lng: -117.3843182,
    locationName: "76"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJwWGE_rAenlQRf23EHxI5c2M",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 pocket",
    address: "6520 N Nevada St, Spokane, WA 99208, USA",
    lat: 47.7179331,
    lng: -117.393567,
    locationName: "Albertsons"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJnZ1bErAenlQRuOOHB6Xweb4",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "6704 N Nevada St #3, Spokane, WA 99208, USA",
    lat: 47.7190364,
    lng: -117.3946606,
    locationName: "The Laundry Room"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJ2z2x9soenlQR9Ikm4rrb1OA",
    edition: "EWA",
    notes: "Outside EX Single Rack w/WCD",
    address: "5434 N Nevada St, Spokane, WA 99207, USA",
    lat: 47.70764459999999,
    lng: -117.3950187,
    locationName: "Empire Foods"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJsRssUzcZnlQRN-8bl8d7PE4",
    edition: "EWA",
    notes: "Inside Wooden community rack; 2nd Shelf",
    address: "925 E Wellesley Ave, Spokane, WA 99207, USA",
    lat: 47.7009459,
    lng: -117.395364,
    locationName: "Conoco"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJyZOy8TIZnlQRFMPpcCVPs2o",
    edition: "EWA",
    notes: "Inside EX Double Rack",
    address: "E 1002 E Wellesley Ave, Spokane, WA 99207, USA",
    lat: 47.700455,
    lng: -117.3945701,
    locationName: "Taco John's"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJp9pZASgZnlQRhC_KpN4e6Jg",
    edition: "EWA",
    notes: "Inside Single Exchange cream rack 3 shelves",
    address: "3219 N Nevada St, Spokane, WA 99207, USA",
    lat: 47.6883198,
    lng: -117.3953986,
    locationName: "Conoco"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJHd_oSdgYnlQRklUULh-oZhs",
    edition: "EWA",
    notes: "Single Exchange rack closes at 1:00 pm",
    address: "3001 N Nevada St, Spokane, WA 99207, USA",
    lat: 47.6858477,
    lng: -117.3955943,
    locationName: "Hillside Restaurant"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJk_LaccIYnlQRh4Qa6IiR_pg",
    edition: "EWA",
    notes: "Inside Community Rack North Door",
    address: "1725 N Hamilton St, Spokane, WA 99207, USA",
    lat: 47.67352709999999,
    lng: -117.3970117,
    locationName: "Hamilton Wash & Dry"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJyTdSHMIYnlQRWXZ7wQbxS90",
    edition: "EWA",
    notes: "Inlander Store rack  ; 3 Pockets; (MAX 120  bundles 30)",
    address: "933 E Mission Ave, Spokane, WA 99202, USA",
    lat: 47.6722942,
    lng: -117.3947643,
    locationName: "Safeway"
  },
  {
    route: "Northeast Spokane",
    placeId: "ChIJITRqqrUYnlQRgsARqX3afYM",
    edition: "EWA",
    notes: "Opens 6:30am; Top of Community Rack ; Left of Door",
    address: "3019 E Augusta Ave, Spokane, WA 99202, USA",
    lat: 47.672768,
    lng: -117.3904033,
    locationName: "Jaxs"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJnbvbE_8cnlQR1amQ7SSD8Lc",
    edition: "EWA",
    notes: "Inside on waiting room table",
    address: "12710 US-395, Spokane, WA 99218, USA",
    lat: 47.7730115,
    lng: -117.4012051,
    locationName: "Grease Monkey"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJWfziElYcnlQR_F4umbo_5C8",
    edition: "EWA",
    notes: "Single EX rack outside w/ WCD",
    address: "12310 N Division St, Spokane, WA 99218, USA",
    lat: 47.7695848,
    lng: -117.4038197,
    locationName: "Union 76"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJhZaYalYcnlQRMewpIa-yz5g",
    edition: "EWA",
    notes: "Spokesman rack cubby between registers",
    address: "12315 N Division St, Spokane, WA 99218, USA",
    lat: 47.7698192,
    lng: -117.4053674,
    locationName: "Walgreens"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJcVgQ5GocnlQRXmsuw-70da8",
    edition: "EWA",
    notes: "Open 10:30am; Inside EX Rack ",
    address: "10125 N Division St #1306, Spokane, WA 99218, USA",
    lat: 47.749489,
    lng: -117.411711,
    locationName: "Zip's"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ7V3MjmocnlQRqRHdJwPDNM8",
    edition: "EWA",
    notes: "Tables",
    address: "10208 N Division St Suite 101, Spokane, WA 99218, USA",
    lat: 47.7501571,
    lng: -117.409889,
    locationName: "N. Spokane Auto Licensing"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJP4PBtEAcnlQRNGjuwLFQRdo",
    edition: "EWA",
    notes: "Inside Exchange single rack",
    address: "551 E Hawthorne Rd, Spokane, WA 99218, USA",
    lat: 47.7514799,
    lng: -117.4012998,
    locationName: "Providence Urgent Care"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJaRjnxz8cnlQRVrk0YURzGho",
    edition: "EWA",
    notes: "Inlander Community Rack ; 2 Pockets - South Door",
    address: "10100 N Newport Hwy, Spokane, WA 99218, USA",
    lat: 47.7504597,
    lng: -117.3972307,
    locationName: "Safeway"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJJcpdzhUcnlQRz-UhDJCX_xI",
    edition: "EWA",
    notes: "Shared rack; Opens 11am",
    address: "9606 N Newport Hwy, Spokane, WA 99218, USA",
    lat: 47.745844,
    lng: -117.402584,
    locationName: "Canaan Buffet"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJb8Kv2j0cnlQRevHMMuXYHUw",
    edition: "EWA",
    notes: "Counter inside door to right",
    address: "605 E Holland Ave #100, Spokane, WA 99218, USA",
    lat: 47.7448355,
    lng: -117.3997843,
    locationName: "Cancer Care Northwest"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJmbH2jBMcnlQRLh6talscLeU",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket ",
    address: "9414 N Division St, Spokane, WA 99218, USA",
    lat: 47.7435444,
    lng: -117.4095474,
    locationName: "Rosauers"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ9WQ0YxQcnlQRfQSrCaiZ2Tw",
    edition: "EWA",
    notes: "Single EX rack in Foyer; AC Rack",
    address: "9612 N Division St, Spokane, WA 99218, USA",
    lat: 47.745066,
    lng: -117.410733,
    locationName: "Napa Auto Parts"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJYX6A8A8cnlQRE-k7Kt2Dfuc",
    edition: "EWA",
    notes: "Inside Single black rack",
    address: "110 W Price Ave, Spokane, WA 99208, USA",
    lat: 47.7369191,
    lng: -117.4132439,
    locationName: "Spokane Fitness Center "
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJI1FO7qwenlQRoOL5eHnfraE",
    edition: "EWA",
    notes: " Inside Foyer EX double width double shelf Rack",
    address: "6720 N Division St, Spokane, WA 99208, USA",
    lat: 47.71993759999999,
    lng: -117.4086437,
    locationName: "Sportsman's Warehouse"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJX46uugMcnlQRuHFy51tnbCI",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "21 Lincoln Rd, Spokane, WA 99208, USA",
    lat: 47.7298611,
    lng: -117.4104384,
    locationName: "Osaka Buffet"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJLaYP_aoenlQRUtZCNJmAuIY",
    edition: "EWA",
    notes: "Double width EX rack; Opens 11am Max 160 (30)",
    address: "7117 N Division St, Spokane, WA 99208, USA",
    lat: 47.7237703,
    lng: -117.4120047,
    locationName: "Golden Corral"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJAVPYiFIZnlQR0inQyk_Wd_8",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "6429 N Division St, Spokane, WA 99208, USA",
    lat: 47.7166256,
    lng: -117.4121142,
    locationName: "Moon's Mongolian Grill "
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ80AAnVAZnlQRaqPjlJibLMQ",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 pocket",
    address: "902 W Francis Ave, Spokane, WA 99205, USA",
    lat: 47.7161466,
    lng: -117.424458,
    locationName: "Safeway"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ4QKZQloZnlQRanRIE3vKFKw",
    edition: "EWA",
    notes: "Top basket of wine rack in foyer",
    address: "1018 W Francis Ave, Spokane, WA 99205, USA",
    lat: 47.7155441,
    lng: -117.4264788,
    locationName: "Swinging Doors"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJuaKTvV4ZnlQRrJ5JmkwmIxw",
    edition: "EWA",
    notes: "Top Yellow NW Rack; In window against rack",
    address: "1604 W Francis Ave, Spokane, WA 99205, USA",
    lat: 47.71591359999999,
    lng: -117.4354962,
    locationName: "Zip's"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJqe3dz1gZnlQRDLjFg524vTg",
    edition: "EWA",
    notes: "Single EX Rack inside",
    address: "6607 N Maple St, Spokane, WA 99208, USA",
    lat: 47.7181837,
    lng: -117.4355468,
    locationName: "Christian Thrift"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ9cWy5F4ZnlQRJJowzz_cnhs",
    edition: "EWA",
    notes: "Inlander Store Rack; 1 Long Pocket",
    address: "1724 W Francis Ave, Spokane, WA 99205, USA",
    lat: 47.7166479,
    lng: -117.4375018,
    locationName: "Rosauers"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJnYgLVV4ZnlQR1HHCirpXIUE",
    edition: "EWA",
    notes: "Open 10am; Use Inlander rack ",
    address: "1812 W Francis Ave, Spokane, WA 99205, USA",
    lat: 47.716493,
    lng: -117.438667,
    locationName: "Das Stein Haus"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ7-HotF8ZnlQR0QTXsYgFejU",
    edition: "EWA",
    notes: "Table by chairs on left.; Opens 8am",
    address: "Spokane, WA 99205, USA",
    lat: 47.7164399,
    lng: -117.4401819,
    locationName: "Wash & Dry"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJA9FSZtcbnlQR-91ON4g__jY",
    edition: "EWA",
    notes: "Inlander Store Rack; 1 Pocket",
    address: "3321 W Indian Trail Rd, Spokane, WA 99208, USA",
    lat: 47.7170225,
    lng: -117.4616349,
    locationName: "Yokes Pac & Save"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJO02_9K8bnlQR2FGkGU7ank4",
    edition: "EWA",
    notes: "Inlander Store Rack 1 Pocket",
    address: "9001 N Indian Trail Rd, Spokane, WA 99208, USA",
    lat: 47.739664,
    lng: -117.4885306,
    locationName: "Safeway"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJaSbIGIAZnlQRNu5cNv_hCyI",
    edition: "EWA",
    notes: "Single EX rack outside NEEDS WCD",
    address: "5611 N Driscoll Blvd, Spokane, WA 99205, USA",
    lat: 47.70976220000001,
    lng: -117.4710574,
    locationName: "Northwest Food Mart"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJU2qNwIUZnlQRGf3SHSVjuhE",
    edition: "EWA",
    notes: "Inside main entrance Double EX rack",
    address: "4815 N Assembly St, Spokane, WA 99205, USA",
    lat: 47.7027274,
    lng: -117.4765402,
    locationName: "Veteran's Hospital"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJa04eImUZnlQRCRiz73LcfsM",
    edition: "EWA",
    notes: "Shared rack inside",
    address: "5503 N Alberta St, Spokane, WA 99205, USA",
    lat: 47.70833330000001,
    lng: -117.4497222,
    locationName: "J.B. Foods"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJaezxvHMZnlQRazkyqPFG-eY",
    edition: "EWA",
    notes: "Inlander Store Rack; 1 Pocket",
    address: "2507 W Wellesley Ave, Spokane, WA 99205, USA",
    lat: 47.6989679,
    lng: -117.4483618,
    locationName: "Safeway"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJQfHqOnIZnlQRyLoQgSSeh8E",
    edition: "EWA",
    notes: "Single EX rack; ",
    address: "2215 W Wellesley Ave, Spokane, WA 99205, USA",
    lat: 47.69897539999999,
    lng: -117.4434667,
    locationName: "Laundry Land"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJqWiKAGgZnlQRvUE1-P5GnfU",
    edition: "EWA",
    notes: "Spokesman Rack",
    address: "1023 W Wellesley Ave, Spokane, WA 99205, USA",
    lat: 47.7005691,
    lng: -117.426643,
    locationName: "Nom Nom"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJK5DCgrMZnlQRTP1Qc3ek1iw",
    edition: "EWA",
    notes: "",
    address: "604 W Garland Ave, Spokane, WA 99205, USA",
    lat: 47.69357220000001,
    lng: -117.4209531,
    locationName: "Over the Moon Relics"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJUV2gSAAZnlQRuy7HfeYA2G8",
    edition: "EWA",
    notes: "",
    address: "811 W Garland Ave, Spokane, WA 99205, USA",
    lat: 47.6933219,
    lng: -117.4238591,
    locationName: "Garland Treasure Trove"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJt2pPRBsZnlQRRAYP8R13ibc",
    edition: "EWA",
    notes: "Outside Green Community Box Top Right Spot",
    address: "3039 N Monroe St, Spokane, WA 99205, USA",
    lat: 47.6860336,
    lng: -117.4268918,
    locationName: "Sure Save Grocery                                  "
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJp71HjqQZnlQRwxuVdXAcHAs",
    edition: "EWA",
    notes: "@ Gumballs on right",
    address: "2407 N Monroe St, Spokane, WA 99205, USA",
    lat: 47.6797836,
    lng: -117.4268923,
    locationName: "Mini Mart"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJfZ1fdvgYnlQR0ZN7DJ4rzj0",
    edition: "EWA",
    notes: "Community Rack inside front door; Manager: Josh",
    address: "1124 W Sinto Ave, Spokane, WA 99201, USA",
    lat: 47.6704217,
    lng: -117.4293104,
    locationName: "Sinto Senior Center"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ9T3_UaYZnlQR9F4nrm3ZXn4",
    edition: "EWA",
    notes: "Outside EX rack",
    address: "2202 N Monroe St, Spokane, WA 99205, USA",
    lat: 47.6779727,
    lng: -117.4262056,
    locationName: "Monroe Quick Stop 76"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJQ6qsgQIZnlQREaF_Fn7PJP4",
    edition: "EWA",
    notes: "Top Cubby Community Rack",
    address: "2424 N Monroe St, Spokane, WA 99205, USA",
    lat: 47.680186,
    lng: -117.426321,
    locationName: "Green Hand"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJG0D_PfkYnlQRMXjOnosJC0Y",
    edition: "EWA",
    notes: "Counter",
    address: "2510 N Monroe St, Spokane, WA 99205, USA",
    lat: 47.6806904,
    lng: -117.4263295,
    locationName: "NAPA"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJB1ZEEBsZnlQRwSGtdqOK7YE",
    edition: "EWA",
    notes: "Inside EX Rack",
    address: "3204 N Monroe St, Spokane, WA 99205, USA",
    lat: 47.6873416,
    lng: -117.4263899,
    locationName: "Zips"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ-_TJlf4YnlQRqvZtP6LxMO8",
    edition: "EWA",
    notes: "Inside Green Community Rack",
    address: "1018 W Northwest Blvd, Spokane, WA 99205, USA",
    lat: 47.6756822,
    lng: -117.4275588,
    locationName: "Zip's Drive Inn"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJMX4V-AAZnlQRVrgPLn7yS44",
    edition: "EWA",
    notes: "Inlander Community Rack ; 2 pockets; West door MAX 100!",
    address: "1616 W Northwest Blvd, Spokane, WA 99205, USA",
    lat: 47.6806221,
    lng: -117.4361099,
    locationName: "Safeway"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJLdNKcKgZnlQRYm7tQ9za3MM",
    edition: "EWA",
    notes: "Inside Inlander Rack",
    address: "2418 W Northwest Blvd, Spokane, WA 99205, USA",
    lat: 47.6847213,
    lng: -117.4470958,
    locationName: "Papa Murphy's"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJVVVVVXIZnlQRRp1YvPn3Ddc",
    edition: "EWA",
    notes: "Inside Foyer",
    address: "2610 W Northwest Blvd, Spokane, WA 99205, USA",
    lat: 47.6859932,
    lng: -117.4499581,
    locationName: "Tecate Grill"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJNZfeL6IZnlQR8Ya63ifGUUo",
    edition: "EWA",
    notes: "Inside Single EX",
    address: "3318 W Northwest Blvd, Spokane, WA 99205, USA",
    lat: 47.6904985,
    lng: -117.4602518,
    locationName: "Flying Goat"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJdXocwqkZnlQRiSKBxKUdKn0",
    edition: "EWA",
    notes: "Community Rack",
    address: "2103 W Northwest Blvd, Spokane, WA 99205, USA",
    lat: 47.6824255,
    lng: -117.4437368,
    locationName: "Nom Nom"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ8fvrbFUYnlQRYpu_LbxjMUA",
    edition: "EWA",
    notes: "Use bottom of Spokesman",
    address: "1924 N Ash St, Spokane, WA 99205, USA",
    lat: 47.675624,
    lng: -117.4367032,
    locationName: "Spokane Assoc Realtors"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJDyjaDFUYnlQRPEbV3bQnuis",
    edition: "EWA",
    notes: "Single EX Rack ",
    address: "1906 N Ash St, Spokane, WA 99205, USA",
    lat: 47.6751946,
    lng: -117.436842,
    locationName: "Towners Conoco"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJnTbuq1UYnlQREqo0iuf36a8",
    edition: "EWA",
    notes: "Single EX Rack",
    address: "1809 N Ash St, Spokane, WA 99205, USA",
    lat: 47.6742782,
    lng: -117.4372182,
    locationName: "Texaco"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJp3Y7TVQYnlQRbz8Y0mKx0b4",
    edition: "EWA",
    notes: "Inside Single EX w/WCD",
    address: "1725 N Ash St, Spokane, WA 99205, USA",
    lat: 47.673661,
    lng: -117.4373341,
    locationName: "The Laundry Room"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJB0BgZ0oZnlQRzz2Xrper-xA",
    edition: "EWA",
    notes: "Community rack 1 pocket",
    address: "1603 N Belt St, Spokane, WA 99205, USA",
    lat: 47.67253639999999,
    lng: -117.4435663,
    locationName: "West Central Comm. Center"
  },
  {
    route: "Northwest Spokane",
    placeId: "ChIJ5yQBz1EYnlQRKwKz3ycqd9s",
    edition: "EWA",
    notes: "Gumball machine left.",
    address: "2040 W Boone Ave, Spokane, WA 99201, USA",
    lat: 47.6683104,
    lng: -117.4430301,
    locationName: "Bongs Grocery"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJZYOrCADfnlQRGuvREKCm5VQ",
    edition: "EWA",
    notes: "under bottom beverage shelf",
    address: "102 W Galbreath Way, Ritzville, WA 99169, USA",
    lat: 47.1177733,
    lng: -118.3687836,
    locationName: "Circle K"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJG2V4T2HenlQRn92T3Pzhp1k",
    edition: "EWA, WML, IND",
    notes: "Inside Small EX rack west end by Booths; Wenatchee/Moses Lake Exchange; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "1503 Smittys Blvd, Ritzville, WA 99169, USA",
    lat: 47.11945,
    lng: -118.365341,
    locationName: "Zip's"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJw-N05n3enlQRP4yhXuoZPk8",
    edition: "EWA, WML",
    notes: "On Shelf Right of Door",
    address: "108 W 1st Ave, Ritzville, WA 99169, USA",
    lat: 47.1259685,
    lng: -118.3787409,
    locationName: "Ace Hardware"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJ2WQnWYbenlQROXfna9iXeDQ",
    edition: "EWA, WML, IND",
    notes: "Inlander Rack in Entry to Left; Wenatchee/Moses Lake Exchange; 1.5 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "610 W 1st Ave, Ritzville, WA 99169, USA",
    lat: 47.122795,
    lng: -118.3826979,
    locationName: "Akins Harvest Foods"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJF5QPGX7enlQRYu09Czb8gMM",
    edition: "EWA, WML",
    notes: "15 Max on counter; Wenatchee/Moses Lake Exchange",
    address: "1508 W 1st Ave, Ritzville, WA 99169, USA",
    lat: 47.11649449999999,
    lng: -118.3899367,
    locationName: "Texaco"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJodBviY_enlQRgkUWcSmDQ1Q",
    edition: "EWA, WML",
    notes: "SINGLE EX RACK ENTRY; Wenatchee/Moses Lake Exchange",
    address: "1604 W 1st Ave, Ritzville, WA 99169, USA",
    lat: 47.1160396,
    lng: -118.3906202,
    locationName: "Jakes"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJd-u0DzbknlQRLSOa6CLR1Vs",
    edition: "EWA, WML",
    notes: "***Tokio Weigh Station exit***(Outside rack); Wenatchee/Moses Lake Exchange",
    address: "2008 Durry Rd, Sprague, WA 99032, USA",
    lat: 47.2091291,
    lng: -118.2268261,
    locationName: "Big B's Truck Stop "
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJFX3iNED4nlQRX6X9BrtcoQ8",
    edition: "EWA, WML",
    notes: "By counter at  exit door; Wenatchee/Moses Lake Exchange",
    address: "298 W 1st St, Sprague, WA 99032, USA",
    lat: 47.299929,
    lng: -117.9773479,
    locationName: "Kathy's Family Food"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJGZfP_Wn4nlQRbGbkEaPIUhw",
    edition: "EWA, WML",
    notes: "Inside on counter to left; Wenatchee/Moses Lake Exchange",
    address: "316 Colfax St, Sprague, WA 99032, USA",
    lat: 47.29783729999999,
    lng: -117.9733479,
    locationName: "Chevron, Sprague Grange"
  },
  {
    route: "Ritzville/ Sprague",
    placeId: "ChIJPR6yAWr4nlQRTnlCfRMQHnM",
    edition: "EWA, WML",
    notes: "CLOSES AT 3; Wenatchee/Moses Lake Exchange",
    address: "209 E 4th St, Sprague, WA 99032, USA",
    lat: 47.2983661,
    lng: -117.9733946,
    locationName: "Viking Drive-Inn"
  },
  {
    route: "Okanagan",
    placeId: "ChIJl89QreptnlQRxJRMo7BG7mc",
    edition: "EWA, IND",
    notes: "1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "140 S Lake St, Reardan, WA 99029, USA",
    lat: 47.6687873,
    lng: -117.8804513,
    locationName: "Reardan Store"
  },
  {
    route: "Okanagan",
    placeId: "ChIJiStGO3N7nlQRi5xDQy4VfD0",
    edition: "EWA",
    notes: "",
    address: "306 Morgan St, Davenport, WA 99122, USA",
    lat: 47.6543134,
    lng: -118.1455013,
    locationName: "Scott's Les Schwab"
  },
  {
    route: "Okanagan",
    placeId: "ChIJAeODPHN7nlQRr6C4I0AGgnU",
    edition: "EWA",
    notes: "Angle Iron Exchange Rack",
    address: "300 Morgan St, Davenport, WA 99122, USA",
    lat: 47.6541641,
    lng: -118.1467088,
    locationName: "Cenex"
  },
  {
    route: "Okanagan",
    placeId: "ChIJa5YAC3N7nlQRJVxyFtJcaT8",
    edition: "EWA, IND",
    notes: "1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "516 Morgan St, Davenport, WA 99122, USA",
    lat: 47.65429959999999,
    lng: -118.1494455,
    locationName: "Family Foods"
  },
  {
    route: "Okanagan",
    placeId: "ChIJzSbvmHN7nlQRFxACpCpfWwQ",
    edition: "EWA",
    notes: "Prefers to pick them up directly from driver",
    address: "1505 12th St, Davenport, WA 99122, USA",
    lat: 47.6453242,
    lng: -118.157089,
    locationName: "Stockland"
  },
  {
    route: "Okanagan",
    placeId: "ChIJS7LV0HZ7nlQR-JJYLrGW6Z8",
    edition: "EWA",
    notes: "",
    address: "1131 Morgan St, Davenport, WA 99122, USA",
    lat: 47.65385939999999,
    lng: -118.1572537,
    locationName: "Exxon"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ45xFJ3d7nlQRgNGhAdBPRDs",
    edition: "EWA, IND",
    notes: "1 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "1220 Morgan St, Davenport, WA 99122, USA",
    lat: 47.6546584,
    lng: -118.1581408,
    locationName: "Safeway"
  },
  {
    route: "Okanagan",
    placeId: "ChIJHbPNIcIrnFQRzx0huuzdVYE",
    edition: "EWA",
    notes: "4 Shelf Exchange Rack",
    address: "100 N W Watson St, Creston, WA 99117, USA",
    lat: 47.7588219,
    lng: -118.5202282,
    locationName: "Corner Cafe"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ2YI1s28vnFQRobzT99K75pM",
    edition: "EWA",
    notes: "Bag if not open",
    address: "545 NE Main Ave, Wilbur, WA 99185, USA",
    lat: 47.7580102,
    lng: -118.6952792,
    locationName: "Hazel's Barber & Style Shop"
  },
  {
    route: "Okanagan",
    placeId: "ChIJo9I9apovnFQR1D50UKUY6Ig",
    edition: "EWA",
    notes: "Bag if not open",
    address: "804 SE Main Street, Wilbur, WA 99185, USA",
    lat: 47.7574419,
    lng: -118.6990276,
    locationName: "Billy Burger Drive In"
  },
  {
    route: "Okanagan",
    placeId: "ChIJJdV0SWUvnFQRtFO0ct-6ODw",
    edition: "EWA",
    notes: "Outside Rack",
    address: "314 W Main Ave, Wilbur, WA 99185, USA",
    lat: 47.7591925,
    lng: -118.7088499,
    locationName: "Conoco Grocery"
  },
  {
    route: "Okanagan",
    placeId: "ChIJZ2Y_9XsvnFQRHSKNcuXEKZQ",
    edition: "EWA",
    notes: "",
    address: "509 NW Main Ave St, Wilbur, WA 99185, USA",
    lat: 47.7601546,
    lng: -118.7108349,
    locationName: "Sandy's Bakery & Deli Thrift"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ9X9rBnwvnFQRK6Lvzz0EgjY",
    edition: "EWA",
    notes: "In Entryway",
    address: "Wilbur, WA 99185, USA",
    lat: 47.760169,
    lng: -118.711432,
    locationName: "Doxie's Dine-In"
  },
  {
    route: "Okanagan",
    placeId: "ChIJZaHuFAlHnFQRH_neex5V_84",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "515 E Grand Coulee Ave, Grand Coulee, WA 99133, USA",
    lat: 47.9334922,
    lng: -118.989891,
    locationName: "Lapresa Mexican Restaurant"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ54xpdyhHnFQRKhYmSqZm3rQ",
    edition: "EWA, WML",
    notes: "Community Rack; Wenatchee Moses Lake Exchange",
    address: "119 Coulee Blvd, Electric City, WA 99123, USA",
    lat: 47.9335557,
    lng: -119.0361786,
    locationName: "A & S Grocery"
  },
  {
    route: "Okanagan",
    placeId: "ChIJd_j05gJHnFQRr--Fba34Dyw",
    edition: "EWA",
    notes: "EX Rack",
    address: "416 Midway Ave, Grand Coulee, WA 99133, USA",
    lat: 47.94110690000001,
    lng: -119.0072728,
    locationName: "BEST Coulee Hardware"
  },
  {
    route: "Okanagan",
    placeId: "ChIJcRYiSwJHnFQRjJAa_-CDc1o",
    edition: "EWA",
    notes: "MAX 50; No Target Rack - Shelf",
    address: "320 Midway Ave, Grand Coulee, WA 99133, USA",
    lat: 47.9415895,
    lng: -119.0055335,
    locationName: "Safeway                                       "
  },
  {
    route: "Okanagan",
    placeId: "ChIJZ4k5SgJHnFQR7m7pyuZl_7Q",
    edition: "EWA",
    notes: "Inside Community",
    address: "212 Midway Ave, Grand Coulee, WA 99133, USA",
    lat: 47.9416749,
    lng: -119.0038425,
    locationName: "Coulee Gas"
  },
  {
    route: "Okanagan",
    placeId: "ChIJdXmCDaRHnFQRhLlNTaw2T6Q",
    edition: "EWA",
    notes: "",
    address: "2 Okanogan Ave, Coulee Dam, WA 99116, USA",
    lat: 47.96160099999999,
    lng: -118.98658,
    locationName: "Jack's Chevron"
  },
  {
    route: "Okanagan",
    placeId: "ChIJt8b8EohTnFQRXjjNEM3yajc",
    edition: "EWA",
    notes: "",
    address: "250 WA- 155, 3 Lakes Ave, Nespelem, WA 99155, USA",
    lat: 48.1315014,
    lng: -118.9766255,
    locationName: "The Trading Post Store                                        "
  },
  {
    route: "Okanagan",
    placeId: "ChIJidPoFHFUnFQRXiRk611S2gw",
    edition: "EWA",
    notes: " EX Angle Iron Rack; 200 Max",
    address: "4440 WA-155, Nespelem, WA 99155, USA",
    lat: 48.1642052,
    lng: -118.978608,
    locationName: "Jackson's Chevron"
  },
  {
    route: "Okanagan",
    placeId: "ChIJpw09OgDpnFQRt8C8_zOznXg",
    edition: "EWA, WML",
    notes: "Maximum 100 with Inserts; Wenatchee Moses Lake Exchange",
    address: "702 Omak Ave, Omak, WA 98841, USA",
    lat: 48.4052041,
    lng: -119.5158298,
    locationName: "Conoco"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ7-_6jqvpnFQRwdaOSsqEkTU",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "Omak, WA 98841, USA",
    lat: 48.3988899,
    lng: -119.5241891,
    locationName: "Tribal Trails"
  },
  {
    route: "Okanagan",
    placeId: "ChIJRw3JFPyjnFQRCT8QtCv2W2Y",
    edition: "EWA, WML",
    notes: "75 Max; Wenatchee Moses Lake Exchange",
    address: "410 E Methow Valley Hwy, Twisp, WA 98856, USA",
    lat: 48.3600779,
    lng: -120.1192941,
    locationName: "Hank's Mini Mart"
  },
  {
    route: "Okanagan",
    placeId: "ChIJbVXblvyjnFQRSKzCWbYoRNA",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "412 E Methow Valley Hwy, Twisp, WA 98856, USA",
    lat: 48.359469,
    lng: -120.118468,
    locationName: "Hank's Market"
  },
  {
    route: "Okanagan",
    placeId: "ChIJrd-mdZTrnFQRV9VdmKCMJyI",
    edition: "EWA, WML",
    notes: "",
    address: "310 2nd Ave S, Okanogan, WA 98840, USA",
    lat: 48.3630753,
    lng: -119.5834971,
    locationName: "Okanogan IGA"
  },
  {
    route: "Okanagan",
    placeId: "ChIJfd7yej7rnFQRUJUFWfQMo0g",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "205 2nd Ave N, Okanogan, WA 98840, USA",
    lat: 48.3648803,
    lng: -119.5799498,
    locationName: "76"
  },
  {
    route: "Okanagan",
    placeId: "ChIJp9gLJ2XpnFQRQkSYStpisw4",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "2406 Elmway St, Okanogan, WA 98840, USA",
    lat: 48.3867528,
    lng: -119.5533405,
    locationName: "Okanogan Food Center"
  },
  {
    route: "Okanagan",
    placeId: "ChIJgyB_aqzpnFQRLBS3lCz3Rbk",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "22 Apple Ave W, Omak, WA 98841, USA",
    lat: 48.4124175,
    lng: -119.5296366,
    locationName: "Gene's Harvest Foods"
  },
  {
    route: "Okanagan",
    placeId: "ChIJy8kcPK3pnFQRjn7W5Sp5QlA",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "3 Dewberry Ave W, Omak, WA 98841, USA",
    lat: 48.4149993,
    lng: -119.528078,
    locationName: "Omak Feed & Supply "
  },
  {
    route: "Okanagan",
    placeId: "ChIJ5yIvrVDonFQRi2Q-F8VQ4FI",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "Omak, WA 98841, USA",
    lat: 48.416383,
    lng: -119.510167,
    locationName: "Food Mart Travel Plaza"
  },
  {
    route: "Okanagan",
    placeId: "ChIJfXo3BVronFQRS-iQFSEMgz0",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "803 Riverside Dr, Omak, WA 98841, USA",
    lat: 48.41707299999999,
    lng: -119.510116,
    locationName: "Chevron"
  },
  {
    route: "Okanagan",
    placeId: "ChIJDSy_UmnonFQR3UY9Q2uYvu4",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "1227 Koala Dr, Omak, WA 98841, USA",
    lat: 48.43024459999999,
    lng: -119.4973492,
    locationName: "North 40 Outfitters"
  },
  {
    route: "Okanagan",
    placeId: "ChIJXT6vfOHcnFQRNYv510wKV40",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "107 N Main St, Riverside, WA 98849, USA",
    lat: 48.5027008,
    lng: -119.5069732,
    locationName: "Detros Western "
  },
  {
    route: "Okanagan",
    placeId: "ChIJacvDSbcpnVQRWjHysIavvZk",
    edition: "EWA, WML",
    notes: "NEEDS RACK; Wenatchee Moses Lake Exchange",
    address: "589-501 S Tonasket Ave, Tonasket, WA 98855, USA",
    lat: 48.7028091,
    lng: -119.4418666,
    locationName: "Tonasket Food Mart"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ3_5IUropnVQR1C7SV4qASZI",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "210 S Western Avernue, Tonasket, WA 98855, USA",
    lat: 48.7066311,
    lng: -119.4401017,
    locationName: "Tonasket Feed & Supply "
  },
  {
    route: "Okanagan",
    placeId: "ChIJfyR_v6QpnVQRnILUx-KZIus",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "212 N Hwy 97 Tonasket, WA 98855, Tonasket, WA 98855, USA",
    lat: 48.7095878,
    lng: -119.4356864,
    locationName: "Beyers Market Floral Design"
  },
  {
    route: "Okanagan",
    placeId: "ChIJY6j8gqQpnVQR_HHgqSKTyPc",
    edition: "EWA, WML",
    notes: "Check if open July 1; Wenatchee Moses Lake Exchange",
    address: "312 US-97, Tonasket, WA 98855, USA",
    lat: 48.710625,
    lng: -119.4358833,
    locationName: "Rancho Grande"
  },
  {
    route: "Okanagan",
    placeId: "ChIJLQtzfjfOglQRrcB1dsCnThI",
    edition: "EWA",
    notes: "",
    address: "1000 23rd Ave, Oroville, WA 98844, USA",
    lat: 48.9472957,
    lng: -119.4368168,
    locationName: "Country Store"
  },
  {
    route: "Okanagan",
    placeId: "ChIJk6IUHQDPglQRQ-ZWtDNNVx0",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "1204 Main St, Oroville, WA 98844, USA",
    lat: 48.9364476,
    lng: -119.4377878,
    locationName: "Frontier Foods"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ4W24TrcpnVQRvYfl-6CChvU",
    edition: "EWA, WML",
    notes: "Wenatchee Moses Lake Exchange",
    address: "509 S Whitcomb Ave, Tonasket, WA 98855, USA",
    lat: 48.70294930000001,
    lng: -119.4406964,
    locationName: "Junction Mobil"
  },
  {
    route: "Okanagan",
    placeId: "ChIJMRRcwmlqnVQRzIQeuzOF3QA",
    edition: "EWA",
    notes: "",
    address: "711 S Clark Ave, Republic, WA 99166, USA",
    lat: 48.6465842,
    lng: -118.7381424,
    locationName: "Anderson's Grocery"
  },
  {
    route: "Okanagan",
    placeId: "ChIJVZoWe0JqnVQRFCVRl_LRG2g",
    edition: "EWA",
    notes: "",
    address: "754 S Clark Ave, Republic, WA 99166, USA",
    lat: 48.6461316,
    lng: -118.7373288,
    locationName: "Wild West Farm & Garden"
  },
  {
    route: "Okanagan",
    placeId: "ChIJYTFs-UJqnVQRGvsw0veZvos",
    edition: "EWA",
    notes: "",
    address: "970 S Clark Ave, Republic, WA 99166, USA",
    lat: 48.6441475,
    lng: -118.7371844,
    locationName: "Republic Market"
  },
  {
    route: "Okanagan",
    placeId: "ChIJlRa0cMZunVQRDlH0N_3HSZI",
    edition: "EWA",
    notes: "",
    address: "30267 State Rte 20, Republic, WA 99166, USA",
    lat: 48.64087509999999,
    lng: -118.7338507,
    locationName: "Chevron"
  },
  {
    route: "Okanagan",
    placeId: "ChIJ5VnG_4hpnVQRFojYb5K2EdM",
    edition: "EWA",
    notes: "",
    address: "16267 WA-21, Republic, WA 99166, USA",
    lat: 48.6510877,
    lng: -118.6848221,
    locationName: "Pine Grove Junction"
  },
  {
    route: "Palouse",
    placeId: "ChIJUUHbUqshnlQRNhINv4RCbYo",
    edition: "EWA",
    notes: "Outside front door, Single EX",
    address: "10620 E 16th Ave, Spokane, WA 99206, USA",
    lat: 47.64221999999999,
    lng: -117.2618115,
    locationName: "Exxon"
  },
  {
    route: "Palouse",
    placeId: "ChIJk-WhQBghnlQREg5Wj-DDYVg",
    edition: "EWA",
    notes: "Inlander store rack; 1 short pocket north door",
    address: "11205 E Dishman-Mica Frontage Rd, Spokane Valley, WA 99206, USA",
    lat: 47.6199012,
    lng: -117.2535264,
    locationName: "Harvest Foods"
  },
  {
    route: "Palouse",
    placeId: "ChIJG0Xf8SIhnlQRzNGKdDkmBLA",
    edition: "EWA",
    notes: "Shared community rack",
    address: "11504 E Dishman Mica Rd, Spokane, WA 99206, USA",
    lat: 47.6176198,
    lng: -117.2502101,
    locationName: "Chester Store / 76"
  },
  {
    route: "Palouse",
    placeId: "ChIJHSem2ekgnlQR31Yj1UnwoFM",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 extended Pocket 80 MAX",
    address: "13606 E 32nd Ave, Spokane, WA 99216, USA",
    lat: 47.6259668,
    lng: -117.2226442,
    locationName: "Safeway                                           "
  },
  {
    route: "Palouse",
    placeId: "ChIJFxJk_eclnlQRpovcf_HIHxY",
    edition: "EWA",
    notes: "Stack on Counter",
    address: "12809 S Madison Rd, Valleyford, WA 99036, USA",
    lat: 47.53688059999999,
    lng: -117.2381705,
    locationName: "Valleyford Post Office"
  },
  {
    route: "Palouse",
    placeId: "ChIJgfyPaKkonlQRFu1tqkeJjg8",
    edition: "EWA",
    notes: "Shared rack outside front door",
    address: "14510 WA-27, Valleyford, WA 99036, USA",
    lat: 47.52153939999999,
    lng: -117.1969654,
    locationName: "Freeman Store                                  "
  },
  {
    route: "Palouse",
    placeId: "ChIJ_W_aQTopnlQRX-VHy0AHEM4",
    edition: "EWA",
    notes: "Counter",
    address: "18805 S WA-27, Rockford, WA 99030, USA",
    lat: 47.4831504,
    lng: -117.1466903,
    locationName: "Golden Gem Mercantile                                         "
  },
  {
    route: "Palouse",
    placeId: "ChIJE0v0lvgrnlQRgRNrv4YsVZk",
    edition: "EWA",
    notes: "Single EX right inside door",
    address: "20 S 1st St, Rockford, WA 99030, USA",
    lat: 47.4517625,
    lng: -117.1323155,
    locationName: "Harvest Moon                             "
  },
  {
    route: "Palouse",
    placeId: "ChIJT7C2hwcsnlQRlIQ2p6b5Ypg",
    edition: "EWA",
    notes: "Shared rack inside east door",
    address: "216 S 1st St, Rockford, WA 99030, USA",
    lat: 47.4502595,
    lng: -117.1320963,
    locationName: "Rockford Mini Mart                                          "
  },
  {
    route: "Palouse",
    placeId: "ChIJtxIkPvPPn1QRCrvRw6a3sUk",
    edition: "EWA",
    notes: "Shared shelf by door",
    address: "138 Crosby St, Tekoa, WA 99033, USA",
    lat: 47.2238316,
    lng: -117.0727684,
    locationName: "Tekoa Market                              "
  },
  {
    route: "Palouse",
    placeId: "ChIJ60V35orPn1QRLDNatYtiaGo",
    edition: "EWA",
    notes: "Shared shelf at register",
    address: "102 S Crosby St, Tekoa, WA 99033, USA",
    lat: 47.2230573,
    lng: -117.0728441,
    locationName: "Tekoa True Value Hardware                           "
  },
  {
    route: "Palouse",
    placeId: "ChIJM2JSfYrPn1QRqgPwFn9AvcY",
    edition: "EWA",
    notes: "",
    address: "101 S Crosby St, Tekoa, WA 99033, USA",
    lat: 47.22293669999999,
    lng: -117.0732532,
    locationName: "Tekoa Post Office                               "
  },
  {
    route: "Palouse",
    placeId: "ChIJ7VkaSo24n1QREOQ8UMftJ2I",
    edition: "EWA",
    notes: "Shared rack bottom shelf near checker",
    address: "101 N 1st St, Oakesdale, WA 99158, USA",
    lat: 47.1284489,
    lng: -117.2422913,
    locationName: "Crossett's Market                                      "
  },
  {
    route: "Palouse",
    placeId: "ChIJL4pAQw6Vn1QRUOeF2if8N-8",
    edition: "EWA",
    notes: "Outside under EX brick on Daily News box",
    address: "302 W California St, Garfield, WA 99130, USA",
    lat: 47.0080337,
    lng: -117.1412951,
    locationName: "Garfield Post Office "
  },
  {
    route: "Palouse",
    placeId: "ChIJIVDRPg6Vn1QR9DiYaqEl_eM",
    edition: "EWA",
    notes: "",
    address: "210 W California St, Garfield, WA 99130, USA",
    lat: 47.0080145,
    lng: -117.1406041,
    locationName: "Schaut's Market"
  },
  {
    route: "Palouse",
    placeId: "ChIJ8X4tCkOSn1QRsaywR3hubBM",
    edition: "EWA, LCV",
    notes: "Single EX outside entrance; LC Valley Edition",
    address: "215 E Main St, Palouse, WA 99161, USA",
    lat: 46.9095729,
    lng: -117.0750621,
    locationName: "Palouse Market                              "
  },
  {
    route: "Palouse",
    placeId: "ChIJA8Z4EkOSn1QRMDyQS0wZGFA",
    edition: "EWA",
    notes: "Stack on Counter",
    address: "300 E Main St, Palouse, WA 99161, USA",
    lat: 46.9101321,
    lng: -117.0743842,
    locationName: "Palouse Post Office"
  },
  {
    route: "Palouse",
    placeId: "ChIJ4Y7tcAucn1QR24W6jq8IwiM",
    edition: "EWA",
    notes: "Shared window sill",
    address: "610 S Main St, Colfax, WA 99111, USA",
    lat: 46.8756031,
    lng: -117.3653849,
    locationName: "Ace Hardware"
  },
  {
    route: "Palouse",
    placeId: "ChIJa-UZB_mbn1QRGLdoxPnYHmk",
    edition: "EWA, LCV",
    notes: "Opens 6am; Shared rack Top Shelf; LC Valley Edition",
    address: "632 N Main St, Colfax, WA 99111, USA",
    lat: 46.8869057,
    lng: -117.3635798,
    locationName: "Rosauers"
  },
  {
    route: "Palouse",
    placeId: "ChIJ2TlmRvmbn1QRXC5cMRG8Ruw",
    edition: "EWA, LCV",
    notes: "Counter to Right of Door; LC Valley Edition",
    address: "804 N Main St, Colfax, WA 99111, USA",
    lat: 46.88903010000001,
    lng: -117.3639366,
    locationName: "Cougar Food Mart                          "
  },
  {
    route: "Palouse",
    placeId: "ChIJBWqKrP6bn1QR3XD9ZuW36xc",
    edition: "EWA",
    notes: "; Opens at 11 leave bag at door",
    address: "902 N Main St, Colfax, WA 99111, USA",
    lat: 46.889798,
    lng: -117.363837,
    locationName: "Zips                                           "
  },
  {
    route: "Palouse",
    placeId: "ChIJoxXMOfibn1QR8TbuNgXpW8M",
    edition: "EWA, LCV",
    notes: "Shared rack inside door; LC Valley Edition",
    address: "113 W Walla Walla Hwy, Colfax, WA 99111, USA",
    lat: 46.89073519999999,
    lng: -117.363994,
    locationName: "Chevron                                        "
  },
  {
    route: "Palouse",
    placeId: "ChIJ5Wrqqdu1n1QRSRcMi4SdVMw",
    edition: "EWA, LCV",
    notes: "White Double EX rack by front door; LC Valley Edition",
    address: "610 S Whitman Ave, Rosalia, WA 99170, USA",
    lat: 47.2342448,
    lng: -117.3707281,
    locationName: "Rosalia Market                               "
  },
  {
    route: "Palouse",
    placeId: "ChIJBQ127982nlQR8cF0GLjGZDk",
    edition: "EWA",
    notes: "Opens 6am; Single EX by front door",
    address: "315 W Jennings Rd, Spangle, WA 99031, USA",
    lat: 47.4270047,
    lng: -117.3836421,
    locationName: "Spangle Food & Gas                                     "
  },
  {
    route: "Palouse",
    placeId: "ChIJ5f4uxNI2nlQRoWrOAJXPihM",
    edition: "EWA",
    notes: "Opens 8am; Yellow community rack in foyer",
    address: "410 W 1st St, Spangle, WA 99031, USA",
    lat: 47.42810230000001,
    lng: -117.3845413,
    locationName: "Harvester Restaurant                                     "
  },
  {
    route: "Palouse",
    placeId: "ChIJP-tNjh8jnlQRpJk2cc3AwbY",
    edition: "EWA",
    notes: " N. Door Inlander Store rack; 1 Long Pocket; 1 Short Pocket",
    address: "4235 Cheney Spokane Rd, Spokane, WA 99224, USA",
    lat: 47.61499449999999,
    lng: -117.4282758,
    locationName: "Yoke's                                           "
  },
  {
    route: "Palouse",
    placeId: "ChIJl4trivEjnlQRDKz2XQhC5pg",
    edition: "EWA",
    notes: "Shelf at register",
    address: "4017 Cheney Spokane Rd, Spokane, WA 99224, USA",
    lat: 47.61806459999999,
    lng: -117.4321162,
    locationName: "Nom Nom "
  },
  {
    route: "South Hill",
    placeId: "ChIJR07IBqgYnlQRX7dzCu7n-_0",
    edition: "EWA",
    notes: "Inside Community Rack",
    address: "228 S Thor St, Spokane, WA 99202, USA",
    lat: 47.6545261,
    lng: -117.3607069,
    locationName: "Mobil"
  },
  {
    route: "South Hill",
    placeId: "ChIJNes3cwginlQR1L4juV_FG7Q",
    edition: "EWA",
    notes: "Enclosed Red Auto Clipper Rack",
    address: "305 S Thor St, Spokane, WA 99202, USA",
    lat: 47.6532358,
    lng: -117.3599368,
    locationName: "Conoco"
  },
  {
    route: "South Hill",
    placeId: "ChIJ2WdU01winlQRCwDkkvEnXX0",
    edition: "EWA",
    notes: "Ex Single 1 shelf",
    address: "2903 E 29th Ave, Spokane, WA 99223, USA",
    lat: 47.628543,
    lng: -117.368285,
    locationName: "McDonalds"
  },
  {
    route: "South Hill",
    placeId: "ChIJz51xvl0inlQRatkJZMUsie8",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket EAST ENTRANCE",
    address: "2509 E 29th Ave, Spokane, WA 99223, USA",
    lat: 47.6295071,
    lng: -117.3747077,
    locationName: "Safeway"
  },
  {
    route: "South Hill",
    placeId: "ChIJ4YYX_40inlQRVOzIEsCKGQA",
    edition: "EWA",
    notes: "Bottom of Inlander ",
    address: "2918 S Grand Blvd #2530, Spokane, WA 99203, USA",
    lat: 47.6276383,
    lng: -117.4020562,
    locationName: "The Chalet"
  },
  {
    route: "South Hill",
    placeId: "ChIJCQPw0Y0inlQRZ3KJhWtp_M0",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket",
    address: "830 E 29th Ave, Spokane, WA 99203, USA",
    lat: 47.6270952,
    lng: -117.3993939,
    locationName: "Super 1 Foods"
  },
  {
    route: "South Hill",
    placeId: "ChIJp5NjyV0inlQRmWeM4M15zks",
    edition: "EWA",
    notes: "Bottom of Inlander ",
    address: "2530 E 29th Ave, Spokane, WA 99223, USA",
    lat: 47.627449,
    lng: -117.3741073,
    locationName: "Great Harvest"
  },
  {
    route: "South Hill",
    placeId: "ChIJZ67J5mMjnlQRhRgfgJjtB50",
    edition: "EWA",
    notes: "Single Exchange rack by other racks",
    address: "2512 E 29th Ave, Spokane, WA 99223, USA",
    lat: 47.6268673,
    lng: -117.3745864,
    locationName: "Natural Grocers"
  },
  {
    route: "South Hill",
    placeId: "ChIJuxWgv10inlQRPwyu8mCR9h4",
    edition: "EWA",
    notes: "Inside Bottom of Inlander Rack OPENS @ 11:00",
    address: "2522 E 29th Ave Suite 5, Spokane, WA 99223, USA",
    lat: 47.6271308,
    lng: -117.3741315,
    locationName: "Papa Murphy's"
  },
  {
    route: "South Hill",
    placeId: "ChIJxVuNTFwinlQRIZ9APfkpM3c",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 pocket",
    address: "2610 E 29th Ave, Spokane, WA 99223, USA",
    lat: 47.6273425,
    lng: -117.3730345,
    locationName: "Rosauers"
  },
  {
    route: "South Hill",
    placeId: "ChIJzV8Ll1winlQRdMYJ-ZJU44A",
    edition: "EWA",
    notes: "Inside Community Rack, opens at 10:00 ",
    address: "3024 S Regal St, Spokane, WA 99223, USA",
    lat: 47.626565,
    lng: -117.368906,
    locationName: "Senor Froggys"
  },
  {
    route: "South Hill",
    placeId: "ChIJP7MUgP8inlQRMk336UhDcSA",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "4416 S Regal St, Spokane, WA 99223, USA",
    lat: 47.6127944,
    lng: -117.3696333,
    locationName: "Ace Hardware"
  },
  {
    route: "South Hill",
    placeId: "ChIJTTtptQUjnlQRqBVy5tG0bHo",
    edition: "EWA",
    notes: "Inside Community Rack",
    address: "2820 E 57th Ave, Spokane, WA 99223, USA",
    lat: 47.6017209,
    lng: -117.3689616,
    locationName: "Nom Nom"
  },
  {
    route: "South Hill",
    placeId: "ChIJccG76wUjnlQRequGwbIN02w",
    edition: "EWA",
    notes: "Inlander Community Rack; 2 Pockets",
    address: "3010 E 57th Ave, Spokane, WA 99223, USA",
    lat: 47.6008533,
    lng: -117.367233,
    locationName: "Safeway"
  },
  {
    route: "South Hill",
    placeId: "ChIJ9dYcZd0jnlQR0FdiPxXiDkM",
    edition: "EWA",
    notes: "Exchnage Rack, inside to left 3 shelves",
    address: "3920 E 57th Ave, Spokane, WA 99223, USA",
    lat: 47.60154740000001,
    lng: -117.3515885,
    locationName: "Divine's Fasmart"
  },
  {
    route: "South Hill",
    placeId: "ChIJo6MX51winlQRrYeOrC0qBBg",
    edition: "EWA",
    notes: "Basket on Table in Entryway",
    address: "2911 E 57th Ave, Spokane, WA 99223, USA",
    lat: 47.60302000000001,
    lng: -117.368173,
    locationName: "South Hill Grill"
  },
  {
    route: "South Hill",
    placeId: "ChIJk7v9HwQjnlQRdW9yb7cok-4",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "5517 S Regal St, Spokane, WA 99223, USA",
    lat: 47.60336969999999,
    lng: -117.368012,
    locationName: "Morty's"
  },
  {
    route: "South Hill",
    placeId: "ChIJeSigZVUinlQRcC-N3KqcuIs",
    edition: "EWA",
    notes: "Inside Single Ex 2 shelves",
    address: "4501 S Regal St, Spokane, WA 99223, USA",
    lat: 47.6118803,
    lng: -117.3677846,
    locationName: "Conoco Gas Station"
  },
  {
    route: "South Hill",
    placeId: "ChIJ8ZmkWFsinlQR_0NEIQ7uucE",
    edition: "EWA",
    notes: "waiting area",
    address: "3105 S Regal St, Spokane, WA 99223, USA",
    lat: 47.62610590000001,
    lng: -117.3679261,
    locationName: "Les Schwabs"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJoX_mA_ofnlQRy5RkyFyoBzg",
    edition: "EWA",
    notes: "Inside EX Single Rack",
    address: "6203 E Mission Ave, Spokane, WA 99212, USA",
    lat: 47.671825,
    lng: -117.3204361,
    locationName: "American Recycling Office"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ-xtPFV8fnlQRAs5TN91G3M0",
    edition: "EWA",
    notes: "Community Rack Left of entry",
    address: "5821 E Broadway Ave, Spokane Valley, WA 99212, USA",
    lat: 47.66472729999999,
    lng: -117.3261547,
    locationName: "Chevron"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ7fBE7eAhnlQRNZIReAirEZ4",
    edition: "EWA",
    notes: "waiting area",
    address: "6320 E Alki Ave, Spokane Valley, WA 99212, USA",
    lat: 47.6618284,
    lng: -117.3188917,
    locationName: "Les Schwab"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ__9PNd4hnlQR9qZNL2Hl7q0",
    edition: "EWA",
    notes: "Inside Do not put on Spokesman papers",
    address: "6606 E Broadway Ave, Spokane, WA 99212, USA",
    lat: 47.6635881,
    lng: -117.3159552,
    locationName: "Jackson Pilot"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJy4LKRWAhnlQRJiI3261DX8U",
    edition: "EWA",
    notes: "Single EX Rack  ",
    address: "806 N Park Rd #101, Spokane Valley, WA 99212, USA",
    lat: 47.6643423,
    lng: -117.3035527,
    locationName: "Amerimart"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJvXJ7I-IhnlQR9KkBN6lRf5M",
    edition: "EWA",
    notes: "SINGLE Exchange Rack at Counter",
    address: "5820 E Alki Ave, Spokane Valley, WA 99212, USA",
    lat: 47.66176199999999,
    lng: -117.32603,
    locationName: "Royal Express"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ523TscIhnlQRfjRxkQSlN3E",
    edition: "EWA",
    notes: "Shelf by register",
    address: "7018 E Sprague Ave, Spokane, WA 99212, USA",
    lat: 47.6567608,
    lng: -117.3098683,
    locationName: "Conoco Food Mart"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJVevdEeghnlQRYfplgRReGDA",
    edition: "EWA",
    notes: "Exchange rack in entrance",
    address: "6902 E Appleway Blvd, Spokane Valley, WA 99212, USA",
    lat: 47.65574540000001,
    lng: -117.3119586,
    locationName: "Cottage Cafe"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ1Zv_1zQgnlQRoImvAUwQFT4",
    edition: "EWA",
    notes: "Place in waiting area",
    address: "9519 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6574834,
    lng: -117.2766826,
    locationName: "Discount Tire"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ_S3HK8shnlQRj7p4w_oIIAU",
    edition: "EWA",
    notes: "Inside Exchange Rack CLOSES 2PM",
    address: "9425 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.65733470000001,
    lng: -117.2777414,
    locationName: "Jenny's Cafe"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJGZSotUYgnlQR-0OyHMJ4hXA",
    edition: "EWA",
    notes: "Table by door",
    address: "9219 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6575116,
    lng: -117.280556,
    locationName: "Mike's Donuts"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ6aDlEsshnlQRZ7fSD9L6qqw",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "9219 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6576604,
    lng: -117.2807241,
    locationName: "Hico Village"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJG--mDDognlQRn7R16bBuF_U",
    edition: "EWA",
    notes: "Outdoor Wood Community Rack",
    address: "10304 E Broadway Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6639637,
    lng: -117.2664255,
    locationName: "Broadway Mini Mart"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJbaFCtUkgnlQReZAOCyF0lAM",
    edition: "EWA",
    notes: "Inside, On top of Garbage Can",
    address: "10516 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6566531,
    lng: -117.2637796,
    locationName: "McDonalds"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ7YoW50kgnlQR3FCIxdZDPhU",
    edition: "EWA",
    notes: "Place on several tables",
    address: "10312 E Sprague Ave, Spokane, WA 99206, USA",
    lat: 47.6565597,
    lng: -117.265949,
    locationName: "Les Schwabs"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ0dAMakggnlQR7a8Vcc2gzNw",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket + Shelf",
    address: "10618 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6553112,
    lng: -117.2622866,
    locationName: "Rosauers"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJW4OElEYgnlQR-KwHqoQWFGs",
    edition: "EWA",
    notes: "Inside Dining Room by West Door Exchange Rack",
    address: "11222 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.65674140000001,
    lng: -117.253434,
    locationName: "Zip's"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJcw3P2mkgnlQR4uTkjhk1CRA",
    edition: "EWA",
    notes: "Outside Exchange Rack Back Door",
    address: "12124 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.65688189999999,
    lng: -117.2412069,
    locationName: "Dave's Bar & Grill "
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJ042IEF0gnlQRHA_wmNQmN48",
    edition: "EWA",
    notes: "Outside Exchange Rack",
    address: "520 S Pines Rd, Spokane Valley, WA 99206, USA",
    lat: 47.6517999,
    lng: -117.2402649,
    locationName: "Exxon"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJWRdVrmkgnlQRLo_9RxpccP8",
    edition: "EWA",
    notes: "use space under Spokesman",
    address: "12312 E Sprague Ave, Spokane Valley, WA 99216, USA",
    lat: 47.6566511,
    lng: -117.2391146,
    locationName: "Walgreen's"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJu9Q8zQUgnlQRKv3fBoyJR5E",
    edition: "EWA",
    notes: "Outside Blue Box",
    address: "12309 E Mansfield Ave, Spokane Valley, WA 99216, USA",
    lat: 47.67788649999999,
    lng: -117.2390937,
    locationName: "Sam's Stop & Shop"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJsYHizWggnlQRlJQX8b2t3PQ",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "12622 E Sprague Ave, Spokane Valley, WA 99216, USA",
    lat: 47.6566215,
    lng: -117.2344408,
    locationName: "Conley's Place"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJR0dqMnAYnlQR13sg_m0q3bc",
    edition: "EWA",
    notes: "Inlander Community Rack; 1 Pocket 1 Shelf; WEST Entrance",
    address: "13014 E Sprague Ave, Spokane Valley, WA 99216, USA",
    lat: 47.6560339,
    lng: -117.2301024,
    locationName: "Yoke's"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJlQfa53ognlQRcfN_m9536ak",
    edition: "EWA",
    notes: "On right hand side of counter",
    address: "Opportunity Shopping Center , E, 13324 E Sprague Ave, Spokane Valley, WA 99216, USA",
    lat: 47.65607070000001,
    lng: -117.2259316,
    locationName: "Franz Bakery"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJY8zq0nsgnlQRT3XerbbClg8",
    edition: "EWA",
    notes: "West side; Community Rack",
    address: "13920 E Sprague Ave, Spokane Valley, WA 99216, USA",
    lat: 47.6567613,
    lng: -117.2173796,
    locationName: "Carl's Jr"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJT92N23sgnlQRGDHRm8PtD6I",
    edition: "EWA",
    notes: "Inlander Community Rack; 2 pockets; East Entrance",
    address: "14020 E Sprague Ave, Spokane, WA 99216, USA",
    lat: 47.6557637,
    lng: -117.2161308,
    locationName: "Safeway"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJAdl-QoLfYVMRk7_ZXGPQzRA",
    edition: "EWA",
    notes: "Inside Exchange Rack ",
    address: "15530 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.6561314,
    lng: -117.1951849,
    locationName: "DeLeon's Food"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJm0M3s4PfYVMRzDejp_VHlY4",
    edition: "EWA",
    notes: "Ex Rack",
    address: "15520 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.6559918,
    lng: -117.1955476,
    locationName: "Dollar Tree"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJa0olRoLfYVMRVm5tT5QQbi8",
    edition: "EWA",
    notes: "Second Shelf Community Rack",
    address: "15510 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.65593019999999,
    lng: -117.195974,
    locationName: "Walgreens"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJe2x3TZLfYVMREHT7DxjqoJ0",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "15118 E Indiana Ave, Spokane Valley, WA 99216, USA",
    lat: 47.670835,
    lng: -117.2009418,
    locationName: "Sportsman's Warehouse"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJGb8S55bfYVMR9Bx3yOiCjtU",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "15812 E Indiana Ave, Spokane Valley, WA 99216, USA",
    lat: 47.6689674,
    lng: -117.1920897,
    locationName: "CHAS Clinic"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJnTv65aLfYVMRMIrtfn-lFIk",
    edition: "EWA",
    notes: "West entrance by coffee shop",
    address: "16528 E Desmet Ct Suite A1200, Spokane Valley, WA 99216, USA",
    lat: 47.6668775,
    lng: -117.1805509,
    locationName: "Providence Health"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJGcEwAqvfYVMRA845g21cOg8",
    edition: "EWA",
    notes: "5:30-10:30; Bag if not open; Exchange Rack",
    address: "1201 N Barker Rd, Spokane Valley, WA 99016, USA",
    lat: 47.6684719,
    lng: -117.1545479,
    locationName: "RISE Donuts"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJRxaNCKvfYVMRN3rlODPDBNo",
    edition: "EWA",
    notes: "Exchange rack by Wendys entrance",
    address: "1201 N Barker Rd, Greenacres, WA 99016, USA",
    lat: 47.668323,
    lng: -117.1545629,
    locationName: "Conoco"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJMzv1vAbfYVMRksiXoRQge-U",
    edition: "EWA",
    notes: "Outside Exchange Rack",
    address: "18709 E Appleway Ave, Greenacres, WA 99016, USA",
    lat: 47.6608256,
    lng: -117.1532564,
    locationName: "Exxon"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJlQjp-HTfYVMRjNt5kOwy7Ds",
    edition: "EWA",
    notes: "Ziggy's rack by door",
    address: "17002 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.6561524,
    lng: -117.1766837,
    locationName: "Ziggy's"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJp6W_yZrfYVMR6WkaoOvz7hU",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "16808 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.6562028,
    lng: -117.1786092,
    locationName: "URM"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJq6ragHXfYVMRATh3qIIqNXs",
    edition: "EWA",
    notes: "",
    address: "16801 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.6583616,
    lng: -117.179601,
    locationName: "Eagles Spokane Valley"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJQx6HMZ3fYVMRy-9NUnz5JvE",
    edition: "EWA",
    notes: "Scatter around waiting room tables",
    address: "15915 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.6574479,
    lng: -117.1899588,
    locationName: "Les Schwabs"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJXU_wloLfYVMRBwy330jdHMg",
    edition: "EWA",
    notes: "Opens 10am; Inside Exchange Rack",
    address: "15808 E Sprague Ave, Spokane Valley, WA 99037, USA",
    lat: 47.656717,
    lng: -117.1921917,
    locationName: "Zips"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJX_qx2HUgnlQRnadsXOLLQkA",
    edition: "EWA",
    notes: "Outside Exchange Rack",
    address: "13823 E Broadway Ave, Spokane Valley, WA 99216, USA",
    lat: 47.664542,
    lng: -117.2184253,
    locationName: "Exxon"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJneQslwwgnlQRGgwwuN27ajI",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "1215 N McDonald Rd, Spokane Valley, WA 99216, USA",
    lat: 47.66843859999999,
    lng: -117.2296226,
    locationName: "Spokane Internal Medicine"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJNchC_WggnlQR8Z2qjp1SDF8",
    edition: "EWA",
    notes: "Inside East Door Exchange Rack   Opens at 10:30am",
    address: "12502 E Sprague Ave, Spokane Valley, WA 99216, USA",
    lat: 47.656536,
    lng: -117.2371225,
    locationName: "Ron's Hamburgers"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJCQGwXFuKUocRrDLFltZDhJ8",
    edition: "EWA",
    notes: "Bottom Inlander Rack NEED RACK ",
    address: "12404 E Sprague Ave, Spokane Valley, WA 99216, USA",
    lat: 47.6567346,
    lng: -117.2380675,
    locationName: "Taco Time"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJf9fRC0IgnlQR58ySfEb3doE",
    edition: "EWA",
    notes: "Inside North Door; Exchange Rack",
    address: "12024 E Sprague Ave, Spokane, WA 99206, USA",
    lat: 47.6568137,
    lng: -117.2426941,
    locationName: "Thrifty Scotsman Drive-In"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJE1tSHEIgnlQRY5YMkLxUK_s",
    edition: "EWA",
    notes: "Inside Exchange Rack",
    address: "11921 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6576305,
    lng: -117.2445137,
    locationName: "UGM Thrift"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJTUAogkEgnlQR9WpM_j4NLuA",
    edition: "EWA",
    notes: "One table and coffee table in waiting room",
    address: "11711 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6576251,
    lng: -117.2470768,
    locationName: "Tire-Rama"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJOYJNAgYhnlQRMdh3BHS94I8",
    edition: "EWA",
    notes: "Red Box outside",
    address: "11505 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6575198,
    lng: -117.250117,
    locationName: "Bowdish Market"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJoffVNkIgnlQRyRuv432wqIk",
    edition: "EWA",
    notes: "on counter",
    address: "11514 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.65597899999999,
    lng: -117.2500313,
    locationName: "Thrift Store"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJezZn30cgnlQRbkFHhNGFa7Q",
    edition: "EWA",
    notes: "Round table in corner or coffee table",
    address: "10721 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6575626,
    lng: -117.2602215,
    locationName: "Perfection Tire"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJA2GqsMshnlQRVO05D3qSWQU",
    edition: "EWA",
    notes: "Inside Windowsill",
    address: "9104 E Sprague Ave, Spokane Valley, WA 99206, USA",
    lat: 47.6566898,
    lng: -117.2825505,
    locationName: "Discount Muffler"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJP7f8U3EhnlQRCSTFjUadqnA",
    edition: "EWA",
    notes: "",
    address: "6505 E Sprague Ave, Spokane Valley, WA 99212, USA",
    lat: 47.6572879,
    lng: -117.317322,
    locationName: "Zips"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJAQCQfwgcnlQRtGk1hxgIOew",
    edition: "EWA",
    notes: "Extra stop delivered when Dick stops there each week",
    address: "8415 N Wall St, Spokane, WA 99208, USA",
    lat: 47.7342604,
    lng: -117.4224395,
    locationName: "North Star Senior Center"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJO8sZ7xwZnlQR73rrk_xYFLU",
    edition: "EWA",
    notes: "Extra stop delivered when Dick stops there each week",
    address: "2852-2898 N Post St, Spokane, WA 99205, USA",
    lat: 47.6842035,
    lng: -117.4236322500031,
    locationName: "Corbin Center"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJxSFl-bUhnlQRo2d2U1a08sc",
    edition: "EWA",
    notes: "Extra stop delivered when Dick stops there each week",
    address: "321 S Dishman Mica Rd, Spokane Valley, WA 99206, USA",
    lat: 47.653848,
    lng: -117.2797453,
    locationName: "Joes Barber Shop"
  },
  {
    route: "Spokane Valley",
    placeId: "ChIJB-o2usUjnlQRRi5ywv2fmQU",
    edition: "EWA",
    notes: "Extra stop delivered when Dick stops there each week",
    address: "4210 E Sprague Ave, Spokane, WA 99202, USA",
    lat: 47.6564246,
    lng: -117.3478361,
    locationName: "Veterans Thrift Center"
  },
  {
    route: "West Plains",
    placeId: "ChIJHWGzHlcWnlQRh2BszB0WyhI",
    edition: "EWA",
    notes: "",
    address: "10228 US-2, Spokane, WA 99224, USA",
    lat: 47.64358769999999,
    lng: -117.553345,
    locationName: "O'Reilly Auto Parts"
  },
  {
    route: "West Plains",
    placeId: "ChIJS9VfxS4XnlQRXI8B0WeLa-k",
    edition: "EWA",
    notes: "Opens 11 AM",
    address: "10408 US-2 Ste 1, Spokane, WA 99224, USA",
    lat: 47.64417479999999,
    lng: -117.5566507,
    locationName: "Noodle Express"
  },
  {
    route: "West Plains",
    placeId: "ChIJU4CVcfUWnlQRfUna5Mbl520",
    edition: "EWA",
    notes: "Wooden shelf left of door",
    address: "1514 W Sr, 2 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.6433914,
    lng: -117.5712722,
    locationName: "Chevron"
  },
  {
    route: "West Plains",
    placeId: "ChIJK9voy4gWnlQRD1sGhlXCLpM",
    edition: "EWA",
    notes: "Single EX rack by customer service counter",
    address: "1151 S Lyons Rd, Airway Heights, WA 99001, USA",
    lat: 47.64525949999999,
    lng: -117.5707232,
    locationName: "Yoke's"
  },
  {
    route: "West Plains",
    placeId: "ChIJ3by5GBUXnlQR1MBlbN-uwy0",
    edition: "EWA",
    notes: "Ex Rack ",
    address: "11980 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.6432604,
    lng: -117.5762905,
    locationName: "Gas For Less"
  },
  {
    route: "West Plains",
    placeId: "ChIJg6yRHYsWnlQRQo4QAuKDdeo",
    edition: "EWA",
    notes: "EX rack w/WCD; East entrance Opens 5AM",
    address: "12002 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.6434337,
    lng: -117.5779876,
    locationName: "McDonalds"
  },
  {
    route: "West Plains",
    placeId: "ChIJWXJoB4sWnlQR-G00fCLlMJY",
    edition: "EWA",
    notes: "2 white racks in Breezeway; Opens 8am",
    address: "12200 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.643625,
    lng: -117.578852,
    locationName: "NAPA"
  },
  {
    route: "West Plains",
    placeId: "ChIJPdz5Q4kWnlQRsMfa7kwlJso",
    edition: "EWA",
    notes: "Counter East Side of Restaurant Opens 6AM",
    address: "12526 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.6432643,
    lng: -117.5847984,
    locationName: "Atilano's"
  },
  {
    route: "West Plains",
    placeId: "ChIJvc_TKYkWnlQRy4PS3X0ePPM",
    edition: "EWA",
    notes: "Rack in front of counter",
    address: "12722 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.6432628,
    lng: -117.587437,
    locationName: "Motion Auto Supply"
  },
  {
    route: "West Plains",
    placeId: "ChIJG1fjf4QWnlQRWYlMr_CIP1E",
    edition: "EWA",
    notes: "On top of Garbage/ tray return left of door OPENS 10:30",
    address: "12820 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.643323,
    lng: -117.5888125,
    locationName: "Subway"
  },
  {
    route: "West Plains",
    placeId: "ChIJe5RtuYUWnlQRSghXM3azy7o",
    edition: "EWA",
    notes: "Right of door on top of candy machine OPENS 11AM ",
    address: "13308 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.6432223,
    lng: -117.5948277,
    locationName: "La Presa Mexicana"
  },
  {
    route: "West Plains",
    placeId: "ChIJu-UwDWoUnlQRx0UG5tPjRCg",
    edition: "EWA",
    notes: "Top Shelf ; rack in cafe area",
    address: "14212 US-2, Medical Lake, WA 99022, USA",
    lat: 47.6436256,
    lng: -117.6124306,
    locationName: "Spoko Fuel"
  },
  {
    route: "West Plains",
    placeId: "ChIJf2H-14sWnlQRoJzZa7p6Cqs",
    edition: "EWA",
    notes: "Inside EX rack; West entrance; Opens 6AM",
    address: "12421 W Sunset Hwy, Airway Heights, WA 99001, USA",
    lat: 47.64249700000001,
    lng: -117.582851,
    locationName: "Zip's"
  },
  {
    route: "West Plains",
    placeId: "ChIJk3285GIWnlQRqWdyNXmC66Y",
    edition: "EWA",
    notes: "On counter ",
    address: "1415 S Russell St, Airway Heights, WA 99001, USA",
    lat: 47.6423353,
    lng: -117.5818722,
    locationName: "AutoZone"
  },
  {
    route: "West Plains",
    placeId: "ChIJpT_bt1gWnlQRujUx2Rypi7I",
    edition: "EWA",
    notes: "on counter waiting area",
    address: "11003 W Sunset Hwy #2, Airway Heights, WA 99001, USA",
    lat: 47.64238779999999,
    lng: -117.5642673,
    locationName: "Les Schwab"
  },
  {
    route: "West Plains",
    placeId: "ChIJMTvPGVkWnlQR3rUsHDu9CVc",
    edition: "EWA",
    notes: "Opens 8am, Sinlge Ex rack",
    address: "10831 US-2, Airway Heights, WA 99001, USA",
    lat: 47.6415668,
    lng: -117.5619538,
    locationName: "Grocery Outlet"
  },
  {
    route: "West Plains",
    placeId: "ChIJccOB9boXnlQReuFiY2PfMPg",
    edition: "EWA",
    notes: "Inside EX Rack Front Door; Opens 11AM ",
    address: "7611 W Sunset Hwy, Spokane, WA 99224, USA",
    lat: 47.64267969999999,
    lng: -117.5188609,
    locationName: "Longhorn BBQ"
  },
  {
    route: "Clarkston",
    placeId: "ChIJzSgVHMbKoVQRr3ALkShT87o",
    edition: "LCV",
    notes: "On window ledge to the right as you enter",
    address: "200 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.4203341,
    lng: -117.040684,
    locationName: "Tomato Bros"
  },
  {
    route: "Clarkston",
    placeId: "ChIJSymzccbKoVQRJClzFt3udBc",
    edition: "LCV",
    notes: "blue rack outside",
    address: "400 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.42123769999999,
    lng: -117.0431813,
    locationName: "Albertsons"
  },
  {
    route: "Clarkston",
    placeId: "ChIJa2bxx8PKoVQRsz9hlrg4u28",
    edition: "LCV",
    notes: "on counter as you enter",
    address: "502-504 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.42022799999999,
    lng: -117.044703,
    locationName: "Beauty Nails & Spa of Clarkston"
  },
  {
    route: "Clarkston",
    placeId: "ChIJwy6-x-bKoVQRUNrxZmiyCYs",
    edition: "LCV",
    notes: "on front counter inside",
    address: "1560 Port Dr, Clarkston, WA 99403, USA",
    lat: 46.420885,
    lng: -117.0706676,
    locationName: "Hells Canyon Resort"
  },
  {
    route: "Clarkston",
    placeId: "ChIJFXfsK-7KoVQRe1KqudufisE",
    edition: "LCV",
    notes: "hand to anyone around",
    address: "705 15th St, Clarkston, WA 99403, USA",
    lat: 46.4159076,
    lng: -117.068809,
    locationName: "Rustebakke Veterinary Service"
  },
  {
    route: "Clarkston",
    placeId: "ChIJIXpUC93KoVQRpnbfk5QHLBY",
    edition: "LCV",
    notes: "on table to the right",
    address: "250 13th St, Clarkston, WA 99403, USA",
    lat: 46.4232896,
    lng: -117.0592631,
    locationName: "Mike's Pole Barns LLC"
  },
  {
    route: "Clarkston",
    placeId: "ChIJ70cQDN3KoVQRDVWk49qwco4",
    edition: "LCV",
    notes: "inside on register counter",
    address: "1280 Port Dr, Clarkston, WA 99403, USA",
    lat: 46.4244947,
    lng: -117.0555307,
    locationName: "Patt's Garden Center"
  },
  {
    route: "Clarkston",
    placeId: "ChIJpZOeR9vKoVQR6xU0WavCQts",
    edition: "LCV",
    notes: "on counter to the left",
    address: "908 Port Dr, Clarkston, WA 99403, USA",
    lat: 46.42494959999999,
    lng: -117.0511016,
    locationName: "Renaissance Marine Group"
  },
  {
    route: "Clarkston",
    placeId: "ChIJz-mBbdzKoVQR-jd0xmMZQV8",
    edition: "LCV",
    notes: "Front counter opens at 10:00",
    address: "935 Port Way Unit 1, Clarkston, WA 99403, USA",
    lat: 46.4259109,
    lng: -117.0556335,
    locationName: "Hangar Antique Mall"
  },
  {
    route: "Clarkston",
    placeId: "ChIJcVSZoNvKoVQRoqi89Wqt1To",
    edition: "LCV",
    notes: "on window ledge to the left",
    address: "835 Port Way, Clarkston, WA 99403, USA",
    lat: 46.4255905,
    lng: -117.053042,
    locationName: "Port Electric & Repair"
  },
  {
    route: "Clarkston",
    placeId: "ChIJb1YFd8XKoVQRNq755HNLrs0",
    edition: "LCV",
    notes: "on counter by register",
    address: "306 5th St, Clarkston, WA 99403, USA",
    lat: 46.42309769999999,
    lng: -117.0489528,
    locationName: "Walmart Supercenter"
  },
  {
    route: "Clarkston",
    placeId: "ChIJob4Xk8_KoVQRT5_pA_hXNP8",
    edition: "LCV",
    notes: "inside office-they leave half at laundry mat",
    address: "306 Granite Lake Dr, Clarkston, WA 99403, USA",
    lat: 46.42428700000001,
    lng: -117.04305,
    locationName: "Premier RV Resort"
  },
  {
    route: "Clarkston",
    placeId: "ChIJlfJ4EcbKoVQRWnXvejfkhBM",
    edition: "LCV",
    notes: "on rack inside to the left",
    address: "507 3rd St, Clarkston, WA 99403, USA",
    lat: 46.419055,
    lng: -117.040774,
    locationName: "NAPA Auto Parts - Clarkston Auto Parts"
  },
  {
    route: "Clarkston",
    placeId: "ChIJXXPhs8DKoVQRo07smNqzNHY",
    edition: "LCV",
    notes: "rack to the right inside door",
    address: "712, 1/2 5th St, Clarkston, WA 99403, USA",
    lat: 46.4158191,
    lng: -117.0444654,
    locationName: "Amsterdam Coffee Club"
  },
  {
    route: "Clarkston",
    placeId: "ChIJGZw2ucDKoVQRquBPI8w8kE4",
    edition: "LCV",
    notes: "inside table on left",
    address: "728 6th St, Clarkston, WA 99403, USA",
    lat: 46.41523449999999,
    lng: -117.0457012,
    locationName: "Greenfield Company Cannabis Retail"
  },
  {
    route: "Clarkston",
    placeId: "ChIJG7r2Yr_KoVQRRgBtMLfSGmE",
    edition: "LCV",
    notes: "Inside north door to left wire rack",
    address: "Clarkston, WA 99403, USA",
    lat: 46.4145441,
    lng: -117.0457026,
    locationName: "Wasem's Drug"
  },
  {
    route: "Clarkston",
    placeId: "ChIJr-ZoG6fLoVQRvnQbIEG3GJo",
    edition: "LCV",
    notes: " ",
    address: "902 6th St, Clarkston, WA 99403, USA",
    lat: 46.4125149,
    lng: -117.0459127,
    locationName: "Momma K's"
  },
  {
    route: "Clarkston",
    placeId: "ChIJdcZHZL_KoVQRQKMMDBF0noQ",
    edition: "LCV",
    notes: "Shared Rack right inside door on street corner",
    address: "801 6th St, Clarkston, WA 99403, USA",
    lat: 46.41437329999999,
    lng: -117.0453563,
    locationName: "Schurmans True Value Hardware Inc."
  },
  {
    route: "Clarkston",
    placeId: "ChIJ0VBwMOjKoVQRe82fJ0SysAk",
    edition: "LCV",
    notes: "Opens 4pm-drop off at the door",
    address: "1281 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.41934120000001,
    lng: -117.0576824,
    locationName: "Fazzari's"
  },
  {
    route: "Clarkston",
    placeId: "ChIJ1YcEK-jKoVQRzg4lMysQbyM",
    edition: "LCV",
    notes: "Inside right of door shared rack",
    address: "1227 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.419688,
    lng: -117.055168,
    locationName: "NomNom"
  },
  {
    route: "Clarkston",
    placeId: "ChIJEW1Y-cvLoVQRHfBt1gLdnfU",
    edition: "LCV",
    notes: "RACK outside",
    address: "905 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.4196327,
    lng: -117.0498518,
    locationName: "Quick Stop Grocery"
  },
  {
    route: "Clarkston",
    placeId: "ChIJtXwTJ8TKoVQR2TVwwsOnChc",
    edition: "LCV",
    notes: "Closes 2pm; On alligator tray table",
    address: "601 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.4197527,
    lng: -117.045885,
    locationName: "Hazel's Good Eats"
  },
  {
    route: "Clarkston",
    placeId: "ChIJw6anhsbKoVQRZ9oDq57zUEw",
    edition: "LCV",
    notes: "On Table to the left",
    address: "501 Bridge St, Clarkston, WA 99403, USA",
    lat: 46.41971699999999,
    lng: -117.04456,
    locationName: "Jiffy Lube"
  },
  {
    route: "Clarkston",
    placeId: "ChIJmR1Xz8DKoVQRRuRsdN6Yfa0",
    edition: "LCV",
    notes: "inside door on window ledge",
    address: "606 Maple St, Clarkston, WA 99403, USA",
    lat: 46.4164363,
    lng: -117.0460377,
    locationName: "Papa Murphy's | Take 'N' Bake Pizza"
  },
  {
    route: "Clarkston",
    placeId: "ChIJQ5AqipDKoVQRBy08ckJbSak",
    edition: "LCV",
    notes: "in waiting room area on large counter",
    address: "1119 Highland Ave Unit 4, Clarkston, WA 99403, USA",
    lat: 46.402993,
    lng: -117.0527442,
    locationName: "Tri-State Primary Care"
  },
  {
    route: "Clarkston",
    placeId: "ChIJJ582NY7KoVQRvF6_lHAP4ew",
    edition: "LCV",
    notes: "Inside Tribune rack",
    address: "1401 13th St, Clarkston, WA 99403, USA",
    lat: 46.4029758,
    lng: -117.0580447,
    locationName: "Rick's Family Foods"
  },
  {
    route: "Clarkston",
    placeId: "ChIJMUs9ouzKoVQRZTqXg3pEOEI",
    edition: "LCV",
    notes: "left by inside mailboxes",
    address: "1291 Sycamore St, Clarkston, WA 99403, USA",
    lat: 46.4123509,
    lng: -117.0579404,
    locationName: "Lincoln Estate"
  },
  {
    route: "Clarkston",
    placeId: "ChIJ2SquFmLKoVQR08TpOveSvDY",
    edition: "LCV",
    notes: "Exchange rack to the left as you enter",
    address: "1603 Dustan Loop, Clarkston, WA 99403, USA",
    lat: 46.4005517,
    lng: -117.0721463,
    locationName: "Asotin County Family Aquatic Center"
  },
  {
    route: "Clarkston",
    placeId: "ChIJc9yvJYjKoVQRnl6XeSjn1CM",
    edition: "LCV",
    notes: "leave on front counter",
    address: "1508 15th St, Clarkston, WA 99403, USA",
    lat: 46.4007019,
    lng: -117.0694609,
    locationName: "Early Bird Supply Inc"
  },
  {
    route: "Clarkston",
    placeId: "ChIJYSbf8YbKoVQRLS4U6sRfX3g",
    edition: "LCV",
    notes: "on front counter as you enter",
    address: "1721 13th St, Clarkston, WA 99403, USA",
    lat: 46.3968826,
    lng: -117.0607407,
    locationName: "Swiss Salon"
  },
  {
    route: "Clarkston",
    placeId: "ChIJna_ep3bKoVQRfwjYV8ikDm8",
    edition: "LCV",
    notes: " shared rack inside",
    address: "2113 5th Ave, Clarkston, WA 99403, USA",
    lat: 46.3885897,
    lng: -117.083059,
    locationName: "Clarkston Heights Family Foods"
  },
  {
    route: "Clarkston",
    placeId: "ChIJp1ORcDC0oVQRglDkQmPzlXE",
    edition: "LCV",
    notes: "Counter inside door",
    address: "90 2nd St, Asotin, WA 99402, USA",
    lat: 46.3399616,
    lng: -117.055175,
    locationName: "Matt's Grill & Lodge"
  },
  {
    route: "Clarkston",
    placeId: "ChIJ73PkXzi0oVQROa62TwtRDns",
    edition: "LCV",
    notes: "Inside left of door shared rack",
    address: "204 1st St, Asotin, WA 99402, USA",
    lat: 46.3407184,
    lng: -117.0530409,
    locationName: "NomNom"
  },
  {
    route: "Lewiston",
    placeId: "ChIJwS706Eo1oFQRJLjSBWxco2s",
    edition: "LCV",
    notes: "Opens at 10am; On Counter",
    address: "1026 Main St, Lewiston, ID 83501, USA",
    lat: 46.4189699,
    lng: -117.0193948,
    locationName: "Lolo Sporting Goods"
  },
  {
    route: "Lewiston",
    placeId: "ChIJocRbAEs1oFQRoGkW2yBJ_Z8",
    edition: "LCV",
    notes: "on front counter by register",
    address: "1120 Main St, Lewiston, ID 83501, USA",
    lat: 46.4187871,
    lng: -117.0184097,
    locationName: "Effie Tavern"
  },
  {
    route: "Lewiston",
    placeId: "ChIJyd8TlUs1oFQR4FwkHqZmy1M",
    edition: "LCV",
    notes: "Opens 10:30am; Counter at cash register",
    address: "1302 Main St, Lewiston, ID 83501, USA",
    lat: 46.41824159999999,
    lng: -117.015582,
    locationName: "Dairy Queen Grill & Chill"
  },
  {
    route: "Lewiston",
    placeId: "ChIJ38zm_Us1oFQRQK7YYxCY5wo",
    edition: "LCV",
    notes: "waiting area",
    address: "1408 Main St, Lewiston, ID 83501, USA",
    lat: 46.4176648,
    lng: -117.0130904,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "Lewiston",
    placeId: "ChIJ77bnVUk1oFQRPT9JJdfzZSg",
    edition: "LCV",
    notes: "Rack Temporarily removed - leave on inside bench; Exchange Rack Inside",
    address: "1421 Main St, Lewiston, ID 83501, USA",
    lat: 46.4184057,
    lng: -117.0124437,
    locationName: "Waffles n More"
  },
  {
    route: "Lewiston",
    placeId: "ChIJedvfiFM1oFQRFh1zh04bxWs",
    edition: "LCV",
    notes: "Counter inside left side",
    address: "1425 Main St, Lewiston, ID 83501, USA",
    lat: 46.4182496,
    lng: -117.0119752,
    locationName: "NomNom"
  },
  {
    route: "Lewiston",
    placeId: "ChIJsUOSwU41oFQRwH4HNl4EtF4",
    edition: "LCV",
    notes: "Rounded corner to right",
    address: "1536 Main St, Lewiston, ID 83501, USA",
    lat: 46.41743839999999,
    lng: -117.0098474,
    locationName: "Exxon"
  },
  {
    route: "Lewiston",
    placeId: "ChIJETIdC081oFQRQYlBfoJvyXg",
    edition: "LCV",
    notes: "at one of the tables in the waiting area open @ 8:30",
    address: "1824 Main St, Lewiston, ID 83501, USA",
    lat: 46.4162874,
    lng: -117.0051054,
    locationName: "Rogers Chrysler Dodge Jeep Ram"
  },
  {
    route: "Lewiston",
    placeId: "ChIJ6z1dWE41oFQRRUmm6PBYhCQ",
    edition: "LCV",
    notes: "Exchange Rack inside to right",
    address: "1633 G St, Lewiston, ID 83501, USA",
    lat: 46.4163988,
    lng: -117.0082577,
    locationName: "Habitat for Humanity Store (Lewiston)"
  },
  {
    route: "Lewiston",
    placeId: "ChIJQQR_PE41oFQRaf17zKrwMJ0",
    edition: "LCV",
    notes: "walk through store to the register leave there, opens @ 10",
    address: "1625 G St, Lewiston, ID 83501, USA",
    lat: 46.4165344,
    lng: -117.0085792,
    locationName: "1st Interstate Pawn"
  },
  {
    route: "Lewiston",
    placeId: "ChIJX80rSE41oFQRb9zkW78TR-4",
    edition: "LCV",
    notes: "Inside EX wire rack left of door",
    address: "316 18th St, Lewiston, ID 83501, USA",
    lat: 46.41549759999999,
    lng: -117.0070707,
    locationName: "Big Smoke"
  },
  {
    route: "Lewiston",
    placeId: "ChIJZy9FuUo1oFQRUQ4IDwQBPH8",
    edition: "LCV",
    notes: "Start May (5) papers, Shane requested",
    address: "1715 Idaho St, Lewiston, ID 83501, USA",
    lat: 46.4151366,
    lng: -117.0071476,
    locationName: "Norco"
  },
  {
    route: "Lewiston",
    placeId: "ChIJR-GEw1o1oFQRiK7ogImDl0E",
    edition: "LCV",
    notes: "Wood stove near door",
    address: "2214 Main St, Lewiston, ID 83501, USA",
    lat: 46.4150695,
    lng: -116.9987555,
    locationName: "El Sombrero Mexican Restaurant"
  },
  {
    route: "Lewiston",
    placeId: "ChIJo3YSKkE1oFQRWzIUDEFblDc",
    edition: "LCV",
    notes: "White rack to left Inside community",
    address: "226 E 22nd St N, Lewiston, ID 83501, USA",
    lat: 46.4233791,
    lng: -117.0011715,
    locationName: "LIBERTY MART NORTH 2"
  },
  {
    route: "Lewiston",
    placeId: "ChIJTXHxXVM1oFQRfdWt3BQL8mk",
    edition: "LCV",
    notes: "Counter",
    address: "2128 2nd Ave N, Lewiston, ID 83501, USA",
    lat: 46.42231049999999,
    lng: -117.0011751,
    locationName: "Adams Tractor Lewiston"
  },
  {
    route: "Lewiston",
    placeId: "ChIJFY3oRjc1oFQREdxAydjxJ6E",
    edition: "LCV",
    notes: "give to TOM",
    address: "604 12th St N, Lewiston, ID 83501, USA",
    lat: 46.4274317,
    lng: -117.0157067,
    locationName: "Pacific Steel & Recycling"
  },
  {
    route: "Lewiston",
    placeId: "ChIJvZh3Kz81oFQRsXcc4-prddQ",
    edition: "LCV",
    notes: "Shelves at counter",
    address: "1920 ID-128, Lewiston, ID 83501, USA",
    lat: 46.42693049999999,
    lng: -117.0060169,
    locationName: "North Lewiston 76 Dyna Mart"
  },
  {
    route: "Lewiston",
    placeId: "ChIJE0IlPkc1oFQR9Uoof_NfunU",
    edition: "LCV",
    notes: "at front counter",
    address: "306 20th St N, Lewiston, ID 83501, USA",
    lat: 46.4240417,
    lng: -117.0047051,
    locationName: "Western Floors Inc"
  },
  {
    route: "Lewiston",
    placeId: "ChIJXZzPthI1oFQRlhqhmVFoWtU",
    edition: "LCV",
    notes: "Outside Green Box; Place on table in cafe area",
    address: "3110 Old N S Hwy, Lewiston, ID 83501, USA",
    lat: 46.43039,
    lng: -116.985589,
    locationName: "Stinker Stores"
  },
  {
    route: "Lewiston",
    placeId: "ChIJP47_lEA1oFQR2oVR1cJzLIA",
    edition: "LCV",
    notes: "knock on door if locked open @ 8:00am",
    address: "421 E 22nd St N, Lewiston, ID 83501, USA",
    lat: 46.42528710000001,
    lng: -116.9996958,
    locationName: "Lewiston Veterinary Clinic"
  },
  {
    route: "Lewiston",
    placeId: "ChIJOVSizVY1oFQRJUM0imjcBRo",
    edition: "LCV",
    notes: "Inside shared rack by checkout",
    address: "1024 21st St, Lewiston, ID 83501, USA",
    lat: 46.4098595,
    lng: -117.00364,
    locationName: "Albertsons"
  },
  {
    route: "Lewiston",
    placeId: "ChIJ3z7SglM1oFQRLmEh5GdAKYk",
    edition: "LCV",
    notes: "Inside shared rack left of door",
    address: "1028 17th St, Lewiston, ID 83501, USA",
    lat: 46.4095546,
    lng: -117.0083747,
    locationName: "NEIGHBORHOOD MARKET"
  },
  {
    route: "Lewiston",
    placeId: "ChIJHSBIOKtKoFQRT9sRbkxwzss",
    edition: "LCV",
    notes: "on table waiting area",
    address: "1909 19th Ave, Lewiston, ID 83501, USA",
    lat: 46.4012602,
    lng: -117.0030192,
    locationName: "Jiffy Lube"
  },
  {
    route: "Lewiston",
    placeId: "ChIJr43a_1S1oVQRnb0xs4XlBA0",
    edition: "LCV",
    notes: "Inside small wire rack at customer service. USE EXIT DOOR",
    address: "2001 17th St, Lewiston, ID 83501, USA",
    lat: 46.39972219999999,
    lng: -117.0072384,
    locationName: "WinCo Foods"
  },
  {
    route: "Lewiston",
    placeId: "ChIJu7eJQ0-1oVQRi1SU_1WIbDU",
    edition: "LCV",
    notes: "Blue box outside",
    address: "3138 5th St, Lewiston, ID 83501, USA",
    lat: 46.38838390000001,
    lng: -117.0082111,
    locationName: "St Vincent De Paul Lewiston"
  },
  {
    route: "Lewiston",
    placeId: "ChIJ94TvIDm1oVQRCTx7Mj_O7QE",
    edition: "LCV",
    notes: "Outside EX Blue Box",
    address: "505 Bryden Ave #4444, Lewiston, ID 83501, USA",
    lat: 46.38076659999999,
    lng: -117.0067331,
    locationName: "Neighborhood Market"
  },
  {
    route: "Lewiston",
    placeId: "ChIJtyxX4Dm1oVQRaabH4x3qBqI",
    edition: "LCV",
    notes: "on counter to the left",
    address: "613 Bryden Dr Ste C, Lewiston, ID 83501, USA",
    lat: 46.38086079999999,
    lng: -117.0001844,
    locationName: "The UPS Store"
  },
  {
    route: "Lewiston",
    placeId: "ChIJbQEe6Tm1oVQR82vGxj_q0e0",
    edition: "LCV",
    notes: "inside-table on left",
    address: "631 Bryden Ave, Lewiston, ID 83501, USA",
    lat: 46.380727,
    lng: -116.9979049,
    locationName: "Hot Shots Espresso, Cafe"
  },
  {
    route: "Lewiston",
    placeId: "ChIJL4nEostKoFQRu-eCehC-5Hs",
    edition: "LCV",
    notes: "Adjoining Jeffrey's Restaurant",
    address: "244 Thain Rd #4846, Lewiston, ID 83501, USA",
    lat: 46.3844146,
    lng: -116.9826126,
    locationName: "Strike & Spare Bar & Grill"
  },
  {
    route: "Lewiston",
    placeId: "ChIJL4nEostKoFQRDMg1yL5gizM",
    edition: "LCV",
    notes: "On Counter by cash register",
    address: "244 Thain Rd #4846, Lewiston, ID 83501, USA",
    lat: 46.38461669999999,
    lng: -116.982162,
    locationName: "Jeffrey's Restaurant"
  },
  {
    route: "Lewiston",
    placeId: "ChIJHaeoostKoFQRRpX5A8BR2lE",
    edition: "LCV",
    notes: "Inside short rack on counter to left",
    address: "248 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.38382319999999,
    lng: -116.981509,
    locationName: "Thain Chevron"
  },
  {
    route: "Lewiston",
    placeId: "ChIJU1Onlc1KoFQRldZ6gOKP6Iw",
    edition: "LCV",
    notes: "2 Inside EX Racks; Foyer between entry doors",
    address: "332 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.3809078,
    lng: -116.978704,
    locationName: "Rosauers Supermarkets"
  },
  {
    route: "Lewiston",
    placeId: "ChIJJ-fpFtJKoFQRnWLl7qLBTAo",
    edition: "LCV",
    notes: "shared rack, inside right",
    address: "404 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.3792754,
    lng: -116.9753387,
    locationName: "Maverik Adventure's First Stop"
  },
  {
    route: "Lewiston",
    placeId: "ChIJGa2aVdFKoFQRS7hRSjKwCpU",
    edition: "LCV",
    notes: "Shared Rack inside left of door",
    address: "Lewiston, ID 83501, USA",
    lat: 46.37699649999999,
    lng: -116.9711075,
    locationName: "A & B Foods"
  },
  {
    route: "Lewiston",
    placeId: "ChIJWXl1wilLoFQRB20JDaa449I",
    edition: "LCV",
    notes: "Newpaper rack inside left of door",
    address: "606 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.3724442,
    lng: -116.9648012,
    locationName: "Mobil"
  },
  {
    route: "Lewiston",
    placeId: "ChIJefj10ClLoFQRLY-Yv_Q42_U",
    edition: "LCV",
    notes: " inside on left- shared rack",
    address: "1310 Grelle Ave, Lewiston, ID 83501, USA",
    lat: 46.372833,
    lng: -116.9647667,
    locationName: "Neighbors A1 Market & Gas"
  },
  {
    route: "Lewiston",
    placeId: "ChIJpWrUSi5LoFQR49BJYZId5R4",
    edition: "LCV",
    notes: "Shared Rack inside left of door",
    address: "335 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.38187259999999,
    lng: -116.976968,
    locationName: "NomNom"
  },
  {
    route: "Lewiston",
    placeId: "ChIJEe7EA7VKoFQRopKSVCUc0DY",
    edition: "LCV",
    notes: "Inside Rack, north side door",
    address: "117 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.39069079999999,
    lng: -116.9878936,
    locationName: "Grocery Outlet"
  },
  {
    route: "Lewiston",
    placeId: "ChIJEekxG7VKoFQRr6fjaEjTvsA",
    edition: "LCV",
    notes: "Outside EX Blue Box right side of building",
    address: "124 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.38974109999999,
    lng: -116.9894458,
    locationName: "Sinclair Gas Station"
  },
  {
    route: "Lewiston",
    placeId: "ChIJw1dAgMpKoFQRZImY83WtNjk",
    edition: "LCV",
    notes: "",
    address: "148 Thain Rd, Lewiston, ID 83501, USA",
    lat: 46.388466,
    lng: -116.9879436,
    locationName: "Papa Murphy's | Take 'N' Bake Pizza"
  },
  {
    route: "Lewiston",
    placeId: "ChIJ5ViL5xFLoFQR4d7-DdFBYnY",
    edition: "LCV",
    notes: "Inside Tall EX rack near exit door",
    address: "2981 Thain Grd, Lewiston, ID 83501, USA",
    lat: 46.3942758,
    lng: -116.9906082,
    locationName: "North 40 Outfitters"
  },
  {
    route: "Lewiston",
    placeId: "ChIJA0naDanKoVQRZUYJoUyVK5k",
    edition: "LCV",
    notes: "Front Counter",
    address: "1024 16th Ave, Lewiston, ID 83501, USA",
    lat: 46.4037046,
    lng: -117.0172916,
    locationName: "Papa Johns Pizza"
  },
  {
    route: "Lewiston",
    placeId: "ChIJYSfo6KjKoVQRFiyXONo5eoE",
    edition: "LCV",
    notes: "Inside Laundry; Shared Rack",
    address: "822 16th Ave, Lewiston, ID 83501, USA",
    lat: 46.40382819999999,
    lng: -117.0202134,
    locationName: "Southway 76 Dyna Mart"
  },
  {
    route: "Lewiston",
    placeId: "ChIJecz59a7KoVQRX2YQz5WLVlA",
    edition: "LCV",
    notes: "Shared Rack, Left of door",
    address: "1234 8th St, Lewiston, ID 83501, USA",
    lat: 46.40787780000001,
    lng: -117.021924,
    locationName: "A & B Family Foods"
  },
  {
    route: "Lewiston",
    placeId: "ChIJG2j0n6HKoVQRnmJTBWTqcJU",
    edition: "LCV",
    notes: "Inside right of door shared rack",
    address: "99 Southway Ave, Lewiston, ID 83501, USA",
    lat: 46.4013111,
    lng: -117.0330073,
    locationName: "NomNom"
  },
  {
    route: "Lewiston",
    placeId: "ChIJWxGmJLvKoVQREMlSUwBJF6M",
    edition: "LCV",
    notes: "Store back by gas pumps; Inside left of door wire rack",
    address: "1200 Snake River Ave, Lewiston, ID 83501, USA",
    lat: 46.4068737,
    lng: -117.0346108,
    locationName: "CHS Primeland"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJazRnDoMnoFQRFWDhVVlQboI",
    edition: "LCV",
    notes: "Put through the door opening on the 304 door",
    address: "306 N Main St, Moscow, ID 83843, USA",
    lat: 46.73640760000001,
    lng: -117.0010319,
    locationName: "Palouse Habitat For Humanity"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJl3kpAa0noFQRlkxMq7Sto9Y",
    edition: "LCV",
    notes: "rack inside",
    address: "340 N Main St, Moscow, ID 83843, USA",
    lat: 46.7372209,
    lng: -117.0008254,
    locationName: "NomNom"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJJ7ZOUNeJn1QRUfFvzpE6_ws",
    edition: "LCV, EWA",
    notes: "Exchange rack by registers; Rack inside Foyer",
    address: "760 N Main St, Moscow, ID 83843, USA",
    lat: 46.74227899999999,
    lng: -117.0006561,
    locationName: "Moscow and Pullman Building Supply"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJN5cia9aJn1QRLK9Zu73m1ls",
    edition: "LCV, EWA",
    notes: "Inside EX double rack in south entrance; EWA Edition; Inside EX Double rack in South Entrance",
    address: "411 N Main St, Moscow, ID 83843, USA",
    lat: 46.73793149999999,
    lng: -117.0032655,
    locationName: "Rosauers"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJeQelNHknoFQRqEIL1xfmpMM",
    edition: "LCV, EWA",
    notes: "Inside Exchange rack; EWA Edition",
    address: "1317 S Main St, Moscow, ID 83843, USA",
    lat: 46.72235850000001,
    lng: -117.0021017,
    locationName: "A&W Restaurant"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJk-OESE4noFQRj3NhdZgWBDM",
    edition: "LCV",
    notes: "on counter per Gary",
    address: "2750 Hwy 95, Moscow, ID 83843, USA",
    lat: 46.704586,
    lng: -117.0051343,
    locationName: "Early Bird Supply Inc"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJ87-VCLcnoFQRuHVK6HlXTz0",
    edition: "LCV",
    notes: "per Doug (owner) advertises with us",
    address: "2730 Hwy 95, Moscow, ID 83843, USA",
    lat: 46.7063917,
    lng: -117.0048095,
    locationName: "Wasankari Construction"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJu9MSfXYnoFQRZId-Zo6qknA",
    edition: "LCV",
    notes: "on counter per Norm opens at 8:00",
    address: "414 Troy Rd, Moscow, ID 83843, USA",
    lat: 46.724469,
    lng: -116.996425,
    locationName: "NAPA Auto Parts - Moscow Auto Parts"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJZXJ5enQnoFQRAcp36kyT4c8",
    edition: "LCV",
    notes: "Shared rack with Exchange sign",
    address: "802 Troy Rd, Moscow, ID 83843, USA",
    lat: 46.7224798,
    lng: -116.9899827,
    locationName: "Mobil"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJnZh7n3MnoFQRj7WEMMh8flk",
    edition: "LCV",
    notes: "Exchange rack by counter as you enter",
    address: "915 E White Ave, Moscow, ID 83843, USA",
    lat: 46.7224137,
    lng: -116.987407,
    locationName: "Spence Hardware & Supply"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJ_8TCA3MnoFQRv4jwtcUoYmI",
    edition: "LCV",
    notes: "Exchange rack by Customer Service",
    address: "1320 S Blaine St, Moscow, ID 83843, USA",
    lat: 46.7223411,
    lng: -116.9828314,
    locationName: "Safeway"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJcXEmXG0noFQRMDaIXZAjnmo",
    edition: "LCV, EWA",
    notes: "leave on back counter space",
    address: "1421 White Ave, Moscow, ID 83843, USA",
    lat: 46.7222753,
    lng: -116.9808746,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJp34e1xUfoFQR9327-cg86WY",
    edition: "LCV",
    notes: "; Inside left White Community Rack",
    address: "3990 ID-8, Troy, ID 83871, USA",
    lat: 46.73650019999999,
    lng: -116.7742296,
    locationName: "Troy Sunset Mart"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJ_wFHAD4foFQRUo0uNsQoqo8",
    edition: "LCV",
    notes: "Inside on counter",
    address: "605 S Main St, Troy, ID 83871, USA",
    lat: 46.7336931,
    lng: -116.7665485,
    locationName: "United States Postal Service"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJV7OeFXknoFQRBg009dgO9HM",
    edition: "LCV",
    notes: "on Exchange Rack as you enter",
    address: "121 E 5th St, Moscow, ID 83843, USA",
    lat: 46.730476,
    lng: -117.000391,
    locationName: "Moscow Food Co-op"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJnRAyFX8noFQRtQVssjQmOrg",
    edition: "LCV",
    notes: "Exchange rack to the rightas you enter/outside",
    address: "409 W 3rd St, Moscow, ID 83843, USA",
    lat: 46.7320723,
    lng: -117.0058758,
    locationName: "Taj Grocery"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJ2dJIFYAnoFQRB6LU_AQdTSk",
    edition: "LCV, EWA",
    notes: "At the register",
    address: "730 Pullman Rd, Moscow, ID 83843, USA",
    lat: 46.7339332,
    lng: -117.0113216,
    locationName: "Big Smoke"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJh5jIVYcnoFQRcnhmeB-ku_c",
    edition: "LCV, EWA",
    notes: "EX Rack inside East Door; LEAVE ARGONAUT ON RACK",
    address: "1104 W Pullman Rd, Moscow, ID 83843, USA",
    lat: 46.73341749999999,
    lng: -117.017189,
    locationName: "Tri-State Distributors"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJY0RodSiIn1QRQaOOlxBJ_eE",
    edition: "LCV",
    notes: "on shared rack at customer service",
    address: "1700 Pullman Rd, Moscow, ID 83843, USA",
    lat: 46.7345218,
    lng: -117.0254431,
    locationName: "WinCo Foods"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJ0clmgiGIn1QR7wdgljpja-E",
    edition: "LCV, EWA",
    notes: "Inside doors on the table",
    address: "201 Warbonnet Dr, Moscow, ID 83843, USA",
    lat: 46.73425950000001,
    lng: -117.0386179,
    locationName: "Goodwill Industries of the Inland Northwest"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJsWCyBEeHn1QRqf5TqKYk--I",
    edition: "LCV, EWA",
    notes: "shared rack inside; EWA Edition",
    address: "1455 SE Bishop Blvd, Pullman, WA 99163, USA",
    lat: 46.7217785,
    lng: -117.1647054,
    locationName: "Pullman Sunset Mart"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJD_3LIz6Hn1QRoNQMoH_XOZc",
    edition: "LCV, EWA",
    notes: "on table inside to left Opens at 11:30; EWA",
    address: "Pullman, WA 99163, USA",
    lat: 46.72011089999999,
    lng: -117.1639161,
    locationName: "Birch and Barley"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJ6QLOlUeHn1QRAQmyFL2M2tA",
    edition: "LCV, EWA",
    notes: "Exchange rack to the right as you enter WEST DOOR; Exchange rack to the right as you enter WEST DOOR Contact Megan",
    address: "430 SE Bishop Blvd, Pullman, WA 99163, USA",
    lat: 46.716079,
    lng: -117.1777739,
    locationName: "Safeway"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJTxxBAryHn1QR4_7awhQWYgc",
    edition: "LCV, EWA",
    notes: "Exchange rack as you enter",
    address: "1450 S Grand Ave, Pullman, WA 99163, USA",
    lat: 46.71690349999999,
    lng: -117.17932,
    locationName: "Grocery Outlet"
  },
  {
    route: "Moscow/ Pullman",
    placeId: "ChIJgXCycWsgnlQRjpDVth5cVSI",
    edition: "LCV, EWA",
    notes: "Window Shelf inside door",
    address: "455 S Grand Ave, Pullman, WA 99163, USA",
    lat: 46.7265612,
    lng: -117.1851523,
    locationName: "The Old European Restaurant"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJA0ppEvw1oFQRg2v9dRnLYIY",
    edition: "LCV",
    notes: "Bottom of rack as you enter to the left",
    address: "17372 Nez Perce Rd, Lewiston, ID 83501, USA",
    lat: 46.4342715,
    lng: -116.9111878,
    locationName: "Nez Perce Express II"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJBUIXAuNIoFQRbuDi4fydkiM",
    edition: "LCV",
    notes: "Exchange rack as you enter per Jim",
    address: "308 US-95, Lapwai, ID 83540, USA",
    lat: 46.4076236,
    lng: -116.8021943,
    locationName: "Valley Gas"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJBUIXAuNIoFQRWjVxjv6XiFU",
    edition: "LCV",
    notes: "Shelf Inside right of door",
    address: "304 US-95, Lapwai, ID 83540, USA",
    lat: 46.40736020000001,
    lng: -116.8022197,
    locationName: "Donald's Family Dining"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJBUIXAuNIoFQR5DkScWUIXWI",
    edition: "LCV",
    notes: "Inside top rack to the left",
    address: "204 US-95, Lapwai, ID 83540, USA",
    lat: 46.4064056,
    lng: -116.8021715,
    locationName: "Valley Family Foods"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ-13R3M1OoFQRttxcb2Xs8FA",
    edition: "LCV",
    notes: "park by bus stop -Exchange Rack",
    address: "504 Main St S, Lapwai, ID 83540, USA",
    lat: 46.3997021,
    lng: -116.8045614,
    locationName: "Pi-Nee-Waus Community Center"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJlzorhmhPoFQRgRmQpkF5kXM",
    edition: "LCV",
    notes: "Opens 11am; Bag and leave at door if not open",
    address: "49038 US-95, Culdesac, ID 83524, USA",
    lat: 46.3695495,
    lng: -116.7241813,
    locationName: "Drovers Run At Jacques Spur"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJx5fQKKNFoFQRHeKi9sIr5Zc",
    edition: "LCV",
    notes: "Inside on lobby table BAG IF NOT OPEN",
    address: "806 Main St, Culdesac, ID 83524, USA",
    lat: 46.3737837,
    lng: -116.6689593,
    locationName: "P1FCU"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJf1AiAjtXoFQRRPon2mV-Xqc",
    edition: "LCV",
    notes: "Exchange Rack as you enter",
    address: "402 Nezperce Ave, Winchester, ID 83555, USA",
    lat: 46.2406714,
    lng: -116.622243,
    locationName: "Marshall's Meat Center"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJZ8KeFnRXoFQR22EpFpRxmQE",
    edition: "LCV",
    notes: "TAKE WINCHESTER STATE PARK EXIT opens 7am",
    address: "317 Nezperce Ave, Winchester, ID 83555, USA",
    lat: 46.2400662,
    lng: -116.6228966,
    locationName: "Winchester Kitchen & Bar"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJq5iwOjtXoFQRxG0Muj62OXo",
    edition: "LCV",
    notes: "On window ledge to right",
    address: "305 Joseph Ave, Winchester, ID 83555, USA",
    lat: 46.23971710000001,
    lng: -116.6247124,
    locationName: "Gateway Store"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJc0yDiNdXoFQRj5-vhgsZfPU",
    edition: "LCV",
    notes: "Outside Blue Exchange Box; NEEDS OPEN RACK w/WCD",
    address: "1823 US-95 BUS, Winchester, ID 83555, USA",
    lat: 46.239939,
    lng: -116.58245,
    locationName: "Nez Perce Express Camas"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJly18G91YoFQRbozF-cNgGo0",
    edition: "LCV",
    notes: "on counter",
    address: "107 W Main St, Craigmont, ID 83523, USA",
    lat: 46.2406831,
    lng: -116.4748569,
    locationName: "AFD Alley"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJa41_HN1YoFQRZv41QpPBfY4",
    edition: "LCV",
    notes: " on bar counter right inside Open @11am; On chair outside if not open",
    address: "25 W Main St, Craigmont, ID 83523, USA",
    lat: 46.2406179,
    lng: -116.4743821,
    locationName: "Woody's on the Prarie"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ98DKwtxYoFQRtUg48N_pGlE",
    edition: "LCV",
    notes: "Media rack by side door-added Exchange sign",
    address: "015 E Main St, Craigmont, ID 83523, USA",
    lat: 46.240524,
    lng: -116.4727485,
    locationName: "CHS Primeland"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ5b5pncfvoFQR4AMyNorkpgM",
    edition: "LCV",
    notes: "Inside to the left on windowledge",
    address: "407 Foster St, Cottonwood, ID 83522, USA",
    lat: 46.0557105,
    lng: -116.3488103,
    locationName: "Rodonna's Country Haus Restaurant and Village Motel"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJy63Emb7voFQREyDQEU0kzSY",
    edition: "LCV",
    notes: "Inside table on left",
    address: "1306 King St, Cottonwood, ID 83522, USA",
    lat: 46.055409,
    lng: -116.34941,
    locationName: "Coyote's"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJX3xAz73voFQReCngkIJMfCU",
    edition: "LCV",
    notes: "Community Rack- inside to the left-added Exchange sticker",
    address: "404 King St, Cottonwood, ID 83522, USA",
    lat: 46.04845919999999,
    lng: -116.3496581,
    locationName: "Riener's Grocery"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJbdx_Ib3voFQRpjv3Up3xiu8",
    edition: "LCV",
    notes: "Top Black Wire Rack; Inside Left-put Exchange sign",
    address: "305 Main St, Cottonwood, ID 83522, USA",
    lat: 46.04643589999999,
    lng: -116.3477769,
    locationName: "Cottonwood Foods"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJLdsCIr3voFQRy9mCp5lRxg8",
    edition: "LCV",
    notes: "Front Counter-Steve",
    address: "312 Main St, Cottonwood, ID 83522, USA",
    lat: 46.0468826,
    lng: -116.3475274,
    locationName: "Gem Builders Supply"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJsX8bGb3voFQR3EQNAhgfSaw",
    edition: "LCV",
    notes: "Front Counter",
    address: "106 Airport Rd, Cottonwood, ID 83522, USA",
    lat: 46.0246698,
    lng: -116.3270527,
    locationName: "Bud's Power Sports"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJX8-dORLDoFQR8_Ze6mPEcfU",
    edition: "LCV",
    notes: "Inside Comm Black Rack-added Exchange sign",
    address: "105 US-95, Grangeville, ID 83530, USA",
    lat: 45.9353686,
    lng: -116.1331425,
    locationName: "The Depot | Food & Fuel"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJrb-8n0rjoIAR3yKPrib9Rzs",
    edition: "LCV",
    notes: "On front counter as you enter",
    address: "105 US-95, Grangeville, ID 83530, USA",
    lat: 45.9347309,
    lng: -116.1328122,
    locationName: "Syringa General Hospital Thrift"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJZW27AhrBoFQRzNc_RjwYLmA",
    edition: "LCV",
    notes: "Waiting Room",
    address: "614 N Pine St, Grangeville, ID 83530, USA",
    lat: 45.93153239999999,
    lng: -116.1314442,
    locationName: "The Tire Guy of Idaho"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ6WLvC4TBoFQRcaBVH5D8mis",
    edition: "LCV",
    notes: "by coffee waiting area",
    address: "608 N D St, Grangeville, ID 83530, USA",
    lat: 45.93104899999999,
    lng: -116.129695,
    locationName: "NAPA Auto Parts - Grangeville"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJw7dc1A7BoFQRZxLMrtXdbzA",
    edition: "LCV",
    notes: "Sherry will put a paper in each customer's bag of purchased items",
    address: "23 highway north 23 highway north 23 hwy north, Grangeville, ID 83530, USA",
    lat: 45.92899799999999,
    lng: -116.1318156,
    locationName: "Sherry,s closet treasures thrift store"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJKzHTF4HBoFQRC0Mlbfh2LsE",
    edition: "LCV",
    notes: "Mike Gosselaar- owner- may want to advertise",
    address: "28 US-95, Grangeville, ID 83530, USA",
    lat: 45.9288299,
    lng: -116.131826,
    locationName: "Gosselaar Power Sports"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ87gNv4HBoFQRhSULhKpqI5A",
    edition: "LCV",
    notes: "Media Rack, inside left-added Exchange sign",
    address: "901 W Main St, Grangeville, ID 83530, USA",
    lat: 45.927237,
    lng: -116.131759,
    locationName: "NomNom"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJfyRsv4HBoFQRCgbPLCHOiuw",
    edition: "LCV",
    notes: "Community rack inside",
    address: "900 W Main St, Grangeville, ID 83530, USA",
    lat: 45.92664,
    lng: -116.131197,
    locationName: "Idaho County Free Press"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJN2Jm7IHBoFQRVaElUP4A0Zc",
    edition: "LCV",
    notes: "white community rack in back of store- per manager",
    address: "712 W Main St, Grangeville, ID 83530, USA",
    lat: 45.9265912,
    lng: -116.1285728,
    locationName: "Exxon"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJrT3lZH_BoFQRP_I8LhVI8YE",
    edition: "LCV",
    notes: "on counter",
    address: "703 W South 1st St, Grangeville, ID 83530, USA",
    lat: 45.9257926,
    lng: -116.1285934,
    locationName: "Best Built Builders Supply"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJPWuRAoLBoFQR9-LFp5yi43A",
    edition: "LCV",
    notes: "Counter or table",
    address: "600 W Main St, Grangeville, ID 83530, USA",
    lat: 45.9266091,
    lng: -116.1271324,
    locationName: "Soltman Center- Syringa Hospital & Clinics"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJI0c5doLBoFQR7tAJ-23V210",
    edition: "LCV",
    notes: "inside to left- Community Rack",
    address: "415 W Main St #1446, Grangeville, ID 83530, USA",
    lat: 45.927295,
    lng: -116.1249,
    locationName: "Cloninger's Marketplace"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ8Sc6hnjBoFQRZgtlXwhH2bU",
    edition: "LCV",
    notes: "on counter",
    address: "329 W Main St, Grangeville, ID 83530, USA",
    lat: 45.9267806,
    lng: -116.1232802,
    locationName: "Norco, Grangeville"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ4956LXjBoFQRDp2IY4jO9kI",
    edition: "LCV",
    notes: "Bill & Karen Vedder, Community Ace Rack ",
    address: "139 E Main St, Grangeville, ID 83530, USA",
    lat: 45.925686,
    lng: -116.118639,
    locationName: "Ace Home Center"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJpYBU13nBoFQRBvVJoYWGvVI",
    edition: "LCV",
    notes: "Don Davis Special delivery box",
    address: "222 E Main St, Grangeville, ID 83530, USA",
    lat: 45.924997,
    lng: -116.1174571,
    locationName: "Cash & Carry"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJj8ilYnfBoFQR3auL06TRMnQ",
    edition: "LCV",
    notes: "Inside RT, Black Rack ",
    address: "247 E Main St, Grangeville, ID 83530, USA",
    lat: 45.9253606,
    lng: -116.1167315,
    locationName: "Rae Brothers Sporting Goods"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJM4l6XnfBoFQRye1bI-PShQ8",
    edition: "LCV",
    notes: "Drop on bar",
    address: "318 E Main St #2238, Grangeville, ID 83530, USA",
    lat: 45.9246894,
    lng: -116.1163547,
    locationName: "Idaho County Veterans Outreach & Community Center"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ05IGR3fBoFQRzKm4ovHcHRk",
    edition: "LCV",
    notes: "Inside on table or counter in waiting area ",
    address: "411 E Main St, Grangeville, ID 83530, USA",
    lat: 45.9248183,
    lng: -116.1142181,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ3-nzjhq-oFQRzu0Th8Umhbw",
    edition: "LCV",
    notes: "Inside rack below register, if closed, place in book exchange outside",
    address: "2895 ID-13, Harpster, ID 83552, USA",
    lat: 45.981544,
    lng: -115.9645849,
    locationName: "Harpster RV Park & Store"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJo4dewiuRoFQRY19RC1HtPDE",
    edition: "LCV",
    notes: "On Counter",
    address: "208 Main St, Stites, ID 83552, USA",
    lat: 46.0906305,
    lng: -115.9759977,
    locationName: "Stites Hardware and Home Center"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJTSnH3CuRoFQRQgGkN1SaGH8",
    edition: "LCV",
    notes: "Inside on Bar-open 8:00-9pm",
    address: "218 Main St, Stites, ID 83552, USA",
    lat: 46.0913982,
    lng: -115.9759495,
    locationName: "Silver Dollar Pizzeria & Pub"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJCcGeIWmQoFQRXtbWO7sTWG8",
    edition: "LCV",
    notes: "inside to left in wooden bin per Ben-owner",
    address: "118 Main St, Kooskia, ID 83539, USA",
    lat: 46.1384031,
    lng: -115.979037,
    locationName: "China cafe"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ46S9JWmQoFQRbtlRPRFfMZo",
    edition: "LCV",
    notes: "Inside Com rack- look for red Exchange sign",
    address: "101 Main St, Kooskia, ID 83539, USA",
    lat: 46.1388709,
    lng: -115.9786122,
    locationName: "Kooskia Mart"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJa-GOqW6QoFQRwxeJRWDEnpQ",
    edition: "LCV",
    notes: "In entry ",
    address: "26 Main St, Kooskia, ID 83539, USA",
    lat: 46.13914,
    lng: -115.9791407,
    locationName: "Kooskia Community Library"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ-bceI_uFoFQR7xO11Cw0gdo",
    edition: "LCV",
    notes: "on buckets just inside the door",
    address: "21 South Main St, Kooskia, ID 83539, USA",
    lat: 46.1394256,
    lng: -115.9785506,
    locationName: "Napa Auto Parts"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJSSEVuWCRoFQRV4o25WysnjE",
    edition: "LCV",
    notes: "inside to left ",
    address: "15 Main St, Kooskia, ID 83539, USA",
    lat: 46.13957380000001,
    lng: -115.9785974,
    locationName: "Kooskia Laundromat"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJf_3MJWmQoFQRLyaItQVU14s",
    edition: "LCV",
    notes: "Exchange rack in entrance",
    address: "13 Main St, Kooskia, ID 83539, USA",
    lat: 46.14079859999999,
    lng: -115.978672,
    locationName: "Cloninger's Marketplace"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJgc_3rG6QoFQRxK6jf0OEDBM",
    edition: "LCV",
    notes: "",
    address: "6 Main St, Kooskia, ID 83539, USA",
    lat: 46.14056249999999,
    lng: -115.9794044,
    locationName: "Kooskia Cafe"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJnQv-RbBioFQRjqBV8oImLz0",
    edition: "LCV",
    notes: "on counter by register- look for red Exchange sign",
    address: "4675 US-12, Kamiah, ID 83536, USA",
    lat: 46.1764974,
    lng: -116.0003299,
    locationName: "Dale & Jill's Sporting Goods"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJc-x9P_qFoFQRY-m-pZMJIas",
    edition: "LCV",
    notes: "Inside on counter",
    address: "102 Trenary Rd, Kamiah, ID 83536, USA",
    lat: 46.20691679999999,
    lng: -116.0048217,
    locationName: "Best Built Builders Supply"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJUQ-CsguEoFQRWQbMnsjitKU",
    edition: "LCV",
    notes: "Leave in waiting area",
    address: "107 3rd St, Kamiah, ID 83536, USA",
    lat: 46.22925790000001,
    lng: -116.0202749,
    locationName: "Perfection Tire and Auto Repair"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJUdLO1eSFoFQRekgNgCihxrA",
    edition: "LCV",
    notes: "front counter- Look for red Exchange sign",
    address: "316 3rd St, Kamiah, ID 83536, USA",
    lat: 46.2293271,
    lng: -116.0250042,
    locationName: "JACOBS LUMBER COMPANY"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ-1ma3vqFoFQRs0xwp4_i4UA",
    edition: "LCV",
    notes: "Cafe area ",
    address: "419 3rd St, Kamiah, ID 83536, USA",
    lat: 46.2286935,
    lng: -116.0264037,
    locationName: "It Se-Ye-Ye Casino"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJw7fPGPuFoFQRaFIl7w2nqIA",
    edition: "LCV",
    notes: "On Exchange rack next to other rack per Betty",
    address: "414 3rd St, Kamiah, ID 83536, USA",
    lat: 46.2292181,
    lng: -116.0264228,
    locationName: "Pitstop"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ7yynvfuFoFQRdr7sW07JJ64",
    edition: "LCV",
    notes: "EX 8 POCKET RACK",
    address: "508 3rd St, Kamiah, ID 83536, USA",
    lat: 46.2297786,
    lng: -116.0275363,
    locationName: "Cloninger's Marketplace"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJozMY-fqFoFQR9pHXgAcoef0",
    edition: "LCV",
    notes: "Inside Ace Rack in front near Ace flyers",
    address: "403 Main St, Kamiah, ID 83536, USA",
    lat: 46.2279691,
    lng: -116.0276064,
    locationName: "Ace Marketplace"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJwXhacfqFoFQRU_7VyoHkQ_s",
    edition: "LCV",
    notes: "Exchange Rack- straight in to left of register",
    address: "318 Main St, Kamiah, ID 83536, USA",
    lat: 46.2284605,
    lng: -116.0282424,
    locationName: "Arzen's Kamiah Drug"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ7yynvfuFoFQRZB7XvxC9498",
    edition: "LCV",
    notes: " Inside Door on the table",
    address: "714 3rd St, Kamiah, ID 83536, USA",
    lat: 46.2293275,
    lng: -116.030218,
    locationName: "Palenque Mexican Restaurant"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJlxoHlPuFoFQR8uGZMLHmEOg",
    edition: "LCV",
    notes: "Exchange rack inside to the right",
    address: "804 3rd St, Kamiah, ID 83536, USA",
    lat: 46.2293822,
    lng: -116.031049,
    locationName: "The Station"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ7yynvfuFoFQRnnMuTSH8eR4",
    edition: "LCV",
    notes: "front counter in corner",
    address: "814 3rd Street, US-12, Kamiah, ID 83536, USA",
    lat: 46.2294808,
    lng: -116.0313563,
    locationName: "Pizza Factory"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJrV8wnahxoFQR3qbmon7lLZM",
    edition: "LCV",
    notes: "Inside to right on newspaper rack",
    address: "125 Michigan Ave, Orofino, ID 83544, USA",
    lat: 46.47949000000001,
    lng: -116.2553867,
    locationName: "Sunset Mart"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ7eWqG7hxoFQRhbbVs0dWCuU",
    edition: "LCV",
    notes: "closes at 2:00 -if closed roll up tight and wedge into door handles",
    address: "130 Johnson Ave, Orofino, ID 83544, USA",
    lat: 46.479448,
    lng: -116.253452,
    locationName: "Krystal Cafe"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJg15Q2LdxoFQRux7J8EHFQz0",
    edition: "LCV",
    notes: "On Counter",
    address: "223 Johnson Ave, Orofino, ID 83544, USA",
    lat: 46.47849219999999,
    lng: -116.253517,
    locationName: "Augies"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJkZ8x_LdxoFQR6Zb6btKAVAc",
    edition: "LCV",
    notes: "inside on top of wooden fireplace table",
    address: "203 Johnson Ave, Orofino, ID 83544, USA",
    lat: 46.4787,
    lng: -116.2536903,
    locationName: "Fiesta En Jalisco"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJRTTeAMo9oFQRMK6sv7ArKUk",
    edition: "LCV",
    notes: "On Counter; Pete, Owner",
    address: "218 1st St, Orofino, ID 83544, USA",
    lat: 46.4782928,
    lng: -116.2527734,
    locationName: "Hanson Garage, Inc."
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJjyRG2LdxoFQRYxwol2eqEeE",
    edition: "LCV",
    notes: "on window ledge",
    address: "302 Johnson Ave, Orofino, ID 83544, USA",
    lat: 46.4780337,
    lng: -116.2525175,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJcVeW8bpxoFQRfyRwpJwdz1M",
    edition: "LCV",
    notes: "Front counter",
    address: "1135 Michigan Ave, Orofino, ID 83544, USA",
    lat: 46.48344760000001,
    lng: -116.2421912,
    locationName: "Olive's Auto Parts Inc"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJ4clZ07pxoFQR5vgBcLA8b1M",
    edition: "LCV",
    notes: "White Box Shelf",
    address: "1130 Michigan Ave, Orofino, ID 83544, USA",
    lat: 46.4840763,
    lng: -116.2427358,
    locationName: "Orofino Marketplace"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJn528PrhxoFQRD8H6M9fzRiQ",
    edition: "LCV",
    notes: "Media Rack Inside Left",
    address: "220 Michigan Ave, Orofino, ID 83544, USA",
    lat: 46.4801722,
    lng: -116.2534861,
    locationName: "Ponderosa Restaurant & Brass Rail Lounge"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJZUvWnuVtoFQRQt5J7ePwnH4",
    edition: "LCV",
    notes: "Inside by cashier",
    address: "13834 US-12, Orofino, ID 83544, USA",
    lat: 46.50035339999999,
    lng: -116.3294959,
    locationName: "Exxon"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJOz9GePttoFQRWJUfsibPwh8",
    edition: "LCV",
    notes: "Exchange Rack inside",
    address: "13030 US-12, Orofino, ID 83544, USA",
    lat: 46.498525,
    lng: -116.3202819,
    locationName: "Barney's Harvest Foods"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJLatC7XNtoFQRHucRCRRopec",
    edition: "LCV",
    notes: "Front counter",
    address: "13020 US-12, Orofino, ID 83544, USA",
    lat: 46.49860789999999,
    lng: -116.3198746,
    locationName: "Clearwater Canyon Pharmacy"
  },
  {
    route: "Grangeville Loop",
    placeId: "ChIJl4u-3ftxoFQRGJXhMu_i7dc",
    edition: "LCV",
    notes: "Cafe entrance, on the bench  ",
    address: "10820 US-12, Orofino, ID 83544, USA",
    lat: 46.4948845,
    lng: -116.294342,
    locationName: "Riverside Lanes"
  },
  {
    route: "MosesLake",
    placeId: "ChIJXRLpXbFAmVQRhOc13phMebY",
    edition: "WML",
    notes: "",
    address: "8034 Valley Rd NE, Moses Lake, WA 98837, USA",
    lat: 47.1422459,
    lng: -119.3201305,
    locationName: "Cascade Valley Grocery"
  },
  {
    route: "MosesLake",
    placeId: "ChIJzfjOs15HmVQRElplbjySQyQ",
    edition: "WML",
    notes: "",
    address: "789 N Central Dr, Moses Lake, WA 98837, USA",
    lat: 47.1428451,
    lng: -119.283333,
    locationName: "Goodwill Industries of the Inland Northwest"
  },
  {
    route: "MosesLake",
    placeId: "ChIJGyIXbFhHmVQRjadJskD9mkI",
    edition: "WML",
    notes: "",
    address: "518 W Valley Rd, Moses Lake, WA 98837, USA",
    lat: 47.1386799,
    lng: -119.2852762,
    locationName: "Valley Quick Stop"
  },
  {
    route: "MosesLake",
    placeId: "ChIJfUgGQlhHmVQRhfNbTWjKiW4",
    edition: "WML",
    notes: "",
    address: "530 W Valley Rd, Moses Lake, WA 98837, USA",
    lat: 47.13947839999999,
    lng: -119.2853696,
    locationName: "Chico's Pizza"
  },
  {
    route: "MosesLake",
    placeId: "ChIJ7-bZtKA4mVQRI9BjAftfz_w",
    edition: "WML",
    notes: "",
    address: "640 N Stratford Rd, Moses Lake, WA 98837, USA",
    lat: 47.13803,
    lng: -119.27865,
    locationName: "Circle K"
  },
  {
    route: "MosesLake",
    placeId: "ChIJB6-q16A4mVQRJfOruRAH2l0",
    edition: "WML",
    notes: "",
    address: "619 N Stratford Rd, Moses Lake, WA 98837, USA",
    lat: 47.1371962,
    lng: -119.277299,
    locationName: "Plaza Coin-Op Laundry"
  },
  {
    route: "MosesLake",
    placeId: "ChIJF4BgZF9HmVQRcmVWHgUgCXI",
    edition: "WML",
    notes: "",
    address: "825 N Stratford Rd, Moses Lake, WA 98837, USA",
    lat: 47.1400143,
    lng: -119.278022,
    locationName: "McDonald's"
  },
  {
    route: "MosesLake",
    placeId: "ChIJuWuE6604mVQR9yy9GfSk7tI",
    edition: "WML",
    notes: "",
    address: "710 W Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.12744410000001,
    lng: -119.2868099,
    locationName: "Simply Divine Espresso"
  },
  {
    route: "MosesLake",
    placeId: "ChIJY-7sjEg_mVQRONaSeZbXtjY",
    edition: "WML",
    notes: "",
    address: "1606 W Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1161283,
    lng: -119.2966085,
    locationName: "Adi Food Mart"
  },
  {
    route: "MosesLake",
    placeId: "ChIJHSJ3dT8_mVQRvkHdyF3lqVc",
    edition: "WML",
    notes: "",
    address: "2224 W Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1096364,
    lng: -119.3047468,
    locationName: "Lake's Market"
  },
  {
    route: "MosesLake",
    placeId: "ChIJFzIUTQ4_mVQR8W_3dWrf5QI",
    edition: "WML",
    notes: "",
    address: "420 S Wanapum Dr, Moses Lake, WA 98837, USA",
    lat: 47.09863050000001,
    lng: -119.3170704,
    locationName: "Colville Fuels Half Sun Travel Plaza"
  },
  {
    route: "MosesLake",
    placeId: "ChIJY8WKaUw_mVQRHY-_kqB6LXw",
    edition: "WML",
    notes: "",
    address: "1147 W Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1209576,
    lng: -119.292462,
    locationName: "North 40 Outfitters"
  },
  {
    route: "MosesLake",
    placeId: "ChIJ21ATb7I4mVQR0Puhw7vDU8Y",
    edition: "WML",
    notes: "",
    address: "723 W 3rd Ave, Moses Lake, WA 98837, USA",
    lat: 47.1258702,
    lng: -119.2861428,
    locationName: "Mi Casa Market"
  },
  {
    route: "MosesLake",
    placeId: "ChIJu6zHS1I5mVQRDUajl-CSxBY",
    edition: "WML",
    notes: "",
    address: "321 W Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.12916190000001,
    lng: -119.2822141,
    locationName: "Laundry Lavenderia"
  },
  {
    route: "MosesLake",
    placeId: "ChIJf-4Guq84mVQRPNFnc_gOWx0",
    edition: "WML",
    notes: "",
    address: "317 W Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1292815,
    lng: -119.2818935,
    locationName: "Tacos El Rey"
  },
  {
    route: "MosesLake",
    placeId: "ChIJSyKs-q84mVQRDUyEUc6IUDg",
    edition: "WML",
    notes: "",
    address: "324 S Ash St, Moses Lake, WA 98837, USA",
    lat: 47.12877899999999,
    lng: -119.2787827,
    locationName: "Windermere Property Management Grant County"
  },
  {
    route: "MosesLake",
    placeId: "ChIJW15bec45mVQRAjh6o-43I7A",
    edition: "WML",
    notes: "",
    address: "117 W 3rd Ave, Moses Lake, WA 98837, USA",
    lat: 47.12959670000001,
    lng: -119.2788025,
    locationName: "Emperador Azteca Moses Lake"
  },
  {
    route: "MosesLake",
    placeId: "ChIJU1mG98c4mVQRNL7iLCDKaIs",
    edition: "WML",
    notes: "",
    address: "1000 S Pioneer Way, Moses Lake, WA 98837, USA",
    lat: 47.1207885,
    lng: -119.2681495,
    locationName: "Coldwell Banker Tomlinson Ranch & Home"
  },
  {
    route: "MosesLake",
    placeId: "ChIJAcMK3Ms4mVQRYeo5G9qeggw",
    edition: "WML",
    notes: "",
    address: "209 E Nelson Rd, Moses Lake, WA 98837, USA",
    lat: 47.1162862,
    lng: -119.2725811,
    locationName: "FRANK'S SUPERETTE"
  },
  {
    route: "MosesLake",
    placeId: "ChIJ6XtF09c4mVQRmXRNwuAlE5M",
    edition: "WML",
    notes: "",
    address: "Yonezawa Blvd, Moses Lake, WA 98837, USA",
    lat: 47.10400443941192,
    lng: -119.2543941041679,
    locationName: "Yonezawa Boulevard"
  },
  {
    route: "MosesLake",
    placeId: "ChIJj_A9HgA5mVQRN9EqbGmguDs",
    edition: "WML",
    notes: "",
    address: "2481 Maiers Rd, Moses Lake, WA 98837, USA",
    lat: 47.10190590000001,
    lng: -119.2477553,
    locationName: "Moses Lake Market"
  },
  {
    route: "MosesLake",
    placeId: "ChIJDUi_vSg5mVQR52zWuqswOa8",
    edition: "WML",
    notes: "",
    address: "1725 Kittelson Rd, Moses Lake, WA 98837, USA",
    lat: 47.1013515,
    lng: -119.2483236,
    locationName: "Conoco"
  },
  {
    route: "MosesLake",
    placeId: "ChIJG0h1ryg5mVQRxWRuJiBRLJQ",
    edition: "WML",
    notes: "",
    address: "1795 Kittelson Rd, Moses Lake, WA 98837, USA",
    lat: 47.1011,
    lng: -119.2472041,
    locationName: "McDonald's"
  },
  {
    route: "MosesLake",
    placeId: "ChIJz236LLo5mVQRKpr2dIaLlN8",
    edition: "WML",
    notes: "",
    address: "1807 East Kittelson Rd, Moses Lake, WA 98837, USA",
    lat: 47.1013433,
    lng: -119.2454241,
    locationName: "Bob's Cafe"
  },
  {
    route: "MosesLake",
    placeId: "ChIJ6YTdOLw4mVQR8Xr5AmN49nU",
    edition: "WML",
    notes: "",
    address: "801 E Wheeler Rd, Moses Lake, WA 98837, USA",
    lat: 47.1284798,
    lng: -119.2655642,
    locationName: "Samaritan Hospital"
  },
  {
    route: "MosesLake",
    placeId: "ChIJOzRn_8U4mVQR70b5ZIlTj0k",
    edition: "WML",
    notes: "",
    address: "1253 S Pioneer Way, Moses Lake, WA 98837, USA",
    lat: 47.1167837,
    lng: -119.2638754,
    locationName: "ASTRO"
  },
  {
    route: "MosesLake",
    placeId: "ChIJhaHP1Mc4mVQRE-o-Qegsj7Q",
    edition: "WML",
    notes: "",
    address: "1135 S Pioneer Way, Moses Lake, WA 98837, USA",
    lat: 47.11907699999999,
    lng: -119.2661014,
    locationName: "Franz Bakery Outlet"
  },
  {
    route: "MosesLake",
    placeId: "ChIJ70sjhbs4mVQRXcaTiHVcQOo",
    edition: "WML",
    notes: "",
    address: "705 S Pioneer Way, Moses Lake, WA 98837, USA",
    lat: 47.1283259,
    lng: -119.268854,
    locationName: "Big Smoke"
  },
  {
    route: "MosesLake",
    placeId: "ChIJt0-EaKQ4mVQRnAC2JLBquZs",
    edition: "WML",
    notes: "",
    address: "406 E Broadway Ave Apt B, Moses Lake, WA 98837, USA",
    lat: 47.1331934,
    lng: -119.2751609,
    locationName: "General Laundry"
  },
  {
    route: "MosesLake",
    placeId: "ChIJSWUWcqQ4mVQRu0mfyMiVCYY",
    edition: "WML",
    notes: "",
    address: "418 E Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1335728,
    lng: -119.2748317,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "MosesLake",
    placeId: "ChIJT68ceqQ4mVQRiXdekO8BneA",
    edition: "WML",
    notes: "",
    address: "423 E Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1332902,
    lng: -119.2741167,
    locationName: "Faber Industrial Supply"
  },
  {
    route: "MosesLake",
    placeId: "ChIJCfvch6M4mVQRQVdOeH1evu4",
    edition: "WML",
    notes: "",
    address: "507 E Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1335161,
    lng: -119.2734642,
    locationName: "Sporty's Steakhouse"
  },
  {
    route: "MosesLake",
    placeId: "ChIJXyCadaM4mVQRfXiSL7KJQ9k",
    edition: "WML",
    notes: "",
    address: "602 E 3rd Ave, Moses Lake, WA 98837, USA",
    lat: 47.1334889,
    lng: -119.271757,
    locationName: "Senior CenterThrift Store"
  },
  {
    route: "MosesLake",
    placeId: "ChIJzZOBH6I4mVQRAF_W3-2qCBI",
    edition: "WML",
    notes: "",
    address: "820 E Broadway Ave, Moses Lake, WA 98837, USA",
    lat: 47.1359049,
    lng: -119.2703293,
    locationName: "Norco, Moses Lake"
  },
  {
    route: "MosesLake",
    placeId: "ChIJk33zGNA4mVQR_ZrPp7xaZwo",
    edition: "WML",
    notes: "",
    address: "1550 S Pioneer Way Suite 100, Moses Lake, WA 98837, USA",
    lat: 47.1121487,
    lng: -119.2602805,
    locationName: "CareToday at Samaritan Clinic on Pioneer"
  },
  {
    route: "MosesLake",
    placeId: "ChIJw7epYpE4mVQRK6Xgrp5IE4Q",
    edition: "WML",
    notes: "",
    address: "1520 E Wheeler Rd, Moses Lake, WA 98837, USA",
    lat: 47.1323406,
    lng: -119.2505741,
    locationName: "Ziggy’s Home Improvement"
  },
  {
    route: "MosesLake",
    placeId: "ChIJ1b-m84w4mVQRJzbLzBmvuTI",
    edition: "WML",
    notes: "",
    address: "11852 Wheeler Rd NE, Moses Lake, WA 98837, USA",
    lat: 47.13151589999999,
    lng: -119.2390102,
    locationName: "One Stop Mart & Truck Stop"
  },
  {
    route: "MosesLake",
    placeId: "ChIJn3cWCF5HmVQRi1mIZ1PmTM8",
    edition: "WML",
    notes: "",
    address: "1158 N Stratford Rd, Moses Lake, WA 98837, USA",
    lat: 47.1447673,
    lng: -119.2786244,
    locationName: "76"
  },
  {
    route: "MosesLake",
    placeId: "ChIJrYebfH9HmVQRVxskskw2KW0",
    edition: "WML",
    notes: "",
    address: "4793 Stratford Rd NE, Moses Lake, WA 98837, USA",
    lat: 47.1574073,
    lng: -119.2776136,
    locationName: "Dos tesorros co."
  },
  {
    route: "MosesLake",
    placeId: "ChIJS8f3ECVHmVQRMuP0BkJjM8w",
    edition: "WML",
    notes: "",
    address: "5219 Patton Blvd, Moses Lake, WA 98837, USA",
    lat: 47.1635874,
    lng: -119.3132066,
    locationName: "Exxon"
  },
  {
    route: "MosesLake",
    placeId: "ChIJU50doE0_mVQR2JUuvVyUD1s",
    edition: "WML",
    notes: "",
    address: "9299 Beacon Rd NE, Moses Lake, WA 98837, USA",
    lat: 47.15014219999999,
    lng: -119.2933006,
    locationName: "Community Services of Moses Lake"
  },
  {
    route: "MosesLake",
    placeId: "ChIJudqJ2y5cmVQRazz9jOyUyNk",
    edition: "WML",
    notes: "",
    address: "Ephrata, WA 98823, USA",
    lat: 47.3102425,
    lng: -119.5589928,
    locationName: "Safeway on Basin St SW"
  },
  {
    route: "MosesLake",
    placeId: "ChIJyU16Iy9cmVQRWrZO5lJyQwE",
    edition: "WML",
    notes: "",
    address: "1140 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.3104387,
    lng: -119.5573557,
    locationName: "Ag Supply Ace Hardware"
  },
  {
    route: "MosesLake",
    placeId: "ChIJg_MSNy9cmVQRE-n_O-i7MBU",
    edition: "WML",
    notes: "",
    address: "1050 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.31115699999999,
    lng: -119.557962,
    locationName: "NAPA Auto Parts - Ephrata Auto Parts"
  },
  {
    route: "MosesLake",
    placeId: "ChIJcQ__DidcmVQROKGGSvBf91k",
    edition: "WML",
    notes: "",
    address: "456 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.31578450000001,
    lng: -119.5548517,
    locationName: "Cost Less Tobacco"
  },
  {
    route: "MosesLake",
    placeId: "ChIJr_mO6y5cmVQRD59SOUfqNyQ",
    edition: "WML",
    notes: "",
    address: "1154 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.3094997,
    lng: -119.5593219,
    locationName: "Short Stop Gas Station"
  },
  {
    route: "MosesLake",
    placeId: "ChIJx0SOvy1cmVQRDzWkbpuBnMM",
    edition: "WML",
    notes: "",
    address: "1352 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.3065446,
    lng: -119.5610328,
    locationName: "Chukar Hill Shell"
  },
  {
    route: "MosesLake",
    placeId: "ChIJZ7Xyli1cmVQRwnAz-OXlbzM",
    edition: "WML",
    notes: "",
    address: "1410 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.3063395,
    lng: -119.5614158,
    locationName: "Four Seasons Farm Service"
  },
  {
    route: "MosesLake",
    placeId: "ChIJyQFEj2pdmVQRN5CSWOi_yXQ",
    edition: "WML",
    notes: "",
    address: "1460 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.3055087,
    lng: -119.561056,
    locationName: "Grocery Outlet"
  },
  {
    route: "MosesLake",
    placeId: "ChIJb6rbgTJcmVQRjM6i_uew_Jo",
    edition: "WML",
    notes: "",
    address: "1510 Basin St SW, Ephrata, WA 98823, USA",
    lat: 47.3051801,
    lng: -119.5618404,
    locationName: "Hales Farm and Feeds"
  },
  {
    route: "MosesLake",
    placeId: "ChIJFxEHgVV7mVQROsAYM9W7NJA",
    edition: "WML",
    notes: "",
    address: "305 F St SE, Quincy, WA 98848, USA",
    lat: 47.234261,
    lng: -119.847509,
    locationName: "NAPA Auto Parts - Quincy Auto Parts"
  },
  {
    route: "MosesLake",
    placeId: "ChIJb59J9QsGkVQRQb01I6MhzSI",
    edition: "WML",
    notes: "",
    address: "223 F St SE, Quincy, WA 98848, USA",
    lat: 47.2343619,
    lng: -119.848728,
    locationName: "Quincy Short Stop"
  },
  {
    route: "MosesLake",
    placeId: "ChIJ9yvRZKh8mVQRWc_1yHLg3e4",
    edition: "WML",
    notes: "",
    address: "211 F St SW, Quincy, WA 98848, USA",
    lat: 47.2335413,
    lng: -119.8577436,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "MosesLake",
    placeId: "ChIJCyOjL6h8mVQRyjuY7pteQuQ",
    edition: "WML",
    notes: "",
    address: "106 F St SW, Quincy, WA 98848, USA",
    lat: 47.232781,
    lng: -119.85557,
    locationName: "Akins Fresh Market"
  },
  {
    route: "MosesLake",
    placeId: "ChIJA4YT7ux2mVQRcec3Cmg_fAk",
    edition: "WML",
    notes: "",
    address: "404 S Frontage Rd NW, George, WA 98824, USA",
    lat: 47.0828256,
    lng: -119.859979,
    locationName: "Shree's Truck Stop & Gas Station - Shaan's Autos"
  },
  {
    route: "MosesLake",
    placeId: "ChIJE0-sVZ4_mVQRpIzQOCybpLc",
    edition: "WML",
    notes: "",
    address: "4421 Prichard Rd, Moses Lake, WA 98837, USA",
    lat: 47.10357169999999,
    lng: -119.3416084,
    locationName: "Chevron"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJw3CJ0-HMm1QRHQDierWxw2g",
    edition: "WML",
    notes: "",
    address: "11 Grant Rd, East Wenatchee, WA 98802, USA",
    lat: 47.4067005,
    lng: -120.2909294,
    locationName: "Fred Meyer"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJ12qxRx7Nm1QRBl95uNnZ2f0",
    edition: "WML",
    notes: "",
    address: "96 Grant Rd, East Wenatchee, WA 98802, USA",
    lat: 47.405417,
    lng: -120.288868,
    locationName: "Grant Road 76"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJ331r4xfNm1QR4ciDkI4Ahgc",
    edition: "WML",
    notes: "",
    address: "418 Rock Island Rd, East Wenatchee, WA 98802, USA",
    lat: 47.3973907,
    lng: -120.2842644,
    locationName: "Jimmy's Diner"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJA7B4ou_Mm1QRfBr0QBPe45Y",
    edition: "WML",
    notes: "",
    address: "1051 Valley Mall Pkwy, East Wenatchee, WA 98802, USA",
    lat: 47.4184575,
    lng: -120.2947906,
    locationName: "Discount Tobacco & Beverage"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJFdkhe4bLm1QR5prhmgRTLzU",
    edition: "WML",
    notes: "",
    address: "50 29th St NW, East Wenatchee, WA 98802, USA",
    lat: 47.45259,
    lng: -120.298856,
    locationName: "Bonaventure of East Wenatchee"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJRycAfJHLm1QRtewebeKDc6A",
    edition: "WML",
    notes: "",
    address: "3330 Sunset Hwy, East Wenatchee, WA 98802, USA",
    lat: 47.46199379999999,
    lng: -120.2976786,
    locationName: "Shell"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJ3w8wyYfJm1QRudbgO_ikWt8",
    edition: "WML",
    notes: "",
    address: "10 NE Cascade Ave, East Wenatchee, WA 98802, USA",
    lat: 47.5011544,
    lng: -120.2963948,
    locationName: "Van Doren Sales"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJg81TveXMm1QR_4S9O6v91Oc",
    edition: "WML",
    notes: "",
    address: "13228 US-2, East Wenatchee, WA 98802, USA",
    lat: 47.528414,
    lng: -120.2843236,
    locationName: "Shell"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJ757fwp25m1QRpxye1CkhN5U",
    edition: "WML",
    notes: "",
    address: "Orondo, WA 98843, USA",
    lat: 47.62576500000001,
    lng: -120.227321,
    locationName: "Orondo Market"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJTZraEK2Qm1QRqHiSZrGxgck",
    edition: "WML",
    notes: "",
    address: "23041 US-97, Orondo, WA 98843, USA",
    lat: 47.7755306,
    lng: -120.0282155,
    locationName: "Lone Pine Fruit & Espresso"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJScSX_9qBnFQRgwO9Lo5dqAU",
    edition: "WML",
    notes: "",
    address: "245 Lakeshore Dr, Pateros, WA 98846, USA",
    lat: 48.051826,
    lng: -119.90212,
    locationName: "Super Store"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJqXkCP7GGnFQRkOWKavaDZYc",
    edition: "WML",
    notes: "",
    address: "21 Brewster Grange Rd, Brewster, WA 98812, USA",
    lat: 48.094005,
    lng: -119.806409,
    locationName: "Brewster Veterinary Clinic"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJHzqGU20ECUER-zxQB98QLf8",
    edition: "WML",
    notes: "",
    address: "25899 US-97, Brewster, WA 98812, USA",
    lat: 48.0932685,
    lng: -119.8077284,
    locationName: "Brewster Car Care Center"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJrWl8eimOnFQRUi_1LQS3_yw",
    edition: "WML",
    notes: "",
    address: "907 US-97, Brewster, WA 98812, USA",
    lat: 48.1003477,
    lng: -119.7880615,
    locationName: "Brewster Marketplace"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJCUXBqpeGnFQRHVU_8RciQao",
    edition: "WML",
    notes: "",
    address: "715 US-97, Brewster, WA 98812, USA",
    lat: 48.1014941,
    lng: -119.786246,
    locationName: "Chevron Brewster"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJAUMPwpCGnFQRJxrisTDXcB8",
    edition: "WML",
    notes: "",
    address: "405 US-97, Brewster, WA 98812, USA",
    lat: 48.1036366,
    lng: -119.7813184,
    locationName: "Exxon"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJD119rk58nFQRa_CBCTM4MZM",
    edition: "WML",
    notes: "",
    address: "1106 Columbia Ave, Bridgeport, WA 98813, USA",
    lat: 48.0100989,
    lng: -119.675378,
    locationName: "Bridgeport Plaza Market"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJlc1v6l59nFQRvVOJ8URWaiI",
    edition: "WML",
    notes: "",
    address: "1203 Columbia Ave, Bridgeport, WA 98813, USA",
    lat: 48.0097579,
    lng: -119.6738815,
    locationName: "San Marcos Market LLC"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJ-WVIhkJ8nFQRY9Q94afM2vY",
    edition: "WML",
    notes: "",
    address: "2606 Foster Creek Ave, Bridgeport, WA 98813, USA",
    lat: 47.9995534,
    lng: -119.6590813,
    locationName: "Quik-E-Mart"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJFWZqstOHnFQRmNu7ziQj1Hg",
    edition: "WML",
    notes: "",
    address: "50 A Cassimer Bar Rd, Brewster, WA 98812, USA",
    lat: 48.1030045,
    lng: -119.6975527,
    locationName: "Chief Joseph Smoke Shop"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJRfnA2B6bm1QRE4T_GBsvn64",
    edition: "WML",
    notes: "",
    address: "817 E Woodin Ave, Chelan, WA 98816, USA",
    lat: 47.8397716,
    lng: -120.0044998,
    locationName: "Bill's Gas"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJHVLDBRubm1QR5T4UBSRnvGg",
    edition: "WML",
    notes: "",
    address: "301 E Woodin Ave, Chelan, WA 98816, USA",
    lat: 47.8402042,
    lng: -120.0143479,
    locationName: "Chelan Shell Foodmart"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJ4xpJEhubm1QRUzTpSzDFfDU",
    edition: "WML",
    notes: "",
    address: "302 E Woodin Ave, Chelan, WA 98816, USA",
    lat: 47.8396122,
    lng: -120.0146197,
    locationName: "Lake Chelan E-Z Mart"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJS5r-xg-bm1QR51wllVn0c1Q",
    edition: "WML",
    notes: "",
    address: "310 W Manson Hwy, Chelan, WA 98816, USA",
    lat: 47.8427307,
    lng: -120.0232573,
    locationName: "Chelan Market Fresh"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJRaaqgeWbm1QRr3NLI8UUfQo",
    edition: "WML",
    notes: "",
    address: "53 S Lakeshore Rd, Chelan, WA 98816, USA",
    lat: 47.8399516,
    lng: -120.0911019,
    locationName: "Pat & Mike's Chevron"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJmTH7gnu8m1QRtFqyYUAXVTs",
    edition: "WML",
    notes: "",
    address: "Entiat, WA 98822, USA",
    lat: 47.68443000000001,
    lng: -120.2069424,
    locationName: "Food Mart"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJP22ZAom7m1QRX9jBr3-Yyjs",
    edition: "WML",
    notes: "",
    address: "2038 Entiat Way, Entiat, WA 98822, USA",
    lat: 47.676475,
    lng: -120.2088696,
    locationName: "Entiat Food Center"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJO2iWgkrKm1QRsmqUx7x5X1Q",
    edition: "WML",
    notes: "",
    address: "3607 US-97 ALT, Wenatchee, WA 98801, USA",
    lat: 47.4839991,
    lng: -120.3179317,
    locationName: "Wenatchee Valley Truck Stop"
  },
  {
    route: "WenatcheeA",
    placeId: "ChIJMWlLF2HNm1QR8uCMze0ivL0",
    edition: "WML",
    notes: "",
    address: "3628 US-97 ALT, Wenatchee, WA 98801, USA",
    lat: 47.4837902,
    lng: -120.3199314,
    locationName: "Builders FirstSource"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJj80Db57Mm1QRyT8_rMb2IgA",
    edition: "WML",
    notes: "",
    address: "1128 N Miller St, Wenatchee, WA 98801, USA",
    lat: 47.4378925,
    lng: -120.3261099,
    locationName: "Albertsons"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ7YGj6Z7Mm1QRZNW8XVjwQ6o",
    edition: "WML",
    notes: "",
    address: "1041 N Miller St, Wenatchee, WA 98801, USA",
    lat: 47.4363883,
    lng: -120.3246166,
    locationName: "Chevron"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJPWD959HMm1QRCYAkMZ-eDMk",
    edition: "WML",
    notes: "",
    address: "707 N Emerson Ave, Wenatchee, WA 98801, USA",
    lat: 47.4316861,
    lng: -120.3221649,
    locationName: "Wenatchee Valley Medical Center"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ1w7tzrbNm1QR3WOHEdL28Pg",
    edition: "WML",
    notes: "",
    address: "501 N Western Ave, Wenatchee, WA 98801, USA",
    lat: 47.4302951,
    lng: -120.3459344,
    locationName: "Dizzy D's"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJAUvGIanMm1QRg66Z29DQd04",
    edition: "WML",
    notes: "",
    address: "509 N Western Ave, Wenatchee, WA 98801, USA",
    lat: 47.430526,
    lng: -120.3451105,
    locationName: "Abby's Legendary Pizza"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJgwPg5qjMm1QRx5qu__NfGcg",
    edition: "WML",
    notes: "",
    address: "1732 Fifth St, Wenatchee, WA 98801, USA",
    lat: 47.4299855,
    lng: -120.3457588,
    locationName: "Western Market"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ77qr3J3Mm1QRy97f-gQpY5c",
    edition: "WML",
    notes: "",
    address: "1210 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4390387,
    lng: -120.3234606,
    locationName: "Wenatchee Specialty Store"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ0_sYruXMm1QRjrVv8FdH66I",
    edition: "WML",
    notes: "",
    address: "1208 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4385586,
    lng: -120.3234156,
    locationName: "Wenatchee Fraternal Order of Eagles"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJJ76cK5zMm1QRQ-T_X3gdR54",
    edition: "WML",
    notes: "",
    address: "1112 N Wenatchee Ave #1534, Wenatchee, WA 98801, USA",
    lat: 47.4379243,
    lng: -120.3225953,
    locationName: "Buzz Inn Steakhouse & Lounge"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJtcDXS5zMm1QRR50KLb6IUX4",
    edition: "WML",
    notes: "",
    address: "1115 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4379214,
    lng: -120.3221146,
    locationName: "Ag Supply Hardware and Feed"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ1U1SabrNm1QRCVbm_Lptv-s",
    edition: "WML",
    notes: "",
    address: "815 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.43429,
    lng: -120.31907,
    locationName: "Best Western Plus"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJswHKzp3Mm1QRUZs5dY7CMPU",
    edition: "WML",
    notes: "",
    address: "907 A N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4359136,
    lng: -120.3191968,
    locationName: "Good Spirits Liquor Store"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJqyA3E2LLm1QR14vnzFvRatw",
    edition: "WML",
    notes: "",
    address: "1314 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.441237,
    lng: -120.325488,
    locationName: "Performance Auto Sound"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJQXpnnm_Lm1QRZFoSeKKd-ys",
    edition: "WML",
    notes: "",
    address: "1816 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4497012,
    lng: -120.3323249,
    locationName: "North Avenue Market"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ_1AS8bDKm1QRzVysBZoPQ4Q",
    edition: "WML",
    notes: "",
    address: "2960 Easy St, Wenatchee, WA 98801, USA",
    lat: 47.48743400000001,
    lng: -120.4117581,
    locationName: "Hot Rod Cafe"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJyeuR4jG1m1QRtE9ffdIZuis",
    edition: "WML",
    notes: "",
    address: "100 Apple Annie Ave, Cashmere, WA 98815, USA",
    lat: 47.5173187,
    lng: -120.4502334,
    locationName: "Apple Annie Antique Gallery"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ304d6jG1m1QRYmuoGxAL2r4",
    edition: "WML",
    notes: "",
    address: "102 Titchenal Rd, Cashmere, WA 98815, USA",
    lat: 47.519985,
    lng: -120.4542878,
    locationName: "BJ's Cashmere"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJUyNXvjG1m1QRB17zFHL49DU",
    edition: "WML",
    notes: "",
    address: "107 Mount Cashmere Pl, Cashmere, WA 98815, USA",
    lat: 47.5125839,
    lng: -120.465353,
    locationName: "Cashmere Quick Stop"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJNZ5dZTG1m1QRAWPtGRLzfxU",
    edition: "WML",
    notes: "",
    address: "130 Titchenal Rd, Cashmere, WA 98815, USA",
    lat: 47.5190503,
    lng: -120.4540349,
    locationName: "Martin's Market Place"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJY4xYyDK1m1QRnYW1teo6HJI",
    edition: "WML",
    notes: "",
    address: "Blue Star Way, Cashmere, WA 98815, USA",
    lat: 47.5170911243825,
    lng: -120.461435912324,
    locationName: "Blue Star Way"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJL4Vyriy1m1QRzu3_85yiZNw",
    edition: "WML",
    notes: "",
    address: "1",
    lat: 47.5220689,
    lng: -120.467428,
    locationName: "Weeds Cafe"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ4-f0pdRKmlQRQGMOPGVLYH0",
    edition: "WML",
    notes: "",
    address: "103 Cottage Ave, Cashmere, WA 98815, USA",
    lat: 47.522382,
    lng: -120.469612,
    locationName: "NCW Realty Inc"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJE2tOytRKmlQRbra6bRljXuc",
    edition: "WML",
    notes: "",
    address: "Cashmere, WA 98815, USA",
    lat: 47.523357,
    lng: -120.469963,
    locationName: "Hometown Market"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJg9t1u9RKmlQRx_u32vbZs6c",
    edition: "WML",
    notes: "",
    address: "201 Aplets Way, Cashmere, WA 98815, USA",
    lat: 47.52249559999999,
    lng: -120.4702891,
    locationName: "Jerry's Auto Supply"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJDyQBHABLmlQRWzdHEHPAI70",
    edition: "WML",
    notes: "",
    address: "310 River St, Cashmere, WA 98815, USA",
    lat: 47.52259170000001,
    lng: -120.4742013,
    locationName: "River Street Laundry"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJV9MD1NdKmlQRjPVX8Ek8gvc",
    edition: "WML",
    notes: "",
    address: "5607 Sunset Hwy, Cashmere, WA 98815, USA",
    lat: 47.5228372,
    lng: -120.4837677,
    locationName: "Cashmere Mini Mart"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ01LVhNBKmlQRalmzqoe-wcI",
    edition: "WML",
    notes: "",
    address: "702 Pioneer Ave, Cashmere, WA 98815, USA",
    lat: 47.5167919,
    lng: -120.4796889,
    locationName: "Pioneer Market"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJQUp0-NlKmlQRN_0K3xkDVsI",
    edition: "WML",
    notes: "",
    address: "817 Pioneer Ave, Cashmere, WA 98815, USA",
    lat: 47.5179023,
    lng: -120.482727,
    locationName: "Cashmere Post Acute"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ8Yyl0BVLmlQRQM7mTrxCxKM",
    edition: "WML",
    notes: "",
    address: "5720 Vale Rd, Cashmere, WA 98815, USA",
    lat: 47.52859100000001,
    lng: -120.4879616,
    locationName: "The Outpost Saloon"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJJZKZCtRKmlQRl8H8Jx9RoJc",
    edition: "WML",
    notes: "",
    address: "5740 Vale Rd, Cashmere, WA 98815, USA",
    lat: 47.5286292,
    lng: -120.4887942,
    locationName: "Old Mission Spirits"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJLdKWpH9LmlQRyGpoWU9iMe0",
    edition: "WML",
    notes: "",
    address: "6836 Dryden Ave, Dryden, WA 98821, USA",
    lat: 47.54151649999999,
    lng: -120.5612511,
    locationName: "Dryden Grocery & Hardware"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJy7oYHWFMmlQRGqAXauroXgg",
    edition: "WML",
    notes: "",
    address: "8600 Frontage Rd, Dryden, WA 98821, USA",
    lat: 47.540577,
    lng: -120.561857,
    locationName: "Kevin's Tire Service Dryden"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJPYOehH9LmlQRlLmQh3QggI0",
    edition: "WML",
    notes: "",
    address: "8620 Frontage Rd, Dryden, WA 98821, USA",
    lat: 47.54067339999999,
    lng: -120.5623555,
    locationName: "Take A Break Cafe"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJUXlYl2FMmlQRRbpT0HNwVLU",
    edition: "WML",
    notes: "",
    address: "7546 Saunders Rd, Peshastin, WA 98847, USA",
    lat: 47.5540943,
    lng: -120.5829355,
    locationName: "Big Y Cafe"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJGYgnLlVMmlQRjhgW1uOs6fw",
    edition: "WML",
    notes: "",
    address: "10170 Main St, Peshastin, WA 98847, USA",
    lat: 47.573429,
    lng: -120.6056883,
    locationName: "Peshastin Market"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJN2xN_INNmlQRfe20Jr1CK_4",
    edition: "WML",
    notes: "",
    address: "116 River Bend Dr, Leavenworth, WA 98826, USA",
    lat: 47.5971995,
    lng: -120.6451529,
    locationName: "Safeway"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJSaCWd4VNmlQRGymY3FlM8Oc",
    edition: "WML",
    notes: "",
    address: "11724 River Bend Dr, Leavenworth, WA 98826, USA",
    lat: 47.5979581,
    lng: -120.64799,
    locationName: "Marson & Marson Lumber"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ4-1ciYVNmlQRs9havcBmajY",
    edition: "WML",
    notes: "",
    address: "11756 US Hwy 2, Leavenworth, WA 98826, USA",
    lat: 47.5979525,
    lng: -120.6492693,
    locationName: "Napa Auto Parts - Leavenworth"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJE3Phe_BNmlQRgG6CwaIiCnw",
    edition: "WML",
    notes: "",
    address: "585 US Hwy 2, Leavenworth, WA 98826, USA",
    lat: 47.5883794,
    lng: -120.6745544,
    locationName: "Icicle Quik Stop"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJDzz1lPNNmlQRo82PpIju3bE",
    edition: "WML",
    notes: "",
    address: "305 US-2, Leavenworth, WA 98826, USA",
    lat: 47.5927626,
    lng: -120.6672646,
    locationName: "Berkshire Hathaway Home Services"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ29Gs5ohNmlQR9pIhQCTgp5g",
    edition: "WML",
    notes: "",
    address: "1329 US Hwy 2, Leavenworth, WA 98826, USA",
    lat: 47.5988293,
    lng: -120.655318,
    locationName: "Dan's Food Market"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ048iYEJMmlQRsQg-OPAR3dw",
    edition: "WML",
    notes: "",
    address: "7550 US-97, Peshastin, WA 98847, USA",
    lat: 47.5544209,
    lng: -120.6025773,
    locationName: "American Harvest - Cannabis Store"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ37al8rHKm1QRbKfg7vdBD6A",
    edition: "WML",
    notes: "",
    address: "3157 Main St, Monitor, WA 98836, USA",
    lat: 47.4872767,
    lng: -120.4168139,
    locationName: "Monitor Handimart"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJRd8mvpPLm1QReeOdVY_IbeY",
    edition: "WML",
    notes: "",
    address: "149 Easy Way, Wenatchee, WA 98801, USA",
    lat: 47.46814499999999,
    lng: -120.333077,
    locationName: "Planet fitness"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJB_rvhWTLm1QRS9vJn9D0IcY",
    edition: "WML",
    notes: "",
    address: "2830 Euclid Ave, Wenatchee, WA 98801, USA",
    lat: 47.469553,
    lng: -120.327753,
    locationName: "WASHDOT"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJGbOMUG7Lm1QRbfYX6Ju949k",
    edition: "WML",
    notes: "",
    address: "1914 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4515107,
    lng: -120.3340008,
    locationName: "Discount Tire"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJuaZuC2XLm1QR4K7Z6PfXJxU",
    edition: "WML",
    notes: "",
    address: "1643 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4479473,
    lng: -120.3298752,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ95UkVWTLm1QRkKA1VeTfk1o",
    edition: "WML",
    notes: "",
    address: "1616 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4468025,
    lng: -120.3303726,
    locationName: "Grocery Outlet"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJI5tx9WPLm1QRGkEXP9duusg",
    edition: "WML",
    notes: "",
    address: "1444 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4442746,
    lng: -120.328951,
    locationName: "Hooked On Toys & Sporting Goods"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJD_O88ZnMm1QRS-QwwL7a34U",
    edition: "WML",
    notes: "",
    address: "610 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4321437,
    lng: -120.3185698,
    locationName: "Motel 6 Wenatchee, WA"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJgZwXTt3Mm1QRdnf4v7_7LqA",
    edition: "WML",
    notes: "",
    address: "746 S Mission St, Wenatchee, WA 98801, USA",
    lat: 47.4133186,
    lng: -120.3048352,
    locationName: "Jiffy Lube"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJq2N4KQDNm1QRIAbsNXlmu9c",
    edition: "WML",
    notes: "",
    address: "1219 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4391259,
    lng: -120.3213285,
    locationName: "Veteran Thrift Store"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJ15jlLGHLm1QRrGOWPFuG520",
    edition: "WML",
    notes: "",
    address: "1312 Maple St, Wenatchee, WA 98801, USA",
    lat: 47.4431802,
    lng: -120.3332914,
    locationName: "Wenatchee Valley Senior Activity Center"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJXXGnMwDLm1QRORgvgOshElQ",
    edition: "WML",
    notes: "",
    address: "1427 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4433739,
    lng: -120.3263125,
    locationName: "Huckleberry North"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJYdreHZzMm1QR8i7OEa6OMzU",
    edition: "WML",
    notes: "",
    address: "1014 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.43674909999999,
    lng: -120.3217675,
    locationName: "Godfather's Pizza"
  },
  {
    route: "WenatcheeB",
    placeId: "ChIJo5ZNIZjMm1QR8StFqhnKfME",
    edition: "WML",
    notes: "Hold to 100",
    address: "812 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4340602,
    lng: -120.3200986,
    locationName: "Numerica"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJd9eLwJXMm1QRgWakUAwTQhA",
    edition: "WML",
    notes: "",
    address: "116 N Chelan Ave, Wenatchee, WA 98801, USA",
    lat: 47.4253746,
    lng: -120.3154728,
    locationName: "Beer Wine & More"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ5beyE8DMm1QRsDweXzI4CNo",
    edition: "WML",
    notes: "",
    address: "106 Okanogan Ave, Wenatchee, WA 98801, USA",
    lat: 47.4209257,
    lng: -120.3143073,
    locationName: "Plaza Super Jet"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJueaGKcbMm1QRlJ4PvHHQCqo",
    edition: "WML",
    notes: "",
    address: "525 S Miller St, Wenatchee, WA 98801, USA",
    lat: 47.4157563,
    lng: -120.3244041,
    locationName: "Ernie's Market"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJf4Qws-nMm1QRbJmnH5P7-Xs",
    edition: "WML",
    notes: "",
    address: "615 S Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4165779,
    lng: -120.3045111,
    locationName: "Habitat for Humanity Store"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJnbnboOvMm1QRfvYQCoH48mw",
    edition: "WML",
    notes: "",
    address: "1 Kittitas St, Wenatchee, WA 98801, USA",
    lat: 47.4211918,
    lng: -120.3065113,
    locationName: "Wenatchee Amtrak Station"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJK2KxUurMm1QRLG0DOCDw0ZY",
    edition: "WML",
    notes: "",
    address: "Wenatchee, WA 98801, USA",
    lat: 47.42043899999999,
    lng: -120.307463,
    locationName: "Link Transit Columbia Station - Wenatchee"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJe4EpLOrMm1QRWXx3uu-wgL8",
    edition: "WML",
    notes: "",
    address: "421 S Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4191425,
    lng: -120.3064576,
    locationName: "La Mexicana Super Market"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJiy_1DOjMm1QRNiw1e8HSICY",
    edition: "WML",
    notes: "",
    address: "733 S Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.415209,
    lng: -120.3027061,
    locationName: "Stan's Merry Mart Inc."
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJeTrint3Mm1QRPAsSLfX6j6M",
    edition: "WML",
    notes: "",
    address: "210 Ferry St, Wenatchee, WA 98801, USA",
    lat: 47.4112618,
    lng: -120.3033219,
    locationName: "76"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJEeJTltzMm1QREfrurMaN6dY",
    edition: "WML",
    notes: "",
    address: "850 Methow St, Wenatchee, WA 98801, USA",
    lat: 47.4111111,
    lng: -120.3086111,
    locationName: "Ferry St. Market"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJpbmI9IbRm1QRGL40SaON7Ns",
    edition: "WML",
    notes: "",
    address: "100 Rock Island Dr, Rock Island, WA 98850, USA",
    lat: 47.3722222,
    lng: -120.1394444,
    locationName: "B J's Food Marts"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJuXr8lIjRm1QR7hE2dejBL3g",
    edition: "WML",
    notes: "",
    address: "302 Rock Island Dr, Rock Island, WA 98850, USA",
    lat: 47.37529139999999,
    lng: -120.1441814,
    locationName: "Dad's Country Store"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ-bGviR7Nm1QRw-d3bLPrDEY",
    edition: "WML",
    notes: "",
    address: "220 Grant Rd, East Wenatchee, WA 98802, USA",
    lat: 47.4052778,
    lng: -120.2865101,
    locationName: "Ag Supply Ace Hardware"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJhfd8LhzNm1QREWn12x-if1w",
    edition: "WML",
    notes: "",
    address: "280 Grant Rd #5332, East Wenatchee, WA 98802, USA",
    lat: 47.4057566,
    lng: -120.284792,
    locationName: "Buzz Inn Steakhouse & Casino"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJW-jbWtJdlVQRx9aXkoO0NgI",
    edition: "WML",
    notes: "",
    address: "260 Highline Dr, East Wenatchee, WA 98802, USA",
    lat: 47.4024332,
    lng: -120.2838987,
    locationName: "Coastal Farm & Ranch"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJfSYFmxzNm1QR13NoBITEVaA",
    edition: "WML",
    notes: "",
    address: "702 Grant Rd, East Wenatchee, WA 98802, USA",
    lat: 47.4053335,
    lng: -120.2795812,
    locationName: "Abby's Legendary Pizza"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJD0c0XBvNm1QRgQb_vUk8NJE",
    edition: "WML",
    notes: "",
    address: "780 Grant Rd, East Wenatchee, WA 98802, USA",
    lat: 47.4046562,
    lng: -120.2778011,
    locationName: "Bi-Mart Membership Discount Stores"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ0fmhwgfNm1QRunwPeuwf1Ug",
    edition: "WML",
    notes: "",
    address: "1688 Grant Rd, East Wenatchee, WA 98802, USA",
    lat: 47.4055225,
    lng: -120.2607961,
    locationName: "Tony's Market"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJU34Q7BzNm1QRjbnL1xccukE",
    edition: "WML",
    notes: "",
    address: "595 Grant Rd, East Wenatchee, WA 98802, USA",
    lat: 47.40639300000001,
    lng: -120.280256,
    locationName: "Cigarettes Cheaper"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ9coNXB3Nm1QRVk-IuRoW_Bw",
    edition: "WML",
    notes: "",
    address: "220 Eastmont Ave, East Wenatchee, WA 98802, USA",
    lat: 47.40899039999999,
    lng: -120.2823782,
    locationName: "Eastmont Drop & Go Laundry"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJNQ4ws_rMm1QRKxrNnxX51sc",
    edition: "WML",
    notes: "",
    address: "271 9th St NE, East Wenatchee, WA 98802, USA",
    lat: 47.4173572,
    lng: -120.2896849,
    locationName: "East Wenatchee City Hall"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJyftasOXMm1QRK0P0RL-2Qto",
    edition: "WML",
    notes: "",
    address: "838 Valley Mall Pkwy #4842, East Wenatchee, WA 98802, USA",
    lat: 47.4150534,
    lng: -120.2933024,
    locationName: "Clearwater Saloon & Casino"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJvfk4BeTMm1QRMGbvXFjYjkM",
    edition: "WML",
    notes: "",
    address: "620 Valley Mall Pkwy, East Wenatchee, WA 98802, USA",
    lat: 47.41261240000001,
    lng: -120.2926939,
    locationName: "Country Inn Restaurants"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ_2vvbB7Nm1QREW7MwzLMS5E",
    edition: "WML",
    notes: "",
    address: "111 Valley Mall Pkwy, East Wenatchee, WA 98802, USA",
    lat: 47.40643689999999,
    lng: -120.28796,
    locationName: "Circle K"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ4VaQWy_Nm1QRt0K1f0Y4XTw",
    edition: "WML",
    notes: "",
    address: "1780 S Mission St, Wenatchee, WA 98801, USA",
    lat: 47.3971452,
    lng: -120.3031822,
    locationName: "Squilchuck Market"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJSSc9O2bSm1QR5_rKNGiv3HQ",
    edition: "WML",
    notes: "",
    address: "Washington 98828, USA",
    lat: 47.371914,
    lng: -120.201973,
    locationName: "Malaga Market"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ94Bs9pTMm1QR8rcSaeKL0hY",
    edition: "WML",
    notes: "",
    address: "11 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4250922,
    lng: -120.3115474,
    locationName: "Antique Mall of Wenatchee"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJqU3bN5TMm1QRWTFjPNLU5Po",
    edition: "WML",
    notes: "",
    address: "110 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4262792,
    lng: -120.3130533,
    locationName: "Wok About Mongolian Grill"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJd2uzMJTMm1QRy28rHrkNYrE",
    edition: "WML",
    notes: "",
    address: "114 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4263694,
    lng: -120.3132889,
    locationName: "Lemolo Cafe & Deli"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJI1TD_JnMm1QROpbBxKC_YyM",
    edition: "WML",
    notes: "",
    address: "603 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.4321205,
    lng: -120.31724,
    locationName: "Bernie's burgers & suds"
  },
  {
    route: "WenatcheeC",
    placeId: "ChIJ2w5MRGLLm1QRAvuASw3FR1I",
    edition: "WML",
    notes: "",
    address: "1337 N Wenatchee Ave, Wenatchee, WA 98801, USA",
    lat: 47.44181260000001,
    lng: -120.3250927,
    locationName: "Denny's"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJWXq6joZSYFMRe7PcjxvDN0E",
    edition: "NID",
    notes: "Outside Single EX Rack with weatherguard; Left of Door",
    address: "400 Coeur D'Alene River Rd, Kingston, ID 83839, USA",
    lat: 47.5526753,
    lng: -116.2699682,
    locationName: "76 Gas Station"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJhz2ylIBSYFMRDnTJ4bZ2nXE",
    edition: "NID, IND",
    notes: "; Outside Single EX Rack; with weatherguard; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "123 Stem Loop, Kingston, ID 83839, USA",
    lat: 47.548859,
    lng: -116.2720969,
    locationName: "Exxon"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJVfZONUBSYFMR_ME07wVbOKw",
    edition: "NID, IND",
    notes: "Outdoor Community Rack; 1/2 BUNDLE OF INLANDER; <-- Please write returns here; Inside Community Rack Left of Door",
    address: "117 N Division St, Pinehurst, ID 83850, USA",
    lat: 47.5386574,
    lng: -116.2323612,
    locationName: "Barney's Harvest Foods"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJP6mY9dZTYFMR_OHWrEK4asI",
    edition: "NID",
    notes: "Outdoor Rack",
    address: "608 N Division St, Pinehurst, ID 83850, USA",
    lat: 47.54202589999999,
    lng: -116.2307946,
    locationName: "Goose N The Tree"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJ3d-k18ZTYFMRKJfodUimOdg",
    edition: "NID",
    notes: "Iron rack by customer service",
    address: "583 Commerce Dr, Smelterville, ID 83868, USA",
    lat: 47.54481550000001,
    lng: -116.1867878,
    locationName: "Walmart Supercenter"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJSQfZ2qVTYFMRguxyP00ddtk",
    edition: "NID",
    notes: "Outdoor Rack",
    address: "20 Nearing Way, Smelterville, ID 83868, USA",
    lat: 47.545631,
    lng: -116.1735456,
    locationName: "Grocery Outlet"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJGVHhPmVTYFMRatjki0agbmI",
    edition: "NID",
    notes: "Outdoor Rack Right of Door (needs weather guard) leave returns with store",
    address: "167 Commerce Dr, Smelterville, ID 83868, USA",
    lat: 47.5452934,
    lng: -116.1741605,
    locationName: "Dollar Tree"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJU_DJzqtWYFMRrcfHH6J80lQ",
    edition: "NID, IND",
    notes: "Outside Single EX Rack; 1 FULL BUNDLE OF INLANDER; <-- Please write returns here",
    address: "119 N Hill St, Kellogg, ID 83837, USA",
    lat: 47.5391076,
    lng: -116.1254511,
    locationName: "Kellogg Super Stop"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJjVjKzqtWYFMRfOmXGe2OCjU",
    edition: "NID, IND",
    notes: "Inlander Community Rack Inside; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "117 Hill St, Kellogg, ID 83837, USA",
    lat: 47.5394452,
    lng: -116.1257084,
    locationName: "Yoke's Fresh Market"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJuzwe0qhWYFMRFnV8LKz_x0U",
    edition: "NID",
    notes: "Ex Single ",
    address: "3 E Cameron Ave, Kellogg, ID 83837, USA",
    lat: 47.5380268,
    lng: -116.1188098,
    locationName: "Conoco"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJja4M0qhWYFMRFqWaz5sYQRA",
    edition: "NID",
    notes: "Inside Ledge to Right of Door",
    address: "15 E Cameron Ave, Kellogg, ID 83837, USA",
    lat: 47.537671,
    lng: -116.118163,
    locationName: "Les Schwab Tire Center"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJC_le16lWYFMRJcDkrCyPV6s",
    edition: "NID, IND",
    notes: "Right side of Door; 1/2 BUNDLE OF INLANDER",
    address: "313 W Cameron Ave, Kellogg, ID 83837, USA",
    lat: 47.541843,
    lng: -116.1251349,
    locationName: "Kellogg Ace Hardware"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJQwlZ8ANUYFMRKPCDzjz0yY4",
    edition: "NID",
    notes: "Community rack inside right of door",
    address: "711 W Cameron Ave, Kellogg, ID 83837, USA",
    lat: 47.54543839999999,
    lng: -116.1311987,
    locationName: "Sam's Restaurant"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJW-ptJwRUYFMRq7Z02GO2AlY",
    edition: "NID, IND",
    notes: "Inside Single EX Rack; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "802 W Cameron Ave, Kellogg, ID 83837, USA",
    lat: 47.54686290000001,
    lng: -116.1325129,
    locationName: "76"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJ3f4ZSOtXYFMRWUOKOLsi4tI",
    edition: "NID, IND",
    notes: "Outside Single EX Rack; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "400 E Mullan Ave, Osburn, ID 83849, USA",
    lat: 47.50630319999999,
    lng: -115.999673,
    locationName: "76"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJO9L9kexXYFMR4Hx5N_gWYhI",
    edition: "NID, IND",
    notes: "Exchange rack in foyer by ice machine; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "712 E Mullan Ave, Osburn, ID 83849, USA",
    lat: 47.504137,
    lng: -115.9933493,
    locationName: "Watson's Market"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJib7EGtn3YFMR6293m8ninek",
    edition: "NID, IND",
    notes: "Inside back of store; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "10 Front St, Wallace, ID 83873, USA",
    lat: 47.4765111,
    lng: -115.9331427,
    locationName: "Conoco"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJP6RcpdD3YFMRs_c8m2wQxCU",
    edition: "NID, IND",
    notes: "Indoor; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "205 5th St, Wallace, ID 83873, USA",
    lat: 47.4738449,
    lng: -115.925061,
    locationName: "Beamis Hi Co/ Exxon"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJt00yLNf3YFMRxOko8sphLtY",
    edition: "NID, IND",
    notes: "Opens 9am; Inside right of door on ledge; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "600 Cedar St, Wallace, ID 83873, USA",
    lat: 47.4722115,
    lng: -115.9237814,
    locationName: "Todd's Bookstore & Coffee"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJS93Ec9H3YFMR0Kpolai_yCY",
    edition: "NID",
    notes: "Inside Community Rack ",
    address: "800 Bank St, Wallace, ID 83873, USA",
    lat: 47.471369,
    lng: -115.9204555,
    locationName: "Harvest Foods"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJU3W07Z60YVMRwC-tkdc6R_g",
    edition: "NID, IND",
    notes: "Outside Single EX Rack; ; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "11235 State Hwy 3, Cataldo, ID 83810, USA",
    lat: 47.5724423,
    lng: -116.4427819,
    locationName: "Rose Lake General Store"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJqZ-nXZ-0YVMRyXmbG0v_B3U",
    edition: "NID, IND",
    notes: "Outside Single EX Rack; ; 1/2 BUNDLE OF INLANDER; <-- Please write returns here",
    address: "11550 State Hwy 3, Cataldo, ID 83810, USA",
    lat: 47.569689,
    lng: -116.441587,
    locationName: "Conoco"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJJ01vK3g0YFMR-ENIo29KPFs",
    edition: "NID",
    notes: "Community rack Inside Right of Door by Register",
    address: "31504 State Hwy 3, Medimont, ID 83842, USA",
    lat: 47.4585795,
    lng: -116.5908942,
    locationName: "Valley Mart"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJgUmLdds6YFMR_Lyh6HKVnJ0",
    edition: "NID",
    notes: "Outside Community Rack ; Left of Door",
    address: "320 W College Ave, St Maries, ID 83861, USA",
    lat: 47.31536910000001,
    lng: -116.5629428,
    locationName: "76"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJ3eFfDNs6YFMRLF7ndtH7C8k",
    edition: "NID",
    notes: "Inside community Rack Right of Door",
    address: "402 College Ave, St Maries, ID 83861, USA",
    lat: 47.3154684,
    lng: -116.5636697,
    locationName: "Conoco"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJaRVOR9w6YFMRLOeBmpY_HKU",
    edition: "NID",
    notes: "Outside EX Rack Left of Door",
    address: "127 E College Ave, St Maries, ID 83861, USA",
    lat: 47.3143933,
    lng: -116.5590143,
    locationName: "Zip's"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJO8wIYe47YFMRnO1Qqt8IurQ",
    edition: "NID",
    notes: "Inside Community Rack",
    address: "105 E College Ave, St Maries, ID 83861, USA",
    lat: 47.31485379999999,
    lng: -116.5600086,
    locationName: "Archie's IGA "
  },
  {
    route: "Around The Lake",
    placeId: "ChIJ7Vq5bNA6YFMRHht4slGkZJI",
    edition: "NID",
    notes: "Inside Community Rack Right of Door",
    address: "40 Homer Dr, St Maries, ID 83861, USA",
    lat: 47.31315009999999,
    lng: -116.5514132,
    locationName: "Harvest Foods - Saint Maries"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJb_1SQdw6YFMRs646edUd2EY",
    edition: "NID",
    notes: "Community Rack Inside left of register",
    address: "130 E College Ave, St Maries, ID 83861, USA",
    lat: 47.315451,
    lng: -116.5586325,
    locationName: "Triple X Feeds"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJ9bv_aMU6YFMRvKwW0kx1mFo",
    edition: "NID",
    notes: "Inside Single EX Rack",
    address: "211 N 10th St, St Maries, ID 83861, USA",
    lat: 47.3175414,
    lng: -116.5705942,
    locationName: "Conoco"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJd3mLVRnWn1QRmZqhxPy9IyE",
    edition: "NID",
    notes: "Inside Community Rack; Left of Door",
    address: "300 10th St, Plummer, ID 83851, USA",
    lat: 47.3349479,
    lng: -116.8876145,
    locationName: "Plummer Quick Stop"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJu-Wlqx7Wn1QRztjFf_jbbAA",
    edition: "NID",
    notes: "EX (AC) rack in entry",
    address: "1111 Birch St, Plummer, ID 83851, USA",
    lat: 47.3360502,
    lng: -116.8887029,
    locationName: "Benewah Market"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJq7ePCBzWn1QR4jf-drd7guY",
    edition: "NID",
    notes: "EX Rack",
    address: "126 10th St, Plummer, ID 83851, USA",
    lat: 47.3369525,
    lng: -116.8874053,
    locationName: "The Gateway"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJrz6BQRnWn1QR5pt6BnH5qlw",
    edition: "NID",
    notes: "Outside 4 Level EX Rack",
    address: "396070 US-95, Plummer, ID 83851, USA",
    lat: 47.33810820000001,
    lng: -116.8890313,
    locationName: "Warpath Smoke Shop"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJ26ZbC3LXn1QRbI-XSNadMoY",
    edition: "NID",
    notes: "",
    address: "165 US-95, Plummer, ID 83851, USA",
    lat: 47.338014,
    lng: -116.889106,
    locationName: "Warpath One Stop Shop"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJ946N9Y0qYFMR4aWq1uJjJFY",
    edition: "NID",
    notes: "Outside single EX Rack Left of Door",
    address: "9824 W F St, Worley, ID 83876, USA",
    lat: 47.400538,
    lng: -116.91987,
    locationName: "BNS Smoke Shop"
  },
  {
    route: "Around The Lake",
    placeId: "ChIJn2LPsrPWYVMR416pVdzG0Q8",
    edition: "NID",
    notes: "Inside Double EX Rack",
    address: "12727 W Elder Rd, Worley, ID 83876, USA",
    lat: 47.50762899999999,
    lng: -116.9576824,
    locationName: "Fightin' Creek Smoke Shop"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJp5AB17fGYVMR_JDS4JevHgw",
    edition: "NID",
    notes: "shared yellow rack right of door outside",
    address: "1650 West Appleway Ave., Coeur d'Alene, ID 83814, USA",
    lat: 47.701497,
    lng: -116.80885,
    locationName: "Goodies 76"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJCwV-usnGYVMRHrMnlDjtk6E",
    edition: "NID",
    notes: "Single Exchange rack in front of customer service",
    address: "1485 West Appleway Ave., Coeur d'Alene, ID 83814, USA",
    lat: 47.7038489,
    lng: -116.8055175,
    locationName: "WinCo Foods"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJhdS7VsTGYVMRdyb3EP0KHKQ",
    edition: "NID",
    notes: "Community Rack, ; inside left of door",
    address: "502 West Appleway Ave., Coeur d'Alene, ID 83814, USA",
    lat: 47.7004342,
    lng: -116.792564,
    locationName: "Mobil"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJqwqi78TGYVMRdjsnUgClhX4",
    edition: "NID",
    notes: "Inside left of door narow Exchange metal ",
    address: "W 350 Appleway Ave., Coeur d'Alene, ID 83815, USA",
    lat: 47.70052799999999,
    lng: -116.7909218,
    locationName: "Exxon"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJTUicwcTGYVMRE9rl_OUenI0",
    edition: "NID",
    notes: "Middle of Shared rack space",
    address: "290 West Appleway Ave., Coeur d'Alene, ID 83814, USA",
    lat: 47.699718,
    lng: -116.789724,
    locationName: "Elmer's Restaurant (Coeur d'Alene, ID)"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJzbEQR9vGYVMR5e7TqjmHN7U",
    edition: "NID",
    notes: "Top Community Rack, ; inside door to Right",
    address: "W 201 Appleway Ave., Coeur d'Alene, ID 83814, USA",
    lat: 47.700905,
    lng: -116.7868187,
    locationName: "Exxon"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJDUNin3zHYVMR8ZrHS47ONYs",
    edition: "NID",
    notes: "Community Rack, ; inside left of door",
    address: "1427 E Best Ave, Coeur d'Alene, ID 83814, USA",
    lat: 47.7009596,
    lng: -116.7655225,
    locationName: "NomNom"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJP2KQc_nGYVMRPEvRn-seI_o",
    edition: "NID",
    notes: "Shared rack outside",
    address: "1003 N 15th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.68285849999999,
    lng: -116.7651669,
    locationName: "Taj Grocery Store"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJEfhSmVHGYVMRad23HSznIJ0",
    edition: "NID",
    notes: "Inside East Door ; community rack by cashier",
    address: "2301 Sherman Ave, Coeur d'Alene, ID 83814, USA",
    lat: 47.67303620000001,
    lng: -116.7530055,
    locationName: "Mobil"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJd6H45VDGYVMRqVMWqPw8itk",
    edition: "NID",
    notes: "Community Rack",
    address: "2001 E Sherman Ave, Coeur d'Alene, ID 83814, USA",
    lat: 47.6735058,
    lng: -116.757691,
    locationName: "Chevron"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJEZB2OFnGYVMRLZRtOk8QvrE",
    edition: "NID",
    notes: "INSIDE NW COMMUNITY RACK; Black Angle Iron  USE MIDDLE RIGHT",
    address: "1211 Sherman Ave, Coeur d'Alene, ID 83814, USA",
    lat: 47.6739308,
    lng: -116.7683629,
    locationName: "Harvest Foods"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJxdRcamDGYVMR5QlAnzS7uIw",
    edition: "NID",
    notes: "Outside bottom of Nickel's Worth Rack",
    address: "107 N 5th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.6737427,
    lng: -116.7800068,
    locationName: "Nickel's Worth Classifieds"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJL2IK51LHYVMRgss_HgfzS8E",
    edition: "NID",
    notes: "Single Exchange rack inside with other racks",
    address: "210 Sherman Ave #156, Coeur d'Alene, ID 83814, USA",
    lat: 47.67321279999999,
    lng: -116.783342,
    locationName: "Downtown Mall"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJl6OkcPPGYVMRJ9dtiSE4OGo",
    edition: "NID",
    notes: "9am - Bottom of Nickel's Worth Rack; Wants 50 returned papers for wrapping",
    address: "845 N 4th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.68151199999999,
    lng: -116.78124,
    locationName: "Idaho Youth Ranch Thrift Store"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ7YdlT_LGYVMRyR-k9i3WeSY",
    edition: "NID",
    notes: "Inlander Community Rack; 1 Pocket",
    address: "1001 N 4th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.6831962,
    lng: -116.7817444,
    locationName: "Safeway"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJK6-ma-7GYVMRhl0PQPB0pSU",
    edition: "NID",
    notes: "Exchange Folding Rack",
    address: "1217 N 4th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.68674370000001,
    lng: -116.7812601,
    locationName: "Seright's Ace Hardware"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJV-XWUO7GYVMRsUnj1msBukw",
    edition: "NID",
    notes: "Bottom of Inlander Rack",
    address: "1316 N 4th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.687611,
    lng: -116.780135,
    locationName: "Pilgrim's Market"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ0Urh6ujGYVMRtXnQdsA5kDE",
    edition: "NID",
    notes: "Outside Red box",
    address: "1719 N 4th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.6919226,
    lng: -116.7814993,
    locationName: "The Breakfast Nook"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ7dCmZ93GYVMRVar5z-R847Y",
    edition: "NID",
    notes: "Bottom of NW? ",
    address: "2105 N 4th St, Coeur d'Alene, ID 83814, USA",
    lat: 47.696411,
    lng: -116.781424,
    locationName: "Exxon Jifi Stop"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJQbQSAOrGYVMRG1dNUalJAzk",
    edition: "NID",
    notes: "Inlander Community Rack; 1 Pocket",
    address: "220 Ironwood Dr, Coeur d'Alene, ID 83814, USA",
    lat: 47.6936402,
    lng: -116.7898478,
    locationName: "Safeway"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJQ6G65cTGYVMRhgCwHl36fMo",
    edition: "NID",
    notes: "Inside Community Rack by front door. Share shelf with Nickels Worth",
    address: "335 West Appleway Ave., Coeur d'Alene, ID 83814, USA",
    lat: 47.7012054,
    lng: -116.7905702,
    locationName: "Walgreens"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ_3vjtRnHYVMR0vT84t8M8FQ",
    edition: "NID",
    notes: "Closes @ 2pm; Kat 208-416-0238 Exchange folding rack foyer",
    address: "155 W Neider Ave, Coeur d'Alene, ID 83815, USA",
    lat: 47.7076436,
    lng: -116.7898087,
    locationName: "Giorgi's Breakfast & Lunch"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJLcmkytbGYVMRLEqpErnt0Lk",
    edition: "NID",
    notes: "Inlander Community Rack; 1 Pocket",
    address: "121 W Neider Ave, Coeur d'Alene, ID 83815, USA",
    lat: 47.7087848,
    lng: -116.7878515,
    locationName: "Safeway"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJP56hnirHYVMRYgcs7Ge0pPc",
    edition: "NID",
    notes: "Inside Exchange Angle Iron Multi-Shelf Rack",
    address: "170 E Kathleen Ave, Coeur d'Alene, ID 83815, USA",
    lat: 47.71415409999999,
    lng: -116.7847022,
    locationName: "North 40 Outfitters"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJFdXX5SrBYVMRRYMI0Nc93sk",
    edition: "NID",
    notes: "Inlander Community Rack; 3 Pockets ",
    address: "305 W Kathleen Ave Suite 1, Coeur d'Alene, ID 83815, USA",
    lat: 47.71636469999999,
    lng: -116.7904276,
    locationName: "Super 1 Foods"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJx_apbjHBYVMR2BObQcnjqVM",
    edition: "NID",
    notes: "Inside Community Rack bottom with Nickels Worth",
    address: "1735 W Kathleen Ave, Coeur d'Alene, ID 83815, USA",
    lat: 47.7161391,
    lng: -116.8097348,
    locationName: "Fairway Grocery & Gas"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJLwHn1M_GYVMR_3RRasV3xlA",
    edition: "NID",
    notes: "12 pocket EX RACK ",
    address: "410 W Neider Ave, Coeur d'Alene, ID 83814, USA",
    lat: 47.7059214,
    lng: -116.7938058,
    locationName: "Grocery Outlet"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ7e_szeXBYVMRCgZk7pGC3Hw",
    edition: "NID",
    notes: "Community Rack",
    address: "5525 N Government Wy, Coeur d'Alene, ID 83815, USA",
    lat: 47.72205049999999,
    lng: -116.7876382,
    locationName: "Maverik"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJi5JuStfAYVMRE2DrFNa8QuM",
    edition: "NID",
    notes: "Manuel Azevedo; Community Rack",
    address: "5831 N Government Wy, Coeur d'Alene, ID 83815, USA",
    lat: 47.7250777,
    lng: -116.7872944,
    locationName: "Cenex"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJp3QcYtzAYVMReFcjPTw8dt8",
    edition: "NID",
    notes: "Mall Foodcourt entrance, east end, double EX 2 shelf",
    address: "200 W Hanley Ave, Coeur d'Alene, ID 83815, USA",
    lat: 47.7317686,
    lng: -116.7896362,
    locationName: "Silver Lake Mall"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJM1ns7dPGYVMRVGBTHRHoTM8",
    edition: "NID",
    notes: "Bottom of Nickelsworth rack in foyer",
    address: "200 W Hanley Ave #200-2, Coeur d'Alene, ID 83815, USA",
    lat: 47.7310246,
    lng: -116.7902406,
    locationName: "Black Sheep Sporting Goods"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJjWNhku3AYVMRx77uRN-pkHI",
    edition: "NID",
    notes: "Inlander Community Rack; 1 Pocket",
    address: "161 W Prairie Ave, Hayden, ID 83835, USA",
    lat: 47.7461576,
    lng: -116.7889153,
    locationName: "Safeway"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJhU9JJ-7AYVMRD0fxLIU8gj8",
    edition: "NID",
    notes: "",
    address: "8120 N Cornerstone Dr, Hayden, ID 83835, USA",
    lat: 47.745438,
    lng: -116.7930958,
    locationName: "Discount Tire"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJdTQKifzAYVMRvOKzLXiaNHY",
    edition: "NID",
    notes: "CDA Press Comm Rack middle shelf",
    address: "1600 W Prairie Ave, Coeur d'Alene, ID 83815, USA",
    lat: 47.7441156,
    lng: -116.807611,
    locationName: "Exxon"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJz3_RqmHAYVMRgrb2ZK9BIe8",
    edition: "NID",
    notes: "Green Table in Entry; Closes 2pm",
    address: "9757 N Rustlers TRL, Hayden, ID 83835, USA",
    lat: 47.76028809999999,
    lng: -116.7918304,
    locationName: "Rustlers Roost"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJy9ETV2DAYVMRCqYGZkTnEmc",
    edition: "NID",
    notes: "Comunity Rack",
    address: "425 Hayden Ave, Hayden, ID 83835, USA",
    lat: 47.7596601,
    lng: -116.7918772,
    locationName: "Maverik"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ12Hve_TAYVMRMxh4NxRRVws",
    edition: "NID",
    notes: "Single Black angle iron rack in vestabule by carts",
    address: "550 W Honeysuckle Ave, Hayden, ID 83835, USA",
    lat: 47.7489986,
    lng: -116.7932458,
    locationName: "Walmart Supercenter"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ66Ceu2HAYVMRNy_BFZkoQLY",
    edition: "NID",
    notes: "Inlander Community Rack ; 2 pockets",
    address: "240 Hayden Ave ste f ste f, Hayden Lake, ID 83835, USA",
    lat: 47.7577952,
    lng: -116.7898497,
    locationName: "Super 1 Foods"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJR0O522HAYVMR2Oj8PBuFeas",
    edition: "NID",
    notes: "Inside EX Single Rack",
    address: "196 Hayden Ave, Hayden, ID 83835, USA",
    lat: 47.7577459,
    lng: -116.788869,
    locationName: "Hayden Ace Hardware"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJl6pbHWLAYVMR0XlsUmqNDT8",
    edition: "NID",
    notes: "Inside Rack, Left of Door",
    address: "9577 N Government Wy, Hayden, ID 83835, USA",
    lat: 47.75871,
    lng: -116.7870708,
    locationName: "Fast Trip and Vapor"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ57I6kIzAYVMR3t_W1424VZk",
    edition: "NID",
    notes: "Opens @ 11am ; Top community rack with Inlander (black)",
    address: "8882 N Government Wy, Hayden, ID 83835, USA",
    lat: 47.75220299999999,
    lng: -116.785799,
    locationName: "Rancho Viejo Hayden ID"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJKxobhGPAYVMRZS8n2pTj4wE",
    edition: "NID",
    notes: "Use bottom of Inlander Rack (owner does not want more racks) Closes 1:30pm",
    address: "10015 N Government Wy, Hayden, ID 83835, USA",
    lat: 47.7627868,
    lng: -116.7874718,
    locationName: "Blue Plate Cafe"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJA7QclHHAYVMRAMH4IAGSAF0",
    edition: "NID",
    notes: "Exchange Rack, ; Inside Entry, Right",
    address: "176 W Wyoming Ave, Hayden, ID 83835, USA",
    lat: 47.77223659999999,
    lng: -116.7894519,
    locationName: "Habitat For Humanity of North Idaho"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJ-V2p6fe_YVMRFE8wYVnIheE",
    edition: "NID",
    notes: "Inside store - shared rack",
    address: "266 W Lancaster Rd, Hayden, ID 83835, USA",
    lat: 47.78732120000001,
    lng: -116.7893347,
    locationName: "Lancaster Market"
  },
  {
    route: "Coeur d'Alene",
    placeId: "ChIJsyhGgHHAYVMRbU29RHJ5PuY",
    edition: "NID",
    notes: "Jake (mgr) use the middle rack of the Blue Ziggys marketing rack",
    address: "170 W Wyoming Ave, Hayden Lake, ID 83835, USA",
    lat: 47.77277759999999,
    lng: -116.7893611,
    locationName: "Ziggy’s Home Improvement"
  },
  {
    route: "Post Falls",
    placeId: "ChIJwaPQZAbdYVMR6b1TnCIjtzk",
    edition: "NID",
    notes: "6am - Inside top community rack",
    address: "7217 W Seltice Way Suite B, Post Falls, ID 83854, USA",
    lat: 47.7021878,
    lng: -117.041509,
    locationName: "Lew's Smoke Shop"
  },
  {
    route: "Post Falls",
    placeId: "ChIJdfsYigbdYVMR_gdGzZE_FM4",
    edition: "NID",
    notes: "Outside Exchange Rack",
    address: "7200 W Seltice Way #1, State Line, ID 83854, USA",
    lat: 47.7018581,
    lng: -117.0397905,
    locationName: "A1 Smoke Shop"
  },
  {
    route: "Post Falls",
    placeId: "ChIJh5UMcQbdYVMRR4GdMJ6w2kg",
    edition: "NID",
    notes: "5am - Exchange 4 Shelf Rack",
    address: "7035 W Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7034077,
    lng: -117.0402522,
    locationName: "AmeriMart Convenience Store"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ50LevgXdYVMRq9TANzjYlfE",
    edition: "NID",
    notes: "Top Right Pocket Outside Community Rack",
    address: "6902 W Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7036965,
    lng: -117.03781,
    locationName: "Liberty Stop-N-Go"
  },
  {
    route: "Post Falls",
    placeId: "ChIJI8jRMBvdYVMRcJGe71QNVkw",
    edition: "NID",
    notes: "Exchange Rack inside the East Side Door",
    address: "6405 W Pointe Pkwy, Post Falls, ID 83854, USA",
    lat: 47.7039956,
    lng: -117.0308823,
    locationName: "Walmart Supercenter"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ7-e6LdXdYVMRJVyyvn2Yxlw",
    edition: "NID",
    notes: "Outside Exchange Rack left of door",
    address: "4100 W Expo Pkwy, Post Falls, ID 83854, USA",
    lat: 47.7124733,
    lng: -117.0025176,
    locationName: "Exxon"
  },
  {
    route: "Post Falls",
    placeId: "ChIJA96Ygi_dYVMReSIWs1dlpXs",
    edition: "NID",
    notes: "Single Exchange rack in Foyer",
    address: "4208 W Expo Pkwy, Post Falls, ID 83854, USA",
    lat: 47.7111799,
    lng: -117.0033602,
    locationName: "Carl's Jr."
  },
  {
    route: "Post Falls",
    placeId: "ChIJUUY7gdHCYVMRRmIiJiExzEo",
    edition: "NID",
    notes: "community rack",
    address: "2707 W Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.71641659999999,
    lng: -116.9843042,
    locationName: "Frontier Grocery"
  },
  {
    route: "Post Falls",
    placeId: "ChIJh8XE1R3DYVMRQySsspzEPAw",
    edition: "NID",
    notes: "Exchange Rack",
    address: "104 W Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7149592,
    lng: -116.9483843,
    locationName: "Rob's Seafoods & Burgers"
  },
  {
    route: "Post Falls",
    placeId: "ChIJg2ql0R3DYVMRB3SGmEtKiqk",
    edition: "NID",
    notes: "Shared shelf by cashier - share with Nickels Worth (NOT ON TOP OF NW)",
    address: "701 N Spokane St, Post Falls, ID 83854, USA",
    lat: 47.7145759,
    lng: -116.948481,
    locationName: "Exxon"
  },
  {
    route: "Post Falls",
    placeId: "ChIJX7pzHBnDYVMRDDDUnYvuo2c",
    edition: "NID",
    notes: "OUTSIDE METAL RACK ",
    address: "312 N Spokane St, Post Falls, ID 83854, USA",
    lat: 47.7103912,
    lng: -116.9478082,
    locationName: "Handy Mart"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ9dBVsx3DYVMRCxyVjnbntPI",
    edition: "NID",
    notes: "Inside counter",
    address: "203 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7154938,
    lng: -116.9463016,
    locationName: "Corner Cafe"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ1apTqx3DYVMRYgOcETqyd_A",
    edition: "NID",
    notes: "OUTSIDE RACK RIGHT OF DOOR",
    address: "211 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7154091,
    lng: -116.9452432,
    locationName: "76"
  },
  {
    route: "Post Falls",
    placeId: "ChIJC0b7ThzDYVMRvHBalRqMAR4",
    edition: "NID",
    notes: "Blue Community Rack Left of Entry Door",
    address: "206 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7148653,
    lng: -116.9456954,
    locationName: "Motion Auto Supply"
  },
  {
    route: "Post Falls",
    placeId: "ChIJo0snDyfDYVMRNRLOe58Z1Hk",
    edition: "NID",
    notes: "RED RACK OUTSIDE, RIGHT OF ENTRANCE",
    address: "317 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7156715,
    lng: -116.9445648,
    locationName: "Family Dollar"
  },
  {
    route: "Post Falls",
    placeId: "ChIJe_dGyRzDYVMRzNP_qxC6tWw",
    edition: "NID",
    notes: "Bag if not open. Community Rack; Leave returns with clerk 5 ONLY",
    address: "503 E Seltice Way #12, Post Falls, ID 83854, USA",
    lat: 47.71527259999999,
    lng: -116.9410979,
    locationName: "My Favorite Things"
  },
  {
    route: "Post Falls",
    placeId: "ChIJY7Jc4R_DYVMR_2vfnNnF3Qs",
    edition: "NID",
    notes: "Felix / Carrie; 208-773-4325; Community Rack",
    address: "604 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7140738,
    lng: -116.9401277,
    locationName: "La Cabana Mexican Restaurant"
  },
  {
    route: "Post Falls",
    placeId: "ChIJgcoZVAPDYVMRB9_TGW349UY",
    edition: "NID",
    notes: "Place on single EX Rack",
    address: "611 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7145657,
    lng: -116.9391692,
    locationName: "The Falls Club"
  },
  {
    route: "Post Falls",
    placeId: "ChIJfWsJShnDYVMRkoH55QBKL4M",
    edition: "NID",
    notes: "Community Rack",
    address: "706 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7136021,
    lng: -116.9384111,
    locationName: "Walgreens"
  },
  {
    route: "Post Falls",
    placeId: "ChIJw6miggPDYVMRoFh-bb5JU68",
    edition: "NID",
    notes: "Inlander Community Rack; 1 Pocket ",
    address: "Post Falls Square Shopping Center, 805 E Polston Ave, Post Falls, ID 83854, USA",
    lat: 47.71544,
    lng: -116.936455,
    locationName: "Super 1 Foods"
  },
  {
    route: "Post Falls",
    placeId: "ChIJt_0dmAjDYVMRXhDIHcdiMKc",
    edition: "NID",
    notes: "Inlander Community Rack ; 1 Pocket",
    address: "1501 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.71167459999999,
    lng: -116.9259325,
    locationName: "Yoke's Fresh Market - Post Falls"
  },
  {
    route: "Post Falls",
    placeId: "ChIJdUPiKQjDYVMRVZw0Ib3yt2U",
    edition: "NID",
    notes: "Top of community shelf",
    address: "1710 E Schneidmiller Ave, Post Falls, ID 83854, USA",
    lat: 47.7116876,
    lng: -116.9196044,
    locationName: "The Old European Restaurant"
  },
  {
    route: "Post Falls",
    placeId: "ChIJxVXBCADDYVMRCAVGowUJsM4",
    edition: "NID",
    notes: "Rack inside foyer",
    address: "1780 E Schneidmiller Ave, Post Falls, ID 83854, USA",
    lat: 47.71174389999999,
    lng: -116.9191192,
    locationName: "La Pinata"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ0fbRp-nAYVMR56Sal9d1vpM",
    edition: "NID",
    notes: "on rack with other papers middle of store",
    address: "525 N Graffiti St, Post Falls, ID 83854, USA",
    lat: 47.7112612,
    lng: -116.91896,
    locationName: "Tim's Special Cut Meats"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ8b21Y6fDYVMR-6pGAemCS-4",
    edition: "NID",
    notes: "Yellow Community Rack Inside Right of Door",
    address: "1815 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7108194,
    lng: -116.9181179,
    locationName: "76"
  },
  {
    route: "Post Falls",
    placeId: "ChIJVaNKzAnDYVMRh82NhxvvMPQ",
    edition: "NID",
    notes: "On Counter; Opens 10 am",
    address: "1645 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.710968,
    lng: -116.9202499,
    locationName: "Zip's Drive In"
  },
  {
    route: "Post Falls",
    placeId: "ChIJb8FrWAjDYVMRBapxu_Ycc7s",
    edition: "NID",
    notes: "Community Rack/Table",
    address: "1603 E Seltice Way C, Post Falls, ID 83854, USA",
    lat: 47.7112205,
    lng: -116.923107,
    locationName: "Gross Donuts"
  },
  {
    route: "Post Falls",
    placeId: "ChIJN_Jh_RzDYVMRYjZrChfbGbA",
    edition: "NID",
    notes: "Table to the right of the door; Opens 10 am",
    address: "1600 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.71015819999999,
    lng: -116.9240144,
    locationName: "Idaho Youth Ranch Thrift Store"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ2w0jBwnDYVMRIVwoKQJxmTI",
    edition: "NID",
    notes: "Exchange Wire folding rack",
    address: "1604 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.71018,
    lng: -116.922512,
    locationName: "Seright's Ace Hardware"
  },
  {
    route: "Post Falls",
    placeId: "ChIJ7zzGwAnDYVMRCBKOTEka6Ew",
    edition: "NID",
    notes: "coffee table",
    address: "1650 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7101972,
    lng: -116.9199765,
    locationName: "Jiffy Lube"
  },
  {
    route: "Post Falls",
    placeId: "ChIJV_EfwgnDYVMR5R-Fq5qizmE",
    edition: "NID",
    notes: "Window Sill",
    address: "1704 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7100665,
    lng: -116.9195303,
    locationName: "VCA Kootenai Animal Hospital"
  },
  {
    route: "Post Falls",
    placeId: "ChIJQ9f0yJfDYVMRG_Cks9ZBdso",
    edition: "NID",
    notes: "Rack in Entry",
    address: "315 S Ross Point Rd, Post Falls, ID 83854, USA",
    lat: 47.7083053,
    lng: -116.8956146,
    locationName: "Capone's Pub & Grill"
  },
  {
    route: "Post Falls",
    placeId: "ChIJEYy8OJbDYVMRSXH09mgATf8",
    edition: "NID",
    notes: "Metal folding Exchange Rack in Foyer",
    address: "4020 E Seltice Way, Post Falls, ID 83854, USA",
    lat: 47.7086484,
    lng: -116.8935112,
    locationName: "Chevron"
  },
  {
    route: "Post Falls",
    placeId: "ChIJjT7vKrnDYVMRT9O5dOtJyiM",
    edition: "NID",
    notes: "Community Rack",
    address: "770 ID-41, Post Falls, ID 83854, USA",
    lat: 47.7153434,
    lng: -116.8935233,
    locationName: "76"
  },
  {
    route: "Post Falls",
    placeId: "ChIJTXKZ6KTDYVMRKj4bbQ_kQeY",
    edition: "NID",
    notes: "Rack in entry next to Subway",
    address: "3050 E Mullan Ave, Post Falls, ID 83854, USA",
    lat: 47.71371389999999,
    lng: -116.9068306,
    locationName: "Walmart Supercenter"
  },
  {
    route: "Post Falls",
    placeId: "ChIJgaAIpsvDYVMRNTTGnhaVmjE",
    edition: "NID",
    notes: "Ziggys Rack at cashier; Manager Tim",
    address: "2121 ID-41, Post Falls, ID 83854, USA",
    lat: 47.72749340000001,
    lng: -116.8953597,
    locationName: "Ziggy's Home Improvement"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJvVOTJsnWY1MRL2HOhnDlg_M",
    edition: "NID",
    notes: "Tables",
    address: "502 Fifth Ave, Sandpoint, ID 83864, USA",
    lat: 48.2773489,
    lng: -116.5530256,
    locationName: "Wash-o-Mat"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJja_qrs7WY1MR7RRoQOp9eCc",
    edition: "NID",
    notes: "KEOKEE POCKET ONLY 1 MAX 60",
    address: "702 Fifth Ave, Sandpoint, ID 83864, USA",
    lat: 48.2796508,
    lng: -116.5523818,
    locationName: "Safeway"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJvdXf8svWY1MRjyT-W8kHIiI",
    edition: "NID",
    notes: "KEOKEE POCKET ONLY 1 MAX 60",
    address: "624 Larch St, Sandpoint, ID 83864, USA",
    lat: 48.281838,
    lng: -116.5562533,
    locationName: "Super 1 Foods"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJrSSE4yfRY1MRGms3wVHVPTM",
    edition: "NID",
    notes: "COMMUNITY RACK (per convo with Rich 4/6/22, he leaves 40 here AND WOULD LIKE HP HERE AUGUST)",
    address: "125 Tibbetts Ln, Ponderay, ID 83852, USA",
    lat: 48.2969358,
    lng: -116.5475554,
    locationName: "The CO-OP Gas & Supply Co., Inc."
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJrbFG2tjQY1MRqfLUGRDG290",
    edition: "NID",
    notes: "Front Counter",
    address: "47656 0, US-95, Ponderay, ID 83852, USA",
    lat: 48.3018975,
    lng: -116.5470816,
    locationName: "Zip’s Drive In - Ponderay"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJ7TdU4tjQY1MROQXyEQlI1Gw",
    edition: "NID",
    notes: "KEOKEE POCKET ONLY 1 MAX 60",
    address: "212 Bonner Mall Way, Sandpoint, ID 83864, USA",
    lat: 48.3022252,
    lng: -116.5451252,
    locationName: "Yoke's Fresh Market - Sandpoint"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJnbfhbNnQY1MRvkfKoezKwvs",
    edition: "NID",
    notes: "",
    address: "300 Bonner Mall Way, Sandpoint, ID 83864, USA",
    lat: 48.30153350000001,
    lng: -116.5428369,
    locationName: "Bonner Mall"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJXZw5qOfQY1MRIP_JVqOpOdk",
    edition: "NID",
    notes: "Exchange Tall Angle Iron Rack",
    address: "477181 US-95, Ponderay, ID 83852, USA",
    lat: 48.3102098,
    lng: -116.5443484,
    locationName: "North 40 Outfitters"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJyZ8uAdvQY1MRq9sx_Gm2Ja8",
    edition: "NID",
    notes: "Closes 2pm",
    address: "30784 ID-200, Ponderay, ID 83852, USA",
    lat: 48.3014884,
    lng: -116.5390659,
    locationName: "Hoot Owl Cafe"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJZ-kIipbBY1MR1QqTGTVVQXk",
    edition: "NID",
    notes: "Inside past cashier to left; Cabinet marked Auto Clipper",
    address: "486260 US-95, Sandpoint, ID 83864, USA",
    lat: 48.428585,
    lng: -116.4955749,
    locationName: "Blue Heron Cafe & Samuel Store"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJaRoICibrY1MRBPcCzFt7lNk",
    edition: "NID",
    notes: "Inside Right Window Sill; Last stop if going up and back on 95",
    address: "517 Deep Creek Loop, Naples, ID 83847, USA",
    lat: 48.5700037,
    lng: -116.3941087,
    locationName: "Naples General Store"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJw_MqSrrWY1MRtXs2YZWxYVE",
    edition: "NID",
    notes: "",
    address: "357 S Olive Ave, Sandpoint, ID 83864, USA",
    lat: 48.26981139999999,
    lng: -116.563541,
    locationName: "Carter Country Farm & Feed"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJ8f8hsv-RY1MRncIzxUwxkeE",
    edition: "NID",
    notes: "",
    address: "6421 Main St, Bonners Ferry, ID 83805, USA",
    lat: 48.6760762,
    lng: -116.3326688,
    locationName: "Chic-N-Chop"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJQf6AwxiSY1MRR0iP_xGgFUQ",
    edition: "NID",
    notes: "KEOKEE POCKET ONLY 1 MAX 60",
    address: "6452 Main St, Bonners Ferry, ID 83805, USA",
    lat: 48.67731639999999,
    lng: -116.3332884,
    locationName: "Super 1 Foods"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJNwq5DLaTY1MR6A6qZvD5cNI",
    edition: "NID",
    notes: "Outside EX Single w/ WCD; NEEDS SIGN",
    address: "6603 S Main St, Bonners Ferry, ID 83805, USA",
    lat: 48.6806738,
    lng: -116.3255318,
    locationName: "Sam’s Stop and Shop"
  },
  {
    route: "Sandpoint/ Bonners Ferry",
    placeId: "ChIJ6TZt1AKOY1MRvYEomt6a1bg",
    edition: "NID",
    notes: "Inside on Bar Top",
    address: "6424 Riverside St, Bonners Ferry, ID 83805, USA",
    lat: 48.6977157,
    lng: -116.3132248,
    locationName: "Kootenai River Brewing Co"
  },
];
