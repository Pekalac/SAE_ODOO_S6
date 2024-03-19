{
    "name": "Kal-IT - Company Switch",
    "version": "17.0.1.0.0",
    "author": "Kal-It",
    "license": "AGPL-3",
    "category": "Generic",
    "website": "https://kal-it.fr",
    "depends": [
        "base",
    ],
    "auto_install": True,
    "data": [
        "security/ir.model.access.csv",
        "wizard/switch_company_wizard_views.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "kal_company_switch/static/src/**/*.xml",
            "kal_company_switch/static/src/**/*.js",
        ]
    }
}
