import {AppBar , Toolbar , styled} from '@mui/material';

import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
	background:#fff;
`

const MenuIcon = styled(Menu)`
	color:#000;
	cursor:pointer
`

const Image = styled('img')({
	height:55,
	margin:'auto',

})


const Header = () => {

	const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
	return (
	<StyledHeader position='static'>
		<Toolbar>
			<MenuIcon />
			<Image src={url} alt='logo' />
		</Toolbar>
	</StyledHeader>
	
	)
};
export default Header;
