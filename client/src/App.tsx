import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useAppSelector } from "@/hooks";
import { themeSettings } from "@/theme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

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
						<Route>
							<Route element={<></>} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}
export default App;
