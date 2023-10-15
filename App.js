
{/* 
<div class="parent">
    <div class="child">
        <h1>I'm h1 tag</h1>
    </div>
    <div class="child2">
        <h1>I'm h1 tag</h1>
    </div>
</div> 

ReactElement(object) => HTML(Browser understand)

*/}

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm h1 tag"),React.createElement("h2", {}, "I'm h2 tag")]),React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'm h1 tag"),React.createElement("h2", {}, "I'm h2 tag")])])

const heading = React.createElement("h1", { id: "heading" }, "Hello world from react inside it")
console.log(parent); //Object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)