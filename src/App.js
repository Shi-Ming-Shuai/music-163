
// 导入路由-封装的Switch
import routes from "./router/home/home";
import MySwitch from "./router/MySwitch";

function App() {
  return (
    <div className="App">
        <MySwitch routes={routes}></MySwitch>
    </div>
  );
}

export default App;
