/* 
 * (class)Progress<nowValue, minValue, maxValue>
 */

//helper function-> return <DOMelement>
function elt(type, prop, ...childrens) {
    let elem = document.createElement(type);
    if (prop) Object.assign(elem, prop);
    for (let child of childrens) {
        if (typeof child == "string") elem.appendChild(document.createTextNode(child));
        else elem.appendChild(elem);
    }
    return elem;
}

//Progress class
class Progress {
    constructor(now, min, max, options) {
        this.dom = elt("div", {
            className: "progress-bar"
        });
        this.min = min;
        this.max = max;
        this.intervalCode = 0;
        this.now = now;
        this.syncState();
        if (options.parent) {
            document.querySelector(options.parent).appendChild(this.dom);
        }
        else document.body.appendChild(this.dom)
    }

    syncState() {
        this.dom.style.width = this.now + "%";
    }

    startTo(step, time) {
        if (this.intervalCode !== 0) return;
        this.intervalCode = setInterval(() => {
            console.log("sss")
            if (this.now + step > this.max) {
                this.now = this.max;
                this.syncState();
                clearInterval(this.interval);
                this.intervalCode = 0;
                return;
            }
            this.now += step;
            this.syncState()
        }, time)
    }
    end() {
        this.now = this.max;
        clearInterval(this.intervalCode);
        this.intervalCode = 0;
        this.syncState();
    }
}


let pb = new Progress(15, 0, 100, { parent: ".progress" });

//arg1 -> step length
//arg2 -> time(ms)
pb.startTo(5, 500);

//end to progress after 5s
setTimeout(() => {
    pb.end()
}, 5000)