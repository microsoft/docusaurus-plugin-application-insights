# docusaurus-plugin-application-insights

![Build](https://github.com/microsoft/docusaurus-plugin-application-insights/actions/workflows/build.yml/badge.svg?branch=main)
[![npm version](https://badge.fury.io/js/@microsoft%2Fdocusaurus-plugin-application-insights.svg)](https://badge.fury.io/js/@microsoft%2Fdocusaurus-plugin-application-insights)
![Volta Managed](https://img.shields.io/static/v1?label=volta&message=managed&color=yellow&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAeQC6AMEpK7AhAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5AMGFS07qAYEaAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAFmSURBVDjLY2CgB/g/j0H5/2wGW2xyTAQ1r2DQYOBgm8nwh+EY6TYvZtD7f9rn5e81fAGka17GYPL/esObP+dyj5Cs+edqZsv/V8o//H+z7P+XHarW+NSyoAv8WsFszyKTtoVBM5Tn7/Xys+zf7v76vYrJlPEvAwPjH0YGxp//3jGl/L8LU8+IrPnPUkY3ZomoDQwOpZwMv14zMHy8yMDwh4mB4Q8jA8OTgwz/L299wMDyx4Mp9f9NDAP+bWVwY3jGsJpB3JaDQVCEgYHlLwPDfwYWRqVQJgZmHoZ/+3PPfWP+68Mb/Pw5sqUoLni9ipuRnekrAwMjA8Ofb6K8/PKBF5nU7RX+Hize8Y2DOZTP7+kXogPy1zrH+f/vT/j/Z5nUvGcr5VhJioUf88UC/59L+/97gUgDyVH4YzqXxL8dOs/+zuFLJivd/53HseLPPHZPsjT/nsHi93cqozHZue7rLDYhUvUAADjCgneouzo/AAAAAElFTkSuQmCC&link=https://volta.sh)
![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](#badge)

A Docusaurus plugin that lets you track page views using [Microsoft Application Insights](https://www.npmjs.com/package/@microsoft/applicationinsights-web).

This plugin is only active in production mode.

## Configuration

Install the plugin

```bash npm2yarn
npm install @microsoft/docusaurus-plugin-application-insights
```

Add the plugin to your plugin configuration along with the [application-insights-web configuration](https://github.com/microsoft/ApplicationInsights-JS#snippet-configuration-options) object.

```js
const config = {
    plugins: [
        ...,
        ["@microsoft/docusaurus-plugin-application-insights", {
            config: {
                instrumentationKey: "YOUR KEY HERE"
            }
            enableClickAnalytics: false,
        }]
    ]
}
```

## Options

The following options are available:

| Field | Type | Required | Default&nbsp;Value | Description |
| ----- | ---- | -------- | ------------- | ----------- |
| config | [ApplicationInsightsConfig](https://github.com/microsoft/docusaurus-plugins/blob/93e73418af086ae0cd821dc56c28b01f9515f7f2/packages/docusaurus-plugin-application-insights/src/options.ts#L10) | Yes | N/A | This object holds the configuration for Application Insights. It has many possible fields including `instrumentationKey`, `endpointUrl`, `maxBatchInterval`, etc. See [ApplicationInsights-JS Configuration](https://github.com/microsoft/ApplicationInsights-JS#configuration) for full details. |
| enableClickAnalytics | boolean | No | `false` | If set to `true`, enables click analytics. |

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
