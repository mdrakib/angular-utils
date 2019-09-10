import { Injectable } from '@angular/core';
import * as qs from 'query-string';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  private _processArray(obj: any) {
    for (const key in obj) {
      const match = key.match(/^([^\[]+)(\[[0-9]+\])$/);
      if(match) {
        var arrayKey = match[1];
        if(!obj[arrayKey]) {
          obj[arrayKey] = [];
        }

        const value = obj[key];
        obj[arrayKey].push(value);

        this._processArray(value);

        delete obj[key];
      }
    }
  }

  convertPostToJson(postData: string) {
    const json = qs.parse(postData);

    let output = {};

    for (var key in json) {
      var value = json[key];
      if(key.indexOf('.') == -1) {
        output[key] = json[key];
      }
      else {
        var item = output;
        var lastItem = null;
        var lastKey = null;
        var childKeys = key.split('.');
        for(var i in childKeys) {
          var k = childKeys[i];
          if(!item[k]) {
            item[k] = {};
          }
          lastItem = item;
          lastKey = k;
          item = item[k];
        }
        lastItem[lastKey] = value;
      }
    }

    this._processArray(output);

    return JSON.stringify(output, null, 4);
  }
}
