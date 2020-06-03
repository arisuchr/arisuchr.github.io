/*
A small JS code for transition: linear 0.2s width.
Copyright (C) 2020 Arisu Wonderland

This program is free software; you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License,
or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software Foundation, Inc.,
59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
---
LICENSE file is localated at /LICENSE
*/

'use strict';

let body = document.getElementById('body');
let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];
body.onmouseover = handler;

function handler(event) {

      function str(el) {
        if (!el) return "null"
        return el.className || el.tagName;
      }

      if (event.type == 'mouseover') {
        if (str(event.target) == 'left') {
            left.style.width = '55%';
            right.style.width = '45%';
        } else if (str(event.target) == 'right') {
            right.style.width = '60%';
            left.style.width = '40%';
        }
    }
}
