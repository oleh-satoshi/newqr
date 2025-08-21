import en from './resources/en/common.json';
import ru from './resources/ru/common.json';
import ua from './resources/ua/common.json';

export const resources = {
  en,
  ru,
  ua,
} as const;

export type Language = keyof typeof resources;

export function t(key: string, language: Language = 'en'): string {
  const keys = key.split('.');
  let value: any = resources[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = keys.reduce((obj, k) => obj?.[k], resources.en);
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
}
