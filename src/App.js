import React from 'react';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';
import AnimalCard from './AnimalCard';
import animals from './data/data';
const showAdditionalData = (additional) => {
  const alertText = Object.entries(additional)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  alert(alertText);
};
const App = () => {
  return (
    <div>
      <div>
        <p style={{display: "flex", borderBottom: "3px solid #ccc", borderTop: "3px solid #ccc"}}>EX16 - EventHandlingDemo</p>
      <EventHandlingDemo />
    </div>
    <div>
        <p style={{display: "flex", borderBottom: "3px solid #ccc", borderTop: "3px solid #ccc"}}>EX17 - RenderAndCommitDemo</p>
        <React.StrictMode>
      <RenderAndCommitDemo />
    </React.StrictMode>
    </div>
    <div>
        <p style={{display: "flex", borderBottom: "3px solid #ccc", borderTop: "3px solid #ccc"}}>EX18 - SnapshotDemo</p>
        <React.StrictMode>
      <SnapshotDemo />
    </React.StrictMode>

    </div>
    <div className="App">
    <p style={{display: "flex", borderBottom: "3px solid #ccc", borderTop: "3px solid #ccc"}}>EX19 - PropTypesDemo</p>
      <div className="animal-wrapper">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditionalData}
            image={animal.image}
          />
        ))}
      </div>
    </div>
    </div >
  );
};

export default App;
