import Quote from '../Quote';

const quotesData = [
  {
    citation: 'Ah tiens, demain midi y a des c\u00f4tes de porc.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Vanessa Guedj',
      personnage: 'Angharad',
      saison: 'Pilote',
      episode: 'Le Duel',
    },
  },
  {
    citation:
      "Je me sens la fureur de l'ours ! [\u2026]\r\nJe me sens le courage de l'oiseau ! [\u2026]\r\nJe suis sautillant comme le mulot ! [\u2026]\r\nJe fr\u00e9tille comme une p'tite truite ! [\u2026]\r\nJ'ai la vigueur d'un insecte !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Aur\u00e9lien Portehaut',
      personnage: 'Gauvain',
      saison: 'Pilote',
      episode: 'Le Duel',
    },
  },
  {
    citation: 'Dehors le cureton! Dehors le cureton!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: '\u00c9milie Dequenne',
      personnage: 'Edern',
      saison: 'Pilote',
      episode: 'Le Chevalier femme',
    },
  },
  {
    citation:
      "Mais c'est pas juste, \u00e7a ! J'ai jamais port\u00e9 de rose, hein. J'aime pas les fleurs, je me lave pas et je pisse dans mon armure, comme vous !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: '\u00c9milie Dequenne',
      personnage: 'Edern',
      saison: 'Pilote',
      episode: 'Le Chevalier femme',
    },
  },
  {
    citation:
      "Quoi, c'est parce que je pr\u00e9f\u00e8re les hommes c'est \u00e7a ? \u00c0 ce compte-l\u00e0, faut virer Bohort aussi...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: '\u00c9milie Dequenne',
      personnage: 'Edern',
      saison: 'Pilote',
      episode: 'Le Chevalier femme',
    },
  },
  {
    citation:
      "Tapette, mais c'est qui qui se trimballe en robe \u00e0 travers tout le pays? [\u2026] Moi j'te parle p'tite fofolle!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: '\u00c9milie Dequenne',
      personnage: 'Edern',
      saison: 'Pilote',
      episode: 'Le Chevalier femme',
    },
  },
  {
    citation: "Nous on est Celtes ! Et on est fiers de l'\u00eatre !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Pilote',
      episode: 'Le Chevalier Femme',
    },
  },
  {
    citation: "Ouais ! Qu'il y vienne patauger dans la merde !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Pilote',
      episode: 'Le Chevalier Femme',
    },
  },
  {
    citation: 'Apr\u00e8s, moi, pour le d\u00e9tail, je sais pas',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: "Yvan le Bolloc'h",
      personnage: 'Breccan',
      saison: 'Livre I',
      episode: 'La table de Breccan',
    },
  },
  {
    citation: "Ben, d'la r\u00e9clame beau Dieu ! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: "Yvan le Bolloc'h",
      personnage: 'Breccan',
      saison: 'Livre I',
      episode: 'La table de Breccan',
    },
  },
  {
    citation:
      "\u00c7a vous d\u00e9range si\u2026 si j'mets ma p'tite griffe l\u00e0 ? Si y a un chef de clan qui vient poser ses miches par l\u00e0 devant et il trouve \u00e7a cossu. Ben le jour o\u00f9 il voudra faire un buffet ou un plumard sur mesure... il saura o\u00f9 m'trouver, quoi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: "Yvan le Bolloc'h",
      personnage: 'Breccan',
      saison: 'Livre I',
      episode: 'La table de Breccan',
    },
  },
  {
    citation: "C'est carr\u00e9-carr\u00e9 chez vous, hein ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: "Yvan le Bolloc'h",
      personnage: 'Breccan',
      saison: 'Livre I',
      episode: 'La table de Breccan',
    },
  },
  {
    citation:
      "Le cuir, \u00e7a restera toujours le cuir. Le cuir, \u00e7a traverse les \u00e2ges, les fronti\u00e8res, les modes. D'autant qu'l\u00e0 j'vous ai pas mis d'la vache moisie. Attention ! C'est d'la tannerie d'luxe ! Assembl\u00e9e au crochet de six ! Y'a des heures de main d'\u0153uvre derri\u00e8re ! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: "Yvan le Bolloc'h",
      personnage: 'Breccan',
      saison: 'Livre I',
      episode: 'La table de Breccan',
    },
  },
  {
    citation:
      "Sire, on en a d\u00e9j\u00e0 parl\u00e9 de la pierre ! Je peux pas monter une pierre d'une toise et demi dans un escalier \u00e0 colima\u00e7on !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: "Yvan le Bolloc'h",
      personnage: 'Breccan',
      saison: 'Livre I',
      episode: 'La table de Breccan',
    },
  },
  {
    citation: 'En garde, esp\u00e8ce de vieille pute d\u00e9garnie !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre I',
      episode: "Le ma\u00eetre d'armes",
    },
  },
  {
    citation:
      "HAHA, Sire ! Je vous attends ! \u00c0 moins que vous pr\u00e9f\u00e9riez que l'on dise partout que le roi est une petite p\u00e9dale qui pisse dans son froc \u00e0 l'id\u00e9e de se battre !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre I',
      episode: "Le ma\u00eetre d'armes",
    },
  },
  {
    citation:
      "Sire ! Mon p\u00e8re est peut-\u00eatre unijambiste, mais moi, ma femme n'a pas de moustache ! [\u2026] Alors \u00e7a vient? p'tite bite !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre I',
      episode: "Le ma\u00eetre d'armes",
    },
  },
  {
    citation:
      "(\u00c0 Arthur)C'est vrai que c'est curieux cette manie de pas vouloir torturer ; \u00e7a vient de quoi, \u00e7a ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Arthur et la Question',
    },
  },
  {
    citation:
      '(\u00c0 Arthur, L\u00e9odagan et Venec)\u00c7a vous ennuie si je vomis ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre I',
      episode: 'Arthur et la Question',
    },
  },
  {
    citation:
      "Ah tiens, aujourd'hui j'ai fait tailler le rosier de l'arri\u00e8re-cour parce qu'il en avait dr\u00f4lement besoin. [\u2026] Et vous, vous me racontez pas votre petite journ\u00e9e ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre I',
      episode: 'Arthur et la Question',
    },
  },
  {
    citation:
      "Et voil\u00e0 ; donc \u00e7a, c'est pour arracher les noix [Bohort : Les noix... Les fruits ?] Ah, non, les noix... les noix.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre I',
      episode: 'Arthur et la Question',
    },
  },
  {
    citation:
      "Sinon, pour rester sur le th\u00e8me du pied, il y a \u00e7a: vous serrez la vis jusqu'\u00e0 ce que vous entendiez le bruit de l'os. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre I',
      episode: 'Arthur et la Question',
    },
  },
  {
    citation:
      "(Parlant des chefs de clans) Si on les invite et qu'y a pas d'femmes vous allez f\u00e9d\u00e9rer mes couilles...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre I',
      episode: 'Le banquet des chefs',
    },
  },
  {
    citation:
      "D'apr\u00e8s mes derniers renseignements, il serait tout \u00e0 fait possible que le Graal ne soit ni un vase, ni une coupe, mais... un r\u00e9cipient.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre I',
      episode: 'En forme de Graal',
    },
  },
  {
    citation:
      "Si Joseph d'Arimathie a pas \u00e9t\u00e9 trop con, vous pouvez \u00eatre s\u00fbr que le Graal, c'est un bocal \u00e0 anchois.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'En forme de Graal',
    },
  },
  {
    citation: 'Et deux jus de pomme qui piquent !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chapuis',
      personnage: 'Le Tavernier',
      saison: 'Livre I',
      episode: 'La dent de requin',
    },
  },
  {
    citation:
      "2500 pi\u00e8ces d'or ???! Eh... eh... C'est une blague? 2500 pi\u00e8ces d'or, mais o\u00f9 voulez vous que je trouve 2500 pi\u00e8ces d'or, dans le cul d'une vache ?!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Georges Beller',
      personnage: 'Le Seigneur Jacca',
      saison: 'Livre I',
      episode: 'La taxe militaire',
    },
  },
  {
    citation:
      "Attendez, \u00e7a fait combien de dizaines d'ann\u00e9es que je leur laisse cultiver mes terres, \u00e0 ces connards ? En plus de \u00e7a ils sont m\u00eame pas polis, ils sont cons... Comme des tables ! Ils font un pain d\u00e9gueulasse - on s'p\u00e8te les dents dessus - non, l\u00e0, j'ai besoin d'un peu de pognon, alors j'aime autant vous dire qu'ils vont passer \u00e0 la caisse, les p\u00e9cores !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Georges Beller',
      personnage: 'Le Seigneur Jacca',
      saison: 'Livre I',
      episode: 'La taxe militaire',
    },
  },
  {
    citation:
      "Ca fait deux cent ans qu'il y a que les paysans qui payent les taxes, alors je vois pas pourquoi aujourd'hui \u00e7a change, comme \u00e7a d'un seul coup et \u00e7a me tombe dessus comme une merde sur une planche !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Georges Beller',
      personnage: 'Le Seigneur Jacca',
      saison: 'Livre I',
      episode: 'La taxe militaire',
    },
  },
  {
    citation:
      "Et le seigneur Lothar, il paye pas, lui, je sais il me l'a dit ...[L\u00e9odagan : non il paye pas, parce qu'il participe au combat]... Mais vous vous foutez de moi?! Il a au moins 95 ans, il a une jambe raide, il est tellement bigleux qu'il trouverait m\u00eame pas sa bite pour pisser !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Georges Beller',
      personnage: 'Le Seigneur Jacca',
      saison: 'Livre I',
      episode: 'La taxe militaire',
    },
  },
  {
    citation:
      "Excusez moi Sire, c'est sur le coup du...[dit \u00e0 plusieurs reprises]",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Georges Beller',
      personnage: 'Le Seigneur Jacca',
      saison: 'Livre I',
      episode: 'La taxe militaire',
    },
  },
  {
    citation:
      'BAH SI VOUS VOULEZ PAS PASSER POUR DES CLODOS, COMMENCEZ PAR \u00c9PONGER VOTRE ARDOISE ! ',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chapuis',
      personnage: 'Le Tavernier',
      saison: 'Livre I',
      episode: 'Un roi \u00e0 la taverne',
    },
  },
  {
    citation:
      "J'ai r\u00eav\u00e9 qu'il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il \u00e9tait mi-ours, mi-scorpion et re mi-ours derri\u00e8re !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thibault Roux',
      personnage: 'Gr\u00fcd\u00fc',
      saison: 'Livre I',
      episode: 'La queue du scorpion',
    },
  },
  {
    citation:
      "J'y connais rien, hein, mais\u2026 \u00c0 votre avis, le fait que vous me touchiez pratiquement jamais, \u00e7a a une influence sur la f\u00e9condit\u00e9 ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre I',
      episode: 'La Potion de f\u00e9condit\u00e9',
    },
  },
  {
    citation:
      "N'ayez crainte, Sire, je prot\u00e9gerai la reine de la f\u00e9rocit\u00e9 des b\u00eates de la nuit !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre I',
      episode: 'Le Sacrifice',
    },
  },
  {
    citation:
      "(\u00c0 Perceval) Rangez moi \u00e7a, d\u00e9bile, la table ronde, c'est pas la f\u00eate de l'artisanat !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'De retour de Jud\u00e9e',
    },
  },
  {
    citation:
      "Le premier truc qui frappe, c'est la langue. Vous savez ce que c'est, on arrive sur place, boum\u2026 En fait, c'est quand on commence \u00e0 entendre les gens parler que l\u00e0\u2026 l\u00e0, on se dit : je suis pas chez moi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Antoine de Caunes',
      personnage: 'Dagonet',
      saison: 'Livre I',
      episode: 'De retour de Jud\u00e9e',
    },
  },
  {
    citation:
      "[Le vieux] a essay\u00e9 de me vendre un genre de turban, comme ils se mettent sur la t\u00eate, l\u00e0-bas. J'ai d'abord commenc\u00e9 par l'envoyer chier, puis je me suis dit que \u00e7a ferait s\u00fbrement plaisir au seigneur Karadoc.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Antoine de Caunes',
      personnage: 'Dagonet',
      saison: 'Livre I',
      episode: 'Le Retour de Jud\u00e9e',
    },
  },
  {
    citation:
      'Non, sans blague, Seigneur Bohort, avec tout le respect que je vous dois, la prochaine fois que je vous revois tourner autour de la chambre du roi, je vous d\u00e9glingue la t\u00eate.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thibault Roux',
      personnage: 'Gr\u00fcd\u00fc',
      saison: 'Livre I',
      episode: "L'Assassin de Kaamelott",
    },
  },
  {
    citation:
      "H\u00e9 ben, si un jour j'oublie que je suis boniche, vous serez gentil de me le rappeler !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Vanessa Guedj',
      personnage: 'Angharad',
      saison: 'Livre I',
      episode: 'La Romance de Lancelot',
    },
  },
  {
    citation: "(\u00c0 S\u00e9li) Je peux pas y aller j'ai une otite.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre I',
      episode: 'Le cas Yvain',
    },
  },
  {
    citation:
      "Je refuse d'aller me battre pour soutenir une politique d'expansion territoriale dont je ne reconnais pas la l\u00e9gitimit\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre I',
      episode: 'Le cas Yvain',
    },
  },
  {
    citation: 'Ah, Biographie ! (Pet)\u2026 Biographie\u2026',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre I',
      episode: "L'interpr\u00e8te",
    },
  },
  {
    citation:
      "D\u00e9j\u00e0, \u00e0 la base, un Burgonde, c'est con comme une meule, alors celui-l\u00e0 ! Ah, vous pouvez pas savoir c'que c'est que de tomber interpr\u00e8te avec un engin pareil ! (bruit de pet) Tiens, vous voyez ? Toute la journ\u00e9e, c'est comme \u00e7a ! Il pue, il p\u00e8te, il l\u00e2che des ruines ! Tiens, l'autre jour \u00e0 table... Il devient tout bleu. Il \u00e9tait en train de s'\u00e9touffer avec un os de caille, cet abruti ! Il tousse, il crache, il re-tousse, et BINGO ! Il m'd\u00e9gueule dessus ! Vous l'croyez, \u00e7a ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lor\u00e1nt Deutsch',
      personnage: "L'interpr\u00e8te burgonde",
      saison: 'Livre I',
      episode: "L'interpr\u00e8te",
    },
  },
  {
    citation:
      "La culture burgonde ? Je savais m\u00eame pas qu'y en avait une\u2026 Non, moi je voulais faire grec moderne, mais y avait plus de place. Il restait que burgonde ou anglais. Aaaaanglais ! Mais c'est encore moins r\u00e9pandu.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lor\u00e1nt Deutsch',
      personnage: "L'interpr\u00e8te burgonde",
      saison: 'Livre I',
      episode: "L'Interpr\u00e8te",
    },
  },
  {
    citation:
      "(Au P\u00e8re Blaise)\r\nIl nous parle bien de travers, le cureton, aujourd'hui !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Livre I',
      episode: 'Enluminures',
    },
  },
  {
    citation:
      "Non mais attendez, je crois qu'on s'est mal compris, l\u00e0 : vous avez une id\u00e9e du temps qu'il me faut pour tracer une lettre avec ces PUTAINS DE PLUMES ?!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre I',
      episode: 'Enluminures',
    },
  },
  {
    citation:
      "Oh oui oui, c'est magnifique, oui, oui,  il y a des taches, c'est tout barr\u00e9, j'ai tellement ratur\u00e9 que j'ai transperc\u00e9 le papier... C'est immonde... on dirait que j'ai lav\u00e9 par terre avec, mais c'est fait...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre I',
      episode: 'Enluminures',
    },
  },
  {
    citation:
      "J'ai toujours dit que je supportais pas les jupes ; mais c'est l'uniforme r\u00e9glementaire, j'y suis pour rien !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre I',
      episode: 'Le Dernier Empereur',
    },
  },
  {
    citation:
      "N'emp\u00eache que chez nous, on sait construire ! Les aqueducs, c'est quand m\u00eame un petit peu plus classe que vos murs en merde s\u00e9ch\u00e9e...Ouais, je dis \u00e7a, je dis tout !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre I',
      episode: 'Le Dernier Empereur',
    },
  },
  {
    citation:
      "On fait marrer tout le monde avec nos chenilles \u00e0 la pur\u00e9e d'fraises et nos couilles d'oursins aux amandes, et je sais plus quelles autres saloperies !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre I',
      episode: 'Le Dernier Empereur',
    },
  },
  {
    citation:
      "Quoi ? Vous voulez que j'humilie ma terre natale pour une connerie d'armure rouill\u00e9e ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'St\u00e9phane Margot',
      personnage: 'Calogrenant',
      saison: 'Livre I',
      episode: 'La jupe de Calogrenant',
    },
  },
  {
    citation:
      "Vous n'avez qu'\u00e0 consid\u00e9rer que je suis officiellement cul nu.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'St\u00e9phane Margot',
      personnage: 'Calogrenant',
      saison: 'Livre I',
      episode: 'La jupe de Calogrenant',
    },
  },
  {
    citation:
      '(\u00c0 Gueni\u00e8vre, \u00e0 propos de sa m\u00e8re, Dame Ygerne)\r\nAvec ma m\u00e8re, faut que tout soit carr\u00e9.',
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "La Visite d'Ygerne",
    },
  },
  {
    citation:
      '(\u00c0 propos du chateau de Kaamelott) Vulgaire ? Oui... Mais pas seulement.',
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Jos\u00e9e Drevon',
      personnage: 'Ygerne',
      saison: 'Livre I',
      episode: "La Visite d'Ygerne",
    },
  },
  {
    citation:
      "[Arthur : Vous mangez \u00e0 quelle heure, vous, \u00e0 Tintagel?] A Tintagel, on mange quand on l'a m\u00e9rit\u00e9, quand on sait qu'on a accompli ses commandements avec humilit\u00e9 et qu'on a glorifi\u00e9 sa famille [Arthur : Oui, non, nous, on mange quand on a faim.]",
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Jos\u00e9e Drevon',
      personnage: 'Ygerne',
      saison: 'Livre I',
      episode: "La Visite d'Ygerne",
    },
  },
  {
    citation:
      '(\u00c0 sa m\u00e8re, Dame Ygerne)\r\nOui\u2026 non\u2026 nous, on mange quand on a faim.',
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "La Visite d'Ygerne",
    },
  },
  {
    citation:
      '(En parlant d\'Arthur et en le regardant d\'un air narquois) Au cas o\u00f9 il aurait une petite "faim-faim"!?',
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Jos\u00e9e Drevon',
      personnage: 'Ygerne',
      saison: 'Livre I',
      episode: "La Visite d'Ygerne",
    },
  },
  {
    citation:
      "J'irai me coucher quand vous m'aurez jur\u00e9 qu'il n'y a pas dans cette for\u00eat d'animal plus dangereux que le lapin adulte !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre I',
      episode: 'Un bruit dans la nuit',
    },
  },
  {
    citation:
      "(\u00c0 Goustan le Cruel, parlant d'Arthur)Tenez ! c'est le mot que je cherchais\u2026 il gouverne comme une femme !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Goustan le Cruel',
    },
  },
  {
    citation:
      "C'est justement parce que vous avez \u00e9t\u00e9 cocoll\u00e9 par une lopette de jardinier que vous gouvernez comme une femme !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre I',
      episode: 'Goustan le Cruel',
    },
  },
  {
    citation:
      "(\u00c0 Arthur au sujet de l'h\u00e9ritier) Je comprends qu'avec deux livres de viande sur l'estomac, on ne soit pas tr\u00e8s actif dans une chambre \u00e0 coucher. \u00c7a ronfle \u00e0 faire craquer le joint des murs.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre I',
      episode: 'Goustan Le Cruel',
    },
  },
  {
    citation:
      "(\u00c0 Gu\u00e9thenoc) Si votre but c'\u00e9tait de s\u00e9duire les dames fallait faire chevalier, c'est tout !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre I',
      episode: 'Le Probl\u00e8me du chou',
    },
  },
  {
    citation:
      "(\u00c0 Gueni\u00e8vre qui n'est pas ravie de devoir porter une ceinture de chastet\u00e9) Nan mais si vous voulez, je passerai vous voir discr\u00e8tement le soir et je vous la d\u00e9bouclerai... Comme \u00e7a vous passerez une bonne nuit...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre I',
      episode: 'Le Secret de Lancelot',
    },
  },
  {
    citation:
      "Gueni\u00e8vre: Mais qu'est-ce que je vais devenir, maintenant que mon corps s'est habitu\u00e9...?\r\nArthur: Et ben vous vous deshabiturez. Comment vous faisiez avant ? \r\nGueni\u00e8vre: Mais avant ma vie, c'\u00e9tait de la merde vous entendez?!  Recevoir le chef de ci, le roi de mi, toujours polie, toujours bien mise, le symbole de la nation bretonne, ha! Il en faut bien des compensations pour encaisser toute ces conneries hein! Toujours s'occuper de tout, pis surtout de vous, parce que vous avez des responsabilit\u00e9s! Et qui s'occupe de moi pendant c'temps?! Alors oui, maintenant qu'y a plus de p\u00e2te d'amande, je tourne en rond,  je suis sur les nerfs!! J'ai pas d'amis, pas de loisirs... Comme vous me touchez pas, les choses de l'amour je m'assois dessus, et je parle au figur\u00e9, alors je m'suis plong\u00e9e dans la p\u00e2te d'amande! Quand je vous regarde et que j'vois comment vous m'traitez, hein, je m'dis que j'aurais meilleur compte d'aller d'ici jusqu'\u00e0 Rome \u00e0 pieds pour en chercher parce que c'est finalement la meilleure chose qui me soit arriv\u00e9e \u2026.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre I',
      episode: 'Le Secret de Lancelot',
    },
  },
  {
    citation:
      "[\u00c0 la f\u00e9e Morgane]: J'adore la chata\u00eegne. Je m'en ferais p\u00e9ter le bide. Vous en voulez ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre I',
      episode: 'La Blessure Mortelle',
    },
  },
  {
    citation:
      "(\u00c0 Arthur, Perceval et L\u00e9odagan)\r\nMoi aussi, je ne me sens pas dans mon assiette, j'ai jamais beaucoup aim\u00e9 les tunnels.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre I',
      episode: 'Le Dragon des tunnels',
    },
  },
  {
    citation:
      "Et \u00e0 un moment... Le sorcier s'est mis \u00e0 nous menacer, avec ses parties g\u00e9nitales.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Aur\u00e9lien Portehaut',
      personnage: 'Gauvain',
      saison: 'Livre I',
      episode: 'Le prodige du fakir',
    },
  },
  {
    citation:
      'Alors les femmes. [...] Donnez nous les femmes ! [...] Tous les femmes !!! [...] AAAAAAHH !!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lan Truong',
      personnage: 'Attila',
      saison: 'Livre I',
      episode: 'Le Fl\u00e9au de Dieu',
    },
  },
  {
    citation: 'Je te mettrai \u00e0 genoux, Arthur de Bretagne !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lan Truong',
      personnage: 'Attila',
      saison: 'Livre I',
      episode: 'Le Fl\u00e9au de Dieu',
    },
  },
  {
    citation:
      "Je vais tout casser, ici, MOI! Kaamelott Kaamelott : y va rester un tas de caaaailloux, comme \u00e7a! Je veux l'or, tout l'or sinon c'est la guerre !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lan Truong',
      personnage: 'Attila',
      saison: 'Livre I',
      episode: 'Le Fl\u00e9au de Dieu',
    },
  },
  {
    citation: 'Jo le rigolo ???!!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre I',
      episode: 'Le Fl\u00e9au de Dieu',
    },
  },
  {
    citation: 'Pourquoi pas ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lan Truong',
      personnage: 'Attila',
      saison: 'Livre I',
      episode: 'Le Fl\u00e9au de Dieu',
    },
  },
  {
    citation:
      'Est-ce que je suis votre ma\u00eetresse pr\u00e9f\u00e9r\u00e9e ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre I',
      episode: 'Le Tourment',
    },
  },
  {
    citation:
      "Dieu ! Depuis qu'vous \u00eates arriv\u00e9 - \u00e7a fait quoi, \u00e7a fait deux-trois ans \u00e0 peu pr\u00e8s, enfin j'veux dire deux-trois ans que le truc a bien pris, quoi, qu'les gens en parlent, tout \u00e7a - moi j'fais tout c'que j'peux pour mettre les gars au pas. La qu\u00eate du Graal, le c\u00f4t\u00e9 symbolique, la lumi\u00e8re, la salvation tout \u00e7a j'crois qu'c'est bien rentr\u00e9. Parce que c'\u00e9tait pas gagn\u00e9 quand m\u00eame. Moi les mectons d'la Table Ronde c'est pas des fl\u00e8ches, vous \u00eates au courant d'\u00e7a. Quand j'leur parle du Graal, eux ils cherchent un vase, et c'est marre. Si j'commence \u00e0 m'lancer dans des explications comme quoi c'est pas l'objet qui est important mais le c\u00f4t\u00e9 symbolique, le sang d'vot'fils, la vie \u00e9ternelle alors l\u00e0, les gars y me regardent avec des billes comme \u00e7a et puis y d\u00e9crochent, ah hein, rideau ! Alors j'crois que c'qu'y s'rait pas mal, si on veut faire un peu avancer l'histoire, voyez, \u00e7a s'rait de faire p\u00e9ter un signe, mais un truc commak, hein. Parce que la Dame du Lac c'est bien gentil, mais euh, comme y a que moi qui peux la voir c'est pas tr\u00e8s encourageant pour les autres. Non au contraire, quand y m'voient causer tout seul, y s'demandent si j'ai pas carr\u00e9ment tourn\u00e9 la carte. Alors voil\u00e0, faites c'que vous pouvez, quoi. J'compte sur vous. Donc euh\u2026 amen\u2026 enfin euh\u2026 deo gratias j'sais pu quoi\u2026 j'suis d\u00e9sol\u00e9 j'ai pas eu le temps de potasser les formules.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Agnus Dei',
    },
  },
  {
    citation:
      "(\u00c0 Gueni\u00e8vre)La prochaine fois que vous faites venir un barde, je lui ouvre le bide de l\u00e0 \u00e0 l\u00e0, j'lui sors les boyaux et je file sa langue \u00e0 bouffer aux chiens. C'est clair, \u00e7a ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: '\u00c0 la volette',
    },
  },
  {
    citation:
      "Quand je viens vous voir, pour vous demander des trucs ; c'est l'enchanteur que je viens voir ; pour qu'il m'donne des solutions d'enchanteur : pas des combines \u00e0 la noix ou des rem\u00e8des de bonne femme ! Vous \u00eates mon enchanteur, vous \u00eates pas ma grand-m\u00e8re, OK ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: '\u00c0 la volette',
    },
  },
  {
    citation:
      'Faut arr\u00eater ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourn\u00e9, \u00e7a change tout !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Ambidextrie',
    },
  },
  {
    citation: 'Toi un jour je te crame ta famille, toi.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Ambidextrie',
    },
  },
  {
    citation:
      "(\u00c0 Arthur)Dites tout de suite que j'ai des id\u00e9es de tocard !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Arthur et les T\u00e9n\u00e8bres',
    },
  },
  {
    citation:
      '(\u00c0 Bohort)Faut toujours que vous veniez foutre votre merde, vous\u2026',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Arthur et les T\u00e9n\u00e8bres',
    },
  },
  {
    citation:
      '(\u00c0 L\u00e9odagan)Votre gendre. Eh ben, il a peur du noir !\u2026',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre I',
      episode: 'Arthur et les T\u00e9n\u00e8bres',
    },
  },
  {
    citation:
      'Ah, mais des tanches pareilles, on devrait les mettre sous verre, hein !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Basidiomyc\u00e8tes',
    },
  },
  {
    citation:
      "Faut que j'enl\u00e8ve mon armure sinon y va se passer quelque chose d'atroce.[Part... Revient] J'ai pas eu le temps d'enlever mon armure...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre I',
      episode: 'Basidiomyc\u00e8tes',
    },
  },
  {
    citation:
      " C'est quand m\u00eame magnifique une arm\u00e9e bien coordonn\u00e9e, hein...ben quoi, vous allez pas m'dire qu'on a pas l'air con avec nos drapeaux, \u00e7a fait une heure qu'on fait des signes y'en a pas un qui va dans le m\u00eame sens !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Codes et Strat\u00e9gies',
    },
  },
  {
    citation: 'Il commence doucement \u00e0 me faire chier celui l\u00e0!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Codes et Strat\u00e9gies',
    },
  },
  {
    citation:
      "J'suis chef de guerre moi, j'suis pas l\u00e0 pour agiter des drapeaux et jouer d'la trompette...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Codes et Strat\u00e9gies',
    },
  },
  {
    citation: 'Sortez-vous les doigts du cul !!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Codes et Strat\u00e9gies',
    },
  },
  {
    citation:
      "(\u00c0 propos d'Yvain)\r\nIl dit tellement rien qu'on dinerait avec un tabouret ce serait pareil.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'D\u00eener dansant',
    },
  },
  {
    citation:
      "(\u00c0 table, en famille)\r\nCalogrenant, c'est le roi des cons.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'D\u00eener dansant',
    },
  },
  {
    citation:
      "(\u00c0 Lancelot)\r\nOui, je sais, j'ai arbitr\u00e9 un peu sec. Mais en m\u00eame temps\u2026",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "Feu l'\u00e2ne de Guethenoc",
    },
  },
  {
    citation:
      "Attention, attention\u2026 il va y arriver un moment o\u00f9 il y a des granges qui vont se mettre \u00e0 flamber, faudra pas demander d'o\u00f9 \u00e7a vient !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre I',
      episode: "Feu l'\u00e2ne de Guethenoc",
    },
  },
  {
    citation:
      "Mais Bohort, j'vais vous faire mettre au cachot [...]. Non mais j'vous \u00e9coute, j'vous \u00e9coute seulement j'vous pr\u00e9viens, j'vous l'dis, j'vais vous faire descendre en cabane avec un pichet de flotte et un bout de pain sec. J'suis d\u00e9sol\u00e9, j'suis d\u00e9muni, j'vois pas d'autre solution. Et puis j'pense que \u00e7a vous donnera un peu l'occasion de... de r\u00e9fl\u00e9chir un peu \u00e0 tout \u00e7a \u00e0 t\u00eate repos\u00e9e, de prendre un peu d'recul sur les choses parce que Bohort, on n'r\u00e9veille pas son roi en pleine nuit pour des conneries, encore moins deux fois d'suite...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Haunted',
    },
  },
  {
    citation:
      "Mon p\u00e8re, il n'\u00e9tait pas \u00e9bouriff\u00e9, d\u00e9j\u00e0, hein, il avait une coupe \u00e0 la con mais c'\u00e9tait plut\u00f4t aplati et puis il \u00e9tait pas vaporeux, voil\u00e0 ! Allez, au lit !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Haunted',
    },
  },
  {
    citation:
      "Oh, mais c'est pas vrai, mais vous allez m'gonfler jusqu'\u00e0 quand ? Une heure que j'crapahute dans tout le ch\u00e2teau avec ma bougie, \u00e7a va bien, maintenant !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Haunted',
    },
  },
  {
    citation:
      "Faut faire comme avec les scorpions qui se suicident quand ils sont entour\u00e9s par le feu, faut faire un feu en forme de cercle, autour d'eux, comme \u00e7a ils se suicident, pendant que nous on fait le tour et on lance de la caillasse de l'autre c\u00f4t\u00e9 pour brouiller... Non ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Heat',
    },
  },
  {
    citation:
      "On construit un barrage, apr\u00e8s on lance de la caillasse de l'autre c\u00f4t\u00e9 de la rivi\u00e8re pour faire croire aux autres qu'on a travers\u00e9 dans l'autre sens. Une fois qu'ils sont au milieu, on casse le barrage et on les noie. Ouais... le seul probl\u00e8me c'est que quand on a pass\u00e9 quatre semaines \u00e0 construire un barrage, \u00e7a fait un peu mal au cul d'le d\u00e9truire...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre I',
      episode: 'Heat',
    },
  },
  {
    citation: 'Putain, en plein dans sa mouille !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Heat',
    },
  },
  {
    citation:
      'Si on faisait le coup du bouclier humain ?[...] Par exemple, Sire, L\u00e9odagan et moi on fait semblant de vous prendre en otage : on vous met une dague sous le cou et on traverse le camp adverse en gueulant : "Bougez pas, bougez pas ou on bute le roi!"...',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Heat',
    },
  },
  {
    citation: "C'est pas faux.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'La Botte secr\u00e8te',
    },
  },
  {
    citation:
      "(\u00c0 Arthur et Lancelot) \u00c7a sert \u00e0 rien, un si\u00e8ge, si elle est enceinte, il faut des linges blancs et une bassine d'eau chaude.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'La Coccinelle de Madenn',
    },
  },
  {
    citation:
      "(\u00c0 Arthur et Lancelot) Une fois, \u00e0 une ex\u00e9cution, je m'approche d'une fille. Pour rigoler, je lui fais : {{\" \"|Vous \u00eates de la famille du pendu ?}}... C'\u00e9tait sa s\u0153ur. Bonjour l'approche !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'La Coccinelle de Madenn',
    },
  },
  {
    citation:
      "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe. C'est nouveau. [\u2026] Ah non, \u00e7a c'est que nous. Parce qu'il faut \u00eatre capable de passer pour des cons en un temps record. Ah non, l\u00e0-dessus on a une avance consid\u00e9rable.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'La Dent de requin',
    },
  },
  {
    citation:
      "De toutes fa\u00e7ons, c'est ma m\u00e8re, j'vais pas la faire tabasser par la garde.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "La F\u00eate de l'Hiver",
    },
  },
  {
    citation:
      "Ben si, si c'est l'm\u00eame volume sonore, on dit \"\u00e9quidistant\" [...] S'ils sont \u00e9quidistants en m\u00eame temps que nous, on peut rep\u00e9rer le dragon par rapport \u00e0 une certaine distance. Si le dragon s'\u00e9loigne, on s'ra \u00e9quidistant, mais \u00e7a s'ra vachement moins pr\u00e9cis et... et pas r\u00e9ciproque.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'La fureur du dragon',
    },
  },
  {
    citation:
      "Vous allez pas \u00eatre emb\u00eat\u00e9 avec une ma\u00eetresse qu'a plus d'mains ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'La kleptomane',
    },
  },
  {
    citation:
      'Ma parole, des engins comme vous, \u00e7a devrait \u00eatre fourni avec une notice !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'La potion de f\u00e9condit\u00e9',
    },
  },
  {
    citation: "L'agneau \u00e9tait daub\u00e9 du cul !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre I',
      episode: 'La qu\u00eate des deux renards',
    },
  },
  {
    citation:
      "(S'adressant au seigneur Perceval)\r\nSur le principe, la Table ronde, c'est pas obligatoire.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'La Retraite',
    },
  },
  {
    citation:
      "Arthur : De toute fa\u00e7on faudra bien vous y faire parce qu'\u00e0 partir de maintenant, on va s'appeler Les Chevaliers de la Table Ronde !\r\nEncore une chance qu'on se soit pas fait construire un buffet \u00e0 vaisselle, hein !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'La Table de Breccan',
    },
  },
  {
    citation:
      "[Dame S\u00e9li : La p\u00eache, les tartes, tout \u00e7a c'est du patrimoine] (Arthur, montrant la tarte) C'est du patrimoine \u00e7a ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'La tarte aux myrtilles',
    },
  },
  {
    citation:
      "Y a pas \u00e0 dire, d\u00e8s qu'il y a du dessert, le repas est tout de suite plus chaleureux !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'La tarte aux myrtilles',
    },
  },
  {
    citation:
      "(\u00c0 Bohort)C'est quand m\u00eame formidable ce pays, faut galoper \u00e0 cot\u00e9 de la route pour pas se casser la gueule.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'La vraie nature du Graal',
    },
  },
  {
    citation:
      "Qu'est-ce que c'est, le Graal? Vous savez pas vraiment! Et moi non plus! Et j'en ai rien \u00e0 cirer! Regardez-nous: y'en a pas deux qui ont le m\u00eame \u00e2ge, pas deux qui viennent du m\u00eame endroit! Des seigneurs, des chevaliers errants, des riches, des pauvres! Mais, \u00e0 la table ronde, pour la premi\u00e8re fois dans toute l'histoire du peuple breton, nous cherchons tous la m\u00eame chose: le Graal! C'est le Graal qui fait de vous des chevaliers, des hommes civilis\u00e9s, qui nous diff\u00e9rencie des tribus barbares. Le Graal, c'est notre union. Le Graal c'est notre grandeur.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'La vraie nature du Graal',
    },
  },
  {
    citation:
      "C'est pour \u00e7a : j'lis jamais rien. C'est un vrai pi\u00e8ge \u00e0 cons c't'histoire-l\u00e0. En plus j'sais pas lire.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Le Chaudron Rutilant',
    },
  },
  {
    citation:
      "On a m\u00eame un tabouret ! Quand on s'assoit d'ssus, on se retrouve sur un autre tabouret dans une taverne dans le Languedoc [...] Ouais, le si\u00e8ge de transport qu'ils appellent. En plus, comme par hasard c'est moi qui ai essay\u00e9 le premier. Deux semaines et demi plus le bateau qu'\u00e7a m'a pris pour revenir. J'avais pas compris qu'en me rasseyant d'ssus, \u00e7a me ramenait de l'aut'c\u00f4t\u00e9. Et \u00e0 l'arriv\u00e9e j'me suis fait mettre une chasse, parce que j'avais ramen\u00e9 l'autre tabouret, et que soit-disant il aurait fallu qu'il reste l\u00e0-bas. Pourtant ils marchent les deux tabourets ! Eh ben ils sont l'un \u00e0 c\u00f4t\u00e9 de l'autre. Alors \u00e7a fait pas pareil.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Le Chaudron Rutilant',
    },
  },
  {
    citation:
      "(Entrant subitement dans la Salle de la Table Ronde) Excusez, c'est juste pour vous dire que je vais pas pouvoir rester aujourd'hui ! Faut que je retourne \u00e0 la ferme de mes vieux ! Y a ma grand-m\u00e8re qui a gliss\u00e9 sur une bouse ! C'est le vrai merdier !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Le Code de Chevalerie',
    },
  },
  {
    citation:
      "Au gros sel ? Qu'est ce que c'est que ces conneries ? Vous me prenez pour une \u00e9paule d'agneau?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "Le coup d'\u00e9p\u00e9e",
    },
  },
  {
    citation:
      "Mais j'ai pas l'temps ! De faire de la broderie, maintenant ! J'vous dis qu'on est en train de se prendre une peign\u00e9e !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "Le coup d'\u00e9p\u00e9e",
    },
  },
  {
    citation:
      "On se fait couper les deux bras, on revient vous voir et 5 minutes apr\u00e8s on retourne se mettre sur la gueule ! Mettez-vous \u00e0 la place des ennemis, c'est d\u00e9sesp\u00e9rant.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "Le coup d'\u00e9p\u00e9e",
    },
  },
  {
    citation:
      "(Plantant la seringue dans le bras de Merlin)Ah ! ben \u00e7a\u2026 i'faut se m\u00e9fier, avec les mecs \u00e0 cran !\u2026",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "Le Coup d'\u00e9p\u00e9e",
    },
  },
  {
    citation: "Ah bah c'est s\u00fbr qu'c'est pas Jo l'Rigolo.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Le fl\u00e9au de Dieu',
    },
  },
  {
    citation:
      "Non, mais attendez, vous faites semblant de n\u00e9gocier, tranquille. Pendant ce temps, moi je fais celui qui va pisser, l\u00e0 bas, et quand j'arrive \u00e0 sa hauteur, tac, je sors ma dague et je l'ouvre en deux par le bas.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Le fl\u00e9au de Dieu',
    },
  },
  {
    citation:
      "(\u00c0 Bohort)Le minotaure... Le minotaure c'est jamais qu'une grosse vachette mont\u00e9e sur deux pieds, hein! C'est pas \u00e7a qui va m'emp\u00eacher d'dormir !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Le Labyrinthe',
    },
  },
  {
    citation:
      "Ce pain-l\u00e0, il est cuit trop vite dans un four trop chaud ; la mont\u00e9e n'a pas le temps de se faire et il y a trop d'air dans la mie. [\u2026] C'est de la merde.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre I',
      episode: 'Le pain',
    },
  },
  {
    citation:
      "Mais y a rien \u00e0 d\u00e9velopper ! C'est de la merde, c'est de la merde, c'est tout ! Moi, on me sert \u00e7a dans une auberge, le tavernier, il s'prend une quiche dans sa t\u00eate !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre I',
      episode: 'Le pain',
    },
  },
  {
    citation:
      '(\u00c0 Bohort)Vous \u00eates mari\u00e9, comme moi ; vous savez que la monstruosit\u00e9 peut prendre des formes tr\u00e8s diverses.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: "L'Escorte",
    },
  },
  {
    citation:
      "(\u00c0 Bohort) Vous parlez comme les bouquins. Bon, moi, c'est l'id\u00e9e que j'm'en fais, j'peux pas blairer d'lire.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: "L'Escorte",
    },
  },
  {
    citation:
      "Qu'est-ce que vous voulez, mon p'tit Bohort : entre son \u00e9p\u00e9e qui fait de la lumi\u00e8re, son Merlin qui fait pleuvoir des grenouilles et sa Dame du Lac qui se prend pour une truite, il lui manque plus qu'un num\u00e9ro de trap\u00e8ze, au roi des Bretons.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: "L'Escorte",
    },
  },
  {
    citation:
      "(\u00c0 Merlin) C'est vrai ce qu'on dit, vous \u00eates le fils d'un d\u00e9mon et d'une pucelle ? [\u2026] Vous avez plus pris de la pucelle.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Les D\u00e9fis de Merlin',
    },
  },
  {
    citation:
      "Qu'est-ce qui est petit et marron ?\r\n[\u00c9lias de Kelliwic'h : Un marron.]\r\nPutain, il est fort ce con.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre I',
      episode: 'Les D\u00e9fis de Merlin',
    },
  },
  {
    citation:
      "Si j'\u00e9choue, je garde la butte aux Cerfs et je fais tomber une pluie de calamit\u00e9s sur le royaume par vengeance ! C'est pas pour rien qu'on m'appelle \u00able Fourbe\u00bb. Si je r\u00e9ussis, je garde la butte aux Cerfs, plus\u2026 Le tertre des \u00c2mes\u2026",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre I',
      episode: 'Les D\u00e9fis de Merlin',
    },
  },
  {
    citation:
      '(\u00c0 Arthur) Sire, avec tout le respect, est-ce que la reine a les fesses blanches ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Les Fesses de Gueni\u00e8vre',
    },
  },
  {
    citation: "Est-ce qu'on a le droit de boire du cidre ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre I',
      episode: 'Les Nouveaux Fr\u00e8res',
    },
  },
  {
    citation: 'Je le prends pas le bouclier, \u00e7a fait trop nul !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre I',
      episode: 'Les Nouveaux Fr\u00e8res',
    },
  },
  {
    citation:
      "J'pense pas que deux trous-du-cul soient plus efficaces qu'un seul !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Les Nouveaux Fr\u00e8res',
    },
  },
  {
    citation:
      "Mon oncle, n'est-ce pas vous m\u00eame qui m'avez dit que rien ne rempla\u00e7ait une v\u00e9ritable amiti\u00e9 et qu'en cas d'urgence c'\u00e9tait la seule corde \u00e0 laquelle on pouvait vraiment se raccrocher ?.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Aur\u00e9lien Portehaut',
      personnage: 'Gauvain',
      saison: 'Livre I',
      episode: 'Les Nouveaux Fr\u00e8res',
    },
  },
  {
    citation:
      "C'est dingue, cette histoire ! C'est pas parce que vous faites des tartes pour des petits-enfants qui existent pas que je dois les emmener \u00e0 la p\u00eache, si ?!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Les Tartes aux myrtilles',
    },
  },
  {
    citation:
      "[Dame S\u00e9li : J'ai envie de faire des tartes, voil\u00e0. Vous allez pas m'obliger \u00e0 me justifier !] Ah bah non, du moment que vous nous obligez pas \u00e0 les manger !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Les Tartes aux myrtilles',
    },
  },
  {
    citation:
      "Il y en a marre de se comporter comme des sagouins avec tout le monde, sous pr\u00e9texte qu'on a des responsabilit\u00e9s !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre I',
      episode: 'Les Tartes aux myrtilles',
    },
  },
  {
    citation:
      "Sans vouloir la ramener, la seule diff\u00e9rence concr\u00e8te avec des briques, c'est que vous appelez \u00e7a des tartes !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre I',
      episode: 'Les Tartes aux myrtilles',
    },
  },
  {
    citation:
      "J'en ai rien \u00e0 foutre ! Vous pourriez vous marier avec une ch\u00e8vre si \u00e7a vous chante. Et puis, si y en a une qu'est d'accord, rappelez-vous qu'c'est inesp\u00e9r\u00e9 puis sautez sur l'occasion.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Le tourment',
    },
  },
  {
    citation:
      "(\u00c0 Perceval, \u00e0 propos de Merlin)\r\nAu bout d'un moment, il est vraiment druide, c'mec-l\u00e0, ou \u00e7a fait quinze ans qu'il me prend pour un con ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: "L'Imposteur",
    },
  },
  {
    citation: "Qu'est ce qu'ils foutent ces cons de Saxons ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Patience dans la plaine',
    },
  },
  {
    citation:
      "(\u00c0 Gueni\u00e8vre) Merlin, i'sait d\u00e9j\u00e0 pas monter des blancs en neige, alors pr\u00e9parer une potion de polymorphie\u2026 Permettez-moi d'avoir des doutes.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Polymorphe',
    },
  },
  {
    citation:
      "Mais comment voulez-vous que j'vous prouve que j'suis moi, \u00e7a devient d\u00e9bile, \u00e0 la fin !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Polymorphie',
    },
  },
  {
    citation:
      "(\u00c0 L\u00e9odagan) \u00c0 l'heure qu'il est, dans la chambre de votre fille, il y a un tigre, une b\u00eate d\u00e9cha\u00een\u00e9e ! Le petit prince est en marche, et qu'est-ce qu'on dit ? Merci mamie !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre I',
      episode: 'Potion de f\u00e9condit\u00e9',
    },
  },
  {
    citation:
      "Donc, pour r\u00e9sumer, je suis souvent victime des colibris, sous-entendu des types qu'oublient toujours tout. Euh, non\u2026 Bref, tout \u00e7a pour dire, que je voudrais bien qu'on me consid\u00e8re en tant que Tel.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Tel un chevalier',
    },
  },
  {
    citation:
      "Non, moi j'crois qu'il faut qu'vous arr\u00eatiez d'essayer d'dire des trucs. \u00c7a vous fatigue, d\u00e9j\u00e0, et pour les autres, vous vous rendez pas compte de c'que c'est. Moi quand vous faites \u00e7a, \u00e7a me fout une angoisse... j'pourrais vous tuer, j'crois. De chagrin, hein ! J'vous jure c'est pas bien. Il faut plus que vous parliez avec des gens.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Tel un chevalier',
    },
  },
  {
    citation:
      "(Assommant Karadoc) Ah ! oui... j' l'ai fait trop fulgurant, l\u00e0. \u00c7a va ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre I',
      episode: 'Unagi',
    },
  },
  {
    citation:
      '\u00c7a vous fait pas mal \u00e0 la t\u00eate de glandouiller vingt-quatre heures sur vingt-quatre ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre I',
      episode: 'Unagi',
    },
  },
  {
    citation:
      "(\u00c0 Gallessin qui se moque du soin qu'il apporte \u00e0 son physique) Apollon il va se lever et vous le mettre dans le pif son casque !!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre II',
      episode: 'Spangenhelm',
    },
  },
  {
    citation:
      '(\u00c0 Karadoc) Vous vous prenez peut-\u00eatre pour une statue grecque ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre II',
      episode: 'La Chambre',
    },
  },
  {
    citation:
      'Alors le chevalier il crie au Romain : H\u00e9 ! Vous vous prenez pour le Colis\u00e9e !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: 'Le Rassemblement du Corbeau',
    },
  },
  {
    citation:
      "(\u00c0 propos du rassemblement du corbeau) J'aime pas y aller \u00e0 ce truc. \u00c7a me gonfle. Y'a tous les clodos du pays qui portent une barbiche et qui se prennent pour des druides !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: 'Le Rassemblement du Corbeau',
    },
  },
  {
    citation:
      "H\u00e9 toi l\u00e0 bas avec ton casque \u00e0 cornes, pr\u00e9sente-moi ta femme, tu sauras pourquoi t'as des cornes !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: 'Le Rassemblement du Corbeau',
    },
  },
  {
    citation: "Mais \u00e9videmment c'est sans alcool !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: 'Le Rassemblement du Corbeau',
    },
  },
  {
    citation:
      "Non, mais attention ! Si je deviens pape, y'a rien qui m'emp\u00eache de revenir de temps en temps pour faire un petit coucou.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre II',
      episode: "L'Ambition",
    },
  },
  {
    citation:
      "Jamais je ne trahirai. Ave C\u00e9sar ! Ave C\u00e9sar ! [\u2026] La seule chose que je voudrais savoir, c'est si dans deux jours, je change d'avis\u2026 Est-ce que la proposition tient toujours ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre II',
      episode: 'Le Reclassement',
    },
  },
  {
    citation:
      "(Au sujet d'une cath\u00e9drale) Ben, tout ce qui est niveau de prestations, finitions, d\u00e9co... Ben ouais, si vous voulez que \u00e7a ait de la gueule, faut d\u00e9finir un style, une ambiance... Bon, par exemple, on peut faire genre sobre, avec des teintes unies, pierres apparentes... Ou alors, on donne dans le plus chaud, tentures color\u00e9es, statues de gonzesses \u00e0 poil... Ben quoi ?",
    infos: {
      auteur: 'Nicolas Gabion',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre II',
      episode: 'Plus pr\u00e8s de Toi',
    },
  },
  {
    citation:
      'Je vous ai d\u00e9j\u00e0 dit que je pr\u00eate du pognon \u00e0 des taux vraiment pas d\u00e9gueulasses ?',
    infos: {
      auteur: 'Nicolas Gabion',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre II',
      episode: 'Plus pr\u00e8s de Toi',
    },
  },
  {
    citation:
      "Mon p\u00e8re, y dit toujours qu'on arrive jamais en prison par hasard.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Sous les verrous',
    },
  },
  {
    citation:
      "Je voudrais, pour une fois dans ma vie, ne pas avoir l'impression de dormir dans un chenil ! [\u2026] Karadoc, soit vous montez dans ce bain, soit vous me perdez.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Ferrus',
      personnage: 'Mevanwi',
      saison: 'Livre II',
      episode: 'Immacul\u00e9 Karadoc',
    },
  },
  {
    citation:
      "Les chicots, c'est sacr\u00e9 ! Parce que si j'les lave pas maintenant, dans dix ans, c'est tout \u00e0 la soupe. Et l'mec qui me fera manger de la soupe il est pas n\u00e9 !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'Immacul\u00e9 Karadoc',
    },
  },
  {
    citation:
      "Si \u00e7a peut m'\u00e9viter de chlinguer du cul, je peux bien me tremper une ou deux fois par an.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'Immacul\u00e9 Karadoc',
    },
  },
  {
    citation:
      'Franchement, une potion pour faire pisser bleu, \u00e7a presse forc\u00e9ment la minute ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: 'Les Misanthropes',
    },
  },
  {
    citation:
      "Ce que je dis, tout le monde s'en tamponne ! Je gueule, je gueule, j'pourrais gueuler dans le cul d'un poney ce serait pareil !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre II',
      episode: 'La r\u00e9volte',
    },
  },
  {
    citation:
      "Et moi, j'ai sympathis\u00e9 avec un cr\u00e9mier qui m'a expliqu\u00e9 les tenants et les aboutissants de sa profession avec beaucoup de simplicit\u00e9 !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Les tuteurs',
    },
  },
  {
    citation:
      "Moi, je m'en fous, si on me force \u00e0 y retourner, je retiens ma respiration jusqu'\u00e0 qu'on arr\u00eate de me forcer \u00e0 y retourner.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Les tuteurs',
    },
  },
  {
    citation:
      "Moi, je me suis fait d\u00e9rober de l'alimentation tout le long du voyage ! Une v\u00e9ritable d\u00e9robade !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Les tuteurs',
    },
  },
  {
    citation:
      "Quand il a ouvert le ventre du troll, j'ai re\u00e7u un jet d'acide qui m'a pratiquement acidifi\u00e9 !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Les tuteurs',
    },
  },
  {
    citation:
      "Seigneur Bohort, pouvons-nous nous retirer afin d'aller prendre notre go\u00fbter ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Aur\u00e9lien Portehaut',
      personnage: 'Gauvain',
      saison: 'Livre II',
      episode: 'Les Tuteurs',
    },
  },
  {
    citation: 'Des bandits? Nooon... Des gars fut\u00e9s !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre II',
      episode: 'Les Tuteurs ',
    },
  },
  {
    citation:
      "Sire, si vous me les enlevez, c'est un tiers de mes revenus qui fout le camp. Parce qu'ils font pas que boire! Ils mangent l\u00e0 un jour sur deux ...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chapuis',
      personnage: 'Le Tavernier',
      saison: 'Livre II',
      episode: 'Un roi \u00e0 la taverne II',
    },
  },
  {
    citation:
      "J'\u00e9tais tellement en col\u00e8re, je leur ai lanc\u00e9 un de ces regards\u2026 Ils ne sont pas venus chercher la monnaie de leur pi\u00e8ce.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Les Mauvaises Graines',
    },
  },
  {
    citation:
      "(Montrant ses cousins \u00e0 Arthur) Alors l\u00e0, c'est Ashton, lui c'est Rutz, lui c'est Pierce, l'autre derri\u00e8re c'est Pierce aussi, j'ai jamais compris pourquoi, et lui euh, j'crois qu'il a pas d'pr\u00e9nom, tout le monde l'appelle Connard...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'La Garde Royale',
    },
  },
  {
    citation: "Eh ben moi une fois, j'ai piss\u00e9 par la fen\u00eatre !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre II',
      episode: "L'Ivresse",
    },
  },
  {
    citation:
      "(Ivre') PAYS DE GALLES IND\u00c9PENDANT ! J'ai un pivert dans la t\u00eate... C'est normal ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: "L'Ivresse",
    },
  },
  {
    citation:
      '(Imitant Ygerne)Si votre p\u00e8re \u00e9tait vivant, il se retournerait dans sa tombe.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre II',
      episode: "L'Ancien Temps",
    },
  },
  {
    citation:
      '(\u00c0 Bohort) Mais allez-y bon sang, magnez-vous le fion, esp\u00e8ce de grosse dinde !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre II',
      episode: 'Les classes de Bohort',
    },
  },
  {
    citation:
      "Non, je veux dire \u00abmalade mental\u00bb, c'est votre maximum, comme insulte ? Non parce qu'il va falloir passer le cran au-dessus, mon vieux, parce que sinon, on y est encore demain !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre II',
      episode: 'Les classes de Bohort',
    },
  },
  {
    citation:
      'Seigneur Bohort! Je commence \u00e0 en avoir ras le bol de votre comportement de p\u00e9teux alors vous allez me faire le plaisir de me faire une bonne insulte et de vous foutre en rogne une bonne fois pour toutes!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre II',
      episode: 'Les classes de Bohort',
    },
  },
  {
    citation:
      "Si Monsieur et Madame pr\u00e9f\u00e8rent s'envoyer des fions dans l'intimit\u00e9, je peux aussi me retirer.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Vanessa Guedj',
      personnage: 'Angharad',
      saison: 'Livre II',
      episode: 'La Joute Ancillaire',
    },
  },
  {
    citation: '(\u00c0 Arthur)Vous me prenez vraiment pour une conne.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre II',
      episode: "L'Escorte II",
    },
  },
  {
    citation:
      "Ben moi, je sais pas si c'est de naissance ou quoi, mais la vue du bourgeois, \u00e7a me fait de l'a\u00e9rophagie.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chapuis',
      personnage: 'Le Tavernier',
      saison: 'Livre II',
      episode: "L'Escorte II",
    },
  },
  {
    citation:
      "Mais je n'ai rien \u00e0 dire moi, on a rien \u00e0 dire quand on est con comme une chaise !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre II',
      episode: "L'Escorte II",
    },
  },
  {
    citation:
      "J'ai le droit d'\u00eatre 4 jours pas chez moi, et apr\u00e8s chez moi. Mais y a du voyage qui se pr\u00e9pare, et pour soigner les b\u00eates, y a pas que ma tante, y a moi aussi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: "O'Brother",
    },
  },
  {
    citation: "J'te pr\u00e9sente vos hommages au roi Arthur.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: "O'Brother",
    },
  },
  {
    citation:
      "Karadoc, c'est le gars brillant. Le fr\u00e8re, \u00e0 c\u00f4t\u00e9, c'est s\u00fbr... C'est vraiment un gros con.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: "O'Brother",
    },
  },
  {
    citation:
      "Mon fr\u00e8re, il peut pas aller \u00e0 l'\u00e9cole. Quand on lui explique un machin technique, il s'\u00e9vanouit.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: "O'Brother",
    },
  },
  {
    citation:
      'Ou mettre du beurre dans le fond du plat pour pas que le gratin colle.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: "O'Brother",
    },
  },
  {
    citation:
      "Pour savoir s'il va y avoir du vent, il faut mettre son doigt dans le cul du coq.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: "O'Brother",
    },
  },
  {
    citation: "Y'a des m\u00e9chants ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: "O'Brother",
    },
  },
  {
    citation: 'Arthour !\u2026 Couhill\u00e8re !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre II',
      episode: 'Le Dialogue de paix',
    },
  },
  {
    citation:
      'Interpr\u00e8\u00e8\u00e8te ? Interpr\u00e8\u00e8\u00e8te, couhill\u00e8re ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre II',
      episode: 'Le Dialogue de paix',
    },
  },
  {
    citation:
      "Moi, \u00e0 une \u00e9poque, je voulais faire v\u0153u de pauvret\u00e9 (...) Mais avec le pognon que j'rentrais, j'arrivais pas \u00e0 concilier les deux.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Livre II',
      episode: 'Les V\u0153ux',
    },
  },
  {
    citation:
      "(En parlant \u00e0 Arthur d'un cadeau offert par un clan saxon) Mais c'est un petit m\u00e2le, il s'appelle ... \"Ferme ta gueule\", c'est que quand il est n\u00e9 il arr\u00eatait pas de couiner...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'St\u00e9phane Margot',
      personnage: 'Calogrenant',
      saison: 'Livre II',
      episode: 'Le Cadeau',
    },
  },
  {
    citation: 'On vous offre des boucs, \u00e0 vous, maintenant ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre II',
      episode: 'Le Cadeau',
    },
  },
  {
    citation:
      'Vous vous rendez compte que vous amenez des boucs dans ma chambre ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre II',
      episode: 'Le Cadeau',
    },
  },
  {
    citation:
      "Bohort : [\u2026] Et c'est joli.\r\nP\u00e8re Blaise : Et c'est de la merde.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre II',
      episode: 'La Quinte juste',
    },
  },
  {
    citation:
      "Voil\u00e0 ! C'est tout ce qu'y a ! Unisson, quarte, quinte et c'est marre ! Tous les autres intervalles, c'est de la merde ! Le prochain que je chope en train de siffler un intervalle pa\u00efen, je fais un rapport au pape !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre II',
      episode: 'La Quinte juste',
    },
  },
  {
    citation:
      "Pourquoi je peux pas avoir un chien moi ? [\u2026] Mais c'est juste pour mettre des coups de pied dedans ! [\u2026] Moi j'en ai marre de toujours donner des coups de pied aux poules !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Les chiens de guerre',
    },
  },
  {
    citation:
      "Fort heureusement, je tiens \u00e0 pr\u00e9ciser que l'incident n'a fait aucune victime.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre II',
      episode: 'Le Donneur',
    },
  },
  {
    citation: "Fort heureusement, l'incident n'a fait aucune victime.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre II',
      episode: 'Le Donneur',
    },
  },
  {
    citation:
      "Ben Gauvain il est revenu, il s'\u00e9tait plant\u00e9 une \u00e9charde comme \u00e7a dans le doigt\u2026 N'emp\u00eache, si \u00e7a s'infecte, on peut en mourir, j'vous ferais dire.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Le Guet',
    },
  },
  {
    citation:
      "Ah ben j'suis mi-d\u00e9mon, moi, les d\u00e9mons c'est pas foutu pareil. D'ailleurs, dans le calendrier d\u00e9monique je vais bient\u00f4t avoir sept ans. J'aurai le droit d'avoir une mogriave. [\u2026] Une mogriave ? C'est comme un petit chien, mais hyper vilain.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: "Merlin l'archa\u00efque",
    },
  },
  {
    citation:
      "La neige, on l'enl\u00e8ve, elle revient. Toujours. Encore et encore. Et nous, pauvres \u00e2mes chagrines, nous perdons notre regard dans l'horizon blanc de notre solitude.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre II',
      episode: 'Les Neiges \u00c9ternelles',
    },
  },
  {
    citation:
      "(\u00e0 Arthur) H\u00e9 ouais ! C'est pas les id\u00e9es qui vous manquent, c'est la conviction de devoir les r\u00e9aliser !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: "L'Alliance",
    },
  },
  {
    citation:
      "Attendez, on dit chef de clan parce qu'il faut dire quelque chose, hein !\r\nMais Conran, il doit y avoir trois cahutes sur la plage, ils sont une dizaine \u00e0 tout casser, et c'est tous des clodos, alors...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'St\u00e9phane Margot',
      personnage: 'Calogrenant',
      saison: 'Livre II',
      episode: "L'Alliance",
    },
  },
  {
    citation:
      "Ben ils m'ont dit d'aller me faire mettre. Apr\u00e8s, ils m'ont jet\u00e9 des gadins et une marmite avec un restant de soupe de poisson.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Tony Saba',
      personnage: 'Herv\u00e9 de Rinel',
      saison: 'Livre II',
      episode: "L'Alliance",
    },
  },
  {
    citation:
      "Ben j'en ai marre. \u00c7a revient \u00e0 chaque fois sur le tapis \u00e7a. [Arthur: Quoi \u00e7a ?] F\u00e9d\u00e9r\u00e9! D'habitude j'dis rien mais l\u00e0 zut! J'sais pas c'que \u00e7a veut dire. Moi j'veux bien faire des efforts pour comprendre les r\u00e9unions mais faut que chacun y mette du sien aussi. L\u00e0 on est partis pour une heure avec des f\u00e9d\u00e9r\u00e9s par-ci des f\u00e9d\u00e9r\u00e9s par-l\u00e0, j'vais encore rien biter et \u00e7a me gonfle.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: "L'Alliance",
    },
  },
  {
    citation:
      "(En Parlant d'Herv\u00e9 de Rinel) Ah mais c'est \u00e7a qui pue!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'St\u00e9phane Margot',
      personnage: 'Calogrenant',
      saison: 'Livre II',
      episode: "L'Alliance",
    },
  },
  {
    citation: '\u00c0 Kadoc ! \u00c0 Kadoc !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Le Jeu du caillou',
    },
  },
  {
    citation: '(\u00e0 propos du p\u00e8re Blaise) Il ressemble \u00e0 Tatan !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Le Jeu du caillou',
    },
  },
  {
    citation: 'Elle est o\u00f9 la poulette ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Le Jeu du caillou',
    },
  },
  {
    citation: "Karadoc il s'occupe, mais c'est pas ma Tatan !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Le Jeu du caillou',
    },
  },
  {
    citation: 'Les pattes de canaaaaaaaaaaaaaaaaaaaaaaaaaaaaard !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Le Jeu du caillou',
    },
  },
  {
    citation: 'Mooordu! Mooordu! Mordu mordu mordu mordu la ligne !!!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Le Jeu du caillou',
    },
  },
  {
    citation: 'Tatan, elle fait des flans.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre II',
      episode: 'Le Jeu du caillou',
    },
  },
  {
    citation:
      '(\u00c0 Arthur) D\u00eetes tout de suite que vous avez honte de votre \u00e9ducation.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jos\u00e9e Drevon',
      personnage: 'Ygerne',
      saison: 'Livre II',
      episode: "Le secret d'Arthur",
    },
  },
  {
    citation: 'Mais je ne suis pas romain, merde !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: "Le secret d'Arthur",
    },
  },
  {
    citation:
      '(Beurr\u00e9) Sire, vous \u00eates quand m\u00eame un sacr\u00e9 souverain. Accueillir des p\u00e9quenots qui sentent la bouse, comme \u00e7a, dans votre chapeau, ben je dis ch\u00e2teau ! ',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Morel',
      personnage: 'Belt',
      saison: 'Livre II',
      episode: 'Spiritueux',
    },
  },
  {
    citation:
      '(Compl\u00e8tement ivres) (Belt : -Je l\u00e8ve le verre \u00e0 notre souverain) Notre souverain, -rain -rain !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre II',
      episode: 'Spiritueux',
    },
  },
  {
    citation:
      "Je vais le tuer, Sire ! Je vais tellement si tant y taper sa gueule qu'il va d\u00e9c\u00e9der !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre II',
      episode: 'Feue la Vache de Roparzh',
    },
  },
  {
    citation:
      "(\u00c0 Roparzh) Non mais vous allez faire chier le monde pendant combien de temps vous encore avec vos vaches pourries l\u00e0, hein ?! Vous voyez pas que vous \u00eates pas fait pour l'agriculture ?! Hein, vous avez qu'\u00e0 vous recycler dans la mendicit\u00e9 ! En plus, vous avez\u2026 Vous avez d\u00e9j\u00e0 la tenue !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre II',
      episode: 'Feue La Vache De Roparzh',
    },
  },
  {
    citation:
      "Je lui rembourse mes genoux, et si il a fil\u00e9 la v\u00e9role \u00e0 mes b\u00eates, chuis chuis un marteau moi ! Je crame tout moi ! Ma ferme, la sienne, celles des autres, le ch\u00e2teau, j'vais flamber la moiti\u00e9 de la Bretagne.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre II',
      episode: 'Feue La Vache De Roparzh',
    },
  },
  {
    citation:
      'Mais je vous emp\u00eache pas de faire la guerre, mais vous la ferez gu\u00e9ri !',
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Jos\u00e9e Drevon',
      personnage: 'Ygerne',
      saison: 'Livre II',
      episode: 'Mater Dixit',
    },
  },
  {
    citation:
      "(A Lancelot) Han le l\u00e8che-pompe! On vous d\u00e9range Apollon? C'est votre casque qui vous g\u00eane ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Livre II',
      episode: 'Spagenhelm',
    },
  },
  {
    citation:
      "(\u00c0 Arthur) Alors faites des efforts pour arr\u00eater de vous comporter comme un connard ! Moi j'en ai plein le cul de seconder un merdeux de dix ans m\u00eame pas foutu de trouver un Graal ou de faire un gamin \u00e0 sa femme ! Oui alors voil\u00e0, je me suis assis sur votre tr\u00f4ne parce que je fais la moiti\u00e9 de votre boulot\u2026 Et je vous emmerde !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre II',
      episode: 'Le Rebelle',
    },
  },
  {
    citation:
      "(\u00c0 Arthur) Non mais je sais pas comment c'est arriv\u00e9 sur le tapis\u2026 On parlait d'esclavage, je crois. Les autres disaient que vous l'aboliriez sans doute dans l'avenir ; moi j'ai dit que c'est parce que vous aviez pas le courage de l'faire maintenant ; il y en a un qui m'a dit qu'il fallait pas que je me prenne pour le roi et voil\u00e0 ! (un peu g\u00ean\u00e9) Alors j'ai dit\u2026 \"Le roi je l'emmerde\"\u2026 Mais c'\u00e9tait dit sans m\u00e9chancet\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre II',
      episode: 'Le Rebelle',
    },
  },
  {
    citation:
      "La colombe blanche et s\u00e8che,\r\nRetombe souvent sur sa poitrine,\r\nElle vole quand m\u00eame... c'est tr\u00e8s bien,\r\nEt finit sa course dans la prairie de notre enfance.\r\n[\u2026]\r\nL\u00e0 sire j'avoue que c'est pour que \u00e7a rime avec blanche et s\u00e8che. [\u2026]\r\nBen oui c'est une rime triple : Blanche et s\u00e8che, poitrine et prairie de notre enfance. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Les f\u00e9licitations',
    },
  },
  {
    citation:
      "(\u00c0 Arthur) C'est l'anniversaire dans tous les recoins, c'est presque tous les ans qu'on a l'anniversaire. Gr\u00e2ce \u00e0 cet anni... c'est la joie c'est pratique, c'est au moins un principe \u00e0 retenir pour faire la frite... c'est huuuum lalalalala. Cette ann\u00e9e c'est bien, l'anniversaire tombe \u00e0 pic !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Les F\u00e9licitations',
    },
  },
  {
    citation:
      "(\u00c0 propos d'une ancienne vente d'esclave) Attendez, \u00e7a on en a d\u00e9j\u00e0 parl\u00e9 ! Celui de l'autre fois, il m'avait pas dit qu'il \u00e9tait unijambiste.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre II',
      episode: 'Les esclaves',
    },
  },
  {
    citation:
      'En garde, ma biquette ! Je vais vous d\u00e9couper le gras du cul, \u00e7a vous fera \u00e7a de moins \u00e0 trimbaler !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre II',
      episode: 'Excalibur et le Destin',
    },
  },
  {
    citation:
      "J'estime ne pas avoir \u00e0 subir les fantasmes carri\u00e9ristes d'une entit\u00e9 g\u00e9n\u00e9rationnelle r\u00e9actionnaire et oppressive !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Le P\u00e9dagogue',
    },
  },
  {
    citation:
      'Si je fais mon tour pas dans le m\u00eame sens que vous, \u00e7a annule. Mais si je le fais dans le m\u00eame sens que vous, \u00e7a le double !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre II',
      episode: 'Trois Cent Soixante Degr\u00e9s',
    },
  },
  {
    citation:
      "(\u00c0 Arthur)Mouais. M\u00e9fiez-vous des cons. Y en a qui vont beaucoup plus loin qu'on ne pense !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre II',
      episode: 'Excalibur et le Destin ',
    },
  },
  {
    citation: 'Mais vous \u00eates pas mort, esp\u00e8ce de connard ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Always',
    },
  },
  {
    citation: "Oubliez ce que je viens de dire. Le Graal, c'est de la merde.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Always',
    },
  },
  {
    citation:
      "Le seigneur Perceval ne se met jamais en situation dangereuse. Pour \u00e7a, il fait preuve d'une intelligence redoutable.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Always ',
    },
  },
  {
    citation:
      'Avec un pif pareil ils feraient mieux de chercher des truffes plut\u00f4t que de nous emmerder !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'Amen',
    },
  },
  {
    citation:
      "(A Guethenoc) Fleur, unique, belle, vite ! J'ai besoin d'exprimer mon transport. (Guethenoc r\u00e9pond : Pour le transport, vaut mieux la brouette !)",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Arthur in love',
    },
  },
  {
    citation: 'JE NE MANGE PAS DE GRAINES !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre II',
      episode: 'Corpore sano',
    },
  },
  {
    citation:
      "J'estime que si on avale l'\u00e9quivalent de son poids en viande deux fois par jour, il ne faut pas s'\u00e9tonner de ne pas pouvoir mettre un pied devant l'autre sur un champ de bataille.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre II',
      episode: 'Corpore sano',
    },
  },
  {
    citation:
      "Qu'est-ce que c'est que ce style de bouffer des petits machins tout secs et trois gallons de flotte par jour ? [\u2026] Si la jeunesse se met \u00e0 croire \u00e0 ces conneries, on se dirige tout droit vers une g\u00e9n\u00e9ration de d\u00e9pressifs ! Le gras, c'est la vie.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'Corpore sano',
    },
  },
  {
    citation:
      "Dans la vie, j'avais deux ennemis : le vocabulaire et les \u00e9pinards. Maintenant j'ai la botte secr\u00e8te et je bouffe plus d'\u00e9pinards. Merci, de rien, au revoir messieurs-dames.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'La Botte secr\u00e8te II',
    },
  },
  {
    citation: "Eh oui m\u00e9m\u00e9, t'es bien mouch\u00e9e!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: "L'absent",
    },
  },
  {
    citation: 'Et toc ! Remonte ton slibard, Lothard !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: "L'Absent",
    },
  },
  {
    citation:
      "[La politique de l'autruche, c'est] Une politique qui court vite, une politique qui fait des gros \u0153ufs, c'est tout.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'La Cassette',
    },
  },
  {
    citation:
      "Est-ce que vous avez conscience que j'ai de menues responsabilit\u00e9s au sein de ce gouvernement qui me tiennent relativement \u00e9loign\u00e9 des probl\u00e8mes de r\u00e9partition des piaules ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'La chambre',
    },
  },
  {
    citation:
      "Et alors vous allez me lib\u00e9rer les locaux avant ce soir vous entendez, j'veux les turnes impeccables, les draps en tas dans le couloir et les clefs sur la porte, vous retournez cr\u00e9cher dans vos pays de d\u00e9biles et vous foutez le camp de ma salle de bain !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'La chambre',
    },
  },
  {
    citation:
      'Ah, le printemps ! La nature se r\u00e9veille, les oiseaux reviennent, on crame des mecs.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'La F\u00eate du Printemps',
    },
  },
  {
    citation:
      "Le plus int\u00e9ressant, c'est, comment vous arrivez \u00e0 faire un truc aussi immonde avec des ingr\u00e9dients normaux ? [...] Mais c'est incroyable, j'ai l'impression de bouffer de la terre avec de la bouse et du gravier, \u00e7a sent le poulailler, mais c'est du c\u00e9leri et des oignons, c'est prodigieux.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'La F\u00eate du Printemps',
    },
  },
  {
    citation:
      "\u00c7a y est\u2026 je vois trouble. C'est le manque de gras, je me dess\u00e8che.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'La Restriction',
    },
  },
  {
    citation:
      "Sire ! Enfin vous arrivez pour me sauver. [\u2026] De l'hypolip\u00e9mie ! J'ai plus de gras dans le sang. Je vais me mettre \u00e0 peler et \u00e0 perdre mes cheveux\u2026",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'La Restriction',
    },
  },
  {
    citation:
      "(\u00c0 Arthur)\r\nMoi au moins quand je parlemente, c'est pas vicelard.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'La R\u00e9volte',
    },
  },
  {
    citation:
      "Personnellement, la condition paysanne, j'me la taille en biseau, voyez.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'La R\u00e9volte',
    },
  },
  {
    citation:
      "En tout cas, on a cram\u00e9 leur tueur, s'ils veulent le r\u00e9cup\u00e9rer, il est facile \u00e0 transporter.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'Le complot',
    },
  },
  {
    citation: "Vous savez c'que c'est, mon probl\u00e8me ? Trop gentil.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'Le complot',
    },
  },
  {
    citation: 'Arthour !\u2026 Pas changer assiette pour fromage !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre II',
      episode: 'Le Dialogue de Paix',
    },
  },
  {
    citation:
      'Couhill\u00e8re, couhill\u00e8re, couhill\u00e8re ! Ave Cesar ! (lache une caisse)',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre II',
      episode: 'Le Dialogue de Paix',
    },
  },
  {
    citation:
      "D\u00e9carre tes troupes de chez moi ou j'crame ton pays. C'est assez simple comme vocabulaire ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Le Dialogue de Paix',
    },
  },
  {
    citation: 'La fleur en bouquet fane, et jamais ne rena\u00eet !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre II',
      episode: 'Le Dialogue de Paix',
    },
  },
  {
    citation: 'M\u00c9T\u00c9OOOOOOOOO !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre II',
      episode: 'Le Dialogue de Paix',
    },
  },
  {
    citation:
      'Troupa ! Troupa ! Troupatroupatroupatroupa ! TROUPA ! HAHAHAHAHAHAHA ! Troupaskaya !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre II',
      episode: 'Le Dialogue de Paix',
    },
  },
  {
    citation:
      "(Parlant tout seul, \u00e0 table, jouant avec des aliments) Sire, nous voici a l'entr\u00e9e de la grotte... Pied \u00e0 terre mon fid\u00e8le Lancelot, le Graal est a port\u00e9 de main ! Attention sire derri\u00e8re vous ! Le chevalier noir ! Euheuh hrrr... inhin Arthur ta derni\u00e8re heure a sonn\u00e9... Vil f\u00e9lon, ou as tu dissimul\u00e9 le Graal sacr\u00e9 ? Dans ton cul ! Tu paieras pour cet affront ! Tfftftfftfff brrrr... BRRR ! Aaahh... Victoire sire ! Le Graal enfin ! Il est vachement gros ! Attention il est pas du tout comme j'imaginais ! Sire \u00e9coutez, les villageois, ils vous acclament comme des villageois ! Vive Arthur, vive le roi de Bretagne, vive Arthur ! Hourraaa ! Hourraaa !\r\nAu secours, au secours, appelez Merlin ! Merlin arrive, oaaaahhh, apparition inexpliqu\u00e9e, boule de feu boule de feu brrf brrf pffifff. Attention l'ogre des collines bbhhheeuh, disparaissez de mes terres, p\u00e9rissez \u00eatres inf\u00e9rieurs ! Catapuuultttttess catapuuultees catapuuullttes tirrrreeeezzz ! Pfrioou pfriouuu pfrioou pfriouuu pfrioou pfriouuu\u2026 (La servante arrive)\r\nC'est bon vous pouvez d\u00e9barrasser...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: "Le monde d'Arthur",
    },
  },
  {
    citation: "Attention, l'ogre des collines !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: "Le Monde d'Arthur",
    },
  },
  {
    citation:
      "Non mais regardez. Maintenant que j'ai enlev\u00e9 le mie de mon pain, aaah ouh, Arthur ! Le Graal tu t'en iras qu\u00e9rir. Mam mam mam mam, mam.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: "Le Monde d'Arthur",
    },
  },
  {
    citation:
      'Vil f\u00e9lon, o\u00f9 as-tu dissimul\u00e9 le Graal Sacr\u00e9 ?<br/>\r\nDans ton cul !<br/>\r\nTu paieras pour cet affront ! ',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: "Le Monde d'Arthur",
    },
  },
  {
    citation:
      "J' dis d\u00e9j\u00e0 pas merci dans ma langue, alors je vais pas l'apprendre en picte.",
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: "L'Enl\u00e8vement de Gueni\u00e8vre",
    },
  },
  {
    citation:
      "C'est parce que je cherche le Graal que je suis roi. Et du coup que vous \u00eates reine. Si je cherchais pas le Graal, vous seriez encore en Carm\u00e9lide en train de torcher le cul des vaches dans une des fermes de votre con de p\u00e8re !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Le passage secret',
    },
  },
  {
    citation:
      "C'est pas parce qu'un vieux moisi vient nous baver dans les \u00e9tag\u00e8res que \u00e7a vaut forc\u00e9ment que'que chose.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'Le Passage Secret',
    },
  },
  {
    citation:
      'Remarquez\u2026 Bohort, \u00e9claireur\u2026 rien que pour la curiosit\u00e9\u2026',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'Le Passage Secret',
    },
  },
  {
    citation:
      "Au printemps, le sommeil ne cesse d\u00e8s l'aurore. Partout se font ou\u00efr les gazouillis d'oiseaux. La nuit s'ach\u00e8ve enfin dans le souffle des eaux, qui sait combien de fleurs seront tomb\u00e9es encore . Ah, ben oui, c'est s\u00fbr, c'est du chinetoque (po\u00e8me de [[Meng Haoran]] - VIII\u00b0s), hein, les mecs ils se r\u00e2clent un peu la soupi\u00e8re avant de sortir n'importe quelle connerie !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Le Po\u00e8me',
    },
  },
  {
    citation:
      "Y'a trop de clampins qui se disent po\u00e8tes qui sortent la licence po\u00e9tique d\u00e8s qu'ils pondent trois merdes que personne comprend .",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Le Po\u00e8me',
    },
  },
  {
    citation:
      '(\u00c0 Perceval) Arthur, le dragon, Arthur... Y a rien qui gigote l\u00e0-dedans ?',
    infos: {
      auteur: 'Fabien Rault',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Le Portrait',
    },
  },
  {
    citation:
      "Mais qu'est-ce que vous venez me gonfler avec votre p\u00e8re Blaise !",
    infos: {
      auteur: 'Fabien Rault',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'Le Portrait',
    },
  },
  {
    citation:
      "Vous, vous devriez arr\u00eater de sourire. J'vous promets; \u00e7a devient vraiment malsain.",
    infos: {
      auteur: 'Fabien Rault',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Le Portrait',
    },
  },
  {
    citation:
      '[A Karadoc et Perceval] : La boutique est ferm\u00e9e, adressez-vous \u00e0 la concurrence. (Cette r\u00e9plique sera reprise dans le Livre V, lorsque Merlin quitte Kaamelott)',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: 'Les Alchimistes',
    },
  },
  {
    citation:
      'Quel tas de merdier... Non mais s\u00e9rieusement, quel merdier ! Vous vous croyez o\u00f9?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Les Alchimistes',
    },
  },
  {
    citation:
      "Vous croyez vraiment que vous avez les moyens de me convoquer ? Je suis l\u00e0 parce que j'veux bien\u2026 Et si vous m'avez fait d\u00e9placer pour rien, je vous balance quinze jours dans une cage sans boire ni bouffer et je me d\u00e9merde pour que vous chopiez le typhus. Je vous \u00e9coute. (Perceval : bon, on va faire simple.) J'vous l'conseille, oui.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Les Alchimistes',
    },
  },
  {
    citation:
      "(Au ma\u00eetre d'armes)<br/>Vous \u00eates un grand malade mental !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre II',
      episode: 'Les Classes de Bohort',
    },
  },
  {
    citation:
      '(Hurlant \u00e0 plein poumons) M\u00c9\u00c9CR\u00c9\u00c9AAAAAAAAANTS !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre II',
      episode: 'Les Classes de Bohort',
    },
  },
  {
    citation:
      'Mais je vous emmerde, mon petit pote ! Vous commandez ce que je vous dis de commander et vous la fermez bien comme il faut !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Les Classes de Bohort',
    },
  },
  {
    citation:
      "(Hurlant) QUAND J'PENSE QU'J'AI R'FILE MA FILLE A UN ROMAIN ! J'SUIS \u00c0 DEUX DOIGTS D'CR\u00c2MER L'CH\u00c2TEAU !!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: "Le Secret d'Arthur",
    },
  },
  {
    citation:
      "Une fois j'ai crach\u00e9 sur les pompes de l'empereur Justinien, alors je vais pas me gratter pour l'un de ses sous-fifres !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre II',
      episode: "Le Secret d'Arthur",
    },
  },
  {
    citation:
      "(A Arthur) Moi j'crois plut\u00f4t que la prochaine fois, vous nous enverrez bouler tout pareil, c'est pas vrai ? (...) Ha... On en a gros...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Les Exploit\u00e9s',
    },
  },
  {
    citation:
      "(\u00c0 Arthur) Moi, j'serais vous, je vous \u00e9couterais... Non, moi, j'serais nous, je vous... Si moi, j'\u00e9tais vous, je vous \u00e9couterais ! Non, elle me fait chier, cette phrase !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Les Exploit\u00e9s',
    },
  },
  {
    citation:
      'Le Graal par ci, le Graal par l\u00e0. Le Graal par ci, le Graal par l\u00e0. Le Graal par ci, le Graal par l\u00e0. Le Graal par ci, le Graal par l\u00e0...',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'Les Exploit\u00e9s',
    },
  },
  {
    citation: 'Sire, Sire ! On en a gros !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Les Exploit\u00e9s',
    },
  },
  {
    citation:
      'Vous nous utilisez bon gr\u00e9 malgr\u00e9 pour arriver sur la fin.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'Les Exploit\u00e9s',
    },
  },
  {
    citation: "J'ai toujours eu du bol avec l'al\u00e9atoire, moi",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: 'Le Sort Perdu',
    },
  },
  {
    citation:
      "Salut, Sire. Je trouve qu'il fait beau, mais encore frais, mais beau !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Les Volontaires II',
    },
  },
  {
    citation:
      "J'le dis pas (en parlant de la date de son anniversaire). [...] A l'\u00e9poque quand je le disais, tout le monde oubliait de me le souhaiter. \u00c7a me faisait pleurer. \u00c7a m'a gonfl\u00e9, j'ai arr\u00eat\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Le tourment II',
    },
  },
  {
    citation:
      "Une heure avant, je me dis toujours : \u00abTiens, je vais d\u00e9jeuner avec Perceval, \u00e7a me fait plaisir\u00bb. [...] \u00c7a vous la coupe, \u00e7a, hein ? Bon, apr\u00e8s, une fois que j'ai bouff\u00e9 avec vous, je regrette, hein, on est d'accord. Arriv\u00e9 au milieu du repas, j'ai toujours envie de vous \u00e9clater le cr\u00e2ne avec le tranchant de la coupe, l\u00e0, vous voyez, pour vous faire... fermer votre gueule une bonne fois pour toutes... mais sinon... je vous aime.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Le Tourment II',
    },
  },
  {
    citation:
      "Remarquez que moi j'ai un pote poissonnier qui sait boire du lait \u00e0 la paille par les trous de nez !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre II',
      episode: "L'invincible",
    },
  },
  {
    citation: 'Bah \u00e7a va, je picole pas souvent !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre II',
      episode: "L'ivresse",
    },
  },
  {
    citation:
      "Ben c'est pas pour prendre la d\u00e9fense de la petite mais c'est vrai qu'il tabasse le rouquin aujourd'hui.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: "L'ivresse",
    },
  },
  {
    citation:
      'Moi, une fois, j\'\u00e9tais so\u00fbl comme cochon, je me suis fait tatouer "J\'aime le raisin de table" sur la miche droite, et \u00e7a y est toujours !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre II',
      episode: "L'ivresse",
    },
  },
  {
    citation:
      "( parlant tout seul, ivre) On y voit comme \u00e0 travers un pelle l\u00e0-dedans... H\u00e9 lumi\u00e8res !!! Pff bande de fain\u00e9ants... Ah \u00e7a, pour roupiller, vous \u00eates fortiche (s'esclaffe) Les chevaliers de la Table Ronde... CHEVALIERS DE MES DEUX !!! Chuis p... chuis pas roi, moi ? C'est p..., c'est pas moi le roi ?! (d\u00e9gainant Excalibur) Et \u00e7a, c'est du nougat ??? Tout seul, je vais le chercher le Graal, moi, et la vie \u00e9ternelle, c'est pour bibi !!! Et vous, vous irez vous gratter !!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: "L'ivresse",
    },
  },
  {
    citation:
      "Moi une fois, j'\u00e9tais tellement bourr\u00e9 que j'avais l'impression de me faire attaquer de tous c\u00f4t\u00e9s, j'me d\u00e9fendais, j'me d\u00e9fendais... En fait, j'\u00e9tais dans un p\u00e2turage, j'ai tu\u00e9 76 ch\u00e8vres !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: "L'ivresse ",
    },
  },
  {
    citation:
      'Ooooooooh, non mais faire du labyrinthe avec un trou-de-balle pareil, faut dr\u00f4lement de la vaillance, hein !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre II',
      episode: "L'Oubli",
    },
  },
  {
    citation:
      "Bohort, je vous donne l'ordre de vous rendre imm\u00e9diatement en Andalousie pour y rencontrer le chef wisigoth et lui transmettre le message de paix suivant :... \u00abCoucou\u00bb...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Neiges \u00c9ternelles ',
    },
  },
  {
    citation: "C'qui compte, c'est les valeurs !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Perceval et le Contre-sirop',
    },
  },
  {
    citation:
      'L\u00e0, vous faites sirop de vingt-et-un et vous dites : beau sirop, mi-sirop, sirot\u00e9, gagne-sirop, sirop-grelot, passe-montagne, sirop au bon go\u00fbt.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Perceval et le Contre-sirop',
    },
  },
  {
    citation:
      "C'est marrant les petits bouts de fromage par terre. C'est \u00e7a que vous appelez une fondue ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'S\u00e9li et les Rongeurs',
    },
  },
  {
    citation: "Apr\u00e8s demain, \u00e0 partir d'aujourd'hui ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Sept cent quarante-quatre',
    },
  },
  {
    citation:
      "Des p'tits croutons tout vieux genre pour les lapins ? Ouais j'savais pas c'que c'\u00e9tait, dans le doute j'les ai bouff\u00e9s.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'Sept cent quarante-quatre',
    },
  },
  {
    citation:
      "De toutes fa\u00e7ons, les r\u00e9unions de la Table Ronde c'est deux fois par mois. Donc, si le mec il dit apr\u00e8s-demain \u00e0 partir de dans deux jours, suivant s'il le dit \u00e0 la fin du mois, \u00e7a reporte.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Sept cent quarante-quatre',
    },
  },
  {
    citation:
      "(En parlant des clients de la taverne) Quand m\u00eame, ils sont onze. J'ai calcul\u00e9 sur les treize derni\u00e8res ann\u00e9es, dans les deux heures qui pr\u00e9c\u00e8dent le coucher du soleil, vous en \u00eates \u00e0 une moyenne de 8,422.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Sept cent quarante-quatre',
    },
  },
  {
    citation:
      "Par exemple, vous prenez aujourd'hui. Vous comptez sept jours. \u00c7a vous emm\u00e8ne dans une semaine. Et bien on sera exactement le m\u00eame jour qu'aujourd'hui\u2026 \u00c0 une vache pr\u00e8s, hein\u2026 C'est pas une science exacte.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre II',
      episode: 'Sept cent quarante-quatre',
    },
  },
  {
    citation:
      'Je vais rentrer mes vaches, l\u00e0, elles sont accessibles ou faut que je fasse monter un \u00e9chafaudage ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre II',
      episode: 'Silbury Hill',
    },
  },
  {
    citation:
      "Quand vous voyez des gadins de 15 pieds de haut, plant\u00e9s en rond, figurez-vous qu'ils ont pas pouss\u00e9 dans la nuit.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Silbury Hill',
    },
  },
  {
    citation:
      "(\u00c0 Arthur et Lancelot)Ah bah \u00e7a va, excusez moi d'avoir paniqu\u00e9... Finalement c'est pas des d\u00e9mons. C'est juste les pires bestioles de tout l'univers. Mettons deux gardes l\u00e0 devant et allons boire un coup !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre II',
      episode: 'Stargate',
    },
  },
  {
    citation: '(Criant) NOUS ALLONS TOUS MOURIR !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre II',
      episode: 'Stargate',
    },
  },
  {
    citation: "Mais qu'est-ce que que vous faites l\u00e0, trou du cul ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Stargate',
    },
  },
  {
    citation:
      'LEODAGAN CONTRE-ATTAQUE !!! (il passe la balle \u00e0 L\u00e9odagan)',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'The Game',
    },
  },
  {
    citation: "13, 14, 15... Enfin tous les chiffres impairs jusqu'\u00e0 22.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Unagi II',
    },
  },
  {
    citation:
      "Et si je vous dis que vous \u00eates deux glands, l\u00e0, vous avez du p\u00e9remptoire. C'est vous qui voyez.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Unagi II',
    },
  },
  {
    citation:
      "Je gueule ; c'est vrai, j'suis un peu sec, tout \u00e7a, mais pour quelqu'un comme moi qui a facilement tendance \u00e0 la d\u00e9pression c'est tr\u00e8s important ce que vous faites, parce que... Comment vous dire... C'est syst\u00e9matiquement d\u00e9bile mais c'est toujours inattendu. Et \u00e7a c'est tr\u00e8s important pour la... la sant\u00e9 du... du cigare...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Unagi II',
    },
  },
  {
    citation:
      "J'vais vous dire : m\u00eame si le pays \u00e9tait \u00e0 feu et \u00e0 sang, il serait hors de question que j'rate un truc pareil !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Unagi II',
    },
  },
  {
    citation:
      "Mais \u00e7a va, maintenant, arr\u00eatez le cirque, on va pas y passer la journ\u00e9e ! J'vous dis qu'il faut qu'j'aille chez Dagonet, alors j'attends qu'vous vous p\u00e9tiez un bras, et j'me casse, alors magnez-vous l'tronc !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre II',
      episode: 'Unagi II',
    },
  },
  {
    citation:
      "J'voudrais pas faire ma raclette, mais la soir\u00e9e s'annonce pas super.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre II',
      episode: 'Un Roi \u00e0 la Taverne II',
    },
  },
  {
    citation: 'Les villageois, je les emmerde !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre III',
      episode: 'Le chevalier errant',
    },
  },
  {
    citation:
      "Un village assailli de brigands, une femme qui se fait tabasser, une poule qui bo\u00eete, c'est pas les opprim\u00e9s qui manquent ! Et l\u00e0 au moins, j'aurais l'impression de servir \u00e0 quelque chose.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre III',
      episode: 'Le chevalier errant',
    },
  },
  {
    citation:
      "Ou vous m'expliquez pourquoi vous rasez les murs comme un \u00e9vad\u00e9 de cachot, ou vous prenez ma main dans le pif ! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La Cassette II',
    },
  },
  {
    citation:
      "Quand vous vous l'vez pour bouffer, vous me r\u00e9veillez, vous bougez, vous allumez les bougies, vous toussez, bref ! Vous ignorez mon existence ! [...] Eh ben l\u00e0, pas un bruit, pas un mouvement, tout dans le furtif. Vous avez gliss\u00e9 du pageot comme un pet sur une plaque de verglas !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La Cassette II',
    },
  },
  {
    citation: "C'est une catastrophe !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre III',
      episode: "L'Aveu de Bohort",
    },
  },
  {
    citation: "J'ai tout entendu et c'est honteux !!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre III',
      episode: 'Le Renfort Magique',
    },
  },
  {
    citation:
      "Arthur ! Kaamelott, c'est z\u00e9ro ! Des cailloux, des cailloux, des cailloux, \u00e7a m'\u00e9nerve ! !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lan Truong',
      personnage: 'Attila',
      saison: 'Livre III',
      episode: 'Le Fl\u00e9au de Dieu II',
    },
  },
  {
    citation: "Balancez-leur les radasses et qu'ils s'en aillent au diable !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre III',
      episode: 'Le Fl\u00e9au de Dieu II',
    },
  },
  {
    citation: 'Cette fois-ci, on part avec les femmes ! HAHAAAHA !!!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lan Truong',
      personnage: 'Attila',
      saison: 'Livre III',
      episode: 'Le Fl\u00e9au de Dieu II',
    },
  },
  {
    citation:
      "Eh bah mon vieux... Pour \u00e7a comme pour le reste, on n'est pas \u00e0 la hauteur de la l\u00e9gende.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre III',
      episode: 'Le Fl\u00e9au de Dieu II',
    },
  },
  {
    citation:
      "C'est vrai que, dans votre position, il y a plus de chance de subir un si\u00e8ge plut\u00f4t que d'en organiser un.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Axelle Laffont',
      personnage: "S\u00e9friane d'Aquitaine",
      saison: 'Livre III',
      episode: "S\u00e9friane d'Aquitaine ",
    },
  },
  {
    citation:
      "Je suis assez grande pour voir que si vous achetez des troncs d'arbres \u00e0 ce prix-l\u00e0, vous \u00eates en train de vous faire enfler !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Axelle Laffont',
      personnage: "S\u00e9friane d'Aquitaine",
      saison: 'Livre III',
      episode: "S\u00e9friane d'Aquitaine ",
    },
  },
  {
    citation:
      'Quand je vais raconter \u00e0 mon oncle combien vous raquez pour vos b\u00e9liers pourris, il va bien se marrer !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Axelle Laffont',
      personnage: "S\u00e9friane d'Aquitaine",
      saison: 'Livre III',
      episode: "S\u00e9friane d'Aquitaine ",
    },
  },
  {
    citation: "Quoi ? Qu'est-ce qu'y a ? On cherche la marave ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Axelle Laffont',
      personnage: "S\u00e9friane d'Aquitaine",
      saison: 'Livre III',
      episode: "S\u00e9friane d'Aquitaine ",
    },
  },
  {
    citation:
      "Vous croyez quoi ? Que \u00e7a s'trouve dans l'cul des poules, le fric ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Axelle Laffont',
      personnage: "S\u00e9friane d'Aquitaine",
      saison: 'Livre III',
      episode: "S\u00e9friane d'Aquitaine ",
    },
  },
  {
    citation:
      "Le poisson qui \u00e9touffe sur la berge remue plus que celui qui est dans l'eau. C'est bien la preuve de ce que je dis : si on se d\u00e9bat, c'est qu'on est en train de crever.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre III',
      episode: 'Le D\u00e9serteur',
    },
  },
  {
    citation:
      "Non mais je bosse, moi, de jour. Je suis dans l'arm\u00e9e, je tiens pas un stand de cr\u00eapes.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre III',
      episode: 'Le D\u00e9serteur',
    },
  },
  {
    citation: 'Arthour ! On est fort en pomme.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre III',
      episode: 'Le dialogue de paix II',
    },
  },
  {
    citation:
      "Arthour ! Qu'est-ce \u00e0 dire que ceci ? ON EST FORTS ! En pommes\u2026",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre III',
      episode: 'Le dialogue de paix II',
    },
  },
  {
    citation:
      'Non posso volo, no t\u00e9po mayo. Un posso volo, tandolon toulo. Tamasso (pet) tanlamalasso. Tamasso (pet) les oiseaux petits (sur l\'air de "\u00c0 la volette")',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre III',
      episode: 'Le dialogue de paix II',
    },
  },
  {
    citation:
      "Au m\u00eame titre que le bar est ferm\u00e9, sauf si c'est un poisson, tout travail m\u00e9rite salaire !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre III',
      episode: 'Le Professionnel',
    },
  },
  {
    citation:
      "Homme sans m\u00e9tier n'est plus apte \u00e0 exercer une activit\u00e9 professionnelle !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre III',
      episode: 'Le Professionnel',
    },
  },
  {
    citation: "Pr\u00eatez l'oreille sans ristourne !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre III',
      episode: 'Le Professionnel',
    },
  },
  {
    citation:
      "Quand on conna\u00eet trop, on h\u00e9site et c'est un prompt renfort !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre III',
      episode: 'Le Professionnel',
    },
  },
  {
    citation: 'Renomm\u00e9e, renomm\u00e9e, qui es-tu renomm\u00e9e ?!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre III',
      episode: 'Le Professionnel',
    },
  },
  {
    citation:
      "Sire, sachez d\u00e9j\u00e0 que je ne suis pas homme \u00e0 me m\u00e9prendre sur le gaillard d'en face, mon petit doigt me dit que vous en \u00eates pas la moiti\u00e9 d'un !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre III',
      episode: 'Le Professionnel',
    },
  },
  {
    citation:
      'T\u00eate bien pensante est par deux fois force de d\u00e9cision !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre III',
      episode: 'Le Professionnel',
    },
  },
  {
    citation:
      "(Aux jeunes chevaliers) Le Graal, c'est une vraie saloperie, m\u00e9fiez-vous. Un jour c'est un vase, une semaine apr\u00e8s une pierre incandescente. [...] Incandescente, c'est : qui peut accaparer des objets sans resurgir sur autrui.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Les Suppl\u00e9ants',
    },
  },
  {
    citation: "Le caca des pigeons c'est caca, faut pas manger.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre III',
      episode: 'Les Suppl\u00e9ants',
    },
  },
  {
    citation:
      "(Sur l'air de Promenons-nous dans les bois)\r\nPas du tout, les lapins, les lapins, c'est gentil !\r\nLe poissooon ! Le petit poissooon !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre III',
      episode: 'Les Suppl\u00e9ants',
    },
  },
  {
    citation:
      "(\u00c0 Roparzh) Excusez ! Y a moyen de vous entretenir deux secondes ? [Roparzh : Oui, c'est au sujet de quoi-t'est-ce ?] C'est au sujet que ce matin je suis pass\u00e9 par hasard devant vos enclos, et j'ai vu que vous aviez une jolie p'tite poule blanche ! [Roparzh : Oui, tout \u00e0 fait !] Une jolie petite poule 'voyez, le bel animal [\u2026] C'est au sujet qu'en fait c'est la mienne, et que vous allez prendre un pain dans la t\u00eate, mais quelque chose de violent ! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre III',
      episode: 'Feue La Poule de Guethenoc',
    },
  },
  {
    citation:
      '(\u00c0 Roparzh) Messieurs dames, dans quelques instants le grand spectacle de la souffrance. Si vous pouvez t\u00e2cher moyen de vous \u00e9loigner de 25 pieds, bons pieds, hein parce que \u00e7a va gicler un peu. !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre III',
      episode: 'Feue La Poule de Guethenoc',
    },
  },
  {
    citation:
      "(\u00c0 Roparzh) Vous avez tu\u00e9 ma poule ?! Non mais est-ce que vous \u00eates pas un peu marteau, vous ? Parce que moi \u00e7a y est, j'ai les nerfs qui commencent \u00e0 vriller ! Je vous montre : moi je bondis comme \u00e7a, et je vous arrive dessus en piqu\u00e9 diagonal. Et l\u00e0 c'est l'hymne \u00e0 la cruaut\u00e9, hein, un autel dress\u00e9 au culte de la barbarie !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre III',
      episode: 'Feue La Poule de Guethenoc',
    },
  },
  {
    citation:
      "(\u00c0 Guethenoc) Je dirais \u00e9galement que le genou peut partir dans les noix de mani\u00e8re assez soudaine et que \u00e7a pourrait \u00e9ventuellement vous faire sortir les baloches par les oreilles. N'y voyez aucune malice !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre III',
      episode: 'Feue La Poule De Guethenoc',
    },
  },
  {
    citation:
      "Mais tout \u00e0 fait ! En parlant de... d'antidote hein, je souhaiterais vous sugg\u00e9rer un endroit ou vous pourriez \u00e9ventuellement vous le carrer... en vous remerciant !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre III',
      episode: 'Feue La Poule De Guethenoc',
    },
  },
  {
    citation: 'Je suis un mis\u00e9rable !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre III',
      episode: 'Arthur sensei',
    },
  },
  {
    citation:
      "Ils ont rien ramen\u00e9 parce que c'est des d\u00e9biles. Arr\u00eatez d'envoyer Perceval et Karadoc en mission, c'est ridicule !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre III',
      episode: 'Mission',
    },
  },
  {
    citation:
      "C'est vexant de me ressembler ? C'est pour \u00e7a qu'on vous a choisi et qu'on vous a sorti de votre cambrousse, alors du respect ! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre III',
      episode: 'Les Cheveux Noirs',
    },
  },
  {
    citation: "Parce que j'ai le m\u00eame type que les Jumelles maintenant ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre III',
      episode: 'Les Cheveux Noirs',
    },
  },
  {
    citation:
      'Votre p\u00e8re, il a les cheveux noirs. Alors on continue de traiter tout le monde de b\u00e2tard ou on se calme ? ',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre III',
      episode: 'Les Cheveux Noirs',
    },
  },
  {
    citation: '(\u00c0 Bohort) Ben voyons, mon colon !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'Au bonheur des Dames',
    },
  },
  {
    citation:
      '(\u00c0 Gueni\u00e8vre) Bohort il a une femme ! Vous pouvez me la refaire sans trembler des genoux celle-l\u00e0 ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'Au bonheur des Dames',
    },
  },
  {
    citation:
      "(\u00c0 L\u00e9odagan) PIGNOUUUUF! (Puis \u00e0 Elias et Merlin) Bon, et nous alors, qu'est-ce qu'on fait ? On traite ou on se f\u00e2che ? [Merlin : On se f\u00e2che. - Elias (\u00e0 Merlin) : On traite !]",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La Potion de F\u00e9condit\u00e9 II',
    },
  },
  {
    citation:
      "(\u00c0 Merlin) Le jour o\u00f9 vous serez \u00e0 m\u00eame de comprendre les rouages d'une monarchie, on aura soin de venir vous demander votre avis. En attendant, vous faites ce qu'on vous dit, ET VOUS LA BOUCLEZ !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La Potion de F\u00e9condit\u00e9 II',
    },
  },
  {
    citation:
      "(\u00c0 Merlin) Soit vous fabriquez s\u00e9ance tenante une potion de f\u00e9condit\u00e9 qui fonctionne mieux que vos flacons de pisse habituels, soit mon mari ici pr\u00e9sent se fera un plaisir d'outrepasser la hi\u00e9rarchie et de vous mettre une trempe maison !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La Potion de F\u00e9condit\u00e9 II',
    },
  },
  {
    citation:
      "(\u00c0 S\u00e9li, \u00e0 propos de Merlin)Quoi, j'y vais ? Je l'avoine ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre III',
      episode: 'La Potion de F\u00e9condit\u00e9 II',
    },
  },
  {
    citation: "Y'a toujours au moins deux solutions \u00e0 un probl\u00e8me.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre III',
      episode: 'La Potion de F\u00e9condit\u00e9 II',
    },
  },
  {
    citation:
      '(\u00c0 Arthur, L\u00e9odagan et au P\u00e8re Blaise) Je vais vous la faire \u00e0 la cantonade dans le genre trag\u00e9die grecque, t\u00e2chez de vous partager \u00e7a au mieux : LA BOUFFE EST INTERDITE EN DEHORS DES HEURES DES REPAS !!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La restriction II',
    },
  },
  {
    citation: "Alors, le ratichon ! On a un p'tit creux ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La restriction II',
    },
  },
  {
    citation:
      '(Au P\u00e8re Blaise) Jouez pas au con ! Dans votre branche, on fait pas v\u0153u de bouffer l\u00e9ger, quelque chose comme \u00e7a ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La restriction II',
    },
  },
  {
    citation:
      "Des fuites ? Apprenez qu'avec le budget bouffe de Kaamelott, y'a de quoi lever une arm\u00e9e parall\u00e8le et envahir la moiti\u00e9 du monde connu.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La restriction II',
    },
  },
  {
    citation:
      "Les placards sont ferm\u00e9s ! Vous allez retourner dans votre canfouine, au trot, et si la faim persiste, mangez des moustiques : c'est nourrissant, \u00e7a co\u00fbte rien, et \u00e7a d\u00e9barrasse !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre III',
      episode: 'La restriction II',
    },
  },
  {
    citation:
      "Des fois on n'a pas le choix faut sacrifier des jeunes, c'est le grand qu'a dit.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre III',
      episode: 'Witness',
    },
  },
  {
    citation: "Qu'est-ce que vous voulez-vous insinuyer Sire ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre III',
      episode: 'Saponides et detergents',
    },
  },
  {
    citation:
      "Ces bourgeois, ils savent plus quoi inventer ! A force de lire et d'\u00e9crire, ils deviennent tous plus cons les uns qu'les autres.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Serge Papagalli',
      personnage: 'Guethenoc',
      saison: 'Livre III',
      episode: 'Saponides et D\u00e9tergents',
    },
  },
  {
    citation:
      '[Arthur: Pour faire simple: on peut douter de tout sauf de la n\u00e9cessit\u00e9 de se trouver du c\u00f4t\u00e9 des opprim\u00e9s]\r\nAh bon! C\'est marrant parce que mon p\u00e8re, il a une phrase presque pareil: "On peut douter de tout sauf de la n\u00e9cessit\u00e9 de se trouver du c\u00f4t\u00e9 de celui qui a le pognon".',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre III',
      episode: 'La Chevalerie',
    },
  },
  {
    citation:
      "(Gauvain: Excusez nous mon oncle, notre vocabulaire n'est pas tres fourni) Ouais bah vous encore \u00e7a va, moi, m\u00eame le mot vocabulaire je suis pas s\u00fbr \u00e0 100% !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre III',
      episode: 'La Chevalerie',
    },
  },
  {
    citation: "La chevalerie, c'est pas l\u00e0 o\u00f9 on range les chevaux ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre III',
      episode: 'La Chevalerie',
    },
  },
  {
    citation:
      "Noblesse bien remis\u00e9e ne trouve jamais l'hiver \u00e0 sa porte... Non, porte close...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Aur\u00e9lien Portehaut',
      personnage: 'Gauvain',
      saison: 'Livre III',
      episode: 'La Chevalerie',
    },
  },
  {
    citation:
      "(\u00c0 propos d'une catapulte) Est-ce qu'on peut s'en servir pour donner de l'\u00e9lan \u00e0 un pigeon ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre III',
      episode: "L'\u00e9tudiant",
    },
  },
  {
    citation:
      "(\u00c0 Gr\u00fcd\u00fc) Quand on est idiot, on plante des carottes on ne s'occupe pas de s\u00e9curit\u00e9 !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre III',
      episode: "L'assembl\u00e9e des Rois 2e partie",
    },
  },
  {
    citation:
      "J'ai p\u00e9n\u00e9tr\u00e9 leur lieu d'habitation de fa\u00e7on subrogative [\u2026] en tapinant.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Tony Saba',
      personnage: 'Herv\u00e9 de Rinel',
      saison: 'Livre III',
      episode: "L'Espion",
    },
  },
  {
    citation:
      "En voil\u00e0 une bonne chose, faisons la liste des cons, et puis \u00e7a me donnera l'occasion de gratter du papier.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre III',
      episode: 'Le M\u00e9diateur',
    },
  },
  {
    citation:
      "Vous n'\u00eates pas le plus fort, M\u00f4ssieur \u00c9lias ! Quand on confond un clafoutis et une part de clafoutis, on vient pas la ramener !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre III',
      episode: 'Les D\u00e9fis De Merlin II',
    },
  },
  {
    citation:
      "(\u00c0 Bohort qui vient de lui d\u00e9clarer que Lancelot est amoureux d'elle)Mais qu'est-ce que vous d\u00e9connez, Seigneur Bohort ? Vous avez picol\u00e9 ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre III',
      episode: 'Hollow Man',
    },
  },
  {
    citation:
      'J\'ai dit "elle aussi" ? [\u2026] Oh, \u00e7a m\'\u00e9tonne, \u00e7a... Vous \u00eates s\u00fbr que j\'ai pas dit "elle est sympa" ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Audrey Fleurot',
      personnage: 'La Dame du Lac',
      saison: 'Livre III',
      episode: 'Hollow Man',
    },
  },
  {
    citation:
      "En m\u00eame temps, admettez que me tuer n'aurait pas beaucoup de sens ! Vos nerfs seraient soulag\u00e9s dans un premier temps, je ne dis pas, mais si vous consid\u00e9rez la situation avec un minimum de recul, vous vous apercevrez que le transport de votre hargne sur ma personne n'est pas d\u00e9parti d'une certaine forme d'absurdit\u00e9. Et c'est l\u00e0 que j'ai envie de dire : est-ce que \u00e7a vaut bien le coup ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre III',
      episode: 'La Dispute I',
    },
  },
  {
    citation:
      "Qu'est-ce que vous voulez que je d\u00e9veloppe ? Vous n'\u00eates pas de taille \u00e0 mener la qu\u00eate du Graal, vous n'avez pas les \u00e9paules. De plus comme vous \u00eates incapable de vous s\u00e9parer de la bande de pantins ridicules qui vous sert de gouvernement, vous passez pour un faible et un laxiste aux yeux du peuple et des pays voisins, et puis je parle pas des dieux \u00e9videmment, ceux-l\u00e0, s'ils pouvaient parler... [\u2026] Et m\u00eame tout nu et sur un pied, j'irai toujours cent fois plus loin que vous et votre risible compagnie de cr\u00e9tins !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre III',
      episode: 'La Dispute',
    },
  },
  {
    citation:
      "Vous savez que j'occupe \u00e0 mi-temps ma place \u00e0 la Table Ronde, et que l'autre moiti\u00e9 de mon temps je reprends ma place de chevalier errant... Eh bien tout \u00e7a, c'est fini. [ARTHUR : C'est-\u00e0-dire, vous revenez d\u00e9finitivement ?] Non, je 'pars' d\u00e9finitivement.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre III',
      episode: 'La Dispute',
    },
  },
  {
    citation:
      "Eh bien puisque c'est \u00e7a, allez-y : d\u00e9truisez tout ! Entretuez-vous ! Mettez la Bretagne \u00e0 feu et \u00e0 sang ! Et ne comptez plus sur moi pour vous amener mes g\u00e2teaux \u00e0 la pur\u00e9e de pomme dont vous \u00eates si friand ! Dor\u00e9navant, vous devrez vous les cuisiner vous-m\u00eame ! ENTRE DEUX MISES \u00c0 SAC !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre III',
      episode: 'La Dispute II',
    },
  },
  {
    citation:
      "(\u00c0 Perceval) Est-ce que vous avez souvenir qu'il se soit pass\u00e9 quelque chose entre Mevanwi et moi ?\r\nPerceval : \u00c0 quel niveau ?\r\nAu niveau... du chou rouge.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'Ablutions',
    },
  },
  {
    citation:
      "(\u00c0 la Dame du Lac, que tout le monde peut voir, sauf Arthur) Nooon, mais c'est bon, ne me prenez pas pour une bille, non plus ! Vous \u00eates la Dame du Lac.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre III',
      episode: 'Aux Yeux de Tous II',
    },
  },
  {
    citation:
      '[En parlant de la Dame du Lac que, pour une fois, tout le monde, sauf Arthur, peut voir] Ouh l\u00e0l\u00e0! elle va pas me gonfler longtemps, la rouquine !!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Aux Yeux De Tous II',
    },
  },
  {
    citation:
      "C'est moi qui remporte le tour. Quand on remporte le tour \u00e0 Sloubi, on a quatorze solutions possibles : soit on annule le tour ; soit on passe ; soit on change de sens ; soit on recalcule les points ; soit on compte ; soit on divise par six ; soit on jette les bouts de bois de quinze pouces, \u00e7a c'est quand on joue avec les bouts de bois ; soit on se couche ; soit on joue sans atouts. Et apr\u00e8s y'a les appels : plus un ; plus deux ; attrape oiseaux ; r\u00e9goudon ; ou chante Sloubi. [...] Comme vous \u00eates second, vous avez plus que dix-neuf solutions possibles : soit vous passez ; soit vous sciez en deux les cinquante poutrelles de trente pieds, mais \u00e7a c'est quand on joue avec les bouts de bois. Sinon c'est les relances : doublette ; jeu carr\u00e9 ; jeu de piste ; jeu gagnant ; jeu moulin ; jeu-jeu ; joue-jeu ; joue-joue ; joue-ji\u00e9 ; joue-ganou ; gagnar ; catakt ; tacat ; cacatac ; cagat-cata et ratacat-mic. Ou : chante Sloubi. Nous, on va faire que chante Sloubi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Chante Sloubi',
    },
  },
  {
    citation:
      "Est-ce que vous avez assez de d\u00e9s pour remplir un seau comme \u00e7a ? [Le tavernier n'en a que trois] C'est plus facile d'en tirer cent ou deux-cents d'un coup et d'additionner, parce que l\u00e0 avec trois, on va \u00eatre oblig\u00e9s de tirer quarante fois de suite \u00e0 chaque tour.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Chante Sloubi',
    },
  },
  {
    citation:
      'Sloubi 1, sloubi 2, sloubi 3, sloubi 4, sloubi 5 [...] sloubi 324, sloubi 325!...',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Chante Sloubi',
    },
  },
  {
    citation:
      "Parce que d'un point de vue sant\u00e9 publique, il vaut mieux bouffer \u00e7a une fois par mois que de la merde tous les jours. Je vais vous dire, \u00e0 ce niveau l\u00e0, c'est plus de la gastronomie, c'est de l'\u00e9rotisme.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: 'Cuisine et D\u00e9pendances',
    },
  },
  {
    citation:
      "Cette histoire de Graal, \u00e7a a assez tra\u00een\u00e9 ! [\u2026] Si c'est pas moi qui prend les choses en main, on y est encore dans cent piges\u2026 [\u2026] Pr\u00e9parez la fiesta, j'suis un h\u00e9ros !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: "La Corne d'abondance",
    },
  },
  {
    citation: "Oh le con! Mais il est pas fini d'affiner! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: 'La Grande Bataille',
    },
  },
  {
    citation:
      "On tombe sur le fric, comme \u00e7a, du premier coup ! On s'est m\u00eame pas fait un cor au pied !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: 'La menace fant\u00f4me',
    },
  },
  {
    citation:
      "SI VOUS VOULEZ QU'ON SORTE LES PIEDS DEVANT, FAUDRA NOUS PASSER SUR L'COOOORPS !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'La menace fant\u00f4me',
    },
  },
  {
    citation:
      "Le Graal, je sais pas o\u00f9 il est mais il va y rester un moment, c'est moi qui vous l'dis !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'La mission',
    },
  },
  {
    citation:
      "Les 3 actes, c'est les bonnes femmes qui sont mi-taupes mi-d\u00e9esses, et qui ont forc\u00e9 les mecs de Bethl\u00e9em \u00e0 construire les pyramides.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'La po\u00e9tique, 1{{exp|\u00e8re}}partie',
    },
  },
  {
    citation:
      "Quand on file une histoire \u00e0 un copiste, pour qu'il en fasse 3 exemplaires, qu'\u00e7a va lui prendre trois mois,et qu'\u00e7a va co\u00fbter la peau des fesses, c'est pas pour raconter le temps qu'il fait ou ce que vous avez bouff\u00e9 le midi, hein, il faut qu'\u00e7a p\u00e8te !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'La po\u00e9tique - II\u00e8me partie ',
    },
  },
  {
    citation:
      "Moi, je dis que c'est magique \u00e0 cause des merdes qui pendouillent, mais \u00e7a se trouve, c'est pas \u00e7a ...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre III',
      episode: "L'arche de transport",
    },
  },
  {
    citation:
      "Ave Cesar, rosae rosam, et spiritus rex ! Ah non, parce que l\u00e0, j'en ai marre !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre III',
      episode: "L'Assembl\u00e9e des rois 2eme partie",
    },
  },
  {
    citation:
      'Je ne reviendrai plus jamais, cette fois je le dis, je le fais, je reste chez moi. Merde. \u00c7a suffit. ',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre III',
      episode: "L'Assembl\u00e9e des rois 2eme partie",
    },
  },
  {
    citation:
      'Les m\u00f4mes maintenant, ils lisent, ils lisent, ils lisent et r\u00e9sultat...ils sont encore puceaux \u00e0 10 ans...',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre III',
      episode: "L'Assembl\u00e9e des rois 2eme partie",
    },
  },
  {
    citation:
      "Moi, j'ai appris \u00e0 lire, et ben je souhaite \u00e7a \u00e0 personne !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre III',
      episode: "L'Assembl\u00e9e des rois 2eme partie",
    },
  },
  {
    citation:
      "Tempora mori, tempora mundis recorda. Voil\u00e0. Eh bien \u00e7a, par exemple, \u00e7a veut absolument rien dire, mais l'effet reste le m\u00eame, et pourtant j'ai jamais foutu les pieds dans une salle de classe attention !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre III',
      episode: "L'Assembl\u00e9e des rois 2eme partie",
    },
  },
  {
    citation:
      '(\u00c0 Dame Ygerne, qui lui raconte son cauchemar)Ah, \u00e7a y est, il arrive le pipi !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre III',
      episode: 'La veill\u00e9e',
    },
  },
  {
    citation:
      "(\u00c0 Dame Ygerne, qui lui raconte son cauchemar)\u00c7a vous ennuie, si j'me taille les veines?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre III',
      episode: 'La veill\u00e9e',
    },
  },
  {
    citation:
      '(\u00c0 Dame Ygerne, qui veut lui raconter son cauchemar)Oh je vous en prie, faites, \u00e7a fait tellement longtemps que je ne me suis pas \u00e9vanouie dans mes urines...',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre III',
      episode: 'La veill\u00e9e',
    },
  },
  {
    citation:
      "Vous savez, euh si on fait fouetter les ouvriers et qu'on menace de les br\u00fbler vifs, ils peuvent peut-\u00eatre finir tout \u00e0 l'heure, hein... (regard d\u00e9sesp\u00e9r\u00e9 \u00e0 Arthur) Non ? Oh bon, bah... je vais... pleurer un petit peu... (sanglots)... Excusez-moi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre III',
      episode: 'La veill\u00e9e',
    },
  },
  {
    citation:
      "La religion c'est le bordel, admettez-le ! Alors laissez-moi prier c'que j'veux tranquille. 'M'emp\u00eache pas d'la chercher, votre saloperie de Graal.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'Le Culte Secret',
    },
  },
  {
    citation:
      "\r\n[Bohort: \u00c7a d\u00e9pend, Attila vous le comptez comme un Hun ?]\r\nBen \u00e9videmment, j'le compte pas comme un Ib\u00e8re !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'Le fl\u00e9au de Dieu II',
    },
  },
  {
    citation:
      "Eh bien, c'est l'histoire d'un petit ourson qui s'appelle\u2026 Arthur. Et y'a une f\u00e9e, un jour, qui vient voir le petit ourson et qui lui dit : Arthur tu vas partir \u00e0 la recherche du Vase Magique. Et elle lui donne une \u00e9p\u00e9e hmm\u2026 magique (ouais, parce qu'y a plein de trucs magiques dans l'histoire, bref) alors le petit ourson il se dit : \"Heu, chercher le Vase Magique \u00e7a doit \u00eatre dr\u00f4lement difficile, alors il faut que je parte dans la for\u00eat pour trouver des amis pour m'aider.\" Alors il va voir son ami Lancelot\u2026 le cerf (parce que le cerf c'est majestueux comme \u00e7a), heu, Bohort le faisan et puis L\u00e9odagan\u2026 heu\u2026 l'ours, ouais c'est un ours aussi, c'est pas tout \u00e0 fait le m\u00eame ours mais bon. Donc L\u00e9odagan qui est le p\u00e8re de la femme du petit ourson, qui s'appelle Gueni\u00e8vre la truite\u2026 non, non, parce que c'est la fille de\u2026 non c'est un ours aussi puisque c'est la fille de l'autre ours, non parce qu'apr\u00e8s \u00e7a fait des machins mixtes, en fait un ours et une truite\u2026 non en fait \u00e7a va pas. Bref, sinon y'a Gauvain le neveu du petit ourson qui est le fils de sa s\u0153ur Anna, qui est rest\u00e9e \u00e0 Tintagel avec sa m\u00e8re Igerne la\u2026 bah non, ouais du coup je suis oblig\u00e9 de foutre des ours de partout sinon on pige plus rien dans la famille\u2026 Donc c'est des ours, en gros, enfin bref\u2026 Ils sont tous l\u00e0 et donc Petit Ourson il part avec sa troupe \u00e0 la recherche du Vase Magique. Mais il le trouve pas, il le trouve pas parce qu'en fait pour la plupart d'entre eux c'est\u2026 c'est des nazes : ils sont hyper mous, ils sont b\u00eates, en plus y'en a qu'ont la trouille. Donc il d\u00e9cide de les faire bruler dans une grange pour s'en d\u00e9barrasser\u2026 Donc la f\u00e9e revient pour lui dire : \"Attention petit ourson, il faut \u00eatre gentil avec ses amis de la for\u00eat\" quand m\u00eame c'est vrai, et du coup Petit Ourson il lui met un taquet dans la t\u00eate \u00e0 la f\u00e9e, comme \u00e7a : \"BAH !\". Alors la f\u00e9e elle est comme \u00e7a et elle s'en va\u2026 et voil\u00e0 et en fait il trouve pas le vase. En fait il est\u2026 il trouve pas\u2026 et Petit Ourson il fait de la d\u00e9pression et tous les jours il se demande s'il va se tuer ou\u2026 pas\u2026",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'Legenda',
    },
  },
  {
    citation:
      "Sans blague on pourrait pas f\u00eater la mort des mecs que je connais pour une fois ? Comment \u00e7a ? C'est toujours la mort de vos potes \u00e0 vous que l'on f\u00eate, moi dans quatre jours c'est l'anniversaire de la mort d'un oncle \u00e0 moi, sans faire expr\u00e8s il s'est tir\u00e9 dessus avec un arc.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: "Le Jour D'Alexandre",
    },
  },
  {
    citation:
      "La joie de vivre et le jambon, y'a pas trente-six recettes du bonheur !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: 'Le L\u00e9gislateur',
    },
  },
  {
    citation:
      "Bon par exemple moi j'adore les fraises, bon bah si j'bouffe 3 bassines de fraises en 1 heure ah bah j'choppe la chiasse hein, j'suis comme tout l'monde hein...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre III',
      episode: 'Le Magnanime',
    },
  },
  {
    citation:
      'Je vous ai vu une fois dans une carriole, tir\u00e9e par un cheval. Enfin, la carriole tir\u00e9e par un cheval.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: "L'Empress\u00e9e",
    },
  },
  {
    citation:
      "Parce que mon couteau pour le p\u00e2t\u00e9, euuh, y'a rien \u00e0 faire, jm'en tape.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: 'Le Porte Bonheur',
    },
  },
  {
    citation:
      "Dans le Languedoc, ils m'appellent Proven\u00e7al. Mais c'est moi qui m'suis gour\u00e9 en disant mon nom. Sinon, en Bretagne, c'est le Gros Faisan au sud, et au nord, c'est juste Ducon ..",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Le Sanglier De Cornouailles',
    },
  },
  {
    citation: "Le Saint-Suaire ? Vous avez foutu en l'air le Saint-Suaire ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'Les clous de la sainte croix',
    },
  },
  {
    citation:
      "(\u00c0 Perceval) Vous racontez ce qui s'est pass\u00e9, d'un coup, sans vous arr\u00eater, et si vous changez des trucs, je vous envoie le registre \u00e0 travers la gueule. Vu ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre III',
      episode: 'Les clous de la Sainte Croix',
    },
  },
  {
    citation:
      "Mais c'est pas vrai mais c'est pas vrai mais c'est pas vraiiiiiiii !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: 'Les clous de la Sainte Croix',
    },
  },
  {
    citation:
      "C'est normal, c'est en se cassant la gueule qu'on apprend \u00e0 marcher. Combien de fois j'ai failli m'\u00e9touffer avec un os de lapin. Il faut jamais se laisser abattre par un \u00e9chec, c'est \u00e7a le secret.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: 'Le Tourment III',
    },
  },
  {
    citation:
      "La neige qui poudroie dans la solitude de notre enfance. Qu'est ce que vous dites de \u00e7a ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre III',
      episode: 'Le Tourment III',
    },
  },
  {
    citation:
      "(A Arthur) \u00c7a prouve que j'ai de l'ubiquit\u00e9... De l'humilit\u00e9 ? C'est pas quand il y a des infiltrations ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: "L'Etudiant",
    },
  },
  {
    citation:
      "Ah, mais c'est de l\u00e0 que \u00e7a vient ! Quand on dit \"\u00e7a va comme sur des roulettes\". En fait \u00e7a veut dire qu'le mec il peut balancer un morceau de rocher comme une catapulte, il continue quand m\u00eame d'avancer d'fa\u00e7on mobile. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: "L'Etudiant",
    },
  },
  {
    citation:
      "\u00c0 ROULEEEEETTES !! HOULA... J'l'ai un peu trop gueul\u00e9 \u00e7a, non ? \u00c0 roulettes.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: "L'Etudiant",
    },
  },
  {
    citation:
      "Une maquette ?! Vous avez pas dit qu'c'\u00e9tait une catapulte ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: "L'Etudiant",
    },
  },
  {
    citation:
      'Non, vous, vous vous maravez. Quand on a pas de technique, il faut y aller \u00e0 la zob.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Morituri',
    },
  },
  {
    citation:
      'Le code c\'est "le code" ? \u00c7a va, ils se sont pas trop cass\u00e9 le bonnet, pour l\'trouver celui-l\u00e0 !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Poltergeist',
    },
  },
  {
    citation:
      "Y'a du grabuge alors on appelle les 2 couillons... On met les glandus \u00e0 profit !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre III',
      episode: 'Poltergeist',
    },
  },
  {
    citation:
      "(\u00c0 Sefriane d'aquitaine) Mais votre oncle mes b\u00e9liers pourris il va se les prendre dans le fion !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre III',
      episode: "Seriane d'aquitaine",
    },
  },
  {
    citation:
      "Tout le monde le sait, en Carm\u00e9lide, que vous \u00eates une patate. Seulement, \u00e7a passe parce que les gens savent que c'est moi qui tire les ficelles dans l'arri\u00e8re boutique.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre IV',
      episode: 'Tous les matins du monde',
    },
  },
  {
    citation:
      "Vous n'avez aucun courage. Aucune dignit\u00e9. Votre manque de foi est en train de tout d\u00e9truire.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Audrey Fleurot',
      personnage: 'La Dame du Lac',
      saison: 'Livre IV',
      episode: 'Tous Les Matins du Monde',
    },
  },
  {
    citation:
      "Vous allez me l\u00e2cher les noyaux, oui ? Y'a pas assez \u00e0 faire dans ce camp sans venir me les p\u00e9ter toutes les deux minutes ?! Faut forc\u00e9ment que je vous colle un ordre \u00e0 chaque fois qu'il s'agit de ratisser un tas de feuilles ?! Mettez moi de l'ordre dans ce campement nom d'un chien ! Vous \u00eates pas \u00e0 Kaamelott ici ! Je veux pas voir tra\u00eener un quignon d'pain c'est compris ?! Revue de d\u00e9tail dans un quart d'heure, allez zou !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre IV',
      episode: 'Raisons et sentiments',
    },
  },
  {
    citation:
      'Attendez, je veux \u00eatre l\u00e0 quand vous lui mettez une chasse !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre IV',
      episode: 'Le privil\u00e9gi\u00e9"',
    },
  },
  {
    citation: '(A Dagonnet) Oui... Ben non !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Livre IV',
      episode: 'Dagonnet et le cadastre',
    },
  },
  {
    citation: 'Et surtout : pensez POUVOIR ! ',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre IV',
      episode: 'Les Liaisons Dangereuses',
    },
  },
  {
    citation:
      'Nous, si vous r\u00e9fl\u00e9chissez bien, on a quatre bras. Avec les v\u00f4tres, \u00e7a fait six ! Posez tout \u00e7a sur le tr\u00f4ne, imaginez un peu les possibilit\u00e9s\u2026',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandra Saadoun et Magali Saadoun',
      personnage: 'Les Jumelles du p\u00eacheur',
      saison: 'Livre IV',
      episode: 'La Parade',
    },
  },
  {
    citation:
      "Par exemple, je trouve que quand elle est partie du jour au lendemain sans pr\u00e9venir, elle s'est conduite comme la reine des putes. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Pascal',
      personnage: 'Demetra',
      saison: 'Livre IV',
      episode: 'La Parade',
    },
  },
  {
    citation:
      "Ah bah en fait, c'est tout moisi seigneur breton. Parce qu'en plus, il faut que je nourrisse des mecs.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre IV',
      episode: 'Seigneur Caius',
    },
  },
  {
    citation:
      "- H\u00e9 les connards ! Vous pouvez faire griller un porcelet s'il vous pla\u00eet ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre IV',
      episode: 'Seigneur Caius',
    },
  },
  {
    citation:
      "MAIS ARRETEZ J'ARRETE PAS DE RETROUVER DES PTITES BOULETTES DE CACA PARTOUT ! Me prenez pas pour un con, sans blague, c'\u00e9tait une bergerie ici ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre IV',
      episode: 'Seigneur Caius',
    },
  },
  {
    citation:
      "Non, mais l\u00e0 vous auriez pu pr\u00e9venir qu'il y avait un couvert de plus. Bon \u00e7a va que j'ai pas fait \u00e0 manger, mais bon, c'est chaud.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre IV',
      episode: 'Seigneur Caius',
    },
  },
  {
    citation:
      "Dans ma chambre c'est le bordel, \u00e7a pue et y a des charen\u00e7ons.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: 'Seigneur Ca\u00efus',
    },
  },
  {
    citation:
      "(\u00c0 Arthur et \u00e0 Mevanwi ensemble dans leur lit) Entre le calme plat du temps de Madame et la gu\u00e9rilla de cette nuit, je me permets de dire \u00e0 Monsieur que Monsieur n'a pas bien le sens de la mesure. Monsieur est en dents de scie...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Vanessa Guedj',
      personnage: 'Angharad',
      saison: 'Livre IV',
      episode: 'La chambre de la Reine',
    },
  },
  {
    citation:
      "Selon Karadoc, un lit n'est pas un lit s'il n'y a pas de quoi manger une semaine dedans sans en sortir.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Ferrus',
      personnage: 'Mevanwi',
      saison: 'Livre IV',
      episode: 'La Chambre de la reine',
    },
  },
  {
    citation:
      "Une fois j'ai dormi avec un porc pendant une semaine. [Arthur: Un porc entier?]\r\nUn porc vivant.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Caroline Ferrus',
      personnage: 'Mevanwi',
      saison: 'Livre IV',
      episode: 'La Chambre de la reine',
    },
  },
  {
    citation:
      "Au d\u00e9part, je devais vous guider vers la lumi\u00e8re, vers le Graal. Mais vous, vous pr\u00e9f\u00e9rez n'en faire qu'\u00e0 votre t\u00eate : Lancelot s'en va ? Pas grave, qu'il s'en aille ! Gueni\u00e8vre part avec lui ? Eh ben qu'elle se tire, \u00e7a fera de l'air ! Il faut jamais convoiter la femme d'un autre chevalier ? Ben eh, je m'en fous, moi. Je la convoite quand m\u00eame ! R\u00e9sultat : Bannie ! Ah vous pouvez \u00eatre fier de vous ! (elle pleure)",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Audrey Fleurot',
      personnage: 'La Dame du Lac',
      saison: 'Livre IV',
      episode: 'La R\u00e9voqu\u00e9e',
    },
  },
  {
    citation:
      "Je sais ni boire, ni manger, ni m'habiller, ni me laver, ni rien ! Vous sentez que je vais \u00eatre un fardeau pour vous, ou pas ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Audrey Fleurot',
      personnage: 'La Dame du Lac',
      saison: 'Livre IV',
      episode: 'La R\u00e9voqu\u00e9e',
    },
  },
  {
    citation:
      "(Terroris\u00e9e) Ils m'ont ba... Ils m'ont ba... (Arthur essaie divers mots) ILS M'ONT BANNIE!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Audrey Fleurot',
      personnage: 'La Dame du Lac',
      saison: 'Livre IV',
      episode: 'La R\u00e9voqu\u00e9e',
    },
  },
  {
    citation:
      "(\u00c0 Arthur au sujet de Mevanwi) Je dois avouer que la chose a du bon, si c'est pour m'\u00e9viter la vue de la grande d\u00e9carade, le d\u00e9fil\u00e9 des nouvelles t\u00eates, la parade des amoureuses \u00e0 calcul, les poids lourds de la jambe l\u00e9g\u00e8re, le festival de la morue, en somme...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Vanessa Guedj',
      personnage: 'Angharad',
      saison: 'Livre IV',
      episode: 'Les Bonnes',
    },
  },
  {
    citation:
      'Ah bah non ! On va leur foutre deux, trois pierres dans la gueule et on va allumer des incendies... Mais faut pas d\u00e9conner, ils y sont pour rien.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre IV',
      episode: 'La R\u00e9volte III',
    },
  },
  {
    citation:
      "Bon ben je vous pr\u00e9viens, je vous \u00e9coute 30 secondes pas une de plus. Si il y a un mot plus haut que l'autre, je vous mets toute la tartine dans la gueule et je rentre chez moi, j'ai pas que \u00e7a \u00e0 glander.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre IV',
      episode: 'La R\u00e9volte III',
    },
  },
  {
    citation:
      "Non mais vous croyez pas qu'j'marche au sifflet ! Mais qu'est-ce que j'en ai \u00e0 foutre de vos horaires ? J'arrive quand j'arrive et puis c'est tout.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre IV',
      episode: 'La R\u00e9volte III',
    },
  },
  {
    citation:
      "Et si on envoyait quelqu'un qui se faufile dans leur camp sans se faire rep\u00e9rer pour observer leurs faits et gestes ? [\u2026] Ou alors, \u00e7a fait doublon avec l'espionnage ? Je me rends pas compte.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: 'Le Rapport',
    },
  },
  {
    citation:
      "(\u00c0 M\u00e9vanwi) : Oh bah c'est normal \u00e7a, moi si j'avais foutu un royaume en l'air et qu'la p\u00e9rennit\u00e9 d'une civilisation tout enti\u00e8re \u00e9tait remise en question \u00e0 cause de mes p'tites coucheries, moi non plus j'me sentirais pas bien...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre IV',
      episode: "L'Art de la Table",
    },
  },
  {
    citation:
      "(\u00c0 Dame S\u00e9li)En somme, il faudrait d\u00e9clarer la guerre \u00e0 Lancelot pour r\u00e9cup\u00e9rer la Reine et donner un h\u00e9ritier au tr\u00f4ne, en tablant sur l'\u00e9ventualit\u00e9 que la Reine est enceinte et pas d'une fille? [Dame S\u00e9li : En somme] Et c'est moi le param\u00e8tre hasardeux ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre IV',
      episode: 'Les Novices',
    },
  },
  {
    citation: '(\u00c0 Lancelot)Eh ben, on est pas sortie du sable !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre IV',
      episode: 'Les Novices',
    },
  },
  {
    citation:
      "(\u00c0 Lancelot)On a beau expliquer tout ce qu'on veut expliquer\u2026 Au bout d'un moment, pour savoir faire du cheval, il faut faire du cheval !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre IV',
      episode: 'Les Novices',
    },
  },
  {
    citation:
      'Pour tout vous dire, je crois pas que ce soit bon pour mon autorit\u00e9 que mes soldats apprennent que je suis "une grosse pucelle" !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre IV',
      episode: 'Les Novices',
    },
  },
  {
    citation:
      "Moi, je suis en charge des n\u00e9gociations protocolaires de la surveillance int\u00e9rieure de l'inspection de certains postes avanc\u00e9s, eh bien, voyez-vous, si on me disait : Bohort, tout \u00e7a c'est fini, \u00e0 partir de maintenant, vous vous occuperez des p\u00e2tisseries et du linge de maison, je vous assure, je n'h\u00e9siterai pas une seconde .",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre IV',
      episode: 'Le Renoncement : 1\u00e8re partie',
    },
  },
  {
    citation: 'Qui veut une tartelette ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre IV',
      episode: 'Les Tuteurs II',
    },
  },
  {
    citation:
      "Admirez-nous un peu apr\u00e8s trente ans de souplesse\u2026 Trente ans d'\u00e9ducation laxiste !\u2026 Entre la fille princesse qui abandonne le tr\u00f4ne pour mettre les bouts dans la for\u00eat avec un jean-foutre et le fils chevalier qui sait pas tenir sa cuill\u00e8re et qui est pas foutu de se lever avant midi, vous verrez qu'\u00e0 force d'\u00eatre souples, on va finir par passer d\u00e9finitivement pour des romanos ! Et ils se sont pas lev\u00e9s !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre IV',
      episode: 'Le Grand D\u00e9part',
    },
  },
  {
    citation:
      'Nous sommes jeunes, nous marchons \u00e0 pieds\u2026 J\'opterai donc pour un surnom en rapport : "les Petits P\u00e9destres".',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Aur\u00e9lien Portehaut',
      personnage: 'Gauvain',
      saison: 'Livre IV',
      episode: 'Le Grand D\u00e9part',
    },
  },
  {
    citation: 'Les oiseaux sifflent, le printemps siffle !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre IV',
      episode: 'Les Envahisseurs',
    },
  },
  {
    citation:
      "Non, je suis d\u00e9sol\u00e9, c'est pas possible ; on se l\u00e8ve pas \u00e0 midi dans un camp militaire ! Demain matin, celui qui est pas debout \u00e0 l'aube, je le pends \u00e0 un arbre, c'est clair ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre IV',
      episode: 'La r\u00e9ponse',
    },
  },
  {
    citation:
      "\u00c9coutez, si j'avais un sort pour contrecarrer les volont\u00e9s divines, je serais pas en train de faire des potions de virilit\u00e9 pour tous les mous de la tige du pays breton.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre IV',
      episode: 'Anges Et D\u00e9mons',
    },
  },
  {
    citation:
      "(\u00c0 Arthur) Croyez bien que si j'avais [un truc en stock pour aider Merlin], je le dirais pas ! Parce que voir celui-l\u00e0 passer pour un conneau devant tous les druides du continent, j'aime autant vous dire que je risque pas de louper \u00e7a ! J'vais m\u00eame amener des copains.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre IV',
      episode: 'Le rassemblent du corbeau II',
    },
  },
  {
    citation:
      'Je pr\u00e9f\u00e8re vous tuer de mes mains plut\u00f4t que de vous perdre.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thomas Cousseau',
      personnage: 'Lancelot',
      saison: 'Livre IV',
      episode: 'La R\u00e9manence',
    },
  },
  {
    citation:
      "Moi, quand ma garce de femme est l\u00e0, \u00e7a d\u00e9m\u00e9nage pas mal aussi\u2026 Hier, elle m'a fendu le tibia avec une amphore, la salope !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'La R\u00e9manence',
    },
  },
  {
    citation:
      "Commencez pas \u00e0 noyer la peau de l'ours avant d'avoir vendu le poisson.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre IV',
      episode: 'Vox populi III',
    },
  },
  {
    citation:
      "Et qu'est-ce qui font-ils, au gouvernement ? Y's'roucent les poules ! Y's'poulent les rouces ! [Guethenoc : Y's'roulent les pouces !] Voil\u00e0, mieux !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre IV',
      episode: 'Vox populi III',
    },
  },
  {
    citation:
      "Moi, un jour j'ai r\u00eav\u00e9 qu'y avait un type qui venait me voir. Il me dit : \u00abVous avez jamais connu vos parents ?\u00bb J'lui r\u00e9ponds \u00abnon\u00bb. Et l\u00e0, il me dit : \u00abEh ben, vous inqui\u00e9tez pas, ils sont fromagers.\u00bb",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Thibault Roux',
      personnage: 'Gr\u00fcd\u00fc',
      saison: 'Livre IV',
      episode: "Le R\u00eave d'Ygerne",
    },
  },
  {
    citation: "Arthour, j'appr\u00e9cie les fruits au sirop !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre IV',
      episode: 'Le Jeu de la guerre',
    },
  },
  {
    citation: 'Jouer ! Guerre ! Salsifis !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre IV',
      episode: 'Le Jeu de la guerre',
    },
  },
  {
    citation: 'SALSIFIS !!!!!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Guillaume Briat',
      personnage: 'Le Roi Burgonde',
      saison: 'Livre IV',
      episode: 'Le Jeu de la guerre',
    },
  },
  {
    citation:
      '[\u00c0 Lancelot]  Ah ! \u00c0 ce propos, je dois vous avouer que j\'ai longtemps r\u00e9flechi \u00e0 savoir comment vous deviez m\'appeler. [...] \u00c9h oui ! Parce que vous \u00eates pas, \u00e0 proprement parler, un de mes sujets. Vous \u00eates pas sous mes ordres non plus. "Sire" c\'est quand m\u00eame un peu ampoul\u00e9. Alors j\'ai pens\u00e9 \u00e0 beaucoup de choses. "Loth", "Seigneur", "Monsieur"... Je me suis m\u00eame demand\u00e9 si vous deviez pas m\'appeler "vieille branche", "mon p\'tit pote" ou "canaillou".',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'Loth et le Graal',
    },
  },
  {
    citation:
      "[\u00c0 Lancelot] Alors l\u00e0, pareil. J'vais dire une banalit\u00e9 : Ne jamais n\u00e9gliger les bienfaits du couple dans la fonction militaire ; surtout quand on est \u00e0 poste de d\u00e9cisions. Moi, j'ai toujours men\u00e9 mes troupes de fa\u00e7on laborieuse et p\u00e9nible, pourquoi ? Avant tout -faut pas s'le cacher- parce que ma femme est une grosse salope.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'Loth et le Graal',
    },
  },
  {
    citation:
      "(A Lancelot) Et ben allez-y, recevez-le dans la merde. Y'a pas un si\u00e8ge pour s'asseoir, pas un truc \u00e0 lui offrir \u00e0 boire (...) C'est le roi d'Orcanie quand m\u00eame. C'est pas Jo le Clodo. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Livre IV',
      episode: 'Loth et le Graal',
    },
  },
  {
    citation:
      "Dans trois jours, ma tata elle m'emm\u00e8ne \u00e0 la mer pour me noyer.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre IV',
      episode: 'Le Paladin',
    },
  },
  {
    citation:
      "J'y suis dans ma maison pourrie.Les 2 pieds dans la merde de poules. \u00c7a vous va ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Salomone',
      personnage: 'Caius Camillus',
      saison: 'Livre IV',
      episode: 'Fluctuat nec mergitur',
    },
  },
  {
    citation:
      '\u00c7a pique trop de la vie, quoi : \u00e7a pique, \u00e7a lance, et derri\u00e8re, comment \u00e7a re-pique trop.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: "La Blessure d'Yvain",
    },
  },
  {
    citation:
      "Il s'est acharn\u00e9 sur moi avec une sauvagerie m\u00eal\u00e9e de f\u00e9rocit\u00e9. [\u2026] Celui qu'avait qu'une jambe. [\u2026] Oui, bah du coup, c'\u00e9tait le plus hargneux. C'\u00e9tait comme s'il se vengeait sur moi de sa jambe euh... Avec une sauvagerie m\u00eal\u00e9e de f\u00e9rocit\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: "La Blessure d'Yvain",
    },
  },
  {
    citation:
      'ALLEZ, EN GARDE GROSSE CONNE ! Non, \u00e7a va pas, \u00e7a va pas !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre IV',
      episode: 'Corpore sano II',
    },
  },
  {
    citation:
      'Du nerf, mon lapinou !\u2026 Vous allez vous faire tailler le zizi en pointe !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre IV',
      episode: 'Corpore sano II',
    },
  },
  {
    citation: "Non mais c'est \u00e0 se coincer les parties dans une porte !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre IV',
      episode: 'Corpore sano II',
    },
  },
  {
    citation:
      "(Sur l'air de \"\u00c0 la Volette\") Le bon roi Arthur est une p'tite tapette. Le bon roi Arthur est une p'tite tapette. Est une p'tite \u00e0 la volette, est une p'tite \u00e0 la volette, est une p'tite tapette.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre IV',
      episode: 'Corpore sano II',
    },
  },
  {
    citation:
      "Vous savez quoi, Sire ? On va commencer par se faire une saucisse grill\u00e9e de trois pieds de long, avec un tonnelet de pinard chacun, et derri\u00e8re, peut \u00eatre bien qu'on se paiera des filles. Ah oui ! A un moment, vive la vie !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre IV',
      episode: 'Corpore sano II',
    },
  },
  {
    citation:
      "(\u00c0 Guethenoc) Je vous donnerai la main, j'en ai une aussi de masse moi aussi, comme \u00e7a j'en profiterai pour vous en mettre un coup dans la gueule, c'est pas bien m\u00e9chant ! (Il commence \u00e0 se battre avec Guethenoc)",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre IV',
      episode: "L'Entente Cordiale",
    },
  },
  {
    citation:
      "(\u00c0 Merlin) Je veux insinuer que vous n'avez pas de connaissances suffisantes pour faire des cr\u00eapes. Alors vous imaginer en train de bricoler des plaques de dissimulation, c'est \u00e0 pisser de rire.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre IV',
      episode: 'Les plaques de dissimulation',
    },
  },
  {
    citation:
      "C'est pas que c'est difficile de la r\u00e9cup\u00e9rer... C'est que c'est sa m\u00e8re difficile de la r\u00e9cup\u00e9rer, la race de sa grand-m\u00e8re !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: 'Le Vice De Forme',
    },
  },
  {
    citation:
      'Ouais, ben si vous vouliez du captivant, fallait peut-\u00eatre me faire lire autre chose que des textes de lois !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre IV',
      episode: 'Le Vice De Forme',
    },
  },
  {
    citation:
      "Heureusement qu'on n'a aucune dignit\u00e9\u2026 Sinon on serait bien dans la merde.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Antoine de Caunes',
      personnage: 'Dagonet',
      saison: 'Livre IV',
      episode: 'Le D\u00e9sordre et la Nuit',
    },
  },
  {
    citation:
      "Juste \u00e0 notre aplomb, une corneille est pos\u00e9e sur une branche. Dans quelques secondes, elle va s'envoler. (La corneille s'envole.) Voil\u00e0. Nous avons franchi le solstice d'\u00e9t\u00e9. Et pendant que d'autres c\u00e9l\u00e8brent le jour le plus interminable de l'ann\u00e9e\u2026 nous allons secr\u00e8tement nous r\u00e9jouir du retour des longues nuits. (Pause) Levez-vous.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre IV',
      episode: 'Le D\u00e9sordre et la Nuit',
    },
  },
  {
    citation:
      "C'\u00e9tait quand la derni\u00e8re fois qu'on s'est retrouv\u00e9s tous d'accord sur un truc !?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'Au service secret de Sa Majest\u00e9',
    },
  },
  {
    citation:
      "Oh L\u00e0 ! Attendez. Nous ici, on est en train de parler \u00e0 quelqu'un d'intelligent. Si vous en \u00eates encore \u00e0 respecter vos serments, on va couper court, on est tous tr\u00e8s occup\u00e9s.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'Dagonet et le Cadastre',
    },
  },
  {
    citation:
      "Pour faire court, vous \u00eates ici chez les salopards. C'est admis. On n'a pas des id\u00e9es bien jojos, et on n'a pas peur de le dire ! On fomente, on ren\u00e9gate, on laisse libre cours \u00e0 notre fantaisie.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'Dagonet et le Cadastre',
    },
  },
  {
    citation:
      "Voil\u00e0\u2026 Moi de mon cot\u00e9 j'avais pari\u00e9 que vous \u00e9tiez encore trop branquignole pour savoir c'qui \u00e9tait \u00e0 vous\u2026 Je vois que j'ai encore tap\u00e9 juste !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'Dagonet et le Cadastre',
    },
  },
  {
    citation:
      "Vous \u00eates chevalier, je suis roi\u2026 Je vous demande de venir, vous venez et puis c'est tout !\u2026 Je vais pas non plus aller br\u00fbler un cierge sous pr\u00e9texte que vous avez fait un tour de cheval !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'Dagonet et le Cadastre',
    },
  },
  {
    citation:
      "L\u00e0, y'a les m\u00e9duses, les insectes. L\u00e0, y'a les glandus, les grouillots. L\u00e0, y'a les mecs normaux. L\u00e0, y'a les chevaliers. L\u00e0, y'a les rois et les princes. Et apr\u00e8s, bien au-dessus, y'a le Roi Arthur. Vous, vous aurez eu deux bonhommes dans votre vie, eh ben vous pourrez dire que vous avez tap\u00e9 dans l'exception.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: 'Duel 2eme partie',
    },
  },
  {
    citation: 'On a les mains prises ducon !!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre IV',
      episode: "La Blessure D'Yvain",
    },
  },
  {
    citation: "Franchement, j'ai connu des cafards moins opini\u00e2tres...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'La clandestine',
    },
  },
  {
    citation:
      "Et ben si ils veulent la place les gars, je leur laisse !\u2026\r\nQu'ils y viennent chercher le Graal avec la compagnie de loustics que je me prom\u00e8ne\u2026 Je leur souhaite un bon s\u00e9jour aux mecs !\u2026 Ils se les farciront, les s\u00e9ances de la Table Ronde o\u00f9 tout le monde roupille du d\u00e9but \u00e0 la fin !\u2026 Les dol\u00e9ances, les revendications, les clans !\u2026 Moi, pendant ce temps-l\u00e0, j'irai glander en Andalousie !\u2026 L\u00e0-bas au moins, on peut se baigner sans avoir les doigts de pieds tout bleus au bout de cinq minutes !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'La Foi bretonne',
    },
  },
  {
    citation:
      "Je pense que vous glandouillez bien assez comme \u00e7a dans la r\u00e9alit\u00e9 pour qu'on puisse se permettre d'optimiser le fictionnel.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'La Po\u00e9tique II',
    },
  },
  {
    citation:
      "Moi, j'\u00e9tais sur qu'ils reviendraient crev\u00e9s ; ils sont vivants, un succ\u00e8s. Mieux, une surprise.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre IV',
      episode: 'La R\u00e9affectation',
    },
  },
  {
    citation:
      "Vous allez voir qu'il n'y a aucun probl\u00e8me\u2026\r\nSi\u00e8cle des larmes, hurlements\u2026\r\nTr\u00e8s bien.\r\nAu jour, Dieu Roi de\u2026\r\nRoi de Logres ?\r\nFait affront du Lac combattant fr\u00e8re \u00e0 l'\u00e9p\u00e9e\r\nFemme de Vannes \u00e9pous\u00e9e commet faute\r\nPanique, ruines, fin d'un monde\r\nSur Terre, sans d\u00e9mons ni sorci\u00e8res\r\nVient dieu des morts solitaire des frayeurs\r\nDu ciel \u00e0 l'insulte la R\u00e9ponse\r\n[\u2026]\r\nL\u00e0, \u00e7a pue du cul, mais violent.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'La R\u00e9ponse',
    },
  },
  {
    citation:
      "Oh, la fiert\u00e9\u2026 Si j'avais d\u00fb \u00eatre \u00e0 cheval l\u00e0-dessus, je vous aurais pas \u00e9pous\u00e9e, d\u00e9j\u00e0.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre IV',
      episode: "L'Art de la table",
    },
  },
  {
    citation:
      "C'est marrant parce que, d'habitude, dans les tartes, moi, je mange les fruits puis je laisse la p\u00e2te. \r\n(Arthur : Et l\u00e0, vous faites l'inverse ?)\r\nHein ? Ah non, l\u00e0, je laisse tout.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre IV',
      episode: 'La tarte aux fraises',
    },
  },
  {
    citation:
      "En revanche, je suis triste pour un autre truc mais \u00e7a m'emb\u00eate d'en parler... J'estime que chacun a le droit \u00e0 son jardin secret.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: 'La tarte aux fraises',
    },
  },
  {
    citation:
      "Je crois que je me suis coup\u00e9 la gencive avec un grumeau cuit. C'est possible ou pas ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: 'La tarte aux fraises',
    },
  },
  {
    citation:
      "[Dame S\u00e9li] Bon qu'est-ce qu'y a ? C'est pas bon ?\r\n[Arthur] Naaan mais c'est au-del\u00e0 de \u00e7a je crois. L'autre jour, je rentrais de la plage et j'suis tomb\u00e9 sur un coin \u00e0 fraises. Alors j'm'en suis fais un plein ventre ... paske les fraises, quand on leur fout la paix en fait, elles sont consommables. L\u00e0 c'est aussi des fraises, probablement les m\u00eames d'ailleurs, mais par un proc\u00e9d\u00e9 miraculeux, que j'arrive pas \u00e0 m'imaginer ... on dirait des gadins.  ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'La Tarte aux Fraises',
    },
  },
  {
    citation:
      "Allez, faites-vous belle, que j'me pointe avec la came pr\u00e9sentable.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: "L'\u00c9change 1\u00e8re partie",
    },
  },
  {
    citation: 'Du pass\u00e9 faisons table en marbre.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: "L'\u00c9chelle de Perceval",
    },
  },
  {
    citation:
      'Sur une \u00e9chelle de 2 \u00e0 76, et l\u00e0 je pr\u00e9f\u00e8re prendre large, de 2 \u00e0 71 on ne nous \u00e9coute pas, de 72 \u00e0 75, on nous \u00e9coute toujours pas, et seulement \u00e0 76 on nous laisse parler sans nous engueuler.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: "L'\u00c9chelle de Perceval",
    },
  },
  {
    citation:
      "Vous dites pas : \u00abQu'est ce qu'il fait chaud\u2026\u00bb, vous dites : \u00abLa chaleur est un plat qui se mange froid.\u00bb",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: "L'\u00c9chelle de Perceval",
    },
  },
  {
    citation:
      "(\u00c0 Gauvain) Non, comme salope en Orcanie, y'a ma s\u0153ur, la reine, votre m\u00e8re quoi, mais vous le saviez \u00e7a? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'Le Choix de Gauvain',
    },
  },
  {
    citation:
      'Ne vous laissez pas embobiner\u2026 Ils cherchent \u00e0 vous rembobiner !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: 'Le Choix de Gauvain',
    },
  },
  {
    citation:
      "Victoriae mundis et mundis lacrima. Bon, \u00e7a ne veut absolument rien dire, mais je trouve que c'est assez dans le ton. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre IV',
      episode: 'Le d\u00e9sordre et la nuit',
    },
  },
  {
    citation:
      "Heu... \u00e0 propos de devenir marteau, vous savez que chez moi \u00e7a peut aller assez loin ?\r\nParce que bon, mettons l\u00e0 heu... on s'pose, on analyse le truc. Le crin-crin \u00e7a fait des heures que \u00e7a dure et en plus, vous vous y mettez \u00e0 plusieurs.Et ben moi le machin, une fois que j'en ai fait des copeaux, et ben je peux tr\u00e8s bien mettre le feu au plumard ! M\u00eame au mobilier, \u00e7a m'fait pas peur !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre IV',
      episode: 'Le Oud II',
    },
  },
  {
    citation:
      "Parce que en fait dans notre langue, il y a que deux mots qui riment avec compl\u00e8te : c'est quiquette et biseaut\u00e9e. Alors \u00e7a va \u00eatre chaud !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre IV',
      episode: 'Le Oud II',
    },
  },
  {
    citation:
      '(\u00c0 Merlin) Oh vous, toujours vous, mais allez chier dans une fiole, on verra apr\u00e8s.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre IV',
      episode: 'Le Privil\u00e9gi\u00e9',
    },
  },
  {
    citation:
      '(\u00c0 Merlin) Une pluie de pierres en int\u00e9rieur, donc ! Je vous prenais pour un pied de chaise, mais vous \u00eates un pr\u00e9curseur, en fait !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre IV',
      episode: 'Le Privil\u00e9gi\u00e9',
    },
  },
  {
    citation:
      "Bon \u00e7a suffit maintenant ! Vous voulez qu'j'me foute en rogne comme un enseignant ? ... Qu'est ce que j'ai avec \u00e7a moi ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: 'Les chaperons',
    },
  },
  {
    citation:
      "Vous vous prenez pour un enseignant ?... Non j' s'entais que c'\u00e9tait le moment d'faire une vanne mais y'a rien qui est sorti.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: 'Les chaperons',
    },
  },
  {
    citation:
      "En plus je connais une technique pour tuer trois hommes en un coup rien qu'avec des feuilles mortes ! Alors l\u00e0, vous \u00eates deux, vous avez bien de la chance.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: 'Les Chaperons',
    },
  },
  {
    citation:
      "Mais cherchez pas \u00e0 faire des phrases pourries... On en a gros, c'est tout !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: 'Les Exploit\u00e9s II',
    },
  },
  {
    citation:
      'Ils ont pas de bol, quand m\u00eame ! Mettre au point un truc pareil et tomber sur des cerveaux comme nous !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: 'Les Pisteurs',
    },
  },
  {
    citation:
      "J'vais vous en faire pr\u00e9parer un de bon de sortie. Sign\u00e9, tamponn\u00e9, tout ce qu'il y a de plus officiel. Et puisque vous aimez les catapultes, on va vous mettre les miches dedans, vous, votre fils, votre femme, et tout l'orchestre. Et paf, feu nourri, direction Carm\u00e9lide, la Bretagne vue du ciel ! \u00c7a vous apprendra \u00e0 bouffer \u00e0 tous les r\u00e2teliers.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'Le Traitre ',
    },
  },
  {
    citation:
      "Ma femme\u2026 mon ex-femme\u2026 C'\u00e9tait peut \u00eatre un peu moins prestige parce qu'elle est pas reine\u2026 mais au moins, elle habitait pas \u00e0 six heures de marche avec un autre mec.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: 'Le Vice de forme',
    },
  },
  {
    citation:
      "Mais moi, j'm'en fous des honneurs, rien \u00e0 p\u00e9ter, le Graal aussi, rien \u00e0 p\u00e9ter. Moi, c'est Arthur qui compte. Moi je suis pas un as de la strat\u00e9gie ou du tir \u00e0 l'arc, mais je peux me vanter de savoir ce que c'est que d'aimer quelqu'un.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: "L'Habitu\u00e9",
    },
  },
  {
    citation:
      "Ah \u00e7a y'est, j'viens de comprendre \u00e0 quoi \u00e7a sert la canne. En fait \u00e7a sert \u00e0 rien\u2026 Du coup \u00e7a nous renvoie \u00e0 notre propre utilit\u00e9 : l'Homme face \u00e0 l'Absurde !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: "L'Inspiration",
    },
  },
  {
    citation:
      "Moi, la canne, \u00e7a m'aide. Je visualise le caillou dans l'eau, j'ai l'impression de faire partie d'un tout, moi, le caillou, le fil, le lac, le ciel, c'est entier, vous comprenez ? C'est bien fini. C'est pour \u00e7a, moi je me dis, c'est dans ces moments-l\u00e0 qu'on peut bien comprendre des trucs. Vous me prenez pour un con, non ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: "L'Inspiration",
    },
  },
  {
    citation: "C'est pas moi qu'explique mal, c'est les autres qui sont cons !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: 'Perceval Fait Raitournelle',
    },
  },
  {
    citation:
      "Au printemps, j'aime bien pisser du haut des remparts au lever du soleil\u2026 Y'a une belle vue !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre IV',
      episode: 'Tous les matins du monde, 2eme partie',
    },
  },
  {
    citation:
      'Ben moi en g\u00e9n\u00e9ral, je lui r\u00e9ponds "merde". En principe \u00e7a colle avec tout.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre IV',
      episode: 'Tous les matins du monde II',
    },
  },
  {
    citation: "J'bouff'rais un ch'val en salade !!! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'Tous les matins du monde (Premi\u00e8re Partie)',
    },
  },
  {
    citation:
      "Lorsqu'on le tient par la partie sporadique, ou bouli\u00e8re, le fenouil est un objet redondant.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: 'Unagi IV',
    },
  },
  {
    citation:
      "Tout \u00e0 l'heure, on a vu que le chapelet de saucisses n'\u00e9tait pas un objet redondant. Et pourtant, on a pu lui trouver une utilisation p\u00e9rim\u00e9trique en s'en servant comme un fouet.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre IV',
      episode: 'Unagi IV',
    },
  },
  {
    citation:
      '(\u00e0 Perceval et Karadoc)  Vous vous entrainez \u00e0 mettre le merdier ?!?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre IV',
      episode: 'Unagi IV ',
    },
  },
  {
    citation:
      'LANCELOT : La dame du lac ??!! \r\n                     MELEAGANT : (Ironique et frappant dans les mains) H\u00e9h\u00e9h\u00e9! On va passer... Une bonne soir\u00e9e! MAGNIFIQUE!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Aux yeux de tous III ',
    },
  },
  {
    citation:
      "Mais je pensais que vous auriez trouv\u00e9 une petite clairi\u00e8re\u2026 avec un ruisseau. Les tocards prennent toujours leur retraite pr\u00e8s d'un ruisseau, \u00e0 cause de la soif. Pourtant une retraite, c'est une retraite de tout, ne croyez-vous pas ? Moi, quand j'ai plus rien \u00e0 faire ici, je me retire\u2026 Plus une goutte d'eau. Plus un rayon de soleil. Je me dess\u00e8che, de la t\u00eate aux pieds, en un petit cadavre sous un tas de feuilles\u2026 Les saisons me survolent sans me soup\u00e7onner\u2026 Et puis, un jour, la corneille raconte qu'elle a entendu au loin quelqu'un qui recommence \u00e0 pleurer. Gueni\u00e8vre ! Gueni\u00e8vre ! Alors l\u00e0, j'ouvre un \u0153il, je rampe, mangeant la neige, l\u00e9chant l'eau croupie\u2026 et mes ennemis tressaillent, car \u00e0 me voir boire, ils comprennent que je suis de retour. (Pause) Vous m'faites pas rentrer ? (Ricanement) Magnifique.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Le Dernier Recours',
    },
  },
  {
    citation:
      "Vous pouvez pas savoir comment on est trop jouasse d'\u00eatre l\u00e0 !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Les Nouveaux Clans',
    },
  },
  {
    citation:
      "(\u00c0 Merlin) Mais retournez \u00e0 l'\u00e9tat sauvage, esp\u00e8ce de con. Foutez le camp dans les montagnes avec une paire de ch\u00e8vres. On vous ach\u00e8tera vos fromages, promis. [\u2026] Vous le sentez pas, l'appel de la nature, l\u00e0? Les animaux de la for\u00eat, y z'ont pas besoin d'un toubib ? [\u2026] Tirez-vous d'ici. D\u00e9finitivement. Et laissez bosser ceux qui savent faire ! Y a pas de place pour les amateurs ici.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre V',
      episode: 'La Sorci\u00e8re',
    },
  },
  {
    citation:
      "Ah non, avec les jolies seulement. C'est de l\u00e0 que j'ai conclu que, comme y m'touchait pas, je faisais moi-m\u00eame partie des grosses mochet\u00e9s.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre V',
      episode: 'Corvus corone',
    },
  },
  {
    citation:
      "Non, c'est moi qui y suis pour quelque chose. Le coup d'\u00c9tat, c'est moi ! Le clan s\u00e9paratiste, c'est moi ! Et d'une mani\u00e8re g\u00e9n\u00e9rale j'ai un lien plus ou moins direct avec tout ce qui se manigance de vicelard en Bretagne depuis ces trente derni\u00e8res ann\u00e9es, \u00e7a tout le monde le sait. Ce qu'on sait moins en revanche, c'est la raison qui me pousse \u00e0 faire tout \u00e7a... [Arthur : Oui je vous \u00e9coute, qu'est ce qui vous pousse \u00e0 faire tout \u00e7a?] L'amour ! Que je porte \u00e0 ma femme, \u00e0 votre s\u0153ur. [Arthur : Demi s\u0153ur!] Personne ne vous d\u00e9teste plus qu'elle dans tout le royaume sire. Et moi, pauvre fou d'amour esclave de ses yeux, je ne cherche qu'\u00e0 contenter ses d\u00e9sirs de vengeance. Me commanderait-elle de venir attaquer vos arm\u00e9es seul contre un million, je le ferai sans r\u00e9fl\u00e9chir. Alors quand cette salope a su que Lancelot organisait une arm\u00e9e s\u00e9paratiste, elle m'a ordonn\u00e9 de m'associer \u00e0 lui et de lui filer du pognon. Et moi, pauvre b\u00eate dress\u00e9e, je me suis l\u00e2chement ex\u00e9cut\u00e9. Misa brevis et spiritus maxima. \u00c7a veut rien dire, mais je suis tr\u00e8s en col\u00e8re contre moi m\u00eame. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Corvus corone',
    },
  },
  {
    citation:
      "Vous, vous \u00eates un peigne-cul en toutes circonstances. N'importe qui vous pousserait \u00e0 n'importe quoi pourvu qu'il parle un peu fort",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Corvus corone',
    },
  },
  {
    citation:
      "Vous vous \u00e9tonnerez pas si vous ressentez une vive douleur sur le sommet du cr\u00e2ne. C'est s\u00fbrement que vous aurez pris le plat \u00e0 gigot dans la tronche !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: 'Corvus corone',
    },
  },
  {
    citation:
      "(En parlant d'Yvain et Gauvain)Ils ont la notion de rien. M\u00eame la notion de la menace que repr\u00e9sente mon pied au cul ils l'ont pas. C'est d\u00e9sesp\u00e9rant.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le P\u00e9riple',
    },
  },
  {
    citation:
      'Gardez votre \u00e9p\u00e9e et servez-vous-en pour trouver le Graal ! [Arthur replante Excalibur]',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Audrey Fleurot',
      personnage: 'La Dame du Lac',
      saison: 'Livre V',
      episode: 'La roche et le fer ',
    },
  },
  {
    citation:
      "Ah non, ce soir c'est beaucoup du clodo, mais c'est pas ceux l\u00e0 de votre \u00e9quipe.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chapuis',
      personnage: 'Le Tavernier',
      saison: 'Livre V',
      episode: 'Les dauphins',
    },
  },
  {
    citation:
      "Dans la vie, faut bosser pour personne, et y faut faire bosser personne ! C'est le secret de la libert\u00e9. [\u2026] Rien que d'imaginer que je retire l'\u00e9p\u00e9e du rocher et que je me retrouve \u00e0 la t\u00eate de ce bordel, \u00e7a me fait de la spasmophilie !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre V',
      episode: 'Vae soli!',
    },
  },
  {
    citation:
      "Ecoutez ma p'tite dame, ya des fois o\u00f9 y faut sentir le vent tourner et mettre du pognon a gauche pour filer a la concurrence [Mevanwi : o\u00f9 \u00e7a ? Chez Lancelot ?] [...] Pour aller l\u00e0-bas, y faudrait que j'aie des principes, une qu\u00eate \u00e0 accomplir [Mevanwi : Et vous n'en avez pas ?] Si, m'en mettre plein les fouilles !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Bruno Fontaine',
      personnage: "Elias de Kelliwic'h",
      saison: 'Livre V',
      episode: 'Vae soli!',
    },
  },
  {
    citation:
      "(Pr\u00e9sentant sa nouvelle femme \u00e0 Seli, Arthur et Leodagan)\r\nAh mais non... Mais vous vous \u00eates encore sur l'ancienne ! [\u2026]\r\nTout \u00e0 fait, excusez-moi, j'ai pas percut\u00e9. Non non, l'autre elle est morte. Heu... Les articulations soutenaient plus son poids. Donc elle a commenc\u00e9 par se remplir d'eau par les coudes et apr\u00e8s c'est pass\u00e9 aux chevilles, c'est remont\u00e9 aux genoux et un matin, elle avait tellement gonfl\u00e9 que j'ai appel\u00e9 la garde.\r\nAlors heu... Ils sont venus, ils lui ont mis un coup de lance et puis elle a essay\u00e9 de se... de se faufiler comme \u00e7a, pour se cacher sous le buffet.\r\nPis elle passait pas parce que bon ben... Elle avait plus conscience de sa masse donc elle est rest\u00e9e l\u00e0, comme \u00e7a, pis... Bah six heures apr\u00e8s, elle \u00e9tait crev\u00e9e.\r\nDonc, la Duchesse d'Aquitaine !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chabat',
      personnage: "Le Duc d'Aquitaine",
      saison: 'Livre V',
      episode: "Les Fruits d'Hiver",
    },
  },
  {
    citation:
      "(En parlant de Dame Mevanwi) Ouais ouais ben j'suis pas trop. Sauf que quand on fait des choix il faut les tenir un minimum. Et \u00e7a change de chambre et \u00e7a change de mari... \r\n(Dame Mevanwi) Mais m\u00ealez vous de vos fesses !\r\nOuais ouais ouais ! Il faudrait peut-\u00eatre commencer par se comporter en adulte !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Les Exil\u00e9s',
    },
  },
  {
    citation:
      "Je voulais savoir pourquoi vous laissiez tous vos chevaliers former des clans s\u00e9paratistes, alors que l'une de vos plus importantes missions a toujours \u00e9t\u00e9 de f\u00e9d\u00e9rer les clans existants autour de votre royaume et de la qu\u00eate du Graal ? ... Enfin c'\u00e9tait pas tout \u00e0 fait \u00e7a...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre V',
      episode: 'Les Exil\u00e9s',
    },
  },
  {
    citation:
      "(R\u00e9citant d'un ton peu convaincant) \u00abSi c'est ma t\u00eate qui vous revient pas, vous pouvez toujours aller roupiller dans le couloir. [\u2026] Et \u00e0 partir de maintenant, si j'entends un mot plus haut que l'autre je vous\u2026 renvoie dans votre bled d'at\u2026 natal \u00e0 coups de pied dans\u2026 dans le fion. Comme \u00e7a vous pourrez aller ratisser la bouse et torcher le cul des poules, \u00e7a vous fera prendre l'air.\u00bb",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chabat',
      personnage: "Le Duc d'Aquitaine",
      saison: 'Livre V',
      episode: 'Les Nocturnales',
    },
  },
  {
    citation:
      '(A Galessin : "Le rapport entre quoi et quoi ?") Entre Excalibur et le fromage gratin\u00e9. R\u00e9ponse: Aucun. C\'est une m\u00e9taphore moisie tiraill\u00e9e entre votre stupidit\u00e9 d\'ordre g\u00e9n\u00e9ral et votre surprenante inaptitude \u00e0 utiliser les m\u00e9taphores...',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Aux yeux de tous III',
    },
  },
  {
    citation:
      "VIVIANNE : Vous voulez vraiment pas me dire qui vous \u00eates? \r\n                     MELEAGANT : Non, mon nom ne vous dira rien... Mais chez vous on m'appelle... La r\u00e9ponse [...] La r\u00e9ponse \u00e0 votre path\u00e9tique d\u00e9sastre! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Aux yeux de tous III',
    },
  },
  {
    citation:
      "Vous entendez \u00e7a ? Il parait que je suis malpoli ! Qu'est-ce que vous en pensez bande de trous-du-cul ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Aux yeux de tous III',
    },
  },
  {
    citation:
      "Vous me faites penser \u00e0 ces types qui se servent jamais en premier pour faire poli, et quand c'est \u00e0 eux...ils prennent tout le fromage gratin\u00e9 et les autres, ils sont oblig\u00e9s de manger le l\u00e9gume seul.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexis H\u00e9non',
      personnage: 'Galessin',
      saison: 'Livre V',
      episode: 'Aux yeux de tous III',
    },
  },
  {
    citation: "Oh l'Irlande !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Aux Yeux De Tous III',
    },
  },
  {
    citation:
      'Eh... Il a pas invent\u00e9 le plat de la main morte, celui-l\u00e0.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Antoine de Caunes',
      personnage: 'Dagonet',
      saison: 'Livre V',
      episode: 'La promesse',
    },
  },
  {
    citation:
      'Non, mais on peut adapter. [\u2026] On peut dire, euh\u2026 <small>bon, je dis :</small> [\u2026] \u00abAvec votre d\u00e9gaine\u2026 euh\u2026 [\u2026] Avec votre d\u00e9gaine de crevette, faites gaffe \u00e0 pas vous faire bouffer par un m\u00e9rou.\u00bb',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chabat',
      personnage: "Le Duc d'Aquitaine",
      saison: 'Livre V',
      episode: 'Le Forfait',
    },
  },
  {
    citation:
      "\r\nAllez y! D\u00e9filez\r\nles petites fourmis. Mettez vous bien en rang.\r\nVenez mesurer votre risible destin \u00e0 celui des Pendragon.\r\nVenez constater la navrante insignifiance de vos existences.\r\nVous avez pens\u00e9 que les dieux allaient enfin reconnaitre en vous le souverain que personne n'avait vu?\r\nVous alliez enfin donner au monde le spectacle de votre av\u00e8nement.\r\nQuel roi suis-je ? Un roi s\u00e9v\u00e8re ? un roi conqu\u00e9rant ?\r\nVous n'\u00eates rien. Rien ! Vous retournerez chez vous comme vous en \u00eates parti\u2026 Anonyme !\r\nPaisiblement, mon fils viendra reprendre ce qui est \u00e0 lui. \r\nEt vous mettrez un genou en terre. Et vous baisserez les yeux.\r\nEt vous jurerez fid\u00e9lit\u00e9. Car c'est tout ce qu'il vous reste !",
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Jos\u00e9e Drevon',
      personnage: 'Ygerne',
      saison: 'Livre V',
      episode: 'Le dernier jour',
    },
  },
  {
    citation:
      "(\u00c0 Loth)Alors, si vous \u00eates plus \u00e0 l'aise avec les notions concr\u00e8tes, je peux vous proposer mon pied dans les noix...",
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le dernier jour',
    },
  },
  {
    citation:
      "Tout cela n'est rien. Absolument rien ! Il y a peu de temps quelque chose a fait \u00abBoum\u00bb. Voila, nous sommes sur une toute petite miette expuls\u00e9e par ce boum, qui d\u00e9rive et tournicote sur elle-m\u00eame, en attendant sa fin, proche ! Sur cette miette de tous petits organismes gesticulent ; \u00e7a nait, \u00e7a vit, \u00e7a meurt. Tout cela n'a aucune cons\u00e9quence.",
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Le dernier jour',
    },
  },
  {
    citation:
      '(\u00c0 Gueni\u00e8vre) Votre petit train-train quotidien de reine de Bretagne. Quand je pense \u00e0 toutes les p\u00e9cores qui se couperaient les mains pour avoir le tiers de vos soucis, ma pauvre !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: 'Le Dernier Jour',
    },
  },
  {
    citation:
      "(Encore \u00e0 Gueni\u00e8vre) Nous aussi, on vous aime. A partir du moment o\u00f9 vous gardez vos miches sur le tr\u00f4ne et o\u00f9 vous foutez pas l'camp d\u00e8s qu'un blondinet vous fait d'l'\u0153il.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: 'Le Dernier Jour',
    },
  },
  {
    citation:
      '(Toujours \u00e0 Gueni\u00e8vre) Si vous pr\u00e9f\u00e9rez retourner dans votre cabane de trappeur avec votre d\u00e9g\u00e9n\u00e9r\u00e9 de Lancelot, libre \u00e0 vous !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: 'Le Dernier Jour',
    },
  },
  {
    citation:
      '(au p\u00e8re Blaise)Vous m\u00e9riteriez que je vous foute \u00e0 la lourde avec les chiens au calcif !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le Jurisconsulte',
    },
  },
  {
    citation:
      "(Au P\u00e8re Blaise)\r\nZ'\u00eates un glandeur. Un gros... GLANDEUR !!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Clavier',
      personnage: 'Le Jurisconsulte',
      saison: 'Livre V',
      episode: 'Le Jurisconsulte',
    },
  },
  {
    citation: 'Mais vous \u00eates une grosse morue!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Clavier',
      personnage: 'Le Jurisconsulte',
      saison: 'Livre V',
      episode: 'Le Jurisconsulte',
    },
  },
  {
    citation: 'Peau de vache.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Clavier',
      personnage: 'Le Jurisconsulte',
      saison: 'Livre V',
      episode: 'Le Jurisconsulte',
    },
  },
  {
    citation: "Quand y'a plus de roi, c'est caca.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Le Jurisconsulte',
    },
  },
  {
    citation:
      "(Sur l'air de Promenons-nous dans les bois)\r\nY' vont faire des beignets !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Le Jurisconsulte',
    },
  },
  {
    citation:
      "Jusqu'\u00e0 pr\u00e9sent, vous cumuliez trois statuts : b\u00e2tard, fils d'assassin et usurpateur. B\u00e2tard, vous le serez toujours, de m\u00eame que vous serez toujours le fils de votre sale ordure de p\u00e8re. Mais aujourd'hui, vous n'\u00eates plus roi, vous n'usurpez plus votre titre, c'est d\u00e9j\u00e0 \u00e7a.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anouk Grinberg',
      personnage: 'Anna',
      saison: 'Livre V',
      episode: 'La Supplique',
    },
  },
  {
    citation:
      "Quand on veut \u00eatre s\u00fbr de son coup, mon petit bonhomme, on plante des carottes, on ne joue pas les chefs d'\u00c9tat !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anouk Grinberg',
      personnage: 'Anna',
      saison: 'Livre V',
      episode: 'La Supplique',
    },
  },
  {
    citation:
      "(S'adressant au roi Loth) Excusez-moi, est-ce qu'\u00e0 un seul moment, j'aurais par m\u00e9garde donn\u00e9 le moindre signe de vouloir discuter avec vous?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anouk Grinberg',
      personnage: 'Anna',
      saison: 'Livre V',
      episode: 'La Supplique',
    },
  },
  {
    citation: 'Vous \u00eates une gigantesque tarlouze.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anouk Grinberg',
      personnage: 'Anna',
      saison: 'Livre V',
      episode: 'La Supplique',
    },
  },
  {
    citation: '\u00c7a suffit !!! \u00c7a suffit !!! \u00c7a suffiiiiiiiit !!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Domi Nostr\u00e6',
    },
  },
  {
    citation:
      '\u00c7a suffit ! Elle est o\u00f9 la poulette ? Elle est bien cach\u00e9e ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Domi Nostr\u00e6',
    },
  },
  {
    citation: "Le caca des canards c'est caca.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Domi Nostr\u00e6',
    },
  },
  {
    citation: "Vous rendez la poulette ou c'est tout nus dans les orties !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Domi Nostr\u00e6',
    },
  },
  {
    citation:
      "Vous rendez la poulette sinon c'est plus vous qui donnez \u00e0 manger aux lapins !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Domi Nostr\u00e6',
    },
  },
  {
    citation:
      'Vous prenez votre arc et vous le bouffez ! Esp\u00e8ce de d\u00e9g\u00e9n\u00e9r\u00e9 sanguinaire !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre V',
      episode: 'Les Embusqu\u00e9s',
    },
  },
  {
    citation:
      "(Compl\u00e8tement ivre) I faut faire tenir un balai en \u00e9quilibre sur le pif pour s'faire servir ici, ou quoi qu'ce soiye ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre V',
      episode: 'La nourrice',
    },
  },
  {
    citation:
      "(Compl\u00e8tement ivre) Quand j'\u00e9tais jeune, je pouvais faire rentrer un pigeon directement dans la bouteille sans la casser... C'est pas compliqu\u00e9, vous prenez un pigeon, vous y faites s\u00e9cher jusqu'\u00e0 qu'ce soit presque friable. Apr\u00e8s vous y mettez sur les... sur la branche de prunier, autour de la fleur... Comme \u00e7a la poire elle pousse directement \u00e0 l'int\u00e9rieur du pigeon s\u00e9ch\u00e9, et avec le liquide... \u00e7a gon... \u00e7a gonfle heu... et \u00e7a fait r'prende une... heu... \u00e7a fait r'prende une forme de pigeon. (Il s'\u00e9croule.)",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre V',
      episode: 'La nourrice',
    },
  },
  {
    citation:
      "M\u00f4ssieur Sire, en chair et en personne ! [\u2026] (\u00c0 Guethenoc) J'\u00e9tais v'nu pour vous emmerder, mais l\u00e0 \u00e7a m'coupe le sifflet !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre V',
      episode: 'La nourrice',
    },
  },
  {
    citation:
      "H\u00e9 ! H\u00e9\u00e9\u00e9 ! J'suis pas une sp\u00e9cialiste, mais, \u00e0 mon avis, l\u00e0, vous allez mourir, hein !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Audrey Fleurot',
      personnage: 'La Dame du Lac',
      saison: 'Livre V',
      episode: 'La Nourrice',
    },
  },
  {
    citation:
      "(ivre) C'est pour \u00e7a que j'ai jamais \u00e9t\u00e9 rien r\u00e9clamer \u00e0 Kaamelott. D\u00e9j\u00e0, j'aime pas bien aller pleurnicher. Je bricole mes combines dans mon coin. Je pr\u00e9f\u00e8re aller \u00abescroquer\u00bb, plut\u00f4t que d'emb\u00eater autrui. Vous voyez ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chapuis',
      personnage: 'Le Tavernier',
      saison: 'Livre V',
      episode: 'La Nourrice',
    },
  },
  {
    citation:
      'Je vous pr\u00e9viens, la matin\u00e9e a eu sa bonne dose de pignoufs, je suis plus que crev\u00e9e... Alors je pr\u00e9conise un d\u00e9jeuner dans le calme.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: "Les Fruits d'hiver",
    },
  },
  {
    citation:
      "LANCELOT : Si vous tenez tant \u00e0 la mort d'Arthur, vous n'avez qu'\u00e0 vous en occuper vous-m\u00eame. \r\n                     MELEAGANT : Je n'ai aucun int\u00e9r\u00eat \u00e0 la mort des gens. \r\n                     LANCELOT : Mais alors, \u00e0 quoi ? Bon sang, \u00e0 quoi ? \r\n                     MELEAGANT : A leur sabordage. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Jiz\u00f4',
    },
  },
  {
    citation: 'Camouflage caca...',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Unagi V',
    },
  },
  {
    citation: 'Il est o\u00f9 Kadoc ? Il est bien cach\u00e9 ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Unagi V',
    },
  },
  {
    citation:
      "Par contre pas un mot l\u00e0, sinon la porte. Bon l\u00e0 y en a pas, mais ce n'est pas la premi\u00e8re fois qu'on fabrique une porte \u00e0 la derni\u00e8re minute pour virer un petit trou de balle qui fait son malin.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Unagi V',
    },
  },
  {
    citation:
      "Progressif... N'oubliez pas, dans la casse, le plus important, c'est les suites d'\u00e9paisseurs ... B\u00fbche de 10, B\u00fbche de 16; B\u00fbche de 32, B\u00fbb\u00fbche, Bibuchette, et re-B\u00fbche de 6 !!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Unagi V',
    },
  },
  {
    citation:
      "Un arbre \u00e7a pousse, c'est l\u00e0 o\u00f9 vous pourrez faire la diff\u00e9rence: le camouflage il pousse pas !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre V',
      episode: 'Unagi V',
    },
  },
  {
    citation: 'Ah bravo femme. Ce repas fut des plus roboratifs !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Les pionniers',
    },
  },
  {
    citation:
      "Allez femme, robore nous donc de quelques fruits bien sucr\u00e9s. Il s'agit d'une r\u00e9galade !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Les pionniers',
    },
  },
  {
    citation:
      "Femme, comme je le disais tant\u00f4t,tu nous a robor\u00e9. Mais sauras tu nous r\u00e9galer d'un dessert de ton choix ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Les pionniers',
    },
  },
  {
    citation:
      "Ahhh, c'est pour \u00e7a que vous avez chang\u00e9 de si\u00e8ge, c'est parce que vous \u00eates p\u00e9p\u00e9... Heu non, c'est parce que vous \u00eates roi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Tony Saba',
      personnage: 'Herv\u00e9 de Rinel',
      saison: 'Livre V',
      episode: 'Les Pionniers',
    },
  },
  {
    citation:
      "Ah non ! AH NON ! On ne se vautre pas dans la bouffe, c'est INTOL\u00c9RABLE !!! Vous allez arrrrrr\u00eater !!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Clavier',
      personnage: 'Le Jurisconsulte',
      saison: 'Livre V',
      episode: 'Les Pionniers',
    },
  },
  {
    citation:
      'Femme, cesse donc de nous esbaudir les oreilles ! Olala, il suffit !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Les Pionniers',
    },
  },
  {
    citation:
      'Femme ! Tu nous abaubis les oreilles ! Rabats un peu ta casquette !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Les Pionniers',
    },
  },
  {
    citation:
      "Mais c'est trop sur votre route quoi ! Bon y'a une colline, deux collines du coup bi-collines et apr\u00e8s c'est carr\u00e9ment votre route !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Les Pionniers',
    },
  },
  {
    citation:
      "Ah mais vous \u00eates pas ma m\u00e8re ! Si j'ai envie de mettre des grosses morues dans mon plumard, JE FAIS CE QUE JE VEUX !!! Soyez gentille, l\u00e2chez-moi la chemise !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Clavier',
      personnage: 'Le Jurisconsulte',
      saison: 'Livre V',
      episode: 'La Conspiratrice',
    },
  },
  {
    citation: 'BANDES DE TROUS DU CUL !!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Clavier',
      personnage: 'Le Jurisconsulte',
      saison: 'Livre V',
      episode: 'La Conspiratrice',
    },
  },
  {
    citation: 'Caca.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Le Destitu\u00e9',
    },
  },
  {
    citation: 'Il faut pas respirer la compote, \u00e7a fait tousser.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Le Destitu\u00e9',
    },
  },
  {
    citation:
      "Moi je viens un peu en tant que m\u00e9diateur hein, et je confirme hein, c'est une tr\u00e8s grosse morue dont vous devriez vous m\u00e9fier !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Robert Lombard',
      personnage: 'P\u00e8re Blaise',
      saison: 'Livre V',
      episode: 'Le Destitu\u00e9',
    },
  },
  {
    citation:
      "(Parlant \u00e0 ses comp\u00e8res du roi Arthur) Donc l\u00e0, pour le voyageur isol\u00e9 y'a deux solutions : soit il d\u00e9pose ses armes, ses objets, sa bouffe et ses fringues par terre, et il s'en va d'o\u00f9 il est venu \u00e0 poil dans la neige, soit il d\u00e9cide de se battre... \u00c0 un contre dix.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre V',
      episode: 'Le Destitu\u00e9',
    },
  },
  {
    citation:
      "Y'a plusieurs personnes qui sont pass\u00e9es par votre si\u00e8ge l\u00e0, et beeen, le tout premier, je crois qu'il s'appelait... Carbure, \u00e7a fait vachement longtemps qu'on l'a pas vu. Moi, je serais vous, je lancerais des recherches.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Tony Saba',
      personnage: 'Herv\u00e9 de Rinel',
      saison: 'Livre V',
      episode: 'Le Destitu\u00e9',
    },
  },
  {
    citation:
      '\u00c7a suffit, vous rendez la poulette, sinon papi va se mettre en col\u00e8re.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre V',
      episode: 'Le Retour du Roi',
    },
  },
  {
    citation: 'Vous \u00eates des porcs !',
    infos: {
      auteur: 'Lionnel Astier',
      acteur: 'Jos\u00e9e Drevon',
      personnage: 'Ygerne',
      saison: 'Livre V',
      episode: 'Anton',
    },
  },
  {
    citation:
      "Je crois que c'est rentr\u00e9 par l\u00e0, et c'est ressorti par l\u00e0 ; et c'est re-rentr\u00e9 par l\u00e0, et c'est RE-RE-SORTI PAR LA. ET NOUS ON S'SAIGNE AUX QUATRE FROMAGES !!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Domi Nostrae',
    },
  },
  {
    citation:
      "Quand je pense \u00e0 la chance que vous avez de faire partie d'un clan dirig\u00e9 par des cerveaux du combat psychologique, qui se saignent...aux quatre parfums du matin au soir ! !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre V',
      episode: 'Domi Nostrae',
    },
  },
  {
    citation:
      "Ah bah ouais mais l\u00e0 euh... Le voile noir, le chaos... J'ai pass\u00e9 un cap hein.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Hurlements',
    },
  },
  {
    citation:
      "(\u00c0 Ygerne et Cryda) C'est qu'elles nous accuseraient de conspiration, les siamoises !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: 'Hurlements',
    },
  },
  {
    citation:
      "C'est all\u00e9 relativement vite, mais il a quand m\u00eame fallu que je m'y reprenne \u00e0 deux fois\u2026 J'l'avais pourtant \u00e9trangl\u00e9 pendant cinq bonnes minutes, le fumier, il \u00e9tait bleu outre-mer avec une jolie langue gonfl\u00e9e comme une escalope de dinde, et pourtant croyez-moi si vous voulez, il respirait encore la vieille carne. Et, je sais pas si c'est cette respiration paniqu\u00e9e et sifflotante, ou alors si c'est le fait qu'il me fixait avec de grands yeux rouges - parce que tous les vaisseaux avaient p\u00e9t\u00e9 - mais je me suis senti un peu d\u00e9stabilis\u00e9. Alors j'lui ai bourr\u00e9 la bouche avec un linge tremp\u00e9 dans de l'huile de lampe et j'ai foutu le feu. Bah \u00e7a r\u00e9pond \u00e0 votre question du coup : oui, c'est all\u00e9 assez vite.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Hurlements',
    },
  },
  {
    citation:
      'Cette \u00e9p\u00e9e grotesque est le plus pitoyable tour de passe-passe que les dieux aient jamais bricol\u00e9 pour arriver \u00e0 leurs fins.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Hurlements',
    },
  },
  {
    citation:
      "Ouais, alors l\u00e0 o\u00f9 je vois que je suis vraiment \u00e0 cran, c'est que quand vous avez dit mal\u00e9diction, j'ai fait une s\u00e9rie de tout petits pets comme \u00e7a : pft pft pft pft pft pft.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Simon Astier',
      personnage: 'Yvain',
      saison: 'Livre V',
      episode: 'Hurlements',
    },
  },
  {
    citation:
      "(\u00c0 Anna) j'aime autant vous dire que quand une bande de d\u00e9trousseurs embusqu\u00e9s nous tombera sur la viande, et qu'il lui prendra le go\u00fbt de vous passer dessus en file indienne, je l\u00e8verai pas le petit doigt.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Jizo',
    },
  },
  {
    citation:
      "(\u00c0 Arthur) Avant de vous lancer dans les exc\u00e8s de virilit\u00e9, vous auriez la curiosit\u00e9 de jeter un \u0153il \u00e0 la table du fond. Je suis venu avec quelqu'un qui veut vous parler... [Tavernier : Qu'est ce qu'on fait la?] Rien, y faut surtout pas s'en m\u00ealer. Comme quand deux chats sauvages se retrouvent sur le m\u00eame terrain. Y s'observent et aucun des deux ne baisse le regard sous peine d'\u00eatre saign\u00e9 \u00e0 blanc. Ce qui couperait court c'est qu'il y en ait un plus faible que l'autre, mais l\u00e0 c'est pas le cas. C'est les deux m\u00eame sales bestioles, inflexibles, indomptables et vivaces. Y tiennent \u00e7a de leur m\u00e8re! [Tavernier : De leur m\u00e8re? vous voulez dire que c'est sa s\u0153ur ?][Arthur et Anna : Demi s\u0153ur!] Ah! \u00e7a cause. Le dialogue s'amorce. Peut \u00eatre que vous vous ferez pas d\u00e9vaster votre boui-boui.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Jizo',
    },
  },
  {
    citation:
      "Oui mais, quand je reste trop dans ma baraque, je conspire, c'est un r\u00e9flexe. Du coup, je prends l'air, \u00e7a vaut mieux pour tout le monde.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'La Promesse',
    },
  },
  {
    citation:
      "Si on avait bu un coup dans des trucs qui s'cassent, j'en aurais p\u00e9t\u00e9 un par terre avant d'monter dans ma chambre, pour bien montrer comment j'suis col\u00e8re.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'La Promesse',
    },
  },
  {
    citation: 'Je vous le dis, cette histoire \u00e7a pue !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'La roche et le fer',
    },
  },
  {
    citation:
      '(\u00c0 Yvain et \u00e0 Gueni\u00e8vre) Si les dieux avaient d\u00fb \u00eatre de notre c\u00f4t\u00e9, ils nous auraient pas refil\u00e9 des enfants comme vous. ',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: 'La Roche et le Fer',
    },
  },
  {
    citation:
      "J'suis roi de Bretagne, j'ai pas de conseil \u00e0 recevoir d'une clodo !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre V',
      episode: 'La Roche et le Fer',
    },
  },
  {
    citation:
      "[Perceval: Si vous foutez tout en l'air, on vous envoie notre assassin, \u00e7a va pas tra\u00eener.]</br>\r\nOuais. Ou alors le mec qu'on dirait qu'il marche normalement mais en fait il marche alternativement \u00e0 cloche-pied sur chaque pied.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre V',
      episode: 'La Roche Et Le Fer',
    },
  },
  {
    citation:
      "Prenons un symbole connu : le Graal. Tout le monde sait bien que c'est beaucoup plus qu'un vase, hein ? Y'a toute une signification autour. Mais regardez \u00e7a par exemple : c'est une couronne. Alors d'un point de vue purement concret, \u00e7a veut juste dire que je suis Roi. mais d'un point de vue symbolique c'est beaucoup plus int\u00e9ressant... Par exemple, cette couronne nous informe symboliquement que tous les mous du slibard qui avaient l'habitude de se les rouler sous l'ancien r\u00e9gime vont devoir se mettre un coup de fouet s'ils veulent pas que je leur mette moi-m\u00eame. Cette couronne symbolise la fin des haricots et la d\u00e9carrade des tire-au-flanc, et surtout l'av\u00e8nement de l'ordre et de la discipline. En d'autres termes, la rigolade, c'est termin\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: "L'av\u00e8nement du Sanguinaire",
    },
  },
  {
    citation: "Les chiffres, c'est pas une science exacte figurez-vous!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jean-Christophe Hembert',
      personnage: 'Karadoc',
      saison: 'Livre V',
      episode: 'Le dernier recours',
    },
  },
  {
    citation:
      "(\u00c0 Anton) Je parle moins maintenant, je terrasse plus mes ennemis par l'\u00e9loquence. Plus je vieillis plus je ferme ma gueule. Aujourd'hui ce qu'il me faudrait c'est le m\u00e9daillon Harpocrate avec le doigt sur la bouche comme \u00e7a. Je suis d\u00e9sol\u00e9 de jamais \u00eatre revenu vous voir.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre V',
      episode: 'Le gar\u00e7on qui criait au loup',
    },
  },
  {
    citation:
      "Mais c'est de ma faute, \u00e0 moi, si vous semez des p\u00e8res adoptifs dans tout le pays ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Le Gar\u00e7on Qui Criait Au Loup',
    },
  },
  {
    citation:
      "Je suis d\u00e9sol\u00e9, mais les dieux ont pas l'air de votre avis. Je crois qu'ils en ont marre de ma tronche.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre V',
      episode: "L'\u00c9lu",
    },
  },
  {
    citation:
      "(\u00c0 Mevanwi) Elle a compris la vilaine fris\u00e9e ? On a dans l'projet de fonder un clan autonome pour partir \u00e0 l'aventure et ramener du pognon pour entretenir vos grosses miches !! Alors le cageot il dit merci et il ferme sa bo\u00eete \u00e0 caca !!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: "L'\u00e9p\u00e9e des rois",
    },
  },
  {
    citation:
      "(\u00c0 Ygerne et Cryda) C'est des tartes dans le museau qu'elles cherchent, les s\u0153urs Tape-Dur ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jo\u00eblle Sevilla',
      personnage: 'S\u00e9li',
      saison: 'Livre V',
      episode: "L'\u00e9p\u00e9e des rois",
    },
  },
  {
    citation:
      'La seule solution pour que ce soit encore plus sale, \u00e7a serait de demander aux clients de chier directement par terre ! Je vois que \u00e7a.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alain Chapuis',
      personnage: 'Le Tavernier',
      saison: 'Livre V',
      episode: "L'\u00e9p\u00e9e Des Rois",
    },
  },
  {
    citation:
      'On va pas installer notre carr\u00e9 germinal \u00e0 la taverne !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: "L'\u00e9p\u00e9e Des Rois",
    },
  },
  {
    citation:
      "Faire tourner cette baraque\u2026 et guider tous ces d\u00e9biles jusqu'au Graal, c'est sur moi que c'est tomb\u00e9. Les dieux ont trouv\u00e9 une bonne pomme pour s'arracher les cheveux avec cette histoire de dingues, ils sont pas pr\u00e8s de la l\u00e2cher.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre V',
      episode: "L'\u00c9p\u00e9e des rois ",
    },
  },
  {
    citation:
      "Pour le Graal, j'ai b\u00e2ti une forteresse, moi. Kaamelott, \u00e7a s'appelle. J'ai \u00e9t\u00e9 chercher des chevaliers dans tout le royaume. En Cal\u00e9donie, en Carm\u00e9lide, \u00e0 Gaunes, \u00e0 Vannes, aux Pays de Galles. J'ai fait construire une grande table, pour que les chevaliers s'assoient ensemble. Je l'ai voulue ronde, pour qu'aucun d'entre eux  ne se retrouve assis dans un angle, ou en bout de table. C'\u00e9tait compliqu\u00e9, alors j'ai essay\u00e9 d'expliquer ce qu'\u00e9tait le Graal, pour que tout le monde comprenne. C'\u00e9tait difficile, alors j'ai essay\u00e9 de rigoler pour que personne ne s'ennuie. J'ai rat\u00e9, mais je veux pas qu'on dise que j'ai rien foutu, parce que c'est pas vrai.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre V',
      episode: 'Le retour du Roi',
    },
  },
  {
    citation:
      "(\u00c0 S\u00e9li)Vous voulez que j'aille lui mettre une avoine ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le royaume sans t\u00eate',
    },
  },
  {
    citation:
      "Dites, vous savez qu'\u00e0 solliciter trop souvent la patience des gens, on finit par agacer ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le royaume sans t\u00eate',
    },
  },
  {
    citation:
      "Et qu'est-ce que vous voulez que j'y fasse \u00e0 la paperasse, moi ? Vous me prenez pour un serre-livre ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le royaume sans t\u00eate',
    },
  },
  {
    citation:
      'Non, mais je crois que mes ambitions se r\u00e9sument clairement: la f\u00e9rocit\u00e9 avant tout.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le royaume sans t\u00eate',
    },
  },
  {
    citation:
      "Parce qu'au bout d'un moment, il va falloir envisager la possibilit\u00e9 de me l\u00e2cher la collerette ! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Le royaume sans t\u00eate',
    },
  },
  {
    citation:
      "On a une autorit\u00e9 naturelle, il faut en profiter... J'suis s\u00fbr que m\u00eame \u00e0 poil on ferait toujours chef !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Le Royaume Sans T\u00eate',
    },
  },
  {
    citation:
      "[\u00c0 Galessin] Mais parce que votre existence est merdique mon pauvre ami, vous avez l'\u0153il qui brille \u00e0 chaque fois qu'un oiseau p\u00e8te, c'est triste \u00e0 voir. \u00c7a fait des ann\u00e9es que vous menez un train de vie de noix de St-Jacques, alors \u00e9videmment, un message qui annonce la visite d'un imb\u00e9cile porteur de bonnes nouvelles, c'est d\u00e9j\u00e0 un petit festival pour vous ! J'suis s\u00fbr que vous vous \u00eates peign\u00e9 pour l'occasion !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Dauphins',
    },
  },
  {
    citation:
      "Euh, \"Vous \u00eates l\u00e0.\", c'est-\u00e0-dire qu'il est surpris lui-m\u00eame, \u00e7a lui viendrait pas \u00e0 l'id\u00e9e de raccorder le fait qu'on est l\u00e0 avec le fait qu'il nous l'a demand\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Dauphins',
    },
  },
  {
    citation:
      "J'ai soudain la sensation limpide d'avoir gaspill\u00e9 ma jeunesse... L'avoir vue s'\u00e9chapper de mes mains comme l'anguille effray\u00e9e et m'appeler \u00e0 pr\u00e9sent sur le lierre du tombeau, o\u00f9 patiente depuis toujours le chant des enfants, les raisins vol\u00e9s\u2026",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Dauphins',
    },
  },
  {
    citation:
      "Je vais y aller, de jour, devant tout le monde. Et si je deviens roi de Bretagne, je vous nomme respectivement ministre des armes, et responsable de la protection des fronti\u00e8res. Parce que mon destin, c'est de m'entourer de nuls, de vrais nuls\u2026 Timeo libri rex agitur, \u00e7a veut rien dire, mais c'est ce que j'ai trouv\u00e9 de plus\u2026 aigre !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Dauphins',
    },
  },
  {
    citation:
      "Moi, apr\u00e8s deux heures de retard, j'ai pass\u00e9 le cap de l'agacement. Le peu de volont\u00e9 que j'avais de me farcir une r\u00e9union avec ce d\u00e9bile de Dagonet a d\u00e9finitivement disparu. Je suis une sorte de meuble.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Dauphins',
    },
  },
  {
    citation:
      "Moi c'est comme vous sentez, j'ai eu deux heures \u00e0 vide, c'est pas si souvent, je pense que j'en ai inconsciemment profit\u00e9 pour dresser un petit bilan.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Dauphins',
    },
  },
  {
    citation:
      "Votre femme, si j'avais pas la flemme de descendre de l\u00e0, elle aurait pris mon pied dans son cul depuis un moment. Parce y'a un truc qu'on oublie quand on parle de retirer Excalibur : c'est le respect au Roi Arthur! Et le respect au Roi Arthur je remarque que Madame en avait un peu plus quand elle \u00e9tait dans son PLUMARD !!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Les Dauphins',
    },
  },
  {
    citation:
      "Et si je sens que y a des anguilles \u00e0 la broche, dehors ! Comme C\u00e9sar quand il a chass\u00e9 les marchands du temple, et qu'ils ont foutu le camp sur le bateau avec les bestioles et l'p\u00e9p\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Les recruteurs',
    },
  },
  {
    citation:
      "Je vais vous poser une s\u00e9rie de questions. Vous r\u00e9pondez par oui, non, ou Zbradaraldjan. Ok c'est parti : o\u00f9 se trouve l'oiseau ?... Allez c'est facile \u00e7a. Trouve pas ? Bon tant pis. C'\u00e9tait \"sur la branche\". Eh oui, y a des pi\u00e8ges.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Les recruteurs',
    },
  },
  {
    citation:
      "Ma tante me demande de trouver un endroit pour y entreposer 667 noix. A la cave il y a de la place pour 595, \u00e0 la remise il y a la place pour 337. Qu'est-ce que je fais ? Je les ?... Allez on cherche bon dieu ! Je les... Zbradaraldjan le grenier!... Allez il d\u00e9gage le bourrin !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Les recruteurs',
    },
  },
  {
    citation:
      'Si la m\u00e9moire est \u00e0 la t\u00eate ce que le pass\u00e9, peut-on y acc\u00e9der \u00e0 six ? Oui, non, zbradaraldjan ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Les recruteurs',
    },
  },
  {
    citation:
      "(\u00c0 Venec) C'est un style que vous vous donnez d'\u00eatre \u00e0 moiti\u00e9 cul nu ? [...] Remarquez \u00e7a change. Et puis \u00e7a d\u00e9sacralise le guet-apens.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Repentants',
    },
  },
  {
    citation:
      "Les petits p\u00e8res, les affaires reprennent. Parce que la couronne, l\u00e0, j'aime autant vous dire qu'elle date pas d'hier. L\u00e0, y a de la relique ou je m'appelle pas Venec. [\u2026] Qu'est-ce vous en dites ? Bon, hein, imaginez que j'ai mon froc, \u00e7a me donne du style ou pas ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre V',
      episode: 'Les Repentants',
    },
  },
  {
    citation:
      'Quand on veut \u00eatre s\u00fbr de son coup, Seigneur Dagonet\u2026 on plante des navets. On ne pratique pas le putsch.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Les Repentants',
    },
  },
  {
    citation:
      "(\u00c0 \u00c9lias de Kelliwic'h )Eh ben, vous avez une de ces tronches, vous ! [\u00c9lias : Quoi ? Quelle t\u00eate ?] J'en sais rien mais plus que d'habitude, hein ! Vous avez toujours une mine de chiotte mais l\u00e0... j'sais pas si c'est la lumi\u00e8re du feu ou quoi mais on dirait que vous \u00eates mort.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Les Rivales',
    },
  },
  {
    citation:
      "(\u00c0 propos des moutons) Mais je n'comprends pas, c'est pas des moutons \u00e7a ? [\u2026] Bah ils sont tout... tout bizarres... [\u2026] Tondus ? Oh mon Dieu mais quelle horreur ! Mais pourquoi vous avez fait \u00e7a ?!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre V',
      episode: 'Les Transhumants',
    },
  },
  {
    citation:
      "Mais enfin, \u00e7a fait 15 lieues que vous nous p\u00e9tez les noyaux avec vos bestioles : les moutons, les ch\u00e8vres, les poules, vous croyez que \u00e7a nous int\u00e9resse \u00e7a ? (...) Oh la la, mais c'est pas vrai, les poules euh\u2026 c'est plus ce que c'\u00e9tait, les ch\u00e8vres c'est pas rentable, maintenant les moutons c'est fastidieux ! Vous savez m\u00eame pas ce que \u00e7a veut dire \u00abfastidieux\u00bb !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre V',
      episode: 'Les Transhumants',
    },
  },
  {
    citation:
      'Vous pouvez rentrer \u00e0 Kaamelott. Vous regarderez les gens. Vous regarderez les choses. Rien ne sera plus triste que vous.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Carlo Brandt',
      personnage: 'M\u00e9l\u00e9agant',
      saison: 'Livre V',
      episode: 'Le Th\u00e9\u00e2tre Fant\u00f4me',
    },
  },
  {
    citation:
      "Ce qu'il y a de bien avec les opinions tranch\u00e9es, c'est qu'\u00e7a relance le d\u00e9bat. En somme vous \u00eates une sorte de provocateur, quoi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre V',
      episode: 'Perceval de Sinope',
    },
  },
  {
    citation:
      "Vous, vous avez une id\u00e9e derri\u00e8re la main, j'en mettrais ma t\u00eate au feu !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre V',
      episode: 'Perceval de Sinope',
    },
  },
  {
    citation: "ARR\u00caTEZ DE M'APPELER SIRE !!!!!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre V',
      episode: 'Plusieurs \u00e9pisodes de la saison V ',
    },
  },
  {
    citation:
      "Ah, mais c'est pas possible, \u00e7a ! J'ai pas envie, de participer ! \u00c0 rien ! C'est pas mon genre, de participer ! Jamais je participerai ! \u00c0 part \u00e0 vos obs\u00e8ques, bande de cons !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Vae Soli !',
    },
  },
  {
    citation:
      "Mais ils sont tous plus d\u00e9biles les uns que les autres ces pigeons. Les n\u00f4tres quand on les envoie \u00e0 Kaamelott on se les fait syst\u00e9matiquement ramener par la vielle de la ferme d'\u00e0 cot\u00e9 ![...] \u00e7a s'adresse \u00e0 personne, les pigeons sont cons, point !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre V',
      episode: 'Vae Soli !',
    },
  },
  {
    citation:
      "Ah mais ouais... Ah mais bien s\u00fbr, les gars... \u00e9videmment... nan mais allez-y, c'est mon truc les bateaux moi, je connais \u00e0 mort... Allez-y hein... J'balance un caillou dans la flotte, y'en \u00e0 trente qui r'montent.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Manu Payet',
      personnage: 'V\u00e9rinus',
      saison: 'Livre VI',
      episode: 'Miles Ignotus',
    },
  },
  {
    citation:
      "Allons, je suis humili\u00e9. Moi qui croyais que le Romain respectait ses ennemis, et ben non ! En voil\u00e0 encore une belle d\u00e9sillusion. S'ils croient que c'est avec une mentalit\u00e9 pareille qu'ils vont f\u00e9d\u00e9rer le pays, on leur rend leur fric, on remonte sur les chevaux, et on leur met sur la gueule ! D'un autre c\u00f4t\u00e9, restituer une pareille quantit\u00e9 de bl\u00e9, \u00e7a frise le mauvais gout, je suis d\u00e9sol\u00e9, \u00e7a ne se fait pas ! Ne serait-ce par respect pour les plus n\u00e9cessiteux. Bon allons, apr\u00e8s, il y a le serment : si je garde le bl\u00e9, j'attaque pas ! Et ben voil\u00e0 : je garde le bl\u00e9, j'attaque pas; un serment c'est sacr\u00e9. Oui mais ce qui m'ennuie, c'est que c'est pile le jour que j'avais choisi pour vous passer le pouvoir, c'est quelque chose, les dates, hein ! Je garde le bl\u00e9, j'attaque pas, je suis sous serment. Mais vous, maintenant que vous \u00eates roi de Carm\u00e9lide, si... s'il vous prend le go\u00fbt d'aller leur d\u00e9rouiller le cul, je ne vois vraiment pas comment je pourrais vous en emp\u00eacher !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Miles Ignotus',
    },
  },
  {
    citation:
      "\u00c7a s'enferme les registres ! (Glaucia : Ah bon ? ) Ouais ! Et les trous du cul qui font pas leur boulot, \u00e7a s'enferme aussi !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Miles Ignotus',
    },
  },
  {
    citation: "Eh les gars, vous savez ce qu'on bouffe ce soir ? DU ROMAIN !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre VI',
      episode: 'Miles Ignotus',
    },
  },
  {
    citation:
      "(Glaucia : - Ave Publius Servius Capito, t'avais demand\u00e9 un rendez-vous ?) Non. J'ai pas envoy\u00e9 de fleurs non plus.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Miles Ignotus',
    },
  },
  {
    citation:
      "Une nuit, une nuit \u00e0 attendre... Une longue nuit avant de savoir si le souverain ennemi acceptera un trait\u00e9 de paix, si fragile, si friable qu'on aurait m\u00eame de la peine \u00e0 le prendre au s\u00e9rieux. Des solutions pr\u00e9caires, du rafistolage, voil\u00e0 tout ce que j'ai su inventer. La Bretagne r\u00e9sistait quand je suis arriv\u00e9, elle r\u00e9sistera encore quand je partirai. Je ne saurais dire pourquoi, je conserve encore, rescap\u00e9e de mon d\u00e9couragement, une curiosit\u00e9 : existe t-il quelqu'un parmi nous d\u00e9j\u00e0 - ou encore \u00e0 naitre - qui se destine \u00e0 restaurer l'ordre sur l'\u00eele de Bretagne? Et s'il existe, que peut-il bien poss\u00e9der que je ne poss\u00e8de moi-m\u00eame ? D'o\u00f9 vient-il? Est-il romain? Quelle arme tient-il \u00e0 sa ceinture ? Celui qui vaincra l\u00e0 o\u00f9 j'ai \u00e9chou\u00e9, je voudrais voir son visage une fois, car je lui conserve encore, rescap\u00e9 de mon d\u00e9couragement, ma curiosit\u00e9.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Tcheky Karyo',
      personnage: 'Manius Macrinus Firmus',
      saison: 'Livre VI',
      episode: 'Miles Ignotus',
    },
  },
  {
    citation:
      "(Un s\u00e9nateur : - J'vais vous dire : le jour o\u00f9 j'ai accept\u00e9 d'\u00eatre s\u00e9nateur, j'aurais mieux fait de m'p\u00e9ter une jambe.) \u00c7a peut encore s'arranger.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Miles Ignotus',
    },
  },
  {
    citation:
      "Regarde, vois ! Cette glorieuse cit\u00e9 cosmopolite, regarde.  Carrefour des civilisations, h\u00f4tesse orgueilleuse de peuplades fascin\u00e9es, regarde. On nous reproche assez qu'il n'existe plus de vrais Romains, hein ? Hein ? Allez trouve un Breton, trouve. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Patrick Chesnais',
      personnage: 'Lucius Sillius Sallustius',
      saison: 'Livre VI',
      episode: 'Miles Ingnotus',
    },
  },
  {
    citation:
      "Allez ! Et si on part assez t\u00f4t, on pourra peut-\u00eatre s'arr\u00eater deux minutes si on tombe sur des champis !.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Centurio',
    },
  },
  {
    citation:
      "Alors c'est \u00e7a, la strat\u00e9gie moderne? R\u00e9unir cinq trous-de-balle en cercle et s'balancer des fions?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Centurio',
    },
  },
  {
    citation:
      'Et ben vous inviterez vos copains \u00e0 la maison, on vous organisera une petite apr\u00e8s-midi \u00e0 la plage et vous pourrez faire des p\u00e2t\u00e9s !.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Centurio',
    },
  },
  {
    citation:
      "(S'adressant \u00e0 Merlin) Vous pr\u00e9f\u00e9rez monter dans la barque, maintenant, de plein gr\u00e9, ou dans vingt secondes avec un coup de pompe dans l'oignon ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Centurio',
    },
  },
  {
    citation:
      "Quand je dis que Rome est \u00e0 la Cit\u00e9 ce que la ch\u00e8vre est au fromage de ch\u00e8vre, je veux dire que c'est le petit plus qui est corollaire au noyau mais qui est pas directement dans le c\u0153ur du fruit !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre VI',
      episode: 'Pr\u00e6ceptores',
    },
  },
  {
    citation:
      "Quand vous \u00eates parti, je me suis dit : Je vais me promener ? Je vais me pas promener ? Finalement j'ai d\u00e9cid\u00e9 de me beurrer la gueule.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre VI',
      episode: 'Pr\u00e6ceptores',
    },
  },
  {
    citation:
      "(Capito : Les quatre en une seule fois, vous avez pas peur que \u00e7a soit un peu voyant non ?) Rien \u00e0 foutre ! Tu peux m\u00eame les crucifier sur une estrade au milieu du forum si \u00e7a te chante, c'est moi qui paye l'orchestre. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Patrick Chesnais',
      personnage: 'Lucius Sillius Sallustius',
      saison: 'Livre VI',
      episode: 'Arturi inquisitio',
    },
  },
  {
    citation:
      "Ca y est ! C'est leur derni\u00e8re saison aux d\u00e9biles. Tu peux pr\u00e9parer les outils, on passe directement de la discussion \u00e0 la d\u00e9sint\u00e9gration.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Patrick Chesnais',
      personnage: 'Lucius Sillius Sallustius',
      saison: 'Livre VI',
      episode: 'Arturi inquisitio',
    },
  },
  {
    citation:
      "A l'\u00e9poque, quand je levais le doigt, y avait 15 000 soldats qui gueulaient Imperator ! Maintenant, quand je l\u00e8ve le doigt, c'est pour aller pisser... ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pierre Mondy',
      personnage: 'C\u00e9sar',
      saison: 'Livre VI',
      episode: 'Arturi Inquisitio',
    },
  },
  {
    citation:
      "Imperator ! Aaaaah ! Imperator ! Ah \u00e7a fait du bien cr\u00e9nom ! Ca me change de tous ces glands l\u00e0... Votre tranquillit\u00e9 par-ci, votre tranquillit\u00e9 par-l\u00e0... \u00c7a, dis donc... Pour \u00eatre tranquille, 24h sur 24 au plumard... \u00c0 pioncer, \u00e0 bouffer de la compote... \u00c7a, c'est s\u00fbr que j'encha\u00eene pas les crises de nerf... Mais assieds-toi l\u00e0 ! On dirait que tu vas chanter une chanson ! Allez ! ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pierre Mondy',
      personnage: 'C\u00e9sar',
      saison: 'Livre VI',
      episode: 'Arturi Inquisitio',
    },
  },
  {
    citation:
      "Si Kadoc il surveille bien, il aura des p'tits cubes de fromage.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre VI',
      episode: 'Arturi Inquisitio',
    },
  },
  {
    citation:
      "Alors, sans vouloir te commander, aurais-tu l'obligeance de bien vouloir te magner le cul.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation: '(En coin, \u00e0 sa m\u00e8re) Pardon, m\u00e8re.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      "J'esp\u00e8re que tu fabules, bourgeois de bon aloi ! As-tu la fabulette bien preste ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      "M\u00e9fie toi, riche homme : on ne berne pas deux fois Urgan l'homme goujon, m\u00eame une fois !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      "On devient pas chef parce qu'on le m\u00e9rite andouille ! On devient chef par un concours de circonstances, on le m\u00e9rite apr\u00e8s ! Moi, il m'a p't\u00eat fallu dix ans pour m\u00e9riter mon grade, si pas vingt. Tous les jours, j'ai travaill\u00e9 pour pas nager dans mon uniforme. Y a pas trente-six solutions. Arturus ? Hein ? Fais semblant ! Fais semblant d'\u00eatre Dux. Fais semblant de m\u00e9riter ton grade. Fais semblant d'\u00eatre un grand chef de guerre. Si tu fais bien semblant, un jour tu verras, t'auras plus besoin !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pierre Mondy',
      personnage: 'C\u00e9sar',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation: 'Patience est m\u00e8re de famille !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      "S\u00e9chez vos larmes mon \u00e9pous\u00e9e, je m'occupe d'aller chercher ces petites salopes par la peau du fion !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Nicolas Gabion',
      personnage: 'Bohort',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      "Tu ne t'en tireras \u00e0 si bon compte que s'ils font les bons amis !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      "Tu salues plus les g\u00e9n\u00e9raux ? C'est pourtant largement au-dessus de ton grade merdique.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      'Vous pr\u00e9f\u00e9rez "Bohort le jeune" ou "Bohort l\'ami du raisin" ? Parce que j\'avais r\u00e9fl\u00e9chi \u00e0 la seconde possibilit\u00e9, \u00e7a fait plus fruit\u00e9 !',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Vincent',
      personnage: 'Urgan',
      saison: 'Livre VI',
      episode: 'Dux bellorum',
    },
  },
  {
    citation:
      "Allez, y'a plein de bruit, l\u00e0 ! Si \u00e7a se trouve c'est bourr\u00e9 d'oiseaux venimeux. Y'en a des rouges, des jaunes, des re-rouges et des pourpres ! Y bouffent que des noisettes et des escalopes de veau. Et quand ils vous donnent un coup de bec vous voyez une grande lumi\u00e8re et \u00e7a vous donne la diarrh\u00e9e !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre VI',
      episode: 'Dux Bellorum',
    },
  },
  {
    citation:
      "\u00c7a fait une heure qu'on vous ach\u00e8te tout ce qui vous passe sous le nez ! Si jamais on vous attaque, les gardes peuvent m\u00eame pas vous d\u00e9fendre parce qu'ils sont oblig\u00e9s de transporter vos saloperies !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre VI',
      episode: 'Dux Bellorum',
    },
  },
  {
    citation:
      "Je vais poser une question simple : et vous, vous le m\u00e9ritez ? Ah non mais attendez, est-ce que vous le m\u00e9ritez, est-ce que vous m\u00e9ritez votre place ?! Lurco ! Tu devais aller en Germanie... c'est ta tante qui t'a fait entrer au s\u00e9nat ! Pisansius ! Pas une seule ann\u00e9e dans la l\u00e9gion, pas une seule ! J'm...e demande m\u00eame parfois si t'as d\u00e9j\u00e0 tenu une arme dans ta vie... Destisius ! C'est ton p\u00e8re qui a donn\u00e9 la moiti\u00e9 de ses terres pour que quelqu'un puisse prendre ta place en Afrique... C'est vrai ou c'est pas vrai ? Vous \u00eates tous des planqu\u00e9s, tous, tous, tous, tous , tous. [...] Vous allez me signer cette tablette, parce que le p'tit m\u00e9rite largement son grade autant que vous vous m\u00e9ritez votre place au S\u00e9nat... Largement.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Patrick Chesnais',
      personnage: 'Lucius Sillius Sallustius',
      saison: 'Livre VI',
      episode: 'Dux Bellorum',
    },
  },
  {
    citation:
      "Nan mais je l'ai d\u00e9j\u00e0 impressionn\u00e9, moi ! Je lui ai expliqu\u00e9 une nouvelle technique de combat : on se bat \u00e0 moiti\u00e9 \u00e0 mains nues, et \u00e0 moiti\u00e9 avec du calcium. J'peux vous dire il faisait moins le malin !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre VI',
      episode: 'Dux Bellorum',
    },
  },
  {
    citation:
      "Oh allez, mon pote ! Fais un effort ! Dans dix minutes, t'es pendu et on n'en parle plus. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Demolon',
      personnage: 'Spurius Cordius Frontinius',
      saison: 'Livre VI',
      episode: 'Dux Bellorum',
    },
  },
  {
    citation:
      "Ah voil\u00e0 ! Et c'est l\u00e0 le danger de la m\u00e9taphore... si on parle avec des gros tas de bidoches, au bout de cinq minutes personne ne parle de la m\u00eame chose!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Nuptiae',
    },
  },
  {
    citation:
      "(\u00c0 S\u00e9li)Les coups de g\u00e9nies, j'ai pas besoin qu'on me les souffle.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre VI',
      episode: 'Nuptiae',
    },
  },
  {
    citation:
      "(au Ma\u00eetre d'Armes) J'pensais \u00e0 une chose, en toute amiti\u00e9, un gros pain dans votre t\u00eate, \u00e7a serait de nature \u00e0 vous convenir ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Emmanuel Meirieu',
      personnage: 'Appius Manilius',
      saison: 'Livre VI',
      episode: 'Nuptiae',
    },
  },
  {
    citation:
      "[Aux rois de Logres] Bon. Ca c'est bien gentil mais\u2026 \u00c0 quel moment on trahit ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Nuptiae',
    },
  },
  {
    citation:
      '(Aux rois de Logres)Moi je vous le dis, si on monte pas dans le char quand il nous passe sous le nez, on finira la route \u00e0 pied.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre VI',
      episode: 'Nuptiae',
    },
  },
  {
    citation:
      "En fait, je m'en suis pris deux, mais j'ai cherch\u00e9 la merde.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Emmanuel Meirieu',
      personnage: 'Appius Manilius',
      saison: 'Livre VI',
      episode: 'Nuptiae',
    },
  },
  {
    citation:
      "Ah ouais non mais attends, c'est du joli boulot l\u00e0, les p'tits sacripants... Oui, sacripants, oui. C'est un terme un peu craignos. D'ailleurs, ben voil\u00e0, m\u00eame craignos, c'est craignos. Mais c'est parce que je suis choqu\u00e9 ! Qu'est-ce que j'entends ? Tu demandes en mariage une personne \u00e2g\u00e9e ? Et la p'tite Julia alors, dans tout \u00e7a ? Ah il faut que j'm'en occupe tout seul, c'est \u00e7a ? Ah tr\u00e8s bien... Merci les p'tits fripons... Tiens, \u00e7a aussi, c'est un peu craignos, tu vois ? Mais c'est parce que l\u00e0 ouuuh ! Et bravo g\u00e9n\u00e9ral, beau boulot ! Ah les pots cass\u00e9s, c'est Verinus qui r\u00e9pare les pots cass\u00e9s tout simplement... Ok d'accord, tr\u00e8s bien...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Manu Payet',
      personnage: 'V\u00e9rinus',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "[C\u00e9sar offre \u00e0 Arthur la bague de contr\u00f4le des lames] C'est pour t'apprendre \u00e0 faire confiance \u00e0 la magie, parce qu'il n'y a que \u00e7a qui marche sur Terre, Arturus, la magie. Le reste, \u00e7a ne vaut pas un rond.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pierre Mondy',
      personnage: 'C\u00e9sar',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "C'est tout ? Treize ans qu'ils me laissent pourrir sur pied, dans ce pays de merde ! Treize ans ! Maintenant ils m'envoient un message, il faut que je rentre chez moi !\r\n[...] Mais qu'est ce qui leur fait croire que \u00e7a existe encore chez moi ?!! Est-ce qu'un type qui a foutu le camp treize ans peut encore avoir un chez soi ? C'est compl\u00e8tement absurde...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Tcheky Karyo',
      personnage: 'Manius Macrinus Firmus',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      'Euh, juste une chose... Manquez encore une seule fois de respect au futur roi de Bretagne, et je vous coupe les boules ! Ca vous fera une jolie petite sacoche pour ranger vos d\u00e9s \u00e0 coudre.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "Je pr\u00e9viens monsieur et madame que s'ils ont dans l'id\u00e9e de remplacer leur hypoth\u00e9tique prog\u00e9niture par des groupes d'amis dans le style de celui-ci, en ce qui me concerne, y a d'la d\u00e9mission dans l'air.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Beno\u00eet',
      personnage: 'Drusilla',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "Mais moi non plus, je suis pas le chef supr\u00eame de la premi\u00e8re puissance mondiale ! Le chef supr\u00eame de la premi\u00e8re puissance mondiale, c'est celui qui tire les ficelles dans l'arri\u00e8re-boutique, moi je suis juste un spectacle de marionnettes. Voil\u00e0. La petite journ\u00e9e d\u00e9sarticul\u00e9e de C\u00e9sar le pantin. Et \u00e7a se passe dans le ghetto !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pierre Mondy',
      personnage: 'C\u00e9sar',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      '(Manilius : Et ben je suis euh...) Je suis, je suis, je suis une petite tapette, qui parle \u00e0 tort et \u00e0 travers, sans que personne ne lui demande son avis, alors elle ferme son bec la poupoule... Et elle laisse parler les grands gar\u00e7ons.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "Mille excuses... Normalement, je devrais pas dire \u00e7a \u00e0 un pr\u00eatre chr\u00e9tien, mais, comme vous m'avez tout l'air d'\u00eatre un gros baltringue euh, je me permets ?\r\n(P\u00e8re Blaise : Mmmh ?...) Vous avez oubli\u00e9 les alliances.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Beno\u00eet',
      personnage: 'Drusilla',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation: "Moi j'ai vomi deux fois mais c'est moi qu'ai ramass\u00e9\r\n !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "[S'adressant \u00e0 Arthur.] Des chefs de guerre, il y en a de toutes sortes. Des bons, des mauvais, des pleines cagettes, il y en a. Mais une fois de temps en temps, il en sort un. Exceptionnel. Un h\u00e9ros. Une l\u00e9gende. Des chefs comme \u00e7a, il y en a presque jamais. Mais tu sais ce qu'ils ont tous en commun ? Tu sais ce que c'est, leur pouvoir secret ? Ils ne se battent que pour la dignit\u00e9 des faibles.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pierre Mondy',
      personnage: 'C\u00e9sar',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "Si on cueille pas les cerises tant qu'elles sont sur l'arbre, on fera tintin pour le clafoutis. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Nupti\u00e6',
    },
  },
  {
    citation:
      "( \u00c0 Arthur et Gueni\u00e8vre) H\u00e9 ! A l'origine j'\u00e9tais sorti pour l\u00e2cher une caisse, mais quand on vous voit comme \u00e7a dans le clair de lune, on a pas envie de bousiller le tableau. J'vais aller loufer \u00e0 l'int\u00e9rieur pour emboucaner les autres fumiers. Profitez ! Le plus beau dans les histoires d'amour, c'est le d\u00e9but...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Arturus rex',
    },
  },
  {
    citation:
      "Ah mais foutez moi la paix ! J'ai travers\u00e9 l'\u00eele en long, en large et en travers ! Pareil en Aquitaine et en Armorique ! Vous croyez que j'me souviens de tous les trous du cul \u00e0 qui j'ai balanc\u00e9 mon la\u00efus ?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Jacques Chambon',
      personnage: 'Merlin',
      saison: 'Livre VI',
      episode: 'Arturus rex',
    },
  },
  {
    citation:
      "(\u00e0 Arthur) Ouais en m\u00eame temps \u00e7a vous a prouv\u00e9 qu'on avait pas froid au ventre !\r\n(Arthur : aux yeux!)\r\nComment ?\r\n(Arthur : Aux yeux, pas froid au ventre.)\r\n(Karadoc : Froid aux yeux ? Comment c'est possible \u00e7a ?)\r\nBen si, \u00e0 la limite avec du vent\u2026 mais bon si on a froid aux yeux on les ferme. !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "Alors \u00e9coutez-moi bien les sent-la-pisse, vous \u00eates probablement en train d'insulter un roi d\u00e9sign\u00e9 par les dieux, et s'il y a une chose dont il ne faut pas se foutre, c'est les dieux !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "(\u00c0 propos des biscuits de la marraine du roi d'Armorique) Ils sentent la pisse, aussi.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "(\u00c0 S\u00e9li)Oui vous avez raison, soyez pas trop d'mon c\u00f4t\u00e9. On aurait l'air un peu couple \u00e0 la con \u00e0 \u00eatre tout l'temps d'accord !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation: '(Aux rois assembl\u00e9s) FUMIEEEERS !!!!',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "C'que j'vous explique depuis trois quart d'heure. J'en ai rien a foutre de devenir chevalier. Ce qui m'int\u00e9resse, si y a un nouveau Roi qui chapaute tout l'syst\u00e8me, c'est d'\u00eatre en affaires avec.\r\n(Ma\u00eetre d'armes : Nan mais vous avez quand m\u00eame \u00e9cout\u00e9 notre topo sur la f\u00e9d\u00e9ration ?)\r\nJ'vous ai pas coup\u00e9s en plein milieu parce que bon... Mais effectivement \u00e7a m'concerne pas votre bordel. Qu'vous vous r\u00e9unissiez pour faire des f\u00e9d\u00e9rations, m\u00eame jouer aux cartes... c'qui compte c'est qu'ce soit moi qui vous fournisse en putes.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lo\u00efc Varraut',
      personnage: 'Venec',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation: 'Deus minimi placet : seul les dieux d\u00e9cident.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation: "L'adjectif qui me correspond le mieux, c'est : le plancton.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Tony Saba',
      personnage: 'Herv\u00e9 de Rinel',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "Moi les premi\u00e8res ann\u00e9es avec ma femme, je faisais ces conneries aussi. Une r\u00e9union hebdomadaire pour r\u00e9gler les probl\u00e8mes avant qu'ils ne s'enveniment. R\u00e9sultat aujourd'hui, quand elle tombe sur moi dans les couloirs de la maison, elle a des remont\u00e9es gastriques, elle me trouve laid et con, et elle essaie de me tuer trois fois par semaine. Euh depuis les tables rondes, j'y crois plus beaucoup...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "Ouais c'est bien qu'on reste un peu dehors, comme \u00e7a j'pourrais vous mettre une grosse tarte en plein air.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Emmanuel Meirieu',
      personnage: 'Appius Manilius',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "Regardez moi la jolie petite paire de fillettes, si c'est pas fragile!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Christian Bujeau',
      personnage: "Le Ma\u00eetre d'Armes",
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      "Vous pouvez pas vous les compter vous-m\u00eame vos points ? Faut forc\u00e9ment qu'on vous tienne le zizi ? ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Gilles Graveleau',
      personnage: 'Roparzh',
      saison: 'Livre VI',
      episode: 'Arturus Rex',
    },
  },
  {
    citation:
      '(\u00e0 Demetra)Vous savez o\u00f9 vous pouvez vous la mettre, votre potion ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Anne Girouard',
      personnage: 'Gueni\u00e8vre',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "[\u00c0 Galessin] Soyons fut\u00e9s. [...] Non... mais pas vous ! Vous, vous pouvez rester tsoin-tsoin comme d'habitude.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "Allez, vous devriez mettre les bouts, les demi-sels ! C'est gentil d'\u00eatre pass\u00e9s ! On va vous faire un p'tit sac avec des restes pour manger chez vous.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Claire Nadeau',
      personnage: 'Cryda de Tintagel',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "Ben dis donc, j'sais pas c'que c'est, \"la pire\", mes p'tits cousins, mais j'peux vous garantir que, vu d'ici, \u00e7a fout les boules, hein... Ouuuh... Non, parce que, quand il a dit euh... plusieurs options, j'ai fait toute une s\u00e9rie de p'tits pets comme \u00e7a, pou, pou, pou...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Manu Payet',
      personnage: 'V\u00e9rinus',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "Bon bon... Moi c'que j'en dis, c'est que, si vous arrivez \u00e0 contenir vos \u00e9lans, et \u00e0 me laisser g\u00e9rer tout \u00e7a \u00e0 ma sauce, on pourrait bien se retrouver \u00e0 la t\u00eate du Royaume en moins de temps qu'il n'en faut pour dire putsch. Ha ha ha ! J'aime assez ce p'tit ton d\u00e9cal\u00e9 euh...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "D\u00e9sol\u00e9 mais vous l'avez chi\u00e9 votre mariage. Ce s'rait rien si c'\u00e9tait pas juste la deuxi\u00e8me fois.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Emmanuel Meirieu',
      personnage: 'Appius Manilius',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "Il est roi d'Orcanie, le sanglier boulimique, ch\u00e8re madame !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "J'ai \u00e0 peu pr\u00e8s compris le principe du double jeu, mais je ne saurais dire pourquoi, j'ai l'impression que tu nous l'as mis dans l'os ? Et je pense que si tu refous les pieds \u00e0 Rome, ne le prends pas mal hein... je te ferai \u00e9liminer. ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      'Je vous ai pass\u00e9 le pouvoir, je vais pas vous le reprendre. Mais faites attention de pas devenir une tarlouse.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Philippe Nahon',
      personnage: 'Goustan',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      '"Mundi placet et spiritus minima", \u00e7a n\'a aucun sens mais on pourrait tr\u00e8s bien imaginer une traduction du type : "Le roseau plie, mais ne c\u00e8de... qu\'en cas de p\u00e9pin" ce qui ne veut rien dire non plus.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      '[Parlant de sa femme, Anna] Bon bah moi... je la suis ! Parce que je suis... tr\u00e8s amoureux.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      'Sans rire, vous foutez quoi l\u00e0-dedans l\u00e0 ? Pourtant, vous croulez pas sous les visites diplomatiques, il me semble ? Une fois tous les dix ans, vous pouvez donner un coup de balai, non ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Levantal',
      personnage: 'Capito',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "Votre salope de fille m'a renvers\u00e9 une pleine soupi\u00e8re de bouillon sur toute la zone g\u00e9nitale, \u00e7a m'a LITT\u00c9RALEMENT cuit les boules ! Vous remarquerez \u00e0 quel point il m'est \u00e9gal de parler de mes noix \u00e0 ma belle-m\u00e8re, famille de tar\u00e9s !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "Y a un truc, quand m\u00eame, qu'il faut que vous compreniez bien les gars... Si vous voulez, moi, \u00e0 la base... J'suis une balance... C'est le postulat de d\u00e9part, on a devant soi, une balance. Donc une personne, si vous voulez, qu'on n'a pas besoin de cogner puisque elle vient elle-m\u00eame d\u00e9livrer l'information, sans que vous ayez m\u00eame \u00e0 la demander. Parce que non, pourquoi j'vous dis \u00e7a ? Puisque... on est quand m\u00eame \u00e0 une heure et demie de marrons dans la gueule l\u00e0... Et si j'vous dis que je ne sais rien, c'est que je pense qu'effectivement...\r\n(Procyon le frappe)\r\nPfff... je n'sais rien...",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Manu Payet',
      personnage: 'V\u00e9rinus',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      'Y sont o\u00f9 les quignons \u00e0 Kadoc ? Y sont dans la poche? Y sont bien cach\u00e9s ?',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Brice Fournier',
      personnage: 'Kadoc',
      saison: 'Livre VI',
      episode: 'Lacrimosa',
    },
  },
  {
    citation:
      "D'autant que les orchestres en Bretagne, franchement, autant se frotter les noyaux avec des orties!",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Demolon',
      personnage: 'Spurius Cordius Frontinius',
      saison: 'Livre VI',
      episode: 'Lacrimosa ',
    },
  },
  {
    citation:
      "Oui ... et tu veux les jeter o\u00f9, tes \u00e9pluchures ? ... en Germanie ?\r\nBalance-moi tes saloperies, et radine sur le champs.\r\nPARCE-QUE QUAND je dis TOUT l'MONDE ... ET BEN C'EST TOUT L'MONDE !\r\n...\r\nTu es gentil.",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Pascal Demolon',
      personnage: 'Spurius Cordius Frontinius',
      saison: 'Livre VI',
      episode: 'Lacrimosa ',
    },
  },
  {
    citation:
      "(\u00e0 Arthur qui vient de lui raconter longuement un r\u00eave)\r\nC'est vraiment chouette comme r\u00eave... Moi l'autre nuit j'ai r\u00eav\u00e9 que Karadoc avait des pinces... \r\nArthur : (confus) C'est-\u00e0-dire? \r\nComme un crabe... \r\nArthur : Ah? Et qu'est-ce qu'il faisait avec ses pinces?\r\nIl me pin\u00e7ait le m\u00e9nisque.\r\nArthur : (interloqu\u00e9) Le m\u00e9nisque?\r\nCompar\u00e9s aux v\u00f4tres, ils sont pourris mes r\u00eaves, ou pas?",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Franck Pitiot',
      personnage: 'Perceval',
      saison: 'Livre VI',
      episode: 'Dies Ir\u00e6',
    },
  },
  {
    citation:
      'Je suis le Roi Arthur, je ne d\u00e9sesp\u00e8re pas. Jamais je perds courage. Je suis un exemple pour les enfants.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre VI',
      episode: 'Dies Irae',
    },
  },
  {
    citation: 'Les r\u00eaves, \u00e7a se compare pas.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre VI',
      episode: 'Dies Irae',
    },
  },
  {
    citation:
      "Qu'est-ce que c'est que quelqu'un qui souffre et qui fait couler son sang par terre pour que tout le monde soit coupable ? Tous les suicid\u00e9s sont le Christ. Toutes les baignoires sont le Graal... ",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Alexandre Astier',
      personnage: 'Arthur',
      saison: 'Livre VI',
      episode: 'Dies Irae',
    },
  },
  {
    citation:
      "[\u00c0 L\u00e9odagan] \u00c9coutez, comme \u00e7a a priori, \u00e7a m'\u00e9voque rien, mais honn\u00eatement c'est possible. Ce serait assez le genre de la maison, en tout cas ! De l'autre c\u00f4t\u00e9, voyez un peu l'ironie, si j'avais pas foment\u00e9 une attaque par l'ouest, vous seriez all\u00e9s vous \u00e9craser contre les Romains \u00e0 l'est !\r\nOui, alors, pourquoi ? Pourquoi trahir sans arr\u00eat les gens avec qui je collabore ? Je dirais que c'est probablement une r\u00e9ponse compulsive \u00e0 une crainte de m'attacher. Briser une relation plut\u00f4t que la cultiver pour ne pas se retrouver d\u00e9muni face au bonheur. Oui, pour r\u00e9pondre \u00e0 votre question : j'ai peur d'aimer !",
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Fran\u00e7ois Rollin',
      personnage: 'Loth',
      saison: 'Livre VI',
      episode: 'Praeceptores',
    },
  },
  {
    citation:
      '(\u00c0 Loth)Je veux bien passer sur vos tentatives de putsch, vos combines v\u00e9reuses... En revanche, si vous ne la fermez pas tout de suite, mais, d\u00e9finitivement, je vous aplatis les boules avec \u00e7a.',
    infos: {
      auteur: 'Alexandre Astier',
      acteur: 'Lionnel Astier',
      personnage: 'L\u00e9odagan',
      saison: 'Livre VI',
      episode: 'Praeceptores',
    },
  },
];

export default function QuoteList() {
  return (
    <ul>
      {quotesData
        .filter((quo) => {
          if (
            quo.infos.personnage === 'Karadoc' &&
            quo.infos.saison === 'Livre II'
          ) {
            return true;
          } else return false;
        })
        .sort((quoA, quoB) => {
          if (quoA.citation < quoB.citation) {
            return -1;
          } else return 1;
        })
        .map((quo) => {
          return <Quote author={quo.infos.personnage} text={quo.citation} />;
        })}
    </ul>
  );
}
