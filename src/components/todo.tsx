import {app, Component} from 'apprun';

type TodoItem = {
  title: string;
  done: boolean;
};

type State = {
  filter: 'All' | 'Active' | 'Complete';
  list: Array<TodoItem>;
};

export default class Todo extends Component {

 state: State = {
  filter: 'All',
  list: []
};

 view = (state: State) => {
  const countAll = state.list.length;
  const countActive = (state.list.filter(todo => !todo.done) as any).length || 0;
  const countComplete = state.list.filter(todo => todo.done).length || 0;

  return <div>
    <button $onclick="history-prev"> Back </button>
    <button $onclick="history-next"> Forward </button>
    <p><input $onkeyup="keyup" /></p>
    <ul> {
      state.list
      .map((todo, idx) => ({ ...todo, idx }))
      .filter(todo => state.filter === 'All' ||
      (state.filter === 'Active' && !todo.done) ||
      (state.filter === 'Complete' && todo.done))
      .map((todo) => <li>
      <input type="checkbox" $onclick={['toggle-item', todo.idx]} checked={todo.done} />
      <span>{todo.title} {' '} (<a href='#' $onclick={['delete-item', todo.idx]}>␡</a>)</span>
      </li>)
    }</ul>
      <div>
      <a href='#' $onclick='filter-item'>All</a> {` (${countAll}) | `}
      <a href='#' $onclick='filter-item'>Active</a> {`(${countActive}) | `}
      <a href='#' $onclick='filter-item'>Complete</a> {`(${countComplete})`}
      </div>
      <a href='#home'>Home</a> | <a href='#about'>About</a>
    </div>

};

 update = {
  '#todo': state => state,
  '@new-state': (_, state) => state,
  'add-item': (state, title) => { this.run('@save-state', {
    ...state,
    list: [...state.list, { title, done: false }]
  })},
  'delete-item': (state, idx) => { this.run('@save-state', {
    ...state,
    list: [
      ...state.list.slice(0, idx),
      ...state.list.slice(idx + 1)
    ]
  })},
  'toggle-item': (state, idx) => { this.run('@save-state', {
    ...state,
    list: [
      ...state.list.slice(0, idx),
      { ...state.list[idx], done: !state.list[idx].done },
      ...state.list.slice(idx + 1)
    ]
  })},
  'filter-item': (state, e) => { this.run('@save-state', {
    ...state, filter: e.target.textContent })},
  'keyup': (state, e) => {
    if (e.keyCode === 13 && e.target.value.trim()) {
      this.run('add-item', e.target.value);
      e.target.value = '';
    }
  },
};

}
