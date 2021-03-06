[![Build Status](https://travis-ci.org/yukrain/koa-canvas-captcha.svg?branch=master)](https://travis-ci.org/yukrain/koa-canvas-captcha)
[![NPM version](https://badge.fury.io/js/koa-canvas-captcha.svg)](http://badge.fury.io/js/koa-canvas-captcha)
[![Dependency Status](https://david-dm.org/yukrain/koa-canvas-captcha.svg)](https://david-dm.org/yukrain/koa-canvas-captcha)

[![NPM](https://nodei.co/npm/koa-canvas-captcha.png?downloads=true&stars=true)](https://www.npmjs.org/package/koa-canvas-captcha)

# koa-canvas-captcha
适用于Koa框架的canvas绘制的验证码库

## Install 

```bash
npm install koa-canvas-captcha --save
```

## Demo

```javascript
var captcha = require('koa-canvas-captcha'); 
var path = require("path");
var getCaptcha = function*(){
    
     //生成验证码 返回text和图buffer
     var item = yield captcha({
         length: 4, 
         fontSize: 30, 
         width: 150, 
         height: 32, 
         color: 'green', // code color,
         background: 'rgb(245,245,245)', // captcha background color
         lineWidth: 0.5, // Interference lines width
         type: 'normal',
         fontPath: path.join(__dirname, './captchaFont.ttf')
     });
     //将验证码答案存在session
     this.session.captcha = item.answer;
    //返回图片
     this.type = 'jpg';
              this.set({
                  'Cache-Control': 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0',
                  'Expires': 'Sun, 12 Jan 1986 12:00:00 GMT'
              });
     this.body = item.imageBuffer
 };
```
## Options

* `length` - (Number )  captcha length
* `fontSize` - (Number | default: 30 ) captcha font size
* `width` - (Number | default: 150) image width
* `height` - (Number | default: 32) height width
* `lineWidth` - (Number | default: 1) background line width
* `background` - (String | default: rgb(255,255,255)) background color
* `color` - (String | default: rgb(0,0,0)) font color
* `text` - (String) custom captcha text
* `fontPath` - (String ) the *.ttf file path 
* `type` - (String | default: normal) captcha type
   - `normal` - random letter and number 
   - `letter` - just letter 
   - `number` - just number 
   - `arithmetic` - random arithmetic 

## Result
  * `text` - the words on the captcha
  * `answer` - the answer should input
  * `imageBuffer` - imageBuffer

