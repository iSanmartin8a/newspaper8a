import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Header />
        <Title />
      </div>
    </>
  );
}

export default App;
