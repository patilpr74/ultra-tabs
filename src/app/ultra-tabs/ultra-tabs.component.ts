import { Component } from '@angular/core';

@Component({
  selector: 'app-ultra-tabs',
  templateUrl: './ultra-tabs.component.html',
  styleUrls: ['./ultra-tabs.component.scss']
})
export class UltraTabsComponent {
  tabs = ['HTML', 'CSS', 'JavaScript', 'Angular'];

  // Default active tabs
  activeIf = 'HTML';
  activeFor = 'HTML';
  activeSwitch = 'HTML';

  tabContent: { [key: string]: string } = {
     HTML: `HTML (HyperText Markup Language) is the backbone of every website. 
     It defines the structure of a webpage using a system of tags and attributes that describe elements like headings, 
     paragraphs, images, links, lists, and forms. 
     HTML is not a programming language; it’s a markup language used to organize and 
     display content on the web. The <head> section typically contains metadata and links to stylesheets or scripts, while 
     the <body> section includes visible content. Modern HTML5 introduced semantic elements like <header>, <section>, <article>, 
     and <footer> to improve accessibility and SEO. Combined with CSS and JavaScript, HTML creates dynamic, interactive, and visually 
     engaging websites that work across devices and browsers. In essence, HTML serves as the skeleton that holds everything together on a webpage.`,

    CSS: `CSS (Cascading Style Sheets) is used to style and design HTML documents. It allows developers to control layout, color, font, spacing, and animations of web elements with precision. CSS separates content from presentation, making it easier to maintain and modify designs without touching the HTML structure. With CSS3, developers gained access to powerful features such as Flexbox, Grid, transitions, and media queries, which enable responsive and mobile-first designs. CSS also supports variables, custom properties, and frameworks like Bootstrap or Tailwind CSS for faster UI development. Whether it’s making a button glow, aligning complex layouts, or creating dark mode, CSS empowers developers to transform plain HTML into beautiful, interactive user experiences.`,

    JavaScript: `JavaScript is the heart of modern web interactivity. It brings websites to life by adding behavior and logic to HTML and CSS. JavaScript runs directly in the browser, allowing features like form validation, content updates without reloading (AJAX), animations, and real-time user interactions. ES6 and later versions introduced features like arrow functions, classes, async/await, and modules, making JavaScript more powerful and readable. Popular libraries such as React, Vue, and Angular are built on top of JavaScript, enabling developers to build complex single-page applications (SPAs). Combined with Node.js, JavaScript also powers backend development, making it a full-stack language. From small effects to entire web apps, JavaScript is the glue that connects structure (HTML) and style (CSS) into interactive web experiences.`,

    Angular: `Angular is a TypeScript-based framework developed by Google for building dynamic, scalable, and high-performance web applications. It uses components, dependency injection, and two-way data binding to make development fast and modular. Angular’s powerful CLI simplifies project setup, builds, and deployment. It supports reactive programming using RxJS, which helps manage complex asynchronous operations. The framework also features routing, form handling, HTTP communication, and state management tools right out of the box. With its strong ecosystem and long-term support, Angular is widely used in enterprise-level applications. Developers love Angular for its declarative templates, built-in directives like *ngIf, *ngFor, and powerful tools like Angular Material for UI components. In short, Angular makes large-scale app development easier, cleaner, and faster.`
  };
}
