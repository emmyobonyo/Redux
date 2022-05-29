import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux';

function App(props) {
  const count = useSelector(state => state) // return the part of state that you want
  // const count = useSelector (state => state.count) // get only count from state
  const dispatch = useDispatch()
  return (
    <div>
        <h1>{ count }</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count : state
  }
}

const mapDispatchToProps = {
  increment,
  decrement
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App

// function mapStateToProps(globalState) {
//   // return an object where the keys are the name of the prop your component wants,
//   // values are the actual parts of the global state your component wants
// }
