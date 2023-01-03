import './App.css';
import BtnToNaver from './components/BtnToNaver';
import ImgComponent from './components/ImgComponent';
import MainHeader from './components/MainHeader';

function App() {
  /*const str = "hello, react world";
  const fontStyle = { fontSize: "32px" };
  function amazing(str) {
    alert(str);
  }*/

  /*const styleObj = { marginTop: "32px", backgroundColor: "skyblue" };
  const helloStr = "Hello, first exercise";*/


  return (
    /*<div className="App">
      <div className="test">
        {amazing(str)}
        hello
      </div>
      <div style={{ fontSize: "32px" }}>인라인 스타일</div>
      <div style={fontStyle}>인라인 스타일</div>

      <span onClick={() => {
        let num = 10;
        num += 5;
        console.log(num);
      }}>클릭</span>
    </div>*/

    // 실습1
    /*<div className="App">
      <div style={styleObj} onClick={() => { alert("클릭 됨") }}>{helloStr}</div>

    </div>*/

    <div className="App">
      <MainHeader />
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;
