/*
<!--
			/* ATTRIBUTION TO TAGUL
			<div style="display: table; margin: 0 auto;"><a href="http://tagul.com/">Created with Tagul.com</a></div>-->
*/
(function(e) {
    function f(e) {
        if (!(this instanceof f)) return new f(e);
        e || (e = {});
        "number" == typeof e && (e = {
            s: e
        });
        null != e.u || (e.u = !0);
        this.options = e;
        this.s = e.s || f.C;
        this.H = 1E3 / this.s;
        this.I = this.s !== f.C;
        this.w = null;
        this.l = {};
        this.p = this.v = 0
    }
    var u = Date.now,
        O = e.setTimeout,
        n, y, C = !1;
    (function() {
        var f, s = ["ms", "moz", "webkit", "o"];
        n = e.requestAnimationFrame;
        y = e.cancelAnimationFrame;
        for (f = 0; f < s.length && !n; f++) n = n || e[s[f] + "RequestAnimationFrame"], y = y || e[s[f] + "CancelAnimationFrame"] || e[s[f] + "CancelRequestAnimationFrame"];
        n && n(function() {
            C = !0
        })
    })();
    f.C = 60;
    f.R = function(n) {
        var s = new f(n);
        e.requestAnimationFrame = function(e) {
            return s.Q(e)
        };
        e.cancelAnimationFrame = function(e) {
            return s.cancel(e)
        };
        return s
    };
    f.prototype.request = function(e) {
        var f = this,
            w;
        ++this.p;
        if (C && f.options.u && !this.I) return n(e);
        if (!e) throw new TypeError("Not enough arguments");
        null == this.w && (w = this.H + this.v - (u ? u() : (new Date).getTime()), 0 > w && (w = 0), this.w = O(function() {
            var e;
            f.v = u ? u() : (new Date).getTime();
            f.w = null;
            ++f.p;
            for (e in f.l)
                if (f.l[e]) {
                    if (C && f.options.u) n(f.l[e]);
                    else f.l[e](f.v);
                    delete f.l[e]
                }
        }, w));
        this.l[this.p] = e;
        return this.p
    };
    f.prototype.cancel = function(e) {
        C && this.options.u && y(e);
        delete this.l[e]
    };
    "object" == typeof exports && "object" == typeof module ? module.P = f : "function" == typeof define && define.O ? define(function() {
        return f
    }) : e.AnimationFrame = f
})(window);
window.TagulDisplayCloud = function(e, f, u, O) {
    function n(b) {
        return !isNaN(parseFloat(b)) && isFinite(b)
    }

    function y() {
        var b = h.offsetWidth,
            c = h.offsetHeight;
        G = 36E4 < b * c ? 1 : 1.5;
        h.width = G * b + 1;
        h.height = G * c + 1
    }

    function C() {
        if (x) {
            attribution.f = D;
            var b = H();
            attribution.d = b - Math.max(attribution.k - (b - attribution.d), 0);
            attribution.q = !0
        }
    }

    function K(b) {
        b = parseInt(b.replace("#", ""), 16);
        return {
            j: b >> 16 & 255,
            i: b >> 8 & 255,
            g: b & 255
        }
    }

    function s(b, c) {
        b = b.substring(1, b.length);
        b = K(b);
        return "rgba(" + b.j + "," + b.i + "," + b.g + "," + c.toFixed(4) +
            ")"
    }

    function w(b) {
        b = b.toString(16);
        return 1 == b.length ? "0" + b : b
    }

    function Q(b, c, d) {
        c1 = K(b.substring(1, b.length));
        c2 = K(c.substring(1, c.length));
        return "#" + w(Math.round(c1.j * (1 - d) + c2.j * d)) + w(Math.round(c1.i * (1 - d) + c2.i * d)) + w(Math.round(c1.g * (1 - d) + c2.g * d))
    }

    function H() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function L(b, c) {
        b.setTransform(c[0][0], c[1][0], c[0][1], c[1][1], c[0][2], c[1][2])
    }

    function v(b, c) {
        return [
            [1, 0, b],
            [0, 1, c]
        ]
    }

    function q(b, c) {
        return [
            [b[0][0] * c[0][0] + b[0][1] * c[1][0], b[0][0] * c[0][1] +
                b[0][1] * c[1][1], b[0][0] * c[0][2] + b[0][1] * c[1][2] + b[0][2]
            ],
            [b[1][0] * c[0][0] + b[1][1] * c[1][0], b[1][0] * c[0][1] + b[1][1] * c[1][1], b[1][0] * c[0][2] + b[1][1] * c[1][2] + b[1][2]]
        ]
    }

    function R(b) {
        var c = b[0][0] * b[1][1] - b[0][1] * b[1][0];
        return [
            [b[1][1] / c, -b[0][1] / c, (b[0][1] * b[1][2] - b[0][2] * b[1][1]) / c],
            [-b[1][0] / c, b[0][0] / c, (b[0][2] * b[1][0] - b[0][0] * b[1][2]) / c]
        ]
    }

    function S(b) {
        return Math.sqrt(b[0][0] * b[0][0] + b[0][1] * b[0][1])
    }

    function E(b, c) {
        return {
            x: c[0][0] * b.x + c[0][1] * b.y + c[0][2],
            y: c[1][0] * b.x + c[1][1] * b.y + c[1][2]
        }
    }

    function F(b,
        c) {
        var d = E({
                x: b.x,
                y: b.y
            }, c),
            a = E({
                x: b.x + b.width,
                y: b.y + b.height
            }, c),
            e = E({
                x: b.x,
                y: b.y + b.height
            }, c),
            g = E({
                x: b.x + b.width,
                y: b.y
            }, c),
            f = Math.min(d.x, a.x, e.x, g.x),
            h = Math.min(d.y, a.y, e.y, g.y),
            k = Math.max(d.x, a.x, e.x, g.x),
            d = Math.max(d.y, a.y, e.y, g.y);
        return {
            x: f,
            y: h,
            width: k - f,
            height: d - h
        }
    }

    function T(b, c) {
        var d = v(-b.bbox.D, -b.bbox.F),
            a = Math.pow(b.o / b.scale, c),
            d = q([
                [a, 0, 0],
                [0, a, 0]
            ], d),
            a = (b.N - b.G) * c,
            d = q([
                [Math.cos(a), Math.sin(a), 0],
                [-Math.sin(a), Math.cos(a), 0]
            ], d);
        return q(v(b.bbox.D, b.bbox.F), d)
    }

    function U(b, c, d, a,
        e) {
        radius = 0.1 * Math.min(a, e);
        b.beginPath();
        b.moveTo(c + radius, d);
        b.lineTo(c + a - radius, d);
        b.quadraticCurveTo(c + a, d, c + a, d + radius);
        b.lineTo(c + a, d + e - radius);
        b.quadraticCurveTo(c + a, d + e, c + a - radius, d + e);
        b.lineTo(c + radius, d + e);
        b.quadraticCurveTo(c, d + e, c, d + e - radius);
        b.lineTo(c, d + radius);
        b.quadraticCurveTo(c, d, c + radius, d);
        b.closePath();
        b.fill()
    }

    function M(b, c) {
        for (var d = 0, a = 0, e = 0; e < c.glyphs.length; e++) {
            var g = c.glyphs[e],
                d = v(g.x - d, g.y - a);
            b.transform(d[0][0], d[1][0], d[0][1], d[1][1], d[0][2], d[1][2]);
            d = b;
            a = g.path;
            d.beginPath();
            for (var f = void 0, h = void 0, k = 0; k < a.length; k++) "M" == a[k] ? d.moveTo(f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "q" == a[k] ? d.quadraticCurveTo(f + parseFloat(a[++k]), f + parseFloat(a[++k]), f += parseFloat(a[++k]), h = f + parseFloat(a[++k])) : "Q" == a[k] ? d.quadraticCurveTo(parseFloat(a[++k]), parseFloat(a[++k]), f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "c" == a[k] ? d.bezierCurveTo(f + parseFloat(a[++k]), h + parseFloat(a[++k]), f + parseFloat(a[++k]), h + parseFloat(a[++k]), f += parseFloat(a[++k]), h += parseFloat(a[++k])) :
                "C" == a[k] ? d.bezierCurveTo(a[++k], a[++k], a[++k], a[++k], f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "l" == a[k] ? d.lineTo(f += parseFloat(a[++k]), h += parseFloat(a[++k])) : "h" == a[k] ? d.lineTo(f += parseFloat(a[++k]), h) : "H" == a[k] ? d.lineTo(f = parseFloat(a[++k]), h) : "v" == a[k] ? d.lineTo(f, h += parseFloat(a[++k])) : "V" == a[k] ? d.lineTo(f, h = parseFloat(a[++k])) : "L" == a[k] ? d.lineTo(f = parseFloat(a[++k]), h = parseFloat(a[++k])) : "Z" != a[k] && "z" != a[k] || d.closePath();
            d.closePath();
            d.fill();
            d = g.x;
            a = g.y
        }
    }

    function V() {
        var b = {},
            c;
        for (c in e.outlines) b[c] =
            e.outlines[c].split(" ");
        for (c = 0; c < r.length; ++c)
            for (var d = 0; d < r[c].glyphs.length; ++d) r[c].glyphs[d].path = b[r[c].glyphs[d].glyph];
        void 0 != l.backgroundColor && (m.fillStyle = s(l.backgroundColor, l.J), m.fillRect(0, 0, h.width, h.height));
        b = e.a;
        c = Math.min(0.95 * h.width / b.width, 0.95 * h.height / b.height);
        d = q([
            [c, 0, 0],
            [0, c, 0]
        ], v(-b.x + (h.width / c - b.width) / 2, -b.y + (h.height / c - b.height) / 2));
        for (c = 0; c < r.length; c++) {
            var a = r[c];
            m.fillStyle = a.fill;
            a.h = q(d, a.matrix);
            L(m, a.h);
            M(m, a);
            a.bbox.b = a.bbox.x + a.bbox.width;
            a.bbox.c = a.bbox.y +
                a.bbox.height;
            a.bbox.D = a.bbox.x + a.bbox.width / 2;
            a.bbox.F = a.bbox.y + a.bbox.height / 2;
            a.B = R(a.h);
            a.d = 0;
            a.scale = S(a.matrix);
            a.o = l.zoom ? Math.max(1.1 * a.scale, 0.15 * Math.sqrt(b.width * b.height / (a.bbox.width * a.bbox.height))) : a.scale;
            a.o = Math.min(a.o, Math.min(b.width / a.bbox.width, b.height / a.bbox.height));
            a.o = Math.max(a.scale, a.o);
            var f = a.matrix,
                g = S(f),
                n = f[0][0] / g,
                f = f[0][1] / g,
                g = void 0,
                g = 1 < f ? 90 : -1 > f ? -90 : 180 * Math.asin(f) / Math.PI;
            0 > n && (g = 180 * (0 > f ? -1 : 1) - g);
            a.G = Math.round(g) * Math.PI / 180;
            a.N = l.rotate ? 0 : a.G;
            a.m = 0;
            a.n =
                0;
            a.e = F(a.bbox, q(a.h, T(a, 1)));
            0 > a.e.x && (a.m = -a.e.x);
            a.e.x + a.e.width > h.width && (a.m = -(a.e.x + a.e.width) + h.width);
            0 > a.e.y && (a.n = -a.e.y);
            a.e.y + a.e.height > h.height && (a.n = -(a.e.y + a.e.height) + h.height);
            a.L = Q(l.backgroundColor, a.fill, 0.2);
            x && a.fill && (attribution.backgroundColor = attribution.backgroundColor || {
                j: 0,
                i: 0,
                g: 0
            }, a = K(a.fill), attribution.backgroundColor.j += a.j, attribution.backgroundColor.i += a.i, attribution.backgroundColor.g += a.g)
        }
        l.A && (l.r = s(l.A, 1), l.r = l.r.substring(0, l.r.length - 7));
        P = m.getImageData(0,
            0, h.width, h.height);
        if (x) {
            attribution.backgroundColor.j /= r.length;
            attribution.backgroundColor.i /= r.length;
            attribution.backgroundColor.g /= r.length;
            attribution.backgroundColor = "#" + (65536 * attribution.backgroundColor.j + 256 * attribution.backgroundColor.i + attribution.backgroundColor.g).toString(16);
            attribution.backgroundColor = s(attribution.backgroundColor, 0.8);
            attribution.t = l.backgroundColor;
            for (c = 0; c < attribution.data.tags.length; c++) a = attribution.data.tags[c], b = F(a.bbox, a.matrix), attribution.a = attribution.a ? {
                x: Math.min(b.x, attribution.a.x),
                y: Math.min(b.y, attribution.a.y),
                b: Math.max(b.x + b.width, attribution.a.b),
                c: Math.max(b.y + b.height, attribution.a.c)
            } : {
                x: b.x,
                y: b.y,
                b: b.x + b.width,
                c: b.y + b.height
            };
            attribution.a.width = attribution.a.b - attribution.a.x;
            attribution.a.height = attribution.a.c - attribution.a.y;
            c = Math.min(h.width / attribution.a.width, h.height / attribution.a.height);
            c = Math.min(c, Math.sqrt(0.02 * h.width * h.height / (attribution.a.width * attribution.a.height)));
            a = attribution.data.tags[0];
            a.bbox.b = a.bbox.x + a.bbox.width;
            a.bbox.c = a.bbox.y + a.bbox.height;
            a.h = q(q([
                [c, 0, 0],
                [0, c, 0]
            ], v(-attribution.a.x + (h.width / c - 1 * attribution.a.width), -attribution.a.y + (h.height / c - 0 * attribution.a.height))), a.matrix);
            a.m = 0;
            a.n = -attribution.a.height * c;
            a.B = R(q(v(1 * a.m, 1 * a.n), a.h));
            for (d = 0; d < a.glyphs.length; ++d) a.glyphs[d].path = attribution.data.outlines[a.glyphs[d].glyph].split(" ")
        }
    }

    function W() {
        if (p && 0 < p.length || x && attribution.q) {
            for (var b = p.slice(), c = 0; c < t.length; c++) - 1 == b.indexOf(t[c]) && b.push(t[c]);
            g && m.putImageData(P, 0, 0, g.x - 2, g.y - 2,
                g.width + 4, g.height + 4);
            g = void 0;
            for (c = 0; c < b.length; c++) {
                var d = b[c];
                m.fillStyle = d.L;
                L(m, d.h);
                M(m, d)
            }
            for (var a = H(), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = (a - d.d) / (1E3 * l.k),
                    e = 1 < e ? 1 : e;
                if (0.5 < e && d != z && d.f == D) {
                    var f = t.indexOf(d); - 1 != f && (t.splice(f, 1), -1 == p.indexOf(d) && p.push(d), -1 == b.indexOf(d) && b.push(d));
                    d.f = I;
                    e = 1 - e;
                    d.d = a - 1E3 * e * l.k
                }
                d.f == I && (e = 1 - e);
                0 < e ? (f = q(d.h, T(d, e)), f = q(v(e * d.m, e * d.n), f)) : f = d.h;
                L(m, f);
                g ? (f = F(d.bbox, f), g = {
                    x: Math.min(g.x, f.x),
                    y: Math.min(g.y, f.y),
                    b: Math.max(g.b, f.x + f.width),
                    c: Math.max(g.c, f.y +
                        f.height)
                }, g.width = g.b - g.x, g.height = g.c - g.y) : (g = F(d.bbox, f), g.b = g.x + g.width, g.c = g.y + g.height);
                l.A && (m.fillStyle = l.r + (e * l.K).toFixed(4) + ")", U(m, d.bbox.x, d.bbox.y, d.bbox.width, d.bbox.height));
                m.fillStyle = l.t ? Q(d.fill, l.t, e) : d.fill;
                M(m, d);
                a > d.d + 1E3 * l.k && (b.splice(c, 1), c < p.length && p.splice(c, 1), c--, d.f == D && -1 == t.indexOf(d) && t.push(d))
            }
            x && (attribution.q || g) && (d = attribution.data.tags[0], e = (a - attribution.d) / attribution.k, e = 1 < e ? 1 : e, 1 <= e && (attribution.q = !1), attribution.f == I && (e = 1 - e), f = q(v(e * d.m, e * d.n), d.h),
                g ? (f = F(d.bbox, f), g = {
                    x: Math.min(g.x, f.x),
                    y: Math.min(g.y, f.y),
                    b: Math.max(g.b, f.x + f.width),
                    c: Math.max(g.c, f.y + f.height)
                }, g.width = g.b - g.x, g.height = g.c - g.y) : (g = F(d.bbox, f), g.b = g.x + g.width, g.c = g.y + g.height), m.fillStyle = attribution.backgroundColor, L(m, q(v(e * d.m, e * d.n), d.h)), U(m, d.bbox.x, d.bbox.y, d.bbox.width, d.bbox.height), m.fillStyle = attribution.t, M(m, d))
        }
        N && N.request(W)
    }
    if (!f)
        if (e)
            if (f = document.createElement("canvas"), f.getContext && f.getContext("2d")) {
                for (var A = 0; document.getElementById(f = "tagul_embed_cloud_" +
                        A);) A++;
                document.writeln('<a id="' + f + '" style="width: 100%; height: 100%">');
                document.writeln('<canvas style="width: 100%; height: 100%"></canvas>');
                document.writeln("</a>");
                var A = document.getElementsByTagName("head")[0],
                    J = document.createElement("style"),
                    X = document.createTextNode("#" + f + " {outline: 0; border: 0; background: none; margin: 0; padding: 0;}\n#" + f + ":hover {border: 0;}\n");
                J.type = "text/css";
                J.styleSheet ? J.styleSheet.cssText = X.nodeValue : J.appendChild(X);
                A.appendChild(J)
            } else {
                document.writeln('<a href="http://tagul.com/unsupported-browser" style="width: 100%; height: 100%">');
                document.writeln('<img src="http://tagul.com/static/please_update_browser.png" style="width: 100%; height: auto"/>');
                document.writeln("</a>");
                return
            } else {
        document.writeln("<div>Sorry! Cloud does not exist!</div>");
        return
    }
    var x = !1;
    e.a = {
        x: e.viewBox.x,
        y: e.viewBox.y,
        width: e.viewBox.width,
        height: e.viewBox.height
    };
    A = {};
    u = "boolean" == typeof u ? u : !0;
    var G, g, r = e.tags,
        P, z = null,
        p = [],
        t = [],
        D = 0,
        I = 1;
    A.cleanUp = function() {
        m = B = null;
        h.onmousemove = null;
        h.onmouseout = null;
        l = N = t = p = z = P = g = h = window.onresize = null
    };
    var B = document.getElementById(f),
        h = B.getElementsByTagName("canvas")[0];
    window.onresize = function() {
        y();
        V()
    };
    y();
    var m = h.getContext("2d");
    m.clearRect(0, 0, h.width, h.height);
    x && (h.onmouseover = C);
    h.onmousemove = function(b) {
        var c = h,
            d = 0,
            a = 0;
        if (void 0 !== c.offsetParent) {
            do d += c.offsetLeft, a += c.offsetTop; while (c = c.offsetParent)
        }
        d += Y + Z + $;
        a += aa + ba + ca;
        b = {
            x: (b.pageX - d) * G,
            y: (b.pageY - a) * G
        };
        if (x && (c = attribution.data.tags[0], d = E(b, c.B), c = c.bbox, !(d.x < c.x || d.x > c.b || d.y < c.y || d.y > c.c))) {
            h.style.cursor = "pointer";
            B.href = attribution.url;
            B.target = "_blank";
            z = null;
            return
        }
        for (c = r.length - 1; 0 <= c && (d = E(b, r[c].B), a = r[c].bbox, d.x < a.x || d.x > a.b || d.y < a.y || d.y > a.c); c--);
        c = 0 <= c ? r[c] : null;
        null != c ? h.style.cursor = "pointer" : (h.style.cursor = "auto", B.removeAttribute("href"));
        if (c != z) {
            for (b = 0; b < t.length; b++) - 1 == p.indexOf(t[b]) && p.push(t[b]);
            t = []
        }
        c != z && null != c && (B.href = c.url ? c.url : "javascript:void(0);", B.target = l.M || O ? "_blank" : "_self", null != c && c.f != D && (c.f = D, b = H(), c.d = b - Math.max(1E3 * l.k - (b - c.d), 0), -1 == p.indexOf(c) && p.push(c)));
        z = c
    };
    h.onmouseout = function() {
        for (var b = 0; b <
            p.length; b++) {
            var c = p[b];
            if (c.f == D) {
                c.f = I;
                var d = H();
                c.d = d - Math.max(1E3 * l.k - (d - c.d), 0);
                z = null
            }
        }
        x && (attribution.f = I, d = H(), attribution.d = d - Math.max(attribution.k - (d - attribution.d), 0), attribution.q = !0)
    };
    var N = N || new window.AnimationFrame(60),
        Y = parseInt(document.defaultView.getComputedStyle(h, void 0).paddingLeft, 10) || 0,
        aa = parseInt(document.defaultView.getComputedStyle(h, void 0).paddingTop, 10) || 0,
        Z = parseInt(document.defaultView.getComputedStyle(h, void 0).borderLeftWidth, 10) || 0,
        ba = parseInt(document.defaultView.getComputedStyle(h,
            void 0).borderTopWidth, 10) || 0;
    f = document.body.parentNode;
    ca = f.offsetTop;
    $ = f.offsetLeft;
    void 0 === e.styleOptions && (e.styleOptions = {});
    var l = {
            backgroundColor: e.styleOptions.backgroundColor ? "#" + e.styleOptions.backgroundColor : "#FFFFFF",
            J: n(e.styleOptions.backgroundColorAlpha) ? e.styleOptions.backgroundColorAlpha : 1,
            k: n(e.styleOptions.animationSpeed) ? e.styleOptions.animationSpeed : 0.3,
            t: e.styleOptions.textColor ? "#" + e.styleOptions.textColor : void 0,
            S: n(e.styleOptions.textAlpha) ? e.styleOptions.textAlpha : 1,
            A: e.styleOptions.boxColor ?
                "#" + e.styleOptions.boxColor : void 0,
            K: n(e.styleOptions.boxAlpha) ? e.styleOptions.boxAlpha : 0.8,
            zoom: !0 == e.styleOptions.zoom,
            rotate: !0 == e.styleOptions.rotate,
            M: !0 == e.styleOptions.openLinksInNewWindow
        },
        Y, aa, Z, ba, ca, $;
    V();
    u && W();
    return A
};
TagulDisplayCloud({
    "viewBox": {
        "x": 58.04068796611496,
        "y": 21.582983086776338,
        "width": 141.2393650444438,
        "height": 212.25716085659388
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
        "0.37": "M 377 13 Q 237 13 147.5 -89 Q 58 -191 58 -366 Q 58 -540 149.5 -643.5 Q 241 -747 383 -747 Q 503 -747 584 -656 L 534 -596 Q 469 -666 384 -666 Q 279 -666 216 -585.5 Q 153 -505 153 -369 Q 153 -230 214.5 -149 Q 276 -68 381 -68 Q 475 -68 551 -150 L 602 -92 Q 511 13 377 13 Z ",
        "0.67": "M 217 13 Q 147 13 102.5 -28 Q 58 -69 58 -141 Q 58 -229 137.5 -276.5 Q 217 -324 392 -344 Q 392 -481 280 -481 Q 203 -481 117 -423 L 81 -486 Q 192 -557 295 -557 Q 391 -557 437 -498 Q 483 -439 483 -334 L 483 0 L 408 0 L 400 -65 L 397 -65 Q 303 13 217 13 M 243 -60 Q 311 -60 392 -132 L 392 -284 Q 259 -268 203 -235 Q 147 -202 147 -147 Q 147 -103 173.5 -81.5 Q 200 -60 243 -60 Z ",
        "0.80": "M 92 0 L 92 -543 L 167 -543 L 175 -465 L 178 -465 Q 272 -557 360 -557 Q 526 -557 526 -344 L 526 0 L 435 0 L 435 -332 Q 435 -408 410.5 -442.5 Q 386 -477 332 -477 Q 292 -477 260 -458 Q 228 -439 183 -394 L 183 0 L 92 0 Z ",
        "0.69": "M 306 13 Q 195 13 123 -63 Q 51 -139 51 -271 Q 51 -402 127.5 -479.5 Q 204 -557 313 -557 Q 399 -557 472 -493 L 425 -432 Q 371 -481 316 -481 Q 242 -481 194 -422.5 Q 146 -364 146 -271 Q 146 -177 192.5 -120 Q 239 -63 314 -63 Q 383 -63 442 -117 L 481 -56 Q 406 13 306 13 Z ",
        "0.71": "M 311 13 Q 199 13 125 -64 Q 51 -141 51 -271 Q 51 -398 124 -477.5 Q 197 -557 296 -557 Q 398 -557 455 -488.5 Q 512 -420 512 -302 Q 512 -276 508 -250 L 142 -250 Q 146 -163 195.5 -111.5 Q 245 -60 322 -60 Q 394 -60 458 -103 L 491 -43 Q 404 13 311 13 M 141 -315 L 432 -315 Q 432 -397 396.5 -440.5 Q 361 -484 297 -484 Q 237 -484 193 -438.5 Q 149 -393 141 -315 Z ",
        "0.84": "M 92 0 L 92 -543 L 167 -543 L 175 -444 L 178 -444 Q 207 -497 247 -527 Q 287 -557 332 -557 Q 367 -557 390 -545 L 373 -465 Q 350 -474 320 -474 Q 282 -474 245 -444 Q 208 -414 183 -349 L 183 0 L 92 0 Z ",
        "0.68": "M 331 13 Q 251 13 176 -56 L 173 -56 L 165 0 L 92 0 L 92 -796 L 183 -796 L 183 -578 L 180 -480 Q 268 -557 350 -557 Q 454 -557 510.5 -482.5 Q 567 -408 567 -281 Q 567 -146 498 -66.5 Q 429 13 331 13 M 316 -63 Q 385 -63 428.5 -121.5 Q 472 -180 472 -279 Q 472 -480 329 -480 Q 263 -480 183 -405 L 183 -120 Q 248 -63 316 -63 Z ",
        "0.78": "M 188 13 Q 92 13 92 -108 L 92 -796 L 183 -796 L 183 -102 Q 183 -63 209 -63 Q 218 -63 228 -65 L 241 5 Q 220 13 188 13 Z ",
        "0.70": "M 277 13 Q 174 13 113.5 -62 Q 53 -137 53 -271 Q 53 -399 122 -478 Q 191 -557 288 -557 Q 333 -557 367 -541.5 Q 401 -526 441 -493 L 436 -587 L 436 -796 L 527 -796 L 527 0 L 453 0 L 444 -64 L 442 -64 Q 363 13 277 13 M 297 -63 Q 368 -63 436 -138 L 436 -423 Q 372 -480 304 -480 Q 237 -480 192 -422 Q 147 -364 147 -272 Q 147 -173 186 -118 Q 225 -63 297 -63 Z ",
        "0.81": "M 481.5 -64 Q 481.5 -64 444.75 -25.5 Q 408 13 303 13 Q 198 13 124.5 -64 Q 51 -141 51 -271 Q 51 -402 124.5 -479.5 Q 198 -557 303 -557 Q 408 -557 481.5 -479.5 Q 555 -402 555 -271 Q 555 -141 481.5 -64 M 189 -120 Q 189 -120 210.5 -91.5 Q 232 -63 303 -63 Q 374 -63 417.5 -120 Q 461 -177 461 -271 Q 461 -365 417.5 -423 Q 374 -481 303 -481 Q 233 -481 189.5 -423 Q 146 -365 146 -271 Q 146 -177 189 -120 Z ",
        "0.75": "M 92 0 L 92 -543 L 183 -543 L 183 0 L 92 0 M 183 -672 Q 183 -672 174 -663.5 Q 165 -655 138 -655 Q 111 -655 93 -672 Q 75 -689 75 -714 Q 75 -741 92.5 -757 Q 110 -773 138 -773 Q 166 -773 183.5 -757 Q 201 -741 201 -714 Q 201 -689 183 -672 Z ",
        "0.85": "M 234 13 Q 122 13 31 -62 L 76 -122 Q 155 -58 237 -58 Q 289 -58 316.5 -82 Q 344 -106 344 -143 Q 344 -169 323 -190 Q 302 -211 281 -221 Q 260 -231 220 -246 Q 185 -259 161.5 -270 Q 138 -281 111.5 -299.5 Q 85 -318 71.5 -344 Q 58 -370 58 -403 Q 58 -470 108.5 -513.5 Q 159 -557 245 -557 Q 335 -557 414 -496 L 370 -437 Q 305 -485 245 -485 Q 197 -485 171.5 -463 Q 146 -441 146 -407 Q 146 -384 164.5 -365.5 Q 183 -347 199.5 -339.5 Q 216 -332 256 -317 Q 263 -314 266 -313 Q 299 -301 315 -294 Q 331 -287 357.5 -272 Q 384 -257 397 -242 Q 410 -227 421 -202.5 Q 432 -178 432 -148 Q 432 -79 379.5 -33 Q 327 13 234 13 Z ",
        "0.86": "M 263 13 Q 108 13 108 -168 L 108 -469 L 27 -469 L 27 -538 L 112 -543 L 123 -695 L 199 -695 L 199 -543 L 346 -543 L 346 -469 L 199 -469 L 199 -166 Q 199 -113 218 -87 Q 237 -61 283 -61 Q 309 -61 345 -75 L 363 -7 Q 301 13 263 13 Z ",
        "0.79": "M 92 0 L 92 -543 L 167 -543 L 175 -464 L 178 -464 Q 262 -557 347 -557 Q 461 -557 497 -453 Q 592 -557 676 -557 Q 841 -557 841 -344 L 841 0 L 750 0 L 750 -332 Q 750 -408 725.5 -442.5 Q 701 -477 649 -477 Q 588 -477 512 -394 L 512 0 L 421 0 L 421 -332 Q 421 -408 396.5 -442.5 Q 372 -477 320 -477 Q 257 -477 183 -394 L 183 0 L 92 0 Z ",
        "0.91": "M 101 234 Q 64 234 37 223 L 55 150 Q 80 159 96 159 Q 181 159 219 42 L 231 1 L 13 -543 L 108 -543 L 219 -241 Q 257 -128 271 -89 L 276 -89 Q 282 -108 298 -161 Q 314 -214 322 -241 L 419 -543 L 508 -543 L 303 45 Q 271 134 223.5 184 Q 176 234 101 234 Z ",
        "0.73": "M 275 250 Q 173 250 111.5 211.5 Q 50 173 50 104 Q 50 33 131 -19 L 131 -23 Q 81 -52 81 -112 Q 81 -169 142 -213 L 142 -217 Q 71 -274 71 -363 Q 71 -450 130.5 -503.5 Q 190 -557 275 -557 Q 313 -557 351 -543 L 540 -543 L 540 -473 L 429 -473 Q 473 -431 473 -361 Q 473 -276 416.5 -224 Q 360 -172 275 -172 Q 232 -172 194 -191 Q 159 -161 159 -126 Q 159 -67 254 -67 L 360 -67 Q 549 -67 549 62 Q 549 140 473 195 Q 397 250 275 250 M 275 -234 Q 323 -234 356.5 -269.5 Q 390 -305 390 -363 Q 390 -421 357 -455.5 Q 324 -490 275 -490 Q 225 -490 192 -455.5 Q 159 -421 159 -363 Q 159 -305 192.5 -269.5 Q 226 -234 275 -234 M 288 188 Q 363 188 412 154.5 Q 461 121 461 76 Q 461 40 433.5 24.5 Q 406 9 350 9 L 256 9 Q 222 9 186 0 Q 130 40 130 92 Q 130 136 172 162 Q 214 188 288 188 Z ",
        "0.88": "M 209 0 L 13 -543 L 108 -543 L 210 -234 Q 214 -221 232.5 -162.5 Q 251 -104 261 -74 L 265 -74 Q 310 -217 315 -234 L 418 -543 L 508 -543 L 315 0 L 209 0 Z ",
        "0.87": "M 250 13 Q 85 13 85 -199 L 85 -543 L 176 -543 L 176 -210 Q 176 -134 200 -100 Q 224 -66 278 -66 Q 319 -66 352 -87 Q 385 -108 425 -158 L 425 -543 L 516 -543 L 516 0 L 440 0 L 433 -85 L 430 -85 Q 345 13 250 13 Z ",
        "0.77": "M 92 0 L 92 -796 L 182 -796 L 182 -256 L 184 -256 L 417 -543 L 518 -543 L 336 -325 L 542 0 L 443 0 L 284 -262 L 182 -143 L 182 0 L 92 0 Z ",
        "0.74": "M 92 0 L 92 -796 L 183 -796 L 183 -578 L 180 -466 Q 271 -557 360 -557 Q 526 -557 526 -344 L 526 0 L 435 0 L 435 -332 Q 435 -408 410.5 -442.5 Q 386 -477 332 -477 Q 292 -477 260 -458 Q 228 -439 183 -394 L 183 0 L 92 0 Z ",
        "0.82": "M 92 229 L 92 -543 L 167 -543 L 175 -481 L 178 -481 Q 271 -557 351 -557 Q 454 -557 510.5 -482.5 Q 567 -408 567 -280 Q 567 -146 498 -66.5 Q 429 13 331 13 Q 258 13 181 -50 L 183 45 L 183 229 L 92 229 M 316 -63 Q 385 -63 428.5 -121.5 Q 472 -180 472 -279 Q 472 -480 329 -480 Q 264 -480 183 -405 L 183 -120 Q 250 -63 316 -63 Z ",
        "0.40": "M 100 0 L 100 -733 L 523 -733 L 523 -655 L 193 -655 L 193 -407 L 473 -407 L 473 -329 L 193 -329 L 193 0 L 100 0 Z ",
        "0.35": "M 191 -298 L 413 -298 L 378 -410 Q 348 -503 304 -658 L 300 -658 Q 273 -556 227 -410 L 191 -298 M 506 0 L 436 -224 L 168 -224 L 97 0 L 3 0 L 252 -733 L 355 -733 L 604 0 L 506 0 Z ",
        "0.51": "M 153 -369 Q 153 -229 212.5 -146 Q 272 -63 371 -63 Q 470 -63 529.5 -146 Q 589 -229 589 -369 Q 589 -506 529.5 -586 Q 470 -666 371 -666 Q 271 -666 212 -586 Q 153 -506 153 -369 M 682 96 L 700 168 Q 656 184 595 184 Q 497 184 427.5 136.5 Q 358 89 326 10 Q 204 -7 131 -108.5 Q 58 -210 58 -369 Q 58 -543 144.5 -645 Q 231 -747 371 -747 Q 511 -747 597.5 -645 Q 684 -543 684 -369 Q 684 -213 613.5 -112.5 Q 543 -12 425 9 Q 475 107 605 107 Q 647 107 682 96 Z "
    },
    "tags": [{
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b06baa",
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fccbf0",
        "matrix": [
            [0.01762288, 0.00310739, 96.02612396],
            [-0.00310739, 0.01762288, 152.49165703]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fccbf0",
        "matrix": [
            [0.01451339, 0.0025591, 100.65975479],
            [-0.0025591, 0.01451339, 94.34542762]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fcb6ea",
        "matrix": [
            [0.01489993, 0.00262726, 105.24149449],
            [-0.00262726, 0.01489993, 135.2660777]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fdc4ee",
        "matrix": [
            [0.01489993, 0.00262726, 110.36261896],
            [-0.00262726, 0.01489993, 108.25216184]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fde1f6",
        "matrix": [
            [0.01448605, 0.00255428, 81.5603746],
            [-0.00255428, 0.01448605, 171.48354535]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fdc8ef",
        "matrix": [
            [0.01241661, 0.00218938, 62.30807411],
            [-0.00218938, 0.01241661, 212.62908309]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fddaf4",
        "matrix": [
            [0.00827774, 0.00145959, 67.62684652],
            [-0.00145959, 0.00827774, 196.81994701]
        ]
    }, {
        "text": "donate",
         "url": "donate.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fee8f9",
        "matrix": [
            [0.01034718, 0.00182449, 76.40986191],
            [-0.00182449, 0.01034718, 185.95237183]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fcb3e9",
        "matrix": [
            [0.00620831, 0.00109469, 105.15099961],
            [-0.00109469, 0.00620831, 121.33446987]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
        "fill": "#d959c5",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fcd2f1",
        "matrix": [
            [0.015239, 0.00268705, 164.6273699],
            [-0.00268705, 0.015239, 212.51841842]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
        "fill": "#b06baa",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00640219, 0.00112888, 151.23475769],
            [-0.00112888, 0.00640219, 193.73880787]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.01448605, 0.00255428, 146.69019725],
            [-0.00255428, 0.01448605, 185.38506566]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fdddf4",
        "matrix": [
            [0.01152395, 0.00203198, 142.09615946],
            [-0.00203198, 0.01152395, 164.87440225]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00851997, 0.0015023, 158.53695409],
            [-0.0015023, 0.00851997, 203.12618087]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.01268146, 0.00223608, 96.84291562],
            [-0.00223608, 0.01268146, 80.43515699]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "feeafa",
        "matrix": [
            [0.00827774, 0.00145959, 131.09821945],
            [-0.00145959, 0.00827774, 74.94673076]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fcd9f3",
        "matrix": [
            [0.00584791, 0.00103114, 131.88899978],
            [-0.00103114, 0.00584791, 152.81687605]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fde6f8",
        "matrix": [
            [0.01138189, 0.00200694, 133.87322875],
            [-0.00200694, 0.01138189, 66.06392923]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00989039, 0.00174394, 95.02318067],
            [-0.00174394, 0.00989039, 67.12868708]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fdcbf0",
        "matrix": [
            [0.00771001, 0.00135948, 165.12180591],
            [-0.00135948, 0.00771001, 223.37606649]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fdc3ee",
        "matrix": [
            [0.00620831, 0.00109469, 72.98618189],
            [-0.00109469, 0.00620831, 217.37896352]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
        "fill": "#b06baa",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00724302, 0.00127714, 152.23721199],
            [-0.00127714, 0.00724302, 173.86747038]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fcdbf4",
        "matrix": [
            [0.00724302, 0.00127714, 134.62644868],
            [-0.00127714, 0.00724302, 55.12152967]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00724302, 0.00127714, 84.79902586],
            [-0.00127714, 0.00724302, 161.38840344]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fdbfed",
        "matrix": [
            [0.00620831, 0.00109469, 123.81951733],
            [-0.00109469, 0.00620831, 111.95014684]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fdcbf0",
        "matrix": [
            [0.00517359, 0.00091224, 67.0908217],
            [-0.00091224, 0.00517359, 203.27710195]
        ]
    }, {
        "text": "donate",
        "url": "donate.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fcd9f3",
        "matrix": [
            [0.00517359, 0.00091224, 136.22680684],
            [-0.00091224, 0.00517359, 93.60560769]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fee8fa",
        "matrix": [
            [0.00413887, 0.00072979, 87.36992019],
            [-0.00072979, 0.00413887, 175.4211376]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00952437, 0.0016794, 95.23694608],
            [-0.0016794, 0.00952437, 55.6520317]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
        "fill": "#bf90d5",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00400137, 0.00070555, 144.29652251],
            [-0.00070555, 0.00400137, 155.19247904]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fdd2f2",
        "matrix": [
            [0.00754017, 0.00132954, 135.17502604],
            [-0.00132954, 0.00754017, 48.35861472]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00640219, 0.00112888, 97.37383416],
            [-0.00112888, 0.00640219, 45.84481705]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fdbeec",
        "matrix": [
            [0.00532498, 0.00093894, 74.24198454],
            [-0.00093894, 0.00532498, 223.33808859]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00620831, 0.00109469, 100.09756455],
            [-0.00109469, 0.00620831, 39.97597125]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fdcef1",
        "matrix": [
            [0.00517359, 0.00091224, 110.44308112],
            [-0.00091224, 0.00517359, 156.03129108]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00334166, 0.00058923, 179.06588393],
            [-0.00058923, 0.00334166, 214.36757392]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00673252, 0.00118713, 134.09174952],
            [-0.00118713, 0.00673252, 40.59832124]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00539476, 0.00095124, 139.68879407],
            [-0.00095124, 0.00539476, 171.16813473]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fdc7ef",
        "matrix": [
            [0.00440572, 0.00077685, 117.46758365],
            [-0.00077685, 0.00440572, 96.99981454]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fdc0ed",
        "matrix": [
            [0.00413887, 0.00072979, 114.04752344],
            [-0.00072979, 0.00413887, 27.54200409]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
        "fill": "#bf90d5",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fbc8ed",
        "matrix": [
            [0.00413887, 0.00072979, 170.31069395],
            [-0.00072979, 0.00413887, 227.81459777]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fdc6ef",
        "matrix": [
            [0.00491312, 0.00086632, 131.71218124],
            [-0.00086632, 0.00491312, 34.36103812]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fcaee7",
        "matrix": [
            [0.00413887, 0.00072979, 114.67401037],
            [-0.00072979, 0.00413887, 82.26457458]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fcafe7",
        "matrix": [
            [0.00413887, 0.00072979, 107.82870279],
            [-0.00072979, 0.00413887, 113.93438536]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "feeafb",
        "matrix": [
            [0.00310415, 0.00054735, 140.10900221],
            [-0.00054735, 0.00310415, 77.86972581]
        ]
    }, {
        "text": "donate",
         "url": "donate.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fcdcf4",
        "matrix": [
            [0.00377251, 0.0006652, 91.66121122],
            [-0.0006652, 0.00377251, 197.77502861]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fcafe8",
        "matrix": [
            [0.00310415, 0.00054735, 118.51465264],
            [-0.00054735, 0.00310415, 123.30988336]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fcd7f2",
        "matrix": [
            [0.00583447, 0.00102878, 150.79175726],
            [-0.00102878, 0.00583447, 141.23162573]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fcddf4",
        "matrix": [
            [0.00240082, 0.00042333, 159.85496919],
            [-0.00042333, 0.00240082, 195.66191454]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fcdcf4",
        "matrix": [
            [0.00463619, 0.00081748, 85.72463214],
            [-0.00081748, 0.00463619, 153.0506466]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fdc6ef",
        "matrix": [
            [0.00400137, 0.00070555, 96.74994217],
            [-0.00070555, 0.00400137, 136.15970548]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fcbeec",
        "matrix": [
            [0.00319499, 0.00056336, 127.74232833],
            [-0.00056336, 0.00319499, 135.89755018]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fcbbeb",
        "matrix": [
            [0.00508909, 0.00089734, 79.92354764],
            [-0.00089734, 0.00508909, 228.42796157]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fcd2f1",
        "matrix": [
            [0.00310415, 0.00054735, 144.54556013],
            [-0.00054735, 0.00310415, 131.92047799]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fcd1f1",
        "matrix": [
            [0.00234478, 0.00041345, 161.91129402],
            [-0.00041345, 0.00234478, 216.62835814]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00413887, 0.00072979, 105.4104267],
            [-0.00072979, 0.00413887, 33.12666373]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fcd2f2",
        "matrix": [
            [0.00405904, 0.00071572, 68.48086506],
            [-0.00071572, 0.00405904, 188.01940594]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00323869, 0.00057107, 177.09484374],
            [-0.00057107, 0.00323869, 193.1589023]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
        "fill": "#bf90d5",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fde6f9",
        "matrix": [
            [0.00291928, 0.00051475, 132.00687185],
            [-0.00051475, 0.00291928, 58.8585633]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fdc4ee",
        "matrix": [
            [0.00310415, 0.00054735, 131.00867659],
            [-0.00054735, 0.00310415, 29.71845477]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fde3f6",
        "matrix": [
            [0.00366846, 0.00064685, 174.0570637],
            [-0.00064685, 0.00366846, 182.1327795]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00310415, 0.00054735, 152.11005945],
            [-0.00054735, 0.00310415, 167.14201069]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fde0f6",
        "matrix": [
            [0.00310415, 0.00054735, 148.01235745],
            [-0.00054735, 0.00310415, 189.18850496]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fcbbec",
        "matrix": [
            [0.00206944, 0.0003649, 115.73581917],
            [-0.0003649, 0.00206944, 137.09043917]
        ]
    }, {
        "text": "donate",
         "url": "donate.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00260121, 0.00045866, 132.22166544],
            [-0.00045866, 0.00260121, 157.21147606]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fcbbeb",
        "matrix": [
            [0.00206944, 0.0003649, 103.63007167],
            [-0.0003649, 0.00206944, 96.57709138]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fcd8f2",
        "matrix": [
            [0.00423305, 0.0007464, 134.68478685],
            [-0.0007464, 0.00423305, 162.05069001]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00160055, 0.00028222, 83.6696263],
            [-0.00028222, 0.00160055, 187.03850643]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fdcef2",
        "matrix": [
            [0.00377009, 0.00066477, 98.60973846],
            [-0.00066477, 0.00377009, 145.90079959]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fee8fa",
        "matrix": [
            [0.0032011, 0.00056444, 74.54036537],
            [-0.00056444, 0.0032011, 174.88280376]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fcd8f2",
        "matrix": [
            [0.00212999, 0.00037557, 145.71654205],
            [-0.00037557, 0.00212999, 95.2478591]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fcbaeb",
        "matrix": [
            [0.00407127, 0.00071788, 64.66326994],
            [-0.00071788, 0.00407127, 216.99404427]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fdcef1",
        "matrix": [
            [0.0027008, 0.00047622, 188.66003849],
            [-0.00047622, 0.0027008, 206.24742462]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fbc6eb",
        "matrix": [
            [0.00167083, 0.00029461, 169.65961345],
            [-0.00029461, 0.00167083, 230.7889563]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fde1f6",
        "matrix": [
            [0.0036057, 0.00063578, 166.81220108],
            [-0.00063578, 0.0036057, 163.18196568]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fdc0ed",
        "matrix": [
            [0.00358315, 0.00063181, 97.87622176],
            [-0.00063181, 0.00358315, 130.29033633]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00220286, 0.00038842, 106.51156473],
            [-0.00038842, 0.00220286, 56.4655801]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00206944, 0.0003649, 157.10458776],
            [-0.0003649, 0.00206944, 205.953005]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.0029158, 0.00051413, 173.41105826],
            [-0.00051413, 0.0029158, 178.49609229]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fdcaf0",
        "matrix": [
            [0.00286053, 0.00050439, 142.48773605],
            [-0.00050439, 0.00286053, 106.7493489]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fddef4",
        "matrix": [
            [0.0028304, 0.00049908, 152.57394267],
            [-0.00049908, 0.0028304, 198.48748591]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fcc9ee",
        "matrix": [
            [0.00206944, 0.0003649, 191.75906179],
            [-0.0003649, 0.00206944, 215.07388541]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fdd0f2",
        "matrix": [
            [0.00186744, 0.00032928, 115.15574239],
            [-0.00032928, 0.00186744, 158.50757229]
        ]
    }, {
        "text": "donate",
        "url": "donate.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fdc4ee",
        "matrix": [
            [0.00206944, 0.0003649, 106.35721483],
            [-0.0003649, 0.00206944, 138.74414016]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fdc2ee",
        "matrix": [
            [0.00133857, 0.00023603, 129.39645991],
            [-0.00023603, 0.00133857, 26.03846315]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00346221, 0.00061048, 144.60097112],
            [-0.00061048, 0.00346221, 123.5545859]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
        "fill": "#bf90d5",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fdbfed",
        "matrix": [
            [0.0014313, 0.00025238, 140.31330442],
            [-0.00025238, 0.0014313, 111.00533039]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00310415, 0.00054735, 94.87932728],
            [-0.00054735, 0.00310415, 71.62896526]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fcddf4",
        "matrix": [
            [0.00271325, 0.00047842, 128.56621084],
            [-0.00047842, 0.00271325, 79.11424778]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00212999, 0.00037557, 111.52485775],
            [-0.00037557, 0.00212999, 68.78312397]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fcd5f1",
        "matrix": [
            [0.00310415, 0.00054735, 103.2940352],
            [-0.00054735, 0.00310415, 155.44106062]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fddbf4",
        "matrix": [
            [0.00206944, 0.0003649, 165.78093138],
            [-0.0003649, 0.00206944, 159.74436061]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fddef4",
        "matrix": [
            [0.00136018, 0.00023984, 143.84901172],
            [-0.00023984, 0.00136018, 56.5065702]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00304231, 0.00053644, 103.1429099],
            [-0.00053644, 0.00304231, 84.10720674]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fcd3f1",
        "matrix": [
            [0.00269738, 0.00047562, 146.28457884],
            [-0.00047562, 0.00269738, 98.6500503]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.0020568, 0.00036267, 166.49507552],
            [-0.00036267, 0.0020568, 184.90461957]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fdcff2",
        "matrix": [
            [0.00185395, 0.0003269, 146.17900425],
            [-0.0003269, 0.00185395, 127.57396069]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fcd2f2",
        "matrix": [
            [0.00206944, 0.0003649, 89.90952324],
            [-0.0003649, 0.00206944, 143.67516518]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fcd0ef",
        "matrix": [
            [0.00242381, 0.00042738, 130.46663348],
            [-0.00042738, 0.00242381, 141.99720955]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fcbeec",
        "matrix": [
            [0.00239828, 0.00042288, 102.81312712],
            [-0.00042288, 0.00239828, 100.32805941]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fcd7f2",
        "matrix": [
            [0.00206944, 0.0003649, 88.45795345],
            [-0.0003649, 0.00206944, 147.99282255]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00143815, 0.00025358, 72.13416926],
            [-0.00025358, 0.00143815, 179.29552049]
        ]
    }, {
        "text": "donate",
        "url": "donate.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fdc6ef",
        "matrix": [
            [0.00203837, 0.00035942, 62.5947759],
            [-0.00035942, 0.00203837, 200.26179235]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00099089, 0.00017472, 172.31237866],
            [-0.00017472, 0.00099089, 171.42394635]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fcd6f1",
        "matrix": [
            [0.00282106, 0.00049743, 158.76877275],
            [-0.00049743, 0.00282106, 209.47174301]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
        "fill": "#bf90d5",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fbc6eb",
        "matrix": [
            [0.00105953, 0.00018682, 181.47455735],
            [-0.00018682, 0.00105953, 223.39951858]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fde0f6",
        "matrix": [
            [0.00231809, 0.00040874, 171.72632082],
            [-0.00040874, 0.00231809, 168.61991564]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fcd9f3",
        "matrix": [
            [0.00228616, 0.00040311, 157.11194024],
            [-0.00040311, 0.00228616, 143.30817035]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fcd8f2",
        "matrix": [
            [0.00165441, 0.00029172, 136.73127534],
            [-0.00029172, 0.00165441, 165.62955725]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fcd4f1",
        "matrix": [
            [0.00233823, 0.00041229, 153.09038642],
            [-0.00041229, 0.00233823, 136.10725713]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00203901, 0.00035953, 94.53081111],
            [-0.00035953, 0.00203901, 58.57909264]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fddef4",
        "matrix": [
            [0.00115716, 0.00020404, 111.84728754],
            [-0.00020404, 0.00115716, 168.60385231]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fdcbf1",
        "matrix": [
            [0.00256343, 0.000452, 143.8574435],
            [-0.000452, 0.00256343, 119.5016961]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fcd4f1",
        "matrix": [
            [0.0025474, 0.00044918, 160.19215819],
            [-0.00044918, 0.0025474, 212.86559931]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00174981, 0.00030854, 76.39036038],
            [-0.00030854, 0.00174981, 197.83938328]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fdcff2",
        "matrix": [
            [0.00157724, 0.00027811, 70.00701836],
            [-0.00027811, 0.00157724, 190.68655951]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00181514, 0.00032006, 191.99058642],
            [-0.00032006, 0.00181514, 208.84158694]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fcd3f0",
        "matrix": [
            [0.00205259, 0.00036193, 187.46669598],
            [-0.00036193, 0.00205259, 200.58938782]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fee7fa",
        "matrix": [
            [0.00203098, 0.00035812, 151.33691607],
            [-0.00035812, 0.00203098, 82.05715228]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00161669, 0.00028507, 143.25636782],
            [-0.00028507, 0.00161669, 41.76598074]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fccbee",
        "matrix": [
            [0.00100885, 0.00017789, 152.35428266],
            [-0.00017789, 0.00100885, 133.10533068]
        ]
    }, {
        "text": "donate",
        "url": "donate.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fdcef2",
        "matrix": [
            [0.0014299, 0.00025213, 145.85260796],
            [-0.00025213, 0.0014299, 102.13356498]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00081705, 0.00014407, 160.45287593],
            [-0.00014407, 0.00081705, 184.73630674]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fdbfed",
        "matrix": [
            [0.00291724, 0.00051439, 104.49285041],
            [-0.00051439, 0.00291724, 103.67524747]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "feebfb",
        "matrix": [
            [0.00079, 0.0001393, 81.71317937],
            [-0.0001393, 0.00079, 174.5394441]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fcb8ea",
        "matrix": [
            [0.00231809, 0.00040874, 108.12896493],
            [-0.00040874, 0.00231809, 124.673764]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fee7fa",
        "matrix": [
            [0.00228616, 0.00040311, 105.37082692],
            [-0.00040311, 0.00228616, 183.87842303]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fdd0f2",
        "matrix": [
            [0.00136416, 0.00024054, 130.81423982],
            [-0.00024054, 0.00136416, 91.67442811]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00250328, 0.0004414, 92.4988562],
            [-0.0004414, 0.00250328, 138.8955778]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fcd4f1",
        "matrix": [
            [0.00168129, 0.00029646, 136.61092622],
            [-0.00029646, 0.00168129, 147.44277284]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fcbaea",
        "matrix": [
            [0.00095415, 0.00016824, 108.242854],
            [-0.00016824, 0.00095415, 27.11869772]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fcb0e8",
        "matrix": [
            [0.00206944, 0.0003649, 119.38944883],
            [-0.0003649, 0.00206944, 114.10682022]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00190355, 0.00033565, 175.80348785],
            [-0.00033565, 0.00190355, 173.90049376]
        ]
    }, {
        "text": "Cancer",
        "url": "index.html",
        "fill": "#b06baa",
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00144283, 0.00025441, 97.7945175],
            [-0.00025441, 0.00144283, 48.4620603]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fcd3f2",
        "matrix": [
            [0.00130053, 0.00022932, 116.56129195],
            [-0.00022932, 0.00130053, 160.86280633]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fcb8ea",
        "matrix": [
            [0.00181514, 0.00032006, 106.03857419],
            [-0.00032006, 0.00181514, 107.22112498]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00205259, 0.00036193, 104.64223221],
            [-0.00036193, 0.00205259, 116.70613459]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fdcff2",
        "matrix": [
            [0.00203098, 0.00035812, 102.95530684],
            [-0.00035812, 0.00203098, 147.43886994]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "feeafb",
        "matrix": [
            [0.00161669, 0.00028507, 81.84865756],
            [-0.00028507, 0.00161669, 177.24227052]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "feecfb",
        "matrix": [
            [0.00100885, 0.00017789, 76.77214885],
            [-0.00017789, 0.00100885, 170.91815843]
        ]
    }, {
        "text": "donate",
         "url": "donate.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fcb9eb",
        "matrix": [
            [0.0014299, 0.00025213, 84.27040774],
            [-0.00025213, 0.0014299, 230.86150257]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fdd2f3",
        "matrix": [
            [0.00064321, 0.00011342, 190.03153761],
            [-0.00011342, 0.00064321, 202.70535621]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
        "fill": "#d959c5",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fcd4f1",
        "matrix": [
            [0.00217991, 0.00038438, 128.04545153],
            [-0.00038438, 0.00217991, 150.21533042]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00068777, 0.00012127, 180.4453941],
            [-0.00012127, 0.00068777, 182.90152381]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "fdd2f3",
        "matrix": [
            [0.00188504, 0.00033238, 178.2043046],
            [-0.00033238, 0.00188504, 211.3160931]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00178371, 0.00031452, 165.45219286],
            [-0.00031452, 0.00178371, 155.78516086]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00107391, 0.00018936, 151.29741006],
            [-0.00018936, 0.00107391, 86.81951922]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00203564, 0.00035894, 165.23790918],
            [-0.00035894, 0.00203564, 165.92875896]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fdd2f3",
        "matrix": [
            [0.00132357, 0.00023338, 138.46169354],
            [-0.00023338, 0.00132357, 42.70710718]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "feedfc",
        "matrix": [
            [0.00075114, 0.00013245, 139.69064553],
            [-0.00013245, 0.00075114, 67.1482785]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fdbeec",
        "matrix": [
            [0.00200004, 0.00035266, 141.94057702],
            [-0.00035266, 0.00200004, 114.22135752]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fdd2f2",
        "matrix": [
            [0.00198753, 0.00035046, 140.12499644],
            [-0.00035046, 0.00198753, 133.28430372]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00113584, 0.00020028, 154.17264008],
            [-0.00020028, 0.00113584, 201.08982046]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fde5f9",
        "matrix": [
            [0.00102382, 0.00018053, 128.78409117],
            [-0.00018053, 0.00102382, 68.78730779]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
        "fill": "#bf90d5",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fcb9eb",
        "matrix": [
            [0.00142894, 0.00025196, 136.60796003],
            [-0.00025196, 0.00142894, 119.1353862]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00161587, 0.00028492, 126.80458498],
            [-0.00028492, 0.00161587, 75.15579129]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fdbfec",
        "matrix": [
            [0.00159885, 0.00028192, 112.5425855],
            [-0.00028192, 0.00159885, 97.92068701]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00116952, 0.00020622, 104.69052997],
            [-0.00020622, 0.00116952, 69.5709919]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fde2f6",
        "matrix": [
            [0.0007942, 0.00014004, 111.46270299],
            [-0.00014004, 0.0007942, 171.79585681]
        ]
    }, {
        "text": "donate",
        "url": "donate.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fcb9eb",
        "matrix": [
            [0.00112567, 0.00019849, 100.82574955],
            [-0.00019849, 0.00112567, 123.10025526]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00064321, 0.00011342, 109.8252833],
            [-0.00011342, 0.00064321, 173.98210004]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fcd4f1",
        "matrix": [
            [0.00227609, 0.00040134, 98.33291374],
            [-0.00040134, 0.00227609, 201.00102256]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fcbceb",
        "matrix": [
            [0.00068777, 0.00012127, 100.11886367],
            [-0.00012127, 0.00068777, 124.70229548]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "feebfb",
        "matrix": [
            [0.00188504, 0.00033238, 98.55280247],
            [-0.00033238, 0.00188504, 185.7389929]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fcdcf4",
        "matrix": [
            [0.00160055, 0.00028222, 91.07650191],
            [-0.00028222, 0.00160055, 154.25424945]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "fde1f5",
        "matrix": [
            [0.00107391, 0.00018936, 86.21116668],
            [-0.00018936, 0.00107391, 155.36364715]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00203564, 0.00035894, 78.80266518],
            [-0.00035894, 0.00203564, 188.26070413]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fcdbf3",
        "matrix": [
            [0.00132357, 0.00023338, 71.66436692],
            [-0.00023338, 0.00132357, 182.16998663]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fcbbeb",
        "matrix": [
            [0.00075114, 0.00013245, 58.07396411],
            [-0.00013245, 0.00075114, 208.94797774]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fcbaeb",
        "matrix": [
            [0.00206944, 0.0003649, 58.79426892],
            [-0.0003649, 0.00206944, 213.13350058]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fcbfed",
        "matrix": [
            [0.00151164, 0.00026654, 196.42086372],
            [-0.00026654, 0.00151164, 210.83929928]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fcd4f1",
        "matrix": [
            [0.00082886, 0.00014615, 189.06377818],
            [-0.00014615, 0.00082886, 197.3062133]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00074711, 0.00013174, 187.22156367],
            [-0.00013174, 0.00074711, 192.73808182]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fbc7ec",
        "matrix": [
            [0.00104274, 0.00018386, 190.51170968],
            [-0.00018386, 0.00104274, 217.31523681]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fdd1f3",
        "matrix": [
            [0.00111364, 0.00019636, 149.51096619],
            [-0.00019636, 0.00111364, 47.74117763]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00116673, 0.00020573, 173.93297688],
            [-0.00020573, 0.00116673, 192.46452286]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00092874, 0.00016376, 176.18319645],
            [-0.00016376, 0.00092874, 216.61565826]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fde4f7",
        "matrix": [
            [0.00057955, 0.00010219, 160.4009406],
            [-0.00010219, 0.00057955, 167.09462614]
        ]
    }, {
        "text": "donate",
       "url": "donate.html",
        "fill": "#bf90d5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fbc4eb",
        "matrix": [
            [0.00082143, 0.00014484, 169.10875355],
            [-0.00014484, 0.00082143, 233.83714187]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fdc0ed",
        "matrix": [
            [0.00046937, 0.00008276, 129.88591858],
            [-0.00008276, 0.00046937, 22.79632983]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fdcbf0",
        "matrix": [
            [0.00163493, 0.00028828, 166.92419295],
            [-0.00028828, 0.00163493, 227.00774771]
        ]
    }, {
        "text": "gallbladder",
        "url": "gallbladderCancer.html",
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
        "parentId": 11,
        "bbox": {
            "x": -122.59,
            "y": -968.59,
            "width": 5643.18,
            "height": 1391.18
        },
        "shapeColor": "fcdaf3",
        "matrix": [
            [0.00050188, 0.0000885, 151.22777062],
            [-0.0000885, 0.00050188, 143.838749]
        ]
    }, {
        "text": "liver",
        "url": "liverCancer.html",
        "fill": "#d959c5",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 560,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1081,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 1635,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 12,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2199.97,
            "height": 1075.97
        },
        "shapeColor": "feebfb",
        "matrix": [
            [0.00137557, 0.00024255, 135.80468416],
            [-0.00024255, 0.00137557, 68.48090944]
        ]
    }, {
        "text": "lung",
        "url": "lungCancer.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 285,
            "y": 0,
            "glyph": "0.87"
        }, {
            "x": 892,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1503,
            "y": 0,
            "glyph": "0.73"
        }],
        "parentId": 13,
        "bbox": {
            "x": -80.59,
            "y": -968.59,
            "width": 2305.18,
            "height": 1391.18
        },
        "shapeColor": "fdc6ee",
        "matrix": [
            [0.00135662, 0.00023921, 143.28935484],
            [-0.00023921, 0.00135662, 116.67716235]
        ]
    }, {
        "text": "ovarian",
        "url": "ovarianCancer.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.88"
        }, {
            "x": 1127,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1691,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2079,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2354,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2918,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 15,
        "bbox": {
            "x": -78.69,
            "y": -902.69,
            "width": 3652.38,
            "height": 1045.38
        },
        "shapeColor": "feedfc",
        "matrix": [
            [0.00074013, 0.0001305, 130.9429497],
            [-0.0001305, 0.00074013, 62.99251443]
        ]
    }, {
        "text": "skin",
        "url": "skinCancers.html",
        "fill": "#b06baa",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 468,
            "y": 0,
            "glyph": "0.77"
        }, {
            "x": 1020,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 1295,
            "y": 0,
            "glyph": "0.80"
        }],
        "parentId": 16,
        "bbox": {
            "x": -102.485,
            "y": -929.485,
            "width": 2056.97,
            "height": 1075.97
        },
        "shapeColor": "feebfb",
        "matrix": [
            [0.00140294, 0.00024738, 130.34122082],
            [-0.00024738, 0.00140294, 65.3723023]
        ]
    }, {
        "text": "throid",
        "url": "thyroidCancer.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 377,
            "y": 0,
            "glyph": "0.74"
        }, {
            "x": 984,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 1372,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1978,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 2253,
            "y": 0,
            "glyph": "0.70"
        }],
        "parentId": 17,
        "bbox": {
            "x": -106.485,
            "y": -929.485,
            "width": 3019.97,
            "height": 1075.97
        },
        "shapeColor": "fdcef2",
        "matrix": [
            [0.00096585, 0.00017031, 132.23042063],
            [-0.00017031, 0.00096585, 93.6928806]
        ]
    }, {
        "text": "pancreatic",
        "url": "panc.html",
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
            "glyph": "0.86"
        }, {
            "x": 4187,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4462,
            "y": 0,
            "glyph": "0.69"
        }],
        "parentId": 18,
        "bbox": {
            "x": -73.33,
            "y": -938.33,
            "width": 5181.66,
            "height": 1332.66
        },
        "shapeColor": "fcc2ee",
        "matrix": [
            [0.00054813, 0.00009665, 135.622838],
            [-0.00009665, 0.00054813, 130.35093683]
        ]
    }, {
        "text": "oral",
        "url": "oralCancers.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 606,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 994,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 1558,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 14,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 2014.97,
            "height": 1075.97
        },
        "shapeColor": "fde0f5",
        "matrix": [
            [0.00152116, 0.00026822, 141.07236617],
            [-0.00026822, 0.00152116, 172.93305605]
        ]
    }, {
        "text": "FAQ",
        "url": "FAQ.html",
        "fill": "#b961c9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.40"
        }, {
            "x": 552,
            "y": 0,
            "glyph": "0.35"
        }, {
            "x": 1159,
            "y": 0,
            "glyph": "0.51"
        }],
        "parentId": 19,
        "bbox": {
            "x": -53.615,
            "y": -900.615,
            "width": 2066.23,
            "height": 1238.23
        },
        "shapeColor": "fde2f6",
        "matrix": [
            [0.00142766, 0.00025174, 142.59952129],
            [-0.00025174, 0.00142766, 175.78449509]
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
        "parentId": 1,
        "bbox": {
            "x": -67.4,
            "y": -872.4,
            "width": 3458.8,
            "height": 1010.8
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00082886, 0.00014615, 111.47474265],
            [-0.00014615, 0.00082886, 33.69790991]
        ]
    }, {
        "text": "bladder",
        "url": "bladderCancer.html",
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
            "glyph": "0.67"
        }, {
            "x": 1467,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2087,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 2707,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3261,
            "y": 0,
            "glyph": "0.84"
        }],
        "parentId": 2,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3825.97,
            "height": 1075.97
        },
        "shapeColor": "fdccf1",
        "matrix": [
            [0.00074711, 0.00013174, 121.62203004],
            [-0.00013174, 0.00074711, 91.36685208]
        ]
    }, {
        "text": "blood",
        "url": "bloodCancers.html",
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
        "parentId": 3,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2816.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00104274, 0.00018386, 114.8314867],
            [-0.00018386, 0.00104274, 64.53234729]
        ]
    }, {
        "text": "bone",
        "url": "boneCancers.html",
        "fill": "#950abf",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.68"
        }, {
            "x": 618,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1224,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1835,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 4,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2521.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00117915, 0.00020792, 113.30171694],
            [-0.00020792, 0.00117915, 61.68874897]
        ]
    }, {
        "text": "brain",
        "url": "brainCancers.html",
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
        "parentId": 5,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 2545.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00116673, 0.00020573, 110.40268267],
            [-0.00020573, 0.00116673, 50.99959868]
        ]
    }, {
        "text": "breast",
        "url": "breastCancer.html",
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
            "glyph": "0.71"
        }, {
            "x": 1560,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2124,
            "y": 0,
            "glyph": "0.85"
        }, {
            "x": 2592,
            "y": 0,
            "glyph": "0.86"
        }],
        "parentId": 6,
        "bbox": {
            "x": -41.485,
            "y": -929.485,
            "width": 3129.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00092874, 0.00016376, 103.6500239],
            [-0.00016376, 0.00092874, 47.12795575]
        ]
    }, {
        "text": "colorectal",
        "url": "colorectalCancers.html",
        "fill": "#9947ba",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 509,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1115,
            "y": 0,
            "glyph": "0.78"
        }, {
            "x": 1400,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2006,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 2394,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 2948,
            "y": 0,
            "glyph": "0.69"
        }, {
            "x": 3457,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 3834,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 4398,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 7,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 4854.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00057955, 0.00010219, 107.18832469],
            [-0.00010219, 0.00057955, 66.86785189]
        ]
    }, {
        "text": "donate",
      "url": "donate.html",
        "fill": "#b487cb",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 620,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 1226,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1837,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 2401,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 2778,
            "y": 0,
            "glyph": "0.71"
        }],
        "parentId": 8,
        "bbox": {
            "x": -80.485,
            "y": -929.485,
            "width": 3503.97,
            "height": 1075.97
        },
        "shapeColor": "fdc1ed",
        "matrix": [
            [0.0007758, 0.00013679, 120.90876379],
            [-0.00013679, 0.0007758, 144.3160205]
        ]
    }, {
        "text": "endometrial",
        "url": "endometrialCancers.html",
        "fill": "#7d35d9",
        "glyphs": [{
            "x": 0,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 554,
            "y": 0,
            "glyph": "0.80"
        }, {
            "x": 1165,
            "y": 0,
            "glyph": "0.70"
        }, {
            "x": 1785,
            "y": 0,
            "glyph": "0.81"
        }, {
            "x": 2391,
            "y": 0,
            "glyph": "0.79"
        }, {
            "x": 3317,
            "y": 0,
            "glyph": "0.71"
        }, {
            "x": 3871,
            "y": 0,
            "glyph": "0.86"
        }, {
            "x": 4248,
            "y": 0,
            "glyph": "0.84"
        }, {
            "x": 4636,
            "y": 0,
            "glyph": "0.75"
        }, {
            "x": 4911,
            "y": 0,
            "glyph": "0.67"
        }, {
            "x": 5475,
            "y": 0,
            "glyph": "0.78"
        }],
        "parentId": 9,
        "bbox": {
            "x": -82.485,
            "y": -929.485,
            "width": 5931.97,
            "height": 1075.97
        },
        "shapeColor": "fcade7",
        "matrix": [
            [0.00046937, 0.00008276, 108.75031514],
            [-0.00008276, 0.00046937, 110.24610366]
        ]
    }, {
        "text": "eye",
        "url": "eyeCancers.html",
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
        "parentId": 10,
        "bbox": {
            "x": -79.515,
            "y": -687.515,
            "width": 1797.03,
            "height": 1052.03
        },
        "shapeColor": "fdc0ed",
        "matrix": [
            [0.00173111, 0.00030524, 113.74655994],
            [-0.00030524, 0.00173111, 138.95750144]
        ]
    }]
});