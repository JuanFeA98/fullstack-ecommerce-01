const ShowMenu = ()=>{
    const NavBar = document.getElementById('NavBar');
    const Menu = document.getElementById('MenuIcon');

    NavBar.classList.toggle('NavBar__Active');
    Menu.classList.toggle('Header__Menu--close');
}

export default ShowMenu