
const gfiNl = {
	"PERSPECTIVE_NL:Bestemmingen": {
		"actiontype": "GRID",
		"title": "[%NAME_NL%]: [%ENTITY_DU%]",
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
	"PERSPECTIVE_NL:Structurerende_ruimten": {
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
	"PERSPECTIVE_NL:Linten_voor_handelskern": {
		"actiontype": "GRID",
		"attributes": [{
			"name": "Bestemmingen",
			"label": "[%AFFECTATION%]",
			"type": "string"
		}]
	},
	"PERSPECTIVE_NL:Maas": {
		"actiontype": "GRID",
		"title": "Maas [%%]",
		"attributes": [{
				"name": "Lien",
				"label": "[%PATH_INTER%]",
				"type": "link"
			}
		]
	},
	"URBAN_DS:Uithangborden": {
		"actiontype": "GRID",
		"title": "Uithangborden: [%ZONE_NL%]",
		"attributes": [{
			"name": "Soort zone",
			"label": "[%ZONE_NL%]",
			"type": "string"
		}]
	},
	"URBAN_DS:Reclame": {
		"actiontype": "GRID",
		"title": "Reclame: [%ZONE_NL%]",
		"attributes": [{
			"name": "Soort zone",
			"label": "[%ZONE_NL%]",
			"type": "string"
		}]
	},
	"URBAN_DSV:Voorkooprecht": {
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
	"URBAN_DCE_NE:Opmerkelijke_bomen": {
		"actiontype": "GRID",
		"title": "[%NOM_NL%]",
		"attributes": [{
				"name": "Omtrek",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Naam",
				"label": "[%NOM_NL%]",
				"type": "string"
			},
			{
				"name": "Latijnse benaming",
				"label": "[%NOM_LA%]",
				"type": "string"
			},
			{
				"name": "Boomfiche",
				"label": "[%URL_NL%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Diameter kroon",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			},
			{
				"name": "status",
				"label": "[%STATUTS_NL%]",
				"type": "string"
			}
		]
	},
	"URBAN_DCE_NE:Gevelde_ofverdwenen_bomen": {
		"actiontype": "GRID",
		"title": "[%NOM_NL%]",
		"attributes": [{
				"name": "Omtrek",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Naam",
				"label": "[%NOM_NL%]",
				"type": "string"
			},
			{
				"name": "Latijnse benaming",
				"label": "[%NOM_LA%]",
				"type": "string"
			},
			{
				"name": "Boomfiche",
				"label": "[%URL_NL%]",
				"type": "link"
			},
			{
				"name": "Foto",
				"label": "[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Diameter kroon",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			}
		]
	},
	"URBAN_DCE_NE:Opmerkelijke_bomen_zeldzaamheid": {
		"actiontype": "GRID",
		"title": "[%NOM_LA%]: [%RARETE%]",
		"attributes": [{
				"name": "Id",
				"label": "[%ID_ARBRES_CMS%]",
				"type": "string"
			},
			{
				"name": "Latijnse benaming",
				"label": "[%NOM_LA%]",
				"type": "string"
			},
			{
				"name": "Zeldzaamheid",
				"label": "[%RARETE%]",
				"type": "string"
			}
		]
	},
	"URBAN_DCE_NE:Opmerkelijke_bomen_100_biggest": {
		"actiontype": "GRID",
		"title": "[%NOM_NL%]",
		"attributes": [{
				"name": "Omtrek",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			}
		]
	},
	"URBAN_DCE_IVBE:Inventaris_Irismonument": {
		"actiontype": "GRID",
		"title": "Inventaris Irismonument: [%STREET_NL%], [%NUMBER%]",
		"attributes": [{
				"name": "Naam",
				"label": "[%NOM_NL%]",
				"type": "string"
			},
			{
				"name": "Adress",
				"label": "[%STREET_NL%], [%NUMBER%]",
				"type": "string"
			},
			{
				"name": "Link",
				"label": "[%URL_NL%]",
				"type": "link"
			},
			{
				"name": "Beeld",
				"label": "[%FIRSTIMAGE%]",
				"type": "picture"
			}
		]
	},
	"URBAN_DSV:Wijkcontract": {
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
				"label": "[%ID_DRU%]",
				"type": "string"
			}
		]
	},
	"URBAN_DS:Verkavelingen": {
		"actiontype": "GRID",
		"title": "[%REFSITEX%]",
		"attributes": [{
				"name": "Objekt",
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
	"PERSPECTIVE_NL:BBP": {
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
				"name": "Procedure type vòòr COBAT18",
				"label": "[%TYPEPROCEDURE%]",
				"type": "string"
			},
			{
				"name": "Procedure type COBAT18",
				"label": "[%TYPEPROCEDURECOBAT18%]",
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
				"name": "DATBESONTEIG",
				"label": "[%DATBESONTEIG%]",
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
	"URBAN_DCE_IVBE:Vrijwaringzone": {
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
	"URBAN_DCE_IVBE:Patrimonium": {
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
	"URBAN_DCE_IVBE:ARCHEOLOGISCHE_*": {
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
	"URBAN_DCE_IVBE:GEHEEL_*": {
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
	"URBAN_DCE_IVBE:LANDSCHAP_*": {
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
	"URBAN_DCE_IVBE:MONUMENT_*": {
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
	"CIBG_URBIS:Gemeentegrenzen": {
		"actiontype": "GRID",
		"title": "Commune: [%MU_NAME_DUT%]",
		"attributes": []
	},
	"URBAN_DCE_IVBE:Goed_dat_beschermd_is_of_ingeschreven_op_de_bewaarlijst": {
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
	"URBAN_DSV:Wijkcontracten_Programmas": {
		"actiontype": "GRID",
		"title": "Wijkcontract (Programma): [%NOM_NL%]",
		"attributes": [{
				"name": "Wijkcontract",
				"label": "[%NOM_NL%]",
				"type": "string"
			},
			{
				"name": "Actief",
				"label": "[%STADE%]",
				"type": "string"
			},
			{
				"name": "Webfiche",
				"label": "http://wijken.brussels/1/q/[%ID_DRU%]",
				"type": "link"
			},
			{
				"name": "Begindatum",
				"label": "[%DEBUT%]",
				"type": "date"
			},
			{
				"name": "Einddatum",
				"label": "[%DT_FIN%]",
				"type": "date"
			},
			{
				"name": "Jaar",
				"label": "[%SERIE%]",
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
			}
		]
	},
	"URBAN_DSV:Wijkcontracten_Projecten": {
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
				"label": "http://wijken.brussels/1/qp/[%ID_DRU%]",
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
				"name": "Aannemer",
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
	"URBAN_DSV:Stadsvernieuwingscontracten_Programmas": {
		"actiontype": "GRID",
		"title": "Stadsvernieuwingscontracten (Programmas): [%NAME_NL%]",
		"attributes": [{
				"name": "SV Contrat",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Fase",
				"label": "[%FASE%]",
				"type": "string"
			},
			{
				"name": "Link",
				"label": "[%URL%]",
				"type": "link",
				"substutedString": "Klik hier"
			}
		]
	},
	"URBAN_DSV:Stadsvernieuwingscontracten_Projecten": {
		"actiontype": "GRID",
		"title": "Stadsvernieuwingscontracten (Projecten): [%NAME_NL%]",
		"attributes": [{
				"name": "SVC",
				"label": "[%SVC%]",
				"type": "string"
			},
			{
				"name": "Naam",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Nummer",
				"label": "[%NUM%]",
				"type": "string"
			},
			{
				"name": "Projectleider",
				"label": "[%PORTEUR%]",
				"type": "string"
			},
			{
				"name": "Subsidie SVC",
				"label": "[%SUBSIDE_CRU%]€",
				"type": "string"
			},
			{
				"name": "Totaal geassocieerd bedrag",
				"label": "[%MONTANT_ASSOCIE_TOTAL%]€",
				"type": "string"
			}
		]
	},
	"GOB_BH:Zones_met_verhoogde_huurprijs": {
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
	"URBAN_DCE_AE:Brouwerijen_*": {
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
	"URBAN_DCE_AE:Kloosters_*": {
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
	"URBAN_DCE_AE:Refugiehuizen_*": {
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
	},
	"PERSPECTIVE_NL:Beeldkwaliteitsplan": {
		"actiontype": "REDIRECT",
		"url": "[%URL_NL%]",
		"title": "Beeldkwaliteitsplan",
		"attributes": [{
				"name": "Link",
				"label": "[%URL_NL%]",
				"type": "link",
				"substutedString": "Clik hier."
			}
		]
	},
	"URBAN_DS:OPENPERMITS_NL": {
		"actiontype": "LINK",
		"url": "https://openpermits.brussels/nl/_[%REFNOVA%]",
		"title": "Dossier [%REFNOVA%]"
	},
	"PERSPECTIVE_NL:GPDO_*": {
		"actiontype": "GRID",
		"title": "[%GROUP_DU%]: [%CAT_DU%]",
		"attributes": [{
				"name": "Entiteit",
				"label": "[%ENTITY_DU%]",
				"type": "string"
			},
			{
				"name": "Link",
				"label": "https://perspective.brussels/nl/plannen-reglementen-en-handleidingen/de-strategische-plannen/het-gewestelijk-ontwikkelingsplan-0",
				"type": "link"
			}
		]
	},
	"BCR:URBADM_STATISTICAL_DISTRICT": {
		"actiontype": "GRID",
		"title": "Statistisch sector [%%][%%]",
		"attributes": [{
			"name": "Naam",
			"label": "[%SD_NAME_DUT%]",
			"type": "string"
			},
			{
				"name": "Gemeentelijke sector",
				"label": "[%MD_NAME_DUT%]",
				"type": "string"
			},
			{
				"name": "Gemeente",
				"label": "[%MU_NAME_DUT%]",
				"type": "string"
			},
			{
				"name": "Gewest",
				"label": "[%RE_NAME_DUT%]",
				"type": "string"
			},
			{
				"name": "Referentie statistische sector NIS",
				"label": "[%MU_NATIONAL_CODE%][%SD_SDDC%]",
				"type": "string"
			},
			{
				"name": "Referentie statistische sector",
				"label": "[%SD_SDDC%]",
				"type": "string"
			},
			{
				"name": "Referentie gemeente NIS",
				"label": "[%MU_NATIONAL_CODE%]",
				"type": "string"
			},
			{
				"name": "Referentie gemeente",
				"label": "[%MU_ID%]",
				"type": "string"
			},
			{
				"name": "Referentie gemeentijke sector",
				"label": "[%MD_MDRC%]",
				"type": "string"
			}
		]
	},
	"URBAN_DS:Gemeentelijke_bouwverordening": {
		"actiontype": "GRID",
		"title": "[%REFNOVA%]",
		"attributes": [{
				"name": "Beschrijving",
				"label": "[%VOORWERP%]",
				"type": "string"
			},
			{
				"name": "Datum ontvagst dossier",
				"label": "[%DATONTDOS%]",
				"type": "string"
			},
			{
				"name": "Datum besluit",
				"label": "[%DATBES%]",
				"type": "string"
			},
			{
				"name": "Datum Belgisch Staatsblad",
				"label": "[%DATPUBSB%]",
				"type": "string"
			},
			{
				"name": "Referentie Sitex",
				"label": "[%REFSITEX%]",
				"type": "string"
			},
			{
				"name": "Referentie Nova",
				"label": "[%REFNOVA%]",
				"type": "string"
			}
		]
	},
	"URBAN_DS:Gezoneerde_verordeningen": {
		"actiontype": "GRID",
		"title": "[%REFNOVA%]",
		"attributes": [{
				"name": "Beschrijving",
				"label": "[%VOORWERP%]",
				"type": "string"
			},
			{
				"name": "Datum ontvagst dossier",
				"label": "[%DATONTDOS%]",
				"type": "string"
			},
			{
				"name": "Datum besluit",
				"label": "[%DATBES%]",
				"type": "string"
			},
			{
				"name": "Datum Belgisch Staatsblad",
				"label": "[%DATPUBSB%]",
				"type": "string"
			},
			{
				"name": "Referentie Sitex",
				"label": "[%REFSITEX%]",
				"type": "string"
			},
			{
				"name": "Referentie Nova",
				"label": "[%REFNOVA%]",
				"type": "string"
			}
		]
	},
	"URBAN_DS:Gronden_bestemd_voor_industrie": {
		"actiontype": "GRID",
		"title": "[%REFNOVA%]",
		"attributes": [{
				"name": "Beschrijving",
				"label": "[%VOORWERP%]",
				"type": "string"
			},
			{
				"name": "Datum ontvagst dossier",
				"label": "[%DATONTDOS%]",
				"type": "string"
			},
			{
				"name": "Datum besluit",
				"label": "[%DATBES%]",
				"type": "string"
			},
			{
				"name": "Datum Belgisch Staatsblad",
				"label": "[%DATPUBSB%]",
				"type": "string"
			},
			{
				"name": "Referentie Sitex",
				"label": "[%REFSITEX%]",
				"type": "string"
			},
			{
				"name": "Referentie Nova",
				"label": "[%REFNOVA%]",
				"type": "string"
			}
		]
	},
	"PERSPECTIVE_NL:Richtschemas": {
		"actiontype": "GRID",
		"title": "Richtschema [%NUMBER%] - [%NAAM%]",
		"attributes": [{
			"name": "Naam",
			"label": "[%NAAM%]",
			"type": "string"
		},
		{
			"name": "Nummer",
			"label": "[%NUMBER%]",
			"type": "string"
		},
		{
				"name": "Goedgekeurd datum",
				"label": "[%DATE_APPROUVE%]",
				"type": "string"
		},
		{
				"name": "Link",
				"label": "[%URL_NL%]",
				"type": "link",
				"substutedString": "Klik hier"
		}
		]
	},
	"TEST:A40_ARCHEO_CAVES": {
		"actiontype": "GRID",
		"title": "[%NAME_SUCCESSION_NL%]",
		"attributes": [{
			"name": "Naam/namen",
			"label": "[%NAME_SUCCESSION_NL%]",
			"type": "string"
		},
		{
			"name": "Type en plan",
			"label": "[%TYPE_PLAN_NL%]",
			"type": "string"
		},
		{
			"name": "Algemene periodisering",
			"label": "[%PERIOD%]",
			"type": "string"
		},
		{
			"name": "Eerste gekende vermelding van het huis",
			"label": "[%FIRST_KNOWN_MENTION%]",
			"type": "string"
		},
		{
			"name": "Datum oprichting-start",
			"label": "[%CREATION_BEGIN%]",
			"type": "string"
		},
		{
			"name": "Datum oprichting-einde",
			"label": "[%CREATION_END%]",
			"type": "string"
		},
		{
			"name": "Verbouwing-start",
			"label": "[%TRANSFORM_BEGIN%]",
			"type": "string"
		},
		{
			"name": "Verbouwing-einde",
			"label": "[%TRANSFORM_END%]",
			"type": "string"
		},
		{
			"name": "Verdwenen bedekking bewaard door overblijfselen",
			"label": "[%ANCIENT_COVER_NL%]",
			"type": "string"
		},
		{
			"name": "Huidige bedekking",
			"label": "[%CURRENT_COVER_NL%]",
			"type": "string"
		},
		{
			"name": "Uitrusting",
			"label": "[%EQUIPMENTS_NL%]",
			"type": "string"
		},
		{
			"name": "Geïdentificeerde functies",
			"label": "[%IDENTIFIED_FONCTIONS_NL%]",
			"type": "string"
		},
		{
			"name": "Beschrijving",
			"label": "[%DESCRIPTION_NL%]",
			"type": "string"
		},
		{
			"name": "Archeologisch bewijs van voor de kelder",
			"label": "[%PRE_CELLAR_ELEMENT_NL%]",
			"type": "string"
		},
		{
			"name": "Foto van het huis",
			"label": "[%HOUSE_PHOTO%]",
			"type": "picture"
		},
		{
			"name": "Link",
			"label": "[%LINK%]",
			"type": "link",
			"substutedString": "Klik hier"
		},
		{
			"name": "Bronnen",
			"label": "[%SOURCES%]",
			"type": "string"
		}
		]
	},
	"GOB_BEW:Ontwikkelingszones_2022": {
		"actiontype": "GRID",
		"title": "Ontwikkelingszones 2022",
		"attributes": [{
				"name": "Premiebedrag voor gebouw of grond",
				"label": "[%URL_PRIME_IMMO_NL%]",
				"type": "link",
				"substutedString": "Klik hier"
		},
		{
				"name": "Premiebedrag voor werken, materiaal, ...",
				"label": "[%URL_PRIME_MAT_NL%]",
				"type": "link",
				"substutedString": "Klik hier"
		},
		{
				"name": "Opleidingspremie project voor industriële omschakeling",
				"label": "[%URL_PRIME_RECO_NL%]",
				"type": "link",
				"substutedString": "Klik hier"
		}
		]
	},
	"PERSPECTIVE_NL:Richtplannen_van_aanleg": {
		"actiontype": "GRID",
		"title": "Richtplan van aanleg [%NAAM_ZONE%]",
		"attributes": [{
				"name": "Naam en nummer",
				"label": "[%NAAM_ZONE%] - [%ID_PAD%]",
				"type": "string"
		},
		{
				"name": "Status",
				"label": "[%STATUS%]",
				"type": "string"
		},
		{
				"name": "Link",
				"label": "[%URL_NL%]",
				"type": "link",
				"substutedString": "Klik hier"
		},
		{
				"name": "Besteldatum",
				"label": "[%DATE_COMMANDE%]",
				"type": "string"
		},
		{
				"name": "Goedkeuringsdatum",
				"label": "[%DATE_APPROBATION%]",
				"type": "string"
		},
		{
				"name": "Wijzigingsdatum",
				"label": "[%DATE_MODIFICATION%]",
				"type": "string"
		},
		{
				"name": "Herroepingsdatum",
				"label": "[%DATE_ABROGATION%]",
				"type": "string"
		}
		]
	},
	"TEST:V_A20_DER_ALC_ZONE": {
		"actiontype": "GRID",
		"title": "Test Zones à la carte",
		"attributes": [{
			"name": "Titel",
			"label": "TITEL",
			"type": "string"
		},
		{
			"name": "Image",
			"label": "[%F_IMAGE%]",
			"type": "picture"
		},
		{
			"name": "Bescrijving",
			"label": "BESCHRIJVING",
			"type": "string"
		}
		]
		},
		"URBAN_DCE_NE:Wettelijke_inventaris_van_de_landschappen": {
			"actiontype": "GRID",
			"title": "Wettelijke inventaris van de landschappen: [%NAME_NL%]",
			"attributes": [
				{
					"name": "Benaming",
					"label": "[%NAME_NL%]",
					"type": "string"
				},
				{
					"name": "Beslissingsdatum",
					"label": "[%DECISION_DATE%]",
					"type": "date"
				},
				{
					"name": "Link",
					"label": "https://sites.heritage.brussels/nl/sites/[%ID_DPC%]",
					"type": "link"
				},
				{
					"name": "Document",
					"label": "[%URL_LEGAL_DOC_1995%]",
					"type": "link"
				}
			]
		}
};

module.exports = gfiNl;
