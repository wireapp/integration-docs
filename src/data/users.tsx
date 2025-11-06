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
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  // For open-source sites, a link to the source code is required.
  // The source should be the *website's* source, not the project's source!
  | 'opensource'
  | 'product'

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Remind App',
    description: 'An app to remind you about important things.',
    preview: null,
    source: 'https://github.com/wireapp/remind-app',
    tags: ['favorite', 'opensource'],
  },
  {
    title: 'Poll App',
    description: 'Create polls directly in chat conversations',
    preview: null,
    source: 'https://github.com/wireapp/poll-app',
    tags: ['favorite', 'opensource'],
  },
  {
    title: 'QR App',
    description: 'A utility bot. You ask for a deeplink, it will give you one.',
    preview: null,
    source: null,
    tags: ['favorite'],
  },
  {
    title: 'Github App',
    description: 'Get Github notifications directly in Wire',
    preview: null,
    source: 'https://github.com/wireapp/github-app',
    tags: ['favorite', 'product', 'opensource'],
  },
  {
    title: 'Debug App',
    description: 'A Wire app to debug clients',
    preview: null,
    source: null,
    tags: ['favorite'],
  },
  {
    title: 'Broadcast App',
    description: 'Message multiple conversations simultaneously',
    preview: null,
    source: null,
    tags: ['favorite'],
  },
  {
    title: 'Scribe App',
    description: 'Transcribe and summarize audio files in conversation',
    preview: null,
    source: null,
    tags: ['favorite'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite Wire Apps that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source Wire apps can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Wire apps associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
