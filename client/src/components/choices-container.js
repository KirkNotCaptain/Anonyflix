import '../App.css';
import ChoicesList from './choices-list.js';

var ChoicesContainer = () => {
  return (
    <>
      <div className="choices-container">
        <h1 className="title">User Choices</h1>
        <ChoicesList />
      </div>
    </>
  );
};

export default ChoicesContainer;
