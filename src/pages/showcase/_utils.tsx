/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {useCallback, useMemo} from 'react';
import {translate} from '@docusaurus/Translate';
import {
  usePluralForm,
  useQueryString,
  useQueryStringList,
} from '@docusaurus/theme-common';
import type {TagType, App} from '@site/src/data/apps';
import {sortedApps} from '@site/src/data/apps';

export function useSearchName() {
  return useQueryString('name');
}

export function useTags() {
  return useQueryStringList('tags');
}

type Operator = 'OR' | 'AND';

export function useOperator() {
  const [searchOperator, setSearchOperator] = useQueryString('operator');
  const operator: Operator = searchOperator === 'AND' ? 'AND' : 'OR';
  const toggleOperator = useCallback(() => {
    const newOperator = operator === 'OR' ? 'AND' : null;
    setSearchOperator(newOperator);
  }, [operator, setSearchOperator]);
  return [operator, toggleOperator] as const;
}

function filterApps({
  apps,
  tags,
  operator,
  searchName,
}: {
  apps: App[];
  tags: TagType[];
  operator: Operator;
  searchName: string | null;
}) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    apps = apps.filter((app) =>
      app.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (tags.length === 0) {
    return apps;
  }
  return apps.filter((app) => {
    if (app.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return tags.every((tag) => app.tags.includes(tag));
    }
    return tags.some((tag) => app.tags.includes(tag));
  });
}

export function useFilteredApps() {
  const [tags] = useTags();
  const [searchName] = useSearchName();
  const [operator] = useOperator();
  return useMemo(
    () =>
      filterApps({
        apps: sortedApps,
        tags: tags as TagType[],
        operator,
        searchName,
      }),
    [tags, operator, searchName],
  );
}

export function useAppCountPlural() {
  const {selectMessage} = usePluralForm();
  return (appsCount: number) =>
    selectMessage(
      appsCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of Apps found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 App|{appsCount} Apps',
        },
        {appsCount: appsCount},
      ),
    );
}
