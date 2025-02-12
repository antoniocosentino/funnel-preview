# 👁️ Funnel Preview

This web app allows the user to upload a JSON file and see a mobile preview of the funnel.
The user can navigate through pages and scroll the content as in a real mobile device.

The tool is currently only optimized for desktop. On mobile, a warning will be shown, informing the user that they need to switch to a desktop device.

## Video Demo

https://github.com/user-attachments/assets/ab9fa23b-7373-4bce-9e7f-549da32ebdb5


## How to run locally

After cloning the project, install all the dependencies
```
yarn
```

Then start Next.js in developer mode:
```
yarn dev
```


## Tests
The project currently includes:
- Unit tests
- Component tests

For testing I'm using Jest in combination with Testing Library.

### Unit tests
Unit tests are currently checking the following utilities:
- `isAllowedDomain`: used to understand if the image belongs to a domain that is whitelisted in the Next.js config.
- `parseFunnelJson`: this is used for parsing the uploaded JSON. The method throws an error in case the JSON is not matching our defined schema.

### Component Tests
I'm testing the individual renderer of each block type. In addition to that, I'm also testing the `PageRenderer` which is the component that orchestrates which block component needs to be involved, based on the page structure
- `TextBlock.test.tsx`
- `ButtonBlock.test.tsx`
- `ImageBlock.test.tsx`
- `ListBlock.test.tsx`
- `PageRenderer.test.tsx`

---

For running the tests:
```
yarn test
```


### Online version
The app is deployed via Vercel and can be accessed here:
https://funnel-preview.vercel.app