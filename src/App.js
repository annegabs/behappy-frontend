class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cor: white,
      contador: 0
    };
  }

  trocarCor = (e) => {
    let contador = this.state.contador;
    let cor = (++contador % 2) == 0 ? 'red' : 'blue';
    this.setState({
      cor: cor,
      contador: contador
    });
  }

  render() {
    const estilo = {
      padding: 10,
      background: this.state.cor,
    }
    return (
      <h1 style={estilo} onClick={this.trocarCor}>
        {this.props.texto}
      </h1>
    );
  }
}
