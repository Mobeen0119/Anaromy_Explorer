const info = document.querySelector(".info");
const nam = document.querySelector("#organ-name");
const data = document.querySelector("#organ-info");
const head = document.querySelector(".hotspot");
const fact = document.querySelector(".fact");
const button = document.querySelector(".normal");
fact.classList.add("hidden");
info.classList.add("hidden");
button.classList.add("hidden");
document.querySelector("#head").addEventListener("click", () => {
    head.classList.add("zoom");
    displayOrganInfo("Head");
});
document.querySelector("#Mouth").addEventListener("click", () => {
    displayOrganInfo("Mouth");
});
document.querySelector("#Hip").addEventListener("click", () => {
    displayOrganInfo("Hip");
});
document.querySelector("#neck").addEventListener("click", () => {
    displayOrganInfo("Neck");
});
document.querySelector("#right-hand").addEventListener("click", () => {
    displayOrganInfo("Hand");
});
document.querySelector("#left-hand").addEventListener("click", () => {
    displayOrganInfo("Hand");
});
document.querySelector("#ureter").addEventListener("click", () => {
    displayOrganInfo("ureter");
});
document.querySelector("#wrist").addEventListener("click", () => {
    displayOrganInfo("Wrist");
});

document.querySelector("#heart").addEventListener("click", () => {
    displayOrganInfo("heart");
});
document.querySelector("#lungs").addEventListener("click", () => {
    displayOrganInfo("lungs");
});
document.querySelector("#stomach").addEventListener("click", () => {
    displayOrganInfo("stomach");
});
document.querySelector("#liver").addEventListener("click", () => {
    displayOrganInfo("liver");
});
document.querySelector("#left-kidney").addEventListener("click", () => {
    displayOrganInfo("left-kidney");
});
document.querySelector("#right-kidney").addEventListener("click", () => {
    displayOrganInfo("right-kidney");
});
document.querySelector("#left-arm").addEventListener("click", () => {
    displayOrganInfo("left-arm");
});
document.querySelector("#right-arm").addEventListener("click", () => {
    displayOrganInfo("right-arm");
});
document.querySelector("#left-leg").addEventListener("click", () => {
    displayOrganInfo("left-leg");
});
document.querySelector("#Knee").addEventListener("click", () => {
    displayOrganInfo("Knee");
});
document.querySelector("#right-leg").addEventListener("click", () => {
    displayOrganInfo("right-leg");
});
document.querySelector("#left-foot").addEventListener("click", () => {
    displayOrganInfo("left-foot");
});
document.querySelector("#right-foot").addEventListener("click", () => {
    displayOrganInfo("right-foot");
});



document.querySelectorAll(".hotspot").forEach(item => {
    item.addEventListener('click', event => {
        const organId = event.target.id;
        console.log("Clicked on:", organId);
        const organ = organInfo[organId];
    })
});

const organInfo = {
    'Head': {
        name: 'Head',
        info: 'The head contains the brain, eyes, ears, nose, and mouth, which are essential for sensory perception and cognitive functions.'
    },
    'Mouth': {
        name: 'Mouth',
        info: 'The mouth is the entry point for food and air, containing structures such as the teeth, tongue, and salivary glands that aid in digestion and speech.'
    },
    'Neck': {
        name: 'Neck',
        info: 'The neck supports the head and allows for its movement. It also contains vital structures such as the trachea, esophagus, and major blood vessels.'
    },
    'heart': {
        name: 'Heart',
        info: 'The heart pumps blood throughout the body, supplying oxygen and nutrients to tissues and removing carbon dioxide and other wastes.'
    },
    'lungs': {
        name: 'Lungs',
        info: 'The lungs are responsible for gas exchange, allowing oxygen to enter the blood and carbon dioxide to be expelled from the body.'
    },
    'stomach': {
        name: 'Stomach',
        info: 'The stomach breaks down food using acids and enzymes, preparing it for digestion and nutrient absorption in the intestines.'
    },
    'liver': {
        name: 'Liver',
        info: 'The liver processes nutrients from food, detoxifies harmful substances, and produces bile to aid in digestion.'
    },
    'left-kidney': {
        name: 'Left Kidney',
        info: 'The kidneys filter waste products and excess substances from the blood, producing urine to maintain fluid and electrolyte balance.'
    },
    'right-kidney': {
        name: 'Right Kidney',
        info: 'The kidneys filter waste products and excess substances from the blood, producing urine to maintain fluid and electrolyte balance.'
    },
    'left-arm': {
        name: 'Left Arm',
        info: 'The left arm consists of bones, muscles, and joints that allow for a wide range of motion and dexterity.'
    },
    'right-arm': {
        name: 'Right Arm',
        info: 'The right arm consists of bones, muscles, and joints that allow for a wide range of motion and dexterity.'
    },
    'left-leg': {
        name: 'Left Leg',
        info: 'The left leg supports the body\'s weight and enables movement such as walking, running, and jumping.'
    },
    'Hand': {
        name: 'Hand',
        info: 'The hand is a complex structure made up of bones, muscles, and tendons that allow for precise movements and dexterity.'
    },
    'Wrist': {
        name: 'Wrist',
        info: 'The wrist is a complex joint that connects the hand to the forearm, allowing for a wide range of movements and flexibility.'
    },
    'ureter': {
        name: 'Ureter',
        info: 'The ureters are tubes that carry urine from the kidneys to the bladder for storage before excretion.'
    },
    'right-leg': {
        name: 'Right Leg',
        info: 'The right leg supports the body\'s weight and enables movement such as walking, running, and jumping.'
    },
    'Knee': {
        name: 'Knee',
        info: 'The knee is a complex joint that connects the thigh bone (femur) to the shin bone (tibia), allowing for movement and support of the body\'s weight.'
    },
    'left-foot': {
        name: 'Left Foot',
        info: 'The left foot provides balance and support for standing and movement.'
    },
    'Hip': {
        name: 'Hip',
        info: 'The hip joint connects the leg to the pelvis, allowing for a wide range of motion and supporting the weight of the body during activities such as walking and running.'
    },
    'right-foot': {
        name: 'Right Foot',
        info: 'The right foot provides balance and support for standing and movement.'
    }
};
const organ_facts = {
    'Head': 'The human head contains 22 bones that form the skull and face.',
    'Mouth': 'The mouth produces about 1 to 1.5 liters of saliva each day to aid in digestion.',
    'Neck': 'The neck contains seven cervical vertebrae that support the head and allow for its movement.',
    'heart': 'The heart beats around 100,000 times a day, pumping about 2,000 gallons of blood through the body.',
    'lungs': 'The lungs contain over 300 million alveoli, which are tiny air sacs where gas exchange occurs.',
    'stomach': 'The stomach can hold up to 1.5 liters of food and liquid at a time.',
    'liver': 'The liver is the largest internal organ and can regenerate itself even after significant damage.',
    'left-kidney': 'Each kidney contains about one million nephrons, which are the functional units that filter blood.',
    'right-kidney': 'Each kidney contains about one million nephrons, which are the functional units that filter blood.',
    'left-arm': 'The left arm has 30 bones, including the humerus, radius, ulna, and the bones of the hand.',
    'right-arm': 'The right arm has 30 bones, including the humerus, radius, ulna, and the bones of the hand.',
    'left-leg': 'The left leg has 30 bones, including the femur, tibia, fibula, and the bones of the foot.',
    'Hand': 'The human hand has 27 bones, allowing for a wide range of movements and dexterity.',
    'Wrist': 'The wrist is made up of eight small bones called carpals, which allow for its flexibility and movement.',
    'ureter': 'The ureters are about 25-30 centimeters long and use muscle contractions to move urine to the bladder.',
    'right-leg': 'The right leg has 30 bones, including the femur, tibia, fibula, and the bones of the foot.',
    'Knee': 'The knee is the largest joint in the human body and is made up of bones, cartilage, ligaments, and tendons.',
    'left-foot': 'The left foot has 26 bones, which make up about one-quarter of all the bones in the human body.',
    'Hip': 'The hip joint is one of the strongest joints in the body, capable of supporting the weight of the entire upper body.',
    'right-foot': 'The right foot has 26 bones, which make up about one-quarter of all the bones in the human body.'
};

function displayOrganInfo(organId) {
    const organ = organInfo[organId];
    if (organ) {
        fact.classList.remove("hidden");
        info.classList.remove("hidden");
        button.classList.remove("hidden");
        data.textContent = organ.info;
        const factText = organ_facts[organId];
        nam.textContent = organ.name;
        fact.querySelector("p").textContent = factText;
        document.querySelector(".diagram").classList.add("transition");
    } else {

        nam.textContent = 'Unknown Organ';
        data.textContent = 'No information available for this organ.';
    }
}
button.addEventListener("click", () => {
    fact.classList.add("hidden");
    info.classList.add("hidden");
    button.classList.add("hidden");
    document.querySelector(".diagram").classList.remove("transition");
});