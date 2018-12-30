// +buy, +N action, +N card, +N money, trasher, junker, attack, reaction

var all_events=[

    {"name":"Alms", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Ball", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Bonfire", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Borrow", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Expedition", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Ferry", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Inheritance", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Lost_Arts", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Mission", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Pathfinding", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Pilgrimage", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Plan", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Quest", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Raid", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Save", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Scouting_Party", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Seaway", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Trade", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Training", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Travelling_Fair", "set":"adventures" ,"price":4, "type":["event"]},
    {"name":"Advance", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Annex", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Banquet", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Conquest", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Delve", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Dominate", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Donate", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Ritual", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Salt_the_Earth", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Tax", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Triumph", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Wedding", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Windfall", "set":"empires" ,"price":4, "type":["event"]},
    {"name":"Aqueduct", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Arena", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Bandit_Fort", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Basilica", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Baths", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Battlefield", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Colonnade", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Defiled_Shrine", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Fountain", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Keep", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Labyrinth", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Mountain_Pass", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Museum", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Obelisk", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Orchard", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Palace", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Tomb", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Tower", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Triumphal_Arch", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Wall", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"Wolf_Den", "set":"empires" ,"price":4, "type":["landmark"]},
    {"name":"cathedral", "set":"renaissance" ,"price":3, "type":["project"]},
    {"name":"city_gate", "set":"renaissance" ,"price":3, "type":["project"]},
    {"name":"pageant", "set":"renaissance" ,"price":3, "type":["project"]},
    {"name":"sewers", "set":"renaissance" ,"price":3, "type":["project"]},
    {"name":"star_chart", "set":"renaissance" ,"price":3, "type":["project"]},
    {"name":"exploration", "set":"renaissance" ,"price":4, "type":["project"]},
    {"name":"fair", "set":"renaissance" ,"price":4, "type":["project"]},
    {"name":"silos", "set":"renaissance" ,"price":4, "type":["project"]},
    {"name":"sinister_plot", "set":"renaissance" ,"price":4, "type":["project"]},
    {"name":"academy", "set":"renaissance" ,"price":5, "type":["project"]},
    {"name":"capitalism", "set":"renaissance" ,"price":5, "type":["project"]},
    {"name":"fleet", "set":"renaissance" ,"price":5, "type":["project"]},
    {"name":"guildhall", "set":"renaissance" ,"price":5, "type":["project"]},
    {"name":"piazza", "set":"renaissance" ,"price":5, "type":["project"]},
    {"name":"road_network", "set":"renaissance" ,"price":5, "type":["project"]},
    {"name":"barracks", "set":"renaissance" ,"price":6, "type":["project"]},
    {"name":"crop_rotation", "set":"renaissance" ,"price":6, "type":["project"]},
    {"name":"innovation", "set":"renaissance" ,"price":6, "type":["project"]},
    {"name":"canal", "set":"renaissance" ,"price":7, "type":["project"]},
    {"name":"citadel", "set":"renaissance" ,"price":8, "type":["project"]}
];

var all_cards=[
    {"name":"bureaucrat", "set":"base" ,"price":4, "type":["attack","terminal"]},
    {"name":"cellar", "set":"base" ,"price":2, "type":[]},
    {"name":"chapel", "set":"base" ,"price":2, "type":["trasher"]},
    {"name":"council_room", "set":"base" ,"price":5,"type":["cards"]},
    {"name":"festival", "set":"base" ,"price":5,"type":["action","buy"]},
    {"name":"gardens", "set":"base" ,"price":4,"type":[]},
    {"name":"laboratory", "set":"base" ,"price":5,"type":["cards"]},
    {"name":"library", "set":"base" ,"price":5,"type":["cards"]},
    {"name":"market", "set":"base" ,"price":5,"type":["buy"]},
    {"name":"militia", "set":"base" ,"price":4,"type":["attack"]},
    {"name":"mine", "set":"base" ,"price":5,"type":[]},
    {"name":"moat", "set":"base" ,"price":2,"type":["cards","reaction"]},
    {"name":"moneylender", "set":"base" ,"price":4,"type":["trasher"]},
    {"name":"remodel", "set":"base" ,"price":4,"type":["trasher"]},
    {"name":"smithy", "set":"base" ,"price":4,"type":["cards"]},
    {"name":"throne_room", "set":"base" ,"price":4,"type":[]},
    {"name":"village", "set":"base" ,"price":3,"type":["action"]},
    {"name":"witch", "set":"base" ,"price":5,"type":["cards","attack"]},
    {"name":"workshop", "set":"base" ,"price":3,"type":[]},
    {"name":"chancellor", "set":"base" ,"price":3,"type":[]},
    {"name":"feast", "set":"base" ,"price":4,"type":[]},
    {"name":"thief", "set":"base" ,"price":4,"type":["attack"]},
    {"name":"woodcutter", "set":"base" ,"price":3,"type":["buy"]},
    {"name":"adventurer", "set":"base" ,"price":6,"type":[]},
    {"name":"baron", "set":"intrigue" ,"price":4,"type":["buy"]},
    {"name":"bridge", "set":"intrigue" ,"price":4,"type":["buy"]},
    {"name":"conspirator", "set":"intrigue" ,"price":4,"type":[]},
    {"name":"courtyard", "set":"intrigue" ,"price":2,"type":["cards"]},
    {"name":"duke", "set":"intrigue" ,"price":5,"type":[]},
    {"name":"harem", "set":"intrigue" ,"price":6,"type":[]},
    {"name":"ironworks", "set":"intrigue" ,"price":4,"type":[]},
    {"name":"masquerade", "set":"intrigue" ,"price":3,"type":["cards","trasher"]},
    {"name":"mining_village", "set":"intrigue" ,"price":4,"type":["action"]},
    {"name":"minion", "set":"intrigue" ,"price":5,"type":["attack"]},
    {"name":"nobles", "set":"intrigue" ,"price":6,"type":["action","cards"]},
    {"name":"pawn", "set":"intrigue" ,"price":2,"type":[]},
    {"name":"shanty_town", "set":"intrigue" ,"price":3,"type":["action"]},
    {"name":"steward", "set":"intrigue" ,"price":3,"type":["trasher","cards"]},
    {"name":"swindler", "set":"intrigue" ,"price":3,"type":["attack"]},
    {"name":"torturer", "set":"intrigue" ,"price":5,"type":["attack","cards","junker"]},
    {"name":"trading_post", "set":"intrigue" ,"price":5,"type":["trasher"]},
    {"name":"upgrade", "set":"intrigue" ,"price":5,"type":["trasher"]},
    {"name":"ambassador", "set":"seaside" , "price":3,"type":["attack","trasher"]},
    {"name":"bazaar", "set":"seaside" , "price":5,"type":["action"]},
    {"name":"caravan", "set":"seaside" , "price":4,"type":[]},
    {"name":"cutpurse", "set":"seaside" , "price":3,"type":["attack"]},
    {"name":"embargo", "set":"seaside" , "price":2,"type":[]},
    {"name":"explorer", "set":"seaside" , "price":5,"type":[]},
    {"name":"fishing_village", "set":"seaside" , "price":3,"type":["action"]},
    {"name":"ghost_ship", "set":"seaside" , "price":5,"type":["attack","cards"]},
    {"name":"haven", "set":"seaside" , "price":2,"type":[]},
    {"name":"island", "set":"seaside" , "price":4,"type":["trasher"]},
    {"name":"lighthouse", "set":"seaside" , "price":2,"type":["reaction"]},
    {"name":"lookout", "set":"seaside" , "price":3,"type":["trasher"]},
    {"name":"merchant_ship", "set":"seaside" , "price":5,"type":[]},
    {"name":"native_village", "set":"seaside" , "price":2,"type":["action"]},
    {"name":"navigator", "set":"seaside" , "price":4,"type":[]},
    {"name":"outpost", "set":"seaside" , "price":5,"type":[]},
    {"name":"pearl_diver", "set":"seaside" , "price":2,"type":[]},
    {"name":"pirate_ship", "set":"seaside" , "price":4,"type":["attack"]},
    {"name":"salvager", "set":"seaside" , "price":4,"type":["trasher"]},
    {"name":"sea_hag", "set":"seaside" , "price":4,"type":["attack","junker"]},
    {"name":"smugglers", "set":"seaside" , "price":3,"type":[]},
    {"name":"tactician", "set":"seaside" , "price":5,"type":[]},
    {"name":"treasure_map", "set":"seaside" , "price":4,"type":[]},
    {"name":"treasury", "set":"seaside" , "price":5,"type":[]},
    {"name":"warehouse", "set":"seaside" , "price":3,"type":[]},
    {"name":"wharf", "set":"seaside" , "price":5,"type":["cards","buy"]},
    {"name":"alchemist", "set":"alchemy" , "price":3.3,"type":["cards"]},
    {"name":"apothecary", "set":"alchemy" , "price":2.3,"type":[]},
    {"name":"apprentice", "set":"alchemy" , "price":5,"type":["trasher"]},
    {"name":"familiar", "set":"alchemy" , "price":3.3,"type":["attack","junker"]},
    {"name":"golem", "set":"alchemy" , "price":4.3,"type":[]},
    {"name":"herbalist", "set":"alchemy" , "price":2,"type":[]},
    {"name":"philosopher's stone", "set":"alchemy" , "price":3.3,"type":[]},
    {"name":"possession", "set":"alchemy" , "price":6.3,"type":[]},
    {"name":"scrying pool", "set":"alchemy" , "price":2.3,"type":["attack"]},
    {"name":"transmute", "set":"alchemy" , "price":1.3,"type":["trasher"]},
    {"name":"university", "set":"alchemy" , "price":2.3,"type":["action"]},
    {"name":"vineyard", "set":"alchemy" , "price":0.3,"type":[]},
    {"name":"bank", "set":"prosperity" , "price":7,"type":[]},
    {"name":"bishop", "set":"prosperity" , "price":4,"type":["trasher"]},
    {"name":"city", "set":"prosperity" , "price":5,"type":["action"]},
    {"name":"contraband", "set":"prosperity" , "price":5,"type":["buy"]},
    {"name":"counting house", "set":"prosperity" , "price":5,"type":[]},
    {"name":"expand", "set":"prosperity" , "price":7,"type":["trasher"]},
    {"name":"forge", "set":"prosperity" , "price":7,"type":["trasher"]},
    {"name":"goons", "set":"prosperity" , "price":6,"type":["attack","buy"]},
    {"name":"grand_market", "set":"prosperity" , "price":6.01,"type":["buy"]},
    {"name":"hoard", "set":"prosperity" , "price":6,"type":[]},
    {"name":"kings_court", "set":"prosperity" , "price":7,"type":[]},
    {"name":"loan", "set":"prosperity" , "price":3,"type":["trasher"]},
    {"name":"mint", "set":"prosperity" , "price":5,"type":[]},
    {"name":"monument", "set":"prosperity" , "price":4,"type":["victory_p"]},
    {"name":"mountebank", "set":"prosperity" , "price":5,"type":["attack","junker"]},
    {"name":"peddler", "set":"prosperity" , "price":8,"type":[]},
    {"name":"quarry", "set":"prosperity" , "price":4,"type":[]},
    {"name":"rabble", "set":"prosperity" , "price":5,"type":["attack","cards"]},
    {"name":"royal_seal", "set":"prosperity" , "price":5,"type":[]},
    {"name":"talisman", "set":"prosperity" , "price":4,"type":[]},
    {"name":"trade_route", "set":"prosperity" , "price":3,"type":["trasher","buy"]},
    {"name":"watchtower", "set":"prosperity" , "price":3,"type":["reaction","cards"]},
    {"name":"vault", "set":"prosperity" , "price":5,"type":["cards"]},
    {"name":"venture", "set":"prosperity" , "price":5,"type":[]},
    {"name":"worker's_village", "set":"prosperity" , "price":4,"type":["action"]},
    {"name":"fairgrounds", "set":"cornucopia" , "price":6,"type":[]},
    {"name":"farming_village", "set":"cornucopia" , "price":4,"type":["action"]},
    {"name":"fortune_teller", "set":"cornucopia" , "price":3,"type":[]},
    {"name":"hamlet", "set":"cornucopia" , "price":2,"type":["action"]},
    {"name":"harvest", "set":"cornucopia" , "price":5,"type":[]},
    {"name":"horn_of_plenty", "set":"cornucopia" , "price":5,"type":[]},
    {"name":"horse_traders", "set":"cornucopia" , "price":4,"type":["reaction"]},
    {"name":"hunting_party", "set":"cornucopia" , "price":5,"type":["cards"]},
    {"name":"jester", "set":"cornucopia" , "price":5,"type":["attack","junker"]},
    {"name":"menagerie", "set":"cornucopia" , "price":3,"type":[]},
    {"name":"remake", "set":"cornucopia" , "price":4,"type":["trasher"]},
    {"name":"tournament", "set":"cornucopia" , "price":4,"type":[]},
    {"name":"young_witch", "set":"cornucopia" , "price":4,"type":["attack","junker"]},
    {"name":"border_village", "set":"hinterlands" , "price":6, "type":["action"]},
    {"name":"cache", "set":"hinterlands" , "price":5,"type":[]},
    {"name":"cartographer", "set":"hinterlands" , "price":5,"type":[]},
    {"name":"crossroads", "set":"hinterlands" , "price":2,"type":["action"]},
    {"name":"develop", "set":"hinterlands" , "price":3,"type":["trasher"]},
    {"name":"duchess", "set":"hinterlands" , "price":2,"type":[]},
    {"name":"embassy", "set":"hinterlands" , "price":5,"type":["cards"]},
    {"name":"farmland", "set":"hinterlands" , "price":6,"type":[]},
    {"name":"fool's_gold", "set":"hinterlands" , "price":2,"type":[]},
    {"name":"haggler", "set":"hinterlands" , "price":5,"type":[]},
    {"name":"highway", "set":"hinterlands" , "price":5,"type":[]},
    {"name":"ill_gotten_gains", "set":"hinterlands" , "price":5,"type":["junker"]},
    {"name":"inn", "set":"hinterlands" , "price":5,"type":["action"]},
    {"name":"jack_of_all_trades", "set":"hinterlands" , "price":4,"type":["trasher"]},
    {"name":"mandarin", "set":"hinterlands" , "price":5,"type":[]},
    {"name":"margrave", "set":"hinterlands" , "price":5,"type":["cards","attack"]},
    {"name":"noble_brigand", "set":"hinterlands" , "price":4,"type":["attack"]},
    {"name":"nomad_camp", "set":"hinterlands" , "price":4,"type":["buy"]},
    {"name":"oasis", "set":"hinterlands" , "price":3,"type":[]},
    {"name":"oracle", "set":"hinterlands" , "price":3,"type":["cards","attack"]},
    {"name":"scheme", "set":"hinterlands" , "price":3,"type":[]},
    {"name":"silk_road", "set":"hinterlands" , "price":4,"type":[]},
    {"name":"spice_merchant", "set":"hinterlands" , "price":4,"type":["trasher"]},
    {"name":"stables", "set":"hinterlands" , "price":5,"type":["cards"]},
    {"name":"trader", "set":"hinterlands" , "price":4,"type":["trasher","reaction"]},
    {"name":"tunnel", "set":"hinterlands" , "price":3,"type":["reaction"]},
    {"name":"altar", "set":"dark_ages" , "price":6,"type":["trasher"]},
    {"name":"armory", "set":"dark_ages" , "price":4,"type":[]},
    {"name":"band_of_misfits", "set":"dark_ages" , "price":5,"type":[]},
    {"name":"bandit_camp", "set":"dark_ages" , "price":5,"type":["action"]},
    {"name":"beggar", "set":"dark_ages" , "price":2,"type":["reaction"]},
    {"name":"catacombs", "set":"dark_ages" , "price":5,"type":["cards"]},
    {"name":"count", "set":"dark_ages" , "price":5,"type":["trasher"]},
    {"name":"counterfeit", "set":"dark_ages" , "price":5,"type":["trasher"]},
    {"name":"cultist", "set":"dark_ages" , "price":5,"type":["attack","junker"]},
    {"name":"death_cart", "set":"dark_ages" , "price":4,"type":["trasher"]},
    {"name":"feodum", "set":"dark_ages" , "price":4,"type":[]},
    {"name":"forager", "set":"dark_ages" , "price":3,"type":["trasher"]},
    {"name":"fortress", "set":"dark_ages" , "price":4,"type":["action"]},
    {"name":"graverobber", "set":"dark_ages" , "price":5,"type":["trasher"]},
    {"name":"hermit", "set":"dark_ages" , "price":3,"type":["trasher"]},
    {"name":"hunting_grounds", "set":"dark_ages" , "price":6,"type":["cards"]},
    {"name":"ironmonger", "set":"dark_ages" , "price":4,"type":[]},
    {"name":"junk_dealer", "set":"dark_ages" , "price":5,"type":["trasher"]},
    {"name":"knights", "set":"dark_ages" , "price":5,"type":["attack"]},
    {"name":"marauder", "set":"dark_ages" , "price":4,"type":["attack","junker"]},
    {"name":"market_square", "set":"dark_ages" , "price":3,"type":["buy","reaction"]},
    {"name":"mystic", "set":"dark_ages" , "price":5,"type":[]},
    {"name":"pillage", "set":"dark_ages" , "price":5,"type":["attack"]},
    {"name":"poor_house", "set":"dark_ages" , "price":1,"type":[]},
    {"name":"procession", "set":"dark_ages" , "price":4,"type":[]},
    {"name":"rats", "set":"dark_ages" , "price":4,"type":["trasher"]},
    {"name":"rebuild", "set":"dark_ages" , "price":5,"type":[]},
    {"name":"rogue", "set":"dark_ages" , "price":5,"type":["attack"]},
    {"name":"sage", "set":"dark_ages" , "price":3,"type":[]},
    {"name":"scavenger", "set":"dark_ages" , "price":4,"type":[]},
    {"name":"squire", "set":"dark_ages" , "price":2,"type":[]},
    {"name":"storeroom", "set":"dark_ages" , "price":3,"type":[]},
    {"name":"urchin", "set":"dark_ages" , "price":3,"type":["attack","trasher"]},
    {"name":"vagrant", "set":"dark_ages" , "price":2,"type":[]},
    {"name":"wandering_minstrel", "set":"dark_ages" , "price":4,"type":["action"]},
    {"name":"advisor", "set":"guilds" , "price":4,"type":[]},
    {"name":"baker", "set":"guilds" , "price":5,"type":[]},
    {"name":"butcher", "set":"guilds" , "price":5,"type":[]},
    {"name":"candlestick_maker", "set":"guilds" , "price":2,"type":[]},
    {"name":"doctor", "set":"guilds" , "price":3.1,"type":["trasher"]},
    {"name":"herald", "set":"guilds" , "price":4.1,"type":[]},
    {"name":"journeyman", "set":"guilds" , "price":5,"type":["cards"]},
    {"name":"masterpiece", "set":"guilds" , "price":3.1,"type":[]},
    {"name":"merchant_guild", "set":"guilds" , "price":5,"type":[]},
    {"name":"plaza", "set":"guilds" , "price":4,"type":["action"]},
    {"name":"soothsayer", "set":"guilds" , "price":5,"type":["attack","junker"]},
    {"name":"stonemason", "set":"guilds" , "price":2.1,"type":["trasher"]},
    {"name":"taxman", "set":"guilds" , "price":4,"type":["attack","trasher"]},
    {"name":"amulet", "set":"adventures" ,"price":3,"type":["trasher"]},
    {"name":"artificer", "set":"adventures" ,"price":5,"type":[]},
    {"name":"bridge_troll", "set":"adventures" ,"price":5,"type":["attack","buy"]},
    {"name":"caravan_guard", "set":"adventures" ,"price":3,"type":["reaction"]},
    {"name":"coin_of_the_realm", "set":"adventures" ,"price":2,"type":["action"]},
    {"name":"distant_lands", "set":"adventures" ,"price":5,"type":[]},
    {"name":"dungeon", "set":"adventures" ,"price":3,"type":[]},
    {"name":"duplicate", "set":"adventures" ,"price":4,"type":[]},
    {"name":"gear", "set":"adventures" ,"price":3,"type":[]},
    {"name":"giant", "set":"adventures" ,"price":5,"type":["attack","junker"]},
    {"name":"guide", "set":"adventures" ,"price":3,"type":[]},
    {"name":"haunted_woods", "set":"adventures" ,"price":5,"type":["attack","cards"]},
    {"name":"hireling", "set":"adventures" ,"price":6,"type":[]},
    {"name":"lost_city", "set":"adventures" ,"price":5,"type":["action","cards"]},
    {"name":"magpie", "set":"adventures" ,"price":4,"type":[]},
    {"name":"messenger", "set":"adventures" ,"price":4,"type":[]},
    {"name":"miser", "set":"adventures" ,"price":4,"type":[]},
    {"name":"page", "set":"adventures" ,"price":2,"type":[]},
    {"name":"peasant", "set":"adventures" ,"price":2,"type":[]},
    {"name":"port", "set":"adventures" ,"price":4,"type":["action"]},
    {"name":"ranger", "set":"adventures" ,"price":4,"type":["cards"]},
    {"name":"ratcatcher", "set":"adventures" ,"price":2,"type":["trasher"]},
    {"name":"raze", "set":"adventures" ,"price":2,"type":["trasher"]},
    {"name":"relic", "set":"adventures" ,"price":5,"type":["attack"]},
    {"name":"royal_carriage", "set":"adventures" ,"price":5,"type":[]},
    {"name":"storyteller", "set":"adventures" ,"price":5,"type":[]},
    {"name":"swamp_hag", "set":"adventures" ,"price":5,"type":[]},
    {"name":"transmogrify", "set":"adventures" ,"price":4,"type":["upgrader"]},
    {"name":"treasure_trove", "set":"adventures" ,"price":5,"type":[]},
    {"name":"wine_merchant", "set":"adventures" ,"price":5,"type":["buy"]},
    {"name":"archive", "set":"empires" ,"price":5,"type":[]},
    {"name":"capital", "set":"empires" ,"price":5,"type":[]},
    {"name":"castles", "set":"empires" ,"price":3,"type":[]},
    {"name":"catapult", "set":"empires" ,"price":3,"type":["trasher","attack"]},
    {"name":"chariot_race", "set":"empires" ,"price":3,"type":["victory_p"]},
    {"name":"charm", "set":"empires" ,"price":5,"type":["buy"]},
    {"name":"city_quarter", "set":"empires" ,"price":8,"type":["action","cards"]},
    {"name":"crown", "set":"empires" ,"price":5,"type":[]},
    {"name":"encampment", "set":"empires" ,"price":2,"type":["action"]},
    {"name":"enchantress", "set":"empires" ,"price":3,"type":["attack","cards"]},
    {"name":"engineer", "set":"empires" ,"price":4,"type":[]},
    {"name":"farmers_market", "set":"empires" ,"price":3,"type":[]},
    {"name":"forum", "set":"empires" ,"price":5,"type":[]},
    {"name":"gladiator", "set":"empires" ,"price":3,"type":[]},
    {"name":"groundskeeper", "set":"empires" ,"price":5,"type":[]},
    {"name":"legionary", "set":"empires" ,"price":5,"type":["attack"]},
    {"name":"overlord", "set":"empires" ,"price":8,"type":[]},
    {"name":"patrician", "set":"empires" ,"price":2,"type":[]},
    {"name":"royal_blacksmith", "set":"empires" ,"price":8,"type":["cards"]},
    {"name":"sacrifice", "set":"empires" ,"price":4,"type":["trasher","victory_p"]},
    {"name":"settlers", "set":"empires" ,"price":2,"type":["action"]},
    {"name":"temple", "set":"empires" ,"price":4,"type":["trasher","victory_p"]},
    {"name":"wild_hunt", "set":"empires" ,"price":5,"type":["victory_p"]},
    {"name":"villa", "set":"empires" ,"price":4,"type":["action"]},
    {"name":"bard", "set":"nocturne" ,"price":4,"type":[]},
    {"name":"blessed_village", "set":"nocturne" ,"price":4,"type":["action"]},
    {"name":"cemetery", "set":"nocturne" ,"price":4,"type":["trasher"]},
    {"name":"changeling", "set":"nocturne" ,"price":3,"type":[]},
    {"name":"cobbler", "set":"nocturne" ,"price":5,"type":[]},
    {"name":"conclave", "set":"nocturne" ,"price":4,"type":["action"]},
    {"name":"crypt", "set":"nocturne" ,"price":5,"type":[]},
    {"name":"cursed_village", "set":"nocturne" ,"price":5,"type":["action"]},
    {"name":"den_of_sin", "set":"nocturne" ,"price":5,"type":["cards"]},
    {"name":"devils_workshop", "set":"nocturne" ,"price":4,"type":[]},
    {"name":"druid", "set":"nocturne" ,"price":2,"type":[]},
    {"name":"exorcist", "set":"nocturne" ,"price":4,"type":["trasher"]},
    {"name":"faithful_hound", "set":"nocturne" ,"price":2,"type":["cards","reaction"]},
    {"name":"fool", "set":"nocturne" ,"price":3,"type":[]},
    {"name":"ghost_town", "set":"nocturne" ,"price":3,"type":["action"]},
    {"name":"guardian", "set":"nocturne" ,"price":2,"type":["reaction"]},
    {"name":"idol", "set":"nocturne" ,"price":5,"type":["attack"]},
    {"name":"leprechaun", "set":"nocturne" ,"price":3,"type":[]},
    {"name":"monastery", "set":"nocturne" ,"price":2,"type":["trasher"]},
    {"name":"necromancer", "set":"nocturne" ,"price":4,"type":["trasher"]},
    {"name":"night_watchman", "set":"nocturne" ,"price":3,"type":[]},
    {"name":"pixie", "set":"nocturne" ,"price":2,"type":[]},
    {"name":"pooka", "set":"nocturne" ,"price":5,"type":["trasher"]},
    {"name":"raider", "set":"nocturne" ,"price":6,"type":["attack"]},
    {"name":"sacred_grove", "set":"nocturne" ,"price":5,"type":[]},
    {"name":"secret_cave", "set":"nocturne" ,"price":3,"type":[]},
    {"name":"shepherd", "set":"nocturne" ,"price":4,"type":["cards"]},
    {"name":"skulk", "set":"nocturne" ,"price":4,"type":["attack"]},
    {"name":"tormentor", "set":"nocturne" ,"price":5,"type":["attack"]},
    {"name":"tracker", "set":"nocturne" ,"price":2,"type":[]},
    {"name":"tragic_hero", "set":"nocturne" ,"price":5,"type":["cards"]},
    {"name":"vampire", "set":"nocturne" ,"price":5,"type":["attack","trasher"]},
    {"name":"werewolf", "set":"nocturne" ,"price":5,"type":["attack"]},
    {"name":"border_guard", "set":"renaissance" ,"price":2,"type":[""]},
    {"name":"ducat", "set":"renaissance" ,"price":2,"type":[""]},
    {"name":"lackeys", "set":"renaissance" ,"price":2,"type":["cards"]},
    {"name":"acting_troupe", "set":"renaissance" ,"price":3,"type":["action"]},
    {"name":"cargo_ship", "set":"renaissance" ,"price":3,"type":[""]},
    {"name":"experiment", "set":"renaissance" ,"price":3,"type":["cards"]},
    {"name":"improve", "set":"renaissance" ,"price":3,"type":["trasher"]},
    {"name":"flag_bearer", "set":"renaissance" ,"price":4,"type":[""]},
    {"name":"hideout", "set":"renaissance" ,"price":4,"type":["action,trasher"]},
    {"name":"inventor", "set":"renaissance" ,"price":4,"type":[""]},
    {"name":"mountain_village", "set":"renaissance" ,"price":4,"type":["action"]},
    {"name":"patron", "set":"renaissance" ,"price":4,"type":[""]},
    {"name":"priest", "set":"renaissance" ,"price":4,"type":["trasher"]},
    {"name":"research", "set":"renaissance" ,"price":4,"type":["trasher"]},
    {"name":"silk_merchant", "set":"renaissance" ,"price":4,"type":[""]},
    {"name":"old_witch", "set":"renaissance" ,"price":5,"type":["attack"]},
    {"name":"recruiter", "set":"renaissance" ,"price":5,"type":["trasher,action"]},
    {"name":"scepter", "set":"renaissance" ,"price":5,"type":[""]},
    {"name":"scholar", "set":"renaissance" ,"price":5,"type":["cards"]},
    {"name":"sculptor", "set":"renaissance" ,"price":5,"type":[""]},
    {"name":"seer", "set":"renaissance" ,"price":5,"type":[""]},
    {"name":"spices", "set":"renaissance" ,"price":5,"type":["buy"]},
    {"name":"swashbuckler", "set":"renaissance" ,"price":5,"type":["cards"]},
    {"name":"treasurer", "set":"renaissance" ,"price":5,"type":["trasher"]},
    {"name":"villain", "set":"renaissance" ,"price":5,"type":["attack"]}
];

var random_cards=[];
var random_events=[];
var find_cards=[];
//var filtered_cards= all_cards;


function updateAutocomplete(){
    let selection=$('.selected')
    if ($('.selected').length != 1){
        return
    }
    if (isSelectionEvent(selection[0])){
        find_cards=getAutoCompleteTagsFromEvents();
    }else{
        find_cards=getAutoCompleteTagsFromCards();
    }
    $( function() {
        $( "#findcard" ).autocomplete({
          max:10,
          minLength:1,
          source: function(request, response) {
            var results = $.ui.autocomplete.filter(find_cards, request.term);

            response(results.slice(0, 10));
            },
          messages: {
            noResults: '',
            results: function() {
                }
        },
        select: function( event, ui ) {
            setCardByName(ui.item.value);
            }
        });
      } );
}

function getAutoCompleteTagsFromEvents(){
    x=[];
    events=filterCardsBySet(all_events)
    events=filterPickedCards(events,random_events)
    for (i in events) {
        x.push(events[i].name);
    }
    return x;

}
function getAutoCompleteTagsFromCards(){
    x=[];
    cards=filterCardsBySet(all_cards)
    cards=filterCardsByType(cards)
    cards=filterCardsByPrice(cards)
    cards=filterPickedCards(cards,random_cards)

    for (i in cards) {
        x.push(cards[i].name);
    }
    return x;
}

function loadStorage(){
    //
    //TODO LOAD CURRENT SET TO STORAGE
}


function saveStorage(){
    //TODO SAVE CURRENT SET TO STORAGE
}
function comparePrice(a,b) {
  if (a.price < b.price)
    return 1;
  if (a.price > b.price)
    return -1;
  if (a.name > b.name)
    return 1;
  if (a.name < b.name)
    return -1;
  return 0;
}
function sortCardsByPrice(cards){
    cards.sort(comparePrice);
   $(".selected").removeClass("selected");

}


function getNCards(cardlist,n,cards){
    var cards = [];
    var item
    var fcards
    fcards=filterCardsBySet(cardlist)
    for (i = 0; i < n; i++){
       rand_i=Math.floor(Math.random()*fcards.length);
       item = fcards[rand_i];
       cards.push(item);
       fcards.splice(rand_i,1);
    }
    return cards
}
function filterCardsByType(cardlist){
    var filtered_cards;

    if (noTypeFiltered())
        return cardlist;
    filtered_cards=cardlist.filter(function(elem){
            if(document.getElementById("plus_actions").checked){
                if (isType("action",elem)){
                    return true;
                }
            }
            if(document.getElementById("plus_cards").checked){
                if (isType("cards",elem)){
                    return true;
                }
            }
            if(document.getElementById("trasher").checked){
                if (isType("trasher",elem)){
                    return true;
                }
            }
            if(document.getElementById("attack").checked){
                if (isType("attack",elem)){
                    return true;
                }
            }
            if(document.getElementById("reaction").checked){
                if (isType("reaction",elem)){
                    return true;
                }
            }

            return false
    });
    return filtered_cards;

}
function hasTypes(typelist,card){
    for (l=0; l<typelist.length;l++){
        if (!isType(typelist[l],card)){
            return false;
        }
    }
    return true;

}
function isType(type,card){
// +buy, +N action, +N card, +N money, trasher, junker, attack, reaction
    for (h=0; h<card.type.length;h++){
        if (type==card.type[h]){
            return true;
        }
    }
    return false;
}

function isACardHere(card_name, cards){
    //re
    for (i=0; i<cards.length;i++){
        if (cards[i].name==card_name){
            return true;
        }
    }

    return false;
}
function isEnoughCards(cardlist,N){
    if (cardlist.length>=N)
        return true;
    else
        return false;
}
function getTenCards(cardlist){
     var cards = [];
     var item
     var fcards=cardlist;
     for (i = 0; i < 10; i++){
        rand_i=Math.floor(Math.random()*cardlist.length);
        item = cardlist[rand_i];
        cards.push(item);
        cardlist.splice(rand_i,1);
     }
     return cards
}


function repickCard(index,card){
    random_cards[index]=card;
    return card;
}
function noTypeFiltered(){
    var a=[];
    a[0]=document.getElementById("plus_actions").checked
    a[1]=document.getElementById("plus_cards").checked
    a[2]=document.getElementById("trasher").checked
    a[3]=document.getElementById("attack").checked
    a[4]=document.getElementById("reaction").checked

    for (i=0; i<a.length; i++){
        if (a[i]==true)
            return false;
    }
    return true;
}
function noPriceFiltered(){
    var a=[];
    a[0]=document.getElementById("price8_checkbox").checked
    a[1]=document.getElementById("price7_checkbox").checked
    a[2]=document.getElementById("price6_checkbox").checked
    a[3]=document.getElementById("price5_checkbox").checked
    a[4]=document.getElementById("price4_checkbox").checked
    a[5]=document.getElementById("price3_checkbox").checked
    a[6]=document.getElementById("price2_checkbox").checked
    for (i=0; i<a.length; i++){
        if (a[i]==true)
            return false;
    }
    return true;
}

function repickACard(index,dclick_elem){
    filtered_cards=filterCardsBySet(all_cards);
    filtered_cards=filterCardsByPrice(filtered_cards);
    filtered_cards=filterCardsByType(filtered_cards);
    filtered_cards=filterPickedCards(filtered_cards,random_cards);
    var r_card;
    if (!isEnoughCards(filtered_cards,1)){
        alert("Not enough cards with current restrictions")
        return
    }
    newcard=getNCards(filtered_cards,1);
    r_card=repickCard(index,newcard[0]);

    updateAutocomplete()
    setCardImage(dclick_elem,r_card)
}
function getSelectionIndex(selection){
    if (isSelectionEvent(selection)){
        return selection.cellIndex;
    }else{
        return selection.cellIndex+selection.parentNode.rowIndex*5;
    }
}
function isSelectionEvent(elem){
    if (elem.parentNode.parentNode.parentNode.id=="eventsTable")
        return true;
    return false;
}
function repickCards(){
    //var selected_cards=document.getElementsByClassName("selected");
    var selected_cards=$('.selected')
    var repicked_cards=[];
    var repicked_events=[];
    var N=selected_cards.length;
    var r_card;

    var event_count=0;
    filtered_cards=filterCardsBySet(all_events);
    for (k=0; k<N; k++){
        if (isSelectionEvent(selected_cards[k])){
            event_count++;
        }
    }
    filtered_events=filterCardsBySet(all_events);
    filtered_events=filterPickedCards(filtered_events,random_events);
    filtered_cards=filterCardsBySet(all_cards);
    filtered_cards=filterCardsByPrice(filtered_cards);
    filtered_cards=filterCardsByType(filtered_cards);
    filtered_cards=filterPickedCards(filtered_cards,random_cards);
    if (!isEnoughCards(filtered_cards,N-event_count)){
        alert("Not enough cards with current restrictions")
        return
    }
    repicked_cards=getNCards(filtered_cards,N);
    repicked_events=selectEvents(filtered_events,event_count);
    for (k=0; k<N; k++){
        if (isSelectionEvent(selected_cards[k])){
            setEventImage(selected_cards[k],repicked_events[event_count-1]);
            random_events[getSelectionIndex(selected_cards[k])]=repicked_events[event_count-1];
            event_count--;
            continue;
        }

        r_card=repickCard(getSelectionIndex(selected_cards[k]),repicked_cards[k]);
        setCardImage(selected_cards[k],r_card)
    }
    updateAutocomplete()
}

function filterPickedCards(cardlist,cards){
    var filtered_cards=cardlist.filter(function(elem){
        if (isACardHere(elem.name, cards)){
            return false;
        }else{
            return true;
        }
    });
    return filtered_cards
}


function filterCardsByPrice(cardlist){
    if(noPriceFiltered())
        return cardlist;

    var filtered_cards;
    filtered_cards=cardlist.filter(function(elem){
            if(document.getElementById("price8_checkbox").checked){
                if (Math.floor(elem.price)==8){
                    return true;
                }
            }
            if(document.getElementById("price7_checkbox").checked){
                if (Math.floor(elem.price)==7){
                    return true;
                }
            }
            if(document.getElementById("price6_checkbox").checked){
                if (Math.floor(elem.price)==6){
                    return true;
                }
            }
            if(document.getElementById("price5_checkbox").checked){
                if (Math.floor(elem.price)==5){
                    return true;
                }
            }
            if(document.getElementById("price4_checkbox").checked){
                if (Math.floor(elem.price)==4){
                    return true;
                }
            }
            if(document.getElementById("price3_checkbox").checked){
                if (Math.floor(elem.price)==3){
                    return true;
                }
            }
            if(document.getElementById("price2_checkbox").checked){
                if (Math.floor(elem.price)==2){
                    return true;
                }
            }

    });
    return filtered_cards;
}
function filterCardsBySet(cardlist){
    var filtered_cards;
    filtered_cards=cardlist.filter(function(elem){
            //filter already selected cards
            //filter by selected sets
            if(document.getElementById("base_checkbox").checked){
                if (elem.set=="base"){
                    return true;
                }
            }
            if(document.getElementById("intrigue_checkbox").checked){
                if (elem.set=="intrigue"){
                    return true;
                }
            }

            if(document.getElementById("seaside_checkbox").checked){
                if (elem.set=="seaside"){
                    return true;
                }
            }

            if(document.getElementById("alchemy_checkbox").checked){
                if (elem.set=="alchemy"){
                    return true;
                }
            }

            if(document.getElementById("alchemy_checkbox").checked){
                if (elem.set=="alchemy"){
                    return true;
                }
            }

            if(document.getElementById("prosperity_checkbox").checked){
                if (elem.set=="prosperity"){
                    return true;
                }
            }

            if(document.getElementById("cornucopia_checkbox").checked){
                if (elem.set=="cornucopia"){
                    return true;
                }
            }

            if(document.getElementById("hinterlands_checkbox").checked){
                if (elem.set=="hinterlands"){
                    return true;
                }
            }

            if(document.getElementById("dark_ages_checkbox").checked){
                if (elem.set=="dark_ages"){
                    return true;
                }
            }

            if(document.getElementById("guilds_checkbox").checked){
                if (elem.set=="guilds"){
                    return true;
                }
            }


            if(document.getElementById("adventures_checkbox").checked){
                if (elem.set=="adventures"){
                    return true;
                }
            }
            if(document.getElementById("empires_checkbox").checked){
                if (elem.set=="empires"){
                    return true;
                }
            }

            if(document.getElementById("nocturne_checkbox").checked){
                if (elem.set=="nocturne"){
                    return true;
                }
            }
            if(document.getElementById("renaissance_checkbox").checked){
                if (elem.set=="renaissance"){
                    return true;
                }
            }
        return false;
    });

    return filtered_cards;
}
function setCardByName(name){
    let selection = $('.selected')
    let index=getSelectionIndex(selection[0])
    if (isSelectionEvent(selection[0])){
        card = all_events.filter (function(all_events){ return all_events.name == name });
        random_events[index]=card[0]
        setEventImage(selection[0],card[0])
    }else{
        card = all_cards.filter (function(all_cards){ return all_cards.name == name });
        random_cards[index]=card[0]
        updateAutocomplete()
        setCardImage(selection[0],card[0])
    }
}
function cardLoaded(elem,elem2){
    elem.style.display="none"
    elem2.style.display="block"

}
function initTable(table){
    let frontimage = document.createElement('div');
    let backimage = document.createElement('div');
    let frontimage_img=new Image()
    let backimage_img=new Image()
    backimage.className="backimage"
    frontimage.className="frontimage"
    backimage_img.src="card_images/card_back.jpg"
    backimage.style.height="0px"
    backimage.appendChild(backimage_img);
    frontimage.appendChild(frontimage_img)
    var cellarray=[];

    var table = document.getElementById("selectedCardTable");
    var row = table.insertRow(0);
    var row2 = table.insertRow(1);
    cellarray.push(row.insertCell(0));
    cellarray.push(row.insertCell(1));
    cellarray.push(row.insertCell(2));
    cellarray.push(row.insertCell(3));
    cellarray.push(row.insertCell(4));
    cellarray.push(row2.insertCell(0));
    cellarray.push(row2.insertCell(1));
    cellarray.push(row2.insertCell(2));
    cellarray.push(row2.insertCell(3));
    cellarray.push(row2.insertCell(4));

    for (let i = 0; i < cellarray.length; i++) {
        cellarray[i].appendChild(frontimage.cloneNode(true));
        cellarray[i].appendChild(backimage.cloneNode(true));
        cellarray[i].ondblclick = function() {repickACard(0,this) };
        cellarray[i].onclick = function(){
            toggleSelection(this)
        }
    }

    chooseCards(all_cards)
}

function displayCards(cards){
    var table = document.getElementById("selectedCardTable");
    var row = table.rows[0];
    var row2 = table.rows[1];
    var cell1 = row.cells[0];
    var cell2 = row.cells[1];
    var cell3 = row.cells[2];
    var cell4 = row.cells[3];
    var cell5 = row.cells[4];
    var cell6 = row2.cells[0];
    var cell7 = row2.cells[1];
    var cell8 = row2.cells[2];
    var cell9 = row2.cells[3];
    var cell10 = row2.cells[4];

    setCardImage(cell1,cards[0])
    setCardImage(cell2,cards[1])
    setCardImage(cell3,cards[2])
    setCardImage(cell4,cards[3])
    setCardImage(cell5,cards[4])
    setCardImage(cell6,cards[5])
    setCardImage(cell7,cards[6])
    setCardImage(cell8,cards[7])
    setCardImage(cell9,cards[8])
    setCardImage(cell10,cards[9])


}

function displayEvents(cards){

    var table = document.getElementById("eventsTable");
    var row = table.rows[0];
    var cell1 = row.cells[0];
    var cell2 = row.cells[1];
    if (cards.length>=1){
        setEventImage(cell1,cards[0]);
    }else
        cell1.style.display="none"
    if (cards.length>=2){
        setEventImage(cell2,cards[1]);
    }else
        cell1.style.displaye="none"
}
function selectEvents(eventslist,n){
    var events = [];
    var item
    var fevents=eventslist;
    var empty_event={"name":"", "set":"" ,"price":0,"type":[]}

    for (i = 0; i < n; i++){
       rand_i=Math.floor(Math.random()*eventslist.length);


        if (eventslist.length==0){
            item = empty_event;
        }else{
            item = eventslist[rand_i];
        }

       events.push(item);
       eventslist.splice(rand_i,1);
    }

    return events

}
function sortClicked(){
    if ($("div:animated").length>= 1){
        return
    }
    sortCardsByPrice(random_cards);
    displayCards(random_cards);

}

function chooseCards() {
    if ($("div:animated").length>= 1){
        return
    }
    if ($('.selected').length >= 1){
        repickCards()
    }else{
        filtered_cards=filterCardsBySet(all_cards)
        filtered_events=filterCardsBySet(all_events)
        if (!isEnoughCards(filtered_cards,10)){
            alert("Not enough cards with current restrictions")
            return
        }
        random_cards=getTenCards(filtered_cards)
        random_events=selectEvents(filtered_events,2)

        filtered_cards=filterPickedCards(filtered_cards,random_cards)
        find_cards=getAutoCompleteTagsFromCards(filtered_cards)

        updateAutocomplete()
        sortCardsByPrice(random_cards);
        displayCards(random_cards);
        displayEvents(random_events);
    }
}

function setEventImage(elem,card){
    /*
    elem.innerHTML="<img src=\"card_images/events/"+card.set+"/"+card.name+".jpg\" alt=\"\" ></img>"
    */
    let frontimage
    let backimage
    for (let i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].className == "frontimage") {
            frontimage = elem.childNodes[i];
            break;
        }
    }
    for (let i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].className == "backimage") {
            backimage = elem.childNodes[i];
            break;
        }
    }
    elem.onclick = function(){
        toggleSelection(this)
    }


    if (frontimage.childNodes[0].src==""){
        frontimage.childNodes[0].src="card_images/events/"+card.set+"/"+card.name+".jpg"
        frontimage.display="inline"
        backimage.style.display="none"
        return
    }




    var curHeight = $(frontimage.childNodes[0]).height();
    frontimage.childNodes[0].onload=function() {
        $(frontimage).animate({height:curHeight},400, function(){
            backimage.style.display="none"
            $(frontimage).css('height','auto');

        });


        $(backimage).animate({height:0},400, function(){
            backimage.style.display="none"

        });
    };



    backimage.style.display="block"
    $(backimage).animate({height:curHeight},400, function(){

    });
    $(frontimage).animate({height:0},400, function(){
        if (card.set==""){

        }else{
            frontimage.childNodes[0].src="card_images/events/"+card.set+"/"+card.name+".jpg"
        }
        //first animation finished
        //
    });




}
function setCardImage(elem,card){
    let frontimage
    let backimage
    for (let i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].className == "frontimage") {
            frontimage = elem.childNodes[i];
            break;
        }
    }
    for (let i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].className == "backimage") {
            backimage = elem.childNodes[i];
            break;
        }
    }



    if (frontimage.childNodes[0].src==""){
        frontimage.childNodes[0].src="card_images/"+card.set+"/"+card.name+".jpg"
        frontimage.display="inline"
        backimage.style.display="none"
        return
    }


    var curHeight = $(frontimage.childNodes[0]).height();
    frontimage.childNodes[0].onload=function() {
        $(frontimage).animate({height:curHeight},400, function(){
            backimage.style.display="none"
            $(frontimage).css('height','auto');

        });


        $(backimage).animate({height:0},400, function(){
            backimage.style.display="none"

        });
    };



    backimage.style.display="block"
    $(backimage).animate({height:curHeight},400, function(){

    });
    $(frontimage).animate({height:0},400, function(){

        frontimage.childNodes[0].src="card_images/"+card.set+"/"+card.name+".jpg"
        //first animation finished
        //
    });




    //frontimage.style.display="none"

    //
    //frontimage.style.display="none"


        //toggleSelection(this)
}
function clearTable(table){
    while (table.rows.length>0){
        table.deleteRow(0);
    }
}

function toggleSelection(elem){
   if (elem.className=="selected"){
        elem.className="";
    }else{
        elem.className="selected";
    }
    if ($('.selected').length >= 1){
        $('#choose').text("Repick")
    }else{
        $('#choose').text("Randomize all")
    }
    updateAutocomplete();
    if ($('.selected').length == 1){
        enableSingleCardSelection(true)
    }else{
        enableSingleCardSelection(false)
    }
}

function enableSingleCardSelection(enabled){
    if (enabled){
        $('#findcard').prop('disabled', false);
        $('#findcard').val('')
    }else{
        $('#findcard').prop('disabled', true);
        $('#findcard').val('Select only one card')

    }

}

function toggleSetDisplay(){
   $("#sets").toggle(function(){
        $(this).animate({height:0},200);
    },function(){
        $(this).animate({height:"auto"},200);
        $("#setcaret").toggleClass("caret-reversed");
    });
}

function togglePriceDisplay(){
    $("#prices").toggle(function(){
        $(this).animate({height:0},200);
    },function(){
        $(this).animate({height:"auto"},200);
        $("#filtercaret").toggleClass("caret-reversed");
    });
}
function toggleFindDisplay(){
    $("#findcarddiv").toggle(function(){
        $(this).animate({height:0},200);
    },function(){
        $(this).animate({height:"auto"},200);
        $("#findcaret").toggleClass("caret-reversed");
    });
}
