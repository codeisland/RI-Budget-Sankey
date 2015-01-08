// Copyright (c) 2015, James Haley
// All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the <organization> nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.

// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

theTip=function(){var l={},g="",c=document,f=c.documentElement,h=d3.select("body").append("div"),j=[],i,m=Math.max(f.clientWidth,window.innerWidth||0),b=(m/2)-(width/2),e=(b<=170)?b:170,a=function(){var n=h;n.style({position:"absolute",opacity:0,pointerEvents:"none",boxSizing:"border-box"});return n.node()},d=a(),k=d3.select(d);l.show=function(){var p=d3.mouse(k.node().parentElement),o=(p[0])-250,n=(p[1])-120,u=b-170,s=(o<=0)?0:(o>=u)?o:u,t=(n>=100)?n:(p[1])+50,q=Array.prototype.slice.call(arguments),r=g.apply(this,q);k.html(r).style({opacity:1,"pointer-events":"all",top:t+"px",left:s+"px"})};l.hide=function(){k.style({opacity:0,"pointer-events":"none"})};l.html=function(n){if(!arguments.length){return g}g=null||d3.functor(n)};l.style=function(p,o){if(arguments.length<2&&typeof p==="string"){return k.style(p,o)}j=Array.prototype.slice.call(arguments);d3.selection.prototype.style.apply(k,j)};l.attr=function(p,o){if(arguments.length<2&&typeof p==="string"){return k.attr(p,o)}j=Array.prototype.slice.call(arguments);d3.selection.prototype.attr.apply(k,j);return l};return l};
