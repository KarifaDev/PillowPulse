import React from 'react'; // importerar react 
import Button from 'react-bootstrap/Button';// importerar bootstrapknappar
import Form from 'react-bootstrap/Form';// importerar bootstrapformulär

const Account = () => { // skapar en 

  const handleLogin = () => {
    // Skapar en alert när användaren klickar på "Login"
    window.alert("Not available at the moment");
  };
  // Här börjar innehållet på inloggningssidan
  return (
    // Här kommer ett formulär med hjälp av komponenten Form
    <Form>
      <div className="heading text-center m-5" style={{color: "#219EBA"}}>
      <h1>Login to view your account</h1>
      </div>
      {/* Här lägger vi till ett fält för användarnamn med bootstrap */}
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          className="inputField"
          type="text"
          placeholder="Username.."
        />
      </Form.Group>
      {/* Här lägger vi till ett fält för lösenord med bootstrap */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="inputField"
          type="password"
          placeholder="Password.."
        />
      </Form.Group>
      {/* Här kommer vår knapp som skall ta en till inloggningen men vi har inte slutfört detta i denna uppgift */}
      <div className="d-grid m-5">
        <Button
          type="button"
          className="btn-outline-primary btn-lg bg-white border-2 rounded-4 p-3 text-uppercase"
          onClick={handleLogin}
          style={{
            border: "solid #219EBA",
            color: "#219EBA",
          }}
        >
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Account; // exporterar account