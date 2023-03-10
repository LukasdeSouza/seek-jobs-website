import React, { useContext } from 'react'

import RootStoreContext from '../../../store/rootStore'

import { AppBar, Link, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Logo from '../../../assets/new-design-logo.svg'
import '../../../styles/global.css'

const AppBarNavigation = () => {
  const navigate = useNavigate()

  const { userStore } = useContext(RootStoreContext)

  return (
    <AppBar
      elevation={0}
      sx={{
        position: "static",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: 2,
        backgroundColor: 'transparent',
      }}
    >
      <img src={Logo} alt="Logo"
        onClick={() => navigate('/')}
        style={{ width: '70px', marginLeft: '91px', marginRight: '91px' }}
      />
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-300)'}
          fontSize={14}
          ml={2}
          mr={2}
        >
          Vagas
        </Link>
        <Link
          href="/register-jobs"
          underline="hover"
          color={'var(--white-scale-300)'}
          fontSize={14}
          ml={2}
          mr={2}
        >  Anunciar Vaga
        </Link>
        <Link
          href="/our-team"
          underline="hover"
          color={'var(--white-scale-300)'}
          fontSize={14}
          ml={2}
          mr={2}
        > Nossa Equipe
        </Link>
        {/* <Link
          href="/register-cv"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        >  Cadastrar CV
        </Link> */}
        {/* {localStorage.getItem('token') === null
          &&
          <Link
            href="/login"
            underline="hover"
            color={'var(--white-scale-400)'}
            fontSize={14}
            ml={2}
            mr={2}
          >
            Login
          </Link>
        } */}
        {/* <Link
          href="/"
          underline="hover"
          color={'var(--white-scale-400)'}
          fontSize={14}
          ml={2}
          mr={2}
        >
          Perfil
        </Link> */}
      </Stack>
    </AppBar>
  );
}

export default AppBarNavigation

