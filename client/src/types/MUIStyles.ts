import { PaletteColorOptions } from "@mui/material/styles";
import { ColorPartial, PaletteTonalOffset } from "@mui/material/styles/createPalette";

declare module "@mui/material" {
	interface Color {
		0: string;
		10: string;
		1000: string;
	}

	interface PaletteOptions {
		[key: string]:
			| string
			| number
			| PaletteColorOptions
			| PaletteMode
			| PaletteTonalOffset
			| Partial<any>
			| ColorPartial
			| Color;
	}

	interface SimplePaletteColorOptions {
		// TO-DO: Fix any type
		[code: string]: any;
	}
}
