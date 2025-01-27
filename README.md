# `use-lanyard`

### [View Demo](https://codesandbox.io/s/use-lanyard-demo-kokjd?file=/index.js)

React hook for [lanyard](https://github.com/Phineas/lanyard/), an easy way to track your Discord presence through REST or WebSocket.

It's easy to use and fully typed. With REST, the `useLanyard` hook returns an [SWR](https://github.com/vercel/swr) `SWRResponse`. Over WebSocket, it will return the `Data` type.

```tsx
import {useLanyard} from 'use-lanyard';

const DISCORD_ID = '268798547439255572';

export function Activity() {
	const {data: activity} = useLanyard(DISCORD_ID);

	return <>...</>;
}
```

### Socket

There is also a hook for using the WebSocket that Lanyard provides, here's an example:

```tsx
import {useLanyardWs} from 'use-lanyard';

const DISCORD_ID = '268798547439255572';

export function Activity() {
	const activity = useLanyardWs(DISCORD_ID);

	return <>...</>;
}
```

### Advanced usage with TypeScript

If you need access to the underlying response types, you can import them as follows.

```ts
import { Data, Activity, ...etc } from 'use-lanyard';
// See src/types.ts for all types
```

## Acknowledgements

- [Phineas Walton](https://github.com/Phineas/) – Author of lanyard
- [Alistair Smith](https://github.com/alii/) – Author of this library
