import {
	LightModeOutlined,
	DarkModeOutlined,
	Menu as MenuIcon,
	Search,
	SettingsOutlined,
	ArrowDropDownOutlined,
} from "@mui/icons-material";
import "@/types/MUIStyles";
import {
	AppBar,
	Button,
	Box,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
	useTheme,
	Menu,
	MenuItem,
} from "@mui/material";
import FlexBetween from "@components/FlexBetween";
import { setMode } from "@/state";
import profileImage from "@/assets/profile.jpeg";
import { useAppDispatch } from "@/hooks";
import { MouseEvent, useState } from "react";
import { UserResponse } from "@/types/User";

type Props = {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (value: boolean) => void;
	user?: UserResponse;
};

function Navbar({ isSidebarOpen, setIsSidebarOpen, user }: Props) {
	const dispatch = useAppDispatch();
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState<Element | null>(null);
	const isOpen = Boolean(anchorEl);
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => setAnchorEl(null);

	return (
		<AppBar
			sx={{
				position: "static",
				background: "none",
				boxShadow: "none",
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				{/* LEFT SIDE */}
				<FlexBetween>
					<IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
						<MenuIcon />
					</IconButton>
					<FlexBetween
						sx={{
							backgroundColor: theme.palette.background.paper,
							borderRadius: "9px",
							gap: "3rem",
							p: "0.1rem 1.5rem",
						}}
					>
						<InputBase placeholder="Search..." />
						<IconButton>
							<Search />
						</IconButton>
					</FlexBetween>
				</FlexBetween>

				{/* RIGHT SIDE */}
				<FlexBetween gap="1.5rem">
					<IconButton onClick={() => dispatch(setMode())}>
						{theme.palette.mode === "dark" ? (
							<DarkModeOutlined sx={{ fontSize: "25px" }} />
						) : (
							<LightModeOutlined sx={{ fontSize: "25px" }} />
						)}
					</IconButton>
					<IconButton>
						<SettingsOutlined sx={{ fontSize: "25px" }} />
					</IconButton>

					<FlexBetween>
						<Button
							onClick={handleClick}
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								textTransform: "none",
								gap: "1rem",
							}}
						>
							<Box
								component="img"
								alt="profile"
								src={profileImage}
								height="32px"
								width="32px"
								borderRadius="50%"
								sx={{ objectFit: "cover" }}
							/>
							<Box textAlign="left">
								<Typography
									fontWeight="bold"
									fontSize="0.85rem"
									sx={{ color: theme.palette.secondary?.[100] }}
								>
									{user?.name}
								</Typography>
								<Typography
									fontSize="0.75rem"
									sx={{ color: theme.palette.secondary[200] }}
								>
									{user?.occupation}
								</Typography>
							</Box>
							<ArrowDropDownOutlined
								sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
							/>
						</Button>
						<Menu
							anchorEl={anchorEl}
							open={isOpen}
							onClose={handleClose}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
						>
							<MenuItem onClick={handleClose}>Log Out</MenuItem>
						</Menu>
					</FlexBetween>
				</FlexBetween>
			</Toolbar>
		</AppBar>
	);
}
export default Navbar;
