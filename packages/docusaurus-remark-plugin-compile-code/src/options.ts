export interface LangOptions {
    lang: string;
    version: string;
    command: string;
    args?: string[];
    timeout?: number;
    extension?: string;
    outputLang?: string;
    outputMeta?: string;
}

export type PluginOptions = {
    outputPath?: string;
    langs: LangOptions[];
    concurrency?: number;
};
