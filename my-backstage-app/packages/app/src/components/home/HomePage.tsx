import { Content, Header, Page } from "@backstage/core-components"
import { ClockConfig, HeaderWorldClock, HomePageCompanyLogo, HomePageRecentlyVisited, HomePageStarredEntities, HomePageToolkit, HomePageTopVisited, TemplateBackstageLogo, WelcomeTitle } from "@backstage/plugin-home"
import { HomePageSearchBar } from "@backstage/plugin-search"
import { SearchContextProvider } from "@backstage/plugin-search-react"
import { Grid, makeStyles } from "@material-ui/core"
import { tools, useLogoStyles } from "./shared"
import { createTranslationMessages } from "@backstage/core-plugin-api/alpha"


const useStyles = makeStyles(theme => ({
    searchBarInput: {
        maxWidth: '60vw',
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50px',
        boxShadow: theme.shadows[1],
    },
    searchBarOutline: {
        borderStyle: 'none',
    }
}));

const clockConfigs: ClockConfig[] = [
    {
        label: 'NYC',
        timeZone: 'America/New_York',
    },
    {
        label: 'UTC',
        timeZone: 'UTC',
    },
    {
        label: 'STO',
        timeZone: 'Asia/Tokyo',
    },
    {
        label: 'IST',
        timeZone: 'Asia/Kolkata',
    }
]

const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
}

export const HomePage = () => {
    const classes = useStyles();
    const { svg, path, container } = useLogoStyles();
    return (
        <SearchContextProvider>
            <Page themeId="home">
                <Header title={<WelcomeTitle />} pageTitleOverride="Home">
                    <HeaderWorldClock 
                        clockConfigs={clockConfigs}
                        customTimeFormat={timeFormat}
                    />
                </Header>
                <Content>
                    <Grid container justifyContent="center" spacing={2}>
                        <HomePageCompanyLogo 
                            className={container}
                            logo={<TemplateBackstageLogo classes={{ svg, path }} />}
                        />
                        <Grid container item xs={12} justifyContent="center">
                            <HomePageSearchBar 
                                InputProps={{
                                    classes: {
                                        root: classes.searchBarInput,
                                        notchedOutline: classes.searchBarOutline,
                                    }
                                }}
                                placeholder="Search"
                            />
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} md={6}>
                                <HomePageTopVisited />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <HomePageRecentlyVisited />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={7}>
                                <HomePageStarredEntities />
                            </Grid>
                            <Grid item xs={5}>
                                <HomePageToolkit tools={tools} />
                            </Grid>
                        </Grid>
                        
                        
                    </Grid>
                </Content>
            </Page>
        </SearchContextProvider>
    )
}