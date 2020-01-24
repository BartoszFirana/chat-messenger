# Zadanie "chat messenger"

Źródło: https://github.com/czechue/kodifaj-tasks

## Treść zadania

1. Instrukcja

    1. Stwórz strukturę aplikacji opartą o komponenty mając na uwadzę, że będzie się ona składała z dwóch, niezależnych widoków (strony logowania i strony chatu).
    
    2. Stwórz strukturę html komponentom i sformatuj style CSS tak, aby wygląd aplikacji był zbliżony projektom `/assets/chat - panel.png` i `assets\chat - chat.png` tak bardzo jak to tylko możliwe.
    
2. Szczegółowy opis akcji

    1. Wygląd aplikacji:

        - główne kontenery powinny być osadzone po środku,

        - aplikacja powinna być napisana zgodnie z zasadami mobile first, a tym samym powinna być responsywna,

        - kolorystyka aplikacji powinna być w pełni odwzorowana (do próbkowania kolorów można wykorzystać narzędzie próbkowania w narzędziach developerskich przeglądarek internetowych),

        - do stworzenia avatarów w aplikacji należy skorzystać z dostarczonego pliku SVG `/assets/user icon.svg`,

        - kontener z wiadomościami nie powinien zmienić swojej wysokości jeżeli dialog będzie długi,

        - **w wersji zaawansowanej** na telefonach aplikacja powinna wykorzystać całą wysokość i szerokość ekranu tak, aby nie trzeba było jej scrollować. Scrollować można jedynie konwersację.

    2. W panelu logowania:

        - stwórz dwa przyciski, dzięki którym można zmieniać aktywnego użytkownika,

        - zaznaczenie użytkownika powoduje pojawienie się widoku chatu,

    3. W widoku chatu:

        - za pomocą pola tekstowego można wysyłać wiadomości które pojawiają się w oknie czatu,

        - całą historia rozmowy zostaje zapisana w localStorage,

        - po przeładowaniu strony nie tracimy historii konwersacji,

        - **w wersji podstawowej** jeżeli wybrałeś użytkownika z szarym avatarem - na chatcie Twoje chmurki powinny być szare, a Twojego rozmówcy niebieskie,

        - **w wersji zaawansowanej** Twoje dymki zawsze będą niebieskie, niezależnie od tego które konto wybrałeś (niebieskie, czy szare),

        - wiadomości powinny renderować się od najnowszej w górę,

    
## Uwagi
    
*   Nie korzystaj z frameworków CSS (bootstrap etc.),

*   Do zbudowania aplikacji możesz wykorzystać freamwork JavaScript

*   Makiety są tylko poglądowe, odwzorowanie nie musi być pixel-perfect.

*   Użyty font to `quicksand`, znajdziesz go w bibliotece fontów google: `https://fonts.google.com/specimen/Quicksand`.


# Create React App Informations

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
