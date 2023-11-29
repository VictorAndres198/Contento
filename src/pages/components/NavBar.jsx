import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; // Asegúrate de importar el objeto `auth` de tu archivo de configuración de Firebase

import Login from "./login";

import User from '../img/user.svg';
import Contento from '../img/ContentoLogo.png';
import LogoB from '../img/LogoB.png';

// profile menu component
const profileMenuItems = [
  {
    label: "Mi Perfil",
    icon: UserCircleIcon,
  },
  {
    label: "Editar Perfil",
    icon: Cog6ToothIcon,
  },
  {
    label: "Bandeja de Entrada",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Ayuda",
    icon: LifebuoyIcon,
  },
];
 
function ProfileMenu({ setIsNavOpen }) {

  const [user] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = React.useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsNavOpen(false); 
  };
  
  const toggleIsNavOpen = () => {
    setIsMenuOpen(false);
    setIsNavOpen(false);
    setIsLoginFormOpen(false);
  };

  const closeMenuAndLoginForm = () => {
    setIsNavOpen(false);
    setIsLoginFormOpen(false);
  };

  const toggleLoginForm = () => {
    setTimeout(() => {
      setIsLoginFormOpen((prev) => !prev);
      closeMenu(); // Cierra el menú después del retraso
    }, 50);
  };

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
    closeMenu();
  };

  React.useEffect(() => {
    if (isLoginFormOpen) {
      closeMenu();
    }
  }, [isLoginFormOpen]);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto hover:bg-gray-100"
        >
          {user && user.photoURL ? (
            <Avatar
              variant="circular"
              size="sm"
              alt="Foto perfil"
              className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              src={user.photoURL}
            />
          ) : (
            <Avatar
              variant="circular"
              size="sm"
              alt="Foto perfil"
              className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              src={User}
            />
          )}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="shadow-xl shadow-sky-400/10 z-20">
        {user ? (
          <>
            {profileMenuItems.map(({ label, icon }, index) => (
              <MenuItem
                key={label}
                className={`flex items-center gap-2 rounded p-1 px-3 pr-12 text-slate-500 hover:text-slate-800 font-normal hover:bg-gray-100`}
              >
                {React.createElement(icon, { className: `h-4 w-4 text-slate-500` })}
                <Typography
                  as="span"
                  variant="small"
                  className={`font-normal text-lg text-slate-500`}
                >
                  {label}
                </Typography>
              </MenuItem>
            ))}
            <MenuItem
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded p-1 px-3 pr-12 text-slate-500 hover:text-slate-800 font-normal hover:bg-gray-100"
            >
              <PowerIcon className={`h-4 w-4 text-red-600 `} strokeWidth={2} />
              <Typography
                as="span"
                variant="small"
                className="font-normal text-lg text-red-600"
              >
                Cerrar Sesión
              </Typography>
            </MenuItem>
          </>
        ) : (
          // Elemento del menú para el usuario no autenticado
          <MenuItem
            onClick={() => {
              closeMenu();
              toggleLoginForm();
            }}
            className="flex items-center gap-2 rounded p-1 px-3 pr-12 text-slate-500 hover:text-slate-800 font-normal hover:bg-gray-100"
          >
            <RocketLaunchIcon className={`h-4 w-4 text-green-500`} strokeWidth={2} />
            <Typography
              as="span"
              variant="small"
              className="font-normal text-lg text-green-500"
            >
              Iniciar Sesión
            </Typography>
          </MenuItem>
        )}
      </MenuList>
      {isLoginFormOpen && <Login />}
    </Menu>
  );
}
 
// nav list menu
const navListMenuItems = [
  {
    title: "Preguntas Frecuentes",
    description:
      "Encuentra información útil para aclarar tus dudas rápidamente.",
    to: "/PreguntaFrecuente",
  },
  {
    title: "Contáctanos",
    description:
      "Aquí encontrarás información de contacto y un formulario de contacto para que puedas comunicarte con nosotros.",
    to: "/Contactanos",
  },
  {
    title: "Nosotros",
    description:
      "Descubre quiénes somos, cuál es nuestra misión y visión, y qué nos impulsa a brindarte servicios de salud mental de alta calidad.",
    to: "/Nosotros",    
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(({ title, description, to }) => (
    <Link to={to} key={title}>
      <MenuItem className="hover:bg-gray-100 p-3 ">
        <Typography className="mb-1 font-bold text-left text-slate-800 text-xl">
          {title}
        </Typography>
        <Typography className="font-normal text-gray-600 text-sm text-left">
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="span" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 text-slate-800 lg:flex lg:rounded-full hover:bg-gray-100">
              <Square3Stack3DIcon className="h-[40px] w-[18px]" />Páginas{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid text-slate-800 shadow-xl shadow-sky-400/20 z-20">
          <Card
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md bg-gradient-to-r from-sky-600 to-cyan-800"
          >
            <img alt="LogoContento" className="p-3" src={LogoB}></img>
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1 text-slate-800">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 hover:bg-gray-100 text-slate-800 lg:hidden h-10">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{""}
      </MenuItem>
      <ul className="flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "Cuenta",
    icon: UserCircleIcon,
  },
  {
    label: "Productos",
    icon: CubeTransparentIcon,
  },
  {
    label: "Documentos",
    icon: CodeBracketSquareIcon,
  },
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu/>
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          
      {label === "Productos" ? (
        <Link to="/Productos">        
          <MenuItem className="flex items-center gap-2 lg:rounded-full hover:bg-gray-100 text-slate-800">
            {React.createElement(icon, { className: "h-10 w-[18px]" })}{""}
            {label}
          </MenuItem>
        </Link>
        )
        : (
          <MenuItem as="span" href="#" className="flex items-center gap-2 lg:rounded-full hover:bg-gray-100 text-slate-800">
            {React.createElement(icon, { className: "h-10 w-[18px]" })}
            {label}
          </MenuItem>
        )}
        </Typography>
      ))}
    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = React.useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen((prev) => !prev);
    setIsLoginFormOpen(false); 
  };

  const closeMenuAndLoginForm = () => {
    setIsNavOpen(false);
    setIsLoginFormOpen(false);
  };

  const handleToggleLoginForm = () => {
    setTimeout(() => {
      setIsLoginFormOpen((prev) => !prev);
      closeMenu(); // Cierra el menú después del retraso
    }, 50);
    toggleLoginForm(); // Llama a la función pasada como prop
  };
 
  return (
    <>
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 mt-3 shadow-xl shadow-sky-400/10 sticky top-0 
    bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80 border border-gray-100 z-10">
      <div className="relative mx-auto flex items-center text-slate-800">
        <Typography
          as="span"
          href="#"
          className="mr-4 ml-2 cursor-pointer font-medium text-xl z-20"
        >
          <Link to="/">
          <img className="h-10 w-30" src={Contento} alt="Logo"/>
          </Link>
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block z-20">
          <NavList />
        </div>
        <IconButton
          size="lg"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen} // Fix: Remove the extra onClick property
          className="ml-auto mr-1 pt-1 lg:hidden hover:bg-gray-100 rounded-lg flex justify-center text-slate-500 h-9 w-9"
        >
          <Bars2Icon className="h-7 w-7 z-20"/>
        </IconButton>
        <ProfileMenu 
          setIsNavOpen={setIsNavOpen} 
          isLoginFormOpen={isLoginFormOpen} 
          toggleLoginForm={handleToggleLoginForm} 
        />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll z-20">
        <NavList/>
      </Collapse>
      {isLoginFormOpen && <Login handleToggleLogin={closeMenuAndLoginForm} />}
    </Navbar>     
    </>
  );
}