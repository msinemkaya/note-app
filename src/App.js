import './App.css';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='container'>
      <SearchBar />
      <NoteList />
    </div>
  );
}

export default App;
