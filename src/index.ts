import { config } from './config.js';

export function add(values: number[]): number {
  return values.reduce((acc, x) => acc + x, 0);
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? config.APP_PRECISION;
  return value.toFixed(precision);
}

export type LogLevel = 'silent' | 'info' | 'debug';
export class Logger {
  constructor(private level: LogLevel) {}

  info(msg: string): void {
    if (this.level !== 'silent') {
      console.log('[INFO]', msg);
    }
  }

  debug(msg: string): void {
    if (this.level === 'debug') {
      console.log('[DEBUG]', msg);
    }
  }
}

export { config };
