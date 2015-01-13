/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   language.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Language's class updates the new lang.
*/

var StyleEngine = {
  'theme': Conf.style.theme,
  'themes': Conf.style.themes,

  'change': function (arg) {
    var name = arg.srcElement.id;
    var dom  = document.getElementById(name);

    Conf.style.theme = dom.value;
    StyleEngine.theme = dom.value;
    Tools.init(arg);
  },
  'option': function (key) {
    var tag = document.createElement('option');

    tag.textContent = Lang.translate("Theme " + key, {});
    tag.setAttribute('value', key);
    if (key === Conf.style.theme)
      tag.setAttribute('selected', 'selected');
    return (tag);
  },
  'build': function (dom) {
    var tag = document.createElement('select');
    var cnt = -1;

    tag.setAttribute('id', 'style');
    tag.addEventListener('change', StyleEngine.change, false);
    while (StyleEngine.themes[++cnt])
      tag.appendChild(StyleEngine.option(StyleEngine.themes[cnt]));
    dom.appendChild(tag);
  }
};
