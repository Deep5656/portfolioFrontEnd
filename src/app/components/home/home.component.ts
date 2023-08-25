import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
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

}
