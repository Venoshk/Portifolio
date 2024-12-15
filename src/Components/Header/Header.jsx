import Logo from '../../assets/image/2.png';
// import { Button } from '../Button/Button';
// import { NavList } from '../NavList/NavList';


import StyleHeader from './Header.module.css'
export const Header = () => {
  return (
    <header className={StyleHeader.header}>
        <img src={Logo} alt="" />
        <nav>
          {/* <ul className={StyleHeader.ul} >
                <NavList link={'/'}>
                    Home
               </NavList>

               <NavList link={'/project'}>
                    Projeto
               </NavList>

               <NavList link={'/about'} >
                    Sobre
               </NavList>

               <NavList link={'/Projetos'}>
                    Contato
               </NavList>
          </ul> */}
         
         </nav>  
{/*          
          <Button type={'button'}>
               Fale comigo
          </Button> */}
    </header>
  )
}
