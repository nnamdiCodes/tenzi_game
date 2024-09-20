const Die = ({ die, handleDieClick }) => {
  
  const renderDots = () => {
    const dots = [];
    switch (die.value) {
      case 1:
        dots.push(<div key={1} className="dot center"></div>);
        break;
      case 2:
        dots.push(<div key={1} className="dot top-left"></div>);
        dots.push(<div key={2} className="dot bottom-right"></div>);
        break;
      case 3:
        dots.push(<div key={1} className="dot top-left"></div>);
        dots.push(<div key={2} className="dot center"></div>);
        dots.push(<div key={3} className="dot bottom-right"></div>);
        break;
      case 4:
        dots.push(<div key={1} className="dot top-left"></div>);
        dots.push(<div key={2} className="dot top-right"></div>);
        dots.push(<div key={3} className="dot bottom-left"></div>);
        dots.push(<div key={4} className="dot bottom-right"></div>);
        break;
      case 5:
        dots.push(<div key={1} className="dot top-left"></div>);
        dots.push(<div key={2} className="dot top-right"></div>);
        dots.push(<div key={3} className="dot center"></div>);
        dots.push(<div key={4} className="dot bottom-left"></div>);
        dots.push(<div key={5} className="dot bottom-right"></div>);
        break;
      case 6:
        dots.push(<div key={1} className="dot top-left"></div>);
        dots.push(<div key={2} className="dot top-right"></div>);
        dots.push(<div key={3} className="dot bottom-left"></div>);
        dots.push(<div key={4} className="dot bottom-right"></div>);
        dots.push(<div key={5} className="dot top-center"></div>);
        dots.push(<div key={6} className="dot bottom-center"></div>);
        break;
      default:
        break;
    }
    return dots;
  };

  return (
    <div
      className="Die"
      onClick={() => handleDieClick(die.id)}
      style={{ backgroundColor: die.isHeld ? '#59E391' : 'whitesmoke' }}
    >
      <div className="dots-container">
        {renderDots()}
      </div>
    </div>
  );
};

export default Die