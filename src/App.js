
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./Notes";
import Note from "./components/Note";

function App() {
  return (
    <div>
       <Header />
      {Notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
