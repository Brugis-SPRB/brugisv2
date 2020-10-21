
const gfiFr = {
	"BDU:Affectations": {
		"actiontype": "GRID",
		"title": "Affectation: [%NAME_FR%]",
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
	"BDU:Espaces_structurants": {
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
	"BDU:Maille": {
		"actiontype": "GRID",
		"title": "Maille [%%]",
		"attributes": [{
				"name": "Lien",
				"label": "[%PATH_INTER%]",
				"type": "link"
			}
		]
	},
	"BDU:Accessibilite": {
		"actiontype": "GRID",
		"title": "Accessibilité: [%ZONE%]",
		"attributes": [{
			"name": "Type de zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"BDU:Enseignes": {
		"actiontype": "GRID",
		"title": "Enseignes: [%ZONE%]",
		"attributes": [{
			"name": "Type de zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"BDU:Publicite": {
		"actiontype": "GRID",
		"title": "Publicité: [%ZONE%]",
		"attributes": [{
			"name": "Type de zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"BDU_DMS_PROT:Arbres_remarquables": {
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
	"BDU_DMS_PROT:Arbres_remarquables_abattus_ou_disparus": {
		"actiontype": "GRID",
		"title": "[%TAX_FR%]",
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
				"label": "[%URL_FR%]/",
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
	"BDU_DMS_PROT:Arbres_remarquables_rarete": {
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
	"BDU_DMS_PROT:Arbres_remarquables_100_biggest": {
		"actiontype": "GRID",
		"title": "[%NOM_FR%]",
		"attributes": [{
				"name": "Circonférence",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			}
		]
	},
	"BDU_DRU:Contrats_de_quartier": {
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
				"label": "[%ID%]",
				"type": "string"
			}
		]
	},
	"BDU:Lotissements": {
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
	"BDU:Zones_de_protection_UNESCO": {
		"actiontype": "GRID",
		"title": "Zone de protection UNESCO: [%NOM_FR%]",
		"attributes": [{
			"name": "Dénomination",
			"label": "[%NOM_FR%]",
			"type": "string"
		}]
	},
	"BDU:Patrimoine": {
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
	"BDU:MONUMENT_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"BDU:MONUMENT_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:MONUMENT_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"BDU:MONUMENT_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:ENSEMBLE_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"BDU:ENSEMBLE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:ENSEMBLE_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"BDU:ENSEMBLE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:SITE_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"BDU:SITE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:SITE_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"BDU:SITE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:SITE_ARCHEOLOGIQUE_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"BDU:SITE_ARCHEOLOGIQUE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:SITE_ARCHEOLOGIQUE_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"BDU:SITE_ARCHEOLOGIQUE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"BDU:Zones_de_protection": {
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
	"BDU_DMS_PROT:Visites_arbres": {
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
	"BDU_DMS_PROT_PRIVATE:Arbres_remarquables_valeur_patrimoniale": {
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
	"BDU_DMS_PROT:Inventaire_Irismonument": {
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
	"BDU_DRU:Zones_de_preemption": {
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
	"BDU:PPAS": {
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
	"BDU:Parcelle_2013": {
		"actiontype": "GRID",
		"title": "Parcelle 2013: [%CAPAKEY%]",
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
	"BDU:Parcelle_2015": {
		"actiontype": "GRID",
		"title": "Parcelle 2015: [%CAPAKEY%]",
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
	"BDU:Parcelle_2014": {
		"actiontype": "GRID",
		"title": "Parcelle 2014: [%CAPAKEY%]",
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
	"BDU:Limites_communales": {
		"actiontype": "GRID",
		"title": "Commune: [%MU_NAME_FRE%]",
		"attributes": []
	},
	"BDU:Galeries_commercantes": {
		"actiontype": "GRID",
		"title": "Galeries commerçantes",
		"attributes": []
	},
	"BDU:Parking_de_transit": {
		"actiontype": "GRID",
		"title": "Parking de transit",
		"attributes": []
	},
	"BDU:Points_de_variation_de_mixite": {
		"actiontype": "GRID",
		"title": "Points de variation de mixité",
		"attributes": []
	},
	"BDU:Liseres_de_noyau_commercial": {
		"actiontype": "GRID",
		"title": "Liserés de noyau commercial",
		"attributes": []
	},
	"BDU:Zichee": {
		"actiontype": "GRID",
		"title": "Zone d'intérêt culturel, historique et d'embellisement",
		"attributes": []
	},
	"BDU:Biens_classes_ou_en_sauvegarde": {
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
	"BDU_DMS_PROT:Inventaire_des_rocailles": {
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
	"BDU_IRL:Dossiers_infos": {
		"actiontype": "GRID",
		"title": "Infos dossier: [%N_DOSSIER%] [%PROCEDURE%]",
		"attributes": [{
				"name": "Interdiction actuelle",
				"label": "[%INTERDICTION_ACTUELLE%]",
				"type": "string"
			},
			{
				"name": "Rue",
				"label": "[%RUE%]",
				"type": "string"
			},
			{
				"name": "N° de rue - début",
				"label": "if ('[%N_DE_POLICE_DEBUT%]'.length > 0 && '[%BOITE%]'.length > 0){'[%N_DE_POLICE_DEBUT%] bte [%BOITE%]'} else if ('[%N_DE_POLICE_DEBUT%]'.length > 0 && '[%BOITE%]'.length == 0){'[%N_DE_POLICE_DEBUT%]'} else {''}",
				"type": "eval"
			},
			{
				"name": "N° de rue - Fin",
				"label": "[%N_DE_POLICE_FIN%]",
				"type": "string"
			},
			{
				"name": "Etage",
				"label": "[%ETAGE%]",
				"type": "string"
			},
			{
				"name": "Situation exacte",
				"label": "[%SITUATION_EXACTE%]",
				"type": "string"
			},
			{
				"name": "Commune",
				"label": "[%CODE_POSTAL%] [%COMMUNE%]",
				"type": "string"
			},
			{
				"name": "---------------------------------",
				"label": "",
				"type": "string"
			},
			{
				"name": "N° de dossier",
				"label": "[%N_DOSSIER%]",
				"type": "string"
			},
			{
				"name": "Procedure",
				"label": "[%PROCEDURE%]",
				"type": "string"
			},
			{
				"name": "Gestionnaire",
				"label": "[%GESTIONNAIRE%]",
				"type": "string"
			},
			{
				"name": "Première décision",
				"label": "[%PREMIERE_DECISION%]",
				"type": "string"
			},
			{
				"name": "Date de première décision",
				"label": "[%DATE_PREMIERE_DECISION%]",
				"type": "string"
			},
			{
				"name": "Dernière décision",
				"label": "[%DERNIERE_DECISION%]",
				"type": "string"
			},
			{
				"name": "Date de dernière décision",
				"label": "[%DATE_DERNIERE_DECISION%]",
				"type": "string"
			}
		]
	},
	"BDU_DRU:Contrats_de_quartiers_Programmes": {
		"actiontype": "GRID",
		"title": "Contrat de Quartier (Programme): [%NOM_FR%]",
		"attributes": [{
				"name": "Contrat de quartier",
				"label": "[%NOM_FR%]",
				"type": "string"
			},
			{
				"name": "Actif",
				"label": "[%ACTIF%]",
				"type": "string"
			},
			{
				"name": "Fiche web",
				"label": "http://quartiers.brussels/1/q/[%ID%]",
				"type": "link"
			},
			{
				"name": "Date de début",
				"label": "[%DT_DEBUT%]",
				"type": "date"
			},
			{
				"name": "Date de fin",
				"label": "[%DT_FIN%]",
				"type": "date"
			},
			{
				"name": "Année",
				"label": "[%ANNEE%]",
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
			},
			{
				"name": "Référence compta.",
				"label": "[%REF_COMPTA%]",
				"type": "string"
			}
		]
	},
	"BDU_DRU:Contrats_de_quartiers_Projets": {
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
				"label": "http://quartiers.brussels/1/qp/[%ID%]",
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
	"BDU_DRU:Contrats_de_renovation_urbaine_Programmes": {
		"actiontype": "GRID",
		"title": "Contrat de rénovation urbaine (Programmes): [%NOM_FR%]",
		"attributes": [{
				"name": "Contrat de RU",
				"label": "[%NOM_FR%]",
				"type": "string"
			},
			{
				"name": "Série",
				"label": "[%SERIE%]",
				"type": "string"
			},
			{
				"name": "Documentation",
				"label": "[%DOC%]",
				"type": "link"
			}
		]
	},
	"BDU:Quartiers_a_loyers_majores": {
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
	"BDU_DMS_ARCH:Brasseries_localisées_sans_plan": {
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
	"BDU_DMS_ARCH:Brasseries_localisées_avec_plan": {
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
	"BDU_DMS_ARCH:Couvents_du_16ème_siècle": {
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
	"BDU_DMS_ARCH:Couvents_du_17ème_siècle": {
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
	"BDU_DMS_ARCH:Couvents_vestiges_conservés": {
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
				"name": "type français",
				"label": "[%ZONE_FR%]",
				"type": "string"
			},
			{
				"name": "type néerlandais",
				"label": "[%ZONE_NL%]",
				"type": "string"
			},
			{
				"name": "Partie français",
				"label": "[%PART_FR%]",
				"type": "string"
			},
			{
				"name": "Partie néerlandais",
				"label": "[%PART_NL%]",
				"type": "string"
			},
			{
				"name": "Partie - nom français",
				"label": "[%SPECIFIC_F%]",
				"type": "string"
			},
			{
				"name": "Partie - nom néerlandais",
				"label": "[%SPECIFIC_N%]",
				"type": "string"
			},
			{
				"name": "Source",
				"label": "[%SOURCE_DOC%]",
				"type": "string"
			}
		]
	},
	"BDU_DMS_ARCH:Couvents_du_18ème_siècle": {
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
				"name": "type français",
				"label": "[%ZONE_FR%]",
				"type": "string"
			},
			{
				"name": "type néerlandais",
				"label": "[%ZONE_NL%]",
				"type": "string"
			},
			{
				"name": "Partie français",
				"label": "[%PART_FR%]",
				"type": "string"
			},
			{
				"name": "Partie néerlandais",
				"label": "[%PART_NL%]",
				"type": "string"
			},
			{
				"name": "Partie - nom français",
				"label": "[%SPECIFIC_F%]",
				"type": "string"
			},
			{
				"name": "Partie - nom néerlandais",
				"label": "[%SPECIFIC_N%]",
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
	"BDU_DMS_ARCH:Refuges_localisés_sans_plan": {
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
	"BDU_DMS_ARCH:Refuges_localisés_avec_plan": {
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
	"BDU:plan_de_qualite_paysagere_et_urbanistique": {
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
	"BDU:OPENPERMITS_FR": {
		"actiontype": "LINK",
		"url": "https://openpermits.brussels/fr/_[%REFNOVA%]",
		"title": "Dossier [%REFNOVA%]"
	},
	"PER:PRDD_*": {
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
				"label": "[%SD_SDDC%][%MU_NATIONAL_CODE%]",
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
	}
};

module.exports = gfiFr;
