function preloadImages(imageArray) {
    let loadedCount = 0;
    const totalImages = imageArray.length;
    const loader = document.querySelector('.loader');
    const loaded = document.querySelector('.loaded');

    imageArray.forEach((imageSrc) => {
        const img = new Image();
        img.src = `./img/${imageSrc}`;
        img.onload = () => {
            loadedCount++;
            loaded.style.width = `${loadedCount/totalImages * 100}%`;
            if (loadedCount === totalImages) {
                console.info('Todas las imágenes han sido precargadas.');
                setTimeout(() => {
                    loader.style.opacity = '0';
                }, 500);
            }
        };
    });
}

const imagesToPreload = [
    "AdvancedManeuvers.webp",
    "AdvancedManeuversNoBG.webp",
    "after-optimization.webp",
    "Ascend.webp",
    "AscendNoBG.webp",
    "BarrelRoll.webp",
    "BarrelRollNoBG.webp",
    "before-optimization.webp",
    "BerserkEnchantment.webp",
    "BerserkEnchantmentNoBG.webp",
    "BerserkMode.webp",
    "BerserkModeNoBG.webp",
    "boardbg.webp",
    "boardbg2.webp",
    "boardbg3.webp",
    "boardbg4.webp",
    "boardbg5.webp",
    "BreatheFire.webp",
    "BreatheFireNoBG.webp",
    "Camouflage.webp",
    "CamouflageNoBG.webp",
    "CombatSkills.webp",
    "CombatSkillsNoBG.webp",
    "DefensiveAbilities.webp",
    "DefensiveAbilitiesNoBG.webp",
    "Descend.webp",
    "DescendNoBG.webp",
    "DiveAttack.webp",
    "DiveAttackNoBG.webp",
    "DragonArmor.webp",
    "DragonArmorNoBG.webp",
    "DragonChronicles.webp",
    "DragonChroniclesNoBG.webp",
    "DragonFury.webp",
    "DragonFuryNoBG.webp",
    "DragonShield.webp",
    "DragonShieldNoBG.webp",
    "DragonTraining.webp",
    "DragonTrainingNoBG.webp",
    "EnchantedArmor.webp",
    "EnchantedArmorNoBG.webp",
    "EnchantedWeapons.webp",
    "EnchantedWeaponsNoBG.webp",
    "Equipment&Abilities.webp",
    "Equipment&AbilitiesNoBG.webp",
    "EtherealEnchantment.webp",
    "EtherealEnchantmentNoBG.webp",
    "EvasiveManeuvers.webp",
    "EvasiveManeuversNoBG.webp",
    "Fireball.webp",
    "FireballNoBG.webp",
    "FlameBurst.webp",
    "FlameBurstNoBG.webp",
    "Fly.webp",
    "FlyNoBG.webp",
    "HeavyArmor.webp",
    "HeavyArmorNoBG.webp",
    "holo.webp",
    "Hover.webp",
    "HoverNoBG.webp",
    "HunttheDragon.webp",
    "HunttheDragonNoBG.webp",
    "IceBreath.webp",
    "IceBreathNoBG.webp",
    "Inferno.webp",
    "InfernoNoBG.webp",
    "JC-LOGO-Horizontal-25.svg",
    "LifeDrainEnchantment.webp",
    "LifeDrainEnchantmentNoBG.webp",
    "LightArmor.webp",
    "LightArmorNoBG.webp",
    "LightningEnchantment.webp",
    "LightningEnchantmentNoBG.webp",
    "Logo.webp",
    "Logo100.webp",
    "logo200.webp",
    "Loop.webp",
    "LoopNoBG.webp",
    "OffensiveAbilities.webp",
    "OffensiveAbilitiesNoBG.webp",
    "PoisonEnchantment.webp",
    "PoisonEnchantmentNoBG.webp",
    "PrecisionDive.webp",
    "PrecisionDiveNoBG.webp",
    "s-dragon.webp",
    "SonicRoar.webp",
    "SonicRoarNoBG.webp",
    "sparkles.gif",
    "SpecialAttacks.webp",
    "SpecialAttacksNoBG.webp",
    "SwoopingStrike.webp",
    "SwoopingStrikeNoBG.webp",
    "TametheDragon.webp",
    "TametheDragonNoBG.webp",
    "ThunderStrike.webp",
    "ThunderStrikeNoBG.webp",
    "TripleFireballs.webp",
    "TripleFireballsNoBG.webp",
];

window.addEventListener('load', function () {
    preloadImages(imagesToPreload);
});