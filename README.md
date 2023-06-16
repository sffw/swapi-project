# SWAPI Table Developer Test

### Completed by: Spencer White, June 16, 2023

## Set up

To get started

1. Install dependencies: <br>
   `npm install`

2. Run dev server (concurrently initializes node server on port 3000): <br>
   `npm run dev`

## Notes

### Layout and Styling

All of the styling is done with CSS modules, with the exception of pagination using a pre-built MUI Component.

### Pagination

I decided to use `reqParams` over the SWAPI object's `data.next` property so that I could include the page number in React Query's built-in cache and more readily plug in the page as props to my MUI `<Pagination />` component.

### File Upload

Files can be uploaded in the top right corner by clicking the icon. I used the multer node library to handle all file types.
