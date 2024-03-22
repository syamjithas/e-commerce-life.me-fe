import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  setJSON(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getJSON(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  clear(): void {
    localStorage.clear();
  }

  getKeys(): string[] {
    return Object.keys(localStorage);
  }

  getAllItems(): { key: string; value: any }[] {
    return this.getKeys().map(key => ({
      key: key,
      value: this.getJSON(key)
    }));
  }
}
