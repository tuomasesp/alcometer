import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] =useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    let alcohol = 0;
    let grams = bottles * 8 * 4.5;
    let left = grams - ((weight/10)*time)

    if (gender === 'male') {
      alcohol = left / (weight * 0.7);
    } else {
      alcohol = left / (weight * 0.6);
    }

    if (alcohol < 0) {
      alcohol = 0;
    }
    setResult(alcohol);
  }

  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
              <option value="0">0</option>
              <option value="0.33">1</option>
              <option value="0.66">2</option>
              <option value="0.99">3</option>
              <option value="1.32">4</option>
              <option value="1.65">5</option>
              <option value="1.98">6</option>
              <option value="2.31">7</option>
              <option value="2.64">8</option>
              <option value="2.97">9</option>
              <option value="3.3">10</option>
              <option value="3.63">11</option>
              <option value="3.96">12</option>
            </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
    </>
  );
}

export default App;
