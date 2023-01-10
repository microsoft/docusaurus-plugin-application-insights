import { Joi } from "@docusaurus/utils-validation";
import type {
    LoadContext,
    Plugin,
    OptionValidationContext,
    Config,
    ThemeConfig,
} from "@docusaurus/types";
import type { PluginOptions, Options } from "./options";

const repo = process.env.GITHUB_REPOSITORY;
const sha = process.env.GITHUB_SHA;
const releaseTag = process.env.RELEASE_VERSION;

export default function pluginRise4fun(
    _context: LoadContext,
    options: PluginOptions
): Plugin {
    return {
        name: "docusaurus-plugin-rise4fun",
    };
}

const pluginOptionsSchema = Joi.object<PluginOptions>({});

export function validateOptions({
    validate,
    options,
}: OptionValidationContext<Options, PluginOptions>): PluginOptions {
    return validate(pluginOptionsSchema, options);
}

export type { PluginOptions, Options };

/**
 * Injects rise4fun specific configurations
 * @param configuration
 * @returns
 */
export function configure(configuration: Config): Config {
    // injecting legal terms
    const themeConfig: ThemeConfig =
        configuration.themeConfig || (configuration.themeConfig = {});
    const footer: any = themeConfig.footer || (themeConfig.footer = {});
    const links = footer.links || (footer.links = []);
    links.push({
        title: "Legal",
        items: [
            {
                label: "Privacy & Cookies",
                href: "https://go.microsoft.com/fwlink/?LinkId=521839",
            },
            {
                label: "Terms of Use",
                href: "https://www.microsoft.com/en-us/legal/intellectualproperty/copyright",
            },
            {
                label: "Trademarks",
                href: "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general",
            },
        ],
    });

    // github versioning
    let link = "";
    if (repo && releaseTag)
        link = `<a href=https://github.com/${repo}/releases/tag/${releaseTag} target="_blank" rel="noopener noreferrer">version: ${releaseTag}</a> | `;
    else if (repo && sha) {
        link = `<a href=https://github.com/${repo}/commit/${sha} target="_blank" rel="noopener noreferrer">${sha.slice(
            0,
            8
        )}</a> | `;
    }

    // patch copyrigth
    footer.copyright = `${link}Copyright © ${new Date().getFullYear()} Microsoft Corporation.`;

    return configuration;
}