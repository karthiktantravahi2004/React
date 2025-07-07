
const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"im vengeance!!"),React.createElement("h2",{},"im batman!!")]),React.createElement("div",{id:"child"},[React.createElement("h1",{},"im vengeance!!"),React.createElement("h2",{},"im batman!!")])]);







console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);