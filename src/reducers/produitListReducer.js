import { v4 as uuidv4 } from "uuid";

let initState = [
  {
    title:
      "PC DE BUREAU GAMER RIDER / I3-10105F / GEFORCE GT 1030 2GH LP OC 2G / 8 GO ",
    price: "1 199,000",
    img: "https://www.tunisianet.com.tn/263279-large/pc-de-bureau-gamer-rider-i3-10105f-geforce-gt-1030-2gh-lp-oc-2g-8-go.jpg",
    id: uuidv4(),
    détails:
      "[RIDER-7]Boitier Gamer Xigmatek Aero 2F avec 2 ventilateurs RGB - Processeur Intel Core i3-10105F, 10ème Gén, up to 4.4 Ghz, 6 Mo de mémoire cache - RAM 8 Go TeamGroup Zeus DDR4 3200 Mhz - Disque 240 Go SSD PNY CX2 CS900 2.5 - Carte Graphique MSI GeForce GT 1030 2GH LP OC, 2 Go de mémoire dédiée - Carte mère MSI H510M-A PRO - Boite D'alimentation Xigmatek X-Power 400W / 80PLUS White - Garantie 1 an",
    counter: 0,
  },
  {
    title:
      "Pc De Bureau Gaming Special / I3-10105F / GTX 1050 Ti Twin X2 4G / 8 Go",
    price: "1 389,000",
    img: "https://www.tunisianet.com.tn/261644-home/pc-de-bureau-gaming-special-i3-10105f-gtx-1050-ti-twin-x2-4g-8-go.jpg",
    id: uuidv4(),
    détails:
      "Référence : SPECIAL-2-8Processeur intel Core i3-10105F, up to 4.4 GHz, 6 Mo de mémoire cache dédiée - Mémoire 8 Go TeamGroup DDR4 3200Mhz - Disque SSD 240 Go Intenso 2.5 - Carte Mère MSI H510M-A PRO - Carte Graphique Inno3D GeForce GTX 1050 Ti Twin X2, 4 Go de mémoire dédiée - Boitier Gamer Xigmatek Nyx 3F RGB - Boite d'alimentation Xigmatek X-Power 400W / 80PLUS White - Garantie 1 an",
    counter: 0,
  },
  // {
  //     title:"PC DE BUREAU GAMER EROS / I5 10400F / GTX 1050 TI TWIN X2 4G / 8 GO ",
  //     price:"1 599,000",
  //     img:"https://www.tunisianet.com.tn/244281-home/pc-de-bureau-gamer-eros-i5-10400f-gtx-1050-ti-twin-x2-4g-8-go.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Boitier Gamer Xigmatek Eros avec 1 ventilateur RGB - Processeur Intel Core i5-10400F, 10ème Gén, 2.9 Ghz up to 4.3 Ghz, 12 Mo de mémoire cache - RAM 8 Go TeamGroup Zeus DDR4 3200 Mhz - Disque SSD 240 Go Intenso 2.5 - Carte Graphique Inno3D GeForce GTX 1050 Ti Twin X2, 4 Go de mémoire dédiée - Carte mère ASRock H510M-HVS R2.0 - Boite D'alimentation Xigmatek X-Power 500W / 80PLUS White - Garantie 1 an",
  // },
  // {
  //     title:"PC De Bureau Gamer MSI MEG Infinite X 11th 11TD-1200TN / I7-11700KF / RTX 3070 8G / 32 Go / 2 To SSD",
  //     price:"7 399,000 ",
  //     img:"https://www.tunisianet.com.tn/263837-home/pc-de-bureau-gamer-msi-meg-infinite-x-11th-11td-1200tn-i7-11700kf-rtx-3070-8g-32-go-2-to-ssd.jpg",
  //     id: uuidv4(),
  //     détails:"[11TD-1200TN]Processeur Intel Core I7-11700KF, 11è Génération, Up To 5.0 GHz, 16 Mo De Mémoire Cache - Mémoire 32 Go - Disque SSD 2 To - Carte Graphique Nvidea GeForce RTX 3070, 8 Go De Mémoire Dédiée - Bluetooth 5.2 - Wifi 6 - USB 3.2 - USB 2.0 - HDMI - DisplayPort - RJ45 - Refroidissement Du Processeur Par Watercooling - Fonction Mystic Light Personnalisation Complète Des LED Du Boîtier - Windows 10 - Garantie 1 An",
  //     counter:0,
  // },
  // {
  //     title:"CLAVIER GAMING SEMI-MÉCANIQUE SPIRIT OF GAMER PRO-K7 RGB",
  //     price:"59,000 ",
  //     img:"https://www.tunisianet.com.tn/187258-large/clavier-gaming-semi-mecanique-spirit-of-gamer-pro-k7-rgb.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Clavier Gaming Semi-mécanique Spirit of Gamer Pro-K7 - Rétroéclairage RGB - 104 Touches Slim semi-mécanique membrane - 26 touches Anti-Ghosting - Touches dédiées : Molette multifonction 2 en 1 : Audio et Light + 3 Touches d'Accès direct - Touches Windows Désactivable - Excellente ergonomie - Matériaux: Métal anodisé / Plastique ABS - Dimensions : 440 x 135 x 35 mm - Poids 500g - Compatible Windows XP / Vista / 7 / 8 / 10 - Garantie 1 an            ",
  // },
  // {
  //     title:"Clavier Mécanique Rétroéclairé RGB Spirit Of Gamer Xpert-K300            ",
  //     price:"95,000",
  //     img:"https://www.tunisianet.com.tn/170772-home/clavier-mecanique-retroeclaire-rgb-spirit-of-gamer-xpert-k300.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Clavier Mécanique Pour Gamer - Switch Victory Blue Pur Un Temps De Réponse Ultra-Rapide - Distance D'actionnement: 2 Mm - Force D'activation: 44 G - Rétroéclairage RGB Personnalisable (20 Modes, 10 Profils, Luminosité Réglable) - Technologie Anti-Ghosting - Touche Windows Désactivable - 12 Raccourcis Multimédia - Câble: 1.80 Mètre - Dimensions: 438 X 130 X 34 Mm - Poids: 1 Kg - Garantit 1 An",
  // },
  // {
  //     title:"CLAVIER MÉCANIQUE GAMER REDRAGON FITZ K617 60 RÉTROÉCLAIRÉ RGB / RED SWITCH / NOIR            ",
  //     price:"99,000",
  //     img:"https://www.tunisianet.com.tn/257961-large/clavier-mecanique-gamer-redragon-fitz-k617-60-retroeclaire-rgb-red-switch.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Clavier Mécanique Gamer  Redragon FITZ K617 60 Rétroéclairé RGB - Red Switch - Câble détachable de type C - Rétro-éclairage RGB - Touches douces - Anti-éclaboussures - Conception optimisée de 61 touches - Installation Plug & Play - Garantie 1 an",
  // },
  // {
  //     title:"Clavier Mécanique Gaming Redragon KUMARA K552 RGB-1 / Blanc / Brown Switches",
  //     price:"99,000 ",
  //     img:"https://www.tunisianet.com.tn/261813-home/clavier-mecanique-gaming-redragon-kumara-k552-rgb-1-blanc-brown-switches.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Clavier Gamer Mécanique REDRAGON Kumara K552 - Brown Switches - Connectivité: Filaire - Interface: USB - Clavier mécanique AZERTY - commutateurs personnalisés (équivalent Cherry MX Blue) - 87 touches mécaniques - 12 touches de clavier multimédia - Un son de clic net et un retour tactile précis pour des performances de frappe et de jeu ultimes - 5 niveaux de luminosité du rétroéclairage vitesse de respiration réglable - Une conception ergonomique compacte et une construction en métal-ABS durable de haute qualité avec des touches et des interrupteurs mécaniques - Couleur: Blanc- Garantie: 1 an",
  // },
  // {
  //     title:"Souris Gamer MSI Clutch GM30 - Noir",
  //     price:"95,000",
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/f/e/fe12-ferrari---copie_290.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Souris Gamer MSI Clutch GM30 - Technologie de connectivité: Filaire - Interface: USB 2.0 -  Type de capteur: Optique  - Nombre de boutons: 6 - Résolution Optique: 6200 dpi - Capteur PAW-3327  - Taux d'interrogation: 100 Hz - Rétroéclairage LED RGB - Roulette Bidirectionnelle - Longueur du câble: 2 mètres - Dimensions: 35 x 62 x 128 mm - Couleur: Noir - Garantie: 1 an",

  // },
  // {
  //     title:"SOURIS GAMER WHITE SHARK ALEXANDER GM-1802 - NOIR            ",
  //     price:"89,000",
  //     counter:0,
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/h/j/hjn_k.jpg",
  //     id: uuidv4(),
  //     détails:"Souris Gamer WHITE SHARK ALEXANDER - Interface avec l'ordinateur: USB - Type de capteur: Optique - Nombre de boutons: 17 - Résolution: 10000 DPI - Taux d'interrogation (Hz): 1000 - Durée de vie: plus de 10 millions de clics - Longueur de câble: 1.5m Revetement en caoutchouc - Compatibilité: 98SE / 2000 , XP , Vista , 7/8/10 et Mac OS - Dimensions: 135 x 80 x 40 mm - Poids: 157 gr - Couleur: Noir",
  // } ,
  // {
  //     title:"SOURIS GAMER REDRAGON STORM M808",
  //     price:"89,000",
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/m/8/m808.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Souris Gamer REDRAGON Storm - Rétro-éclairé RGB - Technologie de connexion: Filaire - Type de souris: Optique - Résolution Optique: 100 à 12400 DPI - 20 millions de clics - Interface avec l'ordinateur: USB - Boutons programmables: 7 - 5 niveaux de DPI personnalisables - Longeur de Câble: 1.8 mètres - Conception ergonomique confortable - Dimension: 126,8 x 65,5 x 41 mm - Poids: 85g  - Couleur: Noir - Garantie: 1an ",
  // } ,
  // {
  //     title:"SOURIS GAMER ESHARK ESL-M2 - NOIR",
  //     price:"89,000",
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/e/r/erf4.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Souris Gamer ESHARK - Technologie de connectivité: Filaire - Type de capteur: Optique - Interface avec l'ordinateur: USB - Résolution Optique: 7000 dpi - Éclairage: RVB avec 16,8 millions de couleurs personnalisables - 7 boutons programmables - Taux d' interrogation: ultrapooling 1000Hz - Accélération: 20 G - Longueur du câble: 1.8m - Couleur: Noir - Garantie: 1 an",
  // } ,
  // {
  //     title:"Micro Casque Gamer FANTECH HG15 - Noir",
  //     price:"71,500",
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/d/f/dffv.jpg",
  //     id: uuidv4(),
  //     counter:0,
  //     détails:"Micro Casque Gamer FANTECH HG15 - Connectivité: Filaire - Interface: USB - Sensibilité: Casque (95dB +/- 3dB) / Micro (58dB +/- 3dB) - Micro Omnidirectionnel - Fréquence: 20-20 kHz - Impédance: 32 ohm - Longueur du câble: 2.5m - Dimensions: 215 x 190 x 110 mm - Poids: 780 g - Couleur: Noir ",
  // } ,
  // {
  //     title:"MICRO CASQUE GAMER SPIRIT OF GAMER PRO H7 RGB - NOIR",
  //     price:"69,000 ",
  //     counter:0,
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/4/_/4_1143.jpg",
  //     id: uuidv4(),
  //     détails:"Micro Casque Gamer SPIRIT OF GAMER Pro H7 - Connectivité: Filaire - Diamètre de Haut-parleur: 40 mm - Réponse en fréquence: 20 Hz à 20KHz - Sensibilité Micro: 110 dB  - Impédance Casque: 16 Ω - Rétroéclairage RGB - Coussinets en similicuir pour un meilleur confort - Son stéréo 2.0 haute fidélité - Microphone flexible à réduction de bruit - Télécommande intégré sur le fil Plug & Play - Longueur de câble: 2 métres - Compatible avec console nintendo switch, playstation, Xbox et pc - Interface: Jack 3.5 mm - Couleur: Noir - Garantie: 1 an",
  // } ,
  // {
  //     title:"MICRO CASQUE GAMER AULA COLD FLAME - NOIR (0023506)",
  //     price:"69,000",
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/0/0/0023506.jpg",
  //     id: uuidv4(),
  //     counter:111,
  //     détails:"Micro Casque Gamer AULA Cold Flame - Connectivité: Filaire - Impédance: 32 ohms - Fréquence en réponse: 20 Hz ~ 20 KHz -Sensibilité: 117 dB - Coussins Rembourrés & confortables - Matériaux: Plastique, simili-cuir et câble tressé - Longueur du câble principal: 210 cm - Plateformes supportées: XBOX, PS4, Pc - Interface: jack 3,5 mm et USB, Rallonge Double Jack plaqué or - Microphone intégré - Couleur: Noir - Garantie: 1 an",
  // } ,
  // {
  //     title:"Micro Casque Gamer HAMA uRage SoundZ 100 - Noir",
  //     price:"65,000",
  //     counter:0,
  //     img:"https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/m/image0_25.jpg",
  //     id: uuidv4(),
  //     détails:"Micro Casque Gamer HAMA uRage SoundZ 100 - Technologie de connectivité: Filaire -Diamètre de Casque: 40 mm - Réponse en Fréquence Microphone / casque: 50 Hz - 10 kHz / 20 Hz - 20 kHz - Sensibilite Microphone / casque: -42 dB +/-3 dB / 108 dB +/- 3 dB - Impédance Microphone / casque: 2200 Ω / 32 Ω - Matière: Plastique - Longueur de cable: 2.2 m - Arceau de tête et bras du microphone réglables - Écouteurs rembourrés en tissu - Revêtement offrant une protection anti-pliure - Connecteurs: Jack 3,52mm mâle - Couleur: Noir - Garantie: 1 an",
  // } ,
];
console.log("#initState", initState);
function produitListReducer(state = initState, action) {
  // eslint-disable-next-line default-case

  // eslint-disable-next-line default-case
  switch (action.type) {
    case "DECREMENT":
      return {
        //   ...state.filter((el)=> el.id === action.payload ? state.el.counter=(state.el.counter - 1) : state)
        ...state,
      };

    case "INCREMENT":
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default produitListReducer;
