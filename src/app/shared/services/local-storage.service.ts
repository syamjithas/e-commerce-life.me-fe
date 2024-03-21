import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // Sets a string value in localStorage
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Sets an object as a string in localStorage
  setJSON(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieves a string value by key from localStorage
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Retrieves an object by key from localStorage
  getJSON(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  // Removes an item by key from localStorage
  remove(key: string): void {
    localStorage.removeItem(key);
  }

  // Checks if a key exists in localStorage
  exists(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  // Clears all items from localStorage
  clear(): void {
    localStorage.clear();
  }

  // Retrieves all keys stored in localStorage
  getKeys(): string[] {
    return Object.keys(localStorage);
  }

  // Retrieves all items from localStorage as an array of objects with key and value
  getAllItems(): { key: string; value: any }[] {
    return this.getKeys().map(key => ({
      key: key,
      value: this.getJSON(key)
    }));
  }
}
