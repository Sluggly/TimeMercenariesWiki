/**
 * This file contains all the data for the mercenaries to be displayed on the wiki.
 * Each mercenary object has the following structure:
 * {
 *   name: "Mercenary Name",
 *   image: "path/to/portrait.png",
 *   description: "A short bio of the mercenary.",
 *   artifacts: [
 *     { name: "Artifact Name 1", gif: "path/to/artifact1.gif" },
 *     { name: "Artifact Name 2", gif: "path/to/artifact2.gif" }
 *   ],
 *   rewards: {
 *     common: ["item_id_1", "item_id_2", ...],
 *     uncommon: [...],
 *     rare: [...],
 *     epic: [...],
 *     legendary: [...]
 *   },
 *   isSpecial: boolean (optional flag for unique cases like Chaos)
 * }
 */

const WIKI_MERCENARIES = [
    {
        name: "Baelog",
        image: "images/portraits/summoner.png",
        description: "A towering, crimson-horned figure cloaked in shadows and fire, Summoner Baelog is part man, part demon. His molten-red eyes pierce through dimensions, and his voice rumbles like an open gate to the Nether. Unlike other mercenaries who ferry items, Baelog commands forbidden rituals to summon entire living beings through rift portals he tears open in space.",
        artifacts: [
            { name: "Chains of Supremacy", gif: "images/gifs/chains_of_supremacy.gif" },
            { name: "Rift in a Bottle", gif: "images/gifs/rift_in_a_bottle.gif" }
        ],
        rewards: {
            common: ["minecraft:bat_spawn_egg", "minecraft:bee_spawn_egg", "minecraft:chicken_spawn_egg", "minecraft:cod_spawn_egg", "minecraft:cow_spawn_egg", "minecraft:creeper_spawn_egg", "minecraft:pig_spawn_egg", "minecraft:rabbit_spawn_egg", "minecraft:salmon_spawn_egg", "minecraft:sheep_spawn_egg", "minecraft:skeleton_spawn_egg", "minecraft:spider_spawn_egg", "minecraft:squid_spawn_egg", "minecraft:tropical_fish_spawn_egg", "minecraft:witch_spawn_egg", "minecraft:wolf_spawn_egg", "minecraft:zombie_spawn_egg"],
            uncommon: ["minecraft:blaze_spawn_egg", "minecraft:cave_spider_spawn_egg", "minecraft:donkey_spawn_egg", "minecraft:glow_squid_spawn_egg", "minecraft:husk_spawn_egg", "minecraft:iron_golem_spawn_egg", "minecraft:magma_cube_spawn_egg", "minecraft:ocelot_spawn_egg", "minecraft:piglin_spawn_egg", "minecraft:silverfish_spawn_egg", "minecraft:slime_spawn_egg", "minecraft:stray_spawn_egg", "minecraft:strider_spawn_egg", "minecraft:turtle_spawn_egg", "minecraft:zombie_horse_spawn_egg"],
            rare: ["minecraft:allay_spawn_egg", "minecraft:camel_spawn_egg", "minecraft:cat_spawn_egg", "minecraft:dolphin_spawn_egg", "minecraft:enderman_spawn_egg", "minecraft:endermite_spawn_egg", "minecraft:fox_spawn_egg", "minecraft:ghast_spawn_egg", "minecraft:goat_spawn_egg", "minecraft:guardian_spawn_egg", "minecraft:hoglin_spawn_egg", "minecraft:illusioner_spawn_egg", "minecraft:llama_spawn_egg", "minecraft:parrot_spawn_egg", "minecraft:phantom_spawn_egg", "minecraft:pillager_spawn_egg", "minecraft:polar_bear_spawn_egg", "minecraft:villager_spawn_egg", "minecraft:wither_skeleton_spawn_egg", "minecraft:zombie_villager_spawn_egg"],
            epic: ["minecraft:axolotl_spawn_egg", "minecraft:evoker_spawn_egg", "minecraft:mooshroom_spawn_egg", "minecraft:ravager_spawn_egg", "minecraft:shulker_spawn_egg", "minecraft:skeleton_horse_spawn_egg", "minecraft:sniffer_spawn_egg"],
            legendary: ["timemercenaries:chains_of_supremacy", "timemercenaries:rift_in_a_bottle", "minecraft:rabbit_spawn_egg", "minecraft:elder_guardian_spawn_egg", "minecraft:ender_dragon_spawn_egg", "minecraft:warden_spawn_egg", "minecraft:wither_spawn_egg"]
        }
    },
    {
        name: "Brock",
        image: "images/portraits/cave_dweller.png",
        description: "Encounter Brock, a mysterious creature lurking in the depths of caverns, shrouded in silence. Although communication with Brock remains elusive, it appears inclined to barter the abundant rocks strewn in its domain.",
        artifacts: [
            { name: "Heart of the Mountain", gif: "images/gifs/heart_of_the_mountain.gif" },
            { name: "Primordial Growth Moss", gif: "images/gifs/primordial_growth_moss.gif" }
        ],
        rewards: {
            common: ["minecraft:coal", "minecraft:stone_pickaxe", "minecraft:torch", "minecraft:wooden_pickaxe"],
            uncommon: ["minecraft:activator_rail", "minecraft:detector_rail", "minecraft:powered_rail", "minecraft:raw_copper", "minecraft:raw_gold", "minecraft:raw_iron"],
            rare: ["minecraft:copper_ore", "minecraft:gold_ore", "minecraft:iron_ore", "minecraft:lapis_lazuli", "minecraft:redstone"],
            epic: ["minecraft:amethyst_shard", "minecraft:diamond", "minecraft:emerald", "minecraft:lapis_ore", "minecraft:redstone_ore", "minecraft:echo_shard", "minecraft:sculk_sensor"],
            legendary: ["timemercenaries:heart_of_the_mountain", "timemercenaries:primordial_growth_moss", "minecraft:amethyst_cluster", "minecraft:diamond_ore", "minecraft:emerald_ore", "minecraft:sculk_shrieker"]
        }
    },
    {
        name: "Chaos",
        image: "images/portraits/chaotic_being.png",
        description: "Chaos is an ethereal entity from a realm where entropy reigns supreme. It embodies the very essence of disorder, constantly changing and evolving in unpredictable ways. Its missions are drawn from the pools of all other mercenaries.",
        artifacts: [
            { name: "Thunder in a Bottle", gif: "images/gifs/thunder_in_a_bottle.gif" },
            { name: "Dice of Infinite Possibilities", gif: "images/gifs/dice_of_infinite_possibilities.gif" }
        ],
        rewards: {},
        isSpecial: true,
        specialText: "Chaos can reward any item from any other mercenary's mission pool."
    },
    {
        name: "Grizzle",
        image: "images/portraits/potion_master.png",
        description: "Grizzle concocts potions and explosives from different liquids and fungi. His workshop is littered with potion-stained scrolls and dusty bottles, each filled with a concoction more dangerous than the last.",
        artifacts: [
            { name: "Grizzle's Delirium Concoction", gif: "images/gifs/delirium_concoction.gif" },
            { name: "Volatile Concoction Casing", gif: "images/gifs/volatile_concoction_casing.gif" }
        ],
        rewards: {
            common: ["minecraft:potion", "minecraft:splash_potion"], // Using generic potion for simplicity
            uncommon: ["minecraft:potion", "minecraft:splash_potion"],
            rare: ["minecraft:potion", "minecraft:splash_potion"],
            epic: ["minecraft:splash_potion"],
            legendary: ["timemercenaries:delirium_concoction", "timemercenaries:volatile_concoction_casing", "minecraft:lingering_potion"]
        }
    },
    {
        name: "Harisson",
        image: "images/portraits/archaeologist.png",
        description: "Harrison is a distinguished archaeologist whose faithful companion, a chicken, accompanies him on his expeditions. Delving into dig sites, Harrison unearths the remnants of bygone warriors and long-extinct creatures.",
        artifacts: [
            { name: "Sword of Chickening", gif: "images/gifs/sword_of_chickening.gif" },
            { name: "Helm of the First Explorer", gif: "images/gifs/helm_of_the_first_explorer.gif" }
        ],
        rewards: {
            common: ["minecraft:arrow", "minecraft:bone", "minecraft:stone_axe", "minecraft:stone_hoe", "minecraft:stone_pickaxe", "minecraft:stone_shovel", "minecraft:stone_sword", "minecraft:wooden_axe", "minecraft:wooden_hoe", "minecraft:wooden_pickaxe", "minecraft:wooden_shovel", "minecraft:wooden_sword"],
            uncommon: ["minecraft:candle", "minecraft:egg", "minecraft:shield", "minecraft:spectral_arrow"],
            rare: ["minecraft:creeper_head", "minecraft:crossbow", "minecraft:ender_pearl", "minecraft:piglin_head", "minecraft:skeleton_skull"],
            epic: ["minecraft:ender_eye", "minecraft:sniffer_egg", "minecraft:turtle_egg", "minecraft:wither_skeleton_skull"],
            legendary: ["timemercenaries:sword_of_chickening", "timemercenaries:helm_of_the_first_explorer", "minecraft:dragon_egg", "minecraft:dragon_head", "minecraft:player_head"]
        }
    },
    {
        name: "Liquarius",
        image: "images/portraits/ocean_diver.png",
        description: "Liquarius, an enigmatic being of unknown aquatic origins who dwells beneath the waves. He embarks on missions in search of knowledge about the world beyond the ocean's embrace.",
        artifacts: [
            { name: "Ocean Soul", gif: "images/gifs/ocean_soul.gif" },
            { name: "Hydro-Gem of Evergrowth", gif: "images/gifs/hydro_gem_of_evergrowth.gif" }
        ],
        rewards: {
            common: ["minecraft:cod", "minecraft:salmon", "minecraft:tropical_fish", "minecraft:pufferfish", "minecraft:kelp", "minecraft:seagrass", "minecraft:sea_pickle", "minecraft:water_bucket"],
            uncommon: ["minecraft:brain_coral", "minecraft:bubble_coral", "minecraft:fire_coral", "minecraft:horn_coral", "minecraft:tube_coral", "minecraft:dead_brain_coral", "minecraft:dead_bubble_coral", "minecraft:dead_fire_coral", "minecraft:dead_horn_coral", "minecraft:dead_tube_coral"],
            rare: ["minecraft:cod_bucket", "minecraft:salmon_bucket", "minecraft:tropical_fish_bucket", "minecraft:lily_pad", "minecraft:sponge"],
            epic: ["minecraft:nautilus_shell", "minecraft:prismarine_crystals", "minecraft:prismarine_shard", "minecraft:trident"],
            legendary: ["timemercenaries:ocean_soul", "timemercenaries:hydro_gem_of_evergrowth", "minecraft:heart_of_the_sea"]
        }
    },
    {
        name: "Orion",
        image: "images/portraits/enchanter.png",
        description: "Orion is a seasoned enchanter-mage known across multiple dimensions for his unparalleled mastery of arcane arts. His curiosity about the universe's secrets drives him to uncover hidden arcane knowledge.",
        artifacts: [
            { name: "Constellar Staff", gif: "images/gifs/constellar_staff.gif" },
            { name: "Tome of Synthesis", gif: "images/gifs/tome_of_synthesis.gif" }
        ],
        rewards: {
            common: ["minecraft:enchanted_book"],
            uncommon: ["minecraft:enchanted_book"],
            rare: ["minecraft:enchanted_book"],
            epic: ["minecraft:enchanted_book"],
            legendary: ["timemercenaries:constellar_staff", "timemercenaries:tome_of_synthesis", "minecraft:enchanted_book"]
        }
    },
    {
        name: "Pirddiv",
        image: "images/portraits/dune_worm.png",
        description: "Pirddiv is a dune worm hailing from an alternate dimension. This unique creature processes an unusual diet of various rocks, converting them into never seen before material.",
        artifacts: [
            { name: "Rainbow Timecrystal", gif: "images/gifs/rainbow_timecrystal.gif" },
            { name: "Transmuter's Gizzard", gif: "images/gifs/transmuters_gizzard.gif" }
        ],
        rewards: {
            common: ["timemercenaries:timecrystal", "minecraft:cobblestone", "minecraft:diorite", "minecraft:granite", "minecraft:dirt", "minecraft:stone"],
            uncommon: ["timemercenaries:broken_module", "timemercenaries:green_timecrystal", "minecraft:clay", "minecraft:sand", "minecraft:sandstone", "minecraft:terracotta"],
            rare: ["timemercenaries:blue_timecrystal", "minecraft:basalt", "minecraft:blackstone", "minecraft:cobbled_deepslate", "minecraft:end_stone", "minecraft:mud"],
            epic: ["timemercenaries:broken_blue_module", "minecraft:calcite", "minecraft:deepslate", "minecraft:prismarine", "minecraft:tuff"],
            legendary: ["timemercenaries:broken_red_module", "timemercenaries:rainbow_timecrystal", "timemercenaries:transmuters_gizzard"]
        }
    },
    {
        name: "Sam",
        image: "images/portraits/nether_adventurer.png",
        description: "Meet Sam, a former Bastion guard who grew weary of the monotonous routine. His thirst for excitement leads him to seek out adversaries across every corner of the Nether collecting trophies along the way.",
        artifacts: [
            { name: "The Gilded Grudge", gif: "images/gifs/gilded_grudge.gif" },
            { name: "Brute's War Horn", gif: "images/gifs/brutes_war_horn.gif" }
        ],
        rewards: {
            common: ["minecraft:gold_nugget", "minecraft:netherrack", "minecraft:soul_sand", "minecraft:soul_soil", "minecraft:basalt", "minecraft:blackstone"],
            uncommon: ["minecraft:magma_cream", "minecraft:crimson_nylium", "minecraft:warped_nylium", "minecraft:obsidian", "minecraft:magma_block", "minecraft:lava_bucket"],
            rare: ["minecraft:blaze_rod", "minecraft:crying_obsidian", "minecraft:golden_sword", "minecraft:golden_axe", "minecraft:golden_helmet", "minecraft:golden_chestplate", "minecraft:golden_leggings", "minecraft:golden_boots", "minecraft:nether_wart"],
            epic: ["minecraft:ghast_tear", "minecraft:wither_skeleton_skull", "minecraft:piglin_head"],
            legendary: ["timemercenaries:gilded_grudge", "timemercenaries:brutes_war_horn", "minecraft:netherite_scrap", "minecraft:netherite_upgrade_smithing_template", "minecraft:nether_star", "minecraft:wither_rose"]
        }
    },
    {
        name: "Steve",
        image: "images/portraits/traveller.png",
        description: "Steve, a nomadic traveler, roams the Overworld with his trusty llamas. He's a keen collector, gathering specimens from the biomes he explores. When he stops by villages, he's always ready to trade.",
        artifacts: [
            { name: "Nomad's Walking Stick", gif: "images/gifs/walking_stick.gif" },
            { name: "Ever-full Feedbag", gif: "images/gifs/everfull_feedbag.gif" }
        ],
        rewards: {
            common: ["minecraft:dandelion", "minecraft:poppy", "minecraft:orange_tulip", "minecraft:pink_tulip", "minecraft:red_tulip", "minecraft:white_tulip", "minecraft:brown_mushroom", "minecraft:red_mushroom", "minecraft:grass", "minecraft:campfire"],
            uncommon: ["minecraft:allium", "minecraft:azure_bluet", "minecraft:blue_orchid", "minecraft:cornflower", "minecraft:oxeye_daisy", "minecraft:dead_bush", "minecraft:fern"],
            rare: ["minecraft:lily_of_the_valley", "minecraft:sunflower", "minecraft:bamboo", "minecraft:vine", "minecraft:armor_stand"],
            epic: ["minecraft:bell", "minecraft:grass_block", "minecraft:mycelium", "minecraft:podzol", "minecraft:torchflower"],
            legendary: ["timemercenaries:walking_stick", "timemercenaries:everfull_feedbag", "minecraft:totem_of_undying"]
        }
    },
    {
        name: "Stroman",
        image: "images/portraits/end_explorer.png",
        description: "An intrepid explorer navigating the harsh realities of life in the End. In this unforgiving realm, survival hinges on resourcefulness. He is prepared to barter anything of value he uncovers.",
        artifacts: [
            { name: "Void-Woven Greaves", gif: "images/gifs/void_woven_greaves.gif" },
            { name: "Void-Woven Leggings", gif: "images/gifs/void_woven_leggings.gif" }
        ],
        rewards: {
            common: ["minecraft:ender_pearl", "minecraft:end_stone", "minecraft:end_stone_bricks", "minecraft:purpur_block"],
            uncommon: ["minecraft:experience_bottle", "minecraft:firework_rocket", "minecraft:obsidian"],
            rare: ["minecraft:chorus_flower", "minecraft:chorus_fruit", "minecraft:chorus_plant", "minecraft:shulker_shell"],
            epic: ["minecraft:dragon_breath", "minecraft:end_crystal", "minecraft:shulker_box"],
            legendary: ["timemercenaries:void_woven_greaves", "timemercenaries:void_woven_leggings", "minecraft:dragon_egg", "minecraft:dragon_head", "minecraft:elytra"]
        }
    },
    {
        name: "Zu'jin",
        image: "images/portraits/farlands_inhabitant.png",
        description: "Venture into the remote Farlands and meet Zu'jin, a formidable troll who leads his tribe in the wilds. Renowned as skilled hunters, they eagerly offer the spoils of their hunts for the gleaming tools that captivate their curiosity.",
        artifacts: [
            { name: "Primal Hunting Spear", gif: "images/gifs/primal_hunting_spear.gif" },
            { name: "Talisman of the Wilds", gif: "images/gifs/talisman_of_the_wilds.gif" }
        ],
        rewards: {
            common: ["minecraft:bone", "minecraft:rotten_flesh", "minecraft:feather", "minecraft:clay", "minecraft:dirt", "minecraft:sand", "minecraft:snowball"],
            uncommon: ["minecraft:gunpowder", "minecraft:leather", "minecraft:spider_eye", "minecraft:black_wool", "minecraft:white_wool", "minecraft:cooked_beef", "minecraft:cooked_chicken", "minecraft:cooked_mutton", "minecraft:cooked_porkchop", "minecraft:cooked_rabbit"],
            rare: ["minecraft:ender_pearl", "minecraft:rabbit_hide", "minecraft:sweet_berries", "minecraft:cooked_cod", "minecraft:cooked_salmon"],
            epic: ["minecraft:rabbit_foot", "minecraft:scute", "minecraft:slime_ball"],
            legendary: ["timemercenaries:primal_hunting_spear", "timemercenaries:talisman_of_the_wilds", "minecraft:name_tag"]
        }
    },
    {
        name: "Vael",
        image: "images/portraits/ethereal_caravaneer.png",
        description: "Vael’s most distinctive feature is the mystical pouch he carries which is rumored to be a miniature realm of its own, capable of holding an infinite array of items. He does not go on missions, but offers his wares for Coins.",
        artifacts: [
            { name: "Cap of Commerce", gif: "images/gifs/cap_of_commerce.gif" },
            { name: "Guild-Bearer's Seal", gif: "images/gifs/guild_bearers_seal.gif" }
        ],
        rewards: {},
        isSpecial: true,
        specialText: "Vael is a shopkeeper. Leveling him up unlocks more items in his shop. He does not reward items from missions."
    }
];