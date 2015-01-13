/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   close.js                                           :+:      :+:    :+:   */
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
** The class is a procedure of program exit.
*/

var Close = {
  'save': Conf.configuration.save,
  'target': 'close',
  'path': './package.json',
  'out': undefined,

  'cancel': function() {
    win.close();
    },
  'end': function (arg) {
    var path = Close.path;
    var data = JSON.stringify(Package, null, 2, '\t');
    data += '\n';
    if (Close.save) {
      File.write(path, data).then(function(res, err) {
        win.close();
      });
    }
    else
      win.close();
  },
  'build': function (dom) {
    var btnApply = document.createElement('input');
    var btnCancel = document.createElement('input');
    var cnt = -1;

    btnApply.setAttribute('id', 'close');
    btnApply.setAttribute('value', Lang.translate('OK', {}));
    btnApply.setAttribute('type', 'submit');
    btnApply.addEventListener('click', Close.end, false);
    dom.appendChild(btnApply);

    btnCancel.setAttribute('id', 'cancel');
    btnCancel.setAttribute('value', Lang.translate('cancel', {}));
    btnCancel.setAttribute('type', 'button');
    btnCancel.addEventListener('click', Close.cancel, false);
    dom.appendChild(btnCancel);
  },
    'build2': function (dom) {
    var tag = document.createElement('input');
    var cnt = -1;

    tag.setAttribute('id', 'close');
    //tag.setAttribute('value', Lang.translate('save_and_close', {}));
    tag.setAttribute('value', Lang.translate('apply', {}));
    tag.setAttribute('type', 'submit');
    tag.addEventListener('click', Close.end, false);
    dom.appendChild(tag);
  }
};
