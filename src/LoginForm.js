import React, { useState } from "react";
export class LoginForm extends React.Component {
  state = {
    email: "",
  };

  handelEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>class example</h1>
        <input value={this.state.email} onChange={this.handelEmail} />
      </div>
    );
  }
}

export function LoginFormF() {
  const [email, setEmail] = useState("");
  function handelEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <div>
      <h1>function example</h1>
      <input value={email} onChange={handelEmail} />
    </div>
  );
}
