"""
Shows how to enable both worker mode and use_angular_plugin to make a drop-in replacement for ng_module
"""

load("@npm//html-insert-assets:index.bzl", "html_insert_assets")

def html_assets(
        name,
        html_file,
        asset_paths,
        data = [],
        favicons = [],
        scripts = [],
        module_scripts = [],
        nomodule_scripts = [],
        stylesheets = [],
        manifest = None):
    """Wrapepr around html_insert_assets.

    Args:
        name:
        html_file:
        asset_paths:
        data:
        favicons:
        scripts:
        module_scripts:
        nomodule_scripts:
        stylesheets:
        manifest:
    """
    args = [
        "--html",
        "$(execpath %s)" % html_file,
        "--out",
        "$@",
        "--roots",
        "$(RULEDIR)",
    ]

    if favicons:
        args = args + ["--favicons"] + [
            "$(execpath %s)" % i
            for i in favicons
        ]

    if scripts:
        args = args + ["--scripts"] + [
            "$(execpath %s)" % i
            for i in scripts
        ]

    if module_scripts:
        args = args + ["--scripts --module"] + [
            "$(execpath %s)" % i
            for i in module_scripts
        ]

    if nomodule_scripts:
        args = args + ["--scripts --nomodule"] + [
            "$(execpath %s)" % i
            for i in nomodule_scripts
        ]

    if stylesheets:
        args = args + ["--stylesheets"] + [
            "$(execpath %s)" % i
            for i in stylesheets
        ]

    if manifest:
        args = args + ["--manifest", "$(execpath %s)" % manifest]

    # Keep this last so normal scripts (like zone.js) can be included first.
    if asset_paths:
        args = args + ["--assets"] + asset_paths

    html_insert_assets(
        name = name,
        outs = [name + "/index.html"],
        args = args,
        data = data +
               [html_file] +
               favicons +
               scripts +
               module_scripts +
               nomodule_scripts +
               stylesheets +
               ([manifest] if manifest else []),
    )
