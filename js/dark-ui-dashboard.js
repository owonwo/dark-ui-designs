//the number of bars in chart to build
let noOfBars = 6;

const createBars = (graph) => {
    //duplicate the first (.bar) into the
    // noOfBars variable which is currently 6
    Array(noOfBars).fill('').map((a,index) => {
        //fetch the .bar element and clone into a variable
        let clone = graph.querySelector('.bar').cloneNode(true)
        //update the .bar-top element text
        clone.querySelector('.bar-top .date').innerText = 27 + index;
        //add a .current class to the last .bar element
        !(index == (noOfBars - 1)) || clone.classList.add('current');
        //add into the .graph element
        graph.append(clone);
    })
    //wait for 300 miliseconds and then give random percentages.
    //note: you'll notice that every time your reload the page
    // the bars percentages are dynamic.
    setTimeout(e => {
        let bars = graph.querySelectorAll('.bar')
        bars.forEach(randomizeBar);
    }, 100)
};

// gives a random percentage to the element referenced as
// an argument.
const randomizeBar = (el) => {
    const randomize = (el) => {
        el.style.flexBasis = (Math.random(1,3) *  100).toFixed() + "%";
    }
    var bar = el.querySelector('.bar');
    !bar || randomize(bar);
}

//function that builds a bar chart
const buildTheChart = (e) => {
    //fetch the graph class (.graph)
    let graph = document.querySelector('.graph')

    //calls the createBars function
    createBars(graph);
}

//wait for the web page to be completely loaded
//before calling the buildTheChart function
window.addEventListener('load', buildTheChart);
