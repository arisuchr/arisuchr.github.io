/*
A small JS code for displaying the content of "Downloads page"
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

let leftInfo = document.getElementsByClassName('link-text');
let downloads = document.getElementById('downloads');

left.onclick = function() {
    /* FIX: Without that, .left can change its width. */
    body.onmouseover = undefined;
    
    left.style.width = '100%';
    right.style.display = 'none';
    for (let block of leftInfo) {
        block.style.color = 'transparent';
        setTimeout(() => block.style.display = 'none', 500);
    }
    left.style.cursor = 'default';
    downloads.style.display = 'block';
};

