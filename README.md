
# @bugbybug/react

The official React SDK for BugByBug. This package wraps @bugbybug/browser to provide React-specific context, Error Boundaries, and hooks.

### Installation
```
npm install @bugbybug/react
```

### Usage
**Wrap your application** with `BugByBugProvider`.

**Use ErrorBoundary** to catch render errors.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BugByBugProvider, ErrorBoundary } from '@bugbybug/react';
import App from './App';

ReactDOM.render(
  <BugByBugProvider apiKey="YOUR_PROJECT_API_KEY" config={{ environment: 'production' }}>
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <App />
    </ErrorBoundary>
  </BugByBugProvider>,
  document.getElementById('root')
);
```

### Hooks
Use the `useBugByBug` hook to access the client instance in your functional components.
```
import { useBugByBug } from '@bugbybug/react';

const MyComponent = () => {
  const client = useBugByBug();

  const handleLogin = (user) => {
    // Identify the user
    client?.setUser(user.id, user.email);
  };

  const doRiskyThing = () => {
    try {
      // ... risky code
    } catch (error) {
      // Manually capture errors
      client?.captureException(error, { extra: 'context' });
    }
  };

  return <button onClick={doRiskyThing}>Do Action</button>;
};
```

### Error Boundary Props
The `<ErrorBoundary>` component accepts the following props:

`fallback`: A React Node or a function to render when an error occurs.
```
<ErrorBoundary fallback={(error, reset) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={reset}>Try again</button>
  </div>
)}>
```
`onError`: Callback function executed when an error is caught.

`beforeSend`: Intercept the error before sending to BugByBug. Return `null` to discard.

### Features
**React Component Stack**: Automatically captures the component tree where the error occurred.

**Context API**: Easy access to the SDK client anywhere in your component tree.

**Types**: Full TypeScript support.