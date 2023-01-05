//  React 따라하기

function HelloWorldButton() {
    const [isClick, setClickState] = React.useState("It isn't clicked");
    console.log(isClick);
    return React.createElement("button", { onClick: () => { setClickState("It's clicked") } }, isClick);
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));