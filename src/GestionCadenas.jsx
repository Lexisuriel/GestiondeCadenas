import React from "react";

class StringManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", chain: "", action: "buscar", output: "" };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleProcess = () => {
    const { text, chain, action } = this.state;
    let output = "";

    switch (action) {
      case "buscar": {
        const positions = [];
        for (let i = 0; i < text.length; i++) {
          if (text[i] === chain) {
            positions.push(i + 1); // Contamos desde 1
          }
        }
        output = positions.length > 0 ? `Posición: ${positions.join(", ")}` : "Cadena no encontrada";
        break;
      }
      case "borrar": {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] !== chain) {
            result += text[i];
          }
        }
        output = result;
        break;
      }
      case "insertar": {
        output = text + chain;
        break;
      }
      case "mezclar": {
        let result = "";
        const maxLength = Math.max(text.length, chain.length);
        for (let i = 0; i < maxLength; i++) {
          if (i < text.length) {
            result += text[i];
          }
          if (i < chain.length) {
            result += chain[i];
          }
        }
        output = result;
        break;
      }
      default:
        output = "Acción no válida";
    }
    this.setState({ output });
  };

  render() {
    const { text, chain, action, output } = this.state;
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Gestión de Cadenas</h2>
            <div className="mb-3">
              <label className="form-label">Texto:</label>
              <input
                type="text"
                name="text"
                value={text}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Cadena:</label>
              <input
                type="text"
                name="chain"
                value={chain}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Acción:</label>
              <select
                name="action"
                value={action}
                onChange={this.handleChange}
                className="form-select"
              >
                <option value="buscar">Buscar Cadena</option>
                <option value="borrar">Borrar</option>
                <option value="insertar">Insertar</option>
                <option value="mezclar">Mezclar</option>
              </select>
            </div>
            <button onClick={this.handleProcess} className="btn btn-success w-100">
              Procesar
            </button>
            <div className="mt-4">
              <h3 className="h5 text-center">Salida:</h3>
              <textarea
                value={output}
                readOnly
                className="form-control mt-2"
                rows="3"
              />
            </div>
          </div>
          <h6 className="text-center">Desarrolador por Lexis Uriel</h6>
        </div>
        
      </div>
    );
  }
}

export default StringManager;
