import classes from "./App.module.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Header />
      </div>
    </>
  );
}

export default App;
