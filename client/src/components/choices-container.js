import '../App.css';
import ChoicesList from './choices-list.js';

var ChoicesContainer = () => {
  return (
    <>
      <div className="choices-container">
        <h1 className="title">All Anony-Choices</h1>
        <ChoicesList />
      </div>
    </>
  );
};

export default ChoicesContainer;
