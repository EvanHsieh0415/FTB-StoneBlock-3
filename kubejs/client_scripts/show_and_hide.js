// priority: 0
onEvent("rei.hide.items", (event) => {
  const hide = [
    "create:incomplete_precision_mechanism",
    "create:incomplete_cogwheel",
    "create:incomplete_large_cogwheel",
    "create:incomplete_track",
    "create:schematic",
    "create:minecart_contraption",
    "create:furnace_minecart_contraption",
    "create:chest_minecart_contraption",
    /itemfilters.*/,
    // /.*spawn_egg/,
    /chickens:colored_egg/,
    "kubejs:dummy_fluid_item",
    "minecraft:knowledge_book",
    "minecraft:light",
    "minecraft:command_block",
    "minecraft:repeating_command_block",
    "minecraft:chain_command_block",
    "minecraft:structure_void",
    "minecraft:structure_block",
    "minecraft:jigsaw",
    "minecraft:debug_stick",
    "minecraft:barrier",
    "minecraft:command_block_minecart",
    "create:copper_backtank_placeable",
    "create:creative_blaze_cake",
    "create:creative_motor",
    "create:creative_fluid_tank",
    "create:creative_crate",
    "create:handheld_worldshaper",
    "createaddition:creative_energy",
    "titanium:block_test",
    "titanium:block_twenty_four_test",
    "titanium:block_asset_test",
    "titanium:machine_test",
    "titanium:creative_generator",
    "ftbquests:stage_barrier",
    "ftbquests:barrier",
    "ftbquests:custom_icon",
    "ftbquests:missing_item",
    "industrialforegoing:transporter",
    "createaddition:diamond_grit",
    "immersiveengineering:deepslate_ore_lead",
    "immersiveengineering:deepslate_ore_nickel",
    "immersiveengineering:deepslate_ore_silver",
    "immersiveengineering:deepslate_ore_uranium",
    "immersiveengineering:dust_constantan",
    "immersiveengineering:dust_electrum",
    "immersiveengineering:dust_gold",
    "immersiveengineering:dust_iron",
    "immersiveengineering:dust_lead",
    "immersiveengineering:dust_nickel",
    "immersiveengineering:dust_silver",
    "thermal:steel_dust",
    "immersiveengineering:dust_uranium",
    "immersiveengineering:ingot_constantan",
    "immersiveengineering:ingot_electrum",
    "immersiveengineering:ingot_lead",
    "immersiveengineering:ingot_nickel",
    "immersiveengineering:ingot_silver",
    "thermal:steel_ingot",
    "immersiveengineering:ingot_uranium",
    "immersiveengineering:nugget_constantan",
    "immersiveengineering:nugget_electrum",
    "immersiveengineering:nugget_lead",
    "immersiveengineering:nugget_nickel",
    "immersiveengineering:nugget_silver",
    "thermal:steel_nugget",
    "immersiveengineering:nugget_uranium",
    "immersiveengineering:ore_lead",
    "immersiveengineering:ore_nickel",
    "immersiveengineering:ore_silver",
    "immersiveengineering:ore_uranium",
    "immersiveengineering:plate_constantan",
    "immersiveengineering:plate_electrum",
    "immersiveengineering:plate_gold",
    "immersiveengineering:plate_iron",
    "immersiveengineering:plate_lead",
    "immersiveengineering:plate_nickel",
    "immersiveengineering:plate_silver",
    "thermal:steel_plate",
    "immersiveengineering:raw_block_lead",
    "immersiveengineering:raw_block_nickel",
    "immersiveengineering:raw_block_silver",
    "immersiveengineering:raw_block_uranium",
    "immersiveengineering:raw_lead",
    "immersiveengineering:raw_nickel",
    "immersiveengineering:raw_silver",
    "immersiveengineering:raw_uranium",
    "immersiveengineering:stick_iron",
    "immersiveengineering:storage_constantan",
    "immersiveengineering:storage_electrum",
    "immersiveengineering:storage_lead",
    "immersiveengineering:storage_nickel",
    "immersiveengineering:storage_silver",
    "thermal:steel_block",
    "immersiveengineering:storage_uranium",
    "industrialforegoing:diamond_gear",
    "mekanism:block_bronze",
    "mekanism:block_lead",
    "mekanism:block_raw_lead",
    "mekanism:block_raw_tin",
    "mekanism:block_steel",
    "mekanism:block_tin",
    "mekanism:deepslate_lead_ore",
    "mekanism:deepslate_tin_ore",
    "mekanism:dust_bronze",
    "mekanism:dust_copper",
    "mekanism:dust_diamond",
    "mekanism:dust_emerald",
    "mekanism:dust_lead",
    "mekanism:dust_netherite",
    "mekanism:dust_quartz",
    "mekanism:dust_steel",
    "mekanism:dust_tin",
    "mekanism:ingot_bronze",
    "mekanism:ingot_lead",
    "mekanism:ingot_steel",
    "mekanism:ingot_tin",
    "mekanism:lead_ore",
    "mekanism:nugget_bronze",
    "mekanism:nugget_lead",
    "mekanism:nugget_steel",
    "mekanism:nugget_tin",
    "mekanism:raw_lead",
    "mekanism:raw_tin",
    "mekanism:tin_ore",
    "tconstruct:copper_nugget",
    "thermal:copper_nugget",
    "thermal:copper_plate",
    "thermal:gold_dust",
    "thermal:gold_gear",
    "thermal:gold_plate",
    "thermal:iron_dust",
    "thermal:iron_gear",
    "thermal:iron_plate",
    "thermal:rose_gold_block",
    "thermal:rose_gold_ingot",
    "thermal:rose_gold_nugget",
    "immersiveengineering:wire_copper",
    "immersiveengineering:nugget_copper",
    "immersiveengineering:plate_copper",
    "immersiveengineering:dust_copper",
    "ae2:matrix_frame",
    "ae2:paint",
    "ae2:cable_bus",
    "ae2:wrapped_generic_stack",
    "refinedstorage:silicon",
    "thermal:ender_pearl_dust",
    "mekanism:sawdust",
    "immersiveengineering:dust_wood",
    "immersiveengineering:sawdust",
    "refinedstorage:creative_portable_grid",
    "refinedstorage:creative_wireless_grid",
    "refinedstorage:creative_wireless_fluid_grid",
    "refinedstorage:creative_wireless_crafting_monitor",
    "refinedstorageaddons:creative_wireless_crafting_grid",
    "mekanism:bounding_block",
    /mekanism:creative_fluid_tank.*/,
    /mekanism:creative_chemical_tank.*/,
    "powah:solar_panel_starter",
    "powah:solar_panel_basic",
    "powah:solar_panel_hardened",
    "powah:solar_panel_blazing",
    "powah:solar_panel_niotic",
    "powah:solar_panel_spirited",
    "powah:solar_panel_nitro",
    "mekanismgenerators:solar_panel",
    "mekanismgenerators:module_solar_recharging_unit",
    "mekanismgenerators:solar_generator",
    "mekanismgenerators:advanced_solar_generator",
    "mekanism:solar_neutron_activator",
    "thermal:charcoal_block",
    "thermal:sulfur_dust",
    "immersiveengineering:dust_sulfur",
    "create:powdered_obsidian",
    "immersiveengineering:coke",
    "immersiveengineering:slab_coke",
    "immersiveengineering:coal_coke",
    "thermal:creosote_bucket",
    /thermal:.*_coin/,
    "thermal:dynamo_numismatic",
    "tconstruct:netherite_nugget",
    "thermal:ruby_ore",
    "thermal:deepslate_ruby_ore",
    "thermal:ruby_block",
    "thermal:ruby",
    "thermal:ruby_dust",
    "thermal:ruby_gear",
    "thermal:sapphire",
    "thermal:sapphire_ore",
    "thermal:deepslate_sapphire_ore",
    "thermal:sapphire_block",
    "bloodmagic:dungeon_tester",
    "ars_nouveau:debug",
    "ars_nouveau:light_block",
    "ars_nouveau:portal",
    "ars_nouveau:rune",
    "rftoolsbase:dimensionalshard_nether",
    "rftoolsbase:dimensionalshard_end",
    "thermal:potato_block",
    "thermal:beetroot_block",
    "create:crushed_quicksilver_ore",
    "create:crushed_platinum_ore",
    "bloodmagic:ironsand",
    "bloodmagic:goldsand",
    "bloodmagic:coppersand",
    "bloodmagic:coalsand",
    "tconstruct:budding_ender_slime_crystal",
    "tconstruct:ender_slime_crystal_cluster",
    "tconstruct:small_ender_slime_crystal_bud",
    "tconstruct:medium_ender_slime_crystal_bud",
    "tconstruct:large_ender_slime_crystal_bud",
    "tconstruct:budding_earth_slime_crystal",
    "tconstruct:earth_slime_crystal_cluster",
    "tconstruct:small_earth_slime_crystal_bud",
    "tconstruct:medium_earth_slime_crystal_bud",
    "tconstruct:large_earth_slime_crystal_bud",
    "tconstruct:budding_sky_slime_crystal",
    "tconstruct:sky_slime_crystal_cluster",
    "tconstruct:small_sky_slime_crystal_bud",
    "tconstruct:medium_sky_slime_crystal_bud",
    "tconstruct:large_sky_slime_crystal_bud",
    "tconstruct:budding_ichor_slime_crystal",
    "tconstruct:ichor_slime_crystal_cluster",
    "tconstruct:small_ichor_slime_crystal_bud",
    "tconstruct:medium_ichor_slime_crystal_bud",
    "tconstruct:large_ichor_slime_crystal_bud",
    "ftbstoneblock:incomplete_watch",
    "ftbstoneblock:incomplete_raw_basic_processor",
    "ftbstoneblock:incomplete_raw_improved_processor",
    "ftbstoneblock:incomplete_raw_advanced_processor",
    "extendedexchange:stone_table",
    "extendedexchange:final_star",
    "extendedexchange:final_star_shard",
    "extendedexchange:final_collector",
    "extendedexchange:final_relay",
    "extendedexchange:final_power_flower",
    "extendedexchange:final_compressed_collector",
    "avaritia:iron_singularity",
    "avaritia:gold_singularity",
    "avaritia:copper_singularity",
    "avaritia:lapis_singularity",
    "avaritia:redstone_singularity",
    "avaritia:quartz_singularity",
    "avaritia:tin_singularity",
    "avaritia:lead_singularity",
    "avaritia:silver_singularity",
    "avaritia:nickel_singularity",
    "avaritia:diamond_singularity",
    "avaritia:emerald_singularity",
    "avaritia:fluxed_singularity",
    "avaritia:platinum_singularity",
    "avaritia:iridium_singularity",
    "avaritia:netherite_singularity",
    "avaritia:amethyst_singularity",
    "gag:escape_rope",
    "gag:sacred_salt",
    "gag:sacred_salve",
    "gag:sacred_balm",
    "chancecubes:giant_chance_cube",
    "mcjtylib:multipart",
    "mininggadgets:minerslight",
    "bloodmagic:spectral",
    "bloodmagic:inversion_pillar_cap",
    "ae2:facade",
    "engineersdecor:small_solar_panel",
    "mekanismgenerators:wind_generator",
    "immersiveengineering:windmill",
    "immersiveengineering:windmill_blade",
    "immersiveengineering:windmill_sail",
    "immersiveengineering:bannerpattern_windmill",
    "powah:energy_cell_creative",
    "chancecubes:creative_pendant",
    "refinedstorage:creative_storage_disk",
    "refinedstorage:creative_fluid_storage_disk",
    "refinedstorage:creative_storage_block",
    "refinedstorage:creative_fluid_storage_block",
    "refinedstorage:creative_controller",
    /refinedstorage:.*_creative_controller/,
    "botania:creative_pool",
    "botania:infrangible_platform",
    "botania:lens_storm",
    "botania:corporea_spark_creative",
    "mekanism:creative_bin",
    Item.of("mekanism:creative_energy_cube").ignoreNBT(),
    "immersiveengineering:capacitor_creative",
    "buildinggadgets:construction_paste_container_creative",
    "thermal:rf_coil_creative_augment",
    "thermal:fluid_tank_creative_augment",
    "thermal:machine_efficiency_creative_augment",
    "thermal:machine_catalyst_creative_augment",
    "ars_nouveau:creative_spell_book",
    "ars_nouveau:creative_source_jar",
    "rftoolspower:dimensionalcell_creative",
    "bloodmagic:activationcrystalcreative",
    Item.of("tconstruct:creative_slot").ignoreNBT(),
    "rftoolsutility:creative_screen",
    "ae2:creative_energy_cell",
    "ae2:creative_item_cell",
    "ae2:creative_fluid_cell",
    "functionalstorage:creative_vending_upgrade",
    "appmek:creative_chemical_cell",
    "ftbstoneblock:millstone_dummy_block",
    "ironfurnaces:allthemodium_furnace",
    "ironfurnaces:vibranium_furnace",
    "ironfurnaces:unobtainium_furnace",
    "ironfurnaces:upgrade_allthemodium",
    "ironfurnaces:upgrade_vibranium",
    "ironfurnaces:upgrade_unobtainium",
    "thermal:device_hive_extractor",
    "ftbstoneblock:incomplete_printed_logic_processor",
    "ftbstoneblock:incomplete_printed_calculation_processor",
    "ftbstoneblock:incomplete_printed_engineering_processor",
    "tcintegrations:bronze_block",
    "tcintegrations:bronze_ingot",
    "tcintegrations:bronze_nugget",
  ];

  // hides items without disabling their recipes from showing in REI
  const hideNoFilter = ["ae2:inscriber", "ae2things:advanced_inscriber"];

  hide.forEach((id) => {
    event.hide(id);
  });

  hideNoFilter.forEach((id) => {
    event.hideNoFilter(id);
  });
});
