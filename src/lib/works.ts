import { parse } from 'yaml';
import worksYaml from '~/data/works.yaml?raw';

export interface WorkSummary {
  id: string;
  title: string;
  href?: string;
  date: string;
}

export const works = parse(worksYaml) as WorkSummary[];
