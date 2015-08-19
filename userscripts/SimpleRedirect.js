// ==UserScript==
// @name        Simple Redirect
// @description Redirect notgithub.com to github.com
// @include     https://notgithub.com/*
// @version     1.0
// @grant       none
// ==/UserScript==

if (window.location.href.indexOf("/commit") >=0 ) {
    window.location.assign(window.location.href.replace("notgithub.com/", "github.com/"));
}
