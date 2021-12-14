const gfiEn = {
	"PERSPECTIVE_FR:Affectations": {
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
		"title": "Maille: [%GMLINK%]",
		"attributes": [{
				"name": "Code",
				"label": "[%GMLINK%]",
				"type": "string"
			},
			{
				"name": "Lien",
				"label": "[%PATH_INTER%]",
				"type": "string"
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
	"URBAN_DU:Enseignes": {
		"actiontype": "GRID",
		"title": "Enseignes: [%ZONE%]",
		"attributes": [{
			"name": "Type de zone",
			"label": "[%ZONE%]",
			"type": "string"
		}]
	},
	"AATL_DMS_SITE_ARBR:Arbres_Remarquables": {
		"actiontype": "GRID",
		"title": "[%TAF_FR%]",
		"attributes": [{
				"name": "Circonférence",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Nom",
				"label": "[%TAX_FR%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%TAX_LA%]",
				"type": "string"
			},
			{
				"name": "Fiche de l'arbre",
				"label": "http://arbres-inventaire.irisnet.be/arbre/[%RESULTS_FR%]/[%ID_ARBRE_CMS%]/",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "http://arbres-inventaire.irisnet.be/medias/trees/[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Hauteur",
				"label": "[%HAUTEUR%] m",
				"type": "string"
			},
			{
				"name": "Diamètre de la cîme",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			},
			{
				"name": "type d'emplacement",
				"label": "[%EMPLACEMENT%]",
				"type": "string"
			},
			{
				"name": "statut",
				"label": "[%LEGENDEFR%]",
				"type": "string"
			},
			{
				"name": "Lien CMS",
				"label": "http://arbres-inventaire.irisnet.be/manager/index.php?table=36&id=[%ID_ARBRE_CMS%]",
				"type": "link"
			}
		]
	},
	"AATL_DMS_SITE_ARBR:arbres_remarquables_DEV": {
		"actiontype": "GRID",
		"attributes": [{
				"name": "Circonférence",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Nom",
				"label": "[%TAX_FR%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%TAX_LA%]",
				"type": "string"
			},
			{
				"name": "Lien CMS",
				"label": "http://arbresinvdev.irisnet.be/manager/index.php?table=36&id=[%ID_ARBRE_CMS%]",
				"type": "link"
			},
			{
				"name": "Fiche de l'arbre",
				"label": "http://arbresinvdev.irisnet.be/arbre/[%RESULTS_FR%]/[%ID_ARBRE_CMS%]/",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "http://arbresinvdev.irisnet.be/medias/trees/[%FIRSTIMAGE%]",
				"type": "picture"
			},
			{
				"name": "Hauteur",
				"label": "[%HAUTEUR%] m",
				"type": "string"
			},
			{
				"name": "Diamètre de la cîme",
				"label": "[%DIAMETRE_CIME%] m",
				"type": "string"
			},
			{
				"name": "type d'emplacement",
				"label": "[%EMPLACEMENT%]",
				"type": "string"
			},
			{
				"name": "statut",
				"label": "[%LEGENDRFR%]",
				"type": "string"
			}
		]
	},
	"AATL_DMS_SITE_ARBR:Arbres_remarquables_rarete": {
		"actiontype": "GRID",
		"title": "[%TAX_LA%]: [%RARETE%]",
		"attributes": [{
				"name": "Identifiant",
				"label": "[%ID_ARBRE_CMS%]",
				"type": "string"
			},
			{
				"name": "Taxon latin",
				"label": "[%TAX_LA%]",
				"type": "string"
			},
			{
				"name": "rareté",
				"label": "[%RARETE%]",
				"type": "string"
			}
		]
	},
	"AATL_DMS_SITE_ARBR:Arbres_remarquables_100_biggest": {
		"actiontype": "GRID",
		"title": "[%TAX_FR%]",
		"attributes": [{
				"name": "Circonférence",
				"label": "[%CIRCONFERENCE%] cm",
				"type": "string"
			},
			{
				"name": "Classement des tailles",
				"label": "[%CLASSEMENTTAILLES%]",
				"type": "string"
			}
		]
	},
	"BDU:Contrats_de_quartier": {
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
				"type": "string"
			},
			{
				"name": "Date de notification à la commune",
				"label": "[%NOTIF_COMM%]",
				"type": "string"
			},
			{
				"name": "Date de fin",
				"label": "[%DATE_FIN%]",
				"type": "string"
			},
			{
				"name": "Actif",
				"label": "['Non','Oui'][[%STATUT%]]",
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
	"URBAN_DU:Lotissements": {
		"actiontype": "GRID",
		"title": "[%REFSITEX%]",
		"attributes": [{
				"name": "Object",
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
				"type": "string"
			},
			{
				"name": "Permis",
				"label": "[%PERMISOCTROYE%]",
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
			}
		]
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
	"URBAN_DPC_IPB:MONUMENT_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_IPB:MONUMENT_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_IPB:MONUMENT_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_IPB:MONUMENT_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_IPB:ENSEMBLE_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_IPB:ENSEMBLE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_IPB:ENSEMBLE_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_IPB:ENSEMBLE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_PN:SITE_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_PN:SITE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_PN:SITE_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_PN:SITE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_PN:SITE_ARCHEOLOGIQUE_CLASSEMENT_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_PN:SITE_ARCHEOLOGIQUE_CLASSEMENT_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_PN:SITE_ARCHEOLOGIQUE_SAUVEGARDE_ARRETE_DEFINITIF": {
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
	"URBAN_DPC_PN:SITE_ARCHEOLOGIQUE_SAUVEGARDE_OUVERTURE_DE_PROCEDURE": {
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
	"URBAN_DPC_IPB:Zones_de_protection_UNESCO": {
		"actiontype": "GRID",
		"title": "Zone de protection UNESCO: [%NOM_FR%]",
		"attributes": [{
			"name": "Dénomination",
			"label": "[%NOM_FR%]",
			"type": "string"
		}]
	},
	"AATL_DMS_SITE_ARBR:Visites_arbres": {
		"actiontype": "GRID",
		"attributes": [{
				"name": "Date de la dernière visite",
				"label": "[%date%]",
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
				"label": "http://arbres-inventaire.irisnet.be/arbre/[%results_fr%]/[%id]/",
				"type": "link"
			},
			{
				"name": "Photo",
				"label": "http://arbres-inventaire.irisnet.be/medias/trees/[%firstimage%]",
				"type": "link"
			}
		]
	},
	"AATL_DMS_SITE_ARBR_PRIVATE:Arbres_remarquables_valeur_patrimoniale": {
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
				"name": "actif/inactif",
				"label": "[%ACTIF%]",
				"type": "string"
			},
			{
				"name": "Promulgation date",
				"label": "[%PROMULGATION%]",
				"type": "date"
			},
			{
				"name": "Publication date",
				"label": "[%PUBLICATION%]",
				"type": "date"
			},
			{
				"name": "End of validity date",
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
				"name": "Type d'arrêté",
				"label": "[%TYPEARRETE%]",
				"type": "string"
			},
			{
				"name": "Date d'arrêté",
				"label": "[%DATEARRETE%]",
				"type": "string"
			},
			{
				"name": "Date d'arrêté EXP",
				"label": "[%DATARREXP%]",
				"type": "string"
			},
			{
				"name": "Date d'arrêté PROJPLAN",
				"label": "[%DATARRPROJPLAN%]",
				"type": "string"
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
	"CIRB_URBIS:Limites_communales": {
		"actiontype": "GRID",
		"title": "Commune: [MU_NAME_FRE%]",
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
		"title": "Zone d'intérêt culturel, historique et d'embellisement",
		"attributes": []
	},
	"URBAN_DPC_IPB:Biens_classes_ou_en_sauvegarde": {
		"actiontype": "GRID",
		"title": "Biens: [%DENOMINATION%]",
		"attributes": [{
				"name": "Dénomination",
				"label": "[%DENOMINATION%]",
				"type": "string"
			},
			{
				"name": "Addresse du bien",
				"label": "[%NRPOLICE%], [%ADRESSE%], [%COMMUNE%]",
				"type": "string"
			},
			{
				"name": "Type de biens",
				"label": "[%MS%]",
				"type": "string"
			},
			{
				"name": "Type de classement",
				"label": "[%CLSV%]",
				"type": "string"
			},
			{
				"name": "Date d'arrêté",
				"label": "[%AD%]",
				"type": "string"
			},
			{
				"name": "Date OP",
				"label": "[%OP%]",
				"type": "string"
			},
			{
				"name": "Extension de protection",
				"label": "[%EXTPROT%]",
				"type": "link"
			},
			{
				"name": "Protection",
				"label": "[%PROTECTION%]",
				"type": "string"
			},
			{
				"name": "Référence DMS",
				"label": "[%DMSFOLDERNR%]",
				"type": "string"
			},
			{
				"name": "Commentaire",
				"label": "[%COMMENTAIRE%]",
				"type": "string"
			}
		]
	},
	"BDU_DMS_PROT:Phototheque_Wikimedia_DMS": {
		"actiontype": "GRID",
		"title": "[%NAME%]",
		"attributes": [{
				"name": "Name",
				"label": "[%NAME%]",
				"type": "string"
			},
			{
				"name": "Picture",
				"label": "[%IMAGE%]",
				"type": "picture"
			},
			{
				"name": "Decription",
				"label": "[%DESCR_FR%]",
				"type": "string"
			},
			{
				"name": "Credit",
				"label": "[%CREDIT_FR%]",
				"type": "string"
			},
			{
				"name": "Source",
				"label": "[%SOURCE%]",
				"type": "string"
			}
		]
	},
	"PERSPECTIVE_FR:plan_de_qualite_paysagere_et_urbanistique": {
		"actiontype": "GRID",
		"title": "Urban and Landscape quality map",
		"attributes": [{
				"name": "Link",
				"label": "[%URL_FR%]",
				"type": "link"
			}
		]
	}
};
module.exports = gfiEn;
