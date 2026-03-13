/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file located at `src/pages/showcase/` directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from '@docusaurus/Translate';
import { sortBy } from '@site/src/utils/jsUtils';
import PollIcon from './app-icons/poll.svg';
import GithubIcon from './app-icons/github.svg';

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase App
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: only we introduce Wire-approved Apps
  | 'wire-approved'
  // For open source Apps, a link to the source code is required.
  | 'product'
  | 'kotlin'
  | 'webhook'

// Add apps to this list
// prettier-ignore
const Apps: App[] = [
  // TODO: Uncomment once repository is public
  // {
  //   title: 'Broadcast App',
  //   description: 'Message multiple conversations simultaneously',
  //   icon: null,
  //   source: 'https://github.com/wireapp/broadcast-app',
  //   tags: ['kotlin'],
  // },
  {
    title: 'GitHub App',
    description: 'Get GitHub notifications directly in Wire',
    icon: <GithubIcon />,
    source: 'https://github.com/wireapp/github-app',
    tags: ['product', 'kotlin', 'webhook'],
  },
  {
    title: 'Poll App',
    description: 'Create polls directly in conversations',
    icon: <PollIcon />,
    source: 'https://github.com/wireapp/poll-app',
    tags: ['wire-approved', 'kotlin'],
  },
  {
    title: 'Remind App',
    description: 'Set reminders from your conversations',
    icon: null,
    source: 'https://github.com/wireapp/remind-app',
    tags: ['wire-approved', 'kotlin'],
  },

  /*
  Pro Tip: add your App in alphabetical order.
  Appending your App here (at the end) is more likely to produce Git conflicts.
   */
];

export type App = {
  title: string;
  description: string;
  icon: React.ReactNode | null; // null = use default App icon
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  "wire-approved": {
    label: translate({ message: 'Wire-approved' }),
    description: translate({
      message:
        'Explore Apps approved by Wire',
      id: 'showcase.tag.wire-approved.description',
    }),
    color: 'currentColor',
  },

  product: {
    label: translate({ message: 'Product' }),
    description: translate({
      message: 'Apps associated to a commercial product',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  kotlin: {
    label: translate({ message: 'Kotlin' }),
    description: translate({
      message: 'Apps written in Kotlin programming language',
      id: 'showcase.tag.kotlin.description',
    }),
    color: '#b125ea',
  },

  webhook: {
    label: translate({ message: 'Webhook' }),
    description: translate({
      message: 'Apps exposing a Rest API, forwarding events inside Wire',
      id: 'showcase.tag.webhook.description',
    }),
    color: '#25ea81',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortApps() {
  let result = Apps;
  // Sort by app name
  result = sortBy(result, (app) => app.title.toLowerCase());
  // wire-approved first
  result = sortBy(result, (app) => !app.tags.includes('wire-approved'));
  return result;
}

export const sortedApps = sortApps();
