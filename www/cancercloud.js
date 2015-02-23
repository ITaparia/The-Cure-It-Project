/*
<!--
			/* ATTRIBUTION TO TAGUL
			<div style="display: table; margin: 0 auto;"><a href="http://tagul.com/">Created with Tagul.com</a></div>-->
*/


(function(d) {
    function e(d) {
        if (!(this instanceof e)) return new e(d);
        d || (d = {});
        "number" == typeof d && (d = {
            w: d
        });
        null != d.A || (d.A = !0);
        this.options = d;
        this.w = d.w || e.I;
        this.M = 1E3 / this.w;
        this.N = this.w !== e.I;
        this.C = null;
        this.m = {};
        this.r = this.B = 0
    }
    var s = Date.now,
        M = d.setTimeout,
        k, w, z = !1;
    (function() {
        var e, r = ["ms", "moz", "webkit", "o"];
        k = d.requestAnimationFrame;
        w = d.cancelAnimationFrame;
        for (e = 0; e < r.length && !k; e++) k = k || d[r[e] + "RequestAnimationFrame"], w = w || d[r[e] + "CancelAnimationFrame"] || d[r[e] + "CancelRequestAnimationFrame"];
        k && k(function() {
            z = !0
        })
    })();
    e.I = 60;
    e.T = function(k) {
        var r = new e(k);
        d.requestAnimationFrame = function(d) {
            return r.S(d)
        };
        d.cancelAnimationFrame = function(d) {
            return r.cancel(d)
        };
        return r
    };
    e.prototype.request = function(d) {
        var e = this,
            t;
        ++this.r;
        if (z && e.options.A && !this.N) return k(d);
        if (!d) throw new TypeError("Not enough arguments");
        null == this.C && (t = this.M + this.B - (s ? s() : (new Date).getTime()), 0 > t && (t = 0), this.C = M(function() {
            var d;
            e.B = s ? s() : (new Date).getTime();
            e.C = null;
            ++e.r;
            for (d in e.m)
                if (e.m[d]) {
                    if (z && e.options.A) k(e.m[d]);
                    else e.m[d](e.B);
                    delete e.m[d]
                }
        }, t));
        this.m[this.r] = d;
        return this.r
    };
    e.prototype.cancel = function(d) {
        z && this.options.A && w(d);
        delete this.m[d]
    };
    "object" == typeof exports && "object" == typeof module ? module.R = e : "function" == typeof define && define.Q ? define(function() {
        return e
    }) : d.AnimationFrame = e
})(window);
window.TagulDisplayCloud = function(d, e, s, M) {
    function k(b) {
        return !isNaN(parseFloat(b)) && isFinite(b)
    }

    function w() {
        var b = g.offsetWidth,
            a = g.offsetHeight;
        E = 36E4 < b * a ? 1 : 1.5;
        g.width = E * b + 1;
        g.height = E * a + 1
    }

    function z() {
        if (v) {
            attribution.h = F;
            var b = G();
            attribution.e = b - Math.max(attribution.g - (b - attribution.e), 0);
            attribution.s = !0
        }
    }

    function I(b) {
        b = parseInt(b.replace("#", ""), 16);
        return {
            l: b >> 16 & 255,
            k: b >> 8 & 255,
            i: b & 255
        }
    }

    function r(b, a) {
        b = b.substring(1, b.length);
        b = I(b);
        return "rgba(" + b.l + "," + b.k + "," + b.i + "," + a.toFixed(4) +
            ")"
    }

    function t(b) {
        b = b.toString(16);
        return 1 == b.length ? "0" + b : b
    }

    function O(b, a, n) {
        c1 = I(b.substring(1, b.length));
        c2 = I(a.substring(1, a.length));
        return "#" + t(Math.round(c1.l * (1 - n) + c2.l * n)) + t(Math.round(c1.k * (1 - n) + c2.k * n)) + t(Math.round(c1.i * (1 - n) + c2.i * n))
    }

    function G() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function J(b, a) {
        b.setTransform(a[0][0], a[1][0], a[0][1], a[1][1], a[0][2], a[1][2])
    }

    function u(b, a) {
        return [
            [1, 0, b],
            [0, 1, a]
        ]
    }

    function p(b, a) {
        return [
            [b[0][0] * a[0][0] + b[0][1] * a[1][0], b[0][0] * a[0][1] +
                b[0][1] * a[1][1], b[0][0] * a[0][2] + b[0][1] * a[1][2] + b[0][2]
            ],
            [b[1][0] * a[0][0] + b[1][1] * a[1][0], b[1][0] * a[0][1] + b[1][1] * a[1][1], b[1][0] * a[0][2] + b[1][1] * a[1][2] + b[1][2]]
        ]
    }

    function P(b) {
        var a = b[0][0] * b[1][1] - b[0][1] * b[1][0];
        return [
            [b[1][1] / a, -b[0][1] / a, (b[0][1] * b[1][2] - b[0][2] * b[1][1]) / a],
            [-b[1][0] / a, b[0][0] / a, (b[0][2] * b[1][0] - b[0][0] * b[1][2]) / a]
        ]
    }

    function Q(b) {
        return Math.sqrt(b[0][0] * b[0][0] + b[0][1] * b[0][1])
    }

    function A(b, a) {
        return {
            x: a[0][0] * b.x + a[0][1] * b.y + a[0][2],
            y: a[1][0] * b.x + a[1][1] * b.y + a[1][2]
        }
    }

    function B(b,
        a) {
        var n = A({
                x: b.x,
                y: b.y
            }, a),
            c = A({
                x: b.x + b.width,
                y: b.y + b.height
            }, a),
            d = A({
                x: b.x,
                y: b.y + b.height
            }, a),
            f = A({
                x: b.x + b.width,
                y: b.y
            }, a),
            e = Math.min(n.x, c.x, d.x, f.x),
            g = Math.min(n.y, c.y, d.y, f.y),
            h = Math.max(n.x, c.x, d.x, f.x),
            n = Math.max(n.y, c.y, d.y, f.y);
        return {
            x: e,
            y: g,
            width: h - e,
            height: n - g
        }
    }

    function t(b) {
        b = b.toString(16);
        return 1 == b.length ? "0" + b : b
    }

    function R(b, a) {
        var d = u(-b.bbox.J, -b.bbox.K),
            c = Math.pow(b.G / b.scale, a),
            d = p([
                [c, 0, 0],
                [0, c, 0]
            ], d),
            c = (b.P - b.L) * a,
            d = p([
                [Math.cos(c), Math.sin(c), 0],
                [-Math.sin(c), Math.cos(c),
                    0
                ]
            ], d);
        return p(u(b.bbox.J, b.bbox.K), d)
    }

    function S(b, a, d, c, f) {
        radius = 0.1 * Math.min(c, f);
        b.beginPath();
        b.moveTo(a + radius, d);
        b.lineTo(a + c - radius, d);
        b.quadraticCurveTo(a + c, d, a + c, d + radius);
        b.lineTo(a + c, d + f - radius);
        b.quadraticCurveTo(a + c, d + f, a + c - radius, d + f);
        b.lineTo(a + radius, d + f);
        b.quadraticCurveTo(a, d + f, a, d + f - radius);
        b.lineTo(a, d + radius);
        b.quadraticCurveTo(a, d, a + radius, d);
        b.closePath();
        b.fill()
    }

    function K(b, a) {
        for (var d = 0, c = 0, f = 0; f < a.glyphs.length; f++) {
            var e = a.glyphs[f],
                d = u(e.x - d, e.y - c);
            b.transform(d[0][0],
                d[1][0], d[0][1], d[1][1], d[0][2], d[1][2]);
            d = b;
            c = e.path;
            d.beginPath();
            for (var g = 0; g < c.length; g++) "M" == c[g] ? d.moveTo(c[++g], c[++g]) : "Q" == c[g] ? d.quadraticCurveTo(c[++g], c[++g], c[++g], c[++g]) : "C" == c[g] ? d.bezierCurveTo(c[++g], c[++g], c[++g], c[++g], c[++g], c[++g]) : "L" == c[g] && d.lineTo(c[++g], c[++g]);
            d.fill();
            d = e.x;
            c = e.y
        }
    }

    function T() {
        var b = {},
            a;
        for (a in d.outlines) b[a] = d.outlines[a].split(" ");
        for (a = 0; a < q.length; ++a)
            for (var f = 0; f < q[a].glyphs.length; ++f) q[a].glyphs[f].path = b[q[a].glyphs[f].glyph];
        void 0 != h.backgroundColor &&
            (l.fillStyle = r(h.backgroundColor, h.t), l.fillRect(0, 0, g.width, g.height));
        b = d.b;
        a = Math.min(0.95 * g.width / b.width, 0.95 * g.height / b.height);
        f = p([
            [a, 0, 0],
            [0, a, 0]
        ], u(-b.x + (g.width / a - b.width) / 2, -b.y + (g.height / a - b.height) / 2));
        for (a = 0; a < q.length; a++) {
            var c = q[a];
            l.fillStyle = c.fill;
            c.j = p(f, c.matrix);
            J(l, c.j);
            K(l, c);
            c.bbox.c = c.bbox.x + c.bbox.width;
            c.bbox.d = c.bbox.y + c.bbox.height;
            c.bbox.J = c.bbox.x + c.bbox.width / 2;
            c.bbox.K = c.bbox.y + c.bbox.height / 2;
            c.D = P(c.j);
            c.e = 0;
            c.scale = Q(c.matrix);
            c.G = h.zoom ? Math.max(1.1 * c.scale,
                0.15 * Math.sqrt(b.width * b.height / (c.bbox.width * c.bbox.height))) : c.scale;
            c.G = Math.min(c.G, Math.min(b.width / c.bbox.width, b.height / c.bbox.height));
            var e = c.matrix,
                k = Q(e),
                m = e[0][0] / k,
                e = e[0][1] / k,
                k = void 0,
                k = 1 < e ? 90 : -1 > e ? -90 : 180 * Math.asin(e) / Math.PI;
            0 > m && (k = 180 * (0 > e ? -1 : 1) - k);
            c.L = Math.round(k) * Math.PI / 180;
            c.P = h.rotate ? 0 : c.L;
            c.o = 0;
            c.p = 0;
            c.f = B(c.bbox, p(c.j, R(c, 1)));
            0 > c.f.x && (c.o = -c.f.x);
            c.f.x + c.f.width > g.width && (c.o = -(c.f.x + c.f.width) + g.width);
            0 > c.f.y && (c.p = -c.f.y);
            c.f.y + c.f.height > g.height && (c.p = -(c.f.y + c.f.height) +
                g.height);
            c.O = O(h.backgroundColor, c.fill, 0.2);
            v && c.fill && (attribution.backgroundColor = attribution.backgroundColor || {
                l: 0,
                k: 0,
                i: 0
            }, c = I(c.fill), attribution.backgroundColor.l += c.l, attribution.backgroundColor.k += c.k, attribution.backgroundColor.i += c.i)
        }
        h.q && (h.v = r(h.q, 1), h.v = h.v.substring(0, h.v.length - 7));
        N = l.getImageData(0, 0, g.width, g.height);
        if (v) {
            attribution.backgroundColor.l /= q.length;
            attribution.backgroundColor.k /= q.length;
            attribution.backgroundColor.i /= q.length;
            attribution.backgroundColor = "#" + (65536 *
                attribution.backgroundColor.l + 256 * attribution.backgroundColor.k + attribution.backgroundColor.i).toString(16);
            attribution.backgroundColor = r(attribution.backgroundColor, 0.8);
            attribution.n = h.backgroundColor;
            for (a = 0; a < attribution.data.tags.length; a++) c = attribution.data.tags[a], b = B(c.bbox, c.matrix), attribution.b = attribution.b ? {
                x: Math.min(b.x, attribution.b.x),
                y: Math.min(b.y, attribution.b.y),
                c: Math.max(b.x + b.width, attribution.b.c),
                d: Math.max(b.y + b.height, attribution.b.d)
            } : {
                x: b.x,
                y: b.y,
                c: b.x + b.width,
                d: b.y +
                    b.height
            };
            attribution.b.width = attribution.b.c - attribution.b.x;
            attribution.b.height = attribution.b.d - attribution.b.y;
            a = Math.min(g.width / attribution.b.width, g.height / attribution.b.height);
            a = Math.min(a, Math.sqrt(0.02 * g.width * g.height / (attribution.b.width * attribution.b.height)));
            c = attribution.data.tags[0];
            c.bbox.c = c.bbox.x + c.bbox.width;
            c.bbox.d = c.bbox.y + c.bbox.height;
            c.j = p(p([
                [a, 0, 0],
                [0, a, 0]
            ], u(-attribution.b.x + (g.width / a - 1 * attribution.b.width), -attribution.b.y + (g.height / a - 0 * attribution.b.height))), c.matrix);
            c.o = 0;
            c.p = -attribution.b.height * a;
            c.D = P(p(u(1 * c.o, 1 * c.p), c.j));
            for (f = 0; f < c.glyphs.length; ++f) c.glyphs[f].path = attribution.data.outlines[c.glyphs[f].glyph].split(" ")
        }
    }

    function U() {
        if (m && 0 < m.length || v && attribution.s) {
            f && l.putImageData(N, 0, 0, f.x - 2, f.y - 2, f.width + 4, f.height + 4);
            f = void 0;
            for (var b = 0; b < m.length; b++) {
                var a = m[b];
                l.fillStyle = a.O;
                J(l, a.j);
                K(l, a)
            }
            for (var d = G(), b = 0; b < m.length; b++) {
                var a = m[b],
                    c = (d - a.e) / (1E3 * h.g),
                    c = 1 < c ? 1 : c;
                0.5 < c && a != C && a.h == F && (a.h = D, c = 1 - c, a.e = d - 1E3 * c * h.g);
                a.h == D && (c = 1 - c);
                var e;
                0 < c ? (e = p(a.j, R(a, c)), e = p(u(c * a.o, c * a.p), e)) : e = a.j;
                J(l, e);
                f ? (e = B(a.bbox, e), f = {
                    x: Math.min(f.x, e.x),
                    y: Math.min(f.y, e.y),
                    c: Math.max(f.c, e.x + e.width),
                    d: Math.max(f.d, e.y + e.height)
                }, f.width = f.c - f.x, f.height = f.d - f.y) : (f = B(a.bbox, e), f.c = f.x + f.width, f.d = f.y + f.height);
                h.q && (l.fillStyle = h.v + (c * h.u).toFixed(4) + ")", S(l, a.bbox.x, a.bbox.y, a.bbox.width, a.bbox.height));
                l.fillStyle = h.n ? O(a.fill, h.n, c) : a.fill;
                K(l, a);
                d > a.e + 1E3 * h.g && a.h == D && (m.splice(b, 1), b--)
            }
            v && (attribution.s || f) && (a = attribution.data.tags[0], c = (d - attribution.e) /
                attribution.g, c = 1 < c ? 1 : c, 1 <= c && (attribution.s = !1), attribution.h == D && (c = 1 - c), e = p(u(c * a.o, c * a.p), a.j), f ? (e = B(a.bbox, e), f = {
                    x: Math.min(f.x, e.x),
                    y: Math.min(f.y, e.y),
                    c: Math.max(f.c, e.x + e.width),
                    d: Math.max(f.d, e.y + e.height)
                }, f.width = f.c - f.x, f.height = f.d - f.y) : (f = B(a.bbox, e), f.c = f.x + f.width, f.d = f.y + f.height), l.fillStyle = attribution.backgroundColor, J(l, p(u(c * a.o, c * a.p), a.j)), S(l, a.bbox.x, a.bbox.y, a.bbox.width, a.bbox.height), l.fillStyle = attribution.n, K(l, a))
        }
        L && L.request(U)
    }
    if (!e)
        if (d)
            if (e = document.createElement("canvas"),
                e.getContext && e.getContext("2d")) {
                for (var x = 0; document.getElementById(e = "tagul_embed_cloud_" + x);) x++;
                document.writeln('<a id="' + e + '" style="width: 100%; height: 100%">');
                document.writeln('<canvas style="width: 100%; height: 100%"></canvas>');
                document.writeln("</a>");
                var x = document.getElementsByTagName("head")[0],
                    H = document.createElement("style"),
                    V = document.createTextNode("#" + e + " {outline: 0; border: 0; background: none; margin: 0; padding: 0;}\n#" + e + ":hover {border: 0;}\n");
                H.type = "text/css";
                H.styleSheet ?
                    H.styleSheet.cssText = V.nodeValue : H.appendChild(V);
                x.appendChild(H)
            } else {
                document.writeln('<a href="http://tagul.com/unsupported-browser" style="width: 100%; height: 100%">');
                document.writeln('<img src="http://tagul.com/static/please_update_browser.png" style="width: 100%; height: auto"/>');
                document.writeln("</a>");
                return
            } else {
        document.writeln("<div>Sorry! Cloud does not exist!</div>");
        return
    }
    var v = !1;
    d.b = {
        x: d.viewBox.x,
        y: d.viewBox.y,
        width: d.viewBox.width,
        height: d.viewBox.height
    };
    d.a = d.styleOptions;
    d.a.backgroundColor = d.a.backgroundColor;
    d.a.t = d.a.backgroundColorAlpha;
    d.a.g = d.a.animationSpeed;
    d.a.n = d.a.textColor;
    d.a.H = d.a.textAlpha;
    d.a.q = d.a.boxColor;
    d.a.u = d.a.boxAlpha;
    d.a.zoom = d.a.zoom;
    d.a.rotate = d.a.rotate;
    d.a.F = d.a.openLinksInNewWindow;
    x = {};
    s = "boolean" == typeof s ? s : !0;
    var E, f, q = d.tags,
        N, C = null,
        m = [],
        F = 0,
        D = 1;
    x.cleanUp = function() {
        h = L = m = C = N = f = g = l = y = null
    };
    var y = document.getElementById(e),
        g = y.getElementsByTagName("canvas")[0];
    window.onresize = function() {
        w();
        T()
    };
    w();
    var l = g.getContext("2d");
    l.clearRect(0,
        0, g.width, g.height);
    v && (g.onmouseover = z);
    g.onmousemove = function(b) {
        var a = g,
            d = 0,
            c = 0;
        if (void 0 !== a.offsetParent) {
            do d += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent)
        }
        d += W + X + Y;
        c += Z + $ + aa;
        b = {
            x: (b.pageX - d) * E,
            y: (b.pageY - c) * E
        };
        if (v && (a = attribution.data.tags[0], d = A(b, a.D), a = a.bbox, !(d.x < a.x || d.x > a.c || d.y < a.y || d.y > a.d))) {
            g.style.cursor = "pointer";
            y.href = attribution.url;
            y.target = "_blank";
            C = null;
            return
        }
        for (a = q.length - 1; 0 <= a && (d = A(b, q[a].D), c = q[a].bbox, d.x < c.x || d.x > c.c || d.y < c.y || d.y > c.d); a--);
        a = 0 <= a ? q[a] :
            null;
        null != a ? g.style.cursor = "pointer" : (g.style.cursor = "auto", y.removeAttribute("href"));
        a != C && null != a && (y.href = a.url ? a.url : "javascript:void(0);", y.target = h.F || M ? "_blank" : "_self", null != a && a.h != F && (a.h = F, b = G(), a.e = b - Math.max(1E3 * h.g - (b - a.e), 0), -1 == m.indexOf(a) && m.push(a)));
        C = a
    };
    g.onmouseout = function() {
        for (var b = 0; b < m.length; b++) {
            var a = m[b];
            if (a.h == F) {
                a.h = D;
                var d = G();
                a.e = d - Math.max(1E3 * h.g - (d - a.e), 0);
                C = null
            }
        }
        v && (attribution.h = D, d = G(), attribution.e = d - Math.max(attribution.g - (d - attribution.e), 0), attribution.s = !0)
    };
    var L = L || new window.AnimationFrame(60),
        W = parseInt(document.defaultView.getComputedStyle(g, void 0).paddingLeft, 10) || 0,
        Z = parseInt(document.defaultView.getComputedStyle(g, void 0).paddingTop, 10) || 0,
        X = parseInt(document.defaultView.getComputedStyle(g, void 0).borderLeftWidth, 10) || 0,
        $ = parseInt(document.defaultView.getComputedStyle(g, void 0).borderTopWidth, 10) || 0;
    e = document.body.parentNode;
    var aa = e.offsetTop,
        Y = e.offsetLeft,
        h = {
            backgroundColor: d.a.backgroundColor ? "#" + d.a.backgroundColor : "#FFFFFF",
            t: k(d.a.t) ?
                d.a.t : 1,
            g: k(d.a.g) ? d.a.g : 0.3,
            n: d.a.n ? "#" + d.a.n : void 0,
            H: k(d.a.H) ? d.a.H : 1,
            q: d.a.q ? "#" + d.a.q : void 0,
            u: k(d.a.u) ? d.a.u : 0.8,
            zoom: !0 == d.a.zoom,
            rotate: !0 == d.a.rotate,
            F: !0 == d.a.F
        },
        W, Z, X, $, aa, Y;
    T();
    s && U();
    return x
};
TagulDisplayCloud({
    "viewBox": {
        "x": 3.6000000000000005,
        "y": 1.3000000000000007,
        "width": 115.1,
        "height": 175.2216776518378
    },
    "styleOptions": {
        "backgroundColor": "FFFFFF",
        "backgroundColorAlpha": 1,
        "animationSpeed": 0.2,
        "textColor": "ffffff",
        "textAlpha": 1,
        "boxColor": "000000",
        "boxAlpha": 0.7,
        "zoom": true,
        "rotate": true,
        "openLinksInNewWindow": false
    },
    "outlines": {
        "0.37": "M 377 13 Q 237 13 147.5 -89 Q 58 -191 58 -366 Q 58 -540 149.5 -643.5 Q 241 -747 383 -747 Q 503 -747 584 -656 L 534 -596 Q 469 -666 384 -666 Q 279 -666 216 -585.5 Q 153 -505 153 -369 Q 153 -230 214.5 -149 Q 276 -68 381 -68 Q 475 -68 551 -150 L 602 -92 Q 511 13 377 13 ",
        "0.67": "M 217 13 Q 147 13 102.5 -28 Q 58 -69 58 -141 Q 58 -229 137.5 -276.5 Q 217 -324 392 -344 Q 392 -481 280 -481 Q 203 -481 117 -423 L 81 -486 Q 192 -557 295 -557 Q 391 -557 437 -498 Q 483 -439 483 -334 L 483 0 L 408 0 L 400 -65 L 397 -65 Q 303 13 217 13 M 243 -60 Q 311 -60 392 -132 L 392 -284 Q 259 -268 203 -235 Q 147 -202 147 -147 Q 147 -103 173.5 -81.5 Q 200 -60 243 -60 ",
        "0.80": "M 92 0 L 92 -543 L 167 -543 L 175 -465 L 178 -465 Q 272 -557 360 -557 Q 526 -557 526 -344 L 526 0 L 435 0 L 435 -332 Q 435 -408 410.5 -442.5 Q 386 -477 332 -477 Q 292 -477 260 -458 Q 228 -439 183 -394 L 183 0 L 92 0 ",
        "0.69": "M 306 13 Q 195 13 123 -63 Q 51 -139 51 -271 Q 51 -402 127.5 -479.5 Q 204 -557 313 -557 Q 399 -557 472 -493 L 425 -432 Q 371 -481 316 -481 Q 242 -481 194 -422.5 Q 146 -364 146 -271 Q 146 -177 192.5 -120 Q 239 -63 314 -63 Q 383 -63 442 -117 L 481 -56 Q 406 13 306 13 ",
        "0.71": "M 311 13 Q 199 13 125 -64 Q 51 -141 51 -271 Q 51 -398 124 -477.5 Q 197 -557 296 -557 Q 398 -557 455 -488.5 Q 512 -420 512 -302 Q 512 -276 508 -250 L 142 -250 Q 146 -163 195.5 -111.5 Q 245 -60 322 -60 Q 394 -60 458 -103 L 491 -43 Q 404 13 311 13 M 141 -315 L 432 -315 Q 432 -397 396.5 -440.5 Q 361 -484 297 -484 Q 237 -484 193 -438.5 Q 149 -393 141 -315 ",
        "0.84": "M 92 0 L 92 -543 L 167 -543 L 175 -444 L 178 -444 Q 207 -497 247 -527 Q 287 -557 332 -557 Q 367 -557 390 -545 L 373 -465 Q 350 -474 320 -474 Q 282 -474 245 -444 Q 208 -414 183 -349 L 183 0 L 92 0 ",
        "0.68": "M 331 13 Q 251 13 176 -56 L 173 -56 L 165 0 L 92 0 L 92 -796 L 183 -796 L 183 -578 L 180 -480 Q 268 -557 350 -557 Q 454 -557 510.5 -482.5 Q 567 -408 567 -281 Q 567 -146 498 -66.5 Q 429 13 331 13 M 316 -63 Q 385 -63 428.5 -121.5 Q 472 -180 472 -279 Q 472 -480 329 -480 Q 263 -480 183 -405 L 183 -120 Q 248 -63 316 -63 ",
        "0.75": "M 92 0 L 92 -543 L 183 -543 L 183 0 L 92 0 M 183 -672 Q 183 -672 174 -663.5 Q 165 -655 138 -655 Q 111 -655 93 -672 Q 75 -689 75 -714 Q 75 -741 92.5 -757 Q 110 -773 138 -773 Q 166 -773 183.5 -757 Q 201 -741 201 -714 Q 201 -689 183 -672 ",
        "0.86": "M 263 13 Q 108 13 108 -168 L 108 -469 L 27 -469 L 27 -538 L 112 -543 L 123 -695 L 199 -695 L 199 -543 L 346 -543 L 346 -469 L 199 -469 L 199 -166 Q 199 -113 218 -87 Q 237 -61 283 -61 Q 309 -61 345 -75 L 363 -7 Q 301 13 263 13 ",
        "0.85": "M 234 13 Q 122 13 31 -62 L 76 -122 Q 155 -58 237 -58 Q 289 -58 316.5 -82 Q 344 -106 344 -143 Q 344 -169 323 -190 Q 302 -211 281 -221 Q 260 -231 220 -246 Q 185 -259 161.5 -270 Q 138 -281 111.5 -299.5 Q 85 -318 71.5 -344 Q 58 -370 58 -403 Q 58 -470 108.5 -513.5 Q 159 -557 245 -557 Q 335 -557 414 -496 L 370 -437 Q 305 -485 245 -485 Q 197 -485 171.5 -463 Q 146 -441 146 -407 Q 146 -384 164.5 -365.5 Q 183 -347 199.5 -339.5 Q 216 -332 256 -317 Q 263 -314 266 -313 Q 299 -301 315 -294 Q 331 -287 357.5 -272 Q 384 -257 397 -242 Q 410 -227 421 -202.5 Q 432 -178 432 -148 Q 432 -79 379.5 -33 Q 327 13 234 13 ",
        "0.87": "M 250 13 Q 85 13 85 -199 L 85 -543 L 176 -543 L 176 -210 Q 176 -134 200 -100 Q 224 -66 278 -66 Q 319 -66 352 -87 Q 385 -108 425 -158 L 425 -543 L 516 -543 L 516 0 L 440 0 L 433 -85 L 430 -85 Q 345 13 250 13 ",
        "0.78": "M 188 13 Q 92 13 92 -108 L 92 -796 L 183 -796 L 183 -102 Q 183 -63 209 -63 Q 218 -63 228 -65 L 241 5 Q 220 13 188 13 ",
        "0.73": "M 275 250 Q 173 250 111.5 211.5 Q 50 173 50 104 Q 50 33 131 -19 L 131 -23 Q 81 -52 81 -112 Q 81 -169 142 -213 L 142 -217 Q 71 -274 71 -363 Q 71 -450 130.5 -503.5 Q 190 -557 275 -557 Q 313 -557 351 -543 L 540 -543 L 540 -473 L 429 -473 Q 473 -431 473 -361 Q 473 -276 416.5 -224 Q 360 -172 275 -172 Q 232 -172 194 -191 Q 159 -161 159 -126 Q 159 -67 254 -67 L 360 -67 Q 549 -67 549 62 Q 549 140 473 195 Q 397 250 275 250 M 275 -234 Q 323 -234 356.5 -269.5 Q 390 -305 390 -363 Q 390 -421 357 -455.5 Q 324 -490 275 -490 Q 225 -490 192 -455.5 Q 159 -421 159 -363 Q 159 -305 192.5 -269.5 Q 226 -234 275 -234 M 288 188 Q 363 188 412 154.5 Q 461 121 461 76 Q 461 40 433.5 24.5 Q 406 9 350 9 L 256 9 Q 222 9 186 0 Q 130 40 130 92 Q 130 136 172 162 Q 214 188 288 188 ",
        "0.70": "M 277 13 Q 174 13 113.5 -62 Q 53 -137 53 -271 Q 53 -399 122 -478 Q 191 -557 288 -557 Q 333 -557 367 -541.5 Q 401 -526 441 -493 L 436 -587 L 436 -796 L 527 -796 L 527 0 L 453 0 L 444 -64 L 442 -64 Q 363 13 277 13 M 297 -63 Q 368 -63 436 -138 L 436 -423 Q 372 -480 304 -480 Q 237 -480 192 -422 Q 147 -364 147 -272 Q 147 -173 186 -118 Q 225 -63 297 -63 ",
        "0.82": "M 92 229 L 92 -543 L 167 -543 L 175 -481 L 178 -481 Q 271 -557 351 -557 Q 454 -557 510.5 -482.5 Q 567 -408 567 -280 Q 567 -146 498 -66.5 Q 429 13 331 13 Q 258 13 181 -50 L 183 45 L 183 229 L 92 229 M 316 -63 Q 385 -63 428.5 -121.5 Q 472 -180 472 -279 Q 472 -480 329 -480 Q 264 -480 183 -405 L 183 -120 Q 250 -63 316 -63 ",
        "0.81": "M 481.5 -64 Q 481.5 -64 444.75 -25.5 Q 408 13 303 13 Q 198 13 124.5 -64 Q 51 -141 51 -271 Q 51 -402 124.5 -479.5 Q 198 -557 303 -557 Q 408 -557 481.5 -479.5 Q 555 -402 555 -271 Q 555 -141 481.5 -64 M 189 -120 Q 189 -120 210.5 -91.5 Q 232 -63 303 -63 Q 374 -63 417.5 -120 Q 461 -177 461 -271 Q 461 -365 417.5 -423 Q 374 -481 303 -481 Q 233 -481 189.5 -423 Q 146 -365 146 -271 Q 146 -177 189 -120 ",
        "0.42": "M 100 0 L 100 -733 L 193 -733 L 193 -426 L 535 -426 L 535 -733 L 627 -733 L 627 0 L 535 0 L 535 -346 L 193 -346 L 193 0 L 100 0 ",
        "0.91": "M 101 234 Q 64 234 37 223 L 55 150 Q 80 159 96 159 Q 181 159 219 42 L 231 1 L 13 -543 L 108 -543 L 219 -241 Q 257 -128 271 -89 L 276 -89 Q 282 -108 298 -161 Q 314 -214 322 -241 L 419 -543 L 508 -543 L 303 45 Q 271 134 223.5 184 Q 176 234 101 234 ",
        "0.74": "M 92 0 L 92 -796 L 183 -796 L 183 -578 L 180 -466 Q 271 -557 360 -557 Q 526 -557 526 -344 L 526 0 L 435 0 L 435 -332 Q 435 -408 410.5 -442.5 Q 386 -477 332 -477 Q 292 -477 260 -458 Q 228 -439 183 -394 L 183 0 L 92 0 ",
        "0.88": "M 209 0 L 13 -543 L 108 -543 L 210 -234 Q 214 -221 232.5 -162.5 Q 251 -104 261 -74 L 265 -74 Q 310 -217 315 -234 L 418 -543 L 508 -543 L 315 0 L 209 0 "
    },
    "tags": [{
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.015554862842892767, 0, 32.14781795511222],
            [0, 0.015554862842892767, 104.70863466334164]
        ]
    }, {
        "text": "brain",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.013151453874584244, 0, 39.18959506709647],
            [0, 0.013151453874584244, 60.33958676197615]
        ]
    }, {
        "text": "testicular",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.008405438813349814, 0, 40.044511521707044],
            [0, 0.008405438813349814, 92.29072929542644]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.00650095602294455, 0, 41.19383608978919],
            [0, 0.00650095602294455, 66.77476099426386]
        ]
    }, {
        "text": "pancreas",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.007569974554707379, 0, 42.050480704492784],
            [0, 0.007569974554707379, 82.741475826972]
        ]
    }, {
        "text": "prostate",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.008023560209424083, 0, 41.93683246073298],
            [0, 0.008023560209424083, 75.32470942499984]
        ]
    }, {
        "text": "blood",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.010506798516687269, 0, 25.134970671931],
            [0, 0.010506798516687269, 114.11341161928306]
        ]
    }, {
        "text": "Hope",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.011059798528626458, 0, 8.953936059559027],
            [0, 0.011059798528626458, 147.13906880390567]
        ]
    }, {
        "text": "eye",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.013450728425459739, 0, 24.28103743312247],
            [0, 0.013450728425459739, 124.5299158431385]
        ]
    }, {
        "text": "strength",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0074354291677537175, 0, 14.519501695799635],
            [0, 0.0074354291677537175, 135.36577742327498]
        ]
    }, {
        "text": "survival",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.008384918401800789, 0, 3.340067529544176],
            [0, 0.008384918401800789, 158.28171531029295]
        ]
    }, {
        "text": "health",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.009456118665018541, 0, 87.57422524624675],
            [0, 0.009456118665018541, 161.20207045735475]
        ]
    }, {
        "text": "hospitals",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0066341463414634145, 0, 82.97227085577678],
            [0, 0.0066341463414634145, 149.88078048780488]
        ]
    }, {
        "text": "death",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.010506798516687269, 0, 78.42865344912647],
            [0, 0.010506798516687269, 143.11341161928306]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.007828947368421053, 0, 74.69115447423911],
            [0, 0.007828947368421053, 132.37322368421053]
        ]
    }, {
        "text": "brain",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.011557478368355995, 0, 68.771047047973],
            [0, 0.011557478368355995, 125.02475278121136]
        ]
    }, {
        "text": "testicular",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.00630407911001236, 0, 64.32716745940573],
            [0, 0.00630407911001236, 113.46804697156983]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.004548886372215931, 0, 58.2225556813892],
            [0, 0.004548886372215931, 48.19809515795569]
        ]
    }, {
        "text": "pancreas",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.005407124681933842, 0, 8.18415563892598],
            [0, 0.005407124681933842, 162.38676844783714]
        ]
    }, {
        "text": "prostate",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.005519480519480519, 0, 60.86469787355428],
            [0, 0.005519480519480519, 42.28603896103896]
        ]
    }, {
        "text": "blood",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.007764705882352942, 0, 32.88564705882353],
            [0, 0.007764705882352942, 47.80758433753986]
        ]
    }, {
        "text": "Hope",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.007459847844463229, 0, 62.92901521555368],
            [0, 0.007459847844463229, 35.190652623864274]
        ]
    }, {
        "text": "eye",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.01064453125, 0, 31.282128906249998],
            [0, 0.01064453125, 37.50435030918552]
        ]
    }, {
        "text": "strength",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.004722149752152361, 0, 90.30361335768328],
            [0, 0.004722149752152361, 166.24514973037435]
        ]
    }, {
        "text": "survival",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.004202719406674907, 0, 64.52559153402244],
            [0, 0.004202719406674907, 28.645364647713226]
        ]
    }, {
        "text": "health",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.005253399258343634, 0, 13.482290818246614],
            [0, 0.005253399258343634, 167.55670580964153]
        ]
    }, {
        "text": "hospitals",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0033170731707317072, 0, 67.11666822927845],
            [0, 0.0033170731707317072, 51.940390243902435]
        ]
    }, {
        "text": "death",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00571870170015456, 0, 31.296908809891807],
            [0, 0.00571870170015456, 29.761859880277196]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0044736842105263155, 0, 17.74362832028811],
            [0, 0.0044736842105263155, 140.64184210526315]
        ]
    }, {
        "text": "brain",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.006186924089512944, 0, 64.88080298376481],
            [0, 0.006186924089512944, 24.394230982919517]
        ]
    }, {
        "text": "testicular",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.003745147293902717, 0, 15.198881023064626],
            [0, 0.003745147293902717, 129.63693404483448]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.002906757266893167, 0, 71.15466213665535],
            [0, 0.002906757266893167, 116.96776639591405]
        ]
    }, {
        "text": "pancreas",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.003674698795180723, 0, 42.03692771084337],
            [0, 0.003674698795180723, 51.01565374189685]
        ]
    }, {
        "text": "prostate",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0036796536796536794, 0, 49.13388733958011],
            [0, 0.0036796536796536794, 3.857359307359308]
        ]
    }, {
        "text": "blood",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.005253399258343634, 0, 4.967130813974],
            [0, 0.005253399258343634, 152.55670580964153]
        ]
    }, {
        "text": "Hope",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.005473372781065088, 0, 31.97766272189349],
            [0, 0.005473372781065088, 23.207571076599542]
        ]
    }, {
        "text": "eye",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.006447534766118836, 0, 65.95257797178225],
            [0, 0.006447534766118836, 17.041276864728193]
        ]
    }, {
        "text": "strength",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.003250478011472275, 0, 61.855880981643665],
            [0, 0.003250478011472275, 107.88738049713194]
        ]
    }, {
        "text": "survival",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.003770399549803039, 0, 90.1831176139561],
            [0, 0.003770399549803039, 155.39104376048246]
        ]
    }, {
        "text": "health",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.004202719406674907, 0, 84.02743867003831],
            [0, 0.004202719406674907, 136.64536464771322]
        ]
    }, {
        "text": "hospitals",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0024878048780487805, 0, 88.95601650352107],
            [0, 0.0024878048780487805, 127.20529268292682]
        ]
    }, {
        "text": "death",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.004202719406674907, 0, 92.38032268670973],
            [0, 0.004202719406674907, 171.64536464771322]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0033552631578947366, 0, 76.3348958161461],
            [0, 0.0033552631578947366, 107.73138157894736]
        ]
    }, {
        "text": "brain",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.004936375603334796, 0, 33.9208534444932],
            [0, 0.004936375603334796, 18.401506354983596]
        ]
    }, {
        "text": "testicular",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.00315203955500618, 0, 52.66494036751894],
            [0, 0.00315203955500618, 95.73402348578492]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0024378585086042063, 0, 68.85254833408655],
            [0, 0.0024378585086042063, 95.16553537284894]
        ]
    }, {
        "text": "pancreas",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0032442748091603053, 0, 37.146287736350864],
            [0, 0.0032442748091603053, 107.03206106870229]
        ]
    }, {
        "text": "prostate",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0027597402597402594, 0, 47.10251849110771],
            [0, 0.0027597402597402594, 69.14301948051948]
        ]
    }, {
        "text": "blood",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.004202719406674907, 0, 40.27557799056718],
            [0, 0.004202719406674907, 42.64536464771323]
        ]
    }, {
        "text": "Hope",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.003719357565511412, 0, 71.22806424344886],
            [0, 0.003719357565511412, 59.519533952108695]
        ]
    }, {
        "text": "eye",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.005372945638432364, 0, 64.60025932434733],
            [0, 0.005372945638432364, 11.367730720606826]
        ]
    }, {
        "text": "strength",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.002974171667101487, 0, 36.20780067831985],
            [0, 0.002974171667101487, 127.704441880565]
        ]
    }, {
        "text": "survival",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00315203955500618, 0, 61.30902717885757],
            [0, 0.00315203955500618, 38.73402348578492]
        ]
    }, {
        "text": "health",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00315203955500618, 0, 105.49202506288573],
            [0, 0.00315203955500618, 152.73402348578492]
        ]
    }, {
        "text": "hospitals",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0024878048780487805, 0, 26.143375326391322],
            [0, 0.0024878048780487805, 150.20529268292682]
        ]
    }, {
        "text": "death",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0036321483771251935, 0, 57.107496136012365],
            [0, 0.0036321483771251935, 86.44096105819723]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0033552631578947366, 0, 17.24273433307529],
            [0, 0.0033552631578947366, 170.73138157894735]
        ]
    }, {
        "text": "brain",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.004124616059675296, 0, 36.92053532250988],
            [0, 0.004124616059675296, 13.592117007917587]
        ]
    }, {
        "text": "testicular",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0024092258506508337, 0, 83.15995090203242],
            [0, 0.0024092258506508337, 152.69325702979302]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0019913174782936957, 0, 71.12543412608532],
            [0, 0.0019913174782936957, 55.02220525670788]
        ]
    }, {
        "text": "pancreas",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0025421686746987956, 0, 43.99112048192771],
            [0, 0.0025421686746987956, 84.94034340244565]
        ]
    }, {
        "text": "prostate",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0025, 0, 68.995],
            [0, 0.0025, 86.10687190730125]
        ]
    }, {
        "text": "blood",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00315203955500618, 0, 61.29330229494454],
            [0, 0.00315203955500618, 7.7340234857849195]
        ]
    }, {
        "text": "Hope",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.003534303534303534, 0, 79.96864886649422],
            [0, 0.003534303534303534, 103.89064449064449]
        ]
    }, {
        "text": "eye",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.0042983565107458915, 0, 75.24855236493842],
            [0, 0.0042983565107458915, 135.69418457648547]
        ]
    }, {
        "text": "strength",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0024378585086042063, 0, 42.30859040173654],
            [0, 0.0024378585086042063, 95.16553537284894]
        ]
    }, {
        "text": "survival",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.002405740011254924, 0, 68.15042205965109],
            [0, 0.002405740011254924, 69.73786120374497]
        ]
    }, {
        "text": "health",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0030308401276143214, 0, 39.946162708259486],
            [0, 0.0030308401276143214, 9.719743313214675]
        ]
    }, {
        "text": "hospitals",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0020642201834862386, 0, 33.03509174311926],
            [0, 0.0020642201834862386, 140.05381375331328]
        ]
    }, {
        "text": "death",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.002917310664605873, 0, 45.07038253477589],
            [0, 0.002917310664605873, 117.55462716440694]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0022368421052631577, 0, 88.0716177052534],
            [0, 0.0022368421052631577, 145.82092105263158]
        ]
    }, {
        "text": "brain",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00315203955500618, 0, 35.012908598195075],
            [0, 0.00315203955500618, 100.73402348578492]
        ]
    }, {
        "text": "testicular",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 72.43098270028952],
            [0, 0.0021013597033374535, 30.822682323856615]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0016252390057361376, 0, 63.04963150350216],
            [0, 0.0016252390057361376, 77.44369024856597]
        ]
    }, {
        "text": "pancreas",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0021628498727735367, 0, 52.881407476775706],
            [0, 0.0021628498727735367, 77.35470737913487]
        ]
    }, {
        "text": "prostate",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0018398268398268397, 0, 51.712663602340946],
            [0, 0.0018398268398268397, 52.42867965367965]
        ]
    }, {
        "text": "blood",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00296078431372549, 0, 32.95260784313726],
            [0, 0.00296078431372549, 92.73085625926366]
        ]
    }, {
        "text": "Hope",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.0031276415891800507, 0, 16.987235841081993],
            [0, 0.0031276415891800507, 124.72596691386383]
        ]
    }, {
        "text": "eye",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.003515625, 0, 99.12070312499999],
            [0, 0.003515625, 132.8165898499079]
        ]
    }, {
        "text": "strength",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.001969736498825985, 0, 10.163938168536394],
            [0, 0.001969736498825985, 137.8066674476545]
        ]
    }, {
        "text": "survival",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 96.28418670016902],
            [0, 0.0021013597033374535, 151.8226823238566]
        ]
    }, {
        "text": "health",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.002321871676710386, 0, 93.01138780574264],
            [0, 0.002321871676710386, 174.11044156638425]
        ]
    }, {
        "text": "hospitals",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0016585365853658536, 0, 88.05388665194775],
            [0, 0.0016585365853658536, 115.47019512195122]
        ]
    }, {
        "text": "death",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0025309119010819164, 0, 33.090861669242656],
            [0, 0.0025309119010819164, 50.56502287320132]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0022368421052631577, 0, 70.94204982241911],
            [0, 0.0022368421052631577, 62.820921052631576]
        ]
    }, {
        "text": "brain",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.002874067573497148, 0, 20.960585783238262],
            [0, 0.002874067573497148, 116.66386739599594]
        ]
    }, {
        "text": "testicular",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 39.37827962132612],
            [0, 0.0021013597033374535, 62.82268232385662]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0016252390057361376, 0, 35.36642501755327],
            [0, 0.0016252390057361376, 116.44369024856596]
        ]
    }, {
        "text": "pancreas",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0021628498727735367, 0, 21.532625358680654],
            [0, 0.0021628498727735367, 137.35470737913485]
        ]
    }, {
        "text": "prostate",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0018398268398268397, 0, 80.7341240597784],
            [0, 0.0018398268398268397, 127.42867965367965]
        ]
    }, {
        "text": "blood",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.002568627450980392, 0, 17.988686274509803],
            [0, 0.002568627450980392, 121.64354423409858]
        ]
    }, {
        "text": "Hope",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.002345731191885038, 0, 80.9904268808115],
            [0, 0.002345731191885038, 99.96727515298032]
        ]
    }, {
        "text": "eye",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.003515625, 0, 76.12070312499999],
            [0, 0.003515625, 91.5875647682834]
        ]
    }, {
        "text": "strength",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0016252390057361376, 0, 75.98469894026914],
            [0, 0.0016252390057361376, 37.443690248565964]
        ]
    }, {
        "text": "survival",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 66.74943311233329],
            [0, 0.0021013597033374535, 20.82268232385661]
        ]
    }, {
        "text": "health",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 90.003035152092],
            [0, 0.0021013597033374535, 117.82268232385661]
        ]
    }, {
        "text": "hospitals",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0016585365853658536, 0, 59.03725532429024],
            [0, 0.0016585365853658536, 68.47019512195122]
        ]
    }, {
        "text": "death",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 86.18772422525588],
            [0, 0.0021013597033374535, 109.82268232385661]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0022368421052631577, 0, 44.069176438185636],
            [0, 0.0022368421052631577, 6.820921052631578]
        ]
    }, {
        "text": "brain",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0024352786309784994, 0, 63.00095436594997],
            [0, 0.0024352786309784994, 101.3571419971227]
        ]
    }, {
        "text": "testicular",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 22.47482139327338],
            [0, 0.0021013597033374535, 152.8226823238566]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0016252390057361376, 0, 44.13009971331674],
            [0, 0.0016252390057361376, 77.44369024856597]
        ]
    }, {
        "text": "pancreas",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0020963855421686746, 0, 30.957132530120482],
            [0, 0.0020963855421686746, 129.35999222833564]
        ]
    }, {
        "text": "prostate",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0018398268398268397, 0, 43.078676330062734],
            [0, 0.0018398268398268397, 52.42867965367965]
        ]
    }, {
        "text": "blood",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 76.9718879546147],
            [0, 0.0021013597033374535, 109.82268232385661]
        ]
    }, {
        "text": "Hope",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.002345731191885038, 0, 45.9904268808115],
            [0, 0.002345731191885038, 119.98090297848807]
        ]
    }, {
        "text": "eye",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.003515625, 0, 34.120703125],
            [0, 0.003515625, 53.55395757280903]
        ]
    }, {
        "text": "strength",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0016252390057361376, 0, 27.301583248872756],
            [0, 0.0016252390057361376, 104.44369024856596]
        ]
    }, {
        "text": "survival",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 20.112454353366882],
            [0, 0.0021013597033374535, 172.8226823238566]
        ]
    }, {
        "text": "health",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 72.38910703246381],
            [0, 0.0021013597033374535, 18.82268232385661]
        ]
    }, {
        "text": "hospitals",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0016175760502172864, 0, 45.00118300338001],
            [0, 0.0016175760502172864, 86.4469709015659]
        ]
    }, {
        "text": "death",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 44.55693128716067],
            [0, 0.0021013597033374535, 39.82268232385662]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0020885286783042393, 0, 37.028865336658356],
            [0, 0.0020885286783042393, 137.7242940176875]
        ]
    }, {
        "text": "brain",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0024352786309784994, 0, 31.000954365949976],
            [0, 0.0024352786309784994, 40.655643250666344]
        ]
    }, {
        "text": "testicular",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0015300296871431835, 0, 36.10868919844714],
            [0, 0.0015300296871431835, 97.39877745352173]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.001264628161570404, 0, 28.08676859192148],
            [0, 0.001264628161570404, 116.19455584932011]
        ]
    }, {
        "text": "pancreas",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0013734939759036146, 0, 101.02363855421687],
            [0, 0.0013734939759036146, 144.35724032888405]
        ]
    }, {
        "text": "prostate",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0014921465968586389, 0, 72.012722513089],
            [0, 0.0014921465968586389, 102.39100556628641]
        ]
    }, {
        "text": "blood",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0021013597033374535, 0, 57.96052512451453],
            [0, 0.0021013597033374535, 62.82268232385662]
        ]
    }, {
        "text": "Hope",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.001923076923076923, 0, 112.0326923076923],
            [0, 0.001923076923076923, 154.69718180349133]
        ]
    }, {
        "text": "eye",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.0028645833333333336, 0, 53.15390625],
            [0, 0.0028645833333333336, 107.69765989009369]
        ]
    }, {
        "text": "strength",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0014870858335507436, 0, 41.10390033915993],
            [0, 0.0014870858335507436, 70.40385879322416]
        ]
    }, {
        "text": "survival",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0016038266741699495, 0, 41.100281373100735],
            [0, 0.0016038266741699495, 130.4952649326155]
        ]
    }, {
        "text": "health",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.002020560085076214, 0, 26.96410847217299],
            [0, 0.002020560085076214, 102.78604127345933]
        ]
    }, {
        "text": "hospitals",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0013761467889908258, 0, 19.023394495412845],
            [0, 0.0013761467889908258, 118.28678032571284]
        ]
    }, {
        "text": "death",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0018160741885625967, 0, 109.05374806800619],
            [0, 0.0018160741885625967, 163.79658917343266]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0014183291770573565, 0, 64.14273690773068],
            [0, 0.0014183291770573565, 5.72418748015129]
        ]
    }, {
        "text": "brain",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.002062308029837648, 0, 94.96026766125495],
            [0, 0.002062308029837648, 168.80470705775085]
        ]
    }, {
        "text": "testicular",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0010733044073989496, 0, 80.12102078100024],
            [0, 0.0010733044073989496, 105.42219362364786]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0008871272178180446, 0, 78.1056436391091],
            [0, 0.0008871272178180446, 43.85802086098847]
        ]
    }, {
        "text": "pancreas",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0011325301204819277, 0, 64.04580722891566],
            [0, 0.0011325301204819277, 114.9946443679691]
        ]
    }, {
        "text": "prostate",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0011910994764397905, 0, 37.115418848167536],
            [0, 0.0011910994764397905, 84.8985397045211]
        ]
    }, {
        "text": "blood",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0018431372549019608, 0, 45.98043137254902],
            [0, 0.0018431372549019608, 122.76043929122855]
        ]
    }, {
        "text": "Hope",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.001923076923076923, 0, 35.03269230769231],
            [0, 0.001923076923076923, 57.0945247504305]
        ]
    }, {
        "text": "eye",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.0029622395833333332, 0, 35.07392578125],
            [0, 0.0029622395833333332, 89.00430820951802]
        ]
    }, {
        "text": "strength",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0012261935820506132, 0, 37.11198799895643],
            [0, 0.0012261935820506132, 141.4100791168688]
        ]
    }, {
        "text": "survival",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0012802476083286437, 0, 27.18531232414181],
            [0, 0.0012802476083286437, 106.31613630784507]
        ]
    }, {
        "text": "health",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0016129032258064516, 0, 19.076612903225808],
            [0, 0.0016129032258064516, 149.94495817402438]
        ]
    }, {
        "text": "hospitals",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0011347175277643651, 0, 16.04560598744568],
            [0, 0.0011347175277643651, 126.36884978295814]
        ]
    }, {
        "text": "death",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0013137557959814528, 0, 115.23037094281297],
            [0, 0.0013137557959814528, 159.97460376013274]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0011533665835411471, 0, 108.08310473815462],
            [0, 0.0011533665835411471, 145.63516157847653]
        ]
    }, {
        "text": "brain",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0016235190873189996, 0, 107.00063624396665],
            [0, 0.0016235190873189996, 143.78699899908182]
        ]
    }, {
        "text": "testicular",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0008449417675268327, 0, 104.12718657227677],
            [0, 0.0008449417675268327, 168.54741606111085]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0006983767459418649, 0, 97.11508116270291],
            [0, 0.0006983767459418649, 134.41082075606923]
        ]
    }, {
        "text": "pancreas",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.000891566265060241, 0, 91.06797590361445],
            [0, 0.000891566265060241, 113.61756121916184]
        ]
    }, {
        "text": "prostate",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.000968586387434555, 0, 90.06089005235602],
            [0, 0.000968586387434555, 167.93278478558636]
        ]
    }, {
        "text": "blood",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0013921568627450979, 0, 103.09692156862747],
            [0, 0.0013921568627450979, 136.5342412985231]
        ]
    }, {
        "text": "Hope",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.0015004226542688081, 0, 97.07495773457312],
            [0, 0.0015004226542688081, 123.69391503587619]
        ]
    }, {
        "text": "eye",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.0022135416666666666, 0, 63.187109375],
            [0, 0.0022135416666666666, 50.594168517758376]
        ]
    }, {
        "text": "strength",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0009653013305504827, 0, 88.12007565875294],
            [0, 0.0009653013305504827, 107.51025819581058]
        ]
    }, {
        "text": "survival",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0009988745075970736, 0, 84.19403489026449],
            [0, 0.0009988745075970736, 155.199894792716]
        ]
    }, {
        "text": "health",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0013115916341722793, 0, 79.02933356965615],
            [0, 0.0013115916341722793, 145.70240276407205]
        ]
    }, {
        "text": "hospitals",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0008932882665379045, 0, 77.06781747947852],
            [0, 0.0008932882665379045, 87.95709797081408]
        ]
    }, {
        "text": "death",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00142967542503864, 0, 76.07422720247295],
            [0, 0.00142967542503864, 20.681824876587342]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0011533665835411471, 0, 76.08310473815462],
            [0, 0.0011533665835411471, 64.0880943563675]
        ]
    }, {
        "text": "brain",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0016235190873189996, 0, 75.00063624396665],
            [0, 0.0016235190873189996, 66.48059217314271]
        ]
    }, {
        "text": "testicular",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0008449417675268327, 0, 74.12718657227678],
            [0, 0.0008449417675268327, 83.4834787547401]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0006983767459418649, 0, 73.11508116270291],
            [0, 0.0006983767459418649, 71.42887746012026]
        ]
    }, {
        "text": "pancreas",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.000891566265060241, 0, 70.06797590361447],
            [0, 0.000891566265060241, 44.613164295783896]
        ]
    }, {
        "text": "prostate",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.000968586387434555, 0, 68.06089005235602],
            [0, 0.000968586387434555, 29.85655180978311]
        ]
    }, {
        "text": "blood",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0013921568627450979, 0, 71.09692156862745],
            [0, 0.0013921568627450979, 128.1537822334856]
        ]
    }, {
        "text": "Hope",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.0015004226542688081, 0, 54.07495773457312],
            [0, 0.0015004226542688081, 48.18660701560053]
        ]
    }, {
        "text": "eye",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.0023111979166666667, 0, 36.10712890625],
            [0, 0.0023111979166666667, 60.03923417550955]
        ]
    }, {
        "text": "strength",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0009653013305504827, 0, 65.12007565875294],
            [0, 0.0009653013305504827, 18.062480118121695]
        ]
    }, {
        "text": "survival",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0010410804727068092, 0, 65.11772650534608],
            [0, 0.0010410804727068092, 117.2111551197526]
        ]
    }, {
        "text": "health",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0013115916341722793, 0, 63.029333569656146],
            [0, 0.0013115916341722793, 52.8317705778623]
        ]
    }, {
        "text": "hospitals",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0008932882665379045, 0, 61.06781747947851],
            [0, 0.0008932882665379045, 109.43916175452007]
        ]
    }, {
        "text": "death",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00142967542503864, 0, 53.07422720247295],
            [0, 0.00142967542503864, 110.6053754804041]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0011533665835411471, 0, 50.08310473815462],
            [0, 0.0011533665835411471, 56.42749260486826]
        ]
    }, {
        "text": "brain",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0016235190873189996, 0, 46.000636243966646],
            [0, 0.0016235190873189996, 124.47136998507888]
        ]
    }, {
        "text": "testicular",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0008449417675268327, 0, 45.12718657227678],
            [0, 0.0008449417675268327, 4.823410558887007]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0006983767459418649, 0, 38.11508116270291],
            [0, 0.0006983767459418649, 83.53607797620016]
        ]
    }, {
        "text": "pancreas",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.000891566265060241, 0, 37.06797590361445],
            [0, 0.000891566265060241, 143.44898364194398]
        ]
    }, {
        "text": "prostate",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.000968586387434555, 0, 36.060890052356015],
            [0, 0.000968586387434555, 102.56523471039647]
        ]
    }, {
        "text": "blood",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.001450980392156863, 0, 35.016509803921565],
            [0, 0.001450980392156863, 25.726150386944486]
        ]
    }, {
        "text": "Hope",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.0015004226542688081, 0, 29.074957734573122],
            [0, 0.0015004226542688081, 99.37378444611139]
        ]
    }, {
        "text": "eye",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.0023111979166666667, 0, 22.10712890625],
            [0, 0.0023111979166666667, 113.21839573732296]
        ]
    }, {
        "text": "strength",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0009653013305504827, 0, 33.12007565875294],
            [0, 0.0009653013305504827, 152.49108121240886]
        ]
    }, {
        "text": "survival",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0010410804727068092, 0, 28.11772650534609],
            [0, 0.0010410804727068092, 126.62391519582725]
        ]
    }, {
        "text": "health",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0013115916341722793, 0, 23.02933356965615],
            [0, 0.0013115916341722793, 126.43723174789605]
        ]
    }, {
        "text": "hospitals",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0008932882665379045, 0, 23.067817479478514],
            [0, 0.0008932882665379045, 174.10858088358444]
        ]
    }, {
        "text": "death",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.00142967542503864, 0, 10.074227202472953],
            [0, 0.00142967542503864, 164.72361614297498]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0011533665835411471, 0, 4.0831047381546135],
            [0, 0.0011533665835411471, 160.28661028564676]
        ]
    }, {
        "text": "brain",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0015577007459412022, 0, 6.0816915313734095],
            [0, 0.0015577007459412022, 147.40785512714274]
        ]
    }, {
        "text": "testicular",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0005823247316738981, 0, 77.20927723224482],
            [0, 0.0005823247316738981, 130.17350447715498]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0005096262740656852, 0, 115.12451868629671],
            [0, 0.0005096262740656852, 157.71992779890687]
        ]
    }, {
        "text": "pancreas",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1184,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1795,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2304,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2692,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3246,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3810,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -37.69,
            "y": -686.69,
            "width": 4409.38,
            "height": 1045.38
        },
        "matrix": [
            [0.0006144578313253011, 0, 78.16846987951807],
            [0, 0.0006144578313253011, 123.7195000693014]
        ]
    }, {
        "text": "prostate",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1008,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1614,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2082,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2459,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3023,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3400,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -60.46000000000001,
            "y": -847.46,
            "width": 4124.92,
            "height": 1228.92
        },
        "matrix": [
            [0.0007068062827225132, 0, 111.08497382198954],
            [0, 0.0007068062827225132, 149.05707796152754]
        ]
    }, {
        "text": "blood",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 903,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.70"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2816.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0010588235294117648, 0, 109.05258823529411],
            [0, 0.0010588235294117648, 165.26254049531155]
        ]
    }, {
        "text": "Hope",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.42"
        }, {
            "x": 728,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1334,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 1954,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -58.73000000000002,
            "y": -891.73,
            "width": 2683.46,
            "height": 1279.46
        },
        "matrix": [
            [0.0011411665257819105, 0, 107.0358833474218],
            [0, 0.0011411665257819105, 141.19682795630985]
        ]
    }, {
        "text": "eye",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.91"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.71"
        }],
        "bbox": {
            "x": -79.51500000000001,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "matrix": [
            [0.0017578125, 0, 103.0603515625],
            [0, 0.0017578125, 134.2335540267948]
        ]
    }, {
        "text": "strength",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 845,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1233,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1787,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 2398,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 2961,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3338,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -141.59,
            "y": -968.59,
            "width": 4178.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0007044090790503522, 0, 101.12816331854943],
            [0, 0.0007044090790503522, 128.86441315151512]
        ]
    }, {
        "text": "survival",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 1075,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1463,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1984,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2259,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 2780,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3344,
            "y": 0,
            "glyph": "0.78"
        }],
        "bbox": {
            "x": -102.48500000000001,
            "y": -929.485,
            "width": 3820.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0007597073719752392, 0, 100.12644907146877],
            [0, 0.0007597073719752392, 127.0307889221724]
        ]
    }, {
        "text": "health",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1161,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1725,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2010,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2387,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 3087.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0009039347749025167, 0, 76.14183800070897],
            [0, 0.0009039347749025167, 139.75882915171564]
        ]
    }, {
        "text": "hospitals",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 607,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1213,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1681,
            "y": 0,
            "glyph": "0.82"
        }, {
            "x": 2301,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2576,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2953,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3517,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3802,
            "y": 0,
            "glyph": "0.85"
        }],
        "bbox": {
            "x": -77.125,
            "y": -965.125,
            "width": 4480.25,
            "height": 1363.25
        },
        "matrix": [
            [0.0006156446161274746, 0, 11.168360695316272],
            [0, 0.0006156446161274746, 145.42265636731457]
        ]
    }, {
        "text": "death",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1174,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1738,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2115,
            "y": 0,
            "glyph": "0.74"
        }],
        "bbox": {
            "x": -80.48500000000001,
            "y": -929.485,
            "width": 2854.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0009853168469860895, 0, 66.17277820710974],
            [0, 0.0009853168469860895, 60.75767133812048]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.37"
        }, {
            "x": 638,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1202,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1813,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2322,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2876,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "matrix": [
            [0.0008416458852867831, 0, 97.10118453865337],
            [0, 0.0008416458852867831, 121.38407332516995]
        ]
    }, {
        "text": "brain",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1006,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1570,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1845,
            "y": 0,
            "glyph": "0.80"
        }],
        "bbox": {
            "x": -41.485000000000014,
            "y": -929.485,
            "width": 2545.9700000000003,
            "height": 1075.97
        },
        "matrix": [
            [0.0011847301448003511, 0, 94.04100482667837],
            [0, 0.0011847301448003511, 176.5062761599554]
        ]
    }, {
        "text": "testicular",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 931,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 1399,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 1776,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2051,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 2560,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 3167,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 3452,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4016,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -106.48500000000001,
            "y": -929.485,
            "width": 4645.97,
            "height": 1075.97
        },
        "matrix": [
            [0.0005823247316738981, 0, 59.20927723224481],
            [0, 0.0005823247316738981, 104.92411606404087]
        ]
    }, {
        "text": "gallbladder",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.73"
        }, {
            "x": 563,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1412,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1697,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 2315,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 2600,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 3164,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 3784,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 4404,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 4958,
            "y": 0,
            "glyph": "0.84"
        }],
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "matrix": [
            [0.0005096262740656852, 0, 91.12451868629671],
            [0, 0.0005096262740656852, 112.4396976805253]
        ]
    }],
    "meta": "Tagul Generator Version 1.59; Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
});