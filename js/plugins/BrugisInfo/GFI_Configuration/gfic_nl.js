
const gfiNl = {
	"BSO:Bestemmingen": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]",
		"attributes": [{
				"name": "Bestemmingen",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Link",
				"label": "[%URL_P_NL%]",
				"type": "link"
			}
		]
	},
	"BSO:Structurerende_ruimten": {
		"actiontype": "GRID",
		"attributes": [{
				"name": "Bestemmingen",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Link",
				"label": "[%URL_P_NL%]",
				"type": "link"
			}
		]
	},
	"BSO:Linten_voor_handelskern": {
		"actiontype": "GRID",
		"attributes": [{
			"name": "Bestemmingen",
			"label": "[%AFFECTATION%]",
			"type": "string"
		}]
	},
	"BSO:Maas": {
		"actiontype": "REDIRECT",
		"url": "[%PATH_INTER%]"
	},
	"BSO:Toegankelijkheid": {
		"actiontype": "GRID",
		"title": "Toegankelijkheid: [%ZONE%]",
		"attributes": [{
			"name": "Soort zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"BSO:Uithangborden": {
		"actiontype": "GRID",
		"title": "Uithangborden: [%ZONE%]",
		"attributes": [{
			"name": "Soort zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"BSO:Reclame": {
		"actiontype": "GRID",
		"title": "Reclame: [%ZONE%]",
		"attributes": [{
			"name": "Soort zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"BSO_DSV:Voorkooprecht": {
		"actiontype": "GRID",
		"title": "Voorkooprecht: [%NOM_NL%]",
		"attributes": [{
				"name": "Naam ",
				"label": "[%NOM_NL%]",
				"type": "string"
			},
			{
				"name": "Link",
				"label": "[%URL_NL%]",
				"type": "link"
			},
			{
				"name": "Status",
				"label": "['Niet actief','Actief'][[%ACTIF%]]",
				"type": "eval"
			},
			{
				"name": "Datum van bekendmaking",
				"label": "[%PROMULGATION%]",
				"type": "date"
			},
			{
				"name": "Publicatie datum",
				"label": "[%PUBLICATION%]",
				"type": "date"
			},
			{
				"name": "Vervaldag",
				"label": "[%ECHEANCE%]",
				"type": "date"
			}
		]
	},
	"BSO_DML_BESC:Opmerkelijke_bomen": {
		"actiontype": "GRID",
		"title": "[%TAX_NL%]",
		"attributes": [{
				"name": "Omtrek",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Naam",
				"label": "[%TAX_NL%]",
				"type": "string"
			},
			{
				"name": "Latijnse benaming",
				"label": "[%TAX_LA%]",
				"type": "string"
			},
			{
				"name": "Boomfiche",
				"label": "http://bomen-inventaris.irisnet.be/arbre/[%RESULTS_NL%]/[%ID%]/",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "http://bomen-inventaris.irisnet.be/medias/trees/[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Hoogte",
				"label": "[%HAUTEUR%] m",
				"type": "string"
			},
			{
				"name": "Diameter kroon",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			},
			{
				"name": "Localisatie",
				"label": "[%EMPLACEMENT%]",
				"type": "string"
			},
			{
				"name": "Toestand",
				"label": "[%LEGENDENL%]",
				"type": "string"
			},
			{
				"name": "CMS link",
				"label": "http://bomen-inventaris.irisnet.be/manager/index.php?table=36&id=[%ID%]",
				"type": "link"
			}
		]
	},
	"BSO_DML_BESC:Gevelde_ofverdwenen_bomen": {
		"actiontype": "GRID",
		"title": "[%TAX_NL%]",
		"attributes": [{
				"name": "Omtrek",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Naam",
				"label": "[%TAX_NL%]",
				"type": "string"
			},
			{
				"name": "Latijnse benaming",
				"label": "[%TAX_LA%]",
				"type": "string"
			},
			{
				"name": "CMS link",
				"label": "http://bomen-inventaris.irisnet.be/manager/index.php?table=36&id=[%ID%]",
				"type": "link"
			},
			{
				"name": "Boomfiche",
				"label": "http://bomen-inventaris.irisnet.be/arbre/[%RESULTS_NL%]/[%ID%]/",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "http://bomen-inventaris.irisnet.be/medias/trees/[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Hoogte",
				"label": "[%HAUTEUR%] m",
				"type": "string"
			},
			{
				"name": "Diameter kroon",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			},
			{
				"name": "Localisatie",
				"label": "[%EMPLACEMENT%]",
				"type": "string"
			},
			{
				"name": "Toestand",
				"label": "[%LEGENDENL%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_BESC:Opmerkelijke_bomen_zeldzaamheid": {
		"actiontype": "GRID",
		"title": "[%TAX_LA%]: [%RARETE%]",
		"attributes": [{
				"name": "Id",
				"label": "[%ID%]",
				"type": "string"
			},
			{
				"name": "Latijnse benaming",
				"label": "[%TAX_LA%]",
				"type": "string"
			},
			{
				"name": "Zeldzaamheid",
				"label": "[%RARETE%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_BESC:Opmerkelijke_bomen_100_biggest": {
		"actiontype": "GRID",
		"title": "[%TAX_NL%]",
		"attributes": [{
				"name": "Omtrek",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Afmetingenindex",
				"label": "[%CLASSEMENTTAILLES%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_BESC:Inventaris_gebouwen": {
		"actiontype": "GRID",
		"title": "Inventaris gebouwen: [%address_results_nl%]",
		"attributes": [{
				"name": "Adress",
				"label": "[%address_results_nl%]",
				"type": "string"
			},
			{
				"name": "PWNC",
				"label": "[%pwnc%]",
				"type": "string"
			},
			{
				"name": "Link",
				"label": "[%url_nl%]",
				"type": "link"
			},
			{
				"name": "Beeld",
				"label": "[%firstimage%]",
				"type": "picture"
			}
		]
	},
	"BSO_DSV:Wijkcontract": {
		"actiontype": "GRID",
		"title": "Wijkcontract: [%WIJKNAAM%]",
		"attributes": [{
				"name": "Naam",
				"label": "[%WIJKNAAM%]",
				"type": "string"
			},
			{
				"name": "Gemeente",
				"label": "[%GEMEENTE%]",
				"type": "string"
			},
			{
				"name": "Date d'arrêté du gouvernement",
				"label": "[%ARRET_GVT%]",
				"type": "date"
			},
			{
				"name": "Date de notification à la commune",
				"label": "[%NOTIF_COMM%]",
				"type": "date"
			},
			{
				"name": "End datum",
				"label": "[%END_DATUM%]",
				"type": "date"
			},
			{
				"name": "Actief",
				"label": "['Nee','Ja'][[%ACTIF%]]",
				"type": "eval"
			},
			{
				"name": "Bureau d'étude",
				"label": "[%NOM_BE%]",
				"type": "string"
			},
			{
				"name": "Bureau d'étude (responsable)",
				"label": "[%RESP_BE%]",
				"type": "string"
			},
			{
				"name": "Reeks",
				"label": "[%REEKS%]",
				"type": "string"
			},
			{
				"name": "Gestionnaire",
				"label": "[%GESTION%]",
				"type": "string"
			},
			{
				"name": "Contact",
				"label": "[%TEL_BE%]",
				"type": "string"
			},
			{
				"name": "Subside régional",
				"label": "[%SUBS_REG%]",
				"type": "string"
			},
			{
				"name": "Référence comptable",
				"label": "[%REFERENCE%]",
				"type": "string"
			},
			{
				"name": "ID",
				"label": "[%ID%]",
				"type": "string"
			}
		]
	},
	"BSO:Verkavelingen": {
		"actiontype": "GRID",
		"title": "[%REFSITEX%]",
		"attributes": [{
				"name": "Naam",
				"label": "[%OBJET%]",
				"type": "string"
			},
			{
				"name": "Adres",
				"label": "[%ADRES%]",
				"type": "string"
			},
			{
				"name": "Aanvrager",
				"label": "[%AANVRAGER%]",
				"type": "string"
			},
			{
				"name": "Datum van betekening",
				"label": "[%DATUMBETEK%]",
				"type": "date"
			},
			{
				"name": "Datum laaste betekening",
				"label": "[%DATVERGGEM%]",
				"type": "date"
			},
			{
				"name": "Vergunning",
				"label": "[%VERGAFGELEVERD%]",
				"type": "string"
			},
			{
				"name": "Datum vergunning door gemeente",
				"label": "[%DATGEM%]",
				"type": "date"
			},
			{
				"name": "Gemeente referentie",
				"label": "[%REFCOM%]",
				"type": "string"
			},
			{
				"name": "NOVA referentie",
				"label": "[%REFNOVA%]",
				"type": "string"
			},
			{
				"name": "SITEX referentie",
				"label": "[%REFSITEX%]",
				"type": "string"
			},
			{
				"name": "Kadastraal referentie",
				"label": "[%KADNUMMER%]",
				"type": "string"
			},
			{
				"name": "ID",
				"label": "[%ID%]",
				"type": "string"
			},
			{
				"name": "Uiteindelijke toestand",
				"label": "[%EINDTOESTAND%]",
				"type": "string"
			}
		]
	},
	"BSO:BBP": {
		"actiontype": "GRID",
		"title": "BBP: [%OBJET%]",
		"attributes": [{
				"name": "Naam",
				"label": "[%OBJET%]",
				"type": "string"
			},
			{
				"name": "NOVA referentie",
				"label": "[%REFNOVA%]",
				"type": "string"
			},
			{
				"name": "SPEC referentie",
				"label": "[%REFSPEC%]",
				"type": "string"
			},
			{
				"name": "MER",
				"label": "[%MER%]",
				"type": "string"
			},
			{
				"name": "Besluit type",
				"label": "[%BESLUITTYPE%]",
				"type": "string"
			},
			{
				"name": "Datum van besluit",
				"label": "[%DATBESLUIT%]",
				"type": "date"
			},
			{
				"name": "DATBESONTWEIG",
				"label": "[%DATBESONTWEIG%]",
				"type": "date"
			},
			{
				"name": "DATBESONTWPLAN",
				"label": "[%DATBESONTWPLAN%]",
				"type": "date"
			},
			{
				"name": "In ZGB",
				"label": "[%ZGB%]",
				"type": "string"
			},
			{
				"name": "Beslissing",
				"label": "[%BESLISSING%]",
				"type": "string"
			},
			{
				"name": "BESLONTWPLAN",
				"label": "[%BESLONTWPLAN%]",
				"type": "string"
			},
			{
				"name": "ID",
				"label": "[%ID%]",
				"type": "string"
			}
		]
	},
	"BSO:Vrijwaringzone": {
		"actiontype": "GRID",
		"title": "Vrijwaringzone van [%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:Patrimonium": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:ARCHEOLOGISCHE_LANDSCHAP_BESCHERMING_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:ARCHEOLOGISCHE_LANDSCHAP_BESCHERMING_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:ARCHEOLOGISCHE_LANDSCHAP_BEWAARLIJST_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:ARCHEOLOGISCHE_LANDSCHAP_BEWAARLIJST_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:GEHEEL_BESCHERMING_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:GEHEEL_BESCHERMING_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:GEHEEL_BEWAARLIJST_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:GEHEEL_BEWAARLIJST_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:LANDSCHAP_BESCHERMING_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:LANDSCHAP_BESCHERMING_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:LANDSCHAP_BEWAARLIJST_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:LANDSCHAP_BEWAARLIJST_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:MONUMENT_BESCHERMING_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:MONUMENT_BESCHERMING_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:MONUMENT_BEWAARLIJST_AANVRAAG_PROCEDURE": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:MONUMENT_BEWAARLIJST_DEFINITIEF_BESLUIT": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_NL%]: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Omschrijving",
				"label": "[%NOTA_NL%]",
				"type": "string"
			}
		]
	},
	"BSO:Gemeentegrenzen": {
		"actiontype": "GRID",
		"title": "Commune: [%MUDN%]",
		"attributes": []
	},
	"BSO:Goed_dat_beschermd_is_of_ingeschreven_op_de_bewaarlijst": {
		"actiontype": "GRID",
		"title": "Goed: [%BENAMING_PAT_VW_NL%]",
		"attributes": [{
				"name": "Benaming",
				"label": "[%BENAMING_PAT_VW_NL%]",
				"type": "string"
			},
			{
				"name": "Adres van het goed",
				"label": "[%STRAAT_NL%] [%NUMMER_VAN%], [%POSTCODE%] [%GEMEENTE_NL%]",
				"type": "string"
			},
			{
				"name": "Type van vrijwaring",
				"label": "[%TYPE_VRIJWARING_NL%]",
				"type": "string"
			},
			{
				"name": "Gevrijwaard als",
				"label": "[%BESCHERMD_ALS_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van het eerste besluit",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Datatum van het laatste besluit",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Het eerste besluit",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Het laatste besluit",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Vrijwaringszone",
				"label": "['Nee','Ja'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Referentie DML",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			}
		]
	},
	"BSO_GHI:Dossiers_infos": {
		"actiontype": "GRID",
		"title": "Infos dossier: [%DOSSIER_NR%] [%PROCEDURE%]",
		"attributes": [{
				"name": "Actueel verbod",
				"label": "[%ACTUEEL_VERBOD%]",
				"type": "string"
			},
			{
				"name": "Straat",
				"label": "[%STRAAT%]",
				"type": "string"
			},
			{
				"name": "Huisnummer - begin",
				"label": "if ('[%HUISNUMMER_BEGIN%]'.length > 0 && '[%BUS%]'.length > 0){'[%HUISNUMMER_BEGIN%] bus [%BUS%]'} else if ('[%HUISNUMMER_BEGIN%]'.length > 0 && '[%BUS%]'.length == 0){'[%HUISNUMMER_BEGIN%]'} else {''}",
				"type": "eval"
			},
			{
				"name": "Huisnummer - einde",
				"label": "[%HUISNUMMER_EINDE%]",
				"type": "string"
			},
			{
				"name": "Verdieping",
				"label": "[%VERDIEPING%]",
				"type": "string"
			},
			{
				"name": "Exacte ligging",
				"label": "[%EXACTE_LIGGING%]",
				"type": "string"
			},
			{
				"name": "Gemeente",
				"label": "[%POSTCODE%] [%GEMEENTE%]",
				"type": "string"
			},
			{
				"name": "---------------------------------",
				"label": "",
				"type": "string"
			},
			{
				"name": "Dossiernummer",
				"label": "[%DOSSIER_NR%]",
				"type": "string"
			},
			{
				"name": "Procedure",
				"label": "[%PROCEDURE%]",
				"type": "string"
			},
			{
				"name": "Beheerder",
				"label": "[%BEHEERDER%]",
				"type": "string"
			},
			{
				"name": "Eerste beslissing",
				"label": "[%EERSTE_BESLISSING%]",
				"type": "string"
			},
			{
				"name": "Datum van eerste beslissing",
				"label": "[%DATUM_EERSTE_BESLISSING%]",
				"type": "string"
			},
			{
				"name": "Laatste beslissing",
				"label": "[%LAATSTE_BESLISSING%]",
				"type": "string"
			},
			{
				"name": "Datum van laatste beslissing",
				"label": "[%DATUM_LAATSTE_BESLISSING%]",
				"type": "string"
			}
		]
	},
	"BSO_DSV:Wijkcontracten_Programmas": {
		"actiontype": "GRID",
		"title": "Wijkcontract (Programma): [%NOM_NL%]",
		"attributes": [{
				"name": "Wijkcontract",
				"label": "[%NOM_NL%]",
				"type": "string"
			},
			{
				"name": "Actief",
				"label": "[%ACTIF%]",
				"type": "string"
			},
			{
				"name": "Webfiche",
				"label": "http://wijken.brussels/1/q/[%ID%]",
				"type": "link"
			},
			{
				"name": "Begindatum",
				"label": "[%DT_DEBUT%]",
				"type": "date"
			},
			{
				"name": "Einddatum",
				"label": "[%DT_FIN%]",
				"type": "date"
			},
			{
				"name": "Jaar",
				"label": "[%ANNEE%]",
				"type": "string"
			},
			{
				"name": "Postcode",
				"label": "[%CP%]",
				"type": "string"
			},
			{
				"name": "studiebureau",
				"label": "[%BUREAU%]",
				"type": "string"
			},
			{
				"name": "Comptabiliteit",
				"label": "[%REF_COMPTA%]",
				"type": "string"
			}
		]
	},
	"BSO_DSV:Wijkcontracten_Projecten": {
		"actiontype": "GRID",
		"title": "Wijkcontract (Project): [%PROJ_NL%]",
		"attributes": [{
				"name": "Project",
				"label": "[%PROJ_NL%]",
				"type": "string"
			},
			{
				"name": "Wijkcontract",
				"label": "[%CQD_NL%]",
				"type": "string"
			},
			{
				"name": "Serie",
				"label": "[%SERIE%]",
				"type": "string"
			},
			{
				"name": "Adres",
				"label": "[%NUM%] [%RUE_NL%] - [%CP%]",
				"type": "string"
			},
			{
				"name": "Webfiche",
				"label": "http://wijken.brussels/1/qp/[%ID%]",
				"type": "link"
			},
			{
				"name": "Beeld",
				"label": "[%IMG%]",
				"type": "picture"
			},
			{
				"name": "Fotocredit",
				"label": "[%IMG_COPY%]",
				"type": "string"
			},
			{
				"name": "studiebureau",
				"label": "[%BUREAU%]",
				"type": "string"
			},
			{
				"name": "Toewijzing van SB",
				"label": "[%DT_BUREAU%]",
				"type": "date"
			},
			{
				"name": "Entrepreneur",
				"label": "[%ENTREP%]",
				"type": "string"
			},
			{
				"name": "Verguningnummer",
				"label": "[%PU_NUM%]",
				"type": "string"
			},
			{
				"name": "Aflevering",
				"label": "[%DT_RECEP%]",
				"type": "date"
			}
		]
	},
	"BSO_DSV:Stadsvernieuwingscontracten_Programmas": {
		"actiontype": "GRID",
		"title": "Stadsvernieuwingscontracten (Programmas): [%NOM_NL%]",
		"attributes": [{
				"name": "SV Contrat",
				"label": "[%NOM_NL%]",
				"type": "string"
			},
			{
				"name": "Serie",
				"label": "[%SERIE%]",
				"type": "string"
			},
			{
				"name": "Documenten",
				"label": "[%DOC%]",
				"type": "link"
			}
		]
	},
	"BSO:Zones_met_verhoogde_huurprijs": {
		"actiontype": "GRID",
		"title": "Zone nr [%MDRC%] - [%NAME_NL%]",
		"attributes": [{
				"name": "Naam van zone",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Naam van zone (tweetaalig)",
				"label": "[%NAME_BIL%]",
				"type": "string"
			},
			{
				"name": "Nummer van zone",
				"label": "[%MDRC%]",
				"type": "string"
			},
			{
				"name": "Staat",
				"label": "if ('[%SCENARIO%]'.length > 0 && '[%SCENARIO%]'=='2' ){'In een verhoogde zone'} else {'Buiten een verhoogde zone'}",
				"type": "eval"
			}
		]
	},
	"BSO_DML_ARCH:Brouwerijen_gelokaliseerd_zonder_plan": {
		"actiontype": "GRID",
		"title": "[%NAME%]",
		"attributes": [{
				"name": "Naam",
				"label": "[%NAME%]",
				"type": "string"
			},
			{
				"name": "Adres",
				"label": "[%ADDRESS%], [%ADR_BIS%]",
				"type": "string"
			},
			{
				"name": "Hervesteging",
				"label": "[%MOVED%]",
				"type": "string"
			},
			{
				"name": "Eerste citaat",
				"label": "[%FIRST_MENT%]",
				"type": "string"
			},
			{
				"name": "Laatste citaat",
				"label": "[%LAST_MENT%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE%]",
				"type": "string"
			},
			{
				"name": "Onderzoek",
				"label": "[%RESEARCH%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_ARCH:Brouwerijen_gelokaliseerd_met_plan": {
		"actiontype": "GRID",
		"title": "[%NAME%]",
		"attributes": [{
				"name": "Naam",
				"label": "[%NAME%]",
				"type": "string"
			},
			{
				"name": "Adres",
				"label": "[%ADDRESS%], [%ADR_BIS%]",
				"type": "string"
			},
			{
				"name": "Hervesteging",
				"label": "[%MOVED%]",
				"type": "string"
			},
			{
				"name": "Eerste citaat",
				"label": "[%FIRST_MENT%]",
				"type": "string"
			},
			{
				"name": "Laatste citaat",
				"label": "[%LAST_MENT%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE%]",
				"type": "string"
			},
			{
				"name": "Onderzoek",
				"label": "[%RESEARCH%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_ARCH:Kloosters_van_de_16de_eeuw": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]",
		"attributes": [{
				"name": "Franse benaming",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Neederlandse benaming",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van activiteit",
				"label": "[%START_END%]",
				"type": "string"
			},
			{
				"name": "Datum op vestiging op de plaats",
				"label": "[%LOCAT_HERE%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_ARCH:Kloosters_van_de_17de_eeuw": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]",
		"attributes": [{
				"name": "Franse benaming",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Neederlandse benaming",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van activiteit",
				"label": "[%START_END%]",
				"type": "string"
			},
			{
				"name": "Datum op vestiging op de plaats",
				"label": "[%LOCAT_HERE%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_ARCH:Kloosters_bewaarde_resten": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]",
		"attributes": [{
				"name": "Franse benaming",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Nederlandse benaming",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "type Frans",
				"label": "[%ZONE_FR%]",
				"type": "string"
			},
			{
				"name": "type Nederlands",
				"label": "[%ZONE_NL%]",
				"type": "string"
			},
			{
				"name": "Gedeelte Frans",
				"label": "[%PART_FR%]",
				"type": "string"
			},
			{
				"name": "Gedeelte Nederlands",
				"label": "[%PART_NL%]",
				"type": "string"
			},
			{
				"name": "Gedeelte - Franse benaming",
				"label": "[%SPECIFIC_F%]",
				"type": "string"
			},
			{
				"name": "Gedeelte - Nederlandse benaming",
				"label": "[%SPECIFIC_N%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_ARCH:Kloosters_van_de_18de_eeuw": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]",
		"attributes": [{
				"name": "Franse benaming",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Nederlandse benaming",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "type Frans",
				"label": "[%ZONE_FR%]",
				"type": "string"
			},
			{
				"name": "type Nederlands",
				"label": "[%ZONE_NL%]",
				"type": "string"
			},
			{
				"name": "Gedeelte Frans",
				"label": "[%PART_FR%]",
				"type": "string"
			},
			{
				"name": "Gedeelte Nederlands",
				"label": "[%PART_NL%]",
				"type": "string"
			},
			{
				"name": "Gedeelte - Franse benaming",
				"label": "[%SPECIFIC_F%]",
				"type": "string"
			},
			{
				"name": "Gedeelte - Nederlandse benaming",
				"label": "[%SPECIFIC_N%]",
				"type": "string"
			},
			{
				"name": "Datum van activiteit",
				"label": "[%START_END%]",
				"type": "string"
			},
			{
				"name": "Datum op vestiging op de plaats",
				"label": "[%LOCAT_HERE%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_ARCH:Refugiehuizen_gelokaliseerd_zonder_plan": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]",
		"attributes": [{
				"name": "Franse benaming",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Religieuse orde Frans",
				"label": "[%ORDER_FR%]",
				"type": "string"
			},
			{
				"name": "Nederlandse benaming",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Religieuse orde Nederlands",
				"label": "[%ORDER_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van activiteit",
				"label": "[%START_END%]",
				"type": "string"
			},
			{
				"name": "Datum op vestiging op de plaats",
				"label": "[%LOCAT_HERE%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"BSO_DML_ARCH:Refugiehuizen_gelokaliseerd_met_plan": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]",
		"attributes": [{
				"name": "Franse benaming",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Ordre français",
				"label": "[%ORDER_FR%]",
				"type": "string"
			},
			{
				"name": "Nederlandse benaming",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Ordre néerlandais",
				"label": "[%ORDER_NL%]",
				"type": "string"
			},
			{
				"name": "Datum van activiteit",
				"label": "[%START_END%]",
				"type": "string"
			},
			{
				"name": "Datum op vestiging op de plaats",
				"label": "[%LOCAT_HERE%]",
				"type": "string"
			},
			{
				"name": "Historische bron",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	}
};
module.exports = gfiNl;
