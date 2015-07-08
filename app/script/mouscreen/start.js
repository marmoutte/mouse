/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   start.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var win = require('nw.gui').Window.get();

/*
** The Start's class is auto call for
*/

var Start = {
  'x': window.screen.availWidth - window.innerWidth,
  'y': window.screen.availHeight - window.innerHeight,

  'show': function (arg) {
    win.show(true);
  },
  'position': function (arg) {
    var func = Conf.mouscreen.func;
    var x    = Conf.mouscreen.left;
    var y    = Conf.mouscreen.top;

    var left = x;
    var top = y;
    var right = left + window.innerHeight;
    var bottom = top + window.innerWidth;

    x = (x !== null ? x : Start.x);
    y = (y !== null ? y : Start.y);

    var screenWidth = window.screen.availWidth;
    var screenHeight = window.screen.availHeight;

    if(left < 0)
      x = 0;
    if(top < 0) 
      y = 0;
    if(right > screenWidth) 
      x = screenWidth-window.innerWidth;
    if(bottom > screenHeight) 
      y = screenHeight-window.innerHeight;

    Position[func](x, y);
  },
  'default': window.addEventListener('load', function (arg) {
    Start.show();
    Start.position();
  }, false),

};
