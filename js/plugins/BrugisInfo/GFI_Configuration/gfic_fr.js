
const gfiFr = {
	"PERSPECTIVE_FR:Affectations": {
		"actiontype": "GRID",
		"title": "Affectation: [%NAME_FR%]: [%ENTITY_FR%]",
		"attributes": [{
				"name": "Affectation",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Lien",
				"label": "[%URL_P_FR%]",
				"type": "link"
			}
		]
	},
	"PERSPECTIVE_FR:Espaces_structurants": {
		"actiontype": "GRID",
		"title": "[%NAME_FR%]",
		"attributes": [{
				"name": "Affectation",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Lien",
				"label": "[%URL_P_FR%]",
				"type": "link"
			}
		]
	},
	"PERSPECTIVE_FR:Maille": {
		"actiontype": "GRID",
		"title": "Maille [%%]",
		"attributes": [{
				"name": "Lien",
				"label": "[%PATH_INTER%]",
				"type": "link"
			}
		]
	},
	"URBAN_DU:Enseignes": {
		"actiontype": "GRID",
		"title": "Enseignes: [%ZONE%]",
		"attributes": [{
			"name": "Type de zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"URBAN_DU:Publicite": {
		"actiontype": "GRID",
		"title": "Publicité: [%ZONE%]",
		"attributes": [{
			"name": "Type de zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"URBAN_DPC_PN:Arbres_remarquables": {
		"actiontype": "GRID",
		"title": "[%NOM_FR%]",
		"attributes": [{
				"name": "Circonférence",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Nom",
				"label": "[%NOM_FR%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%NOM_LA%]",
				"type": "string"
			},
			{
				"name": "Fiche de l'arbre",
				"label": "[%URL_FR%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Diamètre de la cîme",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			},
			{
				"name": "statut",
				"label": "[%STATUTS_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_PN:Arbres_remarquables_abattus_ou_disparus": {
		"actiontype": "GRID",
		"title": "[%NOM_FR%]",
		"attributes": [{
				"name": "Circonférence",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Nom",
				"label": "[%NOM_FR%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%NOM_LA%]",
				"type": "string"
			},
			{
				"name": "Fiche de l'arbre",
				"label": "[%URL_FR%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Diamètre de la cîme",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			},
			{
				"name": "statut",
				"label": "[%STATUTS_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_PN:Arbres_remarquables_rarete": {
		"actiontype": "GRID",
		"title": "[%NOM_LA%]: [%RARETE%]",
		"attributes": [{
				"name": "Identifiant",
				"label": "[%ID_ARBRES_CMS%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%NOM_LA%]",
				"type": "string"
			},
			{
				"name": "rareté",
				"label": "[%RARETE%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_PN:Arbres_remarquables_100_biggest": {
		"actiontype": "GRID",
		"title": "[%NOM_FR%]",
		"attributes": [{
				"name": "Circonférence",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			}
		]
	},
	"URBAN_DRU:Contrats_de_quartier": {
		"actiontype": "GRID",
		"title": "Contrat de quartier: [%NOMCQ%]",
		"attributes": [{
				"name": "Nom",
				"label": "[%NOMCQ%]",
				"type": "string"
			},
			{
				"name": "Commune",
				"label": "[%COMMUNE%]",
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
				"name": "Date de fin",
				"label": "[%DATE_FIN%]",
				"type": "date"
			},
			{
				"name": "Actif",
				"label": "['Non','Oui'][[%ACTIF%]]",
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
				"name": "Série",
				"label": "[%SERIE%]",
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
	"URBAN_DU:Lotissements": {
		"actiontype": "GRID",
		"title": "[%REFSITEX%]",
		"attributes": [{
				"name": "Objet",
				"label": "[%OBJET%]",
				"type": "string"
			},
			{
				"name": "Adresse",
				"label": "[%ADRESSE%]",
				"type": "string"
			},
			{
				"name": "Demandeur",
				"label": "[%DEMANDEUR%]",
				"type": "string"
			},
			{
				"name": "Date de notification",
				"label": "[%DATENOTIF%]",
				"type": "date"
			},
			{
				"name": "Date de dernière notification",
				"label": "[%DATPERMCOM%]",
				"type": "date"
			},
			{
				"name": "Permis",
				"label": "[%PERMISOCTROYE%]",
				"type": "string"
			},
			{
				"name": "Date permis commune",
				"label": "[%DATECOM%]",
				"type": "date"
			},
			{
				"name": "Référence communale",
				"label": "[%REFCOM%]",
				"type": "string"
			},
			{
				"name": "Référence NOVA",
				"label": "[%REFNOVA%]",
				"type": "string"
			},
			{
				"name": "Référence SITEX",
				"label": "[%REFSITEX%]",
				"type": "string"
			},
			{
				"name": "Référence cadastrale",
				"label": "[%NUMCADAST%]",
				"type": "string"
			},
			{
				"name": "ID",
				"label": "[%ID%]",
				"type": "string"
			},
			{
				"name": "Etat final",
				"label": "[%ETATFINAL%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_IPB:Zones_de_protection_UNESCO": {
		"actiontype": "GRID",
		"title": "Zone de protection UNESCO: [%NOM_FR%]",
		"attributes": [{
			"name": "Dénomination",
			"label": "[%NOM_FR%]",
			"type": "string"
		}]
	},
	"URBAN_DPC_IPB:Patrimoine": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
		"attributes": [{
				"name": "Dénomination",
				"label": "[%BENAMING_PAT_VW_FR%]",
				"type": "string"
			},
			{
				"name": "Addresse du bien",
				"label": "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]",
				"type": "string"
			},
			{
				"name": "Type de protection",
				"label": "[%TYPE_VRIJWARING_FR%]",
				"type": "string"
			},
			{
				"name": "Protégé en temps que",
				"label": "[%BESCHERMD_ALS_FR%]",
				"type": "string"
			},
			{
				"name": "Date du premier arrêté",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Date du dernier arrêté",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Premier arrêté",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Dernier arrêté",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Zone de Protection",
				"label": "['Non','Oui'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Référence DMS",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Description",
				"label": "[%NOTA_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_IPB:MONUMENT_*": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
		"attributes": [{
				"name": "Dénomination",
				"label": "[%BENAMING_PAT_VW_FR%]",
				"type": "string"
			},
			{
				"name": "Addresse du bien",
				"label": "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]",
				"type": "string"
			},
			{
				"name": "Type de protection",
				"label": "[%TYPE_VRIJWARING_FR%]",
				"type": "string"
			},
			{
				"name": "Protégé en temps que",
				"label": "[%BESCHERMD_ALS_FR%]",
				"type": "string"
			},
			{
				"name": "Date du premier arrêté",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Date du dernier arrêté",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Premier arrêté",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Dernier arrêté",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Zone de Protection",
				"label": "['Non','Oui'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Référence DMS",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Description",
				"label": "[%NOTA_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_IPB:ENSEMBLE_*": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
		"attributes": [{
				"name": "Dénomination",
				"label": "[%BENAMING_PAT_VW_FR%]",
				"type": "string"
			},
			{
				"name": "Addresse du bien",
				"label": "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]",
				"type": "string"
			},
			{
				"name": "Type de protection",
				"label": "[%TYPE_VRIJWARING_FR%]",
				"type": "string"
			},
			{
				"name": "Protégé en temps que",
				"label": "[%BESCHERMD_ALS_FR%]",
				"type": "string"
			},
			{
				"name": "Date du premier arrêté",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Date du dernier arrêté",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Premier arrêté",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Dernier arrêté",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Zone de Protection",
				"label": "['Non','Oui'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Référence DMS",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Description",
				"label": "[%NOTA_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_IPB:SITE_*": {
		"actiontype": "GRID",
		"title": "[%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
		"attributes": [{
				"name": "Dénomination",
				"label": "[%BENAMING_PAT_VW_FR%]",
				"type": "string"
			},
			{
				"name": "Addresse du bien",
				"label": "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]",
				"type": "string"
			},
			{
				"name": "Type de protection",
				"label": "[%TYPE_VRIJWARING_FR%]",
				"type": "string"
			},
			{
				"name": "Protégé en temps que",
				"label": "[%BESCHERMD_ALS_FR%]",
				"type": "string"
			},
			{
				"name": "Date du premier arrêté",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Date du dernier arrêté",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Premier arrêté",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Dernier arrêté",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Zone de Protection",
				"label": "['Non','Oui'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Référence DMS",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Description",
				"label": "[%NOTA_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_IPB:Zones_de_protection": {
		"actiontype": "GRID",
		"title": "Zone de protection de [%BESCHERMD_ALS_FR%]: [%BENAMING_PAT_VW_FR%]",
		"attributes": [{
				"name": "Dénomination",
				"label": "[%BENAMING_PAT_VW_FR%]",
				"type": "string"
			},
			{
				"name": "Addresse du bien",
				"label": "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]",
				"type": "string"
			},
			{
				"name": "Type de protection",
				"label": "[%TYPE_VRIJWARING_FR%]",
				"type": "string"
			},
			{
				"name": "Protégé en temps que",
				"label": "[%BESCHERMD_ALS_FR%]",
				"type": "string"
			},
			{
				"name": "Date du premier arrêté",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Date du dernier arrêté",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Premier arrêté",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Dernier arrêté",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Zone de Protection",
				"label": "['Non','Oui'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Référence DMS",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Description",
				"label": "[%NOTA_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_PN:Visites_arbres": {
		"actiontype": "GRID",
		"attributes": [{
				"name": "Date de la dernière visite",
				"label": "[%date%]",
				"type": "date"
			},
			{
				"name": "Nom",
				"label": "[%tax_fr%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%tax_la%]",
				"type": "string"
			},
			{
				"name": "Lien CMS",
				"label": "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[%id%]",
				"type": "link"
			},
			{
				"name": "Fiche de l'arbre",
				"label": "http://arbres-inventaire.irisnet.be/arbre/[%results_fr%]/[%id%]/",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "http://arbres-inventaire.irisnet.be/medias/trees/[%firstimage%]",
				"type": "link"
			}
		]
	},
	"URBAN_DPC_PN:Arbres_remarquables_valeur_patrimoniale": {
		"actiontype": "GRID",
		"attributes": [{
				"name": "Valeur patrimoniale",
				"label": "[%VP%]",
				"type": "string"
			},
			{
				"name": "Nom",
				"label": "[%tax_fr%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%tax_la%]",
				"type": "string"
			},
			{
				"name": "Lien CMS",
				"label": "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[%id%]",
				"type": "link"
			},
			{
				"name": "Fiche de l'arbre",
				"label": "http://arbres-inventaire.irisnet.be/arbre/[%results_fr%]/[%id%]/",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "http://arbres-inventaire.irisnet.be/medias/trees/[%firstimage%]",
				"type": "link"
			}
		]
	},
	"URBAN_DPC_IPB:Inventaire_Irismonument": {
		"actiontype": "GRID",
		"title": "Inventaire Irismonument: [%STREET_FR%], [%NUMBER%]",
		"attributes": [{
				"name": "Nom",
				"label": "[%NOM_FR%]",
				"type": "string"
			},
			{
				"name": "Adresse",
				"label": "[%STREET_FR%], [%NUMBER%]",
				"type": "string"
			},
			{
				"name": "Lien",
				"label": "[%URL_FR%]",
				"type": "link"
			},
			{
				"name": "Image",
				"label": "[%FIRSTIMAGE%]",
				"type": "picture"
			}
		]
	},
	"URBAN_DRU:Zones_de_preemption": {
		"actiontype": "GRID",
		"title": "Zone de préemption: [%NOM_FR%]",
		"attributes": [{
				"name": "Nom de zone",
				"label": "[%NOM_FR%]",
				"type": "string"
			},
			{
				"name": "Lien",
				"label": "[%URL_FR%]",
				"type": "link"
			},
			{
				"name": "Statut",
				"label": "['Inactif','Actif'][[%ACTIF%]]",
				"type": "eval"
			},
			{
				"name": "Date de promulgation",
				"label": "[%PROMULGATION%]",
				"type": "date"
			},
			{
				"name": "Date de publication",
				"label": "[%PUBLICATION%]",
				"type": "date"
			},
			{
				"name": "Date d'échéance",
				"label": "[%ECHEANCE%]",
				"type": "date"
			}
		]
	},
	"PERSPECTIVE_FR:PPAS": {
		"actiontype": "GRID",
		"title": "Plan particulier d'affection du sol: [%OBJET%]",
		"attributes": [{
				"name": "Nom",
				"label": "[%OBJET%]",
				"type": "string"
			},
			{
				"name": "Référence NOVA",
				"label": "[%REFNOVA%]",
				"type": "string"
			},
			{
				"name": "Référence SPEC",
				"label": "[%REFSPEC%]",
				"type": "string"
			},
			{
				"name": "RIE",
				"label": "[%RIE%]",
				"type": "string"
			},
			{
				"name": "Type de procédure pré COBAT18",
				"label": "[%TYPEPROCEDURE%]",
				"type": "string"
			},
			{
				"name": "Type de procédure COBAT18",
				"label": "[%TYPEPROCEDURECOBAT18%]",
				"type": "string"
			},
			{
				"name": "Type d'arrêté",
				"label": "[%TYPEARRETE%]",
				"type": "string"
			},
			{
				"name": "Date d'arrêté",
				"label": "[%DATEARRETE%]",
				"type": "date"
			},
			{
				"name": "Date d'arrêté EXP",
				"label": "[%DATARREXP%]",
				"type": "date"
			},
			{
				"name": "Date d'arrêté PROJPLAN",
				"label": "[%DATARRPROJPLAN%]",
				"type": "date"
			},
			{
				"name": "En zone d'intérêt régionale",
				"label": "[%ZIR%]",
				"type": "string"
			},
			{
				"name": "Décision",
				"label": "[%DECISION%]",
				"type": "string"
			},
			{
				"name": "DECPROJPLAN",
				"label": "[%DECPROJPLAN%]",
				"type": "string"
			},
			{
				"name": "ID",
				"label": "[%ID%]",
				"type": "string"
			}
		]
	},
	"CIRB_URBIS:Parcelle_*": {
		"actiontype": "GRID",
		"title": "Parcelle: [%CAPAKEY%]",
		"attributes": [{
				"name": "APNC_MAPC",
				"label": "[%APNC_MAPC%]",
				"type": "string"
			},
			{
				"name": "APNC_CADC",
				"label": "[%APNC_CADC%]",
				"type": "string"
			},
			{
				"name": "CAPAKEY",
				"label": "[%CAPAKEY%]",
				"type": "string"
			},
			{
				"name": "SHNC_FILE",
				"label": "[%SHNC_FILE%]",
				"type": "string"
			},
			{
				"name": "SHEET",
				"label": "[%SHEET%]",
				"type": "string"
			},
			{
				"name": "CDNC",
				"label": "[%CDNC%]",
				"type": "string"
			},
			{
				"name": "CD5C",
				"label": "[%CD5C%]",
				"type": "string"
			},
			{
				"name": "CSNC",
				"label": "[%CSNC%]",
				"type": "string"
			},
			{
				"name": "MUNC",
				"label": "[%MUNC%]",
				"type": "string"
			},
			{
				"name": "SHNC",
				"label": "[%SHNC%]",
				"type": "string"
			},
			{
				"name": "APNC_CAD",
				"label": "[%APNC_CAD%]",
				"type": "string"
			},
			{
				"name": "APNC_MAP",
				"label": "[%APNC_MAP%]",
				"type": "string"
			},
			{
				"name": "RAD_NUM",
				"label": "[%RAD_NUM%]",
				"type": "string"
			},
			{
				"name": "EXP_ALPHA",
				"label": "[%EXP_ALPHA%]",
				"type": "string"
			},
			{
				"name": "EXP_NUM",
				"label": "[%EXP_NUM%]",
				"type": "string"
			},
			{
				"name": "CAPATY",
				"label": "[%CAPATY%]",
				"type": "string"
			},
			{
				"name": "ID",
				"label": "[%ID%]",
				"type": "string"
			},
			{
				"name": "SHAPE_AREA_IN_DB",
				"label": "[%SHAPE_AREA%]",
				"type": "string"
			}
		]
	},
	"CIRB_URBIS:Limites_communales": {
		"actiontype": "GRID",
		"title": "Commune: [%MU_NAME_FRE%]",
		"attributes": []
	},
	"PERSPECTIVE_FR:Galeries_commercantes": {
		"actiontype": "GRID",
		"title": "Galeries commerçantes",
		"attributes": []
	},
	"PERSPECTIVE_FR:Parking_de_transit": {
		"actiontype": "GRID",
		"title": "Parking de transit",
		"attributes": []
	},
	"PERSPECTIVE_FR:Points_de_variation_de_mixite": {
		"actiontype": "GRID",
		"title": "Points de variation de mixité",
		"attributes": []
	},
	"PERSPECTIVE_FR:Liseres_de_noyau_commercial": {
		"actiontype": "GRID",
		"title": "Liserés de noyau commercial",
		"attributes": []
	},
	"PERSPECTIVE_FR:Zichee": {
		"actiontype": "GRID",
		"title": "Zone d'intérêt culturel, historique et d'embellissement",
		"attributes": []
	},
	"URBAN_DPC_IPB:Biens_classes_ou_en_sauvegarde": {
		"actiontype": "GRID",
		"title": "Biens: [%BENAMING_PAT_VW_FR%]",
		"attributes": [{
				"name": "Dénomination",
				"label": "[%BENAMING_PAT_VW_FR%]",
				"type": "string"
			},
			{
				"name": "Addresse du bien",
				"label": "[%NUMMER_VAN%], [%STRAAT_FR%], [%POSTCODE%] [%GEMEENTE_FR%]",
				"type": "string"
			},
			{
				"name": "Type de protection",
				"label": "[%TYPE_VRIJWARING_FR%]",
				"type": "string"
			},
			{
				"name": "Protégé en temps que",
				"label": "[%BESCHERMD_ALS_FR%]",
				"type": "string"
			},
			{
				"name": "Date du premier arrêté",
				"label": "[%DATUM_AG1%]",
				"type": "date"
			},
			{
				"name": "Date du dernier arrêté",
				"label": "[%DATUM_AG2%]",
				"type": "date"
			},
			{
				"name": "Premier arrêté",
				"label": "[%DOCUM_AG1%]",
				"type": "link"
			},
			{
				"name": "Dernier arrêté",
				"label": "[%DOCUM_AG2%]",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "[%FOTO%]",
				"type": "picture"
			},
			{
				"name": "Zone de Protection",
				"label": "['Non','Oui'][[%VRIJWARINGSZONE%]]",
				"type": "eval"
			},
			{
				"name": "Référence DMS",
				"label": "[%NUMMER_DOSSIER%]/[%CODE_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Description",
				"label": "[%NOTA_FR%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_PN:Inventaire_des_rocailles": {
		"actiontype": "GRID",
		"title": "Rocaille [%ID_XLS%]",
		"attributes": [{
				"name": "Adresse",
				"label": "[%POLNUMBR%] [%STREET%], [%COMMUNE%]",
				"type": "string"
			},
			{
				"name": "Nom du site",
				"label": "[%SITENAME%]",
				"type": "string"
			},
			{
				"name": "Remarquable par",
				"label": "[%REASON%]",
				"type": "string"
			},
			{
				"name": "Elément(s) succints",
				"label": "[%RESUELEM%]",
				"type": "string"
			},
			{
				"name": "Eléments",
				"label": "[%ELEMENTS%]",
				"type": "string"
			},
			{
				"name": "Autres éléments",
				"label": "[%OTHERELE%]",
				"type": "string"
			},
			{
				"name": "Type de rocaille",
				"label": "[%TYPE%]",
				"type": "string"
			},
			{
				"name": "Description",
				"label": "[%DESCRIPT%]",
				"type": "string"
			},
			{
				"name": "Construction",
				"label": "[%BUILTECH%]",
				"type": "string"
			},
			{
				"name": "Finition",
				"label": "[%FINITION%]",
				"type": "string"
			},
			{
				"name": "Identifiant CMS DMS",
				"label": "[%ID_CMS%]",
				"type": "string"
			},
			{
				"name": "Présence de Fiche DMS",
				"label": "[%FICHECMS%]",
				"type": "string"
			},
			{
				"name": "Présence de photo DMS",
				"label": "[%PHOTO%]",
				"type": "string"
			},
			{
				"name": "Identifiant xls",
				"label": "[%ID_XLS%]",
				"type": "string"
			},
			{
				"name": "Fiche DEF",
				"label": "[%FICHEDEF%]",
				"type": "string"
			},
			{
				"name": "Référence du site",
				"label": "[%SITENUMB%]",
				"type": "string"
			},
			{
				"name": "Date de visite",
				"label": "[%VIEWDATE%]",
				"type": "string"
			},
			{
				"name": "Date de visite DMS",
				"label": "[%VIDMSDAT%]",
				"type": "string"
			},
			{
				"name": "Rocaille",
				"label": "[%ROCAILLE%]",
				"type": "string"
			},
			{
				"name": "Propriétaire",
				"label": "[%OF_OWNER%]",
				"type": "string"
			},
			{
				"name": "Gestionnaire",
				"label": "[%OF_MANAG%]",
				"type": "string"
			},
			{
				"name": "Accès",
				"label": "[%ACCESS%]",
				"type": "string"
			}
		]
	},
	"URBAN_DRU:Contrats_de_quartiers_Programmes": {
		"actiontype": "GRID",
		"title": "Contrat de Quartier (Programme): [%NOM_FR%]",
		"attributes": [{
				"name": "Contrat de quartier",
				"label": "[%NOM_FR%]",
				"type": "string"
			},
			{
				"name": "Actif",
				"label": "[%STADE%]",
				"type": "string"
			},
			{
				"name": "Fiche web",
				"label": "http://quartiers.brussels/1/q/[%ID_DRU%]",
				"type": "link"
			},
			{
				"name": "Date de début",
				"label": "[%DEBUT%]",
				"type": "date"
			},
			{
				"name": "Date de fin",
				"label": "[%DT_FIN%]",
				"type": "date"
			},
			{
				"name": "Année",
				"label": "[%SERIE%]",
				"type": "string"
			},
			{
				"name": "Code postal",
				"label": "[%CP%]",
				"type": "string"
			},
			{
				"name": "Bureau",
				"label": "[%BUREAU%]",
				"type": "string"
			}
		]
	},
	"URBAN_DRU:Contrats_de_quartiers_Projets": {
		"actiontype": "GRID",
		"title": "Contrat de Quartier (Projet): [%PROJ_FR%]",
		"attributes": [{
				"name": "Projet",
				"label": "[%PROJ_FR%]",
				"type": "string"
			},
			{
				"name": "Contrat de quartier",
				"label": "[%CQD_FR%]",
				"type": "string"
			},
			{
				"name": "Série",
				"label": "[%SERIE%]",
				"type": "string"
			},
			{
				"name": "Adresse",
				"label": "[%NUM%] [%RUE_FR%] - [%CP%]",
				"type": "string"
			},
			{
				"name": "Fiche web",
				"label": "http://quartiers.brussels/1/qp/[%ID_DRU%]",
				"type": "link"
			},
			{
				"name": "Image",
				"label": "[%IMG%]",
				"type": "picture"
			},
			{
				"name": "Crédit photo",
				"label": "[%IMG_COPY%]",
				"type": "string"
			},
			{
				"name": "Bureau",
				"label": "[%BUREAU%]",
				"type": "string"
			},
			{
				"name": "Désignation du BE",
				"label": "[%DT_BUREAU%]",
				"type": "date"
			},
			{
				"name": "Entrepreneur",
				"label": "[%ENTREP%]",
				"type": "string"
			},
			{
				"name": "N° de permis",
				"label": "[%PU_NUM%]",
				"type": "string"
			},
			{
				"name": "Date réception",
				"label": "[%DT_RECEP%]",
				"type": "date"
			}
		]
	},
	"URBAN_DRU:Contrats_de_renovation_urbaine_Programmes": {
		"actiontype": "GRID",
		"title": "Contrat de rénovation urbaine (Programmes): [%NAME_FR%]",
		"attributes": [{
				"name": "Contrat de RU",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Phase",
				"label": "[%PHASE%]",
				"type": "string"
			},
			{
				"name": "Lien",
				"label": "[%URL%]",
				"type": "link",
				"substutedString": "Cliquez ici."
			}
		]
	},
	"URBAN_DRU:Contrats_de_renovation_urbaine_projets": {
		"actiontype": "GRID",
		"title": "Contrat de rénovation urbaine (Projets): [%NAME_FR%]",
		"attributes": [{
				"name": "CRU",
				"label": "[%CRU%]",
				"type": "string"
			},
			{
				"name": "Nom",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Numéro",
				"label": "[%NUM%]",
				"type": "string"
			},
			{
				"name": "Porteur",
				"label": "[%PORTEUR%]",
				"type": "string"
			},
			{
				"name": "Subside CRU",
				"label": "[%SUBSIDE_CRU%]€",
				"type": "string"
			},
			{
				"name": "Montant associé total",
				"label": "[%MONTANT_ASSOCIE_TOTAL%]€",
				"type": "string"
			}
		]
	},
	"SPRB_BL:Quartiers_a_loyers_majores": {
		"actiontype": "GRID",
		"title": "Quartier n°[%MDRC%] - [%NAME_FR%]",
		"attributes": [{
				"name": "Nom du quartier",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Nom du quartier (bilingue)",
				"label": "[%NAME_BIL%]",
				"type": "string"
			},
			{
				"name": "Numéro de quartier",
				"label": "[%MDRC%]",
				"type": "string"
			},
			{
				"name": "Statut",
				"label": "if ('[%SCENARIO%]'.length > 0 && '[%SCENARIO%]'=='2' ){'Dans une zone majorée'} else {'Hors de zone majorée'}",
				"type": "eval"
			}
		]
	},
	"URBAN_DPC_PA:Brasseries_*": {
		"actiontype": "GRID",
		"title": "[%NAME%]",
		"attributes": [{
				"name": "Nom",
				"label": "[%NAME%]",
				"type": "string"
			},
			{
				"name": "Addresse",
				"label": "[%ADDRESS%], [%ADR_BIS%]",
				"type": "string"
			},
			{
				"name": "Relocalisation",
				"label": "[%MOVED%]",
				"type": "string"
			},
			{
				"name": "Première mention",
				"label": "[%FIRST_MENT%]",
				"type": "string"
			},
			{
				"name": "Dernière mention",
				"label": "[%LAST_MENT%]",
				"type": "string"
			},
			{
				"name": "Source",
				"label": "[%SOURCE%]",
				"type": "string"
			},
			{
				"name": "Recherche",
				"label": "[%RESEARCH%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_PA:Couvents_*": {
		"actiontype": "GRID",
		"title": "[%NAME_FR%]",
		"attributes": [{
				"name": "Nom français",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Nom néerlandais",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Dates d'activité",
				"label": "[%START_END%]",
				"type": "string"
			},
			{
				"name": "Dates d'implantation",
				"label": "[%LOCAT_HERE%]",
				"type": "string"
			},
			{
				"name": "Source",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"URBAN_DPC_PA:Refuges_*": {
		"actiontype": "GRID",
		"title": "[%NAME_FR%]",
		"attributes": [{
				"name": "Nom français",
				"label": "[%NAME_FR%]",
				"type": "string"
			},
			{
				"name": "Ordre français",
				"label": "[%ORDER_FR%]",
				"type": "string"
			},
			{
				"name": "Nom néerlandais",
				"label": "[%NAME_NL%]",
				"type": "string"
			},
			{
				"name": "Ordre néerlandais",
				"label": "[%ORDER_NL%]",
				"type": "string"
			},
			{
				"name": "Dates d'activité",
				"label": "[%START_END%]",
				"type": "string"
			},
			{
				"name": "Dates d'implantation",
				"label": "[%LOCAT_HERE%]",
				"type": "string"
			},
			{
				"name": "Source",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"PERSPECTIVE_FR:plan_de_qualite_paysagere_et_urbanistique": {
		"actiontype": "REDIRECT",
		"url": "[%URL_FR%]",
		"title": "Plan de qualité paysagère et urbanistique",
		"attributes": [{
				"name": "Lien",
				"label": "[%URL_FR%]",
				"type": "link",
				"substutedString": "Cliquez ici."
			}
		]
	},
	"URBAN_DU:OPENPERMITS_FR": {
		"actiontype": "LINK",
		"url": "https://openpermits.brussels/fr/_[%REFNOVA%]",
		"title": "Dossier [%REFNOVA%]"
	},
	"PERSPECTIVE_FR:PRDD_*": {
		"actiontype": "GRID",
		"title": "[%GROUP_FR%]: [%CAT_FR%]",
		"attributes": [{
				"name": "Entité",
				"label": "[%ENTITY_FR%]",
				"type": "string"
			},
			{
				"name": "Lien",
				"label": "https://perspective.brussels/fr/plans-reglements-et-guides/plans-strategiques/plan-regional-de-developpement-prd/prdd",
				"type": "link"
			}
		]
	},
	"BCR:URBADM_STATISTICAL_DISTRICT": {
		"actiontype": "GRID",
		"title": "Secteur Statistique [%%][%%]",
		"attributes": [{
			"name": "Nom",
			"label": "[%SD_NAME_FRE%]",
			"type": "string"
			},
			{
				"name": "Secteur municipal",
				"label": "[%MD_NAME_FRE%]",
				"type": "string"
			},
			{
				"name": "Commune",
				"label": "[%MU_NAME_FRE%]",
				"type": "string"
			},
			{
				"name": "Région",
				"label": "[%RE_NAME_FRE%]",
				"type": "string"
			},
			{
				"name": "Référence secteur statistique INS",
				"label": "[%MU_NATIONAL_CODE%][%SD_SDDC%]",
				"type": "string"
			},
			{
				"name": "Référence secteur statistique",
				"label": "[%SD_SDDC%]",
				"type": "string"
			},
			{
				"name": "Référence communale INS",
				"label": "[%MU_NATIONAL_CODE%]",
				"type": "string"
			},
			{
				"name": "Référence communale",
				"label": "[%MU_ID%]",
				"type": "string"
			},
			{
				"name": "Référence secteur municipal",
				"label": "[%MD_MDRC%]",
				"type": "string"
			}
		]
	},
	"URBAN_DU:Reglements_*": {
		"actiontype": "GRID",
		"title": "[%REFNOVA%]",
		"attributes": [{
				"name": "Description",
				"label": "[%OBJET%]",
				"type": "string"
			},
			{
				"name": "Date réception dossier",
				"label": "[%DATRECDOS%]",
				"type": "string"
			},
			{
				"name": "Date arrêté",
				"label": "[%DATARR%]",
				"type": "string"
			},
			{
				"name": "Date Moniteur belge",
				"label": "[%DATMB%]",
				"type": "string"
			},
			{
				"name": "Référence Sitex",
				"label": "[%REFSITEX%]",
				"type": "string"
			},
			{
				"name": "Référence Nova",
				"label": "[%REFNOVA%]",
				"type": "string"
			}
		]
	},
	"URBAN_DU:Terrains_affectes_a_l_industrie": {
		"actiontype": "GRID",
		"title": "[%REFNOVA%]",
		"attributes": [{
				"name": "Description",
				"label": "[%OBJET%]",
				"type": "string"
			},
			{
				"name": "Date réception dossier",
				"label": "[%DATRECDOS%]",
				"type": "string"
			},
			{
				"name": "Date arrêté",
				"label": "[%DATARR%]",
				"type": "string"
			},
			{
				"name": "Date Moniteur belge",
				"label": "[%DATMB%]",
				"type": "string"
			},
			{
				"name": "Référence Sitex",
				"label": "[%REFSITEX%]",
				"type": "string"
			},
			{
				"name": "Référence Nova",
				"label": "[%REFNOVA%]",
				"type": "string"
			}
		]
	},
	"PERSPECTIVE_FR:Schemas_directeurs": {
		"actiontype": "GRID",
		"title": "Schema directeur [%NUMBER%] - [%NOM%]",
		"attributes": [{
			"name": "Nom",
			"label": "[%NOM%]",
			"type": "string"
		},
		{
			"name": "Numéro",
			"label": "[%NUMBER%]",
			"type": "string"
		},
		{
				"name": "Date d'approbation",
				"label": "[%DATE_APPROUVE%]",
				"type": "string"
		},
		{
				"name": "Lien",
				"label": "[%URL_FR%]",
				"type": "link",
				"substutedString": "Cliquez ici."
		}
		]
	},
	"TEST:A40_ARCHEO_CAVES": {
		"actiontype": "GRID",
		"title": "[%NAME_SUCCESSION_FR%]",
		"attributes": [{
			"name": "Nom(s)",
			"label": "[%NAME_SUCCESSION_FR%]",
			"type": "string"
		},
		{
			"name": "Type et plan",
			"label": "[%TYPE_PLAN_FR%]",
			"type": "string"
		},
		{
			"name": "Périodisation générale",
			"label": "[%PERIOD%]",
			"type": "string"
		},
		{
			"name": "Première mention connue de la maison",
			"label": "[%FIRST_KNOWN_MENTION%]",
			"type": "string"
		},
		{
			"name": "Date création-début",
			"label": "[%CREATION_BEGIN%]",
			"type": "string"
		},
		{
			"name": "Date création-fin",
			"label": "[%CREATION_END%]",
			"type": "string"
		},
		{
			"name": "Transformations-début",
			"label": "[%TRANSFORM_BEGIN%]",
			"type": "string"
		},
		{
			"name": "Transformations-fin",
			"label": "[%TRANSFORM_END%]",
			"type": "string"
		},
		{
			"name": "Couvrement disparu conservé par des vestiges",
			"label": "[%ANCIENT_COVER_FR%]",
			"type": "string"
		},
		{
			"name": "Couvrement actuel",
			"label": "[%CURRENT_COVER_FR%]",
			"type": "string"
		},
		{
			"name": "Equipements",
			"label": "[%EQUIPMENTS_FR%]",
			"type": "string"
		},
		{
			"name": "Fonctions identifiées",
			"label": "[%IDENTIFIED_FONCTIONS_FR%]",
			"type": "string"
		},
		{
			"name": "Description",
			"label": "[%DESCRIPTION_FR%]",
			"type": "string"
		},
		{
			"name": "Eléments archéologiques antérieurs à la cave",
			"label": "[%PRE_CELLAR_ELEMENT_FR%]",
			"type": "string"
		},
		{
			"name": "Photo",
			"label": "[%HOUSE_PHOTO%]",
			"type": "picture"
		},
		{
			"name": "Lien",
			"label": "[%LINK%]",
			"type": "link",
			"substutedString": "Cliquez ici."
		},
		{
			"name": "Sources",
			"label": "[%SOURCES%]",
			"type": "string"
		}
		]
	},
	"SPRB_BEE:Zone_de_Developpement_2022": {
		"actiontype": "GRID",
		"title": "Zone de Développement 2022",
		"attributes": [{
				"name": "Prime Acquisition batiment & terrain",
				"label": "[%URL_PRIME_IMMO_FR%]",
				"type": "link",
				"substutedString": "Cliquez ici."
		},
		{
				"name": "Prime Travaux & matériel",
				"label": "[%URL_PRIME_MAT_FR%]",
				"type": "link",
				"substutedString": "Cliquez ici."
		},
		{
				"name": "Prime à la formation",
				"label": "[%URL_PRIME_RECO_FR%]",
				"type": "link",
				"substutedString": "Cliquez ici."
		}
		]
	}
};

module.exports = gfiFr;
