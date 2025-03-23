import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'resume-theme';
  isDark = signal<boolean>(false);

  initializeTheme(): void {
    if (typeof window !== 'undefined') { // Add browser check
      try {
        const savedTheme = localStorage.getItem(this.THEME_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDark.set(savedTheme ? savedTheme === 'dark' : prefersDark);
        this.updateDOM();
      } catch (error) {
        console.error('Error initializing theme:', error);
      }
    }
  }

  toggleTheme(): void {
    this.isDark.update(current => {
      const newTheme = !current;
      this.persistTheme(newTheme);
      this.updateDOM();
      return newTheme;
    });
  }

  private persistTheme(isDark: boolean): void {
    try {
      localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  }

  private updateDOM(): void {
    document.documentElement.classList.toggle('dark', this.isDark());
  }
}