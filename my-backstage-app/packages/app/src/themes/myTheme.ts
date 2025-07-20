import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
    shapes,
    defaultTypography
} from '@backstage/theme';

// import MyCustomFont from '../assets/fonts/My-Custon-Font.woff2';
// import MyAwesomeFont from '../assets/fonts/My-Awesome-Font.woff2';

// const myCustomFont = {
//     fontFamily: 'My-Custom-Font',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 300,
//     src: `
//         local('My-Custom-Font),
//         url(${MyCustomFont}) format('woff2'),
//     `
// };

// const myAwesomeFont = {
//     fontFamily: 'My-Awesome-Font',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 300,
//     src: `
//         local('My-Awesome-Font),
//         url(${MyAwesomeFont}) format('woff2'),
//     `
// };

export const myTheme = createUnifiedTheme({
    ...createBaseThemeOptions({
        palette: {
            ...palettes.light,
            primary: {
                main: '#343b58',
            },
            secondary: {
                main: '#565a6e',
            },
            error: {
                main: '#8c4351'
            },
            warning: {
                main: '#8f5e15',
            },
            info: {
                main: '#34548a',
            },
            success: {
                main: '#485e30',
            },
            background: {
                default: '#d5d6db',
                paper: '#d5d6db',
            },
            banner: {
                info: '#34548a',
                error: '#8c4351',
                text: '#343b58',
                link: '#565a6e',
            },
            errorBackground: '#8c4351',
            warningBackground: '#8f5e15',
            infoBackground: '#343b58',
            navigation: {
                background: '#343b58',
                indicator: '#8f5e15',
                color: '#d5d6db',
                selectedColor: '#ffffff',
            }
        },
        typography: {
            ...defaultTypography,
            htmlFontSize: 16,
            fontFamily: 'Roboto, sans-serif',
            // fontFamily: 'My-Custom-Font',
            h1: {
                fontSize: 54,
                fontWeight: 700,
                marginBottom: 10,
                // fontFamily: 'My-Awesome-Font',
            },
            // h2: {
            //     fontSize: 40,
            //     fontWeight: 700,
            //     marginBottom: 8
            // },
            // h3: {
            //     fontSize: 32,
            //     fontWeight: 700,
            //     marginBottom: 6
            // },
            // h4: {
            //     fontSize: 28,
            //     fontWeight: 700,
            //     marginBottom: 6
            // },
            // h5: {
            //     fontSize: 24,
            //     fontWeight: 700,
            //     marginBottom: 4
            // },
            // h6: {
            //     fontSize: 20,
            //     fontWeight: 700,
            //     marginBottom: 2
            // },
        }
    }),
    fontFamily: 'Comic Sans MS',
    // fontFamily: 'My-Custom-Font',
    components: {
        // MuiCssBaseline: {
        //     styleOverrides: {
        //         '@font-face': [myCustomFont],
        //     }
        // },
        BackstageHeader: {
            styleOverrides: {
                header: ( { theme }) => ({
                    width: 'auto',
                    margin: '20px',
                    boxShadow: 'none',
                    borderBottom: `4px solid ${theme.palette.primary.main}`,
                })
            }
        }
    },
    defaultPageTheme: 'home',
    pageTheme: {
        home: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
        documentation: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave2 }),
        tool: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.round }),
        service: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
        website: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
        library: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
        other: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
        app: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
        apis: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
    }
});


// const useStyles = makeStyles<BackstageTheme>(
//     theme => ({
//         header: {
//             padding: theme.spacing(3),
//             boxShadow: '0 0 8px 3px rgba(20,20,20,0.3)',
//             backagroundImage: theme.page.backgroundImage,
//         }
//     }),
//     {name: 'BackstageHeader'},
// )