import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Studies from "./components/Studies/Studies";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <div className={classes.container}>
        <Header />
        <Title />
        <Studies />
      </div>
    </>
  );
}

export default App;
