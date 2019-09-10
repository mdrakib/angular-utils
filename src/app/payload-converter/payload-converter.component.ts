import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'app-payload-converter',
  templateUrl: './payload-converter.component.html',
  styleUrls: ['./payload-converter.component.css']
})
export class PayloadConverterComponent {
  json: string;

  converter: ConverterService;

  constructor(converter: ConverterService){ 
    this.converter = converter;
  }

  convert(value: string) {  
    return this.converter.convertPostToJson(value);
  }
}
