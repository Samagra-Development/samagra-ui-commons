import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { theme } from 'config-mui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Turborepo Boilerplate - App</title>
				<meta name="description" content="Turborepo boilerplate." />

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box textAlign="center" mt={3} mb={5}>
						<Typography variant="title1">Turborepo Boilerplate - App</Typography>
					</Box>
					{<Component {...pageProps} />}
				</ThemeProvider>
			</>
		</>
	);
};

export default App;
