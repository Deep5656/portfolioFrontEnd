import { AfterViewInit, Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit{
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
  ngOnInit(): void {
    const options = {
      strings: ['Angular Developer', 'Java Developer','Web Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay:1000,
      showCursor: false,
      cursorChar: '|',
      loop: true
 };
 
 const typed = new Typed('.text', options);
  }


  
  // special work...

  jsonInput: string = '';
  keysInput: string = '';
  generatedCode: string = '';
  responseObj: string = '';

  generateCode() {
    let json: any;

    try {
      json = JSON.parse(this.jsonInput);
    } catch (e) {
      this.generatedCode = '// Invalid JSON input';
      return;
    }

    const keys = this.keysInput.split(',').map(k => k.trim());
    const lines: string[] = [];

    for (const key of keys) {
      const result = this.findKeyPath(json, key);

      if (result) {
        const pathExpression = `response${result.path.map(p => `.${p}`).join('')}`;
        lines.push(`this.${this.responseObj}.${key} = ${pathExpression};`);
      } else {
        lines.push(`// '${key}' not found in JSON`);
      }
    }

    // Wrap inside method
    const method = [
      `populate${this.responseObj.charAt(0).toUpperCase() + this.responseObj.slice(1)}(response: any) {`,
      ...lines,
      '}'
    ];

    this.generatedCode = method.join('\n');

  }

  private findKeyPath(obj: any, targetKey: string, path: string[] = []): { path: string[], value: any } | null {
    if (typeof obj !== 'object' || obj === null) return null;

    for (const key of Object.keys(obj)) {
      const newPath = [...path, key];

      if (key === targetKey) {
        return { path: newPath, value: obj[key] };
      }

      const value = obj[key];
      if (typeof value === 'object') {
        const result = this.findKeyPath(value, targetKey, newPath);
        if (result) return result;
      }
    }

    return null;
  }


  copyCode() {
    navigator.clipboard.writeText(this.generatedCode).then(() => {
      alert('Code copied to clipboard!');
    }, () => {
      alert('Failed to copy code.');
    });
  }


  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

}
