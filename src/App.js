import "./styles.css";
import React, { useState } from "react";
import {
  CardAnimation,
  CardNumber,
  CardName,
  Expire,
  Header,
  Security,
  Submit,
  Footer
} from "./component";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cardSecurity, setCardSecurtiy] = useState("");
  const [flip, setFlip] = useState(true);

  return (
    <div className="App">
      <Header />
      <div className="main-block">
        <div className="left-block">
          <CardNumber cardNumber={cardNumber} onNumber={setCardNumber} />
          <CardName cardName={cardName} onName={setCardName} />
          <div className="left-bottom">
            <Expire onExpire={setCardExpire} />
            <Security
              cardSecurity={cardSecurity}
              onSecurity={setCardSecurtiy}
              flipped={flip}
              onsetFlip={setFlip}
            />
          </div>
        </div>
        <CardAnimation
          nameText={cardName}
          numberText={cardNumber}
          month={cardExpire.month}
          year={cardExpire.year}
          security={cardSecurity}
          flipped={flip}
          onsetFlip={setFlip}
        />
      </div>
      <Submit />
      <Footer />
    </div>
  );
}
export default App;
