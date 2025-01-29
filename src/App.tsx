import React from 'react';
import { Card, Header, CustomThemeProvider } from 'pdjenera-component-library'
import { AppContainer, CardContainer } from './App.styled.ts'
import { theme } from './Theme.tsx';

const headerIcon = <img src='/inbev-logo.png' alt="logo" className="App-logo" />
const onLogin = () => console.log('User logged in')
const onLogout = () => console.log('User logged in')
const onCreateAccount = () => console.log('User created an account')

const CardContent = [{
  image: <img src='/budweiser.png' alt="logo" className="App-logo" />,
  title: 'Budweiser',
  description: 'King of beers',
  eyebrow: 'Beer',
  onClick: () => console.log('Card Clicked')
},{
  image: <img src='/kona.png' alt="logo" className="App-logo" />,
  title: 'Kona big wave',
  description: 'Their Kona Big Wave Golden Ale rolls in with aromas of citrus, toasted nuts and grain, crests with flavours of banana, pineapple and a hint of pine then finishes with moderately bitter citrus notes.',
  eyebrow: 'Beer',
  onClick: () => console.log('Card Clicked')
},{
  image: <img src='/bud-light.png' alt="logo" className="App-logo" />,
  title: 'Bud Light',
  description: 'Refreshing taste that\'s easy to enjoy.',
  eyebrow: 'Beer',
  onClick: () => console.log('Card Clicked')
}]

const App = () => {
  return (
    <CustomThemeProvider theme={theme}>
      <AppContainer>
        <Header 
          icon={headerIcon}
          onLogin = {onLogin}
          onLogout = {onLogout}
          onCreateAccount = {onCreateAccount}
        />
        <CardContainer>
          { CardContent.map((card, index) => (
          <Card 
              image={card.image}
              title={card.title}
              description={card.description}
              eyebrow={card.eyebrow}
              onClick={card.onClick}
            />
          ))}
        </CardContainer>
      </AppContainer>
    </CustomThemeProvider>
  );
}

export default App;
