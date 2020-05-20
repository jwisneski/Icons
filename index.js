const e = React.createElement;
var colors=["blue", "green", "orange"];

loadJS( "../icons.js" );

class ButtonComp extends React.Component{
    constructor(props){
        super(props);    
    }
    
    render(){
        return(
            <button className={[this.props.color, this.props.type].join(" ")}>{this.props.message}</button>
        );
    }
}

class Logo extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <img src="" alt="logo"/>
        );
    }
}

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <nav>Menu</nav>
        )
    }
}

class SiteHeader extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <header className="header">Site header goes here</header>
    );
  }
}

class Homepage extends React.Component {
    constructor(props){
        super(props);
        console.log(colors[0]);
    }
    
    render(){
        return(
          <React.Fragment>
              <section className={colors[1]}>
                  <ButtonComp message="Click here" color="orange" type="primary"/>
                  
                  <SiteHeader/>
              </section>
            </React.Fragment>
        );
    }
}

const domContainer = document.getElementById('root');
//const headerContainer = document.getElementById('reactHeader');

//ReactDOM.render(<ReactHeader/>, headerContainer);
ReactDOM.render(<Homepage/>, domContainer);