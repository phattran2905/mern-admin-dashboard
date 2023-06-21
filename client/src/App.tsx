import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useAppSelector } from "@/hooks";
import { themeSettings } from "@/theme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "@scenes/layout";
import Dashboard from "@scenes/dashboard";

type Props = {};
function App({}: Props) {
	const mode = useAppSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route
								path="/"
								element={
									<Navigate
										to={"/dashboard"}
										replace
									/>
								}
							/>
							<Route
								path="/dashboard"
								element={<Dashboard />}
							/>
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}
export default App;
