/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Plugin} from '@docusaurus/types';

export default function themeCodeSandboxButton(): Plugin<void> {
  return {
    name: '@rise4fun/docusaurus-theme-side-editor',

    getThemePath() {
      return '../lib/theme';
    },
    getTypeScriptThemePath() {
      return '../src/theme';
    },
  };
}

