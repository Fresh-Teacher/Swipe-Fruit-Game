(function(cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{
        name: "02_movertouch_canastas_atlas_NP_",
        frames: [
            [0, 355, 259, 108],
            [261, 432, 80, 48],
            [353, 355, 54, 104],
            [261, 355, 90, 75],
            [0, 0, 790, 353],
            [111, 465, 43, 47],
            [0, 465, 58, 58],
            [156, 465, 44, 44],
            [202, 465, 34, 35],
            [60, 465, 49, 50]
        ]
    }];


    // symbols:



    (lib.avioncito = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.avioncitohelice = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap42 = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.Bitmap44 = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.frutasycanastas2fondo = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.Mapadebits44 = function() {
        this.initialize(img.Mapadebits44);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 34, 34);


    (lib.naranja1cu = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.naranja2cu = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.naranja3cu = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.naranja4cu = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();



    (lib.naranja5cu = function() {
        this.spriteSheet = ss["02_movertouch_canastas_atlas_NP_"];
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }


    (lib.welldone = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape.setTransform(60.4, 47.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(63.7, 87.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AmeFEQgIgDgDgIIgBgHIAAgFIAQiKQADgcAWgHQAKgDAKAEQAJAEAHALIBQBxIAFAHIABAGQADAJgEAGQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhEATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAl7D0IAsgMIgmg2gAi7EJQgRgCgQgKQgQgKgKgPQgLgPgFgUQgGgVACgTQABgSAJgQQAJgRAOgLQAOgKATgFQALgDALgBQAKAAAKACQASAFAEAMQACAJgDAHQgDAHgHADQgDABgFgBIgKgBQgFgCgGAAQgHAAgGACQgKACgIAGQgHAGgFAJQgEAJgBALQAAAKADAMQADAMAGAJQAFAIAJAGQAIAGAKABQAJACALgDQAJgCAGgFQAGgEAEgGIAEgNQACgGgBgFIgjAJQgJADgHgEQgGgEgDgJQgCgIAEgHQADgGAKgCIA1gPQANgDAGAFQAGAFAEAMQAFAUgCAQQgCARgIAOQgQAdghAJQgNAEgNAAIgMgBgAgvDiQgHgEgDgIIgBgHIAAgFIAPiJQADgdAWgGQALgDAIAEQAJAEAIALIBQBxIAEAHIACAFQACAJgEAGQgEAHgJADQgIACgGgEQgHgEgGgIIgJgPIhEASIAAATQgBAKgEAGIgEAFIgGADIgGABQgGAAgFgDgAgMCSIArgMIgkg2gACJCtQgHgEgEgNIgih+QgEgPAEgIQAEgHAJgCQAJgCAHAEQAHADAEANIAjCBQADANgEAHQgEAIgJACIgHABQgFAAgEgDgADWCYQgHgEgEgNIgkiHQgCgIADgHQAEgGAKgDQAGgBAHACQAGABAHAGIBWBIIgXhMQgDgNAEgHQAEgIAJgCQAJgDAHAFQAHAEAEANIAkCGQACAJgEAHQgDAHgKACQgGACgHgCQgHgCgGgGIhVhIIAWBMQADANgEAHQgEAIgJACIgHABQgFAAgEgDgAGKBrQgIgFgDgJQgCgKAFgHQAEgIAJgDQAJgCAIAFQAIAEADAJQACAKgFAIQgEAIgJACIgGABQgGAAgFgDgAF8A1QgHgEgEgNIgVhPQgDgNADgHQAEgIAKgCQAIgDAIAFQAHAEAEANIAVBPQADANgEAHQgEAIgIACIgIABQgFAAgEgDgAljAAQgHgDgDgNIgliIQgDgLAEgEQAFgFAJgCIAhgJQAWgGARADQARAEALALQALAMAFASQAIAdgMAUQgNAUghAKIgNADIAJAgQADANgEAHQgEAHgJACIgGABQgFAAgFgDgAlYiUIgNADIAOAxIAMgDQAOgEAFgHQAFgIgDgMQgDgMgJgFQgFgDgGAAQgFAAgGACgAjOgkQgGgCgCgLIgkiIQgEgNAEgHQAEgHAJgDQAJgCAHAEQAHAEAEANIAfB0IAsgMQAJgCAHADQAGADADAJQACAKgEAGQgEAGgJADIhBARQgHADgEAAIgFgCgAhShFQgIgDgDgIIgBgHIAAgFIAQiKQADgdAWgGQAKgDAKAEQAJAEAHALIBPBxIAFAHIABAGQADAIgEAHQgEAHgKACQgHACgHgDQgHgEgFgJIgKgPIhDATIgBATQAAAJgEAGIgEAGIgGACIgHABQgFAAgFgDgAgviVIAsgMIgmg2gACTiGQgHgEgEgMIgKgnIhIhCQgKgIgBgJQgCgIAGgHQAGgIAIgBQAIAAALAIIA3A1IAWhKQAFgMAIgEQAIgDAIADQAIAEAEAIQADAIgFAMIgeBdIALAnQADANgEAHQgEAHgJADIgGABQgFAAgFgEg");
        this.shape_4.setTransform(60.4, 47.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CC3300").s().p("Eg4oAZWMAAAgyrMBxRAAAMAAAAyrg");
        this.shape_5.setTransform(-69.4, 27.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.sdfasfd1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.instance = new lib.Mapadebits44();
        this.instance.parent = this;
        this.instance.setTransform(-17, -17);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.sdfasfd1, new cjs.Rectangle(-17, -17, 34, 34), null);


    (lib.play_btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC3300").s().p("AmTBqQgKgCgJgGQgJgFgFgFQgEgHAAgGQAAgKAGgGQAHgHALAAIAHACIAJAEIAMAFIAKABQANAAAHgGQAHgGgBgIQAAgGgBgEQgCgFgEgDIgKgFIgQgHQgagJgNgNQgOgQAAgWQAAgOAFgMQAFgKAJgJQAVgRAeABQAZgBAOAIQAOAJAAAOQAAAKgFAGQgFAGgLgBQgFABgIgFQgDgDgFgBQgFgBgFAAQgLAAgFAFQgHAFAAAJQAAAOAcAKQAQAGALAGQAMAHAHAGQAGAHAEAJQAEAKAAAMQgBAQgFAMQgGAMgKAJQgLAJgNAFQgOAEgRAAQgNAAgLgCgAGOBiQgHgHAAgKQAAgLAIgHQAGgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKABQgMAAgGgIgAALBkQgGgGgEgLIgFgTIhPAAIgGAUQgEALgFAFIgHAFQgDABgEAAQgLAAgHgHQgHgHgBgJIACgHIABgGIA4iQQAMgdAZAAQANgBAJAHQAJAHAEAOIA1CQIACAKIACAFQgBALgGAGQgHAFgKABQgJAAgGgGgAhFAWIA0ABIgahFgAjZBnQgLgBgHgGQgFgHgBgPIABiFIgdAAQgLAAgGgGQgGgFAAgLQAAgKAGgGQAGgGALABIBoAAQAKAAAGAFQAFAFACALQgBALgGAFQgGAFgLABIgcAAIABCFQgCAPgGAHQgGAHgJAAIgBAAgAEYBgQgGgHAAgPIAAiFIgdAAQgLgBgFgFQgHgFABgLQAAgLAGgEQAFgGAMAAIBngBQALABAGAFQAFAGABAKQAAALgHAFQgFAGgLgBIgcABIAACGQgBAOgGAHQgGAHgLAAQgKgBgHgGgABLBhQgGgIAAgPIAAidQAAgMAGgDQAFgFALABIApAAQAlAAAUARQAUARAAAeQAAAMgDALQgDAKgHAIQgFAHgHAFQgHAFgHACIAdAkIAHAJQADAGAAAIQgBAJgFAGQgGAGgJAAQgHAAgFgDQgGgCgFgHIgxhCIAAAyQgBAPgGAHQgGAHgLAAQgKgBgHgFgAB0gMIAQAAQAOAAAIgGQAHgGABgLQgBgLgHgHQgIgGgOAAIgQAAgAGPAkQgHgHAAgOIAAhcQABgPAGgHQAGgHALAAQAKAAAHAHQAGAGAAAQIAABbQAAAPgHAHQgGAHgLAAQgKAAgGgHg");
        this.shape.setTransform(58, 52.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#CC3300").s().p("Aheh5IC9B5Ii9B6g");
        this.shape_1.setTransform(58.7, 82.9);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FFCC00").s().p("Aj/G9Qi5hrg3jNQg3jMBqi5QBri4DNg3QDNg3C4BqQC4BrA4DNQA2DNhqC4QhqC4jOA3QhGAThDAAQiDAAh4hGg");
        this.shape_2.setTransform(58.9, 58.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#CC3300").s().p("AklH9QjTh6g/jrQg/jqB6jTQB6jTDrg/QDqg/DSB6QDTB6A/DrQA/Dqh5DTQh6DSjrA/QhQAWhNAAQiVAAiLhQg");
        this.shape_3.setTransform(58.9, 58.9);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#CC3300").s().p("AEuC8QgKgDgFgJQgFgIADgKQACgLAJgFQAIgEALACQAKADAFAJQAFAIgCAKQgEAKgIAGQgGADgGAAIgHgBgACvCXQgJgDgFgIQgFgIAEgOIAMgrIghhlQgFgOAEgIQADgJAJgEQAKgEAIAEQAJAEAFAOIAYBQIA9g5QAMgKAJABQAJABAGAIQAGAIgBAJQgBAJgLAJIhQBIIgLArQgEAOgIAFQgFADgGAAIgHgBgAE+CBQgKgDgEgIQgEgIADgPIAYhXQAEgNAIgGQAHgEAKADQAKACAFAIQAEAHgEAPIgXBXQgEAOgIAFQgFAEgHAAIgGgBgAFMA4IAAABIABgCIAAgBIgBACgAA9B7QgIgCgFgGQgEgIgBgLIgBgUIhJgUIgMARQgGAKgGAEQgEACgDAAIgHgBQgLgCgFgIQgGgJADgIIACgIIAEgFIBYh5QAUgaAYAHQAMADAGAJQAHAJABAOIAOCXIAAAJIgBAGQgDAJgHAEQgFADgFAAIgIgCgAgHAUIAvANIgGhHgAh9BGIhIgTQgNgDgDgFQgEgGADgKIApiWQADgOAJgEQAHgGAKAEQAKACAFAIQAEAIgEAOIgiB/IAxAMQAKADAEAHQAEAHgCAKQgDAKgHAEQgEACgFAAIgIgBgAliAJQgKgDgFgHQgFgIAEgOIAoiWQAEgMAHgCQAGgCAKACIAkAKQAYAGAOANQAPANAEARQAFARgGAVQgIAfgXANQgWAMgmgKIgOgDIgJAkQgEANgIAEQgFAEgGAAIgGgBgAkxhYIAOAEQAPAEAKgFQAJgEAEgNQADgNgFgKQgGgJgPgEIgOgEg");
        this.shape_4.setTransform(61.1, 48.9);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CC3300").s().p("Eg4wAZoMAAAgzPMBxhAAAMAAAAzPg");
        this.shape_5.setTransform(177.3, -13.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 117.8, 117.8);


    (lib.naranjab6mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AigChQhChDABheQABhdBChEQBChCBdAAQBeAABCBCQBCBEgBBdQAABehDBDQhDBDhdAAQheAAhBhDg");
        mask.setTransform(23.8, 25.3);

        // Layer 1
        this.instance = new lib.naranja5cu();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.999, 0.999);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.naranjab6mascara, new cjs.Rectangle(1.2, 2.6, 45.3, 45.6), null);


    (lib.naranjab5mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiKCOQg5g6ABhUQAAhSA6g8QA5g7BQAAQBRAAA5A7QA5A8gBBSQAABUg6A6Qg6A8hQgBQhQABg5g8g");
        mask.setTransform(21.5, 23.7);

        // Layer 1
        this.instance = new lib.naranja1cu();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.999, 0.999);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.naranjab5mascara, new cjs.Rectangle(2, 3.6, 39, 40.3), null);


    (lib.naranjab4mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhxBtQgvguABg/QABg/AugtQAwgtBBAAQBCAAAuAtQAwAtgBA/QgBA/gvAuQgvAthCAAQhCAAgugtg");
        mask.setTransform(16.7, 18);

        // Layer 1
        this.instance = new lib.naranja4cu();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.999, 0.999);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.naranjab4mascara, new cjs.Rectangle(0.8, 2.6, 32, 30.8), null);


    (lib.naranjab3mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiKCWQg7g7AAhVQABhUA8g8QA8g8BTAAQBUAAA8A8QA8A8gBBUQAABVg9A7Qg8A9hUAAQhUAAg7g9g");
        mask.setTransform(21, 21.1);

        // Layer 1
        this.instance = new lib.naranja3cu();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.999, 0.999);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.naranjab3mascara, new cjs.Rectangle(1.3, 1.3, 40.8, 41), null);


    (lib.naranjab2mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AizDHQhNhNABhvQAAhtBPhPQBOhOBtAAQBuAABOBOQBOBPgBBtQgBBvhPBNQhOBPhuAAQhuAAhNhPg");
        mask.setTransform(27.6, 27.8);

        // Layer 1
        this.instance = new lib.naranja2cu();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.999, 0.999);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.naranjab2mascara, new cjs.Rectangle(2, 2.3, 53.2, 53.4), null);


    (lib.naranjab1mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AigChQhChDABheQABhdBChEQBChCBdAAQBeAABCBCQBCBEgBBdQAABehDBDQhDBDhdAAQheAAhBhDg");
        mask.setTransform(23.8, 25.3);

        // Layer 1
        this.instance = new lib.naranja5cu();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.999, 0.999);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.naranjab1mascara, new cjs.Rectangle(1.2, 2.6, 45.3, 45.6), null);


    (lib.moraa6mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiNE4IgDgBIgPAAQgmAAgcgRIgEAAQgkAAgZgmQgOgTgGgZQgMAAgJgMQgFgHgCgJQgPgCgLgGQgQgJAAgNQAAgNAQgJIACgBQgVgFgQgSQgWgXABgiQAAgaANgVQgKgSAAgaQAAgeAOgVQAGgJAGgFQAFgTAJgPQASgdAZAAQAHAAAHACQAEgLAHgJIAAgFQAAgbAagTQAZgRAggBIAAgCQAAgXAZgQQAZgQAjAAQAjAAAYAQQAUANAEAQIABAAIAGABQABgaAXgSQAYgUAiAAQAkAAAYAUIACABIARgBQAQAAAOAEQAVgRAdAAQAeAAAUASQAWATAAAbIAAAFQAEAOAAASIAAAJIAFAAQAnAAAdAXQANAFAKANQALAPAEASQAFAQAAASQABAWgJAUQAEgCAEAAQARAAALAVQALAVAAAcQAAAegLAUQgKASgOADQgKAFgNAAIgMgBQAEAOAAAPQAAAPgEANIABAHQgBAZgWARQgWARgeABIgVACQAGAIAAAJQAAASgbANQgZAMgjABQgGAUgYAPQggAUguAAQgiAAgbgLIgBABQgeATgqAAQgsAAgegTgAk3B8IABAAIAAgBIgBABg");
        mask.setTransform(3.2, 3.5);

        // Layer 1
        this.instance = new lib.Bitmap44();
        this.instance.parent = this;
        this.instance.setTransform(-42.6, -35.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.moraa6mascara, new cjs.Rectangle(-39, -29.6, 84.3, 66.3), null);


    (lib.moraa5mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiNE4IgDgBIgPAAQgmAAgcgRIgEAAQgkAAgZgmQgOgTgGgZQgMAAgJgMQgFgHgCgJQgPgCgLgGQgQgJAAgNQAAgNAQgJIACgBQgVgFgQgSQgWgXABgiQAAgaANgVQgKgSAAgaQAAgeAOgVQAGgJAGgFQAFgTAJgPQASgdAZAAQAHAAAHACQAEgLAHgJIAAgFQAAgbAagTQAZgRAggBIAAgCQAAgXAZgQQAZgQAjAAQAjAAAYAQQAUANAEAQIABAAIAGABQABgaAXgSQAYgUAiAAQAkAAAYAUIACABIARgBQAQAAAOAEQAVgRAdAAQAeAAAUASQAWATAAAbIAAAFQAEAOAAASIAAAJIAFAAQAnAAAdAXQANAFAKANQALAPAEASQAFAQAAASQABAWgJAUQAEgCAEAAQARAAALAVQALAVAAAcQAAAegLAUQgKASgOADQgKAFgNAAIgMgBQAEAOAAAPQAAAPgEANIABAHQgBAZgWARQgWARgeABIgVACQAGAIAAAJQAAASgbANQgZAMgjABQgGAUgYAPQggAUguAAQgiAAgbgLIgBABQgeATgqAAQgsAAgegTgAk3B8IABAAIAAgBIgBABg");
        mask.setTransform(3.2, 3.5);

        // Layer 1
        this.instance = new lib.Bitmap44();
        this.instance.parent = this;
        this.instance.setTransform(-42.6, -35.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.moraa5mascara, new cjs.Rectangle(-39, -29.6, 84.3, 66.3), null);


    (lib.moraa4mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiNE4IgDgBIgPAAQgmAAgcgRIgEAAQgkAAgZgmQgOgTgGgZQgMAAgJgMQgFgHgCgJQgPgCgLgGQgQgJAAgNQAAgNAQgJIACgBQgVgFgQgSQgWgXABgiQAAgaANgVQgKgSAAgaQAAgeAOgVQAGgJAGgFQAFgTAJgPQASgdAZAAQAHAAAHACQAEgLAHgJIAAgFQAAgbAagTQAZgRAggBIAAgCQAAgXAZgQQAZgQAjAAQAjAAAYAQQAUANAEAQIABAAIAGABQABgaAXgSQAYgUAiAAQAkAAAYAUIACABIARgBQAQAAAOAEQAVgRAdAAQAeAAAUASQAWATAAAbIAAAFQAEAOAAASIAAAJIAFAAQAnAAAdAXQANAFAKANQALAPAEASQAFAQAAASQABAWgJAUQAEgCAEAAQARAAALAVQALAVAAAcQAAAegLAUQgKASgOADQgKAFgNAAIgMgBQAEAOAAAPQAAAPgEANIABAHQgBAZgWARQgWARgeABIgVACQAGAIAAAJQAAASgbANQgZAMgjABQgGAUgYAPQggAUguAAQgiAAgbgLIgBABQgeATgqAAQgsAAgegTgAk3B8IABAAIAAgBIgBABg");
        mask.setTransform(3.2, 3.5);

        // Layer 1
        this.instance = new lib.Bitmap44();
        this.instance.parent = this;
        this.instance.setTransform(-42.6, -35.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.moraa4mascara, new cjs.Rectangle(-39, -29.6, 84.3, 66.3), null);


    (lib.moraa3mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiNE4IgDgBIgPAAQgmAAgcgRIgEAAQgkAAgZgmQgOgTgGgZQgMAAgJgMQgFgHgCgJQgPgCgLgGQgQgJAAgNQAAgNAQgJIACgBQgVgFgQgSQgWgXABgiQAAgaANgVQgKgSAAgaQAAgeAOgVQAGgJAGgFQAFgTAJgPQASgdAZAAQAHAAAHACQAEgLAHgJIAAgFQAAgbAagTQAZgRAggBIAAgCQAAgXAZgQQAZgQAjAAQAjAAAYAQQAUANAEAQIABAAIAGABQABgaAXgSQAYgUAiAAQAkAAAYAUIACABIARgBQAQAAAOAEQAVgRAdAAQAeAAAUASQAWATAAAbIAAAFQAEAOAAASIAAAJIAFAAQAnAAAdAXQANAFAKANQALAPAEASQAFAQAAASQABAWgJAUQAEgCAEAAQARAAALAVQALAVAAAcQAAAegLAUQgKASgOADQgKAFgNAAIgMgBQAEAOAAAPQAAAPgEANIABAHQgBAZgWARQgWARgeABIgVACQAGAIAAAJQAAASgbANQgZAMgjABQgGAUgYAPQggAUguAAQgiAAgbgLIgBABQgeATgqAAQgsAAgegTgAk3B8IABAAIAAgBIgBABg");
        mask.setTransform(3.2, 3.5);

        // Layer 1
        this.instance = new lib.Bitmap44();
        this.instance.parent = this;
        this.instance.setTransform(-42.6, -35.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.moraa3mascara, new cjs.Rectangle(-39, -29.6, 84.3, 66.3), null);


    (lib.moraa2mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiNE4IgDgBIgPAAQgmAAgcgRIgEAAQgkAAgZgmQgOgTgGgZQgMAAgJgMQgFgHgCgJQgPgCgLgGQgQgJAAgNQAAgNAQgJIACgBQgVgFgQgSQgWgXABgiQAAgaANgVQgKgSAAgaQAAgeAOgVQAGgJAGgFQAFgTAJgPQASgdAZAAQAHAAAHACQAEgLAHgJIAAgFQAAgbAagTQAZgRAggBIAAgCQAAgXAZgQQAZgQAjAAQAjAAAYAQQAUANAEAQIABAAIAGABQABgaAXgSQAYgUAiAAQAkAAAYAUIACABIARgBQAQAAAOAEQAVgRAdAAQAeAAAUASQAWATAAAbIAAAFQAEAOAAASIAAAJIAFAAQAnAAAdAXQANAFAKANQALAPAEASQAFAQAAASQABAWgJAUQAEgCAEAAQARAAALAVQALAVAAAcQAAAegLAUQgKASgOADQgKAFgNAAIgMgBQAEAOAAAPQAAAPgEANIABAHQgBAZgWARQgWARgeABIgVACQAGAIAAAJQAAASgbANQgZAMgjABQgGAUgYAPQggAUguAAQgiAAgbgLIgBABQgeATgqAAQgsAAgegTgAk3B8IABAAIAAgBIgBABg");
        mask.setTransform(3.2, 3.5);

        // Layer 1
        this.instance = new lib.Bitmap44();
        this.instance.parent = this;
        this.instance.setTransform(-42.6, -35.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.moraa2mascara, new cjs.Rectangle(-39, -29.6, 84.3, 66.3), null);


    (lib.moraa1mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AiNE4IgDgBIgPAAQgmAAgcgRIgEAAQgkAAgZgmQgOgTgGgZQgMAAgJgMQgFgHgCgJQgPgCgLgGQgQgJAAgNQAAgNAQgJIACgBQgVgFgQgSQgWgXABgiQAAgaANgVQgKgSAAgaQAAgeAOgVQAGgJAGgFQAFgTAJgPQASgdAZAAQAHAAAHACQAEgLAHgJIAAgFQAAgbAagTQAZgRAggBIAAgCQAAgXAZgQQAZgQAjAAQAjAAAYAQQAUANAEAQIABAAIAGABQABgaAXgSQAYgUAiAAQAkAAAYAUIACABIARgBQAQAAAOAEQAVgRAdAAQAeAAAUASQAWATAAAbIAAAFQAEAOAAASIAAAJIAFAAQAnAAAdAXQANAFAKANQALAPAEASQAFAQAAASQABAWgJAUQAEgCAEAAQARAAALAVQALAVAAAcQAAAegLAUQgKASgOADQgKAFgNAAIgMgBQAEAOAAAPQAAAPgEANIABAHQgBAZgWARQgWARgeABIgVACQAGAIAAAJQAAASgbANQgZAMgjABQgGAUgYAPQggAUguAAQgiAAgbgLIgBABQgeATgqAAQgsAAgegTgAk3B8IABAAIAAgBIgBABg");
        mask.setTransform(3.2, 3.5);

        // Layer 1
        this.instance = new lib.Bitmap44();
        this.instance.parent = this;
        this.instance.setTransform(-42.6, -35.5);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.moraa1mascara, new cjs.Rectangle(-39, -29.6, 84.3, 66.3), null);


    (lib.cerezac6mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhJH4QgegQgjgjQg6g1gJgzQgQhWAlhFQAIgPAhgTQAggTAQgCQAUgDBIgEIg7jXQghhWgmhZQhLixgTgMIgCgjIAjADIAvCAQAyCJAOAsQAVBDAgBfQAlBtAMAbIAvgFQA0gBAhAIQAgAKAkAnQAjAnABASIACBGQAABEgXAcQgiApgUASQgeAbgjALQgjALhJAAQhEABgMgHg");
        mask.setTransform(25.7, 51.1);

        // Layer 1
        this.instance = new lib.Bitmap42();
        this.instance.parent = this;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cerezac6mascara, new cjs.Rectangle(2.7, 2.8, 48.7, 99.3), null);


    (lib.cerezac5mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhJH4QgegQgjgjQg6g1gJgzQgQhWAlhFQAIgPAhgTQAggTAQgCQAUgDBIgEIg7jXQghhWgmhZQhLixgTgMIgCgjIAjADIAvCAQAyCJAOAsQAVBDAgBfQAlBtAMAbIAvgFQA0gBAhAIQAgAKAkAnQAjAnABASIACBGQAABEgXAcQgiApgUASQgeAbgjALQgjALhJAAQhEABgMgHg");
        mask.setTransform(25.7, 51.1);

        // Layer 1
        this.instance = new lib.Bitmap42();
        this.instance.parent = this;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cerezac5mascara, new cjs.Rectangle(2.7, 2.8, 48.7, 99.3), null);


    (lib.cerezac4mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhJH4QgegQgjgjQg6g1gJgzQgQhWAlhFQAIgPAhgTQAggTAQgCQAUgDBIgEIg7jXQghhWgmhZQhLixgTgMIgCgjIAjADIAvCAQAyCJAOAsQAVBDAgBfQAlBtAMAbIAvgFQA0gBAhAIQAgAKAkAnQAjAnABASIACBGQAABEgXAcQgiApgUASQgeAbgjALQgjALhJAAQhEABgMgHg");
        mask.setTransform(25.7, 51.1);

        // Layer 1
        this.instance = new lib.Bitmap42();
        this.instance.parent = this;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cerezac4mascara, new cjs.Rectangle(2.7, 2.8, 48.7, 99.3), null);


    (lib.cerezac3mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhJH4QgegQgjgjQg6g1gJgzQgQhWAlhFQAIgPAhgTQAggTAQgCQAUgDBIgEIg7jXQghhWgmhZQhLixgTgMIgCgjIAjADIAvCAQAyCJAOAsQAVBDAgBfQAlBtAMAbIAvgFQA0gBAhAIQAgAKAkAnQAjAnABASIACBGQAABEgXAcQgiApgUASQgeAbgjALQgjALhJAAQhEABgMgHg");
        mask.setTransform(25.7, 51.1);

        // Layer 1
        this.instance = new lib.Bitmap42();
        this.instance.parent = this;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cerezac3mascara, new cjs.Rectangle(2.7, 2.8, 48.7, 99.3), null);


    (lib.cerezac2mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhJH4QgegQgjgjQg6g1gJgzQgQhWAlhFQAIgPAhgTQAggTAQgCQAUgDBIgEIg7jXQghhWgmhZQhLixgTgMIgCgjIAjADIAvCAQAyCJAOAsQAVBDAgBfQAlBtAMAbIAvgFQA0gBAhAIQAgAKAkAnQAjAnABASIACBGQAABEgXAcQgiApgUASQgeAbgjALQgjALhJAAQhEABgMgHg");
        mask.setTransform(25.7, 51.1);

        // Layer 1
        this.instance = new lib.Bitmap42();
        this.instance.parent = this;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cerezac2mascara, new cjs.Rectangle(2.7, 2.8, 48.7, 99.3), null);


    (lib.cerezac1mascara = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AhJH4QgegQgjgjQg6g1gJgzQgQhWAlhFQAIgPAhgTQAggTAQgCQAUgDBIgEIg7jXQghhWgmhZQhLixgTgMIgCgjIAjADIAvCAQAyCJAOAsQAVBDAgBfQAlBtAMAbIAvgFQA0gBAhAIQAgAKAkAnQAjAnABASIACBGQAABEgXAcQgiApgUASQgeAbgjALQgjALhJAAQhEABgMgHg");
        mask.setTransform(25.7, 51.1);

        // Layer 1
        this.instance = new lib.Bitmap42();
        this.instance.parent = this;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.cerezac1mascara, new cjs.Rectangle(2.7, 2.8, 48.7, 99.3), null);


    (lib.btn_menu = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#009999").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape.setTransform(43.3, 9.9);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AkMBcIhRhSQgKgKAKgKIBRhRQAGgFAGABIABAAIAABDQAFgCAGAAIAwAAIABAAIAAgSQABgvAxAAIHCAAQAyAAAAAyIAABbQAAAygyAAInCAAQgwAAgCgvIAAgSIgBAAIgwAAQgGAAgFgCIAABDIgBAAIgBAAQgGAAgFgEg");
        this.shape_1.setTransform(35.5, 9.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("ACAArQgMgIAAgSIAAhDIAgAAIAABAQAAAHADADQADADAGAAQAGAAADgCQAEgCABgDIAAgMIAAg6IAZAAIAABBQAAATgMAJQgLAIgSAAQgTAAgLgIgABLAxIgbgsQgGgHgFgNQACAKAAAGIAAAwIgZAAIAAhjIAdAAIAYAlQAHALADAHQgCgMAAgNIAAgeIAZAAIAABjgAhIAxIAAhjIBKAAIAAAXIgsAAIAAAPIAlAAIAAAVIglAAIAAAQIAsAAIAAAYgAh1AxIAAhGIgTBGIgTAAIgUhGIAABGIgXAAIAAhjIApAAIAOA0IAOg0IAoAAIAABjg");
        this.shape_2.setTransform(43.3, 9.9);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("AgXAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAIAvAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
        this.shape_3.setTransform(13.4, 9.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AAlBcIhQhSQgLgKALgKIBQhRQAFgFAGABIABAAIAAC/IgBAAIgBAAQgFAAgFgEg");
        this.shape_4.setTransform(5, 9.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AjgBgQgxAAgBgvIAAhhQABgvAxAAIHBAAQAyAAAAAyIAABbQAAAygyAAg");
        this.shape_5.setTransform(43.5, 9.6);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#009999").s().p("ApDC0IAAlnISHAAIAAFng");
        this.shape_6.setTransform(49.5, 10.6);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 2).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 71, 19.3);


    (lib.box = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AljGKIAAsTILHAAIAAMTg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-35.6, -39.4, 71.3, 78.9), null);


    (lib.biencartelwelldone = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AKZBOQgGgEAAgJQAAgGAGgEQAEgFAHgBQAHABAEAFQAFAEABAGQgBAIgFAFQgEAEgHAAQgGAAgFgEgAHABRIgGgEIgGgGIgFgHIg8hcIAABcQgBAJgEAFQgEAEgHAAQgGAAgEgEQgEgFAAgJIAAh6QAAgHABgFQACgFAFgDQAEgDAGAAQAEAAADABIAGAEIAFAGIAEAIIA/BdIAAhdQgBgKAEgFQAFgEAGAAQAHAAAEAEQAEAFAAAKIAAB8QAAAUgRAAIgIgBgADJBMQgOgGgKgLQgKgLgFgPQgFgQAAgRQAAgRAGgQQAFgPAJgLQAKgLAOgFQAPgGASAAQAZAAARAKQATAKAIASQAJATAAAYQAAATgEAPQgFAPgLALQgKAKgOAGQgOAGgTAAQgTAAgPgGgADZg0QgJAEgGAHQgFAGgEALQgEAMABAMQgBANAEALQAEALAFAIQAHAGAIAEQAIAEAKgBQAMAAAKgFQAKgHAHgNQAGgNAAgSQAAgRgGgMQgFgOgLgGQgLgHgNABQgJAAgIADgAorBPQgEgEgCgEIgFgQIgZhfIgaBfIgFAPQgCAFgEAEQgFADgIAAQgFAAgEgCQgEgCgCgEIgEgKIgDgKIgbhqIgBgPQAAgGADgEQAFgEAGAAQAJAAADAFQADAHACAKIAVBcIAXhWIAFgPQACgGAFgDQAEgEAJAAQAHAAAFAEQAEAEADAEIAEAQIAXBWIAVhcIAEgLQABgFADgDQADgDAGAAQAHAAAEAEQAEAEABAGQgBAFgCAKIgaBqIgFAQQgCAEgEAFQgEADgIAAQgIAAgEgDgAIQBQQgKgBgFgEQgEgFgBgKIAAh3QAAgGACgFQADgFAEgBQAEgCAHgBIBVAAQAIABADADQAEAEAAAFQAAAFgEAEQgDADgIABIhIAAIAAAmIBCAAQAHABAEADQAEADAAAGQAAAEgEAEQgEADgHAAIhCAAIAAAtIBKAAQAIAAAEADQADAEABAGQgBAGgDADQgEADgIABgAAVBQQgJgBgEgCQgEgDgCgEQgCgGABgHIAAh0QgBgKAFgEQAFgGALAAIApAAQAQABAMADQAMADAJAIQAZAWAAAqQAAAOgCAMQgCALgGAKQgFAJgJAIQgFAGgIADQgIAEgIABQgJABgLABgAAgA2IAZAAIAMAAIAKgCQAFgCADgEQARgNgBghQABgXgIgLQgGgMgLgEQgLgDgOAAIgWAAgAipBQQgKgBgFgEQgFgFAAgKIAAh6QAAgJAEgFQAFgFAHAAQAHAAAFAFQAFAEgBAKIAABzIBBAAQAIAAAFAEQADAEAAAFQAAAGgDAEQgFADgIABgAkvBQQgKgBgFgEQgFgFAAgKIAAh6QAAgJAEgFQAFgFAHAAQAIAAAEAFQAFAEgBAKIAABzIBCAAQAIAAAEAEQADAEAAAFQAAAGgDAEQgEADgIABgAnCBQQgLgBgEgEQgFgFAAgKIAAh3QAAgGACgFQACgFAEgBQAFgCAHgBIBUAAQAIABAEADQAEAEAAAFQAAAFgEAEQgEADgIABIhIAAIAAAmIBCAAQAIABAEADQADADABAGQgBAEgDAEQgEADgIAAIhCAAIAAAtIBLAAQAHAAAFADQADAEAAAGQAAAGgDADQgFADgHABgAKcAaQgDgFgBgLIgEgyIgBgWQAAgJAGgFQAEgFAIAAQAJAAADAHQAEAGAAAMIgBAOIgFA1QgBAJgCAGQgDAEgFAAQgHABgBgFg");
        this.shape.setTransform(83.5, 20.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#663300").s().p("AtTDFIAAmJQNfCPNIiPIAAGJQtUhgtTBgg");
        this.shape_1.setTransform(85.2, 19.7);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }).prototype = getMCSymbolPrototype(lib.biencartelwelldone, new cjs.Rectangle(0, 0, 170.4, 39.5), null);


    (lib.bienavionmc = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AuMHRIO6lSIrjiDIi5A9IlrAKIGxhoIAKgjIAZgWIhamEIB4AAICiFjIAPADICRg8IBxAWIghAwIi2BBIAWAZID1AiIELAWID4APIAZgeIL2oEIDIAgIAABnIoNFlIAKAgICJBuIB7APIAFBVIiAAFIgZgHInPg/IsVEvIlrAbg");
        mask.setTransform(130.9, 53.7);

        // Layer 1
        this.instance = new lib.avioncito();
        this.instance.parent = this;

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bienavionmc, new cjs.Rectangle(6.7, 3.7, 248.4, 100.1), null);


    (lib.bienavionhelice = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AlnCrQgEgNAFgQIAGgOQAAgjA2geQAagOAbgIID2gmIBOgaIgDAVQAAACgEACQgKAEgXAAQgMAAgbAbQgkAmgYAXQhgBahcANQgaAEgTAAQg4AAgKgegAELiXQAxgdAtgUQgdBKiBA5QgZALgcAJQAUgsBhg6g");
        mask.setTransform(39.9, 22.4);

        // Layer 1
        this.instance = new lib.avioncitohelice();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.999, 0.999);

        var maskedShapeInstanceList = [this.instance];

        for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bienavionhelice, new cjs.Rectangle(3.8, 2.4, 72.3, 40.2), null);


    (lib.naranjab6cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // Capa 1
        this.instance = new lib.naranjab6mascara();
        this.instance.parent = this;
        this.instance.setTransform(0.6, -0.4, 1, 1, 0, 0, 0, 24.4, 24.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 0.9,
            y: 239.8
        }, 60).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-23.8, -25.3, 49, 50);


    (lib.naranjab5cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // Capa 1
        this.instance = new lib.naranjab5mascara();
        this.instance.parent = this;
        this.instance.setTransform(0, -0.2, 1, 1, 0, 0, 0, 21.5, 23.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 11.2,
            y: 247.9
        }, 60).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.5, -23.7, 43, 47);


    (lib.naranjab4cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_56 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(1));

        // Capa 1
        this.instance = new lib.naranjab4mascara();
        this.instance.parent = this;
        this.instance.setTransform(0.2, -0.6, 1, 1, 0, 0, 0, 16.9, 17.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            y: 219.4
        }, 56).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-16.7, -18, 34, 35);


    (lib.naranjab3cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // Capa 1
        this.instance = new lib.naranjab3mascara();
        this.instance.parent = this;
        this.instance.setTransform(0.3, 0.2, 1, 1, 0, 0, 0, 21.9, 21.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 1,
            y: 180.7
        }, 49).to({
            x: 26.3,
            y: 195.9
        }, 11).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.6, -21.7, 44, 44);


    (lib.naranjab2cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_44 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

        // Capa 1
        this.instance = new lib.naranjab2mascara();
        this.instance.parent = this;
        this.instance.setTransform(0.4, 0.1, 1, 1, 0, 0, 0, 29, 29);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: -1.4,
            y: 139.6
        }, 44).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-28.6, -28.9, 58, 58);


    (lib.naranjab1cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_35 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

        // Capa 3
        this.instance = new lib.naranjab1mascara();
        this.instance.parent = this;
        this.instance.setTransform(0.5, -0.3, 0.741, 0.741, 0, 0, 0, 24.4, 24.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            y: 110.2
        }, 35).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-17.6, -18.7, 36.3, 37);


    (lib.moraa6cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // Capa 1
        this.clip1 = new lib.moraa6mascara();
        this.clip1.name = "clip1";
        this.clip1.parent = this;
        this.clip1.setTransform(24.1, 3.9, 0.452, 0.452, -30, 0, 0, 45, 37.6);

        this.timeline.addTween(cjs.Tween.get(this.clip1).to({
            x: 18.9,
            y: 198.1
        }, 33).to({
            rotation: -162.3,
            x: -50.9,
            y: 178.5
        }, 27).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-26.8, -25.2, 52.3, 49.7);


    (lib.moraa5cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_46 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

        // Capa 1
        this.instance = new lib.moraa5mascara();
        this.instance.parent = this;
        this.instance.setTransform(9.7, 25.5, 0.504, 0.504, 30, 0, 0, 45, 37.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 0.8,
            y: 218.5
        }, 46).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-29, -28.5, 58.2, 55.5);


    (lib.moraa4cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_51 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

        // mora
        this.instance = new lib.moraa4mascara();
        this.instance.parent = this;
        this.instance.setTransform(19.4, 3.1, 0.364, 0.364, -30, 0, 0, 45, 37.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 14.5,
            y: 206.2
        }, 51).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.5, -20.3, 42.1, 40.1);


    (lib.moraa3cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // mora
        this.instance = new lib.moraa3mascara();
        this.instance.parent = this;
        this.instance.setTransform(0.5, 2.3, 0.604, 0.604, -105, 0, 0, -0.8, 3.2);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            y: 159.8
        }, 46).to({
            regY: 3.1,
            scaleX: 0.6,
            rotation: 19.5,
            x: 28.1,
            y: 170.1
        }, 14).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-29.6, -31.4, 57.8, 64.2);


    (lib.moraa2cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // mora
        this.instance = new lib.moraa2mascara();
        this.instance.parent = this;
        this.instance.setTransform(-2.4, -1.3, 0.452, 0.452, 15, 0, 0, -2.8, 2.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: -2.7,
            rotation: 52.5,
            x: -1.8,
            y: 181.2
        }, 53).to({
            regX: -2.8,
            regY: 2.3,
            rotation: 17,
            x: 12,
            y: 189.1
        }, 7).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.1, -22.4, 48.1, 43.3);


    (lib.moraa1cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // mora
        this.clip6 = new lib.moraa1mascara();
        this.clip6.name = "clip6";
        this.clip6.parent = this;
        this.clip6.setTransform(-1.9, 0, 0.408, 0.408, -45);

        this.timeline.addTween(cjs.Tween.get(this.clip6).to({
            rotation: 135,
            y: 146.1
        }, 40).to({
            rotation: 195,
            x: 45.6,
            y: 165.2
        }, 20).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.4, -24, 47.7, 47.7);


    (lib.cerezac6cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_45 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(1));

        // Capa 1
        this.instance = new lib.cerezac5mascara();
        this.instance.parent = this;
        this.instance.setTransform(0, -0.2, 0.589, 0.589, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regY: 52.1,
            rotation: -15,
            x: -17.6,
            y: 146.3
        }, 45).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.9, -30.9, 31.8, 61.3);


    (lib.cerezac5escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            sarasa: 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.c5.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz03");
            this.stop();
            this.parent.c5.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(17, 48.1, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.cerezac6cayendo();
        this.instance.parent = this;
        this.instance.setTransform(14.4, 29, 1, 1, 0, 0, 0, 0, -0.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.cerezac5mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(14.4, 29, 0.589, 0.589, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5, -1.6, 33.2, 64.6);


    (lib.cerezac5cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_42 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(1));

        // Capa 1
        this.instance = new lib.cerezac6mascara();
        this.instance.parent = this;
        this.instance.setTransform(0, -0.4, 1, 1, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 27.1,
            regY: 52.1,
            rotation: 15,
            x: -16.2,
            y: 99.7
        }, 42).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27, -52.4, 54, 104);


    (lib.cerezac4cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // Capa 1
        this.instance = new lib.cerezac4mascara();
        this.instance.parent = this;
        this.instance.setTransform(0, -0.2, 0.589, 0.589, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 27.1,
            regY: 52.1,
            rotation: 15,
            x: -1.9,
            y: 173.1
        }, 60).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-15.9, -30.9, 31.8, 61.3);


    (lib.cerezac3cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_50 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

        // Capa 1
        this.instance = new lib.cerezac3mascara();
        this.instance.parent = this;
        this.instance.setTransform(0, -0.4, 0.795, 0.795, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 6,
            y: 143.7
        }, 50).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-21.4, -41.7, 42.9, 82.7);


    (lib.cerezac2cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // Capa 1
        this.instance = new lib.cerezac2mascara();
        this.instance.parent = this;
        this.instance.setTransform(0, -0.1, 0.425, 0.425, 0, 0, 0, 26.9, 52.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            rotation: -15,
            x: -4.8,
            y: 190
        }, 60).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-11.4, -22.2, 23, 44.2);


    (lib.cerezac1cayendo = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_60 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

        // Capa 1
        this.instance = new lib.cerezac1mascara();
        this.instance.parent = this;
        this.instance.setTransform(0, -0.2, 0.63, 0.63, 0, 0, 0, 26.9, 52.1);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            y: 141.1
        }, 40).to({
            regX: 27.1,
            regY: 52,
            rotation: 30,
            x: 41.2,
            y: 158.7
        }, 20).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-17, -33, 34.1, 65.6);


    (lib.caverman = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Capa 2
        this.dot1 = new lib.sdfasfd1();
        this.dot1.name = "dot1";
        this.dot1.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.dot1).wait(1));

    }).prototype = getMCSymbolPrototype(lib.caverman, new cjs.Rectangle(-17, -17, 34, 34), null);


    (lib.bienavion = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 2
        this.instance = new lib.bienavionhelice();
        this.instance.parent = this;
        this.instance.setTransform(213.8, 69.8, 1, 1, 0, 0, 0, 40, 23.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            rotation: 75,
            x: 210,
            y: 60.5
        }, 4).to({
            rotation: 150,
            x: 221.8,
            y: 61.7
        }, 5).to({
            regX: 39.9,
            rotation: 255,
            x: 220.3,
            y: 76.1
        }, 5).to({
            regX: 40,
            rotation: 360,
            x: 210.4,
            y: 72.5
        }, 5).wait(1));

        // Layer 1
        this.instance_1 = new lib.bienavionmc();
        this.instance_1.parent = this;
        this.instance_1.setTransform(122.7, 50.4, 1, 1, 0, 0, 0, 129.4, 54);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

        // Layer 3
        this.instance_2 = new lib.biencartelwelldone();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-49.2, 43.4, 1, 1, 0, 0, 0, 85.2, 19.7);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-134.4, -3.6, 388.1, 108);


    (lib.bien = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_1 = function() {
            playSound("motor");
        }
        this.frame_69 = function() {
            playSound("Applause");
        }
        this.frame_176 = function() {
            this.stop();
            this.parent.playagain_btn.visible = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(68).call(this.frame_69).wait(107).call(this.frame_176).wait(1));

        // Layer 1
        this.instance = new lib.bienavion();
        this.instance.parent = this;
        this.instance.setTransform(257.2, 50.3, 1, 1, 0, 0, 0, 122.8, 50.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            x: 1494.7
        }, 176).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -3.6, 388.1, 108);


    (lib.naranjab6escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.b6.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz02");
            this.stop();
            this.parent.b6.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(23.3, 22.4, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.naranjab6cayendo();
        this.instance.parent = this;
        this.instance.setTransform(23.3, 22.4, 1, 1, 0, 0, 0, 0.7, -0.4);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.naranjab6mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(23.2, 22.4, 1, 1, 0, 0, 0, 24.4, 24.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.2, -2.5, 49, 49.9);


    (lib.naranjab5escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.b5.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz03");
            this.stop();
            this.parent.b5.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(19.5, 20, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.naranjab5cayendo();
        this.instance.parent = this;
        this.instance.setTransform(19.4, 19.9, 1, 1, 0, 0, 0, -0.1, -0.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.naranjab5mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.5, 20, 1, 1, 0, 0, 0, 21.5, 23.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2, -3.5, 43, 46.9);


    (lib.naranjab4escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.b4.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz04");
            this.stop();
            this.parent.b4.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(17.4, 15, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.naranjab4cayendo();
        this.instance.parent = this;
        this.instance.setTransform(16.2, 14.8, 1, 1, 0, 0, 0, 0.2, -0.6);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.naranjab4mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(16.2, 14.8, 1, 1, 0, 0, 0, 16.9, 17.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.7, -2.6, 34, 35);


    (lib.naranjab3escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.b3.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz05");
            this.stop();
            this.parent.b3.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(20.7, 20.7, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.naranjab3cayendo();
        this.instance.parent = this;
        this.instance.setTransform(20.8, 20.8, 1, 1, 0, 0, 0, 0.4, 0.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.naranjab3mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(20.7, 20.7, 1, 1, 0, 0, 0, 21.9, 21.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.2, -1.2, 44, 44);


    (lib.naranjab2escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.b2.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz01");
            this.stop();
            this.parent.b2.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(27, 26.8, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.naranjab2cayendo();
        this.instance.parent = this;
        this.instance.setTransform(27, 26.8, 1, 1, 0, 0, 0, 0.4, 0.1);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.naranjab2mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(27, 26.8, 1, 1, 0, 0, 0, 29, 29);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2, -2.2, 58, 58);


    (lib.naranjab1escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.b1.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz02");
            this.stop();
            this.parent.b1.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(17.1, 17.4, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.naranjab1cayendo();
        this.instance.parent = this;
        this.instance.setTransform(17.3, 16.6, 1, 1, 0, 0, 0, 0.5, -0.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.naranjab1mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(17.2, 16.6, 0.741, 0.741, 0, 0, 0, 24.4, 24.9);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.9, -1.9, 36.3, 37);


    (lib.moraa6escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.a6.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz01");
            this.stop();
            this.parent.a6.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(23.8, 23, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.moraa6cayendo();
        this.instance.parent = this;
        this.instance.setTransform(23.3, 22.1, 1, 1, 0, 0, 0, -0.7, -0.4);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.clip1 = new lib.moraa6mascara();
        this.clip1.name = "clip1";
        this.clip1.parent = this;
        this.clip1.setTransform(48.1, 26.4, 0.452, 0.452, -30, 0, 0, 45, 37.6);

        this.timeline.addTween(cjs.Tween.get(this.clip1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.8, -2.7, 52.3, 49.7);


    (lib.moraa5escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.a5.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz05");
            this.stop();
            this.parent.a5.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(27.6, 24.6, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.moraa5cayendo();
        this.instance.parent = this;
        this.instance.setTransform(26.7, 24.3, 1, 1, 0, 0, 0, 0, -0.8);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.moraa5mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(36.4, 50.5, 0.504, 0.504, 30, 0, 0, 45, 37.6);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.3, -3.5, 58.2, 55.5);


    (lib.moraa4escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.a4.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz04");
            this.stop();
            this.parent.a4.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(18.6, 17, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.moraa4cayendo();
        this.instance.parent = this;
        this.instance.setTransform(18.8, 17.7, 1, 1, 0, 0, 0, -0.5, -0.4);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta quieta
        this.instance_1 = new lib.moraa4mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(38.7, 21.2, 0.364, 0.364, -30, 0, 0, 45, 37.4);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.2, -2.2, 42.1, 40.1);


    (lib.moraa3escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.a3.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz02");
            this.stop();
            this.parent.a3.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(26.8, 30.4, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.moraa3cayendo();
        this.instance.parent = this;
        this.instance.setTransform(25.2, 30.5, 1, 1, 0, 0, 0, -0.7, 0.7);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta quieta
        this.instance_1 = new lib.moraa3mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(26.4, 32.1, 0.604, 0.604, -105, 0, 0, -0.8, 3.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.7, -1.7, 57.8, 64.2);


    (lib.moraa2escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.a2.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz03");
            this.stop();
            this.parent.a2.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(20, 18.9, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // mora cayendo
        this.instance = new lib.moraa2cayendo();
        this.instance.parent = this;
        this.instance.setTransform(22.2, 18.6, 1, 1, 0, 0, 0, -0.1, -0.8);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // mora quieta
        this.instance_1 = new lib.moraa2mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.9, 18.1, 0.452, 0.452, 15, 0, 0, -2.8, 2.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.8, -3, 48.1, 43.3);


    (lib.moraa1escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.a1.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz01");
            this.stop();
            this.parent.a1.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(19.8, 21.7, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.moraa1cayendo();
        this.instance.parent = this;
        this.instance.setTransform(21, 21.5, 1, 1, 0, 0, 0, -0.7, -0.2);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta quieta
        this.instance_1 = new lib.moraa1mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.8, 21.7, 0.408, 0.408, -45);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.7, -2.3, 47.7, 47.7);


    (lib.cerezac6escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.c6.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz02");
            this.stop();
            this.parent.c6.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(27.3, 81.3, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.cerezac5cayendo();
        this.instance.parent = this;
        this.instance.setTransform(24.4, 49.2, 1, 1, 0, 0, 0, 0, -0.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.cerezac6mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(24.4, 49.2, 1, 1, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.6, -2.8, 54, 104);


    (lib.cerezac4escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.c4.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz01");
            this.stop();
            this.parent.c4.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(17.5, 47.5, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.cerezac4cayendo();
        this.instance.parent = this;
        this.instance.setTransform(14.4, 29, 1, 1, 0, 0, 0, 0, -0.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.cerezac4mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(14.4, 29, 0.589, 0.589, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.5, -1.6, 33.7, 64);


    (lib.cerezac3escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.c3.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz05");
            this.stop();
            this.parent.c3.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(21.3, 64.1, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.cerezac3cayendo();
        this.instance.parent = this;
        this.instance.setTransform(19.4, 39.1, 1, 1, 0, 0, 0, 0, -0.4);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.cerezac3mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.4, 39.1, 0.795, 0.795, 0, 0, 0, 27, 52);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2.1, -2.2, 42.9, 82.7);


    (lib.cerezac2escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.c2.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz04");
            this.stop();
            this.parent.c2.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(11.5, 34.5, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.cerezac2cayendo();
        this.instance.parent = this;
        this.instance.setTransform(10.3, 20.9, 1, 1, 0, 0, 0, 0, -0.2);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.cerezac2mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(10.3, 21, 0.425, 0.425, 0, 0, 0, 26.9, 52.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-3.1, -1.2, 29.3, 50.5);


    (lib.cerezac1escenario = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "sarasa": 1
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
            this.parent.c1.isGoal = false;
        }
        this.frame_1 = function() {
            playSound("manz03");
            this.stop();
            this.parent.c1.isGoal = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

        // box
        this.box = new lib.box();
        this.box.name = "box";
        this.box.parent = this;
        this.box.setTransform(16.1, 53, 0.411, 0.378, 0, 0, 0, 0, 0.1);
        this.box.alpha = 0.012;

        this.timeline.addTween(cjs.Tween.get(this.box).to({
            _off: true
        }, 1).wait(1));

        // fruta cayendo
        this.instance = new lib.cerezac1cayendo();
        this.instance.parent = this;
        this.instance.setTransform(15.4, 31, 1, 1, 0, 0, 0, 0, -0.3);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            _off: false
        }, 0).wait(1));

        // fruta
        this.instance_1 = new lib.cerezac1mascara();
        this.instance_1.parent = this;
        this.instance_1.setTransform(15.3, 31.1, 0.63, 0.63, 0, 0, 0, 26.9, 52.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            _off: true
        }, 1).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-1.6, -1.7, 34.1, 69.6);


    // stage content:
    (lib._02movertouchcanastas = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            bien: 2,
            "bien": 2
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            createjs.Touch.enable(stage);




            //this.caverman.cacheAsBitmap = true;
            // por si el navegador no es capaz de leer la extensión mp3
            createjs.Sound.alternateExtensions = ["ogg"];

            // BOTON PLAY
            this.play_btn.addEventListener("click", fl_MouseClickHandler.bind(this));

            function fl_MouseClickHandler() {


                this.gotoAndPlay("nextframe");
                //this.play_snd.play();
            }


            this.menu_btn.addEventListener("click", navega);

            function navega() {
                window.open("//www.freshteacher.software", "_parent");
            }
        }
        this.frame_1 = function() {
            stage.canvas.style.cursor = "none";
            this.caverman.mouseEnabled = false;


            this.addEventListener("tick", fl_CustomMouseCursor.bind(this));



            function fl_CustomMouseCursor() {
                this.caverman.x = stage.mouseX / stage.scaleX;
                this.caverman.y = stage.mouseY / stage.scaleY;
            }
            this.stop();


            this.on("tick", update.bind(this));


            function update(evt) {
                //MORA 01
                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.a1.box);

                if (this.a1.box.hitTest(pt.x, pt.y)) {
                    this.a1.gotoAndStop("sarasa");
                }


                //MORA 02

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.a2.box);

                if (this.a2.box.hitTest(pt.x, pt.y)) {
                    this.a2.gotoAndStop("sarasa");

                }

                //MORA 03

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.a3.box);

                if (this.a3.box.hitTest(pt.x, pt.y)) {
                    this.a3.gotoAndStop("sarasa");

                }

                //MORA 04

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.a4.box);

                if (this.a4.box.hitTest(pt.x, pt.y)) {
                    this.a4.gotoAndStop("sarasa");

                }




                //MORA 05

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.a5.box);

                if (this.a5.box.hitTest(pt.x, pt.y)) {
                    this.a5.gotoAndStop("sarasa");

                }



                //MORA 06

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.a6.box);

                if (this.a6.box.hitTest(pt.x, pt.y)) {
                    this.a6.gotoAndStop("sarasa");

                }




                //NARANJA 01

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.b1.box);

                if (this.b1.box.hitTest(pt.x, pt.y)) {
                    this.b1.gotoAndStop("sarasa");

                }


                //NARANJA 02
                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.b2.box);

                if (this.b2.box.hitTest(pt.x, pt.y)) {
                    this.b2.gotoAndStop("sarasa");

                }


                //NARANJA 03
                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.b3.box);

                if (this.b3.box.hitTest(pt.x, pt.y)) {
                    this.b3.gotoAndStop("sarasa");

                }


                //NARANJA 04
                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.b4.box);

                if (this.b4.box.hitTest(pt.x, pt.y)) {
                    this.b4.gotoAndStop("sarasa");

                }


                //NARANJA 05

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.b5.box);

                if (this.b5.box.hitTest(pt.x, pt.y)) {
                    this.b5.gotoAndStop("sarasa");
                }


                //NARANJA 06
                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.b6.box);

                if (this.b6.box.hitTest(pt.x, pt.y)) {
                    this.b6.gotoAndStop("sarasa");

                }





                //CEREZAS 01

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.c1.box);

                if (this.c1.box.hitTest(pt.x, pt.y)) {
                    this.c1.gotoAndStop("sarasa");

                }

                //CEREZAS 02

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.c2.box);

                if (this.c2.box.hitTest(pt.x, pt.y)) {
                    this.c2.gotoAndStop("sarasa");

                }




                //CEREZAS 03

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.c3.box);

                if (this.c3.box.hitTest(pt.x, pt.y)) {
                    this.c3.gotoAndStop("sarasa");

                }



                //CEREZAS 04

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.c4.box);

                if (this.c4.box.hitTest(pt.x, pt.y)) {
                    this.c4.gotoAndStop("sarasa");

                }



                //CEREZAS 05

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.c5.box);

                if (this.c5.box.hitTest(pt.x, pt.y)) {
                    this.c5.gotoAndStop("sarasa");

                }


                //CEREZAS 06

                var pt = this.caverman.localToLocal(this.caverman.dot1.x,
                    this.caverman.dot1.y, this.c6.box);

                if (this.c6.box.hitTest(pt.x, pt.y)) {
                    this.c6.gotoAndStop("sarasa");

                }





                //CHEQUEO TODAS

                if (this.a1.isGoal && this.a2.isGoal && this.a3.isGoal && this.a4.isGoal &&
                    this.a5.isGoal && this.a6.isGoal

                    &&
                    this.b1.isGoal && this.b2.isGoal && this.b3.isGoal && this.b4.isGoal &&
                    this.b5.isGoal && this.b6.isGoal

                    &&
                    this.c1.isGoal && this.c2.isGoal && this.c3.isGoal && this.c4.isGoal &&
                    this.c5.isGoal && this.c6.isGoal


                ) {
                    console.log("Se activaron todas las cartas");
                    this.gotoAndStop("bien");
                    this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
                    stage.canvas.style.cursor = "default";
                }

            }
        }
        this.frame_2 = function() {
            this.stop();

            this.playagain_btn.visible = false;
            this.a1.isGoal = false;



            // BOTON OTRA VEZ
            this.playagain_btn.addEventListener("click", Chan.bind(this));

            function Chan() {
                this.bien.gotoAndStop(0);

                this.gotoAndStop(1);

                //hago visibles (y de paso Goal = false) a las frutas
                this.a1.gotoAndStop(0);
                this.a2.gotoAndStop(0);
                this.a3.gotoAndStop(0);
                this.a4.gotoAndStop(0);
                this.a5.gotoAndStop(0);
                this.a6.gotoAndStop(0);

                this.b1.gotoAndStop(0);
                this.b2.gotoAndStop(0);
                this.b3.gotoAndStop(0);
                this.b4.gotoAndStop(0);
                this.b5.gotoAndStop(0);
                this.b6.gotoAndStop(0);

                this.c1.gotoAndStop(0);
                this.c2.gotoAndStop(0);
                this.c3.gotoAndStop(0);
                this.c4.gotoAndStop(0);
                this.c5.gotoAndStop(0);
                this.c6.gotoAndStop(0);


            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

        // mc mouse
        this.caverman = new lib.caverman();
        this.caverman.name = "caverman";
        this.caverman.parent = this;
        this.caverman.setTransform(0, 351.4);
        this.caverman._off = true;

        this.timeline.addTween(cjs.Tween.get(this.caverman).wait(1).to({
            _off: false
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // marco
        this.shape = new cjs.Shape();
        // this.shape.graphics.f("#FFFFFF").s().p("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");
        this.shape.setTransform(360.8, 21);

        this.menu_btn = new lib.btn_menu();
        this.menu_btn.name = "menu_btn";
        this.menu_btn.parent = this;
        this.menu_btn.setTransform(52.1, 26.5, 1, 1, 0, 0, 0, 41.4, 17.4);
        new cjs.ButtonHelper(this.menu_btn, 0, 1, 2, false, new lib.btn_menu(), 3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#009999").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5VgEg2ZAYAQAiBvCtAAMBmKAAAIACgwIA9AAIgHglIAnAFQAvAEAogJQB9geABiYMAAAgodIg3gDIAAg0IgrAFIAIghQADgqgKgjQgjhuitAAMhmJAAAIgDAwIg8AAIAHAlQg+gPhAAPQh9AegBCYMAAAAocIA4AEIAAA1IAqgGQgSA2ARA3g");
        this.shape_1.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.menu_btn
            }, {
                t: this.shape
            }]
        }).wait(3));

        // instrucciones
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#F29125").s().p("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");
        this.shape_2.setTransform(122.2, 143.5);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("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");
        this.shape_3.setTransform(127.8, 81);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AlJCjIE2oRIFdDMIk2IRg");
        this.shape_4.setTransform(147.8, 237.4);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#CCCCCC").s().p("ABCAtIiKhPQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAIAEgDIAEABICJBPIADADIgCAFIgDADIgBAAIgDgBg");
        this.shape_5.setTransform(166, 206);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#CCCCCC").s().p("AgLAWQgJgFgDgLQgDgJAFgJQAFgIALgDQAJgDAJAGQAIAEADALQACAJgFAJQgFAIgJADIgHABQgGAAgFgDg");
        this.shape_6.setTransform(129.5, 271.9);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#333333").s().p("AgvHfIlbjLQgrgYAVgkIGRqrQAUgkArAYIFbDLQArAZgVAlImRKrQgMAVgTAAQgOAAgSgLg");
        this.shape_7.setTransform(146, 239.6);

        this.play_btn = new lib.play_btn();
        this.play_btn.name = "play_btn";
        this.play_btn.parent = this;
        this.play_btn.setTransform(247.4, 274.9, 1, 1, 0, 0, 0, 59, 59);
        new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#CCCCCC").s().p("AhkCwQgDgDAAgEQAAgEADgDIBzhzIAmguQgZgghRgoIhXgkQgEgCgCgEQgCgEACgDQACgEAEgCQADgCAEACIBYAlIABAAQBQAoAdAjQA/hZAAhBQAAgEADgDQACgDAFAAQAEAAADADQADACAAAFQABBKhMBmIgBAAQgTAZgYAcIAAAAIhzBzQgDADgEAAQgEAAgDgDg");
        this.shape_8.setTransform(77.3, 294.7);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#333333").s().p("AA0ENQhvgUhfhfQhehegVhuQgVhxBAg/QBAhABwAVQBuAWBeBdQBeBfAWBvQAVBvhBBAQgvAwhKAAQgZAAgcgGg");
        this.shape_9.setTransform(88.6, 302.5);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#333333").s().p("AFyFZQg4gJgsgkQgugmgTg0QgJgZgGgtQgHg0gEgQIAAgBQgHgkgRgbIAAABQgUgbgdgIIAAgBQglgKg8AeQhQAmgdAEQgmAEgkgUIAAAAQgkgTgQgjIAAgBQgPgcgCgqIAAAAQAAgxgCgYIAAgBQAAg2gZgoIAAgBQgZgsgpgFIgBAAQgPgBgQAFQgEABgEgCQgDgCgBgEQgCgEADgEQACgDAEgBQATgGATABIAAAAQA0AFAfA2IgBAAQAcAtAAA8IAAAAQACAZAAAxQACAlANAYIAAABQANAeAfAQQAeAQAggDQAbgEBLgkIAAAAQBFgiArANQAjAKAYAiQAUAdAIApIAAgBQAEAQAHA2IAAABQAGAqAIAXQARAvAqAiQAoAhAzAJQAEAAACAEQACADAAAEQgBAEgDADQgDABgDAAIgCAAg");
        this.shape_10.setTransform(33.7, 256);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#666666").s().p("A9RapMAAAg1RMAnfAAAUgFnAmHAYrAPKg");
        this.shape_11.setTransform(192.7, 184.2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_9
            }, {
                t: this.shape_8
            }, {
                t: this.play_btn
            }, {
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).to({
            state: []
        }, 1).wait(2));

        // otra vez
        this.playagain_btn = new lib.welldone();
        this.playagain_btn.name = "playagain_btn";
        this.playagain_btn.parent = this;
        this.playagain_btn.setTransform(494.1, 236.2, 1, 1, 0, 0, 0, 58.9, 58.9);
        this.playagain_btn._off = true;
        new cjs.ButtonHelper(this.playagain_btn, 0, 1, 2, false, new lib.welldone(), 3);

        this.timeline.addTween(cjs.Tween.get(this.playagain_btn).wait(2).to({
            _off: false
        }, 0).wait(1));

        // bien avion
        this.bien = new lib.bien();
        this.bien.name = "bien";
        this.bien.parent = this;
        this.bien.setTransform(-242, 138.8, 1, 1, 0, 0, 0, 194.1, 50.3);
        this.bien._off = true;

        this.timeline.addTween(cjs.Tween.get(this.bien).wait(2).to({
            _off: false
        }, 0).wait(1));

        // frutas
        this.c1 = new lib.cerezac1escenario();
        this.c1.name = "c1";
        this.c1.parent = this;
        this.c1.setTransform(558.5, 136.2, 0.917, 0.917, 0, 0, 0, 15.4, 31);

        this.c2 = new lib.cerezac2escenario();
        this.c2.name = "c2";
        this.c2.parent = this;
        this.c2.setTransform(577.8, 108.9, 0.917, 0.917, 0, 0, 0, 10.3, 20.9);

        this.c4 = new lib.cerezac4escenario();
        this.c4.name = "c4";
        this.c4.parent = this;
        this.c4.setTransform(620.8, 113.8, 0.917, 0.917, 0, 0, 0, 14.3, 29);

        this.c3 = new lib.cerezac3escenario();
        this.c3.name = "c3";
        this.c3.parent = this;
        this.c3.setTransform(612.6, 143.6, 0.917, 0.917, 0, 0, 0, 19.4, 39.1);

        this.c5 = new lib.cerezac5escenario();
        this.c5.name = "c5";
        this.c5.parent = this;
        this.c5.setTransform(690.5, 146.2, 0.917, 0.917, 0, 0, 0, 14.3, 29);

        this.c6 = new lib.cerezac6escenario();
        this.c6.name = "c6";
        this.c6.parent = this;
        this.c6.setTransform(668.5, 175.6, 0.917, 0.917, 0, 0, 0, 24.3, 49.2);

        this.b4 = new lib.naranjab4escenario();
        this.b4.name = "b4";
        this.b4.parent = this;
        this.b4.setTransform(344.3, 97.1, 0.917, 0.917, 0, 0, 0, 16.2, 14.8);

        this.b3 = new lib.naranjab3escenario();
        this.b3.name = "b3";
        this.b3.parent = this;
        this.b3.setTransform(381.5, 109.9, 0.917, 0.917, 0, 0, 0, 20.7, 20.7);

        this.b2 = new lib.naranjab2escenario();
        this.b2.name = "b2";
        this.b2.parent = this;
        this.b2.setTransform(343.2, 160.5, 0.917, 0.917, 0, 0, 0, 26.9, 26.7);

        this.b1 = new lib.naranjab1escenario();
        this.b1.name = "b1";
        this.b1.parent = this;
        this.b1.setTransform(378.3, 200.1, 0.917, 0.917, 0, 0, 0, 17.2, 16.6);

        this.a1 = new lib.moraa1escenario();
        this.a1.name = "a1";
        this.a1.parent = this;
        this.a1.setTransform(35.9, 143.4, 0.917, 0.917, 0, 0, 0, 21.1, 21.5);

        this.a2 = new lib.moraa2escenario();
        this.a2.name = "a2";
        this.a2.parent = this;
        this.a2.setTransform(47.8, 112, 0.917, 0.917, 0, 0, 0, 22.2, 18.7);

        this.a3 = new lib.moraa3escenario();
        this.a3.name = "a3";
        this.a3.parent = this;
        this.a3.setTransform(73.9, 140.9, 0.917, 0.917, 0, 0, 0, 25.2, 30.4);

        this.a4 = new lib.moraa4escenario();
        this.a4.name = "a4";
        this.a4.parent = this;
        this.a4.setTransform(103.7, 106.7, 0.917, 0.917, 0, 0, 0, 18.8, 17.8);

        this.a5 = new lib.moraa5escenario();
        this.a5.name = "a5";
        this.a5.parent = this;
        this.a5.setTransform(140.6, 112.8, 0.917, 0.917, 0, 0, 0, 26.7, 24.2);

        this.a6 = new lib.moraa6escenario();
        this.a6.name = "a6";
        this.a6.parent = this;
        this.a6.setTransform(185.2, 113, 0.917, 0.917, 0, 0, 0, 23.4, 22.1);

        this.b6 = new lib.naranjab6escenario();
        this.b6.name = "b6";
        this.b6.parent = this;
        this.b6.setTransform(323.7, 57.8, 0.917, 0.917, 0, 0, 0, 23.3, 22.4);

        this.b5 = new lib.naranjab5escenario();
        this.b5.name = "b5";
        this.b5.parent = this;
        this.b5.setTransform(368.1, 63.6, 0.917, 0.917, 0, 0, 0, 19.4, 19.9);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.b5
            }, {
                t: this.b6
            }, {
                t: this.a6
            }, {
                t: this.a5
            }, {
                t: this.a4
            }, {
                t: this.a3
            }, {
                t: this.a2
            }, {
                t: this.a1
            }, {
                t: this.b1
            }, {
                t: this.b2
            }, {
                t: this.b3
            }, {
                t: this.b4
            }, {
                t: this.c6
            }, {
                t: this.c5
            }, {
                t: this.c3
            }, {
                t: this.c4
            }, {
                t: this.c2
            }, {
                t: this.c1
            }]
        }).wait(3));

        // fondo foto
        this.instance = new lib.frutasycanastas2fondo();
        this.instance.parent = this;
        this.instance.setTransform(3, 25, 0.917, 0.917);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

        // fondo
        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#669933").s().p("Eg5BAcrMAAAg5VMByDAAAMAAAA5Vg");
        this.shape_12.setTransform(365, 183.5);

        this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(3));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(360.5, 183.5, 734.5, 367);
    // library properties:
    lib.properties = {
        id: '792908112A68864DBF9E8C2AEA822EF1',
        width: 730,
        height: 367,
        fps: 32,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
                src: "images/02-canastas/Mapadebits44.png",
                id: "Mapadebits44"
            },
            {
                src: "images/02-canastas/02_movertouch_canastas_atlas_NP_.jpg",
                id: "02_movertouch_canastas_atlas_NP_"
            },
            {
                src: "sarasa/mouse/Applause.mp3",
                id: "Applause"
            },
            {
                src: "sarasa/mouse/manz01.mp3",
                id: "manz01"
            },
            {
                src: "sarasa/mouse/manz02.mp3",
                id: "manz02"
            },
            {
                src: "sarasa/mouse/manz03.mp3",
                id: "manz03"
            },
            {
                src: "sarasa/mouse/manz04.mp3",
                id: "manz04"
            },
            {
                src: "sarasa/mouse/manz05.mp3",
                id: "manz05"
            },
            {
                src: "sarasa/mouse/motor.mp3",
                id: "motor"
            }
        ],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['792908112A68864DBF9E8C2AEA822EF1'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }



})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;