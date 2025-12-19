/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase App
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: only we introduce Wire-developed Apps
  | 'wire-developed'
  // For open source Apps, a link to the source code is required.
  | 'opensource'
  | 'product'

// Add apps to this list
// prettier-ignore
const Apps: App[] = [
  {
    title: 'Remind App',
    description: 'An app to remind you about important things',
    icon: null,
    source: 'https://github.com/wireapp/remind-app',
    tags: ['wire-developed', 'opensource'],
  },
  {
    title: 'Poll App',
    description: 'Create polls directly in chat conversations',
    icon: null,
    source: 'https://github.com/wireapp/poll-app',
    tags: ['wire-developed', 'opensource'],
  },
  {
    title: 'QR App',
    description: 'You ask for a Wire deeplink, it will give you one',
    icon: null,
    source: null,
    tags: ['wire-developed'],
  },
  {
    title: 'GitHub App',
    description: 'Get GitHub notifications directly in Wire',
    icon: null,
    source: 'https://github.com/wireapp/github-app',
    tags: ['wire-developed', 'product', 'opensource'],
  },
  {
    title: 'Debug App',
    description: 'A Wire app to debug clients',
    icon: null,
    source: null,
    tags: ['wire-developed'],
  },
  {
    title: 'Broadcast App',
    description: 'Message multiple conversations simultaneously',
    icon: null,
    source: null,
    tags: ['wire-developed'],
  },
  {
    title: 'Scribe App',
    description: 'Transcribe and summarize audio files in conversation',
    icon: null,
    source: null,
    tags: ['wire-developed'],
  },

  /*
  Pro Tip: add your App in alphabetical order.
  Appending your App here (at the end) is more likely to produce Git conflicts.
   */
];

export type App = {
  title: string;
  description: string;
  icon: string | null; // null = use default App icon
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  "wire-developed": {
    label: translate({message: 'Wire-developed'}),
    description: translate({
      message:
        'Explore Apps developed by Wire',
      id: 'showcase.tag.wire-developed.description',
    }),
    color: 'currentColor',
  },

  opensource: {
    label: translate({message: 'Open source'}),
    description: translate({
      message: 'Open source Apps can be useful for inspiration',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Apps associated to a commercial product',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortApps() {
  let result = Apps;
  // Sort by app name
  result = sortBy(result, (app) => app.title.toLowerCase());
  // wire-developed first
  result = sortBy(result, (app) => !app.tags.includes('wire-developed'));
  return result;
}

export const sortedApps = sortApps();
