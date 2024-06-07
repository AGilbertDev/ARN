const tableau = document.getElementById("tableau"); // Le tableau des acides aminés.

var choix1 = "", choix2 = "", choix3 = ""; // Les bases choisies par l'utilisateur.

var isDone = false; // Indique si l'utilisateur a terminé ses choix.

const bases = // Les regions qui montrent visuellement les choix des bases 1, 2, et 3 dans le tableau.
{
	"base1": document.getElementById("base1"), "base2": document.getElementById("base2"), "base3": document.getElementById("base3"),
}

const nucleotides = // Les boutons U C A G qui permettant de choisir un nucléotide pour chaque base.
{
	"base1u": document.getElementById("base1u"), "base1c": document.getElementById("base1c"), "base1a": document.getElementById("base1a"), "base1g": document.getElementById("base1g"),
	"base2u": document.getElementById("base2u"), "base2c": document.getElementById("base2c"), "base2a": document.getElementById("base2a"), "base2g": document.getElementById("base2g"),
	"base30u": document.getElementById("base30u"), "base30c": document.getElementById("base30c"), "base30a": document.getElementById("base30a"), "base30g": document.getElementById("base30g"),
	"base31u": document.getElementById("base31u"), "base31c": document.getElementById("base31c"), "base31a": document.getElementById("base31a"), "base31g": document.getElementById("base31g"),
	"base32u": document.getElementById("base32u"), "base32c": document.getElementById("base32c"), "base32a": document.getElementById("base32a"), "base32g": document.getElementById("base32g"),
	"base33u": document.getElementById("base33u"), "base33c": document.getElementById("base33c"), "base33a": document.getElementById("base33a"), "base33g": document.getElementById("base33g")
}

const acidesAmines = // Les acides aminés formés par la combinaison des nucléotides choisis.
{
	"uuu": document.getElementById("uuu"), "ucu": document.getElementById("ucu"), "uau": document.getElementById("uau"), "ugu": document.getElementById("ugu"),
	"uuc": document.getElementById("uuc"), "ucc": document.getElementById("ucc"), "uac": document.getElementById("uac"), "ugc": document.getElementById("ugc"),
	"uua": document.getElementById("uua"), "uca": document.getElementById("uca"), "uaa": document.getElementById("uaa"), "uga": document.getElementById("uga"),
	"uug": document.getElementById("uug"), "ucg": document.getElementById("ucg"), "uag": document.getElementById("uag"), "ugg": document.getElementById("ugg"),
	"cuu": document.getElementById("cuu"), "ccu": document.getElementById("ccu"), "cau": document.getElementById("cau"), "cgu": document.getElementById("cgu"),
	"cuc": document.getElementById("cuc"), "ccc": document.getElementById("ccc"), "cac": document.getElementById("cac"), "cgc": document.getElementById("cgc"),
	"cua": document.getElementById("cua"), "cca": document.getElementById("cca"), "caa": document.getElementById("caa"), "cga": document.getElementById("cga"),
	"cug": document.getElementById("cug"), "ccg": document.getElementById("ccg"), "cag": document.getElementById("cag"), "cgg": document.getElementById("cgg"),
	"auu": document.getElementById("auu"), "acu": document.getElementById("acu"), "aau": document.getElementById("aau"), "agu": document.getElementById("agu"),
	"auc": document.getElementById("auc"), "acc": document.getElementById("acc"), "aac": document.getElementById("aac"), "agc": document.getElementById("agc"),
	"aua": document.getElementById("aua"), "aca": document.getElementById("aca"), "aaa": document.getElementById("aaa"), "aga": document.getElementById("aga"),
	"aug": document.getElementById("aug"), "acg": document.getElementById("acg"), "aag": document.getElementById("aag"), "agg": document.getElementById("agg"),
	"guu": document.getElementById("guu"), "gcu": document.getElementById("gcu"), "gau": document.getElementById("gau"), "ggu": document.getElementById("ggu"),
	"guc": document.getElementById("guc"), "gcc": document.getElementById("gcc"), "gac": document.getElementById("gac"), "ggc": document.getElementById("ggc"),
	"gua": document.getElementById("gua"), "gca": document.getElementById("gca"), "gaa": document.getElementById("gaa"), "gga": document.getElementById("gga"),
	"gug": document.getElementById("gug"), "gcg": document.getElementById("gcg"), "gag": document.getElementById("gag"), "ggg": document.getElementById("ggg")
}

/*================================================================
			 Partie 1: Fonctions de selection des bases
================================================================*/

/*
* Séléctionne et retourne les acides aminés du tableau qui sont affectés (visuellement) par chaque bouton.
*
* @param {string} btnID - L'ID du bouton survolé ou cliqué.
* @return {array} - La liste des acides amines.
*/
function activate(btnID)
{
	var activeList = [];

	switch (btnID)
	{
		case "base1u":
			activeList =
				[
					"uuu", "ucu", "uau", "ugu",
					"uuc", "ucc", "uac", "ugc",
					"uua", "uca", "uaa", "uga",
					"uug", "ucg", "uag", "ugg"
				];
			break;

		case "base1c":
			activeList =
				[
					"cuu", "ccu", "cau", "cgu",
					"cuc", "ccc", "cac", "cgc",
					"cua", "cca", "caa", "cga",
					"cug", "ccg", "cag", "cgg"
				];
			break;

		case "base1a":
			activeList =
				[
					"auu", "acu", "aau", "agu",
					"auc", "acc", "aac", "agc",
					"aua", "aca", "aaa", "aga",
					"aug", "acg", "aag", "agg"
				];
			break;

		case "base1g":
			activeList =
				[
					"guu", "gcu", "gau", "ggu",
					"guc", "gcc", "gac", "ggc",
					"gua", "gca", "gaa", "gga",
					"gug", "gcg", "gag", "ggg"
				];
			break;

		case "base2u":
			switch (choix1)
			{
				case "base1u":
					activeList =
						[
							"uuu", "uuc", "uua", "uug",
						];
					break;
				case "base1c":
					activeList =
						[
							"cuu", "cuc", "cua", "cug",
						];
					break;
				case "base1a":
					activeList =
						[
							"auu", "auc", "aua", "aug",
						];
					break;
				case "base1g":
					activeList =
						[
							"guu", "guc", "gua", "gug",
						];
					break;
			}
			break;

		case "base2c":
			switch (choix1)
			{
				case "base1u":
					activeList =
						[
							"ucu", "ucc", "uca", "ucg",
						];
					break;
				case "base1c":
					activeList =
						[
							"ccu", "ccc", "cca", "ccg",
						];
					break;
				case "base1a":
					activeList =
						[
							"acu", "acc", "aca", "acg",
						];
					break;
				case "base1g":
					activeList =
						[
							"gcu", "gcc", "gca", "gcg",
						];
					break;
			}
			break;

		case "base2a":
			switch (choix1)
			{
				case "base1u":
					activeList =
						[
							"uau", "uac", "uaa", "uag",
						];
					break;
				case "base1c":
					activeList =
						[
							"cau", "cac", "caa", "cag",
						];
					break;
				case "base1a":
					activeList =
						[
							"aau", "aac", "aaa", "aag",
						];
					break;
				case "base1g":
					activeList =
						[
							"gau", "gac", "gaa", "gag",
						];
					break;
			}
			break;

		case "base2g":
			switch (choix1)
			{
				case "base1u":
					activeList =
						[
							"ugu", "ugc", "uga", "ugg",
						];
					break;
				case "base1c":
					activeList =
						[
							"cgu", "cgc", "cga", "cgg",
						];
					break;
				case "base1a":
					activeList =
						[
							"agu", "agc", "aga", "agg",
						];
					break;
				case "base1g":
					activeList =
						[
							"ggu", "ggc", "gga", "ggg",
						];
					break;
			}
			break;

		case "base30u":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"uuu"
						];
					break;
				case "base2c":
					activeList =
						[
							"ucu"
						];
					break;
				case "base2a":
					activeList =
						[
							"uau"
						];
					break;
				case "base2g":
					activeList =
						[
							"ugu"
						];
					break;
			}
			break;

		case "base30c":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"uuc"
						];
					break;
				case "base2c":
					activeList =
						[
							"ucc"
						];
					break;
				case "base2a":
					activeList =
						[
							"uac"
						];
					break;
				case "base2g":
					activeList =
						[
							"ugc"
						];
					break;
			}
			break;

		case "base30a":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"uua"
						];
					break;
				case "base2c":
					activeList =
						[
							"uca"
						];
					break;
				case "base2a":
					activeList =
						[
							"uaa"
						];
					break;
				case "base2g":
					activeList =
						[
							"uga"
						];
					break;
			}
			break;

		case "base30g":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"uug"
						];
					break;
				case "base2c":
					activeList =
						[
							"ucg"
						];
					break;
				case "base2a":
					activeList =
						[
							"uag"
						];
					break;
				case "base2g":
					activeList =
						[
							"ugg"
						];
					break;
			}
			break;

		case "base31u":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"cuu"
						];
					break;
				case "base2c":
					activeList =
						[
							"ccu"
						];
					break;
				case "base2a":
					activeList =
						[
							"cau"
						];
					break;
				case "base2g":
					activeList =
						[
							"cgu"
						];
					break;
			}
			break;

		case "base31c":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"cuc"
						];
					break;
				case "base2c":
					activeList =
						[
							"ccc"
						];
					break;
				case "base2a":
					activeList =
						[
							"cac"
						];
					break;
				case "base2g":
					activeList =
						[
							"cgc"
						];
					break;
			}
			break;

		case "base31a":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"cua"
						];
					break;
				case "base2c":
					activeList =
						[
							"cca"
						];
					break;
				case "base2a":
					activeList =
						[
							"caa"
						];
					break;
				case "base2g":
					activeList =
						[
							"cga"
						];
					break;
			}
			break;

		case "base31g":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"cug"
						];
					break;
				case "base2c":
					activeList =
						[
							"ccg"
						];
					break;
				case "base2a":
					activeList =
						[
							"cag"
						];
					break;
				case "base2g":
					activeList =
						[
							"cgg"
						];
					break;
			}
			break;

		case "base32u":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"auu"
						];
					break;
				case "base2c":
					activeList =
						[
							"acu"
						];
					break;
				case "base2a":
					activeList =
						[
							"aau"
						];
					break;
				case "base2g":
					activeList =
						[
							"agu"
						];
					break;
			}
			break;

		case "base32c":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"auc"
						];
					break;
				case "base2c":
					activeList =
						[
							"acc"
						];
					break;
				case "base2a":
					activeList =
						[
							"aac"
						];
					break;
				case "base2g":
					activeList =
						[
							"agc"
						];
					break;
			}
			break;

		case "base32a":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"aua"
						];
					break;
				case "base2c":
					activeList =
						[
							"aca"
						];
					break;
				case "base2a":
					activeList =
						[
							"aaa"
						];
					break;
				case "base2g":
					activeList =
						[
							"aga"
						];
					break;
			}
			break;

		case "base32g":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"aug"
						];
					break;
				case "base2c":
					activeList =
						[
							"acg"
						];
					break;
				case "base2a":
					activeList =
						[
							"aag"
						];
					break;
				case "base2g":
					activeList =
						[
							"agg"
						];
					break;
			}
			break;

		case "base33u":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"guu"
						];
					break;
				case "base2c":
					activeList =
						[
							"gcu"
						];
					break;
				case "base2a":
					activeList =
						[
							"gau"
						];
					break;
				case "base2g":
					activeList =
						[
							"ggu"
						];
					break;
			}
			break;

		case "base33c":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"guc"
						];
					break;
				case "base2c":
					activeList =
						[
							"gcc"
						];
					break;
				case "base2a":
					activeList =
						[
							"gac"
						];
					break;
				case "base2g":
					activeList =
						[
							"ggc"
						];
					break;
			}
			break;

		case "base33a":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"gua"
						];
					break;
				case "base2c":
					activeList =
						[
							"gca"
						];
					break;
				case "base2a":
					activeList =
						[
							"gaa"
						];
					break;
				case "base2g":
					activeList =
						[
							"gga"
						];
					break;
			}
			break;

		case "base33g":
			switch (choix2)
			{
				case "base2u":
					activeList =
						[
							"gug"
						];
					break;
				case "base2c":
					activeList =
						[
							"gcg"
						];
					break;
				case "base2a":
					activeList =
						[
							"gag"
						];
					break;
				case "base2g":
					activeList =
						[
							"ggg"
						];
					break;
			}
			break;
	}

	return activeList;
}

/*
* Remet tous les éléments du tableau à leur état initial.
*
* @return {void}
*/
function resetItems()
{
	for (let acideAmine in acidesAmines)
	{
		acidesAmines[acideAmine].classList.remove("bg-success");
		acidesAmines[acideAmine].classList.add("disable");
	}
}

/*
* Surligne (allume) les éléments du tableau représentés par un nucléotide (U C A G) lorsqu'on survole les boutons.
*
* @param {string} btnID - L'ID du bouton survolé.
* @return {void}
*/
function displayItems(btnID)
{
	resetItems();

	let activeList = activate(btnID);
	for (let acideAmine in acidesAmines)
	{
		currentID = acidesAmines[acideAmine].id;
		if (activeList.includes(currentID))
		{
			acidesAmines[acideAmine].classList.remove("disable");
			acidesAmines[acideAmine].classList.add("bg-success");
		}
	}
}

/*
* Cache les éléments surlignés lorsqu'on enlève la souris de sur le bouton du nucléotide (U C A G).
*
* @param {string} btnID - L'ID du bouton précédemment survolé.
* @return {void}
*/
function hideItems(btnID)
{
	let activeList = activate(btnID);

	for (let acideAmine in acidesAmines)
	{
		currentID = acidesAmines[acideAmine].id;
		if (activeList.includes(currentID))
		{
			acidesAmines[acideAmine].classList.remove("bg-success");
			acidesAmines[acideAmine].classList.add("disable");
		}
	}

}

/*
* Séléctionne le bouton U C A G choisi et debloque les boutons pour le choix suivant. Modifie l'instruction pour l'utilisateur.
*
* @return {boolean} true si la fonction réussi, false sinon.
*/
function selectItems(btnID)
{
	// Il reste encore des choix à faire.
	try
	{
		// Enleve l'evenement "on mouse out" du bouton pour eviter la deselection apres le clique.
		nucleotides[btnID].removeAttribute("onmouseout");

		// Verrouille les boutons et desactive ceux qui n'ont pas ete choisis.
		for (let nucleotide in nucleotides)
		{
			var currentID = nucleotides[nucleotide].id;
			if (currentID !== btnID)
			{
				nucleotides[nucleotide].classList.remove("btn-primary");
				nucleotides[nucleotide].classList.add("disable");
				nucleotides[nucleotide].classList.add("bg-secondary");
			}
			else
			{
				nucleotides[nucleotide].classList.remove("btn-primary");
				nucleotides[nucleotide].classList.add("disable");
				nucleotides[nucleotide].classList.add("bg-success");
				nucleotides[nucleotide].classList.add("text-white");
			}
		}

		// Montre en vert les acides amines pouvant etre formes a partir du bouton choisi (desactive lesa autres).
		displayItems(btnID);

		// Change l'instruction pour demander a l'utilisateur de choisir la prochaine base.
		var instruction = document.getElementById("instruction");

		if (btnID.includes("base1")) // Si l'utilisateur vient de choisir la base 1.
		{
			// Enregistre le choix de la base 1.
			choix1 = btnID;

			setTimeout(function () // Active les boutons de la base 2.
			{
				bases.base2.classList.remove("disable");
				bases.base2.classList.add("bg-warning");
				nucleotides.base2u.classList.remove("disable");
				nucleotides.base2c.classList.remove("disable");
				nucleotides.base2a.classList.remove("disable");
				nucleotides.base2g.classList.remove("disable");
				nucleotides.base2u.classList.remove("bg-secondary");
				nucleotides.base2c.classList.remove("bg-secondary");
				nucleotides.base2a.classList.remove("bg-secondary");
				nucleotides.base2g.classList.remove("bg-secondary");
				nucleotides.base2u.classList.add("btn-primary");
				nucleotides.base2c.classList.add("btn-primary");
				nucleotides.base2a.classList.add("btn-primary");
				nucleotides.base2g.classList.add("btn-primary");

			}, 1000);

			// Desactive l'option 2 (entrer une chaine d'ARN), car l'utilisateur a choisi l'option 1. 
			document.getElementById("option2").classList.add("d-none");

			// Affiche un bouton pour recommencer du debut.
			document.getElementById("restart").classList.remove("d-none");

			// Met a jour l'instruction pour demander a l'utilisateur de choisir la base 2.
			instruction.classList.remove("text-info");
			instruction.classList.add("text-warning");
			instruction.innerHTML = "deuxi&egrave;me base";
		}

		else if (btnID.includes("base2")) // Si l'utilisateur vient de choisir la base 2.
		{
			// Enregistre le choix de la base 2.
			choix2 = btnID;

			setTimeout(function () // Active les boutons de la base 3.
			{
				bases.base3.classList.remove("disable");
				bases.base3.classList.add("bg-danger");

				switch (choix1)
				{
					case "base1u":
						nucleotides.base30u.classList.remove("disable");
						nucleotides.base30c.classList.remove("disable");
						nucleotides.base30a.classList.remove("disable");
						nucleotides.base30g.classList.remove("disable");
						nucleotides.base30u.classList.remove("bg-secondary");
						nucleotides.base30c.classList.remove("bg-secondary");
						nucleotides.base30a.classList.remove("bg-secondary");
						nucleotides.base30g.classList.remove("bg-secondary");
						nucleotides.base30u.classList.add("btn-primary");
						nucleotides.base30c.classList.add("btn-primary");
						nucleotides.base30a.classList.add("btn-primary");
						nucleotides.base30g.classList.add("btn-primary");
						break;
					case "base1c":
						nucleotides.base31u.classList.remove("disable");
						nucleotides.base31c.classList.remove("disable");
						nucleotides.base31a.classList.remove("disable");
						nucleotides.base31g.classList.remove("disable");
						nucleotides.base31u.classList.remove("bg-secondary");
						nucleotides.base31c.classList.remove("bg-secondary");
						nucleotides.base31a.classList.remove("bg-secondary");
						nucleotides.base31g.classList.remove("bg-secondary");
						nucleotides.base31u.classList.add("btn-primary");
						nucleotides.base31c.classList.add("btn-primary");
						nucleotides.base31a.classList.add("btn-primary");
						nucleotides.base31g.classList.add("btn-primary");
						break;
					case "base1a":
						nucleotides.base32u.classList.remove("disable");
						nucleotides.base32c.classList.remove("disable");
						nucleotides.base32a.classList.remove("disable");
						nucleotides.base32g.classList.remove("disable");
						nucleotides.base32u.classList.remove("bg-secondary");
						nucleotides.base32c.classList.remove("bg-secondary");
						nucleotides.base32a.classList.remove("bg-secondary");
						nucleotides.base32g.classList.remove("bg-secondary");
						nucleotides.base32u.classList.add("btn-primary");
						nucleotides.base32c.classList.add("btn-primary");
						nucleotides.base32a.classList.add("btn-primary");
						nucleotides.base32g.classList.add("btn-primary");
						break;
					case "base1g":
						nucleotides.base33u.classList.remove("disable");
						nucleotides.base33c.classList.remove("disable");
						nucleotides.base33a.classList.remove("disable");
						nucleotides.base33g.classList.remove("disable");
						nucleotides.base33u.classList.remove("bg-secondary");
						nucleotides.base33c.classList.remove("bg-secondary");
						nucleotides.base33a.classList.remove("bg-secondary");
						nucleotides.base33g.classList.remove("bg-secondary");
						nucleotides.base33u.classList.add("btn-primary");
						nucleotides.base33c.classList.add("btn-primary");
						nucleotides.base33a.classList.add("btn-primary");
						nucleotides.base33g.classList.add("btn-primary");
						break;
				}
			}, 1000);

			// Modifie l'instruction pour demander a l'utilisateur de choisir la base 3.
			instruction.classList.remove("text-warning");
			instruction.classList.add("text-danger");
			instruction.innerHTML = "troisi&egrave;me base";
		}

		else // Si l'utilisateur vient de choisir la base 3.
		{
			// Efface l'instruction de choisir une base.
			document.getElementById("option1").classList.add("d-none");
			// Enregistre le choix de la base 3.
			choix3 = btnID;
			// Affiche l'acide amine resultant.
			displayResult();
		}
	}

	catch (error)
	{
		tableau.innerHTML = "<p>Erreur lors de l&apos;enregistrement de la 1&egrave;re base: " + error + "</p>";
		return false;
	}

}

/*
* Initialise le tableau des acides aminés avec seulement les boutons de la bases 1 cliquables.
*
* @return {boolean} true si l'initialisation est réussie, false sinon.
*/
function initialize()
{
	try
	{
		resetItems();

		for (let base in bases)
		{
			bases[base].classList.remove("bg-info");
			bases[base].classList.remove("bg-warning");
			bases[base].classList.remove("bg-danger");
			bases[base].classList.remove("text-white");
			bases[base].classList.add("disable");
			bases[base].classList.add("text-gray");

		}

		for (let nucleotide in nucleotides)
		{
			nucleotides[nucleotide].classList.remove("btn-primary");
			nucleotides[nucleotide].classList.remove("bg-success");
			nucleotides[nucleotide].classList.remove("text-white");
			nucleotides[nucleotide].classList.add("disable");
			nucleotides[nucleotide].classList.add("bg-secondary");
			nucleotides[nucleotide].classList.add("text-gray");
		}

		// Désactive les boutons des bases 2 et 3 et les éléments du tableau tant que la base 1 n'a pas été sélectionnée.
		bases.base1.classList.remove("disable");
		bases.base1.classList.add("bg-info");

		nucleotides.base1u.classList.remove("disable");
		nucleotides.base1u.classList.remove("bg-secondary");
		nucleotides.base1u.classList.add("btn-primary");
		nucleotides.base1c.classList.remove("disable");
		nucleotides.base1c.classList.add("btn-primary");
		nucleotides.base1c.classList.remove("bg-secondary");
		nucleotides.base1a.classList.remove("disable");
		nucleotides.base1a.classList.remove("bg-secondary");
		nucleotides.base1a.classList.add("btn-primary");
		nucleotides.base1g.classList.remove("disable");
		nucleotides.base1g.classList.remove("bg-secondary");
		nucleotides.base1g.classList.add("btn-primary");

		for (var acideAmine in acidesAmines)
		{
			acidesAmines[acideAmine].classList.add("disable");
		}

		return true;
	}

	catch (error)
	{
		tableau.innerHTML = "<p>Erreur lors de l&apos;initialisation du tableau: " + error + "</p>";
		return false;
	}
}

/* 
* Affiche l'acide amine resultant de la combinaison des bases choisies par l'utilisateur.
*
* @return {void}
*/
function displayResult()
{
	if (choix1 !== "" || choix2 !== "" || choix3 !== "")
	{
		var imgSrc = "";
		var name = "";

		// Le resultat ne depend pas de la base 1, car le tableau n'a que 2 dimensions (base2 x base3).
		switch (choix2)
		{
			case "base2u":
				switch (choix3)
				{
					// Phenylalanine
					case "base30u":
					case "base30c":
						imgSrc = "images/phenylalanine.png";
						name = "Phenylalanine";
						break;
					// Leucine
					case "base30a":
					case "base30g":
					case "base31u":
					case "base31c":
					case "base31a":
					case "base31g":
						imgSrc = "images/leucine.png";
						name = "Leucine";
						break;
					// Isoleucine
					case "base32u":
					case "base32c":
					case "base32a":
						imgSrc = "images/isoleucine.png";
						name = "Isoleucine";
						break;
					// Methionine
					case "base32g":
						imgSrc = "images/methionine.png";
						name = "Methionine";
						break;
					// Valine
					case "base33u":
					case "base33c":
					case "base33a":
					case "base33g":
						imgSrc = "images/valine.png";
						name = "Valine";
						break;

				}
				break;
			case "base2c":
				switch (choix3)
				{
					// Serine
					case "base30u":
					case "base30c":
					case "base30a":
					case "base30g":
						imgSrc = "images/serine.png";
						name = "Serine";
						break;
					// Proline
					case "base31u":
					case "base31c":
					case "base31a":
					case "base31g":
						imgSrc = "images/proline.png";
						name = "Proline";
						break;
					// Threonine
					case "base32u":
					case "base32c":
					case "base32a":
					case "base32g":
						imgSrc = "images/threonine.png";
						name = "Threonine";
						break;
					// Alanine
					case "base33u":
					case "base33c":
					case "base33a":
					case "base33g":
						imgSrc = "images/alanine.png";
						name = "Alanine";
						break;
				}
				break;
			case "base2a":
				switch (choix3)
				{
					// Tyrosine
					case "base30u":
					case "base30c":
						imgSrc = "images/tyrosine.png";
						name = "Tyrosine";
						break;
					// STOP
					case "base30a":
					case "base30g":
						imgSrc = "images/stop.png";
						name = "Stop";
						break;
					// Histidine
					case "base31u":
					case "base31c":
						imgSrc = "images/histidine.png";
						name = "Histidine";
						break;
					// Glutamine
					case "base31a":
					case "base31g":
						imgSrc = "images/glutamine.png";
						name = "Glutamine";
						break;
					// Asparagine
					case "base32u":
					case "base32c":
						imgSrc = "images/asparagine.png";
						name = "Asparagine";
						break;
					// Lysine
					case "base32a":
					case "base32g":
						imgSrc = "images/lysine.png";
						name = "Lysine";
						break;
					// Aspartate
					case "base33u":
					case "base33c":
						imgSrc = "images/aspartate.png";
						name = "Aspartate";
						break;
					// Glutamate
					case "base33a":
					case "base33g":
						imgSrc = "images/glutamate.png";
						name = "Glutamate";
						break;
				}
				break;
			case "base2g":
				switch (choix3)
				{
					// Cysteine
					case "base30u":
					case "base30c":
						imgSrc = "images/cysteine.png";
						name = "Cysteine";
						break;
					// STOP
					case "base30a":
						imgSrc = "images/stop.png";
						name = "Stop";
						break;
					// Tryptophan
					case "base30g":
						imgSrc = "images/tryptophan.png";
						name = "Tryptophan";
						break;
					// Arginine
					case "base31u":
					case "base31c":
					case "base31a":
					case "base31g":
					case "base32a":
					case "base32g":
						imgSrc = "images/arginine.png";
						name = "Arginine";
						break;
					// Serine
					case "base32u":
					case "base32c":
						imgSrc = "images/serine.png";
						name = "Serine";
						break;
					// Glycine
					case "base33u":
					case "base33c":
					case "base33a":
					case "base33g":
						imgSrc = "images/glycine.png";
						name = "Glycine";
						break;
				}
				break;
		}

		var output = "<div class='d-flex mb-2'><img class='bg-white' src='" + imgSrc + "' alt=''><p class='d-inline mx-2 my-auto'>" + name + "</p></div>";
		document.getElementById("resultats").innerHTML += output;
	}
}

/*================================================================
			 Partie 2: Fonctions d'entree de chaines d'ARN
================================================================*/

/*
* Affiche les lettres de la chaine d'ARN une par une et anime le tableau pour montrer les nucléotides correspondants. Affiche les acides aminés résultants.
*
* @return {void}
*/
function search()
{
	var input = validateInput();
	if (input !== undefined)
	{
		// Cache les options de l'utilisateur (pour qu'il ne puisse pas interrompre l'affichage).
		document.getElementById("confirmation").innerHTML = "<p class='mb-5'>Vous avez entr&eacute;:<br class='mb-2'><h2 id='lettreCourante' class='text-success mb-4'></h2><h3 id='affichageARN'></h3></p>";
		document.getElementById("confirmation").classList.remove("d-none");
		document.getElementById("option1").classList.add("d-none");
		document.getElementById("option2").classList.add("d-none");
		document.getElementById("restart").classList.remove("d-none");

		// Affiche la chaine d'ARN lettre par lettre et animer les choix dans le tableau.
		input = input.split("");
		const lettreCourante = document.getElementById("lettreCourante");
		const affichageARN = document.getElementById("affichageARN");
		var triplets = 0;

		setTimeout(function ()
		{
			for (let lettre = 0; lettre <= input.length; lettre++)
			{
				setTimeout(function ()
				{
					triplets++;

					if (lettre < input.length)
					{
						lettreCourante.innerHTML = input[lettre].toUpperCase();
						if (lettre > 0 && triplets == 1)
						{
							initialize();
							choix1 = "";
							choix2 = "";
							choix3 = "";
							affichageARN.innerHTML += " ";
						}
						affichageARN.innerHTML += input[lettre];
					}
					else
					{
						lettreCourante.innerHTML = "";
					}

					// Affichage des lettres dans le tableau.
					if ((triplets) % 3 == 0)
					{
						switch (input[lettre])
						{
							case "u":
								switch (choix1)
								{
									case "base1u":
										selectItems("base30u");
										choix3 = "base30u";
										break;
									case "base1c":
										selectItems("base31u");
										choix3 = "base31u";
										break;
									case "base1a":
										selectItems("base32u");
										choix3 = "base32u";
										break;
									case "base1g":
										selectItems("base33u");
										choix3 = "base33u";
										break;
								}
								break;
							case "c":
								switch (choix1)
								{
									case "base1u":
										selectItems("base30c");
										choix3 = "base30c";
										break;
									case "base1c":
										selectItems("base31c");
										choix3 = "base31c";
										break;
									case "base1a":
										selectItems("base32c");
										choix3 = "base32c";
										break;
									case "base1g":
										selectItems("base33c");
										choix3 = "base33c";
										break;
								}
								break;
							case "a":
								switch (choix1)
								{
									case "base1u":
										selectItems("base30a");
										choix3 = "base30a";
										break;
									case "base1c":
										selectItems("base31a");
										choix3 = "base31a";
										break;
									case "base1a":
										selectItems("base32a");
										choix3 = "base32a";
										break;
									case "base1g":
										selectItems("base33a");
										choix3 = "base33a";
										break;
								}
								break;
							case "g":
								switch (choix1)
								{
									case "base1u":
										selectItems("base30g");
										choix3 = "base30g";
										break;
									case "base1c":
										selectItems("base31g");
										choix3 = "base31g";
										break;
									case "base1a":
										selectItems("base32g");
										choix3 = "base32g";
										break;
									case "base1g":
										selectItems("base33g");
										choix3 = "base33g";
										break;
								}
								break;
						}
						triplets = 0;
					}

					else if ((triplets) % 2 == 0)
					{
						switch (input[lettre])
						{
							case "u":
								selectItems("base2u");
								choix2 = "base2u";
								break;
							case "c":
								selectItems("base2c");
								choix2 = "base2c";
								break;
							case "a":
								selectItems("base2a");
								choix2 = "base2a";
								break;
							case "g":
								selectItems("base2g");
								choix2 = "base2g";
								break;
						}
					}

					else if ((triplets) % 1 == 0)
					{
						switch (input[lettre])
						{
							case "u":
								selectItems("base1u");
								choix1 = "base1u";
								break;
							case "c":
								selectItems("base1c");
								choix1 = "base1c";
								break;
							case "a":
								selectItems("base1a");
								choix1 = "base1a";
								break;
							case "g":
								selectItems("base1g");
								choix1 = "base1g";
								break;
						}
					}
				}, 4000 * lettre + 1);
			}
		}, 2000);
	}
}

/*
* Valide le format de l'input.
*
* @return {string} La chaine d'ARN entrée par l'utilisateur si elle est valide, undefined sinon.
*/
function validateInput()
{
	const searchBar = document.getElementById("arn");
	const seachBtn = document.getElementById("searchBtn");
	const input = searchBar.value.trim().toLowerCase();
	const error = document.getElementById("error");

	// Input vide.
	if (input === "")
	{
		error.innerHTML = "Veuillez entrer une valeur.";
		searchBar.classList.add("is-invalid");
		seachBtn.classList.add("border");
		seachBtn.classList.add("border-danger");
	}

	// Format invalide.
	else
	{
		// Caracteres acceptes.
		var regex = /^[ucag]+$/;

		if (!regex.test(input))
		{
			error.innerHTML = "La cha&icirc;ne d'ARN ne doit contenir que les lettres U, C, A ou G.";
			searchBar.classList.add("is-invalid");
			seachBtn.classList.add("border");
			seachBtn.classList.add("border-danger");
		}

		// Groupes de 3 lettres.
		else if (input.length % 3 !== 0)
		{
			error.innerHTML = "La cha&icirc;ne d'ARN doit contenir des groupes de 3 lettres.";
			searchBar.classList.add("is-invalid");
			seachBtn.classList.add("border");
			seachBtn.classList.add("border-danger");
		}

		// Format valide.
		else 
		{
			error.innerHTML = "";
			searchBar.classList.remove("is-invalid");
			searchBar.classList.add("is-valid");
			seachBtn.classList.remove("border");
			seachBtn.classList.remove("border-danger");
			return input;
		}
	}
}