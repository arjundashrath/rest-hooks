import React from 'react';
import clsx from 'clsx';
import { Link } from '@docusaurus/router';

import CodeEditor from './CodeEditor';
import styles from './styles.module.css';

const simpleFetchDemo = [
  {
    label: 'Fetch',
    value: 'fetch',
    code:
      `const fetchTodoDetail = async ({ id }) =>
  (await fetch(\`https://jsonplaceholder.typicode.com/todos/\${id}\`)).json()
const todoDetail = new Endpoint(fetchTodoDetail);` +
      '\n\n' +
      `function TodoDetail() {
  const todo = useResource(todoDetail, { id: 1 });
  return <div>{todo.title}</div>;
}
render(<TodoDetail/>);
`,
  },
  {
    label: 'REST',
    value: 'rest',
    code:
      `class TodoResource extends Resource {
    pk() { return this.id }
    static urlRoot = 'https://jsonplaceholder.typicode.com/todos';
  }` +
      '\n\n' +
      `function TodoDetail() {
  const todo = useResource(TodoResource.detail(), { id: 1 });
  return <div>{todo.title}</div>;
}
render(<TodoDetail/>);
`,
  },
  {
    label: 'GraphQL',
    value: 'graphql',
    code:
      `const gql = new GQLEndpoint('/');
const todoDetail = gql.query(\`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      completed
    }
  }
\`);` +
      '\n\n' +
      `function TodoDetail() {
    const { todo } = useResource(todoDetail, { id: 1 });
    return <div>{todo.title}</div>;
  }
  render(<TodoDetail/>);
  `,
  },
];

const mutationDemo = [
  {
    label: 'REST',
    value: 'rest',
    code: `function TodoDetail({ id }) {
  const todo = useResource(TodoResource.detail(), { id });
  const controller = useController();
  const updateWith = title => () =>
    controller.fetch(
      TodoResource.partialUpdate(),
      { id },
      { title }
    );
  return (
    <div>
      <div>{todo.title}</div>
      <button onClick={updateWith('🥑')}>🥑</button>
      <button onClick={updateWith('💖')}>💖</button>
    </div>
  );
}
render(<TodoDetail id={1} />);
`,
  },
  {
    label: 'GraphQL',
    value: 'graphql',
    code:
      `const gql = new GQLEndpoint('/');

class Todo extends GQLEntity {
  readonly title: string = '';
  readonly completed: boolean = false;
}

const todoDetail = gql.query(\`
  query GetTodo($id: ID!) {
    todo(id: $id) {
      id
      title
      completed
    }
  }
\`, { todo: Todo });

const updateTodo = gql.mutation(
  \`mutation UpdateTodo($todo: Todo!) {
    updateTodo(todo: $todo) {
      id
      title
      completed
    }
  }\`,
  { updateTodo: Todo },
);` +
      '\n\n' +
      `function TodoDetail({ id }) {
  const { todo } = useResource(todoDetail, { id });
  const controller = useController();
  const updateWith = title => () =>
    controller.fetch(
      updateTodo,
      { todo: { id, title } }
    );
  return (
    <div>
      <div>{todo.title}</div>
      <button onClick={updateWith('🥑')}>🥑</button>
      <button onClick={updateWith('💖')}>💖</button>
    </div>
  );
}
render(<TodoDetail id={1} />);
  `,
  },
];

const appDemo = [
  {
    label: 'REST',
    value: 'rest',
    code: `function TodoItem({ todo }: { todo: TodoResource }) {
  const controller = useController();
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={e =>
          controller.fetch(
            TodoResource.partialUpdate(),
            { id: todo.id },
            { completed: e.currentTarget.checked },
          )
        }
      />
      {todo.completed ? (
        <strike>{todo.title}</strike>
      ) : (
        todo.title
      )}
      <a
        style={{ cursor: 'pointer' }}
        onClick={() =>
          controller.fetch(TodoResource.delete(), {
            id: todo.id,
          })
        }
      >
        ❌
      </a>
    </div>
  );
}

function TodoList() {
  const todos = useResource(TodoResource.list(), {});
  const controller = useController();
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.pk()} todo={todo} />
      ))}
    </div>
  );
}
render(<TodoList />);
`,
  },
  {
    label: 'GraphQL',
    value: 'graphql',
    code:
      `const gql = new GQLEndpoint('/');

class Todo extends GQLEntity {
  readonly title: string = '';
  readonly completed: boolean = false;
}

const todoList = gql.query(\`
  query GetTodos {
    todo {
      id
      title
      completed
    }
  }
\`, { todos: [Todo] });

const updateTodo = gql.mutation(
  \`mutation UpdateTodo($todo: Todo!) {
    updateTodo(todo: $todo) {
      id
      title
      completed
    }
  }\`,
  { updateTodo: Todo },
);` +
      '\n\n' +
      `function TodoItem({ todo }: { todo: TodoResource }) {
  const controller = useController();
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={e =>
          controller.fetch(updateTodo, {
            todo: { id: todo.id, completed: e.currentTarget.checked },
          })
        }
      />
      {todo.completed ? <strike>{todo.title}</strike> : todo.title}
    </div>
  );
}

function TodoList() {
  const { todos } = useResource(todoList, {});
  const controller = useController();
  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.pk()} todo={todo} />
      ))}
    </div>
  );
}
render(<TodoList />);
`,
  },
];

const Demo = props => (
  <div className="container">
    <div className={clsx('row', styles.demoList)}>
      <div className="col col--3">
        <h2>A simple data fetch</h2>
        <div>
          <p>
            Add a single{' '}
            <Link to="/docs/getting-started/data-dependency">
              useResource()
            </Link>{' '}
            call where you need its data.
          </p>
          <p>
            Rest Hooks automatically optimizes performance by caching the
            results, deduplicating fetches, efficient component render bindings
            and more.
          </p>
          {/*<p>
            Decoupling <em>how</em> to get data from <em>where</em> you use it
            enables reusable components.
          </p>*/}
        </div>
      </div>
      <div className="col col--9">
        <CodeEditor codes={simpleFetchDemo} defaultValue="rest" />
      </div>
    </div>
    <div className={clsx('row', styles.demoList)}>
      <div className="col col--3">
        <h2>Stateful mutations</h2>
        <div>
          <p>
            Use <Link to="/docs/api/Controller#fetch">Controller.fetch()</Link>{' '}
            to update the store.
          </p>
          <p>
            Rest Hooks ensures data consistency and integrity globally. Every
            piece of data maintains referential stability unless it changes.
            This ensures the most optimized render performance, as well as
            predictable equality checks.
          </p>
        </div>
      </div>
      <div className="col col--9">
        <CodeEditor codes={mutationDemo} defaultValue="rest" />
      </div>
    </div>
    <div className={clsx('row', styles.demoList)}>
      <div className="col col--3">
        <h2>An application</h2>
        <div>
          <p>
            Data can be consumed and controlled in many contexts, speeding up
            development.
          </p>
          <p>
            Rest Hooks uses{' '}
            <Link to="/docs/getting-started/entity">data normalization</Link> to
            maintain consistency no matter how and where the data is consumed.
          </p>
          <p>
            Rest easy with the help of{' '}
            <Link to="/docs/guides/debugging">debugging</Link>,{' '}
            <Link to="/docs/guides/unit-testing-hooks">unit testing</Link>, and{' '}
            <Link to="/docs/guides/storybook">storybook integration</Link>.
          </p>
        </div>
      </div>
      <div className="col col--9">
        <CodeEditor codes={appDemo} defaultValue="rest" />
      </div>
    </div>
  </div>
);
export default Demo;
